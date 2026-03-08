'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'خانه',        href: '/' },
  { label: 'خدمات ما',    href: '/services' },
  { label: 'نمونه‌کارها', href: '/portfolio' },
  { label: 'درباره ما',   href: '/about' },
  { label: 'تماس',        href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100,
      background: 'rgba(247,246,243,.88)',
      backdropFilter: 'blur(16px) saturate(180%)',
      borderBottom: '1px solid var(--c-border)',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'box-shadow .3s var(--ease)',
    }}>
      <nav style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 2rem',
        height: 68, display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
          <div style={{
            width: 36, height: 36,
            background: 'var(--c-primary)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L3 7v10l9 5 9-5V7L12 2z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '.06em' }}>
              ROS
            </div>
            <div style={{ fontSize: '.65rem', color: 'var(--c-text-muted)', letterSpacing: '.04em' }}>
              آژانس برندینگ
            </div>
          </div>
        </Link>

        {/* Nav Links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '.25rem', listStyle: 'none' }}>
          {navLinks.map(link => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link href={link.href} style={{
                  display: 'block',
                  padding: '.45rem .85rem',
                  fontSize: '.88rem',
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? 'var(--c-primary)' : 'var(--c-text-muted)',
                  background: isActive ? 'var(--c-primary-bg)' : 'transparent',
                  borderRadius: 'var(--r-sm)',
                  transition: 'color .2s, background .2s',
                }}>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
          <Link href="/ai" style={{
            display: 'flex', alignItems: 'center', gap: '.4rem',
            padding: '.45rem 1.1rem',
            fontSize: '.82rem', fontWeight: 500,
            color: 'var(--c-primary)',
            border: '1.5px solid var(--c-primary)',
            borderRadius: 'var(--r-sm)',
            transition: 'all .2s',
          }}>
            <span style={{
              width: 6, height: 6,
              background: 'var(--c-primary)',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            تحلیل برند با هوش مصنوعی
          </Link>

          <Link href="/contact/request-consultation" style={{
            padding: '.5rem 1.3rem',
            fontSize: '.85rem', fontWeight: 600,
            background: 'var(--c-primary)',
            color: 'white',
            borderRadius: 'var(--r-sm)',
            transition: 'background .2s',
          }}>
            مشاوره رایگان
          </Link>
        </div>

      </nav>
    </header>
  )
}