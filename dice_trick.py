"""
🎲 DICE CONTROL - PERSONAL ACCOUNT
Rolls dice until it gets your desired number
⚠️ WARNING: Failed dice WILL flash in chat
"""

from telethon import TelegramClient, errors
from telethon.tl.types import InputMediaDice
import asyncio
import time
import sys

# ============================================
# EDIT THESE 5 LINES ONLY
# ============================================

API_ID = 38456971                    # Get from my.telegram.org
API_HASH = '325e7561523444f420aab42f81b46fbf'  # Get from my.telegram.org
PHONE = '+919835139865'              # Your phone with country code
GROUP_LINK = 'https://t.me/+TlZAt5iI_n01NTM1'  # Your group link
DESIRED_NUMBER = 6                   # What number you want (1-6)

# ============================================
# DON'T EDIT BELOW THIS LINE
# ============================================

async def roll_dice(client, chat_id, target):
    attempts = 0
    start = time.time()
    
    print(f"🎲 Rolling for {target}...")
    print("⚠️ Failed dice WILL flash in chat\n")
    
    while True:
        attempts += 1
        try:
            msg = await client.send_message(chat_id, file=InputMediaDice('🎲'))
            result = msg.media.value
            
            if result == target:
                elapsed = time.time() - start
                print(f"\n✅ Got {target} after {attempts} attempts ({attempts/elapsed:.1f}/sec)")
                return
            
            await client.delete_messages(chat_id, [msg.id])
            await asyncio.sleep(0.02)
            
            if attempts % 20 == 0:
                print(f"   Attempts: {attempts}", end="\r")
                
        except errors.FloodWaitError as e:
            print(f"\n⏸️ Waiting {e.seconds}s...")
            await asyncio.sleep(e.seconds)
        except Exception as e:
            print(f"\n⚠️ Error: {e}")
            await asyncio.sleep(0.05)

async def main():
    print("=" * 45)
    print("🎲 DICE CONTROL")
    print("=" * 45)
    print(f"Target: {DESIRED_NUMBER}")
    print("⚠️ Deletions are visible to others")
    print("=" * 45)
    
    client = TelegramClient('dice_session', API_ID, API_HASH)
    
    try:
        await client.start(PHONE)
        print("✅ Connected\n")
        chat = await client.get_entity(GROUP_LINK)
        await roll_dice(client, chat, DESIRED_NUMBER)
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        await client.disconnect()
        print("\n👋 Done")

if __name__ == "__main__":
    asyncio.run(main())