'use client'

import { useState, useRef } from 'react'

const initialBrand = {
  personality: ['نوآور', 'قابل اعتماد', 'پویا', 'شفاف'],
  values: ['کیفیت', 'صداقت', 'مشتری‌محوری', 'پایداری'],
  tone: 'حرفه‌ای و دوستانه — رسمی اما قابل دسترس، بدون اصطلاحات پیچیده',
  promise: 'راه‌حل‌هایی که واقعاً کار می‌کنند — ساده، سریع و قابل اعتماد',
  essence: 'اعتماد از طریق سادگی',
}

const mockHistory = [
  { id: 1, date: '۱۴۰۳/۰۹/۱۵', user: 'علی احمدی', changes: 'ویرایش لحن برند و اضافه‌کردن ارزش پایداری' },
  { id: 2, date: '۱۴۰۳/۰۸/۲۲', user: 'علی احمدی', changes: 'بارگذاری سند برند اولیه' },
  { id: 3, date: '۱۴۰۳/۰۷/۱۰', user: 'سیستم ROS AI', changes: 'تولید خودکار سند برند اولیه' },
]

function TagEditor({
  tags, onChange,
}: {
  tags: string[]
  onChange: (tags: string[]) => void
}) {
  const [input, setInput] = useState('')

  function add() {
    const t = input.trim()
    if (t && !tags.includes(t)) onChange([...tags, t])
    setInput('')
  }

  function remove(tag: string) {
    onChange(tags.filter(t => t !== tag))
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.65rem' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            display: 'inline-flex', alignItems: 'center', gap: '.3rem',
            padding: '.25rem .75rem',
            background: 'var(--c-primary-bg)', color: 'var(--c-primary)',
            border: '1px solid rgba(46,107,94,.2)',
            borderRadius: 100, fontSize: '.8rem', fontWeight: 500,
          }}>
            {tag}
            <button onClick={() => remove(tag)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--c-primary)', padding: 0, lineHeight: 1,
              fontSize: '.85rem', display: 'flex', alignItems: 'center',
            }}>×</button>
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); add() } }}
          placeholder="تگ جدید + Enter"
          style={{
            flex: 1, padding: '.6rem .85rem',
            background: 'var(--c-surface-2)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-sm)',
            fontSize: '.85rem', color: 'var(--c-text)',
            outline: 'none',
          }}
        />
        <button onClick={add} style={{
          padding: '.6rem 1rem',
          background: 'var(--c-primary)', color: 'white',
          border: 'none', borderRadius: 'var(--r-sm)',
          fontSize: '.82rem', fontWeight: 600, cursor: 'pointer',
        }}>
          افزودن
        </button>
      </div>
    </div>
  )
}

function InlineTextarea({
  value, onChange, placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      style={{
        width: '100%', padding: '.75rem 1rem',
        background: 'var(--c-surface-2)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-sm)',
        fontSize: '.88rem', color: 'var(--c-text)',
        lineHeight: 1.7, resize: 'vertical',
        outline: 'none', boxSizing: 'border-box' as const,
        fontFamily: 'inherit',
      }}
    />
  )
}

