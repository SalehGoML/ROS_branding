'use client'

import { useState } from 'react'
import Link from 'next/link'

const images = [
  { src: '/portfolio/rahkar-sanat/cover.jpg',      caption: 'هویت بصری' },
  { src: '/portfolio/rahkar-sanat/logo.jpg',        caption: 'ساختار لوگو' },
  { src: '/portfolio/rahkar-sanat/identity.jpg',    caption: 'سیستم بصری' },
  { src: '/portfolio/rahkar-sanat/stationery.jpg',  caption: 'ست اداری' },
  { src: '/portfolio/rahkar-sanat/img-01.jpg',      caption: 'پالت رنگ' },
  { src: '/portfolio/rahkar-sanat/img-02.jpg',      caption: 'لوگو روی پس‌زمینه' },
  { src: '/portfolio/rahkar-sanat/img-03.jpg',      caption: 'ورژن‌های لوگو' },
  { src: '/portfolio/rahkar-sanat/img-04.jpg',      caption: 'تایپوگرافی' },
  { src: '/portfolio/rahkar-sanat/img-05.jpg',      caption: 'گرادیان برند' },
  { src: '/portfolio/rahkar-sanat/img-06.jpg',      caption: 'کارت ویزیت' },
  { src: '/portfolio/rahkar-sanat/img-07.jpg',      caption: 'سربرگ' },
  { src: '/portfolio/rahkar-sanat/img-08.jpg',      caption: 'پاکت نامه' },
  { src: '/portfolio/rahkar-sanat/img-09.jpg',      caption: 'دفترچه یادداشت' },
  { src: '/portfolio/rahkar-sanat/img-10.jpg',      caption: 'تقویم رومیزی' },
  { src: '/portfolio/rahkar-sanat/img-11.jpg',      caption: 'بروشور' },
  { src: '/portfolio/rahkar-sanat/img-12.jpg',      caption: 'کاتالوگ' },
  { src: '/portfolio/rahkar-sanat/img-13.jpg',      caption: 'طراحی داخلی کاتالوگ' },
  { src: '/portfolio/rahkar-sanat/img-14.jpg',      caption: 'موشن گرافیک' },
  { src: '/portfolio/rahkar-sanat/img-15.jpg',      caption: 'محیط برند' },
  { src: '/portfolio/rahkar-sanat/img-16.jpg',      caption: 'اجرای برند' },
]

export default function RahkarSanatPage() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)', minHeight: '100vh' }}>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(0,0,0,.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <img
            src={selected}
            alt=""
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: 8 }}
          />
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', top: '1.5rem', right: '1.5rem',
              width: 42, height: 42,
              background: 'rgba(255,255,255,.1)', color: 'white',
              border: 'none', borderRadius: '50%',
              cursor: 'pointer', fontSize: '1rem',
            }}
          >✕</button>
        </div>
      )}

      {/* Hero */}
      <section style={{ background: '#003d71', padding: '5rem 2rem 4rem', color: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Link href="/portfolio" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            fontSize: '.82rem', color: 'rgba(255,255,255,.6)', marginBottom: '2rem',
          }}>
            ← بازگشت به نمونه‌کارها
          </Link>
          <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', marginBottom: '.75rem', letterSpacing: '.06em' }}>
            اینترنت اشیا (IoT)
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-.02em', marginBottom: '1rem',
          }}>
            راهکار صنعت
          </h1>
          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,.7)',
            maxWidth: 560, lineHeight: 1.8, marginBottom: '2rem',
          }}>
            طراحی هویت بصری یکپارچه برای شرکت دانش‌بنیان راهکارصنعت آواپرداز —
            از لوگو و سیستم رنگ تا ست اداری کامل و بروشور معرفی.
          </p>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            {['هویت بصری', 'طراحی لوگو', 'ست اداری', 'بروشور'].map(tag => (
              <span key={tag} style={{
                fontSize: '.75rem', fontWeight: 500,
                padding: '.3rem .85rem',
                background: 'rgba(255,255,255,.12)',
                color: 'rgba(255,255,255,.85)',
                borderRadius: 100,
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Result bar */}
      <div style={{
        background: 'var(--c-primary-bg)',
        borderBottom: '1px solid var(--c-border)',
        padding: '1.25rem 2rem',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'center', gap: '.75rem',
          fontSize: '.88rem', fontWeight: 500, color: 'var(--c-primary)',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
            <polyline points="16 7 22 7 22 13"/>
          </svg>
          نتیجه: هویت بصری یکپارچه برای ورود به بازار B2B
        </div>
      </div>

      {/* Gallery */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <p style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', marginBottom: '1.5rem' }}>
          روی هر تصویر کلیک کنید برای مشاهده بزرگ‌تر
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.25rem',
        }}>
          {images.map((img) => (
            <div
              key={img.src}
              onClick={() => setSelected(img.src)}
              style={{
                borderRadius: 'var(--r-lg)',
                overflow: 'hidden',
                border: '1px solid var(--c-border)',
                background: 'var(--c-surface)',
                cursor: 'zoom-in',
              }}
            >
              <img
                src={img.src} alt={img.caption}
                style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                padding: '.85rem 1.25rem',
                fontSize: '.82rem', color: 'var(--c-text-muted)',
                borderTop: '1px solid var(--c-border)',
              }}>
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--c-surface)',
        borderTop: '1px solid var(--c-border)',
        padding: '4rem 2rem', textAlign: 'center',
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '.75rem' }}>
          پروژه مشابه دارید؟
        </h3>
        <p style={{ color: 'var(--c-text-muted)', marginBottom: '2rem' }}>
          با ما مشاوره رایگان بگیرید.
        </p>
        <Link href="/contact/request-consultation" style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          padding: '.85rem 2rem',
          background: 'var(--c-primary)', color: 'white',
          borderRadius: 'var(--r-sm)',
          fontSize: '.95rem', fontWeight: 600,
        }}>
          شروع مشاوره ←
        </Link>
      </section>

    </main>
  )
}