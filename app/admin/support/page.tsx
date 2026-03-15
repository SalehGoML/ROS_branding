'use client'

import { useState, useEffect } from 'react'
import { adminAPI, AdminContact } from '@/lib/api'

const statusMap: Record<string, { label: string; bg: string; color: string }> = {
  new:      { label: 'جدید',        bg: 'rgba(239,68,68,.1)',   color: '#F87171' },
  unread:   { label: 'خوانده‌نشده', bg: 'rgba(239,68,68,.1)',   color: '#F87171' },
  read:     { label: 'خوانده‌شده',  bg: 'rgba(52,211,153,.1)',  color: '#34D399' },
  resolved: { label: 'حل‌شده',      bg: 'rgba(255,255,255,.06)', color: 'rgba(255,255,255,.3)' },
}

function Skeleton({ h = 18 }: { h?: number }) {
  return <div style={{ height: h, borderRadius: 6, background: 'rgba(255,255,255,.06)', animation: 'pulse 1.4s ease-in-out infinite' }} />
}

export default function AdminSupportPage() {
  const [contacts, setContacts]   = useState<AdminContact[]>([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState('all')
  const [selected, setSelected]   = useState<string | null>(null)
  const [msg, setMsg]             = useState('')

  async function load() {
    setLoading(true)
    try {
      const res = await adminAPI.getContacts()
      setContacts(res.contacts ?? [])
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'خطای سرور')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function handleStatus(id: string, status: 'read' | 'unread' | 'resolved') {
    try {
      await adminAPI.updateContactStatus(id, status)
      setMsg(`وضعیت به "${statusMap[status].label}" تغییر یافت`)
      load()
    } catch (e: unknown) {
      setMsg(e instanceof Error ? e.message : 'خطا')
    }
    setTimeout(() => setMsg(''), 3000)
  }

  const filtered = contacts.filter(c => statusFilter === 'all' || c.status === statusFilter)

  const thStyle = {
    padding: '.65rem 1.1rem', textAlign: 'right' as const,
    fontSize: '.7rem', fontWeight: 600 as const,
    color: 'rgba(255,255,255,.3)', background: 'rgba(255,255,255,.02)',
    whiteSpace: 'nowrap' as const,
  }
  const tdStyle = {
    padding: '.8rem 1.1rem', fontSize: '.8rem',
    color: 'rgba(255,255,255,.7)', borderTop: '1px solid rgba(255,255,255,.04)',
    whiteSpace: 'nowrap' as const,
  }

  const counts = {
    unread:   contacts.filter(c => c.status === 'unread').length,
    read:     contacts.filter(c => c.status === 'read').length,
    resolved: contacts.filter(c => c.status === 'resolved').length,
  }

  return (
    <div style={{ padding: '2rem' }}>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>

      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '.2rem' }}>تماس‌ها</h1>
        <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.35)' }}>{counts.unread} پیام خوانده‌نشده</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,160px),1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'خوانده‌نشده', value: counts.unread,   color: '#F87171' },
          { label: 'خوانده‌شده',  value: counts.read,     color: '#34D399' },
          { label: 'حل‌شده',      value: counts.resolved, color: '#6B7280' },
        ].map(s => (
          <div key={s.label} style={{ background: '#1C2333', border: '1px solid rgba(255,255,255,.06)', borderRadius: 10, padding: '1rem 1.25rem' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: s.color }}>{loading ? '—' : s.value}</div>
            <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.35)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {error && <div style={{ padding: '.9rem 1.2rem', marginBottom: '1rem', borderRadius: 8, background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.25)', color: '#F87171', fontSize: '.83rem' }}>⚠ {error}</div>}
      {msg && <div style={{ padding: '.65rem 1rem', marginBottom: '1rem', background: 'rgba(52,211,153,.1)', border: '1px solid rgba(52,211,153,.2)', borderRadius: 8, fontSize: '.82rem', color: '#34D399' }}>{msg}</div>}

      {/* Filters */}
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {[['all','همه'], ['unread','خوانده‌نشده'], ['read','خوانده‌شده'], ['resolved','حل‌شده']].map(([val, label]) => (
          <button key={val} onClick={() => setStatusFilter(val)} style={{
            padding: '.4rem .9rem',
            background: statusFilter === val ? 'rgba(46,107,94,.3)' : 'rgba(255,255,255,.04)',
            color: statusFilter === val ? '#4A8C7C' : 'rgba(255,255,255,.4)',
            border: `1px solid ${statusFilter === val ? 'rgba(46,107,94,.4)' : 'rgba(255,255,255,.08)'}`,
            borderRadius: 100, fontSize: '.78rem', cursor: 'pointer',
          }}>{label}</button>
        ))}
      </div>

      {/* Table */}
      <div style={{ background: '#1C2333', border: '1px solid rgba(255,255,255,.06)', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          {loading ? (
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'rgba(255,255,255,.3)', fontSize: '.85rem' }}>پیامی یافت نشد</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>{['نام', 'ایمیل', 'موضوع', 'وضعیت', 'تاریخ', 'عملیات'].map(h => <th key={h} style={thStyle}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {filtered.map(c => (
                  <>
                    <tr key={c.id} onClick={() => setSelected(selected === c.id ? null : c.id)}
                      style={{ cursor: 'pointer', background: selected === c.id ? 'rgba(46,107,94,.08)' : 'transparent' }}>
                      <td style={{ ...tdStyle, color: 'white', fontWeight: 500 }}>{c.name}</td>
                      <td style={{ ...tdStyle, direction: 'ltr', textAlign: 'right' }}>{c.email}</td>
                      <td style={{ ...tdStyle, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.subject}</td>
                      <td style={tdStyle}>
                        <span style={{ fontSize: '.68rem', fontWeight: 600, padding: '.18rem .55rem', borderRadius: 100, ...statusMap[c.status ?? 'unread'] }}>
                          {statusMap[c.status ?? 'unread'].label}
                        </span>
                      </td>
                      <td style={{ ...tdStyle, color: 'rgba(255,255,255,.3)' }}>
                        {new Date(c.created_at).toLocaleDateString('fa-IR')}
                      </td>
                      <td style={tdStyle}>
                        <div style={{ display: 'flex', gap: '.4rem' }}>
                          {c.status !== 'read' && (
                            <button onClick={e => { e.stopPropagation(); handleStatus(c.id, 'read') }}
                              style={{ padding: '.3rem .65rem', background: 'rgba(52,211,153,.1)', color: '#34D399', border: '1px solid rgba(52,211,153,.2)', borderRadius: 6, fontSize: '.7rem', cursor: 'pointer' }}>
                              خوانده‌شد
                            </button>
                          )}
                          {c.status !== 'resolved' && (
                            <button onClick={e => { e.stopPropagation(); handleStatus(c.id, 'resolved') }}
                              style={{ padding: '.3rem .65rem', background: 'rgba(107,114,128,.15)', color: '#9CA3AF', border: '1px solid rgba(107,114,128,.2)', borderRadius: 6, fontSize: '.7rem', cursor: 'pointer' }}>
                              حل‌شد
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                    {selected === c.id && (
                      <tr key={`${c.id}-detail`}>
                        <td colSpan={6} style={{ padding: '1.25rem 1.5rem', background: 'rgba(46,107,94,.05)', borderTop: '1px solid rgba(255,255,255,.04)' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '.75rem', marginBottom: '1rem' }}>
                            {[
                              { label: 'نام', value: c.name },
                              { label: 'ایمیل', value: c.email },
                              { label: 'تلفن', value: (c as any).phone || '—' },
                              { label: 'تاریخ', value: new Date(c.created_at).toLocaleDateString('fa-IR') },
                            ].map(d => (
                              <div key={d.label}>
                                <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.3)', marginBottom: '.2rem' }}>{d.label}</div>
                                <div style={{ fontSize: '.82rem', color: 'white' }}>{d.value}</div>
                              </div>
                            ))}
                          </div>
                          <div style={{ fontSize: '.85rem', color: 'white', lineHeight: 1.8, background: '#0F1117', padding: '1rem', borderRadius: 8, border: '1px solid rgba(255,255,255,.06)', whiteSpace: 'pre-wrap' }}>
                            {c.message}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
