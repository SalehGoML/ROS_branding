'use client'

import { useState } from 'react'
import Link from 'next/link'

const tabs = [
  {
    id: 'strategy',
    label: 'استراتژی برند',
    services: [
      {
        title: 'استراتژی برند',
        desc: 'تعریف جایگاه، ارزش‌های برند و مسیر رشد بلندمدت.',
        href: '/brand-strategy/strategy',
        icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z',
      },
      {
        title: 'معماری برند',
        desc: 'ساختار روابط برندهای مادر، زیرمجموعه و محصولات.',
        href: '/brand-strategy/architecture',
        icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 0-2-2z M9 22V12h6v10',
      },
      {
        title: 'تحلیل عملکرد برند',
        desc: 'ارزیابی وضعیت فعلی برند در بازار و نقاط بهبود.',
        href: '/brand-strategy/performance',
        icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
      },
      {
        title: 'ریبرندینگ',
        desc: 'بازتعریف هویت برند با حفظ سرمایه برندی موجود.',
        href: '/brand-strategy/rebranding',
        icon: 'M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15',
      },
    ],
  },
  {
    id: 'design',
    label: 'طراحی برند',
    services: [
      {
        title: 'هویت بصری',
        desc: 'لوگو، رنگ، تایپوگرافی و سیستم بصری یکپارچه.',
        href: '/brand-design/visual-identity',
        icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
      },
      {
        title: 'نام‌گذاری برند',
        desc: 'خلق نام برند، محصول یا سرویس با رویکرد استراتژیک.',
        href: '/brand-design/naming',
        icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
      },
      {
        title: 'تجربه برند',
        desc: 'طراحی تجربه منسجم در تمام نقاط تماس مشتری.',
        href: '/brand-design/experience',
        icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
      },
      {
        title: 'ست اداری و برندبوک',
        desc: 'مستندسازی کامل هویت برند و طراحی ابزار اداری.',
        href: '/brand-design/brandbook',
        icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
      },
    ],
  },
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('strategy')
  const current = tabs.find(t => t.id === activeTab)!

  return (
    <section style={{ background: 'var(--c-bg)', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', marginBottom: '3rem',
          flexWrap: 'wrap', gap: '1.5rem',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              fontSize: '.72rem', fontWeight: 500,
              letterSpacing: '.12em', textTransform: 'uppercase',
              color: 'var(--c-primary)', marginBottom: '1rem',
            }}>
              <span style={{ display: 'block', width: 18, height: 2, background: 'var(--c-primary)', borderRadius: 2 }} />
              خدمات ما
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, lineHeight: 1.25,
              letterSpacing: '-.02em',
            }}>
              راهکارهای تخصصی برندینگ
            </h2>
          </div>

          <Link href="/services" style={{
            display: 'flex', alignItems: 'center', gap: '.5rem',
            fontSize: '.88rem', fontWeight: 500,
            color: 'var(--c-primary)',
            border: '1.5px solid var(--c-primary)',
            borderRadius: 'var(--r-sm)',
            padding: '.55rem 1.2rem',
          }}>
            همه خدمات ←
          </Link>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: '.5rem',
          marginBottom: '2rem',
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border)',
          borderRadius: 'var(--r-md)',
          padding: '.35rem',
          width: 'fit-content',
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '.55rem 1.4rem',
                fontSize: '.88rem', fontWeight: 500,
                border: 'none', cursor: 'pointer',
                borderRadius: 'var(--r-sm)',
                background: activeTab === tab.id ? 'var(--c-primary)' : 'transparent',
                color: activeTab === tab.id ? 'white' : 'var(--c-text-muted)',
                transition: 'all .2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}>
          {current.services.map((service, i) => (
            <Link href={service.href} key={service.title} style={{
              display: 'block',
              padding: '1.75rem 1.5rem',
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              borderRadius: 'var(--r-md)',
              transition: 'border-color .2s, box-shadow .2s',
              textDecoration: 'none',
            }}>
              <div style={{
                width: 44, height: 44,
                background: i === 0 ? 'var(--c-primary)' : 'var(--c-primary-bg)',
                borderRadius: 'var(--r-sm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24"
                  fill="none"
                  stroke={i === 0 ? 'white' : 'var(--c-primary)'}
                  strokeWidth="1.8">
                  <path d={service.icon}/>
                </svg>
              </div>
              <div style={{ fontSize: '.98rem', fontWeight: 600, marginBottom: '.5rem' }}>
                {service.title}
              </div>
              <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.65 }}>
                {service.desc}
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '.3rem',
                marginTop: '1.25rem',
                fontSize: '.78rem', fontWeight: 500,
                color: 'var(--c-primary)',
              }}>
                بیشتر بدانید
                <svg width="12" height="12" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}