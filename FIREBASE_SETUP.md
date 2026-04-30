# Firebase Setup Guide

This app uses Firebase Authentication for sign-in and Firestore as an allowlist for approved users.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Follow the setup wizard
4. Enable Google Analytics only if you want analytics

## Step 2: Get Your Firebase Configuration

1. In Firebase Console, click on your project
2. Click the gear icon → **Project Settings**
3. Scroll down to "Your apps"
4. Click the Web icon (`</>`) to add a web app
5. Register the app with any name (e.g., "Telegram Dice Web")
6. Copy the Firebase configuration object - it contains:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`
   - `measurementId` (optional)

## Step 3: Configure Local Environment

1. Copy the example environment file:
   ```bash
   cd frontend
   cp .env.example .env.local
   ```

2. Edit `frontend/.env.local` and paste your Firebase credentials:
   ```
   VITE_FIREBASE_API_KEY=your_value
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   VITE_API_BASE_URL=http://localhost:5000
   ```

## Step 4: Create Approved Users

1. In Firebase Console open **Firestore Database**.
2. Create a collection named `approvedUsers`.
3. Add a document for each allowed user.
4. Use the user email as the document id, or add an `email` field.
5. Optional fields:
   - `enabled: true`
   - `name: "User Name"`

The frontend checks this allowlist after Firebase sign-in and signs out unapproved users automatically.

## Step 5: Install Dependencies

```bash
cd frontend
npm install
```

## Step 6: Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000` with Firebase authentication enabled.

## Using Firebase in Your App

### Authentication (Login/Logout)

```javascript
import { auth } from './firebaseConfig'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

const userCredential = await signInWithEmailAndPassword(auth, email, password)
await signOut(auth)
```

### Allowlist Check

```javascript
import { isApprovedFirebaseUser } from './firebaseAccess'

const approved = await isApprovedFirebaseUser(currentUser)
```

### Firestore Database

```javascript
import { db } from './firebaseConfig'
import { collection, addDoc, getDocs } from 'firebase/firestore'

await addDoc(collection(db, 'approvedUsers'), { email: 'user@example.com', enabled: true })

const querySnapshot = await getDocs(collection(db, 'approvedUsers'))
```

### Analytics

```javascript
import { analytics } from './firebaseConfig'
import { logEvent } from 'firebase/analytics'

if (analytics) {
  logEvent(analytics, 'screen_view', {
    screen_name: 'Dashboard'
  })
}
```

## Production Deployment

### Firebase Hosting

1. Create `.env.production` for production credentials:
   ```bash
   cp .env.example .env.production
   ```

2. Update with production Firebase project credentials

3. Build the frontend:
   ```bash
   npm run build
   ```

4. Deploy to Firebase Hosting:
   ```bash
   firebase deploy --only hosting --project dice-control-m
   ```

### Backend API URL

For production deployment, set `VITE_API_BASE_URL` to your backend API domain:
```
VITE_API_BASE_URL=https://your-api-domain.com
```

## Troubleshooting

### Missing Firebase config
If you see warnings about incomplete Firebase config, ensure all environment variables are set in `.env.local`

### Access denied
If Firebase sign-in works but the app blocks access, add the user email to the `approvedUsers` Firestore collection.

### Port conflicts
- Frontend runs on port 3000
- Backend (Flask) runs on port 5000
- Ensure both ports are available

### API CORS issues
If frontend can't reach backend API, check:
1. Backend is running and accessible
2. `VITE_API_BASE_URL` is correct
3. Flask CORS is properly configured

---

For more Firebase documentation, visit: https://firebase.google.com/docs
