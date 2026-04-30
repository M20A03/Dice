import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseConfig'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function submit(event) {
    event.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password)
    } catch (firebaseError) {
      const code = firebaseError?.code || ''
      if (code === 'auth/invalid-credential' || code === 'auth/wrong-password') {
        setError('Invalid email or password.')
      } else if (code === 'auth/user-not-found') {
        setError('No Firebase account found for that email.')
      } else {
        setError(firebaseError?.message || 'Unable to sign in.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <section className="auth-grid">
        <div className="auth-hero glass-panel">
          <div className="eyebrow">Firebase access only</div>
          <h1>Telegram Dice Control</h1>
          <p>
            A polished control room for approved Firebase users to manage Telegram dice runs,
            choose the emoji, and watch live logs with a clean animated interface.
          </p>
          <div className="feature-list">
            <div className="feature-item">Approved users only</div>
            <div className="feature-item">Firebase Authentication</div>
            <div className="feature-item">Live Telegram controls</div>
          </div>
        </div>

        <div className="auth-card glass-panel">
          <div className="card-title">
            <h2>Sign in</h2>
            <p>Use the Firebase account your admin added.</p>
          </div>

          <form className="auth-form" onSubmit={submit}>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Your Firebase password"
                autoComplete="current-password"
                required
              />
            </label>

            <button className="primary-button" type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Enter dashboard'}
            </button>

            {error && <div className="error-banner">{error}</div>}

            <div className="auth-footnote">
              Only Firebase users you approve in Firestore can continue.
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
