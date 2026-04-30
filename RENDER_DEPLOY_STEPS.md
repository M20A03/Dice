# Deploy Backend to Render (Step-by-Step)

## Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Authorize Render to access your GitHub account

## Step 2: Create Web Service
1. Click **New +** → **Web Service**
2. Click **Connect Repository** 
3. Search for `Dice` and select `M20A03/Dice`
4. Fill in the form:
   - **Name**: `telegram-dice-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn -w 4 -b 0.0.0.0:$PORT app:app`
   - **Plan**: Free (750 free hours/month)
5. Click **Create Web Service**

## Step 3: Wait for Deploy
- Wait 2-3 minutes for the build and deploy to finish
- You'll see a URL like: `https://telegram-dice-api.onrender.com`

## Step 4: Test the Backend
1. Visit `https://telegram-dice-api.onrender.com` in your browser
2. You should see a JSON message: `{"status": "Telegram Dice Bot API", ...}`
3. If it works, your backend is live!

## Step 5: Get the Deploy Hook URL (for GitHub Actions)
1. In Render dashboard, click your service
2. Go to **Settings** → **Deploy Hook**
3. Copy the URL
4. Go to GitHub repo → **Settings** → **Secrets and variables** → **Actions**
5. Click **New repository secret**
   - **Name**: `RENDER_DEPLOY_HOOK_URL`
   - **Value**: Paste the deploy hook URL
6. Click **Add secret**

## Now Your OTP Flow Will Work
- The frontend will now connect to the real backend
- When you save Telegram credentials, the backend will send an OTP
- The OTP form will appear below the credentials form
- Enter the code you receive on Telegram and click "Verify OTP"

## Troubleshooting
- If the backend shows "build failed": Check Render logs
- If OTP still doesn't appear: Check browser console (F12) for errors
- If "Failed to fetch" persists: Clear browser cache and reload

---

**Once this is done, test the full flow:**
1. Fill in API ID, API Hash, Phone, Group Link
2. Click "Save Telegram credentials"
3. An OTP should be sent to your Telegram app
4. Fill in the OTP field that appears
5. Click "Verify OTP"
6. You should see "Telegram connected" in the status
7. Click "Start run" to begin the dice rolling
