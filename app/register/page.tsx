'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [method, setMethod] = useState<'email' | 'phone'>('email')
  const [form, setForm] = useState({ identifier: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function set(k: string, v: string) {
    setForm(f => ({ ...f, [k]: v }))
    setError('')
  }

  async function handleSubmit() {
    if (!form.identifier || !form.password) {
      setError('لطفاً همه فیلدها را پر کنید.')
      return
    }
    if (form.password.length < 8) {
      setError('رمز عبور باید حداقل ۸ کاراکتر باشد.')
      return
    }
    setLoading(true)
    // TODO: connect to Go API POST /api/auth/register
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    router.push('/onboarding/brand-info')
  }

  const inputStyle = {
    width: '100%', padding: '.85rem 1rem',
    background: 'var(--c-surface-2)',
    border: '1px solid var(--c-border)',
    borderRadius: 'var(--r-sm)',
    fontSize: '.95rem', color: 'var(--c-text)',
    outline: 'none', boxSizing: 'border-box' as const,
    transition: 'border-color .15s',
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
          <h1 style={{
            fontSize: '1.5rem', fontWeight: 700,
            letterSpacing: '-.02em', marginBottom: '.4rem',
          }}>
            ایجاد حساب کاربری
          </h1>
          <p style={{ fontSize: '.88rem', color: 'var(--c-text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            برای شروع تحلیل برند خود، ابتدا یک حساب کاربری بسازید.
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

            {/* Identifier */}
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

            {/* Password */}
            <div>
              <label style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--c-text-muted)', display: 'block', marginBottom: '.4rem' }}>
                رمز عبور
              </label>
              <input
                value={form.password}
                onChange={e => set('password', e.target.value)}
                placeholder="حداقل ۸ کاراکتر"
                type="password"
                style={{ ...inputStyle, direction: 'ltr' }}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
            </div>

            {/* Error */}
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

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                padding: '.9rem',
                background: loading ? 'var(--c-primary-lt)' : 'var(--c-primary)',
                color: 'white', border: 'none',
                borderRadius: 'var(--r-sm)',
                fontSize: '.95rem', fontWeight: 700,
                cursor: loading ? 'wait' : 'pointer',
                marginTop: '.25rem',
              }}
            >
              {loading ? 'در حال پردازش...' : 'ساخت حساب و ورود به ابزار'}
            </button>

          </div>

          {/* Divider */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            margin: '1.5rem 0',
          }}>
            <div style={{ flex: 1, height: 1, background: 'var(--c-border)' }} />
            <span style={{ fontSize: '.75rem', color: 'var(--c-text-light)' }}>یا</span>
            <div style={{ flex: 1, height: 1, background: 'var(--c-border)' }} />
          </div>

          <p style={{ textAlign: 'center', fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
            حساب دارید؟{' '}
            <Link href="/login" style={{ color: 'var(--c-primary)', fontWeight: 600 }}>
              ورود
            </Link>
          </p>
        </div>

        <p style={{
          textAlign: 'center', fontSize: '.75rem',
          color: 'var(--c-text-light)', marginTop: '1.5rem', lineHeight: 1.7,
        }}>
          با ساخت حساب، با{' '}
          <Link href="/terms" style={{ color: 'var(--c-primary)' }}>شرایط استفاده</Link>
          {' '}و{' '}
          <Link href="/privacy" style={{ color: 'var(--c-primary)' }}>سیاست حریم خصوصی</Link>
          {' '}موافقت می‌کنید.
        </p>

      </div>
    </main>
  )
}