'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from '@/lib/theme'

const navItems = [
  { label: 'خانه', href: '/', sub: [] },
  {
    label: 'خدمات رُس',
    href: '/services',
    sub: [
      { label: 'استراتژی برند', desc: 'جایگاه‌یابی و سند استراتژی', href: '/services/brand-strategy', icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z' },
      { label: 'معماری برند', desc: 'ساختار برندهای مادر و زیرمجموعه', href: '/services/brand-strategy/architecture', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 0-2-2z' },
      { label: 'نام‌گذاری برند', desc: 'خلق نام با رویکرد استراتژیک', href: '/services/brand-strategy/naming', icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' },
      { label: 'هویت بصری', desc: 'لوگو، رنگ، تایپوگرافی', href: '/services/brand-design/visual-identity', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
      { label: 'تجربه برند', desc: 'طراحی نقاط تماس مشتری', href: '/services/brand-strategy/experience', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
      { label: 'ریبرندینگ', desc: 'بازتعریف هویت با حفظ سرمایه برند', href: '/services/brand-strategy/rebranding', icon: 'M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' },
    ],
  },
  { label: 'سازمان‌های همکار', href: '/portfolio', sub: [] },
  { label: 'درباره رُس', href: '/about', sub: [] },
  { label: 'تماس', href: '/contact', sub: [] },
  { label: 'مجله رُس', href: '/magazine', sub: [] },
]

function LogoMark() {
  const [h, setH] = useState(false)
  return (
    <Link href="/" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'flex', alignItems: 'center', gap: '.65rem', textDecoration: 'none', flexShrink: 0 }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        background: 'linear-gradient(135deg, #1F4D43, #2E6B5E)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.1rem', fontWeight: 700, color: 'white', fontFamily: 'Georgia, serif',
        boxShadow: h ? '0 0 22px rgba(46,107,94,.65), 0 4px 14px rgba(46,107,94,.4)' : '0 4px 14px rgba(46,107,94,.35)',
        transition: 'box-shadow .3s ease, transform .3s ease',
        transform: h ? 'rotate(-5deg) scale(1.1)' : 'rotate(0) scale(1)',
      }}>R</div>
      <span style={{
        fontSize: '1rem', fontWeight: 900, letterSpacing: '.12em',
        color: h ? '#4A8C7C' : 'var(--c-text)',
        transition: 'color .3s ease',
      }}>رُس</span>
    </Link>
  )
}

function DropItem({ href, label, desc, icon }: { href: string; label: string; desc: string; icon: string }) {
  const [h, setH] = useState(false)
  return (
    <Link href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      display: 'flex', alignItems: 'flex-start', gap: '.75rem',
      padding: '.7rem .85rem', borderRadius: 10,
      background: h ? 'var(--c-primary-bg)' : 'transparent',
      border: '1px solid', borderColor: h ? 'rgba(46,107,94,.25)' : 'transparent',
      textDecoration: 'none', transition: 'all .2s ease',
      transform: h ? 'translateX(-3px)' : 'translateX(0)',
    }}>
      <div style={{
        width: 34, height: 34, borderRadius: 8, flexShrink: 0,
        background: h ? 'var(--c-primary)' : 'var(--c-surface)',
        border: `1px solid ${h ? 'transparent' : 'var(--c-border)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all .2s ease',
      }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={h ? 'white' : 'var(--c-primary)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke .2s' }}>
          <path d={icon} />
        </svg>
      </div>
      <div>
        <div style={{ fontSize: '.83rem', fontWeight: 600, color: h ? 'var(--c-primary)' : 'var(--c-text)', marginBottom: '.2rem', transition: 'color .2s' }}>{label}</div>
        <div style={{ fontSize: '.72rem', color: 'var(--c-text-muted)', lineHeight: 1.5 }}>{desc}</div>
      </div>
    </Link>
  )
}

export default function Header() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [aiHovered, setAiHovered] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(label)
    setHoveredNav(label)
  }

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null)
      setHoveredNav(null)
    }, 180)
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'var(--header-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--c-border)' : '1px solid transparent',
      transition: 'all .35s ease',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <LogoMark />

        {/* Center Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '.1rem' }} className="hide-mobile">
          {navItems.map(item => (
            <div key={item.label} style={{ position: 'relative' }} onMouseEnter={() => openMenu(item.label)} onMouseLeave={closeMenu}>
              <Link href={item.href} style={{
                display: 'flex', alignItems: 'center', gap: '.3rem',
                padding: '.48rem .85rem', fontSize: '.84rem', fontWeight: 500,
                color: hoveredNav === item.label ? 'var(--c-text)' : 'var(--c-text-muted)',
                textDecoration: 'none', borderRadius: 9,
                background: hoveredNav === item.label ? 'rgba(46,107,94,.08)' : 'transparent',
                border: '1px solid', borderColor: hoveredNav === item.label ? 'rgba(46,107,94,.2)' : 'transparent',
                transition: 'all .22s ease',
              }}>
                {item.label}
                {item.sub.length > 0 && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    style={{ transform: activeMenu === item.label ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .22s ease', opacity: .5 }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                )}
              </Link>

              {item.sub.length > 0 && activeMenu === item.label && (
                <div onMouseEnter={() => openMenu(item.label)} onMouseLeave={closeMenu} style={{
                  position: 'absolute', top: 'calc(100% + 6px)', right: 0, width: 320,
                  background: 'var(--c-surface)', border: '1px solid var(--c-border)',
                  borderRadius: 14, padding: '.6rem',
                  boxShadow: '0 20px 60px rgba(0,0,0,.3)',
                  animation: 'dropIn .2s ease', zIndex: 200,
                }}>
                  <div style={{ padding: '.4rem .85rem .6rem', borderBottom: '1px solid var(--c-border)', marginBottom: '.4rem', fontSize: '.68rem', letterSpacing: '.1em', color: 'var(--c-text-muted)', textTransform: 'uppercase' as const }}>خدمات تخصصی رس</div>
                  {item.sub.map(s => <DropItem key={s.label} href={s.href} label={s.label} desc={s.desc} icon={s.icon} />)}
                  <div style={{ marginTop: '.4rem', paddingTop: '.4rem', borderTop: '1px solid var(--c-border)' }}>
                    <Link href="/services" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.4rem', padding: '.55rem', borderRadius: 8, background: 'var(--c-primary-bg)', color: 'var(--c-primary)', fontSize: '.78rem', fontWeight: 600, textDecoration: 'none' }}>مشاهده همه خدمات رُس ←</Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Left actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexShrink: 0 }}>
          <Link href="/ai" className="hide-mobile" onMouseEnter={() => setAiHovered(true)} onMouseLeave={() => setAiHovered(false)} style={{
            display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.46rem 1rem',
            background: aiHovered
              ? 'linear-gradient(135deg, rgba(231,198,115,.18), rgba(109,40,217,.12))'
              : 'linear-gradient(135deg, rgba(109,40,217,.08), rgba(231,198,115,.05))',
            border: `1px solid ${aiHovered ? 'rgba(231,198,115,.45)' : 'rgba(231,198,115,.18)'}`,
            color: aiHovered ? '#f5d98a' : '#e7c673',
            borderRadius: 8, fontSize: '.8rem', fontWeight: 600,
            textDecoration: 'none', transition: 'all .3s cubic-bezier(.16,1,.3,1)',
            boxShadow: aiHovered ? '0 0 24px rgba(231,198,115,.2), inset 0 1px 0 rgba(255,255,255,.06)' : 'inset 0 1px 0 rgba(255,255,255,.04)',
            transform: aiHovered ? 'translateY(-1px)' : 'none',
            position: 'relative' as const, overflow: 'hidden',
          }}>
            <span style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,.06) 50%, transparent 70%)',
              animation: 'aiShimmer 3s ease-in-out infinite',
              pointerEvents: 'none' as const,
            }} />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, animation: 'aiGlow 2.5s ease-in-out infinite', opacity: .9 }}>
              <path d="M12 3 L13.5 9 L19 10 L13.5 12 L15 18 L12 14 L9 18 L10.5 12 L5 10 L10.5 9 Z" fill="#e7c673" opacity=".85"/>
              <path d="M19 3 L19.8 5.5 L22 6 L19.8 6.8 L19 9 L18.2 6.8 L16 6 L18.2 5.5 Z" fill="#c4b5fd" opacity=".6"/>
              <path d="M5 15 L5.5 16.8 L7 17 L5.5 17.5 L5 19 L4.5 17.5 L3 17 L4.5 16.8 Z" fill="#c4b5fd" opacity=".5"/>
            </svg>
            <span style={{ position: 'relative' }}>دستیار هوشمند رُس</span>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#e7c673', display: 'block', flexShrink: 0, animation: 'aiPulse 2s ease-in-out infinite', boxShadow: '0 0 6px #e7c673' }} />
          </Link>

          <Link href="/login" className="hide-mobile" style={{
            padding: '.5rem 1.15rem',
            background: 'linear-gradient(135deg, #2E6B5E, #3d8573)',
            color: 'white', borderRadius: 8, fontSize: '.82rem', fontWeight: 700,
            textDecoration: 'none', boxShadow: '0 2px 12px rgba(46,107,94,.3)', transition: 'all .22s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(46,107,94,.5)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(46,107,94,.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >ورود ←</Link>

          <div style={{ width: 1, height: 22, background: 'var(--c-border)' }} className="hide-mobile" />

          <button onClick={toggle} title="تغییر تم" style={{
            width: 34, height: 34, borderRadius: 8,
            background: 'transparent', border: '1px solid var(--c-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--c-text-muted)', transition: 'all .2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--c-primary)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--c-border)' }}
          >
            {theme === 'dark'
              ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
          </button>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
            display: 'none', width: 36, height: 36, borderRadius: 8,
            background: 'var(--c-surface)', border: '1px solid var(--c-border)',
            alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', flexDirection: 'column', gap: 5, padding: '9px 8px',
          }}>
            <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--c-text)', borderRadius: 2, transition: 'all .25s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
            <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--c-text)', borderRadius: 2, transition: 'all .25s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--c-text)', borderRadius: 2, transition: 'all .25s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)', padding: '1rem 1.25rem 1.5rem' }}>
          {navItems.map(item => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '.7rem 0', borderBottom: '1px solid var(--c-border)', fontSize: '.9rem', fontWeight: 500, color: 'var(--c-text)', textDecoration: 'none' }}>{item.label}</Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginTop: '1rem' }}>
            <Link href="/ai" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '.7rem', textAlign: 'center' as const, border: '1px solid rgba(46,107,94,.3)', borderRadius: 8, background: 'rgba(46,107,94,.08)', color: 'var(--c-primary)', fontSize: '.88rem', fontWeight: 600, textDecoration: 'none' }}>دستیار هوشمند رُس</Link>
            <Link href="/login" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '.75rem', textAlign: 'center' as const, background: 'var(--c-primary)', color: 'white', borderRadius: 8, fontSize: '.9rem', fontWeight: 700, textDecoration: 'none' }}>ورود به داشبورد</Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropIn { from { opacity:0; transform:translateY(-10px) scale(.98) } to { opacity:1; transform:translateY(0) scale(1) } }
        @keyframes pulse { 0%,100% { box-shadow:0 0 0 2px rgba(46,107,94,.25) } 50% { box-shadow:0 0 0 4px rgba(46,107,94,.1) } } @keyframes aiPulse { 0%,100% { opacity:1;transform:scale(1) } 50% { opacity:.3;transform:scale(.6) } } @keyframes aiShimmer { 0%{transform:translateX(-150%)} 60%,100%{transform:translateX(250%)} } @keyframes aiGlow { 0%,100%{filter:drop-shadow(0 0 3px #e7c673) brightness(1)} 50%{filter:drop-shadow(0 0 8px #e7c673) brightness(1.3)} }
        @media (max-width: 768px) { .hide-mobile { display:none !important } .hamburger { display:flex !important } }
      `}</style>
    </header>
  )
}
