'use client'

import { useState, useRef } from 'react'

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: 'علی احمدی',
    email: 'ali@zoodex.com',
    phone: '۰۹۱۲ ۳۴۵ ۶۷۸۹',
    lang: 'fa',
  })
  const [passwords, setPasswords] = useState({ current: '', next: '', confirm: '' })
  const [logo, setLogo] = useState<string | null>(null)
  const [saved, setSaved] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  function set(k: string, v: string) { setForm(f => ({ ...f, [k]: v })) }
  function setPass(k: string, v: string) { setPasswords(p => ({ ...p, [k]: v })) }

  async function handleSave(section: string) {
    await new Promise(r => setTimeout(r, 600))
    setSaved(section)
    setTimeout(() => setSaved(''), 2500)
  }

  function handleLogo(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setLogo(reader.result as string)
    reader.readAsDataURL(file)
  }

  const inputStyle = {
    width: '100%', padding: '.8rem 1rem',
    background: 'var(--c-surface-2)',
    border: '1px solid var(--c-border)',
    borderRadius: 'var(--r-sm)',
    fontSize: '.9rem', color: 'var(--c-text)',
    outline: 'none', boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    fontSize: '.75rem', fontWeight: 500 as const,
    color: 'var(--c-text-muted)',
    display: 'block' as const, marginBottom: '.4rem',
  }

  const cardStyle = {
    background: 'var(--c-surface)',
    border: '1px solid var(--c-border)',
    borderRadius: 'var(--r-xl)',
    padding: '1.75rem',
    marginBottom: '1.25rem',
  }

  const saveBtn = (section: string) => (
    <button
      onClick={() => handleSave(section)}
      style={{
        padding: '.65rem 1.5rem',
        background: saved === section ? '#059669' : 'var(--c-primary)',
        color: 'white', border: 'none',
        borderRadius: 'var(--r-sm)',
        fontSize: '.85rem', fontWeight: 600,
        cursor: 'pointer', transition: 'background .3s',
        display: 'flex', alignItems: 'center', gap: '.4rem',
      }}
    >
      {saved === section ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          ذخیره شد
        </>
      ) : 'ذخیره تغییرات'}
    </button>
  )

  return (
    <div style={{ padding: '2rem', maxWidth: 720, margin: '0 auto' }}>

      {/* Page title */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.25rem' }}>
          پروفایل و تنظیمات
        </h1>
        <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
          اطلاعات حساب کاربری و تنظیمات شخصی خود را مدیریت کنید.
        </p>
      </div>

      {/* Plan badge */}
      <div style={{
        ...cardStyle,
        background: 'var(--c-primary)',
        color: 'white',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div>
          <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.7)', marginBottom: '.3rem' }}>
            پلن فعلی
          </div>
          <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>پلن حرفه‌ای</div>
          <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.7)', marginTop: '.2rem' }}>
            انقضا: ۱۴۰۳/۱۲/۲۹ — وضعیت: فعال
          </div>
        </div>
        <button style={{
          padding: '.6rem 1.25rem',
          background: 'rgba(255,255,255,.15)',
          border: '1.5px solid rgba(255,255,255,.3)',
          borderRadius: 'var(--r-sm)',
          color: 'white', fontSize: '.82rem', fontWeight: 600,
          cursor: 'pointer',
        }}>
          ارتقا پلن
        </button>
      </div>

      {/* Logo */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>لوگو برند</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{
            width: 80, height: 80,
            background: logo ? 'transparent' : 'var(--c-primary-bg)',
            border: '2px dashed var(--c-border)',
            borderRadius: 'var(--r-lg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden', flexShrink: 0,
          }}>
            {logo
              ? <img src={logo} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
            }
          </div>
          <div>
            <input ref={fileRef} type="file" accept="image/*" onChange={handleLogo} style={{ display: 'none' }} />
            <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => fileRef.current?.click()}
                style={{
                  padding: '.55rem 1.1rem',
                  background: 'var(--c-primary-bg)', color: 'var(--c-primary)',
                  border: '1px solid rgba(46,107,94,.2)',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '.82rem', fontWeight: 600, cursor: 'pointer',
                }}
              >
                {logo ? 'تغییر لوگو' : 'بارگذاری لوگو'}
              </button>
              {logo && (
                <button
                  onClick={() => setLogo(null)}
                  style={{
                    padding: '.55rem 1.1rem',
                    background: '#FEF2F2', color: '#DC2626',
                    border: '1px solid #FECACA',
                    borderRadius: 'var(--r-sm)',
                    fontSize: '.82rem', fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  حذف لوگو
                </button>
              )}
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--c-text-light)', marginTop: '.5rem' }}>
              PNG یا SVG — حداکثر ۲ مگابایت
            </div>
          </div>
        </div>
      </div>

      {/* Personal info */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>اطلاعات شخصی</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>نام کامل</label>
            <input value={form.name} onChange={e => set('name', e.target.value)} style={inputStyle} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>ایمیل</label>
              <input value={form.email} onChange={e => set('email', e.target.value)}
                style={{ ...inputStyle, direction: 'ltr' }} />
            </div>
            <div>
              <label style={labelStyle}>شماره تماس</label>
              <input value={form.phone} onChange={e => set('phone', e.target.value)} style={inputStyle} />
            </div>
          </div>
          <div>
            <label style={labelStyle}>زبان سیستم</label>
            <div style={{ display: 'flex', gap: '.6rem' }}>
              {[{ value: 'fa', label: 'فارسی' }, { value: 'en', label: 'English' }].map(l => (
                <button key={l.value} onClick={() => set('lang', l.value)} style={{
                  padding: '.5rem 1.1rem',
                  background: form.lang === l.value ? 'var(--c-primary)' : 'var(--c-surface-2)',
                  color: form.lang === l.value ? 'white' : 'var(--c-text-muted)',
                  border: `1.5px solid ${form.lang === l.value ? 'var(--c-primary)' : 'var(--c-border)'}`,
                  borderRadius: 'var(--r-sm)',
                  fontSize: '.85rem', fontWeight: 500, cursor: 'pointer',
                }}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem' }}>{saveBtn('info')}</div>
      </div>

      {/* Password */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>تغییر رمز عبور</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>رمز عبور فعلی</label>
            <input value={passwords.current} onChange={e => setPass('current', e.target.value)}
              type="password" style={{ ...inputStyle, direction: 'ltr' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>رمز عبور جدید</label>
              <input value={passwords.next} onChange={e => setPass('next', e.target.value)}
                type="password" style={{ ...inputStyle, direction: 'ltr' }} />
            </div>
            <div>
              <label style={labelStyle}>تکرار رمز جدید</label>
              <input value={passwords.confirm} onChange={e => setPass('confirm', e.target.value)}
                type="password" style={{ ...inputStyle, direction: 'ltr' }} />
            </div>
          </div>
          {passwords.next && passwords.confirm && passwords.next !== passwords.confirm && (
            <div style={{
              padding: '.6rem 1rem',
              background: '#FEF2F2', border: '1px solid #FECACA',
              borderRadius: 'var(--r-sm)',
              fontSize: '.8rem', color: '#DC2626',
            }}>
              رمز عبور جدید با تکرار آن مطابقت ندارد.
            </div>
          )}
        </div>
        <div style={{ marginTop: '1.5rem' }}>{saveBtn('pass')}</div>
      </div>

      {/* Danger zone */}
      <div style={{
        ...cardStyle,
        border: '1px solid #FECACA',
        background: '#FFF5F5',
      }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#DC2626', marginBottom: '.4rem' }}>
          ناحیه خطر
        </h2>
        <p style={{ fontSize: '.83rem', color: '#B91C1C', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          حذف حساب کاربری غیرقابل بازگشت است و تمام داده‌های برند شما از بین خواهد رفت.
        </p>

        {!deleteConfirm ? (
          <button
            onClick={() => setDeleteConfirm(true)}
            style={{
              padding: '.6rem 1.25rem',
              background: 'transparent', color: '#DC2626',
              border: '1.5px solid #FECACA',
              borderRadius: 'var(--r-sm)',
              fontSize: '.85rem', fontWeight: 600, cursor: 'pointer',
            }}
          >
            حذف حساب کاربری
          </button>
        ) : (
          <div style={{
            padding: '1rem', background: '#FEE2E2',
            border: '1px solid #FECACA', borderRadius: 'var(--r-sm)',
          }}>
            <p style={{ fontSize: '.85rem', color: '#B91C1C', marginBottom: '1rem', fontWeight: 600 }}>
              آیا مطمئن هستید؟ این عمل قابل بازگشت نیست.
            </p>
            <div style={{ display: 'flex', gap: '.75rem' }}>
              <button
                onClick={() => setDeleteConfirm(false)}
                style={{
                  padding: '.55rem 1.1rem',
                  background: 'white', color: 'var(--c-text-muted)',
                  border: '1px solid var(--c-border)',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '.82rem', cursor: 'pointer',
                }}
              >
                انصراف
              </button>
              <button style={{
                padding: '.55rem 1.1rem',
                background: '#DC2626', color: 'white',
                border: 'none', borderRadius: 'var(--r-sm)',
                fontSize: '.82rem', fontWeight: 700, cursor: 'pointer',
              }}>
                بله، حساب را حذف کن
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}