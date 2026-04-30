# Deployment Checklist

Use this checklist to ensure your app is ready to deploy to Firebase + Render.

## Pre-Deployment

- [ ] **Frontend Environment**: 
  - [ ] `frontend/.env.local` has all Firebase credentials
  - [ ] Test locally with `npm run dev` (runs on http://localhost:3000)

- [ ] **Backend Environment**:
  - [ ] `.env.example` has all required variables
  - [ ] Test locally with `python app.py` (runs on http://localhost:5000)
  - [ ] Backend connects to Telegram API successfully

- [ ] **Build Verification**:
  - [ ] Run `npm run build` in `frontend/` — succeeds without errors
  - [ ] `frontend/dist/` folder exists with `index.html`

---

## Deploy Backend to Render

- [ ] **Create Render Account**: https://render.com
- [ ] **Connect GitHub**: Authorize Render to access your repository
- [ ] **Create Web Service**:
  - [ ] Select this repository
  - [ ] Name: `telegram-dice-api` (or your choice)
  - [ ] Environment: Python 3
  - [ ] Build: `pip install -r requirements.txt`
  - [ ] Start: `gunicorn -w 4 -b 0.0.0.0:$PORT app:app`
  - [ ] Plan: Free
- [ ] **Set Environment Variables**: `FLASK_ENV=production`
- [ ] **Deploy**: Click "Create Web Service"
- [ ] **Wait for Deployment**: 2-3 minutes
- [ ] **Get URL**: Copy the URL (e.g., `https://your-service.onrender.com`)
- [ ] **Test Backend**: Visit URL in browser, should see API message

---

## Update Frontend for Production

- [ ] **Edit `frontend/.env.production`**:
  - [ ] Add Firebase credentials (copy from `.env.local`)
  - [ ] Set `VITE_API_BASE_URL` to your Render URL
  - [ ] Example: `VITE_API_BASE_URL=https://telegram-dice-api.onrender.com`

- [ ] **Build Frontend**: `cd frontend && npm run build`
  - [ ] Should complete without errors
  - [ ] `dist/` folder should exist and contain files

---

## Deploy Frontend to Firebase

- [ ] **Install Firebase CLI**: `npm install -g firebase-tools`
- [ ] **Login**: `firebase login` (opens browser)
- [ ] **Initialize** (if not done): `firebase init hosting`
  - [ ] Select your Firebase project
  - [ ] Public directory: `frontend/dist`
  - [ ] Single-page app: `Yes`
- [ ] **Deploy**: `firebase deploy --only hosting`
- [ ] **Get URL**: Shown in terminal (e.g., `https://your-project.web.app`)

---

## Post-Deployment Testing

- [ ] **Frontend URL**: Visit your Firebase hosting URL
- [ ] **Login Page**: Loads without errors
- [ ] **API Connection**: Check browser console (F12) for errors
- [ ] **Full Flow**: 
  - [ ] Enter Telegram credentials
  - [ ] Click "Save credentials"
  - [ ] Should see dashboard
  - [ ] Set target number and click "Start"
  - [ ] Should see logs from backend

---

## Troubleshooting

- [ ] **Backend not responding**: Wait 2-3 minutes for Render cold start
- [ ] **CORS errors**: Check that `flask-cors` is installed in backend
- [ ] **Frontend can't find API**: Verify `VITE_API_BASE_URL` matches Render URL
- [ ] **Firebase deploy fails**: Ensure `frontend/dist/` exists and `npm run build` succeeded

---

## Maintenance

- [ ] **Backend Updates**: Push to GitHub, Render auto-redeploys
- [ ] **Frontend Updates**: 
  ```bash
  npm run build
  firebase deploy --only hosting
  ```
- [ ] **Monitoring**: Check Render logs and Firebase console regularly

---

## Useful Links

- [Render Documentation](https://render.com/docs)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Deployment Guide](DEPLOY.md)
