import React, {useEffect, useMemo, useRef, useState} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebaseConfig'
import { apiFetch } from './api'
import { DICE_OPTIONS, getDiceOption } from './diceOptions'

const EMPTY_FORM = {
  apiId: '',
  apiHash: '',
  phone: '',
  groupLink: '',
  otpCode: '',
}

export default function Dashboard({firebaseUser}){
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [selectedDice, setSelectedDice] = useState('🎲')
  const [target, setTarget] = useState(3)
  const [notice, setNotice] = useState(null)
  const [error, setError] = useState(null)
  const [savingTelegram, setSavingTelegram] = useState(false)
  const [verifyingOtp, setVerifyingOtp] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [busyAction, setBusyAction] = useState(null)
  const logsRef = useRef(null)

  useEffect(()=>{
    const loadStatus = async () => {
      try {
        const data = await apiFetch('/api/status')
        setStatus(data)
        if (data?.credentials) {
          setForm(current => ({
            apiId: current.apiId || String(data.credentials.api_id || ''),
            apiHash: current.apiHash || String(data.credentials.api_hash || ''),
            phone: current.phone || String(data.credentials.phone || ''),
            groupLink: current.groupLink || String(data.credentials.group_link || ''),
          }))
          setOtpSent(data.telegram_status === 'otp_pending')
        }
      } catch {
        setStatus(null)
      }
    }

    loadStatus()
    const id = setInterval(loadStatus, 1800)
    return ()=>clearInterval(id)
  },[])

  useEffect(()=>{
    if (logsRef.current) logsRef.current.scrollTop = logsRef.current.scrollHeight
  },[status])

  const diceMeta = useMemo(() => getDiceOption(selectedDice), [selectedDice])
  const targetOptions = useMemo(() => Array.from({length: diceMeta.max}, (_, index) => index + 1), [diceMeta.max])

  useEffect(()=>{
    if (target > diceMeta.max) {
      setTarget(diceMeta.max)
    }
  }, [diceMeta.max, target])

  async function saveTelegram(event){
    event.preventDefault()
    setSavingTelegram(true)
    setError(null)
    setNotice(null)

    try {
      await apiFetch('/api/login', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          api_id: form.apiId,
          api_hash: form.apiHash,
          phone: form.phone,
          group_link: form.groupLink,
        })
      })
      setOtpSent(true)
      setNotice('Telegram credentials saved. Enter the OTP sent to Telegram to connect.')
      const refreshed = await apiFetch('/api/status')
      setStatus(refreshed)
    } catch (apiError) {
      setError(apiError?.message || 'Unable to save Telegram credentials.')
    } finally {
      setSavingTelegram(false)
    }
  }

  async function verifyOtp(event){
    event.preventDefault()
    setVerifyingOtp(true)
    setError(null)
    setNotice(null)

    try {
      await apiFetch('/api/verify-otp', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ otp_code: form.otpCode })
      })
      setOtpSent(false)
      setForm(current => ({ ...current, otpCode: '' }))
      setNotice('Telegram OTP verified. You can start the run now.')
      const refreshed = await apiFetch('/api/status')
      setStatus(refreshed)
    } catch (apiError) {
      setError(apiError?.message || 'Unable to verify OTP.')
    } finally {
      setVerifyingOtp(false)
    }
  }

  async function start(){
    setBusyAction('start')
    setError(null)
    setNotice(null)
    try {
      await apiFetch('/api/start',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({desired_number: Number(target), dice_emoji: selectedDice})
      })
      setNotice(`Running ${diceMeta.label} with target ${target}.`)
    } catch (apiError) {
      setError(apiError?.message || 'Unable to start the bot.')
    } finally {
      setBusyAction(null)
    }
  }

  async function stop(){
    setBusyAction('stop')
    try {
      await apiFetch('/api/stop',{method:'POST'})
      setNotice('Bot stopped.')
    } catch (apiError) {
      setError(apiError?.message || 'Unable to stop the bot.')
    } finally {
      setBusyAction(null)
    }
  }

  async function clearLogs(){
    setBusyAction('clear')
    try {
      await apiFetch('/api/clear-logs',{method:'POST'})
      const refreshed = await apiFetch('/api/status')
      setStatus(refreshed)
    } catch (apiError) {
      setError(apiError?.message || 'Unable to clear logs.')
    } finally {
      setBusyAction(null)
    }
  }

  async function logout(){
    await apiFetch('/api/logout',{method:'POST'})
    await signOut(auth)
    window.location.reload()
  }

  const metrics = [
    {label: 'Status', value: status?.status || 'Idle'},
    {label: 'Attempts', value: status?.attempts || 0},
    {label: 'Dice', value: diceMeta.emoji},
    {label: 'Telegram', value: status?.telegram_connected ? 'Connected' : 'OTP pending'},
    {label: 'Target', value: target},
  ]

  return (
    <div className="dashboard-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="topbar glass-panel">
        <div>
          <div className="eyebrow">Approved Firebase user</div>
          <h1>Telegram Dice Control</h1>
          <p>Signed in as {firebaseUser?.email}</p>
        </div>
        <button className="ghost-button" onClick={logout}>Logout</button>
      </header>

      <section className="hero-grid">
        <div className="hero-panel glass-panel">
          <div className="panel-label">Live control center</div>
          <h2>Choose a dice, tune the target, then launch the run.</h2>
          <p>
            Use the slick control panel below to manage your Telegram session with animated cards,
            smooth hover states, and clear live feedback.
          </p>

          <div className="metric-grid">
            {metrics.map(metric => (
              <div className="metric-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="action-panel glass-panel">
          <div className="panel-label">Quick actions</div>
          <div className="action-stack">
            <button className="primary-button" onClick={start} disabled={busyAction === 'start'}>
              {busyAction === 'start' ? 'Launching...' : 'Start run'}
            </button>
            <div className="button-row">
              <button className="secondary-button" onClick={stop} disabled={busyAction === 'stop'}>Stop</button>
              <button className="secondary-button" onClick={clearLogs} disabled={busyAction === 'clear'}>Clear logs</button>
            </div>
          </div>

          <div className="status-banner">
            <span className="status-dot" />
            {status?.running ? 'Bot is running' : 'Waiting to start'}
          </div>
        </div>
      </section>

      <section className="content-grid">
        <div className="glass-panel settings-panel">
          <div className="card-title">
            <h2>Telegram setup</h2>
            <p>Saved inside the Flask session after you submit it once.</p>
          </div>

          <form className="setup-form" onSubmit={saveTelegram}>
            <label>
              <span>API ID</span>
              <input value={form.apiId} onChange={event => setForm({...form, apiId: event.target.value})} placeholder="123456" />
            </label>
            <label>
              <span>API Hash</span>
              <input value={form.apiHash} onChange={event => setForm({...form, apiHash: event.target.value})} placeholder="a1b2c3..." />
            </label>
            <label>
              <span>Phone</span>
              <input value={form.phone} onChange={event => setForm({...form, phone: event.target.value})} placeholder="+91..." />
            </label>
            <label>
              <span>Group invite link</span>
              <input value={form.groupLink} onChange={event => setForm({...form, groupLink: event.target.value})} placeholder="https://t.me/..." />
            </label>

            <button className="primary-button" type="submit" disabled={savingTelegram}>
              {savingTelegram ? 'Saving...' : 'Save Telegram credentials'}
            </button>
          </form>

          <div className="credential-guide">
            <h3>How to get Telegram API ID and API Hash</h3>
            <ol>
              <li>Open <a href="https://my.telegram.org" target="_blank" rel="noreferrer">my.telegram.org</a> and sign in with your phone number.</li>
              <li>Click <strong>API development tools</strong>.</li>
              <li>Create a new app if Telegram asks for one.</li>
              <li>Copy the <strong>api_id</strong> and <strong>api_hash</strong> into the fields above.</li>
            </ol>
          </div>

          {otpSent && (
            <form className="setup-form otp-form" onSubmit={verifyOtp}>
              <label>
                <span>Telegram OTP</span>
                <input
                  value={form.otpCode}
                  onChange={event => setForm({...form, otpCode: event.target.value})}
                  placeholder="12345"
                />
              </label>

              <button className="primary-button" type="submit" disabled={verifyingOtp}>
                {verifyingOtp ? 'Verifying...' : 'Verify OTP'}
              </button>
            </form>
          )}

          {notice && <div className="success-banner">{notice}</div>}
          {error && <div className="error-banner">{error}</div>}
        </div>

        <div className="glass-panel dice-panel">
          <div className="card-title">
            <h2>Select dice</h2>
            <p>Only the classic Telegram dice is enabled now.</p>
          </div>

          <div className="dice-grid">
            {DICE_OPTIONS.map(option => (
              <button
                key={option.emoji}
                className={`dice-card ${selectedDice === option.emoji ? 'selected' : ''}`}
                style={{'--accent': option.accent}}
                onClick={() => setSelectedDice(option.emoji)}
                type="button"
              >
                <span className="dice-emoji">{option.emoji}</span>
                <strong>{option.label}</strong>
                <small>1 - {option.max}</small>
              </button>
            ))}
          </div>

          <div className="target-picker">
            <div className="target-header">
              <span>Choose target</span>
              <strong>{selectedDice} max {diceMeta.max}</strong>
            </div>
            <div className="target-grid">
              {targetOptions.map(value => (
                <button
                  key={value}
                  className={`target-chip ${target === value ? 'selected' : ''}`}
                  onClick={() => setTarget(value)}
                  type="button"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="glass-panel logs-panel">
        <div className="card-title">
          <h2>Run history</h2>
          <p>Follow every connection and attempt in real time.</p>
        </div>
        <div className="logs" ref={logsRef}>
          {status?.logs?.length ? status.logs.map((line, index)=>(<div key={index}>{line}</div>)) : <div className="empty-state">No logs yet. Start a run to see activity.</div>}
        </div>
      </section>
    </div>
  )
}
