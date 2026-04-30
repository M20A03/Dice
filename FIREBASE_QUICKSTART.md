# Quick Setup: Firebase + React Frontend

## One-Time Setup

### 1. Get Firebase Credentials
- Go to [Firebase Console](https://console.firebase.google.com/)
- Create or select your project
- Go to **Project Settings** (⚙️ icon)
- Find your **Firebase SDK snippet** in the "General" tab
- Copy your `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, and `appId`

### 2. Configure Frontend
```bash
cd frontend
cp .env.example .env.local
# Edit .env.local with your Firebase credentials
```

Paste your credentials into `frontend/.env.local`:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
VITE_API_BASE_URL=http://localhost:5000
```

### 3. Install Dependencies
```bash
cd frontend
npm install
```

## Run Locally

Terminal 1 - Backend API:
```bash
source venv/bin/activate
python app.py
```
Runs on http://localhost:5000

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```
Runs on http://localhost:3000

## Deploy to Firebase Hosting

```bash
# Build
npm run build

# Deploy (from repository root)
firebase deploy --only hosting
```

## Using Firebase in Code

The `firebaseConfig.js` exports:
- `auth` - Firebase Authentication
- `db` - Firestore Database  
- `analytics` - Firebase Analytics

Example:
```javascript
import { auth, db } from './firebaseConfig'
```

---

For detailed Firebase setup, see [FIREBASE_SETUP.md](FIREBASE_SETUP.md)
