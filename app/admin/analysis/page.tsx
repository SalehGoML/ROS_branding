'use client'

import { useState, useEffect } from 'react'
import { adminAPI, AdminAnalysis } from '@/lib/api'

const statusMap: Record<string, { label: string; bg: string; color: string }> = {
  complete: { label: 'کامل',   bg: 'rgba(52,211,153,.1)', color: '#34D399' },
  pending:  { label: 'در صف', bg: 'rgba(245,158,11,.1)', color: '#FBBF24' },
  error:    { label: 'خطا',   bg: 'rgba(239,68,68,.1)',  color: '#F87171' },
}

function Skeleton({ h = 18 }: { h?: number }) {
  return <div style={{ height: h, borderRadius: 6, background: 'rgba(255,255,255,.06)', animation: 'pulse 1.4s ease-in-out infinite' }} />
}

export default function AdminAnalysisPage() {
  const [analyses, setAnalyses] = useState<AdminAnalysis[]>([])
  const [total, setTotal]       = useState(0)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState<string | null>(null)
  const [search, setSearch]     = useState('')
  const [msg, setMsg]           = useState('')

  async function load() {
    setLoading(true)
    try {
      const res = await adminAPI.getAnalyses()
      setAnalyses(res.analyses ?? [])
      setTotal(res.total ?? 0)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'خطای سرور')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const filtered = analyses.filter(a =>
    !search || a.brand_name?.includes(search) || a.channel?.includes(search)
  )

  const avgScore = filtered.length
    ? Math.round(filtered.reduce((s, a) => s + a.score, 0) / filtered.length)
    : 0

  const thStyle = { padding: '.65rem 1.1rem', textAlign: 'right' as const, fontSize: '.7rem', fontWeight: 600 as const, color: 'rgba(255,255,255,.3)', whiteSpace: 'nowrap' as const, background: 'rgba(255,255,255,.02)' }
  const tdStyle = { padding: '.8rem 1.1rem', fontSize: '.8rem', color: 'rgba(255,255,255,.7)', borderTop: '1px solid rgba(255,255,255,.04)', whiteSpace: 'nowrap' as const }

  return (
    <div style={{ padding: '2rem' }}>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '.2rem' }}>مدیریت تحلیل‌ها</h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.35)' }}>{total} تحلیل ثبت‌شده</p>
        </div>
        <button onClick={() => {
          const csv = filtered.map(a => `${a.id},${a.brand_name},${a.channel},${a.score}`).join('\n')
          const blob = new Blob([`id,brand,channel,score\n${csv}`], { type: 'text/csv' })
          const el = document.createElement('a'); el.href = URL.createObjectURL(blob)
          el.download = 'analyses.csv'; el.click()
        }} style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.6rem 1.1rem', background: 'rgba(46,107,94,.2)', color: '#4A8C7C', border: '1px solid rgba(46,107,94,.3)', borderRadius: 8, fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}>
          خروجی CSV
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,200px),1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'کل تحلیل‌ها',  value: loading ? '—' : total,     color: '#4A8C7C' },
          { label: 'میانگین نمره', value: loading ? '—' : avgScore + '٪', color: '#A78BFA' },
        ].map(s => (
          <div key={s.label} style={{ background: '#1C2333', border: '1px solid rgba(255,255,255,.06)', borderRadius: 10, padding: '1rem 1.25rem' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.35)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {error && <div style={{ padding: '.9rem 1.2rem', marginBottom: '1rem', borderRadius: 8, background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.25)', color: '#F87171', fontSize: '.83rem' }}>⚠ {error}</div>}
      {msg && <div style={{ padding: '.65rem 1rem', marginBottom: '1rem', background: 'rgba(52,211,153,.1)', border: '1px solid rgba(52,211,153,.2)', borderRadius: 8, fontSize: '.82rem', color: '#34D399' }}>{msg}</div>}

      {/* Search */}
      <div style={{ display: 'flex', gap: '.75rem', marginBottom: '1.25rem' }}>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="جستجو برند یا کانال..."
          style={{ padding: '.6rem 1rem', minWidth: 220, background: '#1C2333', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, fontSize: '.82rem', color: 'white', outline: 'none' }} />
        <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.3)', alignSelf: 'center' }}>{filtered.length} نتیجه</span>
      </div>

      {/* Table */}
      <div style={{ background: '#1C2333', border: '1px solid rgba(255,255,255,.06)', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          {loading ? (
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'rgba(255,255,255,.3)', fontSize: '.85rem' }}>تحلیلی یافت نشد</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>{['#','برند','کانال','نمره','تاریخ'].map(h => <th key={h} style={thStyle}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {filtered.map(a => (
                  <tr key={a.id}>
                    <td style={{ ...tdStyle, color: 'rgba(255,255,255,.3)', fontSize: '.72rem' }}>{a.id.slice(0,8)}</td>
                    <td style={{ ...tdStyle, color: 'white', fontWeight: 500 }}>{a.brand_name ?? '—'}</td>
                    <td style={tdStyle}>
                      <span style={{ fontSize: '.7rem', padding: '.15rem .5rem', background: 'rgba(255,255,255,.06)', borderRadius: 4, color: 'rgba(255,255,255,.5)' }}>{a.channel}</span>
                    </td>
                    <td style={{ ...tdStyle, color: a.score >= 70 ? '#34D399' : a.score >= 50 ? '#FBBF24' : '#F87171', fontWeight: 700 }}>
                      {a.score}٪
                    </td>
                    <td style={{ ...tdStyle, color: 'rgba(255,255,255,.35)' }}>
                      {new Date(a.created_at).toLocaleDateString('fa-IR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
