'use client'

import Link from 'next/link'
import { useState } from 'react'

const services = [
  { label: 'استراتژی برند', href: '/services/brand-strategy' },
  { label: 'ساختار برند', href: '/services/brand-strategy/architecture' },
  { label: 'تحلیل عملکرد', href: '/services/brand-strategy/performance' },
  { label: 'هویت بصری', href: '/services/brand-design/visual-identity' },
  { label: 'تجربه برند', href: '/services/brand-strategy/experience' },
  { label: 'تحلیل هوشمند', href: '/ai' },
]

const company = [
  { label: 'درباره ما', href: '/about' },
  { label: 'نمونه‌کارها', href: '/portfolio' },
  { label: 'تماس با ما', href: '/contact' },
  { label: 'مشاوره رایگان', href: '/contact/request-consultation' },
]

const contacts = [
  { label: 'info@rosbrand.ir', href: 'mailto:info@rosbrand.ir', external: false },
  { label: '۰۹۱۳ ۴۹۴ ۵۱۸۴', href: 'tel:+989134945184', external: false },
  { label: 'تلگرام', href: 'https://t.me/rosbranding', external: true },
]

const socials = [
  { title: 'Instagram — rosbrand', href: 'https://instagram.com/rosbrand', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2z' },
  { title: 'Instagram — rosbranding', href: 'https://instagram.com/rosbranding', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2z' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/company/ros-branding-agency/', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
]

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [h, setH] = useState(false)
  return (
    <Link href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'block', fontSize: '.82rem', color: h ? 'var(--c-text)' : 'var(--c-text-muted)', textDecoration: 'none', padding: '.3rem .5rem .3rem 0', transform: h ? 'translateX(-4px)' : 'translateX(0)', transition: 'all .2s ease', borderRight: h ? '2px solid var(--c-primary)' : '2px solid transparent' }}>
      {children}
    </Link>
  )
}

function ContactLink({ href, label, external }: { href: string; label: string; external: boolean }) {
  const [h, setH] = useState(false)
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'block', fontSize: '.82rem', color: h ? 'var(--c-primary)' : 'var(--c-text-muted)', textDecoration: 'none', padding: '.3rem 0', transition: 'color .2s ease' }}>
        {label}
      </a>
    )
  }
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'block', fontSize: '.82rem', color: h ? 'var(--c-primary)' : 'var(--c-text-muted)', textDecoration: 'none', padding: '.3rem 0', transition: 'color .2s ease', direction: 'ltr', textAlign: 'right' as const }}>
      {label}
    </a>
  )
}

export default function Footer() {
  const [socialHovered, setSocialHovered] = useState<number | null>(null)

  return (
    <footer style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3.5rem 1.25rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '.05em' }}>ROS</span>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--c-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.85rem', fontWeight: 700, color: 'white', fontFamily: 'Georgia, serif' }}>R</div>
            </div>
            <p style={{ fontSize: '.78rem', color: 'var(--c-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 220 }}>
              آژانس هوشمند برندینگ — ترکیب تفکر استراتژیک انسانی و تحلیل‌های داده‌محور.
            </p>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title} onMouseEnter={() => setSocialHovered(i)} onMouseLeave={() => setSocialHovered(null)} style={{ width: 34, height: 34, borderRadius: 8, background: socialHovered === i ? 'var(--c-primary)' : 'var(--c-surface-2)', border: `1px solid ${socialHovered === i ? 'var(--c-primary)' : 'var(--c-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: socialHovered === i ? 'translateY(-3px)' : 'translateY(0)', boxShadow: socialHovered === i ? '0 6px 20px rgba(46,107,94,.3)' : 'none', transition: 'all .2s ease' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={socialHovered === i ? 'white' : 'var(--c-text-muted)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke .2s' }}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--c-text)', marginBottom: '1.25rem' }}>خدمات</div>
            {services.map(s => <NavLink key={s.label} href={s.href}>{s.label}</NavLink>)}
          </div>

          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--c-text)', marginBottom: '1.25rem' }}>شرکت</div>
            {company.map(c => <NavLink key={c.label} href={c.href}>{c.label}</NavLink>)}
          </div>

          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--c-text)', marginBottom: '1.25rem' }}>تماس</div>
            {contacts.map(c => <ContactLink key={c.label} href={c.href} label={c.label} external={c.external} />)}
          </div>

        </div>

        <div style={{ borderTop: '1px solid var(--c-border)', padding: '1.25rem 0', textAlign: 'center' as const }}>
          <span style={{ fontSize: '.75rem', color: 'var(--c-text-light)' }}>
            © ۱۴۰۳ آژانس ROS — تمامی حقوق محفوظ است.
          </span>
        </div>
      </div>
    </footer>
  )
}
