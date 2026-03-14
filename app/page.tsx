'use client'
import { useState } from 'react'
import React from 'react'
import HeroForm from '../components/home/HeroForm'
import HeroImageLinks from '../components/home/HeroImageLinks'
import MarqueeSection from '../components/home/MarqueeSection'
import AdvantageSection from '../components/home/AdvantageSection'
import ServicesSection from '../components/home/ServicesSection'
import CoursesSection from '../components/home/CoursesSection'
import ProductsSection from '../components/home/ProductsSection'
import PortfolioSection from '../components/home/PortfolioSection'
import ProcessSection from '../components/home/ProcessSection'
import CTASection from '../components/home/CTASection'

function HeroPill({ label, icon }: { label: string; icon: React.ReactNode }) {
  const [h, setH] = useState(false)
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display:'flex', alignItems:'center', gap:'.55rem',
        padding:'.55rem 1.1rem', borderRadius:10, cursor:'default',
        border:`1px solid ${h ? 'rgba(74,140,124,.5)' : 'rgba(255,255,255,.08)'}`,
        background: h ? 'rgba(74,140,124,.12)' : 'rgba(255,255,255,.04)',
        boxShadow: h ? '0 0 20px rgba(74,140,124,.2)' : 'none',
        transform: h ? 'translateY(-2px)' : 'translateY(0)',
        transition:'all .3s cubic-bezier(.16,1,.3,1)',
        position:'relative', overflow:'hidden',
      }}
    >
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(105deg,transparent 40%,rgba(74,140,124,.12) 50%,transparent 60%)', transform: h ? 'translateX(100%)' : 'translateX(-100%)', transition:'transform .5s ease', pointerEvents:'none' }} />
      <span style={{ color: h ? '#5fb3a1' : 'rgba(74,140,124,.7)', transition:'color .3s ease', display:'flex' }}>{icon}</span>
      <span style={{ fontSize:'.78rem', fontWeight:700, color: h ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.45)', letterSpacing:'.02em', transition:'color .3s ease', whiteSpace:'nowrap' as const }}>{label}</span>
    </div>
  )
}

function HeroPills() {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'.75rem', marginBottom:'2rem', flexWrap:'wrap', justifyContent:'center' }}>
      <HeroPill label="تفکر استراتژیک" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>} />
      <div style={{ width:1, height:18, background:'rgba(255,255,255,.08)' }} />
      <HeroPill label="تحلیل هوشمند" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>} />
    </div>
  )
}

export default function HomePage() {
  return (
    <main style={{ background: '#0C0F0E', color: 'white' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#0C0F0E' }}>

        {/* wallpaper */}
        <div style={{ position: 'relative', width: '100%', paddingTop: 68 }}>
          <img
            src="/brand/wallpaper-1.jpg"
            alt="ROS Branding"
            style={{
              width: '100%',
              height: 'clamp(420px, 58vw, 700px)',
              objectFit: 'cover',
              objectPosition: 'center 25%',
              display: 'block',
              filter: 'brightness(.5) saturate(1.15)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to left, rgba(46,107,94,.25) 0%, rgba(0,0,0,.3) 60%)',
          }} />
          {/* fade bottom */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
            background: 'linear-gradient(to bottom, transparent, #0C0F0E)',
          }} />
          <HeroImageLinks />
        </div>

        {/* text + form */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center',
          padding: '3rem 2rem 5rem',
          position: 'relative', zIndex: 2,
        }}>

          {/* animated eyebrow */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'rgba(74,140,124,.07)', border:'1px solid rgba(74,140,124,.18)', borderRadius:100, padding:'.3rem .3rem .3rem .8rem', marginBottom:'2.5rem', backdropFilter:'blur(8px)' }}>
            <span style={{ fontSize:'.62rem', fontWeight:600, letterSpacing:'.12em', color:'rgba(255,255,255,.45)', textTransform:'uppercase' as const }}>آژانس برندینگ</span>
            <div style={{ display:'flex', alignItems:'center', gap:'.35rem', background:'rgba(74,140,124,.15)', border:'1px solid rgba(74,140,124,.3)', borderRadius:100, padding:'.2rem .65rem' }}>
              <span style={{ width:5, height:5, borderRadius:'50%', background:'#4A8C7C', boxShadow:'0 0 6px rgba(74,140,124,1)', display:'inline-block', animation:'heroPulse 2s ease-in-out infinite' }} />
              <span style={{ fontSize:'.62rem', fontWeight:700, letterSpacing:'.12em', color:'rgba(74,140,124,.95)', textTransform:'uppercase' as const }}>رُس</span>
            </div>
          </div>

          {/* main headline */}
          <h1 style={{ fontSize:'clamp(2.4rem,5.5vw,4.5rem)', fontWeight:900, lineHeight:1.08, letterSpacing:'-.05em', color:'white', maxWidth:800, marginBottom:'2.5rem', textAlign:'center', whiteSpace:'nowrap' as const }}>
            مدیریت برند{' '}
            <span style={{ background:'linear-gradient(135deg,#7dcfbe 0%,#4A8C7C 40%,#2E6B5E 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', filter:'drop-shadow(0 0 30px rgba(74,140,124,.35))' }}>با خرد</span>
          </h1>

          {/* subline pills */}
          <HeroPills />

          <p style={{
            fontSize: '.88rem',
            color: 'rgba(255,255,255,.42)',
            lineHeight: 1.85,
            maxWidth: 420,
            marginBottom: '2rem',
          }}>
            ترکیب دقیق تحلیل داده و درک فرهنگی بازار ایران
            برای ساخت برندهایی که ماندگار می‌مانند.
          </p>

          <div style={{ width: '100%', maxWidth: 480, marginBottom: '1rem' }}>
            <HeroForm />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['بدون ثبت‌نام', 'تحلیل در ۳ ثانیه', 'کاملاً رایگان'].map(t => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '.35rem', fontSize: '.7rem', color: 'rgba(255,255,255,.28)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(74,140,124,.7)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>

      <ServicesSection />
      <MarqueeSection />
      <AdvantageSection />
      <CoursesSection />
      <ProductsSection />
      <PortfolioSection />
      <ProcessSection />
      <CTASection />

    </main>
  )
}
