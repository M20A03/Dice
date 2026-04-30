import React, {useEffect, useState} from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { auth } from './firebaseConfig'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { isApprovedFirebaseUser } from './firebaseAccess'

function LoadingScreen() {
  return (
    <div className="page-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="loading-card">
        <div className="spinner" />
        <h1>Preparing your workspace</h1>
        <p>Checking Firebase access and loading the dashboard.</p>
      </div>
    </div>
  )
}

function DeniedScreen({message}) {
  return (
    <div className="page-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="loading-card denied-card">
        <div className="denied-badge">Access locked</div>
        <h1>Firebase approval needed</h1>
        <p>{message}</p>
        <p className="muted">Ask the admin to add your email to Firestore collection <strong>approvedUsers</strong>.</p>
      </div>
    </div>
  )
}

export default function App(){
  const [authState, setAuthState] = useState('loading')
  const [firebaseUser, setFirebaseUser] = useState(null)
  const [accessMessage, setAccessMessage] = useState(null)
  const [checkingAccess, setCheckingAccess] = useState(false)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, async user => {
      setAccessMessage(null)

      if (!user) {
        setFirebaseUser(null)
        setAuthState('signed-out')
        return
      }

      setCheckingAccess(true)
      try {
        const approved = await isApprovedFirebaseUser(user)
        if (!approved) {
          await signOut(auth)
          setFirebaseUser(null)
          setAuthState('denied')
          setAccessMessage('Your Firebase account is not approved yet.')
          return
        }

        setFirebaseUser(user)
        setAuthState('signed-in')
      } catch (error) {
        await signOut(auth)
        setFirebaseUser(null)
        setAuthState('denied')
        setAccessMessage(error?.message || 'Unable to verify your Firebase access.')
      } finally {
        setCheckingAccess(false)
      }
    })

    return unsubscribe
  },[])

  if (authState === 'loading' || checkingAccess) return <LoadingScreen />
  if (authState === 'signed-out') return <Login />
  if (authState === 'denied') return <DeniedScreen message={accessMessage} />
  return <Dashboard firebaseUser={firebaseUser} />
}
