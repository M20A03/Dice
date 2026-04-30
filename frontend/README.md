# Frontend (React + Vite)

This folder contains a minimal React frontend (Vite) that proxies `/api` to the Flask backend on port 5000.

Quick start:

Install dependencies and run dev server:

```bash
cd frontend
npm install
npm run dev
```

The dev server runs on port 3000 and forwards `/api` requests to the Flask app (http://localhost:5000).

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
npm install
npm run build
```

3. Install Firebase CLI and deploy (from repository root):

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Choose existing project
# Public directory: frontend/dist
# Single-page app rewrite: Yes
firebase deploy --only hosting
```

The repository already includes a root `firebase.json` ready for hosting `frontend/dist`.
