'use client'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''

  const [form, setForm] = useState({ password: '', confirm: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) setError('لینک نامعتبر است')
  }, [token])

  async function handleSubmit() {
    if (!form.password || !form.confirm) { setError('همه فیلدها را پر کنید'); return }
    if (form.password.length < 8) { setError('رمز عبور باید حداقل ۸ کاراکتر باشد'); return }
    if (form.password !== form.confirm) { setError('رمزهای عبور یکسان نیستند'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password: form.password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setDone(true)
      setTimeout(() => router.push('/login'), 2500)
    } catch (err: any) {
      setError(err.message || 'خطا در تغییر رمز')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0C0F0E', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>

        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '.6rem' }}>
            <div style={{ width: 36, height: 36, background: '#2E6B5E', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: '1rem', fontFamily: 'serif' }}>R</span>
            </div>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>رُس</span>
          </Link>
        </div>

        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 20, padding: '2rem' }}>
          {done ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, background: 'rgba(74,140,124,.15)', border: '1px solid rgba(74,140,124,.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A8C7C" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '.75rem' }}>رمز عبور تغییر کرد</h2>
              <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.8 }}>در حال انتقال به صفحه ورود...</p>
            </div>
          ) : (
            <>
              <h1 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', marginBottom: '.5rem' }}>تنظیم رمز جدید</h1>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.35)', marginBottom: '1.75rem', lineHeight: 1.7 }}>رمز عبور جدید خود را وارد کنید.</p>

              {error && (
                <div style={{ background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.25)', borderRadius: 10, padding: '.75rem 1rem', marginBottom: '1rem', fontSize: '.82rem', color: '#f87171' }}>{error}</div>
              )}

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: 'rgba(255,255,255,.4)', marginBottom: '.5rem' }}>رمز عبور جدید</label>
                <input type="password" value={form.password} onChange={e => setForm(f => ({...f, password: e.target.value}))}
                  placeholder="حداقل ۸ کاراکتر"
                  style={{ width: '100%', padding: '.85rem 1rem', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, fontSize: '.92rem', color: 'white', outline: 'none', boxSizing: 'border-box' as const }} />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 600, color: 'rgba(255,255,255,.4)', marginBottom: '.5rem' }}>تکرار رمز عبور</label>
                <input type="password" value={form.confirm} onChange={e => setForm(f => ({...f, confirm: e.target.value}))}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  placeholder="تکرار رمز"
                  style={{ width: '100%', padding: '.85rem 1rem', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, fontSize: '.92rem', color: 'white', outline: 'none', boxSizing: 'border-box' as const }} />
              </div>

              <button onClick={handleSubmit} disabled={loading || !token} style={{ width: '100%', padding: '.9rem', background: loading ? 'rgba(74,140,124,.5)' : '#2E6B5E', border: 'none', borderRadius: 10, color: 'white', fontSize: '.92rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', transition: 'all .3s ease' }}>
                {loading ? 'در حال ذخیره...' : 'ذخیره رمز جدید'}
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  )
}
