'use client'

import { useState } from 'react'

const mockHistory = [
  {
    id: 1, date: '۱۴۰۳/۰۹/۱۵', time: '۱۴:۳۲',
    score: 78, prevScore: 71,
    channels: ['اینستاگرام', 'وب‌سایت', 'بسته‌بندی'],
    status: 'complete',
    summary: 'بهبود ۷ امتیازی در انسجام کلی برند. لحن وب‌سایت بهتر شده.',
  },
  {
    id: 2, date: '۱۴۰۳/۰۸/۲۸', time: '۱۱:۱۵',
    score: 71, prevScore: 68,
    channels: ['اینستاگرام', 'پشتیبانی'],
    status: 'complete',
    summary: 'افت جزئی در پشتیبانی. لحن رسمی‌تر از حد تعریف‌شده.',
  },
  {
    id: 3, date: '۱۴۰۳/۰۸/۱۰', time: '۰۹:۴۵',
    score: 68, prevScore: 62,
    channels: ['وب‌سایت', 'بسته‌بندی'],
    status: 'complete',
    summary: 'بهبود در انتقال ارزش‌های برند روی وب‌سایت.',
  },
  {
    id: 4, date: '۱۴۰۳/۰۷/۲۰', time: '۱۶:۰۰',
    score: 62, prevScore: null,
    channels: ['اینستاگرام', 'وب‌سایت', 'پشتیبانی', 'بسته‌بندی'],
    status: 'complete',
    summary: 'اولین تحلیل برند. شناسایی ۳ نقطه ضعف اصلی.',
  },
]

export default function HistoryPage() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div style={{ padding: '2rem', maxWidth: 860, margin: '0 auto' }}>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.25rem' }}>
          تاریخچه تحلیل‌ها
        </h1>
        <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
          روند پیشرفت برند شما در طول زمان.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Line */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0,
          right: 19, width: 2,
          background: 'var(--c-border)',
          zIndex: 0,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {mockHistory.map((item, i) => (
            <div key={item.id} style={{ display: 'flex', gap: '1.25rem', position: 'relative', zIndex: 1 }}>

              {/* Dot */}
              <div style={{
                width: 40, height: 40, flexShrink: 0,
                background: i === 0 ? 'var(--c-primary)' : 'var(--c-surface)',
                border: `2px solid ${i === 0 ? 'var(--c-primary)' : 'var(--c-border)'}`,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke={i === 0 ? 'white' : 'var(--c-text-muted)'} strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>

              {/* Card */}
              <div
                onClick={() => setSelected(selected === item.id ? null : item.id)}
                style={{
                  flex: 1,
                  background: 'var(--c-surface)',
                  border: `1px solid ${selected === item.id ? 'var(--c-primary)' : 'var(--c-border)'}`,
                  borderRadius: 'var(--r-xl)',
                  padding: '1.25rem 1.5rem',
                  cursor: 'pointer',
                  transition: 'border-color .15s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.75rem' }}>
                  <div>
                    <div style={{ fontSize: '.75rem', color: 'var(--c-text-light)', marginBottom: '.2rem' }}>
                      {item.date} — {item.time}
                    </div>
                    <div style={{ fontSize: '.9rem', fontWeight: 600 }}>{item.summary}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                    {item.prevScore !== null && (
                      <div style={{
                        fontSize: '.78rem', fontWeight: 600,
                        color: item.score > item.prevScore ? '#059669' : '#DC2626',
                        display: 'flex', alignItems: 'center', gap: '.2rem',
                      }}>
                        {item.score > item.prevScore ? '↑' : '↓'}
                        {Math.abs(item.score - (item.prevScore ?? 0))} امتیاز
                      </div>
                    )}
                    <div style={{
                      fontSize: '1.3rem', fontWeight: 800,
                      color: 'var(--c-primary)',
                    }}>
                      {item.score}
                      <span style={{ fontSize: '.7rem', fontWeight: 400, color: 'var(--c-text-light)' }}>/۱۰۰</span>
                    </div>
                  </div>
                </div>

                {/* Channels */}
                <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.75rem' }}>
                  {item.channels.map(ch => (
                    <span key={ch} style={{
                      fontSize: '.7rem', padding: '.2rem .6rem',
                      background: 'var(--c-surface-2)',
                      border: '1px solid var(--c-border)',
                      borderRadius: 100, color: 'var(--c-text-muted)',
                    }}>{ch}</span>
                  ))}
                </div>

                {/* Expanded */}
                {selected === item.id && (
                  <div style={{
                    marginTop: '1rem', paddingTop: '1rem',
                    borderTop: '1px solid var(--c-border)',
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                      {[
                        { label: 'شخصیت برند', value: Math.round(item.score * 0.95) },
                        { label: 'هماهنگی لحن', value: Math.round(item.score * 0.88) },
                        { label: 'انتقال ارزش‌ها', value: Math.round(item.score * 0.82) },
                      ].map(m => (
                        <div key={m.label} style={{
                          background: 'var(--c-surface-2)',
                          borderRadius: 'var(--r-sm)',
                          padding: '.85rem',
                        }}>
                          <div style={{ fontSize: '.72rem', color: 'var(--c-text-muted)', marginBottom: '.4rem' }}>
                            {m.label}
                          </div>
                          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--c-primary)' }}>
                            {m.value}٪
                          </div>
                          <div style={{
                            marginTop: '.4rem', height: 4,
                            background: 'var(--c-border)', borderRadius: 2, overflow: 'hidden',
                          }}>
                            <div style={{
                              height: '100%', width: `${m.value}%`,
                              background: 'var(--c-primary)', borderRadius: 2,
                            }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <button style={{
                      marginTop: '1rem',
                      padding: '.5rem 1rem',
                      background: 'var(--c-primary-bg)', color: 'var(--c-primary)',
                      border: '1px solid rgba(46,107,94,.2)',
                      borderRadius: 'var(--r-sm)',
                      fontSize: '.8rem', fontWeight: 600, cursor: 'pointer',
                    }}>
                      مشاهده گزارش کامل ←
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
