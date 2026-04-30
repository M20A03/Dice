from flask import Flask, jsonify, request, session
from flask_cors import CORS
from telethon import TelegramClient, errors
from telethon.errors import SessionPasswordNeededError
from telethon.tl.types import InputMediaDice
import asyncio
import threading
import os
from datetime import datetime
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_hex(32)  # For session management

# Enable CORS for frontend communication
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Optional: Load from .env if available (for deployment servers)
from dotenv import load_dotenv
load_dotenv()

ALLOWED_DICE = {
    '🎲': 6,
}

# State management - per user sessions
user_sessions = {}  # {session_id: {client, state, thread}}

def get_user_state(user_id):
    """Get or create user state"""
    if user_id not in user_sessions:
        user_sessions[user_id] = {
            'running': False,
            'attempts': 0,
            'current_roll': 0,
            'status': 'Idle',
            'logs': [],
            'desired_number': 3,
            'credentials': None,
            'telegram_connected': False,
            'phone_code_hash': None,
            'client': None,
            'thread': None
        }
    return user_sessions[user_id]

# Telegram client
client = None

# ============================================
# Helper Functions
# ============================================
def get_user_id():
    """Get current user ID from session"""
    if 'user_id' not in session:
        session['user_id'] = secrets.token_hex(8)
    return session['user_id']

def add_log(user_id, message):
    """Add log message to user's state"""
    user_state = get_user_state(user_id)
    timestamp = datetime.now().strftime('%H:%M:%S')
    log_entry = f"[{timestamp}] {message}"
    user_state['logs'].append(log_entry)
    # Keep last 100 logs
    if len(user_state['logs']) > 100:
        user_state['logs'] = user_state['logs'][-100:]
    print(f"[{user_id}] {log_entry}")

async def initialize_client(user_id, api_id, api_hash, phone, otp_code=None, phone_code_hash=None):
    """Initialize Telegram client for user"""
    user_state = get_user_state(user_id)
    try:
        client = TelegramClient(f'dice_session_{user_id}', api_id, api_hash)
        await client.connect()

        if otp_code:
            await client.sign_in(phone=phone, code=otp_code, phone_code_hash=phone_code_hash)
            user_state['telegram_connected'] = True
            user_state['phone_code_hash'] = None
            add_log(user_id, "✅ Connected to Telegram")
        else:
            sent_code = await client.send_code_request(phone)
            user_state['phone_code_hash'] = sent_code.phone_code_hash
            add_log(user_id, "📩 OTP sent to your Telegram number")

        user_state['client'] = client
        return client
    except SessionPasswordNeededError:
        add_log(user_id, "⚠️ Telegram requires a password for two-step verification")
        return None
    except Exception as e:
        add_log(user_id, f"❌ Failed to connect: {e}")
        return None

async def dice_trick_async(user_id, client, chat_id, desired_number, dice_emoji='🎲'):
    """
    Sends dice messages repeatedly until it gets the desired number
    """
    user_state = get_user_state(user_id)
    user_state['running'] = True
    user_state['attempts'] = 0
    user_state['status'] = 'Running...'
    user_state['desired_number'] = desired_number
    user_state['current_dice'] = dice_emoji
    
    try:
        while user_state['running']:
            user_state['attempts'] += 1
            
            try:
                # Send a dice message
                dice_msg = await client.send_message(
                    chat_id, 
                    file=InputMediaDice(dice_emoji)
                )
                
                await asyncio.sleep(0.5)
                
                # Get the dice result
                if hasattr(dice_msg, 'media') and dice_msg.media:
                    result = dice_msg.media.value
                else:
                    await asyncio.sleep(0.3)
                    fetched_msg = await client.get_messages(chat_id, ids=dice_msg.id)
                    result = fetched_msg.media.value
                
                user_state['current_roll'] = result
                add_log(user_id, f"Attempt {user_state['attempts']}: Rolled {result}")
                
                if result == desired_number:
                    add_log(user_id, f"✅ SUCCESS! Kept the dice (rolled {result})")
                    user_state['status'] = f'✅ Success! Rolled {result}'
                    user_state['running'] = False
                    break
                else:
                    add_log(user_id, f"❌ Failed ({result} != {desired_number}) - Deleting...")
                    await client.delete_messages(chat_id, [dice_msg.id])
                    await asyncio.sleep(0.5)
                    
            except errors.FloodWaitError as e:
                add_log(user_id, f"⚠️ Rate limited! Waiting {e.seconds} seconds...")
                await asyncio.sleep(e.seconds)
            except Exception as e:
                add_log(user_id, f"⚠️ Error: {e}")
                await asyncio.sleep(1)
    
    except Exception as e:
        add_log(user_id, f"❌ Bot error: {e}")
        user_state['status'] = f'Error: {e}'
    finally:
        user_state['running'] = False

