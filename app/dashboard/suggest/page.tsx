'use client'

import { useState } from 'react'

const suggestions = [
  {
    id: 1, priority: 'high', channel: 'پشتیبانی',
    title: 'اصلاح لحن در تیم پشتیبانی',
    detail: 'لحن برند در مکالمات پشتیبانی رسمی‌تر از حد تعریف‌شده در سند برند است. این فاصله باعث می‌شود مخاطب احساس کند با دو برند متفاوت روبرو است.',
    action: 'دستورالعمل لحن برند را برای تیم پشتیبانی آماده کنید.',
    done: false,
  },
  {
    id: 2, priority: 'high', channel: 'اینستاگرام',
    title: 'تقویت انتقال ارزش‌های برند',
    detail: 'در محتوای اینستاگرام، ارزش «پایداری» که در سند برند تعریف شده تقریباً منتقل نمی‌شود. کپشن‌ها بیشتر روی محصول تمرکز دارند نه ارزش‌ها.',
    action: 'یک قالب محتوایی برای انتقال ارزش‌های برند در کپشن‌ها طراحی کنید.',
    done: false,
  },
  {
    id: 3, priority: 'medium', channel: 'وب‌سایت',
    title: 'یکپارچه‌سازی صدای برند در متون',
    detail: 'برخی صفحات وب‌سایت (خصوصاً صفحه درباره ROS) با لحن تعریف‌شده در سند برند همخوانی کامل ندارند.',
    action: 'متن صفحه «درباره ROS» را با سند برند مطابقت دهید.',
    done: true,
  },
  {
    id: 4, priority: 'low', channel: 'بسته‌بندی',
    title: 'هماهنگی بصری شخصیت برند',
    detail: 'طراحی بسته‌بندی با ۷۰٪ از شخصیت برند هماهنگ است. عناصر بصری می‌توانند «نوآوری» را بهتر منعکس کنند.',
    action: 'در بازطراحی بعدی بسته‌بندی، المان‌های بصری نوآورانه‌تری اضافه کنید.',
    done: false,
  },
]

const priorityMap: Record<string, { label: string; bg: string; color: string }> = {
  high:   { label: 'مهم',   bg: '#FEE2E2', color: '#DC2626' },
  medium: { label: 'متوسط', bg: '#FEF3C7', color: '#D97706' },
  low:    { label: 'کم',    bg: '#ECFDF5', color: '#059669' },
}

export default function SuggestPage() {
  const [items, setItems] = useState(suggestions)
  const [filter, setFilter] = useState('all')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function toggle(id: number) {
    setItems(prev => prev.map(s => s.id === id ? { ...s, done: !s.done } : s))
  }

  const filtered = filter === 'all' ? items
    : filter === 'done' ? items.filter(s => s.done)
    : items.filter(s => !s.done && s.priority === filter)

  async function handleEmail() {
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.25rem' }}>
            پیشنهادنامه بهبود
          </h1>
          <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
            چگونه می‌توانید انسجام برند را افزایش دهید؟
          </p>
        </div>
        <button onClick={handleEmail} style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          padding: '.65rem 1.25rem',
          background: sent ? '#059669' : 'var(--c-primary)',
          color: 'white', border: 'none',
          borderRadius: 'var(--r-sm)',
          fontSize: '.85rem', fontWeight: 600,
          cursor: sending ? 'wait' : 'pointer',
          transition: 'background .3s',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          {sent ? 'ارسال شد ✓' : sending ? 'در حال ارسال...' : 'دریافت فایل به ایمیل'}
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'کل پیشنهادات', value: items.length },
          { label: 'انجام‌شده', value: items.filter(s => s.done).length },
          { label: 'باقی‌مانده', value: items.filter(s => !s.done).length },
        ].map(s => (
          <div key={s.label} style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-lg)',
            padding: '1.1rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--c-primary)' }}>{s.value}</div>
            <div style={{ fontSize: '.75rem', color: 'var(--c-text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { value: 'all', label: 'همه' },
          { value: 'high', label: 'مهم' },
          { value: 'medium', label: 'متوسط' },
          { value: 'low', label: 'کم‌اولویت' },
          { value: 'done', label: 'انجام‌شده' },
        ].map(f => (
          <button key={f.value} onClick={() => setFilter(f.value)} style={{
            padding: '.4rem .9rem',
            background: filter === f.value ? 'var(--c-primary)' : 'var(--c-surface)',
            color: filter === f.value ? 'white' : 'var(--c-text-muted)',
            border: `1.5px solid ${filter === f.value ? 'var(--c-primary)' : 'var(--c-border)'}`,
            borderRadius: 100,
            fontSize: '.8rem', fontWeight: 500, cursor: 'pointer',
          }}>
            {f.label}
          </button>
        ))}
      </div>

      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filtered.map(s => (
          <div key={s.id} style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.5rem',
            opacity: s.done ? .6 : 1,
            transition: 'opacity .2s',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <button onClick={() => toggle(s.id)} style={{
                width: 22, height: 22, flexShrink: 0,
                background: s.done ? 'var(--c-primary)' : 'transparent',
                border: `2px solid ${s.done ? 'var(--c-primary)' : 'var(--c-border)'}`,
                borderRadius: 6, cursor: 'pointer', marginTop: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {s.done && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                )}
              </button>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '.68rem', fontWeight: 700,
                    padding: '.15rem .55rem', borderRadius: 100,
                    background: priorityMap[s.priority].bg,
                    color: priorityMap[s.priority].color,
                  }}>
                    {priorityMap[s.priority].label}
                  </span>
                  <span style={{ fontSize: '.75rem', color: 'var(--c-text-light)' }}>{s.channel}</span>
                </div>
                <h3 style={{
                  fontSize: '.95rem', fontWeight: 600,
                  textDecoration: s.done ? 'line-through' : 'none',
                  marginBottom: '.5rem',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.7, marginBottom: '.75rem' }}>
                  {s.detail}
                </p>
                <div style={{
                  padding: '.65rem .85rem',
                  background: 'var(--c-primary-bg)',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '.78rem', color: 'var(--c-primary)', fontWeight: 500,
                  display: 'flex', alignItems: 'flex-start', gap: '.4rem',
                }}>
                  <span style={{ flexShrink: 0 }}>←</span>
                  {s.action}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
مشاوره رایگان
شروع کنید
مشاوره رایگان ←

بدون تعهد اولیه، فقط یک گفتگو.