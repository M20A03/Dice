const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || (import.meta.env.DEV ? '' : 'https://dice-e911.onrender.com')

const USER_ID_KEY = 'dice_user_id'

/** Store the backend user_id so we can send it in every request. */
export function setUserId(id) {
  if (id) localStorage.setItem(USER_ID_KEY, id)
}

export function getUserId() {
  return localStorage.getItem(USER_ID_KEY) || ''
}

export async function apiFetch(path, options = {}) {
  const headers = { ...(options.headers || {}) }

  // Always attach the user_id header so the backend can identify us
  // even when cross-origin cookies are blocked by the browser.
  const uid = getUserId()
  if (uid) headers['X-User-ID'] = uid

  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    ...options,
    headers,
  })

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  // Auto-capture user_id from login response
  if (data?.user_id) setUserId(data.user_id)

  if (!response.ok) {
    const message = data?.error || `Request failed (${response.status})`
    throw new Error(message)
  }

  return data
}
