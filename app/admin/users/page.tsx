'use client'

import React, { useState, useEffect } from 'react'
import { adminAPI, AdminUser } from '@/lib/api'

const planColor: Record<string, { bg: string; color: string }> = {
  'استارتر': { bg: 'rgba(107,114,128,.15)', color: '#9CA3AF' },
  'حرفه‌ای':  { bg: 'rgba(46,107,94,.2)',   color: '#4A8C7C' },
  'سازمانی': { bg: 'rgba(124,58,237,.2)',   color: '#A78BFA' },
}

function Skeleton({ h = 18, w = '100%' }: { h?: number; w?: string }) {
  return <div style={{ height: h, width: w, borderRadius: 6, background: 'rgba(255,255,255,.06)', animation: 'pulse 1.4s ease-in-out infinite' }} />
}

export default function AdminUsersPage() {
  const [users, setUsers]         = useState<AdminUser[]>([])
  const [total, setTotal]         = useState(0)
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState<string | null>(null)
  const [search, setSearch]       = useState('')
  const [selected, setSelected]   = useState<string | null>(null)
  const [actionMsg, setActionMsg] = useState('')
  const [page, setPage]           = useState(1)
  const limit = 20

  async function loadUsers() {
    setLoading(true)
    try {
      const res = await adminAPI.getUsers({ page, limit, search: search || undefined })
      setUsers(res.users ?? [])
      setTotal(res.total ?? 0)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'خطای سرور')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadUsers() }, [page])

  function handleSearch() { setPage(1); loadUsers() }

  async function handleRoleChange(id: string, role: 'user' | 'admin') {
    setActionMsg('در حال اجرا...')
    try {
      await adminAPI.updateUserRole(id, role)
      setActionMsg(`نقش کاربر به "${role}" تغییر یافت`)
      loadUsers()
    } catch (e: unknown) {
      setActionMsg(e instanceof Error ? e.message : 'خطا')
    }
    setTimeout(() => setActionMsg(''), 3000)
  }

  const thStyle = {
    padding: '.65rem 1.1rem', textAlign: 'right' as const,
    fontSize: '.7rem', fontWeight: 600 as const,
    color: 'rgba(255,255,255,.3)', whiteSpace: 'nowrap' as const,
    background: 'rgba(255,255,255,.02)',
  }
  const tdStyle = {
    padding: '.8rem 1.1rem', fontSize: '.8rem',
    color: 'rgba(255,255,255,.7)', whiteSpace: 'nowrap' as const,
    borderTop: '1px solid rgba(255,255,255,.04)',
  }

  return (
    <div style={{ padding: '2rem' }}>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '.2rem' }}>مدیریت کاربران</h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.35)' }}>{total} کاربر ثبت‌شده</p>
        </div>
        <button onClick={() => {
          const csv = users.map(u => `${u.full_name},${u.email},${u.role},${u.is_verified}`).join('\n')
          const blob = new Blob([`نام,ایمیل,نقش,تأیید\n${csv}`], { type: 'text/csv' })
          const a = document.createElement('a'); a.href = URL.createObjectURL(blob)
          a.download = 'users.csv'; a.click()
        }} style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', padding: '.6rem 1.1rem', background: 'rgba(46,107,94,.2)', color: '#4A8C7C', border: '1px solid rgba(46,107,94,.3)', borderRadius: 8, fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          خروجی CSV
        </button>
      </div>

      {/* Error */}
      {error && <div style={{ padding: '.9rem 1.2rem', marginBottom: '1rem', borderRadius: 8, background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.25)', color: '#F87171', fontSize: '.83rem' }}>⚠ {error}</div>}

      {/* Action msg */}
      {actionMsg && <div style={{ padding: '.65rem 1rem', marginBottom: '1rem', background: 'rgba(52,211,153,.1)', border: '1px solid rgba(52,211,153,.2)', borderRadius: 8, fontSize: '.82rem', color: '#34D399' }}>{actionMsg}</div>}

      {/* Search */}
      <div style={{ display: 'flex', gap: '.75rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input value={search} onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          placeholder="جستجو نام یا ایمیل..."
          style={{ padding: '.6rem 1rem', minWidth: 240, background: '#1C2333', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, fontSize: '.82rem', color: 'white', outline: 'none' }} />
        <button onClick={handleSearch} style={{ padding: '.6rem 1.1rem', background: 'rgba(46,107,94,.2)', color: '#4A8C7C', border: '1px solid rgba(46,107,94,.3)', borderRadius: 8, fontSize: '.8rem', cursor: 'pointer' }}>جستجو</button>
        <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.3)', marginRight: 'auto' }}>{total} نتیجه</span>
      </div>

      {/* Table */}
      <div style={{ background: '#1C2333', border: '1px solid rgba(255,255,255,.06)', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          {loading ? (
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)}
            </div>
          ) : users.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'rgba(255,255,255,.3)', fontSize: '.85rem' }}>کاربری یافت نشد</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['نام','ایمیل','نقش','وضعیت','تاریخ عضویت','عملیات'].map(h => (
                    <th key={h} style={thStyle}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <React.Fragment key={u.id}>
                    <tr key={u.id} onClick={() => setSelected(selected === u.id ? null : u.id)}
                      style={{ cursor: 'pointer', background: selected === u.id ? 'rgba(46,107,94,.08)' : 'transparent' }}>
                      <td style={{ ...tdStyle, color: 'white', fontWeight: 500 }}>{u.full_name}</td>
                      <td style={{ ...tdStyle, direction: 'ltr', textAlign: 'right' }}>{u.email}</td>
                      <td style={tdStyle}>
                        <span style={{ fontSize: '.68rem', fontWeight: 700, padding: '.18rem .55rem', borderRadius: 100, background: u.role === 'admin' ? 'rgba(124,58,237,.2)' : 'rgba(107,114,128,.15)', color: u.role === 'admin' ? '#A78BFA' : '#9CA3AF' }}>
                          {u.role === 'admin' ? 'ادمین' : 'کاربر'}
                        </span>
                      </td>
                      <td style={tdStyle}>
                        <span style={{ fontSize: '.68rem', fontWeight: 600, padding: '.18rem .55rem', borderRadius: 100, background: u.is_verified ? 'rgba(52,211,153,.1)' : 'rgba(255,255,255,.06)', color: u.is_verified ? '#34D399' : 'rgba(255,255,255,.3)' }}>
                          {u.is_verified ? 'تأییدشده' : 'تأییدنشده'}
                        </span>
                      </td>
                      <td style={{ ...tdStyle, color: 'rgba(255,255,255,.3)' }}>
                        {new Date(u.created_at).toLocaleDateString('fa-IR')}
                      </td>
                      <td style={tdStyle}>
                        <div style={{ display: 'flex', gap: '.4rem' }}>
                          {u.role !== 'admin' ? (
                            <button onClick={e => { e.stopPropagation(); handleRoleChange(u.id, 'admin') }} style={{ padding: '.3rem .65rem', background: 'rgba(124,58,237,.15)', color: '#A78BFA', border: '1px solid rgba(124,58,237,.2)', borderRadius: 6, fontSize: '.7rem', cursor: 'pointer' }}>ادمین</button>
                          ) : (
                            <button onClick={e => { e.stopPropagation(); handleRoleChange(u.id, 'user') }} style={{ padding: '.3rem .65rem', background: 'rgba(239,68,68,.1)', color: '#F87171', border: '1px solid rgba(239,68,68,.2)', borderRadius: 6, fontSize: '.7rem', cursor: 'pointer' }}>کاربر</button>
                          )}
                        </div>
                      </td>
                    </tr>
                    {selected === u.id && (
                      <tr key={`${u.id}-detail`}>
                        <td colSpan={6} style={{ padding: '1rem 1.5rem', background: 'rgba(46,107,94,.05)', borderTop: '1px solid rgba(255,255,255,.04)' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '1rem' }}>
                            {[
                              { label: 'ایمیل', value: u.email },
                              { label: 'تلفن', value: u.phone || '—' },
                              { label: 'نقش', value: u.role },
                              { label: 'تأیید', value: u.is_verified ? 'تأییدشده' : 'تأییدنشده' },
                              { label: 'تاریخ عضویت', value: new Date(u.created_at).toLocaleDateString('fa-IR') },
                            ].map(d => (
                              <div key={d.label}>
                                <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.3)', marginBottom: '.2rem' }}>{d.label}</div>
                                <div style={{ fontSize: '.82rem', color: 'white' }}>{d.value}</div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {total > limit && (
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', gap: '.5rem', justifyContent: 'center' }}>
            <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page === 1}
              style={{ padding: '.4rem .85rem', background: 'rgba(255,255,255,.06)', color: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 6, fontSize: '.78rem', cursor: 'pointer', opacity: page === 1 ? .4 : 1 }}>
              قبلی
            </button>
            <span style={{ padding: '.4rem .85rem', fontSize: '.78rem', color: 'rgba(255,255,255,.4)' }}>
              {page} / {Math.ceil(total / limit)}
            </span>
            <button onClick={() => setPage(p => p+1)} disabled={page >= Math.ceil(total/limit)}
              style={{ padding: '.4rem .85rem', background: 'rgba(255,255,255,.06)', color: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 6, fontSize: '.78rem', cursor: 'pointer', opacity: page >= Math.ceil(total/limit) ? .4 : 1 }}>
              بعدی
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
