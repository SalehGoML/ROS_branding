'use client'

import { useState } from 'react'

const mockUsers = [
  { id: 1, name: 'علی احمدی',    email: 'ali@zoodex.com',     brand: 'زودکس',      plan: 'حرفه‌ای', status: 'active',   hasDoc: true,  lastActive: '۵ دقیقه پیش',  joined: '۱۴۰۳/۰۷/۱۰' },
  { id: 2, name: 'سارا موسوی',   email: 'sara@golnar.ir',     brand: 'گل‌نار',     plan: 'استارتر', status: 'active',   hasDoc: true,  lastActive: '۲ ساعت پیش',   joined: '۱۴۰۳/۰۸/۰۵' },
  { id: 3, name: 'رضا کریمی',    email: 'reza@technopars.com',brand: 'تکنو پارس',  plan: 'سازمانی', status: 'active',   hasDoc: true,  lastActive: 'دیروز',         joined: '۱۴۰۳/۰۶/۲۰' },
  { id: 4, name: 'مریم حسینی',   email: 'maryam@gmail.com',   brand: '—',          plan: 'استارتر', status: 'inactive', hasDoc: false, lastActive: '۳ روز پیش',    joined: '۱۴۰۳/۰۹/۰۱' },
  { id: 5, name: 'کامران نصیری', email: 'kamran@atieh.com',   brand: 'آتیه برند',  plan: 'حرفه‌ای', status: 'active',   hasDoc: true,  lastActive: '۱ ساعت پیش',   joined: '۱۴۰۳/۰۷/۲۸' },
  { id: 6, name: 'نیلوفر رضایی', email: 'niloofar@nika.ir',   brand: 'نیکا',       plan: 'حرفه‌ای', status: 'active',   hasDoc: false, lastActive: '۴ ساعت پیش',   joined: '۱۴۰۳/۰۸/۱۵' },
  { id: 7, name: 'داود شریفی',   email: 'davood@rahkar.io',   brand: 'راهکار',     plan: 'سازمانی', status: 'locked',   hasDoc: true,  lastActive: '۱ هفته پیش',   joined: '۱۴۰۳/۰۵/۱۱' },
]

const planColor: Record<string, { bg: string; color: string }> = {
  'استارتر': { bg: 'rgba(107,114,128,.15)', color: '#9CA3AF' },
  'حرفه‌ای':  { bg: 'rgba(46,107,94,.2)',   color: '#4A8C7C' },
  'سازمانی': { bg: 'rgba(124,58,237,.2)',   color: '#A78BFA' },
}

const statusMap: Record<string, { label: string; bg: string; color: string }> = {
  active:   { label: 'فعال',       bg: 'rgba(52,211,153,.1)',  color: '#34D399' },
  inactive: { label: 'غیرفعال',   bg: 'rgba(255,255,255,.06)', color: 'rgba(255,255,255,.3)' },
  locked:   { label: 'قفل‌شده',   bg: 'rgba(239,68,68,.1)',   color: '#F87171' },
}

