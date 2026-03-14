'use client'

import SectionBadge from '../ui/SectionBadge'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const steps = [
  {
    num: '۰۱', en: 'Discovery',
    title: 'بررسی وضعیت برند',
    desc: 'تحلیل جایگاه فعلی، رقبا، مخاطبان و شکاف‌های هویتی برند شما.',
    icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10',
    output: 'گزارش تحلیل برند',
  },
  {
    num: '۰۲', en: 'Strategy',
    title: 'استراتژی و جایگاه‌یابی',
    desc: 'تعریف ارزش‌های اصلی، شخصیت برند، لحن ارتباطی و جایگاه رقابتی.',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    output: 'سند استراتژی برند',
  },
  {
    num: '۰۳', en: 'Identity',
    title: 'هویت بصری',
    desc: 'طراحی لوگو، پالت رنگ، تایپوگرافی و سیستم بصری یکپارچه.',
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    output: 'فایل‌های طراحی',
  },
  {
    num: '۰۴', en: 'Delivery',
    title: 'مستندسازی و تحویل',
    desc: 'تولید برندبوک کامل، راهنمای کاربرد و آموزش تیم داخلی.',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
    output: 'برندبوک کامل',
  },
  {
    num: '۰۵', en: 'Optimize',
    title: 'بهینه‌سازی مداوم',
    desc: 'گزارش‌های دوره‌ای و پیشنهادهای بهبود بر اساس داده‌های واقعی.',
    icon: 'M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15',
    output: 'گزارش‌های ماهانه',
  },
  {
    num: '۰۶', en: 'AI Monitor',
    title: 'پایش با ROS AI',
    desc: 'رصد مستمر انسجام برند در تمام نقاط تماس با هوش مصنوعی.',
    icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
    output: 'داشبورد هوشمند',
    highlight: true,
  },
]

