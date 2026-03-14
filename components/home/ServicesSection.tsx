'use client'

import SectionBadge from '../ui/SectionBadge'
import { useState } from 'react'
import Link from 'next/link'

const tabs = [
  {
    id: 'strategy', label: 'استراتژی برند',
    services: [
      { title: 'سند استراتژی برند', desc: 'تدوین سند جامع استراتژی برند شامل مأموریت، چشم‌انداز، ارزش‌ها و جایگاه رقابتی. پایه تمام تصمیمات برندینگ شما.', href: '/services/brand-strategy/brand-document', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8', tags: ['مستندسازی', 'استراتژی'] },
      { title: 'معماری برند', desc: 'ساختار روابط برندهای مادر، زیرمجموعه و محصولات در یک اکوسیستم منسجم و هدفمند.', href: '/services/brand-strategy/architecture', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 0-2-2z M9 22V12h6v10', tags: ['ساختار', 'سیستم'] },
      { title: 'نام‌گذاری برند', desc: 'خلق نام برند، محصول یا سرویس با رویکرد استراتژیک و پشتوانه زبان‌شناختی محکم.', href: '/services/brand-strategy/naming', icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z', tags: ['خلاقیت', 'زبان‌شناسی'] },
      { title: 'تجربه برند', desc: 'طراحی تجربه منسجم و به‌یادماندنی در تمام نقاط تماس مشتری با برند شما.', href: '/services/brand-strategy/experience', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', tags: ['UX', 'مشتری‌محور'] },
      { title: 'تحلیل عملکرد برند', desc: 'ارزیابی جایگاه فعلی برند در بازار، تحلیل رقبا و شناسایی دقیق نقاط بهبود.', href: '/services/brand-strategy/performance', icon: 'M22 12h-4l-3 9L9 3l-3 9H2', tags: ['داده‌محور', 'رقبا'] },
      { title: 'ریبرندینگ', desc: 'بازتعریف هویت برند با حفظ سرمایه برندی موجود و تطبیق هوشمند با شرایط جدید بازار.', href: '/services/brand-strategy/rebranding', icon: 'M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15', tags: ['تحول', 'تجدید'] },
    ],
  },
  {
    id: 'design', label: 'طراحی برند',
    services: [
      { title: 'هویت بصری', desc: 'طراحی لوگو، پالت رنگ، تایپوگرافی و سیستم بصری یکپارچه. اولین و ماندگارترین تأثیر برند شما.', href: '/services/brand-design/visual-identity', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', tags: ['لوگو', 'رنگ', 'تایپوگرافی'] },
      { title: 'ست اداری', desc: 'طراحی کارت ویزیت، سربرگ، پاکت و تمام ابزار اداری کاملاً منطبق با هویت برند.', href: '/services/brand-design/stationery', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z', tags: ['چاپ', 'اداری'] },
      { title: 'برندبوک', desc: 'مستندسازی کامل هویت برند در قالب راهنمای جامع برای تیم داخلی و آژانس‌های همکار.', href: '/services/brand-design/brandbook', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8', tags: ['مستندسازی', 'راهنما'] },
    ],
  },
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('strategy')
  const [activeIdx, setActiveIdx] = useState(0)
  const current = tabs.find(t => t.id === activeTab)!
  const active = current.services[activeIdx] ?? current.services[0]

  const handleTabChange = (id: string) => {
    setActiveTab(id)
    setActiveIdx(0)
  }

  return (
    <section style={{ background: 'var(--c-bg)', padding: '5rem 0', borderTop: '1px solid var(--c-border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <SectionBadge label="خدمات رس" />
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-.03em', margin: 0 }}>
              راهکارهای تخصصی برندینگ
            </h2>
          </div>
          <Link href="/services"
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='var(--c-primary)'; el.style.color='white'; el.style.transform='translateY(-2px)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='transparent'; el.style.color='var(--c-primary)'; el.style.transform='translateY(0)' }}
            style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', fontSize:'.85rem', fontWeight:600, color:'var(--c-primary)', border:'1.5px solid var(--c-primary)', borderRadius:10, padding:'.55rem 1.2rem', transition:'all .22s ease', textDecoration:'none', background:'transparent' }}>
            همه خدمات ←
          </Link>
        </div>

        {/* tabs */}
        <div style={{ display:'flex', gap:'.4rem', marginBottom:'2rem', background:'var(--c-surface)', border:'1px solid var(--c-border)', borderRadius:12, padding:'.3rem', width:'fit-content' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => handleTabChange(tab.id)} style={{ padding:'.5rem 1.25rem', fontSize:'.83rem', fontWeight:600, border:'none', cursor:'pointer', borderRadius:9, background: activeTab===tab.id ? 'var(--c-primary)' : 'transparent', color: activeTab===tab.id ? 'white' : 'var(--c-text-muted)', transition:'all .22s ease' }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* main: list + detail */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', alignItems:'start' }}>

          {/* list */}
          <div style={{ display:'flex', flexDirection:'column', gap:'.5rem' }}>
            {current.services.map((service, i) => {
              const isActive = activeIdx === i
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveIdx(i)}
                  style={{
                    display:'flex', alignItems:'center', gap:'1rem',
                    padding:'1.1rem 1.4rem',
                    background: isActive ? 'linear-gradient(135deg, rgba(46,107,94,.18), rgba(46,107,94,.08))' : 'var(--c-surface)',
                    border: `1px solid ${isActive ? 'rgba(74,140,124,.45)' : 'var(--c-border)'}`,
                    borderRadius:14, cursor:'pointer', textAlign:'right',
                    transform: isActive ? 'translateX(-4px)' : 'translateX(0)',
                    transition:'all .25s cubic-bezier(.16,1,.3,1)',
                    boxShadow: isActive ? '0 8px 24px rgba(46,107,94,.12)' : 'none',
                  }}
                >
                  {/* number */}
                  <div style={{ width:32, height:32, flexShrink:0, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', background: isActive ? 'var(--c-primary)' : 'var(--c-primary-bg)', transition:'background .25s ease' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={isActive ? 'white' : 'var(--c-primary)'} strokeWidth="1.8">
                      <path d={service.icon}/>
                    </svg>
                  </div>

                  <div style={{ flex:1, textAlign:'right' }}>
                    <div style={{ fontSize:'.9rem', fontWeight:700, color:'var(--c-text)', marginBottom:'.15rem' }}>{service.title}</div>
                    <div style={{ fontSize:'.72rem', color:'var(--c-text-muted)', lineHeight:1.5, opacity: isActive ? 1 : 0.7 }}>
                      {service.tags.join(' · ')}
                    </div>
                  </div>

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isActive ? 'var(--c-primary)' : 'var(--c-text-muted)'} strokeWidth="2" style={{ flexShrink:0, opacity: isActive ? 1 : 0.3, transform: isActive ? 'translateX(-2px)' : 'translateX(0)', transition:'all .2s ease' }}>
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                </button>
              )
            })}
          </div>

          {/* detail panel */}
          <div style={{
            position:'sticky', top:100,
            padding:'2.5rem',
            background:'linear-gradient(145deg, rgba(46,107,94,.1), rgba(10,20,18,.8))',
            border:'1px solid rgba(74,140,124,.2)',
            borderRadius:20,
            minHeight:320,
          }}>
            <div style={{ position:'absolute', top:-30, right:-30, width:160, height:160, borderRadius:'50%', background:'radial-gradient(circle, rgba(74,140,124,.1), transparent 70%)', pointerEvents:'none' }} />

            {/* icon */}
            <div style={{ width:54, height:54, background:'rgba(74,140,124,.12)', border:'1px solid rgba(74,140,124,.2)', borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.5rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(74,140,124,.85)" strokeWidth="1.7">
                <path d={active.icon}/>
              </svg>
            </div>

            <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginBottom:'1rem' }}>
              {active.tags.map(tag => (
                <span key={tag} style={{ fontSize:'.62rem', fontWeight:600, letterSpacing:'.08em', color:'rgba(74,140,124,.8)', background:'rgba(46,107,94,.1)', border:'1px solid rgba(74,140,124,.15)', borderRadius:100, padding:'.2rem .65rem' }}>{tag}</span>
              ))}
            </div>

            <div style={{ fontSize:'1.25rem', fontWeight:800, letterSpacing:'-.02em', color:'white', marginBottom:'.85rem' }}>
              {active.title}
            </div>
            <div style={{ fontSize:'.86rem', color:'rgba(255,255,255,.5)', lineHeight:1.9, marginBottom:'2rem' }}>
              {active.desc}
            </div>

            <Link href={active.href}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='rgba(74,140,124,.2)'; el.style.borderColor='rgba(74,140,124,.5)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='rgba(74,140,124,.08)'; el.style.borderColor='rgba(74,140,124,.2)' }}
              style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.75rem 1.5rem', background:'rgba(74,140,124,.08)', border:'1px solid rgba(74,140,124,.2)', borderRadius:12, fontSize:'.82rem', fontWeight:700, color:'rgba(74,140,124,.9)', textDecoration:'none', transition:'all .22s ease' }}>
              مشاهده خدمت
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
