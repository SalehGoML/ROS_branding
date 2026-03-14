'use client'

import { useState } from 'react'

const mockAnalyses = [
  { id: 1, user: 'علی احمدی',    brand: 'زودکس',     industry: 'تکنولوژی',    status: 'complete', score: 78, date: '۱۴۰۳/۰۹/۱۵', duration: '۳ دقیقه',  channels: ['اینستاگرام','وب‌سایت'] },
  { id: 2, user: 'سارا موسوی',   brand: 'گل‌نار',    industry: 'صنایع غذایی', status: 'complete', score: 65, date: '۱۴۰۳/۰۹/۱۵', duration: '۴ دقیقه',  channels: ['اینستاگرام'] },
  { id: 3, user: 'رضا کریمی',    brand: 'تکنو پارس', industry: 'تکنولوژی',    status: 'pending',  score: 0,  date: '۱۴۰۳/۰۹/۱۵', duration: '—',        channels: ['وب‌سایت','پشتیبانی'] },
  { id: 4, user: 'کامران نصیری', brand: 'آتیه برند', industry: 'خدمات ROSلی',  status: 'error',    score: 0,  date: '۱۴۰۳/۰۹/۱۴', duration: '—',        channels: ['بسته‌بندی'] },
  { id: 5, user: 'نیلوفر رضایی', brand: 'نیکا',      industry: 'سلامت',       status: 'complete', score: 81, date: '۱۴۰۳/۰۹/۱۴', duration: '۲ دقیقه',  channels: ['اینستاگرام','وب‌سایت','پشتیبانی'] },
  { id: 6, user: 'داود شریفی',   brand: 'راهکار',    industry: 'آموزش',       status: 'complete', score: 59, date: '۱۴۰۳/۰۹/۱۳', duration: '۵ دقیقه',  channels: ['وب‌سایت'] },
]

const statusMap: Record<string, { label: string; bg: string; color: string }> = {
  complete: { label: 'کامل',      bg: 'rgba(52,211,153,.1)',  color: '#34D399' },
  pending:  { label: 'در صف',     bg: 'rgba(245,158,11,.1)',  color: '#FBBF24' },
  error:    { label: 'خطادار',    bg: 'rgba(239,68,68,.1)',   color: '#F87171' },
}

