import React, {useState} from 'react'
import { apiFetch } from './api'

export default function Login({onLogin}){
  const [apiId,setApiId]=useState('')
  const [apiHash,setApiHash]=useState('')
  const [phone,setPhone]=useState('')
  const [group,setGroup]=useState('')
  const [error,setError]=useState(null)

  async function submit(e){
    e.preventDefault()
    setError(null)
    try {
      await apiFetch('/api/login', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({api_id:apiId,api_hash:apiHash,phone,group_link:group})
      })
      onLogin()
    } catch (err) {
      setError(err.message || 'Login failed')
    }
  }

  return (
    <div className="container">
      <h2>Login / Connect</h2>
      <form onSubmit={submit} style={{display:'grid',gap:8}}>
        <input placeholder="API ID" value={apiId} onChange={e=>setApiId(e.target.value)} />
        <input placeholder="API Hash" value={apiHash} onChange={e=>setApiHash(e.target.value)} />
        <input placeholder="Phone (+...)" value={phone} onChange={e=>setPhone(e.target.value)} />
        <input placeholder="Group invite link" value={group} onChange={e=>setGroup(e.target.value)} />
        <div className="row">
          <button type="submit">Save credentials</button>
        </div>
        {error && <div style={{color:'crimson'}}>{error}</div>}
      </form>
    </div>
  )
}