export default function AdminUsersPage() {
  const [search, setSearch] = useState('')
  const [planFilter, setPlanFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [docFilter, setDocFilter] = useState('all')
  const [selected, setSelected] = useState<number | null>(null)
  const [actionMsg, setActionMsg] = useState('')

  const filtered = mockUsers.filter(u => {
    const matchSearch = u.name.includes(search) || u.email.includes(search) || u.brand.includes(search)
    const matchPlan = planFilter === 'all' || u.plan === planFilter
    const matchStatus = statusFilter === 'all' || u.status === statusFilter
    const matchDoc = docFilter === 'all' || (docFilter === 'has' ? u.hasDoc : !u.hasDoc)
    return matchSearch && matchPlan && matchStatus && matchDoc
  })

  async function handleAction(action: string, userId: number) {
    setActionMsg(`در حال اجرا...`)
    await new Promise(r => setTimeout(r, 800))
    setActionMsg(`عملیات "${action}" برای کاربر #${userId} انجام شد.`)
    setTimeout(() => setActionMsg(''), 3000)
  }

  const thStyle = {
    padding: '.65rem 1.1rem', textAlign: 'right' as const,
    fontSize: '.7rem', fontWeight: 600 as const,
    color: 'rgba(255,255,255,.3)', whiteSpace: 'nowrap' as const,
    background: 'rgba(255,255,255,.02)',
  }

  const tdStyle = {
    padding: '.8rem 1.1rem',
    fontSize: '.8rem', color: 'rgba(255,255,255,.7)',
    whiteSpace: 'nowrap' as const,
    borderTop: '1px solid rgba(255,255,255,.04)',
  }

  return (
    <div style={{ padding: '2rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '.2rem' }}>
            مدیریت کاربران
          </h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.35)' }}>
            {mockUsers.length} کاربر ثبت‌شده
          </p>
        </div>
        <button
          onClick={() => {
            const csv = filtered.map(u => `${u.name},${u.email},${u.brand},${u.plan},${u.status}`).join('\n')
            const blob = new Blob([`نام,ایمیل,برند,پلن,وضعیت\n${csv}`], { type: 'text/csv' })
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob)
            a.download = 'users.csv'; a.click()
          }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            padding: '.6rem 1.1rem',
            background: 'rgba(46,107,94,.2)', color: '#4A8C7C',
            border: '1px solid rgba(46,107,94,.3)',
            borderRadius: 8, fontSize: '.8rem', fontWeight: 600, cursor: 'pointer',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          خروجی Excel
        </button>
      </div>

      {/* Action message */}
      {actionMsg && (
        <div style={{
          padding: '.65rem 1rem', marginBottom: '1rem',
          background: 'rgba(52,211,153,.1)', border: '1px solid rgba(52,211,153,.2)',
          borderRadius: 8, fontSize: '.82rem', color: '#34D399',
        }}>
          {actionMsg}
        </div>
      )}

      {/* Filters */}
      <div style={{
        display: 'flex', gap: '.75rem', flexWrap: 'wrap',
        marginBottom: '1.25rem', alignItems: 'center',
      }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="جستجو نام، ایمیل، برند..."
          style={{
            padding: '.6rem 1rem', minWidth: 240,
            background: '#1C2333', border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 8, fontSize: '.82rem', color: 'white',
            outline: 'none',
          }}
        />
        {[
          { state: planFilter, setState: setPlanFilter, options: [['all','همه پلن‌ها'],['استارتر','استارتر'],['حرفه‌ای','حرفه‌ای'],['سازمانی','سازمانی']] },
          { state: statusFilter, setState: setStatusFilter, options: [['all','همه وضعیت‌ها'],['active','فعال'],['inactive','غیرفعال'],['locked','قفل']] },
          { state: docFilter, setState: setDocFilter, options: [['all','همه'],['has','دارای سند'],['no','بدون سند']] },
        ].map((f, i) => (
          <select key={i} value={f.state} onChange={e => f.setState(e.target.value)} style={{
            padding: '.6rem .85rem',
            background: '#1C2333', border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 8, fontSize: '.8rem', color: 'rgba(255,255,255,.6)',
            outline: 'none', cursor: 'pointer',
          }}>
            {f.options.map(([val, label]) => (
              <option key={val} value={val}>{label}</option>
            ))}
          </select>
        ))}
        <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.3)', marginRight: 'auto' }}>
          {filtered.length} نتیجه
        </span>
      </div>

      {/* Table */}
      <div style={{
        background: '#1C2333',
        border: '1px solid rgba(255,255,255,.06)',
        borderRadius: 12, overflow: 'hidden',
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['نام','ایمیل','برند','پلن','سند برند','وضعیت','آخرین فعالیت','عملیات'].map(h => (
                  <th key={h} style={thStyle}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => (
                <>
                  <tr
                    key={u.id}
                    onClick={() => setSelected(selected === u.id ? null : u.id)}
                    style={{ cursor: 'pointer', background: selected === u.id ? 'rgba(46,107,94,.08)' : 'transparent' }}
                  >
                    <td style={{ ...tdStyle, color: 'white', fontWeight: 500 }}>{u.name}</td>
                    <td style={{ ...tdStyle, direction: 'ltr', textAlign: 'right' }}>{u.email}</td>
                    <td style={tdStyle}>{u.brand}</td>
                    <td style={tdStyle}>
                      <span style={{
                        fontSize: '.68rem', fontWeight: 700,
                        padding: '.18rem .55rem', borderRadius: 100,
                        ...planColor[u.plan],
                      }}>
                        {u.plan}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <span style={{
                        fontSize: '.7rem', fontWeight: 600,
                        color: u.hasDoc ? '#34D399' : '#F87171',
                      }}>
                        {u.hasDoc ? '✓ دارد' : '✕ ندارد'}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <span style={{
                        fontSize: '.68rem', fontWeight: 600,
                        padding: '.18rem .55rem', borderRadius: 100,
                        ...statusMap[u.status],
                      }}>
                        {statusMap[u.status].label}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, color: 'rgba(255,255,255,.3)' }}>{u.lastActive}</td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', gap: '.4rem' }}>
                        {u.status !== 'locked' ? (
                          <button onClick={e => { e.stopPropagation(); handleAction('قفل', u.id) }} style={{
                            padding: '.3rem .65rem', background: 'rgba(239,68,68,.1)', color: '#F87171',
                            border: '1px solid rgba(239,68,68,.2)', borderRadius: 6,
                            fontSize: '.7rem', cursor: 'pointer',
                          }}>قفل</button>
                        ) : (
                          <button onClick={e => { e.stopPropagation(); handleAction('فعال‌سازی', u.id) }} style={{
                            padding: '.3rem .65rem', background: 'rgba(52,211,153,.1)', color: '#34D399',
                            border: '1px solid rgba(52,211,153,.2)', borderRadius: 6,
                            fontSize: '.7rem', cursor: 'pointer',
                          }}>فعال</button>
                        )}
                        <button onClick={e => { e.stopPropagation(); handleAction('تغییر پلن', u.id) }} style={{
                          padding: '.3rem .65rem', background: 'rgba(46,107,94,.15)', color: '#4A8C7C',
                          border: '1px solid rgba(46,107,94,.2)', borderRadius: 6,
                          fontSize: '.7rem', cursor: 'pointer',
                        }}>پلن</button>
                      </div>
                    </td>
                  </tr>

                  {/* Expanded row */}
                  {selected === u.id && (
                    <tr key={`${u.id}-detail`}>
                      <td colSpan={8} style={{ padding: '1rem 1.5rem', background: 'rgba(46,107,94,.05)', borderTop: '1px solid rgba(255,255,255,.04)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                          {[
                            { label: 'تاریخ عضویت', value: u.joined },
                            { label: 'ایمیل', value: u.email },
                            { label: 'پلن فعلی', value: u.plan },
                            { label: 'وضعیت سند', value: u.hasDoc ? 'دارد' : 'ندارد' },
                          ].map(d => (
                            <div key={d.label}>
                              <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.3)', marginBottom: '.2rem' }}>{d.label}</div>
                              <div style={{ fontSize: '.82rem', color: 'white' }}>{d.value}</div>
                            </div>
                          ))}
                        </div>
                        <div style={{ display: 'flex', gap: '.5rem', marginTop: '1rem' }}>
                          {['مشاهده تحلیل‌ها', 'تاریخچه پرداخت', 'ارسال پیام'].map(action => (
                            <button key={action} onClick={() => handleAction(action, u.id)} style={{
                              padding: '.4rem .85rem',
                              background: 'rgba(255,255,255,.05)', color: 'rgba(255,255,255,.6)',
                              border: '1px solid rgba(255,255,255,.08)', borderRadius: 6,
                              fontSize: '.75rem', cursor: 'pointer',
                            }}>
                              {action}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