def run_bot_thread(user_id, client, chat_id, desired_number):
    """Run bot in a separate thread"""
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    try:
        loop.run_until_complete(dice_trick_async(user_id, client, chat_id, desired_number))
    except Exception as e:
        add_log(user_id, f"❌ Error: {e}")
    finally:
        loop.close()

# ============================================
# Flask Routes
# ============================================
# ============================================
# Flask Routes
# ============================================
@app.route('/')
def index():
    """API root - React frontend handles the UI"""
    return jsonify({
        'status': 'Telegram Dice Bot API',
        'version': '1.0',
        'message': 'Frontend is served separately. Use /api/* endpoints.'
    })

@app.route('/api/login', methods=['POST'])
def login():
    """Save user credentials and request a Telegram OTP"""
    user_id = get_user_id()
    user_state = get_user_state(user_id)
    data = request.json
    
    api_id = data.get('api_id', '').strip()
    api_hash = data.get('api_hash', '').strip()
    phone = data.get('phone', '').strip()
    group_link = data.get('group_link', '').strip()
    
    # Validate inputs
    if not all([api_id, api_hash, phone, group_link]):
        return jsonify({'error': 'All fields are required'}), 400
    
    try:
        api_id = int(api_id)
    except ValueError:
        return jsonify({'error': 'API ID must be a number'}), 400
    
    if not phone.startswith('+'):
        return jsonify({'error': 'Phone must start with +'}), 400
    
    # Store credentials in session
    user_state['credentials'] = {
        'api_id': api_id,
        'api_hash': api_hash,
        'phone': phone,
        'group_link': group_link
    }

    user_state['telegram_connected'] = False
    user_state['phone_code_hash'] = None

    try:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        temp_client = TelegramClient(f'dice_session_{user_id}', api_id, api_hash)
        loop.run_until_complete(temp_client.connect())
        sent_code = loop.run_until_complete(temp_client.send_code_request(phone))
        user_state['phone_code_hash'] = sent_code.phone_code_hash
        loop.run_until_complete(temp_client.disconnect())
        add_log(user_id, "📩 OTP sent to your Telegram number")
    except SessionPasswordNeededError:
        user_state['phone_code_hash'] = None
        add_log(user_id, "⚠️ Two-step verification is enabled for this account")
    except Exception as e:
        add_log(user_id, f"❌ Failed to send OTP: {e}")
        return jsonify({'error': f'Credentials saved, but OTP could not be sent: {e}'}), 400
    finally:
        try:
            loop.close()
        except Exception:
            pass
    
    return jsonify({
        'status': 'Credentials saved',
        'otp_sent': True,
        'telegram_connected': user_state['telegram_connected'],
        'user_id': user_id
    })

@app.route('/api/verify-otp', methods=['POST'])
def verify_otp():
    """Verify the Telegram OTP and finish connecting the account"""
    user_id = get_user_id()
    user_state = get_user_state(user_id)

    if not user_state['credentials']:
        return jsonify({'error': 'Save Telegram credentials first'}), 401

    data = request.json or {}
    otp_code = str(data.get('otp_code', '')).strip()

    if not otp_code:
        return jsonify({'error': 'OTP code is required'}), 400

    creds = user_state['credentials']
    if not user_state.get('phone_code_hash'):
        return jsonify({'error': 'OTP was not requested yet. Save credentials again to request a new code.'}), 400

    try:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        client = TelegramClient(f'dice_session_{user_id}', creds['api_id'], creds['api_hash'])
        loop.run_until_complete(client.connect())
        loop.run_until_complete(client.sign_in(
            phone=creds['phone'],
            code=otp_code,
            phone_code_hash=user_state['phone_code_hash']
        ))
        user_state['client'] = client
        user_state['telegram_connected'] = True
        user_state['phone_code_hash'] = None
        add_log(user_id, "✅ Telegram OTP verified successfully")
        return jsonify({'status': 'Telegram connected'})
    except SessionPasswordNeededError:
        return jsonify({'error': 'Two-step verification password is enabled. This app currently supports OTP only.'}), 400
    except Exception as e:
        add_log(user_id, f"❌ OTP verification failed: {e}")
        return jsonify({'error': f'OTP verification failed: {e}'}), 400
    finally:
        try:
            loop.close()
        except Exception:
            pass

