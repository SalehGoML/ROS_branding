'use client'

import { useState } from 'react'

const channels = [
  {
    id: 'instagram', name: 'اینستاگرام', icon: '📱',
    connected: true, lastUpdate: '۲ روز پیش',
    scores: { personality: 82, tone: 75, values: 68 },
    status: 'good',
    inputType: 'url',
    inputValue: 'instagram.com/zoodex',
  },
  {
    id: 'website', name: 'وب‌سایت', icon: '🌐',
    connected: true, lastUpdate: '۱ هفته پیش',
    scores: { personality: 91, tone: 88, values: 85 },
    status: 'good',
    inputType: 'url',
    inputValue: 'zoodex.com',
  },
  {
    id: 'support', name: 'پشتیبانی', icon: '🎧',
    connected: false, lastUpdate: null,
    scores: { personality: 0, tone: 0, values: 0 },
    status: 'empty',
    inputType: 'file',
    inputValue: '',
  },
  {
    id: 'packaging', name: 'بسته‌بندی', icon: '📦',
    connected: true, lastUpdate: '۳ هفته پیش',
    scores: { personality: 65, tone: 70, values: 60 },
    status: 'medium',
    inputType: 'image',
    inputValue: '',
  },
]

const statusMap: Record<string, { label: string; bg: string; color: string; bar: string }> = {
  good:   { label: 'هماهنگ',   bg: '#ECFDF5', color: '#059669', bar: '#059669' },
  medium: { label: 'متوسط',    bg: '#FFFBEB', color: '#D97706', bar: '#F59E0B' },
  bad:    { label: 'ناسازگار', bg: '#FEF2F2', color: '#DC2626', bar: '#DC2626' },
  empty:  { label: 'بدون داده', bg: 'var(--c-surface-2)', color: 'var(--c-text-muted)', bar: 'var(--c-border)' },
}

