'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '../../lib/theme'

const navLinks = [
  { label: 'خانه', href: '/' },
  { label: 'خدمات ما', href: '/services' },
  { label: 'نمونه‌کارها', href: '/portfolio' },
  { label: 'درباره ما', href: '/about' },
  { label: 'تماس', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--header-bg)',
        backdropFilter: 'blur(16px) saturate(180%)',
        borderBottom: '1px solid var(--c-border)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'box-shadow .3s',
      }}>
        <nav style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 1.25rem',
          height: 64, display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
            <div style={{
              width: 32, height: 32,
              border: '1.5px solid rgba(255,255,255,.4)',
              borderRadius: 5,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--c-primary)',
            }}>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '1rem', fontFamily: 'Georgia, serif' }}>R</span>
            </div>
            <div>
              <div style={{ fontSize: '.9rem', fontWeight: 700, letterSpacing: '.18em', color: 'var(--c-text)', fontFamily: 'Georgia, serif' }}>ROS</div>
              <div style={{ fontSize: '.5rem', color: 'var(--c-text-muted)', letterSpacing: '.12em', textTransform: 'uppercase' as const }}>BRANDING AGENCY</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '.25rem', listStyle: 'none' }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} style={{
                  display: 'block', padding: '.45rem .85rem',
                  fontSize: '.88rem',
                  fontWeight: pathname === link.href ? 500 : 400,
                  color: pathname === link.href ? 'var(--c-primary-lt)' : 'var(--c-text-muted)',
                  background: pathname === link.href ? 'var(--c-primary-bg)' : 'transparent',
                  borderRadius: 'var(--r-sm)',
                  transition: 'color .2s, background .2s',
                }}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
            <button onClick={toggle} style={{
              width: 36, height: 20,
              background: isDark ? 'rgba(46,107,94,.3)' : 'rgba(0,0,0,.1)',
              border: `1px solid ${isDark ? 'rgba(46,107,94,.4)' : 'rgba(0,0,0,.15)'}`,
              borderRadius: 100, cursor: 'pointer',
              position: 'relative', transition: 'all .3s', flexShrink: 0,
            }}>
              <div style={{
                position: 'absolute', top: 2,
                right: isDark ? 2 : 'auto', left: isDark ? 'auto' : 2,
                width: 14, height: 14,
                background: isDark ? '#4A8C7C' : '#6B6860',
                borderRadius: '50%', transition: 'all .3s',
                fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{isDark ? '🌙' : '☀️'}</div>
            </button>

            <div className="nav-actions-desktop" style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <Link href="/ai" style={{
                display: 'flex', alignItems: 'center', gap: '.4rem',
                padding: '.4rem .9rem', fontSize: '.78rem', fontWeight: 500,
                color: 'var(--c-primary-lt)',
                border: '1.5px solid var(--c-primary)',
                borderRadius: 'var(--r-sm)',
              }}>
                <span style={{ width: 5, height: 5, background: 'var(--c-primary)', borderRadius: '50%', display: 'inline-block' }} />
                تحلیل هوشمند
              </Link>
              <Link href="/contact/request-consultation" style={{
                padding: '.45rem 1.1rem', fontSize: '.82rem', fontWeight: 600,
                background: 'var(--c-primary)', color: 'white',
                borderRadius: 'var(--r-sm)',
              }}>مشاوره رایگان</Link>
            </div>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: 36, height: 36, background: 'var(--c-surface)',
                border: '1px solid var(--c-border)',
                borderRadius: 8, cursor: 'pointer',
                flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 4,
              }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  width: 16, height: 1.5,
                  background: 'var(--c-text)',
                  borderRadius: 2, display: 'block',
                  transition: 'all .2s',
                }} />
              ))}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
          background: 'var(--c-bg)', zIndex: 99,
          padding: '1.5rem 1.25rem',
          display: 'flex', flexDirection: 'column', gap: '.5rem',
          borderTop: '1px solid var(--c-border)',
          overflowY: 'auto',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              padding: '1rem 1.25rem',
              fontSize: '1rem', fontWeight: 500,
              color: pathname === link.href ? 'var(--c-primary-lt)' : 'var(--c-text)',
              background: pathname === link.href ? 'var(--c-primary-bg)' : 'transparent',
              borderRadius: 'var(--r-md)',
              borderBottom: '1px solid var(--c-border)',
            }}>{link.label}</Link>
          ))}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '.75rem', paddingTop: '1rem' }}>
            <Link href="/ai" style={{
              padding: '.85rem', textAlign: 'center' as const,
              fontSize: '.9rem', fontWeight: 600,
              color: 'var(--c-primary-lt)',
              border: '1.5px solid var(--c-primary)',
              borderRadius: 'var(--r-sm)',
            }}>تحلیل برند با هوش مصنوعی ✦</Link>
            <Link href="/contact/request-consultation" style={{
              padding: '.85rem', textAlign: 'center' as const,
              fontSize: '.9rem', fontWeight: 600,
              background: 'var(--c-primary)', color: 'white',
              borderRadius: 'var(--r-sm)',
            }}>مشاوره رایگان</Link>
          </div>
        </div>
      )}
    </>
  )
}
