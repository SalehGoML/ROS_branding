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
  { label: 'درباره رس', href: '/about' },
  { label: 'سازمان‌های همکار', href: '/portfolio' },
  { label: 'تماس با ما', href: '/contact' },
  { label: 'مشاوره رایگان', href: '/contact/request-consultation' },
]

const socials = [
  { title: 'Instagram', href: 'https://instagram.com/rosbrand', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2z' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/company/ros-branding-agency/', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { title: 'Telegram', href: 'https://t.me/rosbranding', path: 'M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.303l3.994 1.361 1.498 4.995a1.5 1.5 0 0 0 2.568.43l2.088-2.397 4.012 2.86a2.25 2.25 0 0 0 3.463-1.588l2.25-16.5a2.25 2.25 0 0 0-2.477-2.179z' },
]

function LogoLink() {
  const [h, setH] = useState(false)
  return (
    <Link href="/" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '.65rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
      <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg,#1F4D43,#2E6B5E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-text)', fontFamily: 'Georgia,serif', boxShadow: h ? '0 0 22px rgba(46,107,94,.65), 0 4px 14px rgba(46,107,94,.4)' : '0 4px 14px rgba(46,107,94,.3)', transform: h ? 'rotate(-5deg) scale(1.1)' : 'rotate(0) scale(1)', transition: 'all .3s ease' }}>R</div>
      <span style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '.12em', color: h ? '#4A8C7C' : 'white', transition: 'color .3s ease' }}>رُس</span>
    </Link>
  )
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase' as const, color: 'var(--c-text-muted)', marginBottom: '1.25rem' }}>{title}</div>
      {children}
    </div>
  )
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [h, setH] = useState(false)
  return (
    <Link href={href}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontSize: '.82rem', color: h ? 'white' : 'rgba(255,255,255,.38)', textDecoration: 'none', padding: '.3rem 0', transition: 'color .2s ease' }}>
      {h && <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#4A8C7C', flexShrink: 0 }} />}
      {children}
    </Link>
  )
}

export default function Footer() {
  const [sh, setSh] = useState<number | null>(null)

  return (
    <footer style={{ background: 'var(--c-bg)', borderTop: '1px solid var(--c-border)' }}>

      {/* main footer */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 1.5rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'clamp(2rem,4vw,3rem)', marginBottom: '3.5rem' }}>

          {/* brand col */}
          <div>
            {/* logo */}
            <LogoLink />

            <p style={{ fontSize: '.8rem', color: 'var(--c-text-muted)', lineHeight: 1.9, marginBottom: '1.75rem', maxWidth: 240 }}>
              آژانس هوشمند برندینگ — ترکیب تفکر استراتژیک انسانی و تحلیل‌های داده‌محور.
            </p>

            {/* contact inline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '1.75rem' }}>
              {[
                { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6', text: 'info@rosbrand.ir', href: 'mailto:info@rosbrand.ir' },
                { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z', text: '۰۹۱۳ ۴۹۴ ۵۱۸۴', href: 'tel:+989134945184' },
              ].map(item => (
                <a key={item.href} href={item.href} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='rgba(74,140,124,.85)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='var(--c-text-light)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink:0, color:'rgba(74,140,124,.5)' }}><path d={item.icon}/></svg>
                  <span style={{ fontSize: '.78rem', color: 'inherit', transition: 'color .2s ease', direction: 'ltr' }}>{item.text}</span>
                </a>
              ))}
            </div>

            {/* socials */}
            <div style={{ display: 'flex', gap: '.5rem' }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  onMouseEnter={() => setSh(i)} onMouseLeave={() => setSh(null)}
                  style={{ width: 34, height: 34, borderRadius: 9, background: sh===i ? 'rgba(46,107,94,.2)' : 'rgba(255,255,255,.04)', border: `1px solid ${sh===i ? 'rgba(74,140,124,.4)' : 'rgba(255,255,255,.07)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: sh===i ? 'translateY(-3px)' : 'none', transition: 'all .2s ease' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={sh===i ? 'rgba(74,140,124,.9)' : 'var(--c-text-light)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke .2s' }}>
                    <path d={s.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <Col title="خدمات">
            {services.map(s => <FLink key={s.label} href={s.href}>{s.label}</FLink>)}
          </Col>

          <Col title="شرکت">
            {company.map(c => <FLink key={c.label} href={c.href}>{c.label}</FLink>)}
          </Col>

          <Col title="شروع کنید">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <Link href="/contact/request-consultation"
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='rgba(74,140,124,.2)'; el.style.borderColor='rgba(74,140,124,.4)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='rgba(46,107,94,.08)'; el.style.borderColor='rgba(74,140,124,.15)' }}
                style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'.75rem 1.25rem', background:'rgba(46,107,94,.08)', border:'1px solid rgba(74,140,124,.15)', borderRadius:10, fontSize:'.82rem', fontWeight:700, color:'rgba(74,140,124,.9)', textDecoration:'none', transition:'all .22s ease' }}>
                مشاوره رایگان ←
              </Link>
              <p style={{ fontSize: '.72rem', color: 'var(--c-text-muted)', lineHeight: 1.7, margin: 0 }}>
                بدون تعهد اولیه، فقط یک گفتگو.
              </p>
            </div>
          </Col>

        </div>

        {/* bottom bar */}
        <div style={{ borderTop: '1px solid var(--c-border)', padding: '1.25rem 0', textAlign: 'center' as const }}>
          <span style={{ fontSize: '.75rem', color: 'var(--c-text-muted)' }}>کلیه حقوق مادی و معنوی این وب‌سایت متعلق به آژانس برندینگ رس می‌باشد.</span>
        </div>
      </div>

    </footer>
  )
}
