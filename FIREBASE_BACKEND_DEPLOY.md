# Deploy Backend to Google Cloud Run (Firebase)

## Why Cloud Run?
- Part of Firebase ecosystem (same as Hosting)
- Keeps your Python/Flask code unchanged
- Cheaper than Render ($0.00002500 per vCPU-second)
- Fast deployment (2-3 minutes)
- No vendor lock-in - works with any Docker-compatible service

## Prerequisites
1. Google Cloud project (same one you use for Firebase)
2. gcloud CLI installed locally
3. Docker installed locally

## Step 1: Install gcloud CLI

**On Linux:**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
gcloud init
```

**On macOS:**
```bash
brew install --cask google-cloud-sdk
gcloud init
```

**On Windows:**
- Download from: https://cloud.google.com/sdk/docs/install-sdk
- Run the installer

## Step 2: Authenticate gcloud

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

Replace `YOUR_PROJECT_ID` with your Firebase project ID. Find it in:
- Firebase Console → Project Settings → Project ID
- Example: `dice-control-m` (or similar)

## Step 3: Enable Cloud Run API

```bash
gcloud services enable run.googleapis.com containerregistry.googleapis.com cloudbuild.googleapis.com
```

## Step 4: Deploy to Cloud Run

Run this from the `/home/mayank-raj/Downloads/Telegram-Dice-main` directory:

```bash
gcloud run deploy telegram-dice-api \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --timeout 300
```

This will:
- Build Docker image automatically
- Deploy to Cloud Run
- Show you the URL (like: `https://telegram-dice-api-xxxxx.run.app`)

## Step 5: Update Frontend

Edit `.env.production`:

```env
VITE_API_BASE_URL=https://telegram-dice-api-xxxxx.run.app
```

Replace `xxxxx` with the unique ID from your Cloud Run URL.

Then rebuild and deploy frontend:

```bash
cd frontend
npm run build
cd ..
firebase deploy --only hosting
```

## Step 6: Test

1. Go to https://dice-control-m.web.app
2. Fill in Telegram credentials
3. You should NOT see "Failed to fetch" error anymore
4. OTP should be sent to your Telegram
5. Complete the flow

## Pricing

- First 2 million requests per month: **FREE**
- After that: ~$0.40 per million requests
- With your usage, you'll likely stay in the free tier

## Troubleshooting

**Deployment fails?**
- Check Docker is installed: `docker --version`
- Check gcloud is authenticated: `gcloud auth list`
- Check project is set: `gcloud config get-value project`

**"Failed to fetch" still showing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check .env.production is updated with correct URL
- Run `npm run build` in frontend/

**Function errors?**
- Check logs: `gcloud run logs read telegram-dice-api --limit 50`
- Look for Telegram API errors or network issues

## Optional: Set Up Auto-Deploy with GitHub Actions

Edit `.github/workflows/deploy-backend.yml` and change `RENDER_DEPLOY_HOOK_URL` to use `gcloud run deploy` instead. See the comments in that file for details.

## Redeploy Later

If you update `app.py` or `dice_trick.py`, just run:

```bash
gcloud run deploy telegram-dice-api --source .
```

No need to rebuild Docker manually - gcloud handles it.
