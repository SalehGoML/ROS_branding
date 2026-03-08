'use client'

import { useState } from 'react'

interface Props {
  isOpen:      boolean
  onClose:     () => void
  onSuccess:   () => void
  brandName:   string
  brandField:  string
}

export default function RegisterModal({ isOpen, onClose, onSuccess }: Props) {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    if (!email)              { alert('لطفاً ایمیل را وارد کنید');               return }
    if (password.length < 8) { alert('رمز عبور باید حداقل ۸ کاراکتر باشد');    return }
    onSuccess()
  }

  if (!isOpen) return null

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0,
      background: 'rgba(26,25,22,.6)',
      backdropFilter: 'blur(8px)',
      zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1.5rem',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--c-surface)',
        borderRadius: 'var(--r-xl)',
        width: '100%', maxWidth: 520,
        padding: '2.5rem',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
      }}>

        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '1.25rem', left: '1.25rem',
          width: 32, height: 32,
          background: 'var(--c-surface-2)',
          border: 'none', borderRadius: '50%',
          cursor: 'pointer', fontSize: '.9rem',
          color: 'var(--c-text-muted)',
        }}>✕</button>

        {/* Icon */}
        <div style={{
          width: 52, height: 52,
          background: 'var(--c-primary-bg)',
          borderRadius: 'var(--r-md)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.25rem',
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
            stroke="var(--c-primary)" strokeWidth="1.8">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>

        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '.5rem' }}>
          ایجاد حساب رایگان
        </h3>
        <p style={{
          fontSize: '.9rem', color: 'var(--c-text-muted)',
          marginBottom: '2rem', lineHeight: 1.65,
        }}>
          برای دریافت تحلیل برند، یک حساب رایگان بسازید.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <InputField
            label="ایمیل یا شماره تماس"
            type="text"
            placeholder="info@brandname.com"
            value={email}
            onChange={setEmail}
          />
          <InputField
            label="رمز عبور"
            type="password"
            placeholder="حداقل ۸ کاراکتر"
            value={password}
            onChange={setPassword}
          />
        </div>

        <button onClick={handleSubmit} style={{
          width: '100%', height: 50,
          background: 'var(--c-primary)', color: 'white',
          border: 'none', borderRadius: 'var(--r-sm)',
          fontSize: '.95rem', fontWeight: 600,
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          ساخت حساب و شروع تحلیل
        </button>

        <p style={{
          fontSize: '.75rem', color: 'var(--c-text-light)',
          textAlign: 'center', marginTop: '1rem',
        }}>
          حساب دارید؟{' '}
          <a href="/login" style={{ color: 'var(--c-primary)' }}>ورود</a>
        </p>

      </div>
    </div>
  )
}

function InputField({ label, type, placeholder, value, onChange }: {
  label:       string
  type:        string
  placeholder: string
  value:       string
  onChange:    (v: string) => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
      <label style={{
        fontSize: '.72rem', fontWeight: 500,
        color: 'var(--c-text-light)', letterSpacing: '.04em',
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          height: 46, padding: '0 .9rem',
          background: 'var(--c-surface-2)',
          border: '1.5px solid var(--c-border)',
          borderRadius: 'var(--r-sm)',
          fontFamily: 'var(--font)', fontSize: '.88rem',
          color: 'var(--c-text)', outline: 'none', width: '100%',
        }}
      />
    </div>
  )
}