@app.route('/api/logout', methods=['POST'])
def logout():
    """Clear user credentials"""
    user_id = get_user_id()
    if user_id in user_sessions:
        user_state = user_sessions[user_id]
        # Stop bot if running
        user_state['running'] = False
        # Close client if exists
        if user_state['client']:
            try:
                loop = asyncio.new_event_loop()
                asyncio.set_event_loop(loop)
                loop.run_until_complete(user_state['client'].disconnect())
                loop.close()
            except:
                pass
        # Clear credentials
        user_state['credentials'] = None
        user_state['logs'] = []
    
    return jsonify({'status': 'Logged out'})

@app.route('/api/status')
def get_status():
    """Get current bot status"""
    user_id = get_user_id()
    user_state = get_user_state(user_id)

    if not user_state['credentials']:
        return jsonify({'error': 'Not logged in'}), 401

    safe_state = {
        key: value
        for key, value in user_state.items()
        if key not in {'client', 'thread'}
    }
    safe_state['telegram_connected'] = bool(user_state.get('telegram_connected'))
    safe_state['telegram_status'] = 'connected' if user_state.get('telegram_connected') else 'otp_pending'
    return jsonify(safe_state)

@app.route('/api/start', methods=['POST'])
def start_bot():
    """Start the dice trick"""
    user_id = get_user_id()
    user_state = get_user_state(user_id)
    
    if not user_state['credentials']:
        return jsonify({'error': 'Not logged in'}), 401
    
    if user_state['running']:
        return jsonify({'error': 'Bot already running'}), 400

    if not user_state.get('telegram_connected'):
        return jsonify({'error': 'Telegram is not connected yet. Verify the OTP first.'}), 400
    
    data = request.json or {}
    desired_number = int(data.get('desired_number', 3))
    dice_emoji = data.get('dice_emoji', '🎲')
    max_value = ALLOWED_DICE.get(dice_emoji)

    if max_value is None:
        return jsonify({'error': 'Unsupported dice type'}), 400

    if desired_number < 1 or desired_number > max_value:
        return jsonify({'error': f'Number must be between 1 and {max_value} for {dice_emoji}'}), 400
    
    user_state['attempts'] = 0
    user_state['logs'] = []
    add_log(user_id, f"🎲 Starting bot... (Target: {desired_number}, Dice: {dice_emoji})")

    # Initialize and start bot
    def init_and_run():
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        
        try:
            creds = user_state['credentials']
            client = user_state.get('client')

            if not client:
                client = TelegramClient(f'dice_session_{user_id}', creds['api_id'], creds['api_hash'])
                loop.run_until_complete(client.connect())
                if not loop.run_until_complete(client.is_user_authorized()):
                    add_log(user_id, "❌ Telegram session is not authorized. Verify the OTP again.")
                    return
                user_state['client'] = client
            
            if not client:
                add_log(user_id, "❌ Failed to connect to Telegram")
                return
            
            # Get chat entity
            chat = loop.run_until_complete(client.get_entity(creds['group_link']))
            add_log(user_id, f"✅ Connected to group: {chat.title if hasattr(chat, 'title') else 'Group'}")
            
            # Run bot
            loop.run_until_complete(dice_trick_async(user_id, client, chat.id, desired_number, dice_emoji))
        except Exception as e:
            add_log(user_id, f"❌ Error: {e}")
        finally:
            try:
                loop.close()
            except:
                pass
    
    thread = threading.Thread(target=init_and_run, daemon=True)
    thread.start()
    user_state['thread'] = thread
    user_state['current_dice'] = dice_emoji
    
    return jsonify({'status': 'Bot started'})

@app.route('/api/stop', methods=['POST'])
def stop_bot():
    """Stop the bot"""
    user_id = get_user_id()
    user_state = get_user_state(user_id)
    
    if not user_state['credentials']:
        return jsonify({'error': 'Not logged in'}), 401
    
    user_state['running'] = False
    add_log(user_id, "⏹️ Bot stopped by user")
    return jsonify({'status': 'Bot stopped'})

@app.route('/api/clear-logs', methods=['POST'])
def clear_logs():
    """Clear logs"""
    user_id = get_user_id()
    user_state = get_user_state(user_id)
    
    if not user_state['credentials']:
        return jsonify({'error': 'Not logged in'}), 401
    
    user_state['logs'] = []
    return jsonify({'status': 'Logs cleared'})

if __name__ == '__main__':
    # In production, use a proper WSGI server like Gunicorn
    # Example: gunicorn -w 4 -b 0.0.0.0:5000 app.py
    app.run(debug=True, host='0.0.0.0', port=5000)