export default function ProcessSection() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const activeStep = steps[active]

  return (
    <section style={{ background: 'var(--c-bg)', padding: '5rem 0', borderTop: '1px solid var(--c-border)' }}>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <SectionBadge label="فرایند کار" />
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', fontWeight: 800, letterSpacing: '-.03em', marginBottom: '.75rem' }}>
            فرایند برندینگ آژانس رُس
          </h2>
          <p style={{ fontSize: '.9rem', color: 'var(--c-text-muted)', maxWidth: 420, margin: '0 auto', lineHeight: 1.8 }}>
            از اولین جلسه تا تحویل برند — یک مسیر شفاف و اثبات‌شده
          </p>
        </div>

        {/* main: steps + detail */}
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'clamp(1.5rem,4vw,3rem)', alignItems: 'start' }}>

          {/* LEFT — step list with timeline */}
          <div style={{ position: 'relative' }}>
            {/* vertical line */}
            <div style={{ position: 'absolute', top: 24, bottom: 24, right: 23, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(74,140,124,.2) 10%, rgba(74,140,124,.2) 90%, transparent)', pointerEvents: 'none' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {steps.map((step, i) => {
                const isActive = active === i
                const isDone = i < active
                return (
                  <button
                    key={step.num}
                    onClick={() => setActive(i)}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '1.25rem',
                      padding: '1rem 1rem 1rem 0',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      textAlign: 'right', position: 'relative',
                    }}
                  >
                    {/* circle */}
                    <div style={{
                      width: 46, height: 46, flexShrink: 0, borderRadius: '50%',
                      border: `2px solid ${isActive ? '#4A8C7C' : isDone ? 'rgba(74,140,124,.35)' : 'rgba(255,255,255,.08)'}`,
                      background: isActive
                        ? step.highlight ? 'linear-gradient(135deg,#4A8C7C,#2E6B5E)' : 'rgba(74,140,124,.15)'
                        : isDone ? 'rgba(74,140,124,.08)' : 'var(--c-surface)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all .3s ease',
                      boxShadow: isActive ? '0 0 0 4px rgba(74,140,124,.1), 0 4px 16px rgba(46,107,94,.2)' : 'none',
                      zIndex: 1,
                    }}>
                      {isDone && !isActive ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(74,140,124,.6)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke={isActive ? (step.highlight ? 'white' : '#4A8C7C') : 'rgba(255,255,255,.2)'}
                          strokeWidth="1.8">
                          <path d={step.icon}/>
                        </svg>
                      )}
                    </div>

                    {/* text */}
                    <div style={{ flex: 1, paddingTop: '.35rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.2rem' }}>
                        <span style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.12em', color: isActive ? 'rgba(74,140,124,.8)' : 'rgba(255,255,255,.2)', textTransform: 'uppercase' as const }}>{step.en}</span>
                        {step.highlight && <span style={{ fontSize: '.55rem', fontWeight: 700, letterSpacing: '.1em', color: 'rgba(74,140,124,.7)', background: 'rgba(46,107,94,.1)', border: '1px solid rgba(74,140,124,.2)', borderRadius: 100, padding: '.1rem .4rem' }}>AI</span>}
                      </div>
                      <div style={{ fontSize: '.9rem', fontWeight: isActive ? 700 : 500, color: isActive ? 'var(--c-text)' : 'rgba(255,255,255,.4)', transition: 'all .25s ease' }}>
                        {step.title}
                      </div>
                    </div>

                    {/* arrow */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#4A8C7C' : 'transparent'} strokeWidth="2" style={{ flexShrink: 0, marginTop: '.75rem', transition: 'all .2s ease' }}>
                      <path d="M19 12H5M12 5l-7 7 7 7"/>
                    </svg>
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT — detail panel */}
          <div style={{
            position: 'sticky', top: 100,
            opacity: visible ? 1 : 0,
            transition: 'opacity .6s ease',
          }}>
            <div
              key={active}
              style={{
                padding: '2.5rem',
                background: activeStep.highlight
                  ? 'linear-gradient(145deg, rgba(46,107,94,.2), rgba(10,20,18,.9))'
                  : 'linear-gradient(145deg, rgba(255,255,255,.03), rgba(255,255,255,.01))',
                border: `1px solid ${activeStep.highlight ? 'rgba(74,140,124,.4)' : 'rgba(255,255,255,.07)'}`,
                borderRadius: 20,
                animation: 'fadeUp .35s ease',
              }}
            >
              {/* step badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.15em', color: 'rgba(74,140,124,.7)', textTransform: 'uppercase' as const }}>
                  مرحله {activeStep.num}
                </div>
                <div style={{ flex: 1, height: 1, background: 'rgba(74,140,124,.15)' }} />
                {activeStep.highlight && (
                  <div style={{ fontSize: '.6rem', fontWeight: 700, letterSpacing: '.1em', color: 'rgba(74,140,124,.9)', background: 'rgba(46,107,94,.12)', border: '1px solid rgba(74,140,124,.2)', borderRadius: 100, padding: '.2rem .65rem' }}>ROS AI</div>
                )}
              </div>

              {/* icon big */}
              <div style={{ width: 64, height: 64, borderRadius: 18, background: activeStep.highlight ? 'rgba(74,140,124,.2)' : 'rgba(255,255,255,.04)', border: `1px solid ${activeStep.highlight ? 'rgba(74,140,124,.3)' : 'rgba(255,255,255,.08)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem', boxShadow: activeStep.highlight ? '0 0 32px rgba(74,140,124,.15)' : 'none' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={activeStep.highlight ? 'rgba(74,140,124,.9)' : 'rgba(255,255,255,.4)'} strokeWidth="1.5">
                  <path d={activeStep.icon}/>
                </svg>
              </div>

              <div style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-.02em', color: 'white', marginBottom: '.85rem' }}>
                {activeStep.title}
              </div>
              <div style={{ fontSize: '.87rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.9, marginBottom: '2rem' }}>
                {activeStep.desc}
              </div>

              {/* output */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '1rem 1.25rem', background: 'rgba(46,107,94,.07)', border: '1px solid rgba(74,140,124,.12)', borderRadius: 12 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(74,140,124,.7)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <div>
                  <div style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.08em', marginBottom: '.15rem' }}>خروجی این مرحله</div>
                  <div style={{ fontSize: '.82rem', fontWeight: 600, color: 'rgba(74,140,124,.85)' }}>{activeStep.output}</div>
                </div>
              </div>

              {/* nav */}
              <div style={{ display: 'flex', gap: '.5rem', marginTop: '1.75rem' }}>
                <button onClick={() => setActive(Math.max(0, active-1))} disabled={active===0} style={{ flex:1, padding:'.65rem', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.07)', borderRadius:10, color:'rgba(255,255,255,.3)', cursor: active===0 ? 'not-allowed' : 'pointer', fontSize:'.78rem', transition:'all .2s ease', opacity: active===0 ? 0.3 : 1 }}>← قبلی</button>
                <button onClick={() => setActive(Math.min(steps.length-1, active+1))} disabled={active===steps.length-1} style={{ flex:1, padding:'.65rem', background: active===steps.length-1 ? 'rgba(74,140,124,.05)' : 'rgba(74,140,124,.12)', border:`1px solid ${active===steps.length-1 ? 'rgba(74,140,124,.1)' : 'rgba(74,140,124,.3)'}`, borderRadius:10, color: active===steps.length-1 ? 'rgba(74,140,124,.3)' : 'rgba(74,140,124,.9)', cursor: active===steps.length-1 ? 'not-allowed' : 'pointer', fontSize:'.78rem', fontWeight:600, transition:'all .2s ease' }}>بعدی ←</button>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/contact/request-consultation"
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow='0 12px 32px rgba(46,107,94,.3)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow='none' }}
            style={{ display:'inline-flex', alignItems:'center', gap:'.6rem', padding:'.9rem 2.25rem', background:'var(--c-primary)', color:'white', borderRadius:12, fontSize:'.9rem', fontWeight:700, textDecoration:'none', transition:'all .25s ease' }}>
            شروع فرایند برندینگ ←
          </Link>
        </div>

      </div>
    </section>
  )
}
