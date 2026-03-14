'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    if (!email) { setError('ایمیل را وارد کنید'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setSent(true)
    } catch (err: any) {
      setError(err.message || 'خطا در ارسال')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0C0F0E', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>

        {/* لوگو */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '.6rem' }}>
            <div style={{ width: 36, height: 36, background: '#2E6B5E', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: '1rem', fontFamily: 'serif' }}>R</span>
            </div>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>رُس</span>
          </Link>
        </div>

        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 20, padding: '2rem' }}>

          {sent ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, background: 'rgba(74,140,124,.15)', border: '1px solid rgba(74,140,124,.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A8C7C" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '.75rem' }}>ایمیل ارسال شد</h2>
              <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                لینک بازیابی رمز عبور به <strong style={{ color: 'rgba(255,255,255,.7)' }}>{email}</strong> ارسال شد.
              </p>
              <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.82rem', color: '#4A8C7C', textDecoration: 'none', fontWeight: 600 }}>
                بازگشت به ورود
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          ) : (
            <>
              <h1 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', marginBottom: '.5rem' }}>فراموشی رمز عبور</h1>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.35)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
                ایمیل خود را وارد کنید تا لینک بازیابی برایتان ارسال شود.
              </p>

              {error && (
                <div style={{ background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.25)', borderRadius: 10, padding: '.75rem 1rem', marginBottom: '1rem', fontSize: '.82rem', color: '#f87171' }}>
                  {error}
                </div>
              )}

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: 'rgba(255,255,255,.4)', marginBottom: '.5rem' }}>ایمیل</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  placeholder="example@email.com"
                  style={{ width: '100%', padding: '.85rem 1rem', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, fontSize: '.92rem', color: 'white', outline: 'none', boxSizing: 'border-box' as const, direction: 'ltr' }}
                />
              </div>

              <button onClick={handleSubmit} disabled={loading} style={{ width: '100%', padding: '.9rem', background: loading ? 'rgba(74,140,124,.5)' : '#2E6B5E', border: 'none', borderRadius: 10, color: 'white', fontSize: '.92rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', transition: 'all .3s ease' }}>
                {loading ? 'در حال ارسال...' : 'ارسال لینک بازیابی'}
              </button>

              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <Link href="/login" style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.3)', textDecoration: 'none' }}>
                  بازگشت به ورود
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
