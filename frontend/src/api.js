const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options)

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    const message = data?.error || `Request failed (${response.status})`
    throw new Error(message)
  }

  return data
}
