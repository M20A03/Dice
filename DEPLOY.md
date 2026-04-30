# Deployment Guide: Firebase + Render

This guide walks you through deploying the React frontend to Firebase Hosting and the Flask API to Render.

## Prerequisites

- Firebase project created and credentials in `frontend/.env.local`
- Node.js and npm installed
- Python and pip available (for testing)
- Git repository (optional but recommended)

---

## Part 1: Deploy Backend to Render

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub or email
3. Create a new account

### Step 2: Connect Repository
1. In Render dashboard, click **New +** → **Web Service**
2. Select **Deploy from Git repository**
3. Connect your GitHub account and authorize Render
4. Select this repository

### Step 3: Configure Service
1. **Name**: `telegram-dice-api` (or any name)
2. **Environment**: `Python 3`
3. **Build Command**: `pip install -r requirements.txt`
4. **Start Command**: `gunicorn -w 4 -b 0.0.0.0:$PORT app:app`
5. **Plan**: Free (includes 750 free hours/month)
6. **Instance**: Default

### Step 4: Add Environment Variables
In Render dashboard under "Environment":
```
FLASK_ENV=production
```

### Step 5: Deploy
Click **Create Web Service** and wait for deployment (~2-3 minutes).

Once deployed, you'll get a URL like:
```
https://telegram-dice-api.onrender.com
```

**Save this URL** — you'll need it for the frontend.

---

## Part 2: Update Frontend with Backend URL

### Step 1: Edit Production Environment
Edit `frontend/.env.production`:

```
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
VITE_API_BASE_URL=https://telegram-dice-api.onrender.com
```

Replace `VITE_API_BASE_URL` with your **actual Render URL**.

---

## Part 3: Deploy Frontend to Firebase Hosting

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```

This opens a browser to authenticate with your Google account.

### Step 3: Initialize Firebase (First Time Only)
If you haven't already run `firebase init`:

```bash
firebase init hosting
```

Follow the prompts:
- **Project**: Select your Firebase project
- **Public directory**: `frontend/dist`
- **Single-page app rewrite**: `Yes`
- **Overwrite index.html**: `No`

### Step 4: Build Frontend
```bash
cd frontend
npm run build
cd ..
```

This creates `frontend/dist/` with production files.

### Step 5: Deploy to Firebase
```bash
firebase deploy --only hosting
```

Once complete, you'll get a URL like:
```
https://your-project-id.web.app
https://your-project-id.firebaseapp.com
```

---

## Step 4: Test Your Deployment

1. Visit your Firebase hosting URL: `https://your-project-id.web.app`
2. You should see the login page
3. Log in with your Telegram credentials
4. The app should connect to your Render backend API

---

## Troubleshooting

### Backend not responding
- Check Render dashboard to ensure service is running
- Wait 2-3 minutes after deployment for cold start
- Verify `VITE_API_BASE_URL` in frontend matches your Render URL

### CORS errors
- Backend (app.py) needs CORS enabled
- Add to Flask app if needed:
  ```python
  from flask_cors import CORS
  CORS(app)
  ```

### Firebase deployment fails
- Ensure `npm run build` succeeded locally
- Check that `frontend/dist/` folder exists
- Run `npm run build` again and retry

### Frontend can't find API
- Verify `.env.production` has correct `VITE_API_BASE_URL`
- Check browser console (F12) for actual API requests
- Ensure backend is deployed and running on Render

---

## Updates & Redeployment

### Update Backend
1. Push changes to GitHub
2. Render auto-redeploys (if connected via GitHub)
3. Or manually redeploy from Render dashboard

### Update Frontend
```bash
# Edit code, then:
cd frontend
npm run build
cd ..
firebase deploy --only hosting
```

---

## Monitoring

### Render Dashboard
- Check logs: Services → Your service → Logs
- Monitor performance and errors
- View deployed version and deployment history

### Firebase Console
- Hosting tab shows deployment history
- View build times and file sizes
- Monitor traffic and performance

---

## Next Steps (Optional)

- Enable Firestore database for persistent data storage
- Add Firebase Authentication for user login
- Set up custom domain (Firebase Hosting allows custom domains)
- Configure automated backups and monitoring alerts

---

For more help:
- [Render Documentation](https://render.com/docs)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)
- [FIREBASE_SETUP.md](FIREBASE_SETUP.md)
