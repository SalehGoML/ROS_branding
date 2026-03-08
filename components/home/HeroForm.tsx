'use client'

import { useState } from 'react'
import RegisterModal from '@/components/modals/RegisterModal'
import AIResultPanel from '@/components/modals/AIResultPanel'

const fieldOptions = [
  'آموزش', 'سلامت', 'تکنولوژی', 'غذایی',
  'خدمات مالی', 'خرده‌فروشی', 'گردشگری', 'ساختمان', 'دیگر',
]

export default function HeroForm() {
  const [brandName,    setBrandName]    = useState('')
  const [brandWebsite, setBrandWebsite] = useState('')
  const [brandField,   setBrandField]   = useState('')
  const [showRegister, setShowRegister] = useState(false)
  const [showResult,   setShowResult]   = useState(false)

  const handleRegisterSuccess = () => {
    setShowRegister(false)
    setShowResult(true)
  }

  return (
    <>
      <div style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-lg)',
        padding: '2rem 2rem 1.5rem',
        maxWidth: 680,
        boxShadow: 'var(--shadow-md)',
      }}>
        <p style={{
          fontSize: '.82rem', fontWeight: 500,
          color: 'var(--c-text-muted)', marginBottom: '1.25rem',
        }}>
          بررسی آینده برند شما — رایگان، در کمتر از ۲ دقیقه
        </p>

        {/* Fields */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '.75rem',
          marginBottom: '1.25rem',
        }}>
          <FormField label="نام برند">
            <input
              type="text"
              placeholder="مثلاً: زودکس"
              value={brandName}
              onChange={e => setBrandName(e.target.value)}
              style={inputStyle}
            />
          </FormField>

          <FormField label="وب‌سایت یا اینستاگرام">
            <input
              type="text"
              placeholder="www.brand.com"
              value={brandWebsite}
              onChange={e => setBrandWebsite(e.target.value)}
              style={inputStyle}
            />
          </FormField>

          <FormField label="حوزه فعالیت">
            <select
              value={brandField}
              onChange={e => setBrandField(e.target.value)}
              style={{ ...inputStyle, appearance: 'none' as const }}
            >
              <option value="" disabled>انتخاب کنید</option>
              {fieldOptions.map(f => <option key={f}>{f}</option>)}
            </select>
          </FormField>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '1rem',
        }}>
          <span style={{ fontSize: '.75rem', color: 'var(--c-text-light)' }}>
            تحلیل اولیه رایگان — بدون نیاز به ثبت‌نام
          </span>
          <button
            onClick={() => setShowRegister(true)}
            style={{
              display: 'flex', alignItems: 'center', gap: '.6rem',
              padding: '.75rem 1.75rem',
              background: 'var(--c-primary)', color: 'white',
              border: 'none', borderRadius: 'var(--r-sm)',
              fontSize: '.9rem', fontWeight: 600,
              cursor: 'pointer', whiteSpace: 'nowrap',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            بررسی آینده برند
          </button>
        </div>
      </div>

      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSuccess={handleRegisterSuccess}
        brandName={brandName   || 'برند شما'}
        brandField={brandField || 'عمومی'}
      />

      <AIResultPanel
        isOpen={showResult}
        onClose={() => setShowResult(false)}
        brandName={brandName   || 'برند شما'}
        brandField={brandField || 'عمومی'}
      />
    </>
  )
}

const inputStyle: React.CSSProperties = {
  height: 42, padding: '0 .9rem',
  background: 'var(--c-surface-2)',
  border: '1.5px solid var(--c-border)',
  borderRadius: 'var(--r-sm)',
  fontFamily: 'var(--font)', fontSize: '.88rem',
  color: 'var(--c-text)', outline: 'none', width: '100%',
}

function FormField({ label, children }: {
  label:    string
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
      <label style={{
        fontSize: '.72rem', fontWeight: 500,
        color: 'var(--c-text-light)', letterSpacing: '.04em',
      }}>
        {label}
      </label>
      {children}
    </div>
  )
}