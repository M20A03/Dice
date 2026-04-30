import { doc, getDoc, collection, query, where, limit, getDocs } from 'firebase/firestore'
import { db } from './firebaseConfig'

const ALLOWLIST_COLLECTION = 'approvedUsers'

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase()
}

export async function isApprovedFirebaseUser(user) {
  const email = normalizeEmail(user?.email)
  if (!email) {
    return false
  }

  const byIdRef = doc(db, ALLOWLIST_COLLECTION, email)
  const byIdSnap = await getDoc(byIdRef)
  if (byIdSnap.exists()) {
    const data = byIdSnap.data() || {}
    return data.enabled !== false
  }

  const allowlistQuery = query(
    collection(db, ALLOWLIST_COLLECTION),
    where('email', '==', email),
    limit(1)
  )
  const allowlistSnap = await getDocs(allowlistQuery)
  if (allowlistSnap.empty) {
    return false
  }

  const data = allowlistSnap.docs[0].data() || {}
  return data.enabled !== false
}

export function getFirebaseAllowlistHelpText() {
  return 'Ask the admin to add your email to Firestore collection approvedUsers.'
}
