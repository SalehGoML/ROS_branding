'use client'

import { useState } from 'react'
import Link from 'next/link'

const stats = [
  { label: 'کاربران فعال',        value: '۱,۲۴۸', change: '+۱۲٪', up: true,  icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
  { label: 'تحلیل‌های انجام‌شده', value: '۴,۸۹۳', change: '+۲۸٪', up: true,  icon: 'M18 20V10M12 20V4M6 20v-6' },
  { label: 'میانگین تطابق برند',  value: '۷۲٪',   change: '+۵٪',  up: true,  icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
  { label: 'اسناد تولیدشده با AI', value: '۳۸۶',   change: '-۳٪',  up: false, icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6' },
]

const alerts = [
  { id: 1, type: 'warning', text: '۳ تحلیل در صف انتظار بیش از ۱۰ دقیقه', href: '/admin/analysis' },
  { id: 2, type: 'error',   text: 'تراکنش مشکوک شناسایی شد — کاربر #۱۰۴۲', href: '/admin/billing' },
  { id: 3, type: 'info',    text: '۸ درخواست پشتیبانی بی‌پاسخ', href: '/admin/support' },
  { id: 4, type: 'warning', text: '۲ سند برند ناقص در انتظار بررسی', href: '/admin/brand-documents' },
]

const recentUsers = [
  { id: 1, name: 'علی احمدی',    brand: 'زودکس',      plan: 'حرفه‌ای', status: 'active',   lastActive: '۵ دقیقه پیش' },
  { id: 2, name: 'سارا موسوی',   brand: 'گل‌نار',     plan: 'استارتر', status: 'active',   lastActive: '۲ ساعت پیش' },
  { id: 3, name: 'رضا کریمی',    brand: 'تکنو پارس',  plan: 'سازمانی', status: 'active',   lastActive: 'دیروز' },
  { id: 4, name: 'مریم حسینی',   brand: '—',          plan: 'استارتر', status: 'inactive', lastActive: '۳ روز پیش' },
  { id: 5, name: 'کامران نصیری', brand: 'آتیه برند',  plan: 'حرفه‌ای', status: 'active',   lastActive: '۱ ساعت پیش' },
]

const monthlyData = [
  { month: 'فروردین', users: 180 },
  { month: 'اردیبهشت', users: 240 },
  { month: 'خرداد', users: 290 },
  { month: 'تیر', users: 320 },
  { month: 'مرداد', users: 410 },
  { month: 'شهریور', users: 480 },
  { month: 'مهر', users: 560 },
  { month: 'آبان', users: 720 },
  { month: 'آذر', users: 980 },
  { month: 'دی', users: 1248 },
]

const alertStyle: Record<string, { border: string; bg: string; color: string; icon: string }> = {
  warning: { border: '#F59E0B', bg: 'rgba(245,158,11,.08)', color: '#F59E0B', icon: '⚠' },
  error:   { border: '#EF4444', bg: 'rgba(239,68,68,.08)',  color: '#EF4444', icon: '✕' },
  info:    { border: '#3B82F6', bg: 'rgba(59,130,246,.08)', color: '#3B82F6', icon: 'ℹ' },
}

const planColor: Record<string, string> = {
  'استارتر': '#6B7280',
  'حرفه‌ای': '#2E6B5E',
  'سازمانی': '#7C3AED',
}

export default function AdminDashboardPage() {
  const [dismissed, setDismissed] = useState<number[]>([])
  const maxUsers = Math.max(...monthlyData.map(d => d.users))

  return (
    <div style={{ padding: '2rem', maxWidth: 1200, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.3)', marginBottom: '.25rem' }}>
          پنل مدیریت ROS
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', letterSpacing: '-.02em' }}>
          داشبورد مدیریتی
        </h1>
      </div>

      {/* Alerts */}
      {alerts.filter(a => !dismissed.includes(a.id)).length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.75rem' }}>
          {alerts.filter(a => !dismissed.includes(a.id)).map(alert => {
            const s = alertStyle[alert.type]
            return (
              <div key={alert.id} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '.75rem 1.1rem',
                background: s.bg,
                border: `1px solid ${s.border}22`,
                borderRight: `3px solid ${s.border}`,
                borderRadius: 8,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem' }}>
                  <span style={{ color: s.color, fontSize: '.85rem' }}>{s.icon}</span>
                  <Link href={alert.href} style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>
                    {alert.text}
                  </Link>
                </div>
                <button onClick={() => setDismissed(d => [...d, alert.id])} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'rgba(255,255,255,.2)', fontSize: '1rem',
                }}>×</button>
              </div>
            )
          })}
        </div>
      )}

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.75rem' }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background: '#1C2333',
            border: '1px solid rgba(255,255,255,.06)',
            borderRadius: 12, padding: '1.25rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.75rem' }}>
              <div style={{
                width: 36, height: 36, background: 'rgba(46,107,94,.2)',
                borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A8C7C" strokeWidth="1.8">
                  <path d={s.icon}/>
                </svg>
              </div>
              <span style={{
                fontSize: '.7rem', fontWeight: 600,
                color: s.up ? '#34D399' : '#F87171',
                background: s.up ? 'rgba(52,211,153,.1)' : 'rgba(248,113,113,.1)',
                padding: '.15rem .5rem', borderRadius: 100,
              }}>
                {s.change}
              </span>
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '.2rem' }}>
              {s.value}
            </div>
            <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.4)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '1.25rem', alignItems: 'start' }}>

        {/* Chart */}
        <div style={{
          background: '#1C2333',
          border: '1px solid rgba(255,255,255,.06)',
          borderRadius: 12, padding: '1.5rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '.95rem', fontWeight: 700, color: 'white' }}>رشد ماهانه کاربران</h2>
            <span style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.3)' }}>۱۴۰۳</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '.5rem', height: 140 }}>
            {monthlyData.map((d, i) => (
              <div key={d.month} style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '.3rem', height: '100%', justifyContent: 'flex-end',
              }}>
                <div style={{
                  width: '100%',
                  height: `${(d.users / maxUsers) * 130}px`,
                  background: i === monthlyData.length - 1
                    ? 'linear-gradient(180deg, #4A8C7C, #2E6B5E)'
                    : 'rgba(46,107,94,.35)',
                  borderRadius: '3px 3px 0 0',
                  transition: 'height .4s ease',
                }} />
                <span style={{ fontSize: '.55rem', color: 'rgba(255,255,255,.25)', writingMode: 'vertical-rl' }}>
                  {d.month.slice(0, 3)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts summary */}
        <div style={{
          background: '#1C2333',
          border: '1px solid rgba(255,255,255,.06)',
          borderRadius: 12, padding: '1.5rem',
        }}>
          <h2 style={{ fontSize: '.95rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            دسترسی سریع
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {[
              { label: 'مدیریت کاربران', href: '/admin/users', count: '۱,۲۴۸' },
              { label: 'تحلیل‌های معلق', href: '/admin/analysis', count: '۳', alert: true },
              { label: 'تراکنش‌های امروز', href: '/admin/billing', count: '۴۷' },
              { label: 'تیکت‌های باز', href: '/admin/support', count: '۸', alert: true },
              { label: 'اسناد در انتظار', href: '/admin/brand-documents', count: '۲', alert: true },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '.7rem .85rem',
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.05)',
                borderRadius: 8, textDecoration: 'none',
              }}>
                <span style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.6)' }}>{item.label}</span>
                <span style={{
                  fontSize: '.75rem', fontWeight: 700,
                  padding: '.15rem .55rem', borderRadius: 100,
                  background: item.alert ? 'rgba(239,68,68,.15)' : 'rgba(46,107,94,.2)',
                  color: item.alert ? '#F87171' : '#4A8C7C',
                }}>
                  {item.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent users */}
      <div style={{
        marginTop: '1.25rem',
        background: '#1C2333',
        border: '1px solid rgba(255,255,255,.06)',
        borderRadius: 12, overflow: 'hidden',
      }}>
        <div style={{
          padding: '1.1rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <h2 style={{ fontSize: '.95rem', fontWeight: 700, color: 'white' }}>آخرین کاربران</h2>
          <Link href="/admin/users" style={{ fontSize: '.78rem', color: '#4A8C7C' }}>مشاهده همه ←</Link>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,.02)' }}>
                {['نام', 'برند', 'پلن', 'وضعیت', 'آخرین فعالیت', 'عملیات'].map(h => (
                  <th key={h} style={{
                    padding: '.75rem 1.5rem', textAlign: 'right',
                    fontSize: '.72rem', fontWeight: 600,
                    color: 'rgba(255,255,255,.3)', whiteSpace: 'nowrap',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((u, i) => (
                <tr key={u.id} style={{
                  borderTop: '1px solid rgba(255,255,255,.04)',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.01)',
                }}>
                  <td style={{ padding: '.85rem 1.5rem', fontSize: '.83rem', color: 'white', fontWeight: 500 }}>
                    {u.name}
                  </td>
                  <td style={{ padding: '.85rem 1.5rem', fontSize: '.83rem', color: 'rgba(255,255,255,.5)' }}>
                    {u.brand}
                  </td>
                  <td style={{ padding: '.85rem 1.5rem' }}>
                    <span style={{
                      fontSize: '.7rem', fontWeight: 600,
                      padding: '.2rem .6rem', borderRadius: 100,
                      background: `${planColor[u.plan]}22`,
                      color: planColor[u.plan],
                    }}>
                      {u.plan}
                    </span>
                  </td>
                  <td style={{ padding: '.85rem 1.5rem' }}>
                    <span style={{
                      fontSize: '.7rem', fontWeight: 600,
                      padding: '.2rem .6rem', borderRadius: 100,
                      background: u.status === 'active' ? 'rgba(52,211,153,.1)' : 'rgba(255,255,255,.06)',
                      color: u.status === 'active' ? '#34D399' : 'rgba(255,255,255,.3)',
                    }}>
                      {u.status === 'active' ? 'فعال' : 'غیرفعال'}
                    </span>
                  </td>
                  <td style={{ padding: '.85rem 1.5rem', fontSize: '.78rem', color: 'rgba(255,255,255,.35)' }}>
                    {u.lastActive}
                  </td>
                  <td style={{ padding: '.85rem 1.5rem' }}>
                    <Link href={`/admin/users`} style={{
                      fontSize: '.75rem', color: '#4A8C7C',
                      fontWeight: 500, textDecoration: 'none',
                    }}>
                      مشاهده
                    </Link>
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