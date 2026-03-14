'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard',          label: 'نمای کلی',           icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
  { href: '/dashboard/analysis', label: 'تحلیل نقاط تماس',   icon: 'M18 20V10M12 20V4M6 20v-6' },
  { href: '/dashboard/reports',  label: 'گزارش‌ها',           icon: 'M14 2H6a2 2 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8' },
  { href: '/dashboard/brand',    label: 'سند برند',           icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
  { href: '/dashboard/history',  label: 'تاریخچه تحلیل‌ها',  icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' },
  { href: '/dashboard/suggest',  label: 'پیشنهادنامه',        icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
  { href: '/dashboard/plan',     label: 'پلن و اشتراک',       icon: 'M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z' },
  { href: '/dashboard/profile',  label: 'پروفایل',            icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
  { href: '/dashboard/support',  label: 'راهنما و پشتیبانی', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // بستن sidebar موبایل با تغییر صفحه
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const sidebarWidth = collapsed ? 68 : 240

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--c-bg)' }}>

      {/* Overlay موبایل */}
      {isMobile && mobileOpen && (
        <div onClick={() => setMobileOpen(false)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)',
          zIndex: 150, backdropFilter: 'blur(2px)',
        }} />
      )}

      {/* Sidebar */}
      <aside style={{
        width: isMobile ? 240 : sidebarWidth,
        background: 'var(--c-surface)',
        borderLeft: '1px solid var(--c-border)',
        display: 'flex', flexDirection: 'column',
        position: 'fixed', top: 0, right: 0, bottom: 0,
        zIndex: 200,
        transition: 'transform .25s ease, width .2s ease',
        overflow: 'hidden',
        transform: isMobile ? (mobileOpen ? 'translateX(0)' : 'translateX(100%)') : 'translateX(0)',
      }}>
        {/* Logo */}
        <div style={{
          padding: (!isMobile && collapsed) ? '1.25rem .75rem' : '1.25rem 1.25rem',
          borderBottom: '1px solid var(--c-border)',
          display: 'flex', alignItems: 'center',
          justifyContent: (!isMobile && collapsed) ? 'center' : 'space-between',
          gap: '.75rem',
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '.6rem', textDecoration: 'none' }}>
            <div style={{ width: 30, height: 30, background: 'var(--c-primary)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: '.85rem', fontFamily: 'serif' }}>R</span>
            </div>
            {(isMobile || !collapsed) && <span style={{ fontWeight: 700, fontSize: '.95rem', color: 'var(--c-text)' }}>رُس</span>}
          </Link>
          {!isMobile && (
            <button onClick={() => setCollapsed(c => !c)} style={{ width: 28, height: 28, flexShrink: 0, background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--c-text-muted)" strokeWidth="2">
                <path d={collapsed ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}/>
              </svg>
            </button>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '.75rem .5rem', overflowY: 'auto' }}>
          {navItems.map(item => {
            const active = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
            return (
              <Link key={item.href} href={item.href} style={{
                display: 'flex', alignItems: 'center', gap: '.75rem',
                padding: (!isMobile && collapsed) ? '.7rem' : '.7rem .85rem',
                justifyContent: (!isMobile && collapsed) ? 'center' : 'flex-start',
                borderRadius: 'var(--r-sm)', marginBottom: '.15rem',
                background: active ? 'var(--c-primary-bg)' : 'transparent',
                color: active ? 'var(--c-primary)' : 'var(--c-text-muted)',
                textDecoration: 'none', fontSize: '.85rem', fontWeight: active ? 600 : 400,
                transition: 'all .15s', whiteSpace: 'nowrap',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0 }}>
                  <path d={item.icon}/>
                </svg>
                {(isMobile || !collapsed) && item.label}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div style={{ padding: '.75rem .5rem', borderTop: '1px solid var(--c-border)' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '.75rem', width: '100%', padding: (!isMobile && collapsed) ? '.7rem' : '.7rem .85rem', justifyContent: (!isMobile && collapsed) ? 'center' : 'flex-start', borderRadius: 'var(--r-sm)', background: 'transparent', border: 'none', color: 'var(--c-text-muted)', fontSize: '.85rem', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
            </svg>
            {(isMobile || !collapsed) && 'خروج'}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{
        flex: 1,
        marginRight: isMobile ? 0 : sidebarWidth,
        transition: 'margin-right .2s ease',
        minHeight: '100vh',
        width: '100%',
      }}>
        {/* هدر موبایل */}
        {isMobile && (
          <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)', padding: '.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
              <div style={{ width: 28, height: 28, background: 'var(--c-primary)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontWeight: 800, fontSize: '.8rem', fontFamily: 'serif' }}>R</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--c-text)' }}>رُس</span>
            </Link>
            <button onClick={() => setMobileOpen(o => !o)} style={{ width: 36, height: 36, background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-text-muted)" strokeWidth="2">
                <path d={mobileOpen ? 'M18 6L6 18M6 6l12 12' : 'M3 12h18M3 6h18M3 18h18'}/>
              </svg>
            </button>
          </div>
        )}
        {children}
      </main>
    </div>
  )
}
