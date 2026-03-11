'use client'

import { useState } from 'react'
import Link from 'next/link'

const tabs = [
  {
    id: 'strategy', label: 'استراتژی برند',
    services: [
      { title: 'سند استراتژی برند', desc: 'تدوین سند جامع استراتژی برند شامل مأموریت، چشم‌انداز، ارزش‌ها و جایگاه رقابتی.', href: '/services/brand-strategy/brand-document', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8' },
      { title: 'معماری برند', desc: 'ساختار روابط برندهای مادر، زیرمجموعه و محصولات در یک اکوسیستم منسجم.', href: '/services/brand-strategy/architecture', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 0-2-2z M9 22V12h6v10' },
      { title: 'نام‌گذاری برند', desc: 'خلق نام برند، محصول یا سرویس با رویکرد استراتژیک و پشتوانه زبان‌شناختی.', href: '/services/brand-strategy/naming', icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' },
      { title: 'تجربه برند', desc: 'طراحی تجربه منسجم و به‌یادماندنی در تمام نقاط تماس مشتری با برند.', href: '/services/brand-strategy/experience', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
      { title: 'تحلیل عملکرد برند', desc: 'ارزیابی جایگاه فعلی برند در بازار، تحلیل رقبا و شناسایی نقاط بهبود.', href: '/services/brand-strategy/performance', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
      { title: 'ریبرندینگ', desc: 'بازتعریف هویت برند با حفظ سرمایه برندی موجود و تطبیق با شرایط جدید بازار.', href: '/services/brand-strategy/rebranding', icon: 'M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' },
    ],
  },
  {
    id: 'design', label: 'طراحی برند',
    services: [
      { title: 'هویت بصری', desc: 'طراحی لوگو، پالت رنگ، تایپوگرافی و سیستم بصری یکپارچه برای برند شما.', href: '/services/brand-design/visual-identity', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
      { title: 'ست اداری', desc: 'طراحی کارت ویزیت، سربرگ، پاکت و تمام ابزار اداری منطبق با هویت برند.', href: '/services/brand-design/stationery', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z' },
      { title: 'برندبوک', desc: 'مستندسازی کامل هویت برند در قالب راهنمای جامع برای استفاده تیم داخلی و آژانس‌ها.', href: '/services/brand-design/brandbook', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8' },
    ],
  },
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('strategy')
  const current = tabs.find(t => t.id === activeTab)!

  return (
    <section style={{ background: 'var(--c-bg)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.25rem' }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', marginBottom: '2.5rem',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              fontSize: '.72rem', fontWeight: 500,
              letterSpacing: '.12em', textTransform: 'uppercase' as const,
              color: 'var(--c-primary)', marginBottom: '1rem',
            }}>
              <span style={{ display: 'block', width: 18, height: 2, background: 'var(--c-primary)', borderRadius: 2 }} />
              خدمات ما
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.6rem)',
              fontWeight: 700, lineHeight: 1.25, letterSpacing: '-.02em',
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
          }}>همه خدمات ←</Link>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: '.5rem', marginBottom: '1.75rem',
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border)',
          borderRadius: 'var(--r-md)',
          padding: '.35rem', width: 'fit-content',
        }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: '.5rem 1.1rem', fontSize: '.85rem', fontWeight: 500,
              border: 'none', cursor: 'pointer', borderRadius: 'var(--r-sm)',
              background: activeTab === tab.id ? 'var(--c-primary)' : 'transparent',
              color: activeTab === tab.id ? 'white' : 'var(--c-text-muted)',
              transition: 'all .2s',
            }}>{tab.label}</button>
          ))}
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(current.services.length, 3)}, 1fr)`,
          gap: '1rem',
        }}>
          {current.services.map((service, i) => (
            <Link href={service.href} key={service.title} className="card-hover" style={{
              display: 'flex', flexDirection: 'column',
              padding: '1.5rem',
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              borderRadius: 'var(--r-md)',
              textDecoration: 'none',
              minHeight: 200,
            }}>
              <div style={{
                width: 44, height: 44,
                background: i === 0 ? 'var(--c-primary)' : 'var(--c-primary-bg)',
                borderRadius: 'var(--r-sm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem', flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke={i === 0 ? 'white' : 'var(--c-primary)'} strokeWidth="1.8">
                  <path d={service.icon}/>
                </svg>
              </div>
              <div style={{ fontSize: '.95rem', fontWeight: 600, marginBottom: '.5rem' }}>{service.title}</div>
              <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.65, flex: 1 }}>{service.desc}</div>
              {/* بیشتر بدانید — همیشه پایین */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '.3rem',
                marginTop: '1.25rem', paddingTop: '.75rem',
                borderTop: '1px solid var(--c-border)',
                fontSize: '.78rem', fontWeight: 500,
                color: 'var(--c-primary)',
              }}>
                بیشتر بدانید
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