export default function BrandStrategyPage() {
  const [brand, setBrand] = useState(initialBrand)
  const [saved, setSaved] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  function set(k: string, v: unknown) {
    setBrand(b => ({ ...b, [k]: v }))
    setSaved(false)
  }

  async function handleSave() {
    await new Promise(r => setTimeout(r, 700))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    await new Promise(r => setTimeout(r, 1500))
    setUploading(false)
    setUploadedFile(file.name)
  }

  const cardStyle = {
    background: 'var(--c-surface)',
    border: '1px solid var(--c-border)',
    borderRadius: 'var(--r-xl)',
    padding: '1.75rem',
    marginBottom: '1.25rem',
  }

  const sectionLabel = {
    fontSize: '.72rem', fontWeight: 600 as const,
    letterSpacing: '.08em', textTransform: 'uppercase' as const,
    color: 'var(--c-text-light)', marginBottom: '.65rem',
    display: 'block' as const,
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'flex-start',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '1rem', marginBottom: '2rem',
      }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.25rem' }}>
            سند برند
          </h1>
          <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
            هویت، شخصیت و جوهره برند خود را اینجا مدیریت کنید.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setShowHistory(h => !h)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '.4rem',
              padding: '.6rem 1.1rem',
              background: showHistory ? 'var(--c-primary-bg)' : 'transparent',
              border: `1.5px solid ${showHistory ? 'var(--c-primary)' : 'var(--c-border)'}`,
              borderRadius: 'var(--r-sm)',
              fontSize: '.82rem', fontWeight: 500,
              color: showHistory ? 'var(--c-primary)' : 'var(--c-text-muted)',
              cursor: 'pointer',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            تاریخچه تغییرات
          </button>
          <button
            onClick={handleSave}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '.4rem',
              padding: '.6rem 1.25rem',
              background: saved ? '#059669' : 'var(--c-primary)',
              color: 'white', border: 'none',
              borderRadius: 'var(--r-sm)',
              fontSize: '.85rem', fontWeight: 600,
              cursor: 'pointer', transition: 'background .3s',
            }}
          >
            {saved ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ذخیره شد
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                  <polyline points="17 21 17 13 7 13 7 21"/>
                  <polyline points="7 3 7 8 15 8"/>
                </svg>
                ثبت و ذخیره
              </>
            )}
          </button>
        </div>
      </div>

      {/* History panel */}
      {showHistory && (
        <div style={{ ...cardStyle, background: 'var(--c-surface-2)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '1rem' }}>تاریخچه تغییرات</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {mockHistory.map((h, i) => (
              <div key={h.id} style={{
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
                paddingBottom: i < mockHistory.length - 1 ? '.75rem' : 0,
                borderBottom: i < mockHistory.length - 1 ? '1px solid var(--c-border)' : 'none',
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                  background: i === 0 ? 'var(--c-primary)' : 'var(--c-border)',
                  marginTop: 6,
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '.82rem', fontWeight: 500, marginBottom: '.2rem' }}>
                    {h.changes}
                  </div>
                  <div style={{ fontSize: '.72rem', color: 'var(--c-text-light)' }}>
                    {h.user} — {h.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personality */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'var(--c-primary-bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>شخصیت برند</h2>
        </div>
        <label style={sectionLabel}>تگ‌های شخصیتی</label>
        <TagEditor tags={brand.personality} onChange={v => set('personality', v)} />
      </div>

      {/* Values */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: '#EEF2FF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>ارزش‌های برند</h2>
        </div>
        <label style={sectionLabel}>ارزش‌های کلیدی</label>
        <TagEditor tags={brand.values} onChange={v => set('values', v)} />
      </div>

      {/* Tone */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: '#FFF7ED',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>لحن و صدای برند</h2>
        </div>
        <label style={sectionLabel}>توضیح لحن برند</label>
        <InlineTextarea
          value={brand.tone}
          onChange={v => set('tone', v)}
          placeholder="لحن برند خود را توصیف کنید..."
        />
      </div>

      {/* Promise */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: '#F0FDF4',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>قول برند</h2>
        </div>
        <label style={sectionLabel}>Brand Promise</label>
        <InlineTextarea
          value={brand.promise}
          onChange={v => set('promise', v)}
          placeholder="چه قولی به مخاطبان خود می‌دهید؟"
        />
      </div>

      {/* Essence */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: '#FDF4FF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>جوهره برند</h2>
        </div>
        <label style={sectionLabel}>Brand Essence — یک جمله یا عبارت</label>
        <input
          value={brand.essence}
          onChange={e => set('essence', e.target.value)}
          placeholder="جوهره برند خود را در یک جمله بنویسید..."
          style={{
            width: '100%', padding: '.8rem 1rem',
            background: 'var(--c-surface-2)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-sm)',
            fontSize: '.95rem', color: 'var(--c-text)',
            outline: 'none', boxSizing: 'border-box' as const,
            fontFamily: 'inherit',
          }}
        />
      </div>

      {/* Upload */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.4rem' }}>بارگذاری سند برند</h2>
        <p style={{ fontSize: '.83rem', color: 'var(--c-text-muted)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          اگر سند برند کامل دارید می‌توانید آن را آپلود کنید. سیستم ROS اطلاعات را استخراج می‌کند.
        </p>

        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={handleUpload} style={{ display: 'none' }} />

        {uploadedFile ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1rem 1.25rem',
            background: 'var(--c-primary-bg)',
            border: '1px solid rgba(46,107,94,.2)',
            borderRadius: 'var(--r-lg)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6"/>
              </svg>
              <div>
                <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--c-primary)' }}>{uploadedFile}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--c-text-muted)' }}>بارگذاری موفق</div>
              </div>
            </div>
            <button
              onClick={() => setUploadedFile(null)}
              style={{
                background: 'none', border: 'none',
                color: 'var(--c-text-light)', cursor: 'pointer', fontSize: '1.1rem',
              }}
            >×</button>
          </div>
        ) : (
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            style={{
              width: '100%', padding: '1.5rem',
              background: 'var(--c-surface-2)',
              border: '2px dashed var(--c-border)',
              borderRadius: 'var(--r-lg)',
              cursor: uploading ? 'wait' : 'pointer',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '.5rem',
            }}
          >
            {uploading ? (
              <span style={{ fontSize: '.88rem', color: 'var(--c-text-muted)' }}>در حال بارگذاری...</span>
            ) : (
              <>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-text-light)" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <span style={{ fontSize: '.88rem', color: 'var(--c-text-muted)', fontWeight: 500 }}>
                  کلیک کنید یا فایل را اینجا بکشید
                </span>
                <span style={{ fontSize: '.75rem', color: 'var(--c-text-light)' }}>
                  PDF، Word — حداکثر ۱۰ مگابایت
                </span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Save bottom */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '.5rem' }}>
        <button onClick={handleSave} style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          padding: '.8rem 2rem',
          background: saved ? '#059669' : 'var(--c-primary)',
          color: 'white', border: 'none',
          borderRadius: 'var(--r-sm)',
          fontSize: '.95rem', fontWeight: 700,
          cursor: 'pointer', transition: 'background .3s',
        }}>
          {saved ? '✓ ذخیره شد' : 'ثبت تغییرات'}
        </button>
      </div>

    </div>
  )
}