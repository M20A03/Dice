# Frontend (React + Vite)

This app uses Firebase Authentication for access control and a React control panel for Telegram dice runs. Only approved Firebase users can sign in.

Quick start:

```bash
cd frontend
npm install
npm run dev
```

The dev server runs on port 3000. Firebase Auth handles access, and `/api` requests still go to the Flask backend on port 5000.

## Firebase Access Model

- Users sign in with Firebase email/password.
- The app checks Firestore collection `approvedUsers` before allowing access.
- Add users in Firebase Console by creating a document in `approvedUsers` with the document id set to the user email, or by adding a document with an `email` field.
- If a user is not approved, the app signs them out automatically.

## Deploy to Firebase Hosting

Firebase Hosting serves only the React frontend. The Flask API must run separately (for example on Render, Railway, Fly.io, or your own VPS).

1. Configure backend API URL for production:

Create `frontend/.env.production`:

```bash
VITE_API_BASE_URL=https://your-backend-domain.com
```

2. Build frontend:

```bash
cd frontend
npm run build
```

3. Deploy (from repository root):

```bash
firebase deploy --only hosting --project dice-control-m
```

The repository already includes a root `firebase.json` ready for hosting `frontend/dist`.
