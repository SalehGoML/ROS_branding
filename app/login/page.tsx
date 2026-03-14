'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [method, setMethod] = useState<'email' | 'phone'>('email')
  const [form, setForm] = useState({ identifier: '', password: '', otp: '' })
  const [step, setStep] = useState<'credentials' | 'otp'>('credentials')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function set(k: string, v: string) {
    setForm(f => ({ ...f, [k]: v }))
    setError('')
  }

  async function handleSubmit() {
    if (!form.identifier || (method === 'email' && !form.password)) {
      setError('لطفاً همه فیلدها را پر کنید.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const { authAPI } = await import('@/lib/api')
      const res = await authAPI.login({ email: form.identifier, password: form.password })
      localStorage.setItem('ros_token', res.token)
      localStorage.setItem('ros_user', JSON.stringify(res.user))
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'ایمیل یا رمز عبور اشتباه است')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '.85rem 1rem',
    background: 'var(--c-surface-2)',
    border: '1px solid var(--c-border)',
    borderRadius: 'var(--r-sm)',
    fontSize: '.95rem', color: 'var(--c-text)',
    outline: 'none', boxSizing: 'border-box' as const,
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--c-bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem',
    }}>

      {/* Background grid */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: `
          linear-gradient(var(--c-border) 1px, transparent 1px),
          linear-gradient(90deg, var(--c-border) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        opacity: .3, pointerEvents: 'none',
      }} />

      <div style={{ width: '100%', maxWidth: 440, position: 'relative', zIndex: 2 }}>

        {/* Logo */}
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', gap: '.6rem',
          textDecoration: 'none', marginBottom: '2.5rem',
          justifyContent: 'center',
        }}>
          <div style={{
            width: 36, height: 36,
            background: 'var(--c-primary)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontWeight: 800, fontSize: '1rem', fontFamily: 'serif' }}>R</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--c-text)' }}>ROS</span>
        </Link>

        {/* Card */}
        <div style={{
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border)',
          borderRadius: 'var(--r-xl)',
          padding: '2.5rem',
          boxShadow: '0 4px 32px rgba(0,0,0,.06)',
        }}>

          {step === 'otp' ? (
            <>
              <button onClick={() => setStep('credentials')} style={{
                display: 'flex', alignItems: 'center', gap: '.4rem',
                fontSize: '.82rem', color: 'var(--c-text-muted)',
                background: 'none', border: 'none', cursor: 'pointer',
                marginBottom: '1.5rem', padding: 0,
              }}>
                ← بازگشت
              </button>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '.4rem' }}>
                کد تأیید
              </h1>
              <p style={{ fontSize: '.88rem', color: 'var(--c-text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
                کد ۶ رقمی ارسال‌شده به{' '}
                <span style={{ fontWeight: 600, color: 'var(--c-text)' }}>{form.identifier}</span>
                {' '}را وارد کنید.
              </p>

              <input
                value={form.otp}
                onChange={e => set('otp', e.target.value)}
                placeholder="۱۲۳۴۵۶"
                maxLength={6}
                style={{ ...inputStyle, textAlign: 'center', fontSize: '1.5rem', letterSpacing: '.3em', direction: 'ltr' }}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />

              {error && (
                <div style={{
                  padding: '.65rem 1rem', marginTop: '1rem',
                  background: '#FEF2F2', border: '1px solid #FECACA',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '.82rem', color: '#DC2626',
                }}>
                  {error}
                </div>
              )}

              <button onClick={handleSubmit} disabled={loading} style={{
                width: '100%', marginTop: '1.25rem',
                padding: '.9rem',
                background: loading ? 'var(--c-primary-lt)' : 'var(--c-primary)',
                color: 'white', border: 'none',
                borderRadius: 'var(--r-sm)',
                fontSize: '.95rem', fontWeight: 700,
                cursor: loading ? 'wait' : 'pointer',
              }}>
                {loading ? 'در حال بررسی...' : 'تأیید و ورود'}
              </button>

              <p style={{ textAlign: 'center', fontSize: '.8rem', color: 'var(--c-text-light)', marginTop: '1rem' }}>
                کد دریافت نکردید؟{' '}
                <button style={{ color: 'var(--c-primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '.8rem' }}>
                  ارسال مجدد
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '.4rem' }}>
                ورود به حساب
              </h1>
              <p style={{ fontSize: '.88rem', color: 'var(--c-text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
                به پنل تحلیل برند ROS خوش آمدید.
              </p>

              {/* Method toggle */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                background: 'var(--c-surface-2)',
                borderRadius: 'var(--r-sm)',
                padding: 4, marginBottom: '1.5rem',
                border: '1px solid var(--c-border)',
              }}>
                {(['email', 'phone'] as const).map(m => (
                  <button key={m} onClick={() => { setMethod(m); set('identifier', '') }} style={{
                    padding: '.55rem',
                    background: method === m ? 'white' : 'transparent',
                    border: method === m ? '1px solid var(--c-border)' : '1px solid transparent',
                    borderRadius: 'calc(var(--r-sm) - 2px)',
                    fontSize: '.82rem', fontWeight: method === m ? 600 : 400,
                    color: method === m ? 'var(--c-text)' : 'var(--c-text-muted)',
                    cursor: 'pointer',
                    boxShadow: method === m ? '0 1px 4px rgba(0,0,0,.08)' : 'none',
                    transition: 'all .15s',
                  }}>
                    {m === 'email' ? '📧 ایمیل' : '📱 شماره تماس'}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <div>
                  <label style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--c-text-muted)', display: 'block', marginBottom: '.4rem' }}>
                    {method === 'email' ? 'ایمیل' : 'شماره تماس'}
                  </label>
                  <input
                    value={form.identifier}
                    onChange={e => set('identifier', e.target.value)}
                    placeholder={method === 'email' ? 'info@brandname.com' : '۰۹۱۲ ۳۴۵ ۶۷۸۹'}
                    type={method === 'email' ? 'email' : 'tel'}
                    style={{ ...inputStyle, direction: method === 'email' ? 'ltr' : 'rtl' }}
                  />
                </div>

                {method === 'email' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.4rem' }}>
                      <label style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--c-text-muted)' }}>
                        رمز عبور
                      </label>
                      <Link href="/forgot-password" style={{ fontSize: '.75rem', color: 'var(--c-primary)' }}>
                        فراموش کردم
                      </Link>
                    </div>
                    <input
                      value={form.password}
                      onChange={e => set('password', e.target.value)}
                      placeholder="رمز عبور"
                      type="password"
                      style={{ ...inputStyle, direction: 'ltr' }}
                      onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    />
                  </div>
                )}

                {error && (
                  <div style={{
                    padding: '.65rem 1rem',
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: 'var(--r-sm)',
                    fontSize: '.82rem', color: '#DC2626',
                  }}>
                    {error}
                  </div>
                )}

                <button onClick={handleSubmit} disabled={loading} style={{
                  padding: '.9rem',
                  background: loading ? 'var(--c-primary-lt)' : 'var(--c-primary)',
                  color: 'white', border: 'none',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '.95rem', fontWeight: 700,
                  cursor: loading ? 'wait' : 'pointer',
                  marginTop: '.25rem',
                }}>
                  {loading
                    ? 'در حال پردازش...'
                    : method === 'phone' ? 'ارسال کد تأیید' : 'ورود'}
                </button>

              </div>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                margin: '1.5rem 0',
              }}>
                <div style={{ flex: 1, height: 1, background: 'var(--c-border)' }} />
                <span style={{ fontSize: '.75rem', color: 'var(--c-text-light)' }}>یا</span>
                <div style={{ flex: 1, height: 1, background: 'var(--c-border)' }} />
              </div>

              <p style={{ textAlign: 'center', fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
                حساب ندارید؟{' '}
                <Link href="/register" style={{ color: 'var(--c-primary)', fontWeight: 600 }}>
                  ثبت‌نام
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}