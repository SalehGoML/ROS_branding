'use client'

import { useState } from 'react'

const reports = [
  { id: 1, title: 'گزارش هفتگی برند', date: '۱۴۰۳/۰۹/۱۵', type: 'weekly', score: 78, size: '۲.۴ مگابایت' },
  { id: 2, title: 'گزارش هفتگی برند', date: '۱۴۰۳/۰۹/۰۸', type: 'weekly', score: 74, size: '۲.۱ مگابایت' },
  { id: 3, title: 'گزارش ماهانه آبان', date: '۱۴۰۳/۰۹/۰۱', type: 'monthly', score: 71, size: '۵.۸ مگابایت' },
  { id: 4, title: 'گزارش هفتگی برند', date: '۱۴۰۳/۰۸/۲۵', type: 'weekly', score: 69, size: '۲.۰ مگابایت' },
  { id: 5, title: 'گزارش ماهانه مهر', date: '۱۴۰۳/۰۸/۰۱', type: 'monthly', score: 65, size: '۵.۲ مگابایت' },
]

const typeMap: Record<string, { label: string; bg: string; color: string }> = {
  weekly:  { label: 'هفتگی',  bg: 'var(--c-primary-bg)', color: 'var(--c-primary)' },
  monthly: { label: 'ماهانه', bg: '#EEF2FF',             color: '#6366F1' },
}

export default function ReportsPage() {
  const [filter, setFilter] = useState('all')
  const [downloading, setDownloading] = useState<number | null>(null)

  async function handleDownload(id: number) {
    setDownloading(id)
    await new Promise(r => setTimeout(r, 1200))
    setDownloading(null)
  }

  const filtered = filter === 'all' ? reports : reports.filter(r => r.type === filter)

  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.25rem' }}>
          گزارش‌ها
        </h1>
        <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
          گزارش‌های تحلیلی برند شما.
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.5rem' }}>
        {[
          { value: 'all', label: 'همه' },
          { value: 'weekly', label: 'هفتگی' },
          { value: 'monthly', label: 'ماهانه' },
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
        {filtered.map(r => (
          <div key={r.id} style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.25rem 1.5rem',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: 42, height: 42,
                background: typeMap[r.type].bg,
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke={typeMap[r.type].color} strokeWidth="1.8">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.2rem' }}>
                  <span style={{ fontSize: '.9rem', fontWeight: 600 }}>{r.title}</span>
                  <span style={{
                    fontSize: '.68rem', fontWeight: 600,
                    padding: '.1rem .5rem', borderRadius: 100,
                    background: typeMap[r.type].bg,
                    color: typeMap[r.type].color,
                  }}>
                    {typeMap[r.type].label}
                  </span>
                </div>
                <div style={{ fontSize: '.75rem', color: 'var(--c-text-light)' }}>
                  {r.date} — {r.size}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--c-primary)' }}>{r.score}</div>
                <div style={{ fontSize: '.65rem', color: 'var(--c-text-light)' }}>نمره برند</div>
              </div>
              <button
                onClick={() => handleDownload(r.id)}
                disabled={downloading === r.id}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                  padding: '.55rem 1.1rem',
                  background: downloading === r.id ? 'var(--c-surface-2)' : 'var(--c-primary-bg)',
                  color: 'var(--c-primary)',
                  border: '1px solid rgba(46,107,94,.2)',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '.8rem', fontWeight: 600,
                  cursor: downloading === r.id ? 'wait' : 'pointer',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                {downloading === r.id ? 'در حال دانلود...' : 'دانلود PDF'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
