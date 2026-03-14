'use client'
import { useState } from 'react'
import Link from 'next/link'
import SectionBadge from '../../components/ui/SectionBadge'

const projects = [
  {
    slug: 'rahkar-sanat',
    name: 'راهکار صنعت',
    field: 'اینترنت اشیا (IoT)',
    tags: ['هویت بصری', 'طراحی لوگو', 'ست اداری', 'بروشور'],
    result: 'هویت بصری یکپارچه برای ورود به بازار B2B',
    cover: '/portfolio/rahkar-sanat/cover.jpg',
    accent: '#003d71',
    year: '۱۴۰۳',
    desc: 'طراحی کامل هویت بصری برای شرکت فناوری راهکار صنعت — از لوگو تا برندبوک.',
  },
  {
    slug: 'zoodex-mockup',
    name: 'موکاپ زودکس',
    field: 'برندینگ دیجیتال',
    tags: ['موکاپ', 'هویت بصری', 'طراحی محیطی'],
    result: 'اجرای هویت برند در فضای واقعی و دیجیتال',
    cover: '/portfolio/zoodex-mockup/1.jpg',
    accent: '#1a3a6b',
    year: '۱۴۰۳',
    desc: 'پیاده‌سازی و نمایش هویت بصری زودکس در قالب موکاپ‌های محیطی و دیجیتال.',
  },
]

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [h, setH] = useState(false)
  return (
    <Link href={`/portfolio/${p.slug}`} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      display: 'block', textDecoration: 'none',
      background: 'var(--c-surface)',
      borderRadius: 20,
      overflow: 'hidden',
      border: `1px solid ${h ? 'rgba(0,61,113,.4)' : 'var(--c-border)'}`,
      transform: h ? 'translateY(-6px)' : 'translateY(0)',
      boxShadow: h ? '0 20px 60px rgba(0,61,113,.15)' : 'none',
      transition: 'all .3s ease',
    }}>
      {/* cover */}
      <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
        <img src={p.cover} alt={p.name} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: h ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform .4s ease',
          display: 'block',
        }} />
        {/* overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: h ? 'rgba(0,61,113,.15)' : 'transparent',
          transition: 'background .3s ease',
        }} />
        {/* year badge */}
        <div style={{
          position: 'absolute', top: '1rem', left: '1rem',
          padding: '.25rem .7rem', borderRadius: 100,
          background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(8px)',
          fontSize: '.7rem', color: 'rgba(255,255,255,.8)', fontWeight: 500,
        }}>{p.year}</div>
      </div>

      <div style={{ padding: '1.75rem' }}>
        <div style={{ fontSize: '.72rem', color: p.accent, fontWeight: 600, marginBottom: '.4rem', letterSpacing: '.05em' }}>{p.field}</div>
        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '.6rem' }}>{p.name}</div>
        <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{p.desc}</div>

        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '.7rem', fontWeight: 500,
              padding: '.22rem .7rem',
              background: 'rgba(0,61,113,.08)', color: p.accent,
              border: '1px solid rgba(0,61,113,.15)',
              borderRadius: 100,
            }}>{tag}</span>
          ))}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '.7rem 1rem',
          background: h ? 'rgba(0,61,113,.08)' : 'var(--c-surface-2)',
          borderRadius: 10,
          border: `1px solid ${h ? 'rgba(0,61,113,.2)' : 'var(--c-border)'}`,
          transition: 'all .25s ease',
        }}>
          <span style={{ fontSize: '.78rem', fontWeight: 500, color: p.accent }}>{p.result}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2"
            style={{ transform: h ? 'translateX(-3px)' : 'translateX(0)', transition: 'transform .25s ease', flexShrink: 0 }}>
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </div>
      </div>
    </Link>
  )
}

function EndToEnd() {
  const [h, setH] = useState(false)
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '.65rem',
        cursor: 'default', marginBottom: '1rem',
        padding: '.55rem 1.4rem',
        borderRadius: 100,
        border: h ? '1px solid rgba(46,107,94,.6)' : '1px solid rgba(46,107,94,.2)',
        background: h ? 'rgba(46,107,94,.12)' : 'transparent',
        transition: 'all .4s cubic-bezier(.4,0,.2,1)',
        position: 'relative', overflow: 'hidden',
        direction: 'ltr',
      }}
    >
      <div style={{ position: 'relative', width: 7, height: 7, flexShrink: 0 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--c-primary)' }} />
        <div style={{ position: 'absolute', inset: -3, borderRadius: '50%', border: '1.5px solid var(--c-primary)', opacity: h ? 0 : .4, transform: h ? 'scale(2)' : 'scale(1)', transition: 'all .5s ease' }} />
      </div>
      <span style={{
        fontSize: '.75rem', fontWeight: 900,
        letterSpacing: h ? '.38em' : '.3em',
        color: h ? 'var(--c-primary)' : 'rgba(46,107,94,.7)',
        transition: 'color .3s ease, letter-spacing .3s ease',
        textTransform: 'uppercase' as const,
      }}>End to End</span>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(46,107,94,.15) 50%, transparent 100%)',
        transform: h ? 'translateX(110%)' : 'translateX(-110%)',
        transition: 'transform .55s ease',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)', minHeight: '100vh' }}>
      <section style={{
        padding: '5rem 2rem 4rem',
        borderBottom: '1px solid var(--c-border)',
        background: 'var(--c-surface)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* bg glow */}
        <div style={{ position: 'absolute', top: '-30%', right: '20%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(46,107,94,.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <SectionBadge label="سازمان‌های همکار" />
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '1.25rem' }}>
            بررسی، تحلیل و مدیریت<br />
            <span style={{ color: 'var(--c-primary)' }}>از ابتدا تا اجرای برندینگ</span>
          </h1>
          <EndToEnd />
          <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', maxWidth: 500, lineHeight: 1.8 }}>
            هر پروژه یک داستان متفاوت — از تحلیل تا اجرای کامل هویت برند.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
          {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>
    </main>
  )
}
