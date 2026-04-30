import React, {useEffect, useState, useRef} from 'react'
import { apiFetch } from './api'

export default function Dashboard({initialStatus}){
  const [status, setStatus] = useState(initialStatus)
  const [target, setTarget] = useState(3)
  const logsRef = useRef(null)

  useEffect(()=>{
    const id = setInterval(()=>{
      apiFetch('/api/status').then(d=>setStatus(d)).catch(()=>{})
    },1500)
    return ()=>clearInterval(id)
  },[])

  useEffect(()=>{
    if (logsRef.current) logsRef.current.scrollTop = logsRef.current.scrollHeight
  },[status])

  async function start(){
    await apiFetch('/api/start',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({desired_number: Number(target)})})
  }
  async function stop(){ await apiFetch('/api/stop',{method:'POST'}) }
  async function logout(){ await apiFetch('/api/logout',{method:'POST'}); window.location.reload() }
  async function clearLogs(){ await apiFetch('/api/clear-logs',{method:'POST'}) }

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div>Status: <strong>{status?.status||'Idle'}</strong></div>
        <div>Attempts: <strong>{status?.attempts||0}</strong></div>
      </div>

      <div style={{marginTop:12}}>
        <label>Target number: </label>
        <input type="number" min="1" max="6" value={target} onChange={e=>setTarget(e.target.value)} />
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={clearLogs}>Clear logs</button>
        <button onClick={logout}>Logout</button>
      </div>

      <h3 style={{marginTop:18}}>Logs</h3>
      <div className="logs" ref={logsRef}>
        {status?.logs?.length ? status.logs.map((l,i)=>(<div key={i}>{l}</div>)) : <div>No logs yet</div>}
      </div>
    </div>
  )
}
