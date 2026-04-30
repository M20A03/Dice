import React, {useEffect, useState} from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { apiFetch } from './api'

export default function App(){
  const [status, setStatus] = useState(null)

  useEffect(()=>{
    apiFetch('/api/status').then(data=>{
      if (!data || data.error) setStatus(null)
      else setStatus(data)
    }).catch(()=>setStatus(null))
  },[])

  if (status === null) return <Login onLogin={()=>window.location.reload()} />
  return <Dashboard initialStatus={status} />
}