function ScoreRow({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
      <span style={{ fontSize: '.75rem', color: 'var(--c-text-muted)', minWidth: 110 }}>{label}</span>
      <div style={{
        flex: 1, height: 6, background: 'var(--c-surface)',
        borderRadius: 3, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${value}%`,
          background: color, borderRadius: 3,
          transition: 'width .6s ease',
        }} />
      </div>
      <span style={{ fontSize: '.75rem', fontWeight: 600, color, minWidth: 32 }}>{value}٪</span>
    </div>
  )
}

export default function AnalysisPage() {
  const [items, setItems] = useState(channels)
  const [uploading, setUploading] = useState<string | null>(null)
  const [editingUrl, setEditingUrl] = useState<string | null>(null)
  const [urlInput, setUrlInput] = useState('')

  async function handleConnect(id: string) {
    setUploading(id)
    await new Promise(r => setTimeout(r, 1500))
    setItems(prev => prev.map(ch =>
      ch.id === id
        ? { ...ch, connected: true, lastUpdate: 'همین الان', status: 'medium', scores: { personality: 55, tone: 48, values: 52 } }
        : ch
    ))
    setUploading(null)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.25rem' }}>
          تحلیل نقاط تماس
        </h1>
        <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
          برند شما در هر کانال چقدر خودش بوده است؟
        </p>
      </div>

      {/* Summary row */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
        gap: '1rem', marginBottom: '2rem',
      }}>
        {items.map(ch => {
          const avg = ch.connected
            ? Math.round((ch.scores.personality + ch.scores.tone + ch.scores.values) / 3)
            : 0
          const s = statusMap[ch.status]
          return (
            <div key={ch.id} style={{
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              borderRadius: 'var(--r-lg)',
              padding: '1.1rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '.3rem' }}>{ch.icon}</div>
              <div style={{ fontSize: '.8rem', fontWeight: 600, marginBottom: '.3rem' }}>{ch.name}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: s.color }}>
                {ch.connected ? `${avg}٪` : '—'}
              </div>
              <span style={{
                fontSize: '.65rem', fontWeight: 600,
                padding: '.15rem .5rem', borderRadius: 100,
                background: s.bg, color: s.color,
              }}>
                {s.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Channel details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {items.map(ch => {
          const s = statusMap[ch.status]
          return (
            <div key={ch.id} style={{
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              borderRadius: 'var(--r-xl)',
              padding: '1.75rem',
            }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: s.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}>
                    {ch.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '.95rem' }}>{ch.name}</div>
                    <div style={{ fontSize: '.72rem', color: 'var(--c-text-light)' }}>
                      {ch.connected ? `آخرین به‌روزرسانی: ${ch.lastUpdate}` : 'متصل نشده'}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span style={{
                    fontSize: '.72rem', fontWeight: 600,
                    padding: '.2rem .65rem', borderRadius: 100,
                    background: s.bg, color: s.color,
                  }}>
                    {s.label}
                  </span>
                  {ch.connected && (
                    <button
                      onClick={() => handleConnect(ch.id)}
                      disabled={uploading === ch.id}
                      style={{
                        padding: '.45rem .9rem',
                        background: 'var(--c-primary-bg)', color: 'var(--c-primary)',
                        border: '1px solid rgba(46,107,94,.2)',
                        borderRadius: 'var(--r-sm)',
                        fontSize: '.78rem', fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      {uploading === ch.id ? 'در حال به‌روزرسانی...' : 'به‌روزرسانی'}
                    </button>
                  )}
                </div>
              </div>

              {/* Scores or empty state */}
              {ch.connected ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
                  <ScoreRow label="شخصیت برند" value={ch.scores.personality} color={s.bar} />
                  <ScoreRow label="هماهنگی لحن" value={ch.scores.tone} color={s.bar} />
                  <ScoreRow label="انتقال ارزش‌ها" value={ch.scores.values} color={s.bar} />
                </div>
              ) : (
                <div style={{
                  padding: '1.25rem',
                  background: 'var(--c-surface-2)',
                  border: '1px dashed var(--c-border)',
                  borderRadius: 'var(--r-lg)',
                }}>
                  <p style={{ fontSize: '.83rem', color: 'var(--c-text-muted)', marginBottom: '1rem', lineHeight: 1.7 }}>
                    {ch.inputType === 'file'
                      ? `برای تحلیل ${ch.name}، فایل صوتی یا متنی مکالمات نمونه را بارگذاری کنید.`
                      : ch.inputType === 'image'
                      ? `برای تحلیل ${ch.name}، تصاویر طراحی را بارگذاری کنید.`
                      : `لینک صفحه ${ch.name} را وارد کنید.`}
                  </p>

                  {ch.inputType === 'url' ? (
                    <div style={{ display: 'flex', gap: '.5rem' }}>
                      <input
                        value={editingUrl === ch.id ? urlInput : ''}
                        onFocus={() => { setEditingUrl(ch.id); setUrlInput('') }}
                        onChange={e => setUrlInput(e.target.value)}
                        placeholder={`https://`}
                        style={{
                          flex: 1, padding: '.6rem .85rem',
                          background: 'white',
                          border: '1px solid var(--c-border)',
                          borderRadius: 'var(--r-sm)',
                          fontSize: '.85rem', direction: 'ltr', outline: 'none',
                        }}
                      />
                      <button
                        onClick={() => handleConnect(ch.id)}
                        disabled={uploading === ch.id}
                        style={{
                          padding: '.6rem 1.1rem',
                          background: 'var(--c-primary)', color: 'white',
                          border: 'none', borderRadius: 'var(--r-sm)',
                          fontSize: '.82rem', fontWeight: 600, cursor: 'pointer',
                        }}
                      >
                        {uploading === ch.id ? '...' : 'اتصال'}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleConnect(ch.id)}
                      disabled={uploading === ch.id}
                      style={{
                        padding: '.6rem 1.25rem',
                        background: 'var(--c-primary)', color: 'white',
                        border: 'none', borderRadius: 'var(--r-sm)',
                        fontSize: '.82rem', fontWeight: 600, cursor: 'pointer',
                        display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      {uploading === ch.id ? 'در حال بارگذاری...' : 'بارگذاری فایل'}
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
