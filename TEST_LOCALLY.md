# Test Telegram Setup Locally with dice_trick.py

This is a standalone script that tests your Telegram API without needing the web dashboard.

## Setup

1. Make sure you're in the repo directory:
   ```bash
   cd /path/to/Telegram-Dice-main
   ```

2. Activate your venv:
   ```bash
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Edit dice_trick.py

Open `dice_trick.py` and update these 5 lines at the top:

```python
API_ID = 38456971                    # Get from my.telegram.org
API_HASH = '325e7561523444f420aab42f81b46fbf'  # Get from my.telegram.org
PHONE = '+919835139865'              # Your phone with country code
GROUP_LINK = 'https://t.me/+TlZAt5iI_n01NTM1'  # Your group link
DESIRED_NUMBER = 6                   # What number you want (1-6)
```

Replace with **your actual** values from Telegram.

## Run It

```bash
python dice_trick.py
```

## What Happens

1. The script connects to Telegram and asks for an OTP
2. Check your Telegram app for the code
3. Paste the code in the terminal
4. The script starts rolling dice until it gets your target number
5. When it succeeds, it stops

## If It Works

Your Telegram setup is correct! Then:
1. Deploy the backend to Render (see RENDER_DEPLOY_STEPS.md)
2. Use the web dashboard to control it from anywhere

## If It Fails

- Check that API ID and API Hash are correct
- Make sure the phone number has the `+` and country code
- Verify the group link is correct and you have access to it
- Check the error message in the terminal for clues
