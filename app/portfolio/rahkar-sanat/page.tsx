'use client'
import { useState } from 'react'
import Link from 'next/link'

const images = [
  { src: '/portfolio/rahkar-sanat/cover.jpg',     caption: 'هویت بصری',        num: '۰۱' },
  { src: '/portfolio/rahkar-sanat/logo.jpg',       caption: 'ساختار لوگو',       num: '۰۲' },
  { src: '/portfolio/rahkar-sanat/identity.jpg',   caption: 'سیستم بصری',        num: '۰۳' },
  { src: '/portfolio/rahkar-sanat/stationery.jpg', caption: 'ست اداری',          num: '۰۴' },
  { src: '/portfolio/rahkar-sanat/img-01.jpg',     caption: 'پالت رنگ',          num: '۰۵' },
  { src: '/portfolio/rahkar-sanat/img-02.jpg',     caption: 'لوگو روی پس‌زمینه', num: '۰۶' },
  { src: '/portfolio/rahkar-sanat/img-12.jpg',     caption: 'تایپوگرافی',        num: '۰۷' },
  { src: '/portfolio/rahkar-sanat/img-13.jpg',     caption: 'گرادیان برند',      num: '۰۸' },
  { src: '/portfolio/rahkar-sanat/img-15.jpg',     caption: 'بروشور',            num: '۰۹' },
  { src: '/portfolio/rahkar-sanat/img-16.jpg',     caption: 'موشن برند',         num: '۱۰' },
]

export default function RahkarSanatPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <main style={{ background: 'var(--c-bg)', minHeight: '100vh' }}>

      {/* HERO — full image, minimal overlay */}
      <div style={{ position: 'relative', height: '100vh', maxHeight: 720, overflow: 'hidden' }}>
        <img
          src="/portfolio/rahkar-sanat/hero-brand.jpg"
          alt="راهکار صنعت"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 50%',
            display: 'block',
            filter: 'brightness(1) saturate(1.05)',
          }}
        />
        {/* فقط پایین محو میشه برای خوانایی متن */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 30%, rgba(8,10,20,.96) 100%)',
        }} />

        {/* back */}
        <Link href="/portfolio" style={{
          position: 'absolute', top: '5.5rem', right: '2rem',
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          fontSize: '.8rem', color: 'rgba(255,255,255,.8)', textDecoration: 'none',
          background: 'rgba(0,0,0,.35)', border: '1px solid rgba(255,255,255,.2)',
          backdropFilter: 'blur(10px)', padding: '.4rem .9rem', borderRadius: 100,
        }}>← سازمان‌های همکار</Link>

        {/* bottom text */}
        <div style={{ position: 'absolute', bottom: '3rem', right: '2rem', maxWidth: 640 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            fontSize: '.68rem', color: 'rgba(255,255,255,.55)',
            letterSpacing: '.15em', textTransform: 'uppercase' as const,
            background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)',
            backdropFilter: 'blur(6px)', padding: '.25rem .75rem', borderRadius: 100,
            marginBottom: '1rem',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4A8C7C', display: 'block' }} />
            اینترنت اشیا (IoT) · ۱۴۰۳
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800,
            color: 'white', lineHeight: 1.1, marginBottom: '.85rem', letterSpacing: '-.03em',
          }}>راهکار صنعت</h1>
          <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.85, maxWidth: 500, marginBottom: '1.25rem' }}>
            طراحی کامل هویت بصری از لوگو و برندبوک تا ست اداری و سیستم بصری یکپارچه.
          </p>
          <div style={{ display: 'flex', gap: '.45rem', flexWrap: 'wrap' }}>
            {['هویت بصری', 'طراحی لوگو', 'ست اداری', 'بروشور'].map(tag => (
              <span key={tag} style={{
                fontSize: '.72rem', fontWeight: 600, padding: '.28rem .8rem',
                background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)',
                borderRadius: 100, color: 'rgba(255,255,255,.85)', backdropFilter: 'blur(6px)',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* gallery header */}
      <section style={{ padding: '3.5rem 2rem 1.5rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '.4rem',
              fontSize: '.68rem', color: '#003d71', fontWeight: 700,
              letterSpacing: '.12em', textTransform: 'uppercase' as const,
              background: 'rgba(0,61,113,.07)', border: '1px solid rgba(0,61,113,.15)',
              padding: '.25rem .75rem', borderRadius: 100, marginBottom: '.6rem',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#003d71', display: 'block' }} />
              نمونه کارها
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-.02em' }}>گالری پروژه</h2>
          </div>
          <div style={{ fontSize: '.8rem', color: 'var(--c-text-muted)', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            {images.length} اثر · برای بزرگنمایی کلیک کنید
          </div>
        </div>
      </section>

      {/* gallery grid */}
      <section style={{ padding: '0 2rem 4rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
          {images.map((img, i) => (
            <div key={i}
              onClick={() => setLightbox(img.src)}
              style={{
                borderRadius: 16, overflow: 'hidden',
                background: 'var(--c-surface)', border: '1px solid var(--c-border)',
                cursor: 'pointer', transition: 'all .25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-5px)'
                el.style.boxShadow = '0 16px 48px rgba(0,61,113,.18)'
                el.style.borderColor = 'rgba(0,61,113,.35)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                el.style.borderColor = 'var(--c-border)'
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={img.src} alt={img.caption}
                  style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block', transition: 'transform .3s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* zoom icon */}
                <div style={{
                  position: 'absolute', top: '.75rem', left: '.75rem',
                  width: 30, height: 30, borderRadius: 8,
                  background: 'rgba(0,0,0,.45)', backdropFilter: 'blur(6px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.7rem 1rem', borderTop: '1px solid var(--c-border)' }}>
                <span style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--c-text)' }}>{img.caption}</span>
                <span style={{ fontSize: '.65rem', fontWeight: 700, color: '#003d71', background: 'rgba(0,61,113,.08)', border: '1px solid rgba(0,61,113,.15)', borderRadius: 100, padding: '.15rem .55rem' }}>{img.num}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 2rem 5rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ padding: '2.5rem', borderRadius: 20, background: 'var(--c-surface)', border: '1px solid var(--c-border)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '.4rem' }}>پروژه مشابهی در ذهن دارید؟</div>
            <div style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>با یک جلسه رایگان شروع کنید</div>
          </div>
          <Link href="/contact/request-consultation"
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(46,107,94,.45)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(46,107,94,.3)' }}
            style={{ padding: '.8rem 2rem', background: 'var(--c-primary)', color: 'white', borderRadius: 10, fontWeight: 700, fontSize: '.9rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(46,107,94,.3)', transition: 'all .22s ease' }}>
            مشاوره رایگان ←
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(0,0,0,.92)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2rem', cursor: 'zoom-out',
        }}>
          <img src={lightbox} alt="" style={{ maxWidth: '90vw', maxHeight: '88vh', objectFit: 'contain', borderRadius: 12, boxShadow: '0 30px 80px rgba(0,0,0,.5)' }} />
          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: '1.5rem', left: '1.5rem',
            width: 40, height: 40, borderRadius: '50%',
            background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)',
            color: 'white', fontSize: '1.2rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>×</button>
        </div>
      )}

    </main>
  )
}