export default function AdminAnalysisPage() {
  const [statusFilter, setStatusFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [rerunning, setRerunning] = useState<number | null>(null)
  const [msg, setMsg] = useState('')

  const filtered = mockAnalyses.filter(a => {
    const matchStatus = statusFilter === 'all' || a.status === statusFilter
    const matchSearch = a.brand.includes(search) || a.user.includes(search) || a.industry.includes(search)
    return matchStatus && matchSearch
  })

  async function handleRerun(id: number) {
    setRerunning(id)
    await new Promise(r => setTimeout(r, 1500))
    setRerunning(null)
    setMsg(`تحلیل #${id} مجدداً در صف قرار گرفت.`)
    setTimeout(() => setMsg(''), 3000)
  }

  const thStyle = { padding: '.65rem 1.1rem', textAlign: 'right' as const, fontSize: '.7rem', fontWeight: 600 as const, color: 'rgba(255,255,255,.3)', whiteSpace: 'nowrap' as const, background: 'rgba(255,255,255,.02)' }
  const tdStyle = { padding: '.8rem 1.1rem', fontSize: '.8rem', color: 'rgba(255,255,255,.7)', borderTop: '1px solid rgba(255,255,255,.04)', whiteSpace: 'nowrap' as const }

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '.2rem' }}>مدیریت تحلیل‌ها</h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.35)' }}>نظارت بر تحلیل‌های AI</p>
        </div>
        <button onClick={() => { const csv = filtered.map(a => `${a.id},${a.user},${a.brand},${a.status},${a.score}`).join('\n'); const blob = new Blob([`id,user,brand,status,score\n${csv}`], { type: 'text/csv' }); const el = document.createElement('a'); el.href = URL.createObjectURL(blob); el.download = 'analyses.csv'; el.click() }} style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.6rem 1.1rem', background: 'rgba(46,107,94,.2)', color: '#4A8C7C', border: '1px solid rgba(46,107,94,.3)', borderRadius: 8, fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}>
          خروجی Excel
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'کل تحلیل‌ها', value: mockAnalyses.length, color: '#4A8C7C' },
          { label: 'در صف / خطادار', value: mockAnalyses.filter(a => a.status !== 'complete').length, color: '#FBBF24' },
          { label: 'میانگین نمره', value: `${Math.round(mockAnalyses.filter(a => a.score > 0).reduce((s, a) => s + a.score, 0) / mockAnalyses.filter(a => a.score > 0).length)}٪`, color: '#A78BFA' },
        ].map(s => (
          <div key={s.label} style={{ background: '#1C2333', border: '1px solid rgba(255,255,255,.06)', borderRadius: 10, padding: '1rem 1.25rem' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.35)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {msg && <div style={{ padding: '.65rem 1rem', marginBottom: '1rem', background: 'rgba(52,211,153,.1)', border: '1px solid rgba(52,211,153,.2)', borderRadius: 8, fontSize: '.82rem', color: '#34D399' }}>{msg}</div>}

      {/* Filters */}
      <div style={{ display: 'flex', gap: '.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="جستجو برند، کاربر، صنعت..." style={{ padding: '.6rem 1rem', minWidth: 220, background: '#1C2333', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, fontSize: '.82rem', color: 'white', outline: 'none' }} />
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{ padding: '.6rem .85rem', background: '#1C2333', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, fontSize: '.8rem', color: 'rgba(255,255,255,.6)', outline: 'none', cursor: 'pointer' }}>
          <option value="all">همه وضعیت‌ها</option>
          <option value="complete">کامل</option>
          <option value="pending">در صف</option>
          <option value="error">خطادار</option>
        </select>
      </div>

      <div style={{ background: '#1C2333', border: '1px solid rgba(255,255,255,.06)', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr>{['#','کاربر','برند','صنعت','کانال‌ها','وضعیت','نمره','تاریخ','زمان','عملیات'].map(h => <th key={h} style={thStyle}>{h}</th>)}</tr></thead>
            <tbody>
              {filtered.map(a => (
                <tr key={a.id}>
                  <td style={{ ...tdStyle, color: 'rgba(255,255,255,.3)' }}>#{a.id}</td>
                  <td style={{ ...tdStyle, color: 'white' }}>{a.user}</td>
                  <td style={tdStyle}>{a.brand}</td>
                  <td style={tdStyle}>{a.industry}</td>
                  <td style={tdStyle}>
                    <div style={{ display: 'flex', gap: '.3rem', flexWrap: 'wrap' }}>
                      {a.channels.map(ch => <span key={ch} style={{ fontSize: '.65rem', padding: '.1rem .45rem', background: 'rgba(255,255,255,.06)', borderRadius: 4, color: 'rgba(255,255,255,.5)' }}>{ch}</span>)}
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <span style={{ fontSize: '.68rem', fontWeight: 600, padding: '.18rem .55rem', borderRadius: 100, ...statusMap[a.status] }}>{statusMap[a.status].label}</span>
                  </td>
                  <td style={{ ...tdStyle, color: a.score > 0 ? '#4A8C7C' : 'rgba(255,255,255,.2)', fontWeight: 700 }}>{a.score > 0 ? `${a.score}٪` : '—'}</td>
                  <td style={{ ...tdStyle, color: 'rgba(255,255,255,.35)' }}>{a.date}</td>
                  <td style={{ ...tdStyle, color: 'rgba(255,255,255,.35)' }}>{a.duration}</td>
                  <td style={tdStyle}>
                    <button onClick={() => handleRerun(a.id)} disabled={rerunning === a.id} style={{ padding: '.3rem .65rem', background: 'rgba(46,107,94,.15)', color: '#4A8C7C', border: '1px solid rgba(46,107,94,.2)', borderRadius: 6, fontSize: '.7rem', cursor: 'pointer' }}>
                      {rerunning === a.id ? '...' : 'تحلیل مجدد'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
