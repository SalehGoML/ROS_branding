'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function CTASection() {
  const [hMain, setHMain] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background: 'var(--c-bg)', padding: '5rem 0', borderTop: '1px solid var(--c-border)' }}>
      <style>{`@keyframes glowPulse{0%,100%{opacity:.5}50%{opacity:1}}`}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          ref={ref}
          style={{
            position: 'relative', overflow: 'hidden', borderRadius: 24,
            background: 'linear-gradient(135deg, #0e2420 0%, #173329 40%, #0e2420 100%)',
            border: '1px solid rgba(74,140,124,.2)',
            padding: 'clamp(2.5rem,4vw,3.5rem) clamp(2rem,5vw,4rem)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '3rem', flexWrap: 'wrap' as const,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all .7s cubic-bezier(.16,1,.3,1)',
          }}
        >
          <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:1, background:'linear-gradient(to right,transparent,rgba(74,140,124,.7),transparent)', animation:'glowPulse 3s ease-in-out infinite' }} />
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'80%', height:'200%', background:'radial-gradient(ellipse, rgba(46,107,94,.1) 0%, transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:-80, left:-80, width:280, height:280, borderRadius:'50%', border:'1px solid rgba(74,140,124,.06)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', border:'1px solid rgba(74,140,124,.05)', pointerEvents:'none' }} />

          {/* left — trust signals */}
          <div style={{ position:'relative', zIndex:1, display:'flex', flexDirection:'column', gap:'1rem' }}>
            <div style={{ fontSize:'.62rem', fontWeight:700, letterSpacing:'.2em', color:'rgba(74,140,124,.55)', textTransform:'uppercase' as const }}>شروع همکاری</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'.65rem' }}>
              {[
                { icon:'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', text:'اولین مشاوره کاملاً رایگان است' },
                { icon:'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2', text:'پاسخ در کمتر از ۲۴ ساعت' },
                { icon:'M20 6 9 17l-5-5', text:'بدون نیاز به تعهد اولیه' },
                { icon:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', text:'تیم متخصص برندینگ ایران' },
              ].map(item => (
                <div key={item.text} style={{ display:'flex', alignItems:'center', gap:'.75rem' }}>
                  <div style={{ width:30, height:30, borderRadius:8, background:'rgba(46,107,94,.1)', border:'1px solid rgba(74,140,124,.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(74,140,124,.75)" strokeWidth="2"><path d={item.icon}/></svg>
                  </div>
                  <span style={{ fontSize:'.82rem', color:'rgba(255,255,255,.5)', fontWeight:500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* divider */}
          <div style={{ width:1, alignSelf:'stretch', background:'rgba(74,140,124,.12)', flexShrink:0 }} />

          {/* right — CTA */}
          <div style={{ position:'relative', zIndex:1, display:'flex', flexDirection:'column', alignItems:'flex-end', gap:'1.25rem', flex:'0 0 auto' }}>
            <div style={{ textAlign:'right' }}>
              <p style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.15em', color:'rgba(74,140,124,.6)', textTransform:'uppercase' as const, marginBottom:'.5rem' }}>آماده‌اید؟</p>
              <p style={{ fontSize:'1rem', fontWeight:600, color:'rgba(255,255,255,.7)', margin:0, lineHeight:1.6 }}>با یک گفتگو مسیر برندتان را روشن کنید.</p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'.6rem', width:'100%', minWidth:220 }}>
              <Link href="/contact/request-consultation"
                onMouseEnter={() => setHMain(true)}
                onMouseLeave={() => setHMain(false)}
                style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'.5rem', padding:'.9rem 2rem', background: hMain ? 'white' : 'linear-gradient(135deg,#4A8C7C,#2E6B5E)', color: hMain ? '#0e2420' : 'white', borderRadius:11, fontSize:'.88rem', fontWeight:800, textDecoration:'none', boxShadow: hMain ? '0 12px 32px rgba(0,0,0,.3)' : '0 4px 20px rgba(46,107,94,.3)', transform: hMain ? 'translateY(-2px)' : 'translateY(0)', transition:'all .25s cubic-bezier(.16,1,.3,1)' }}>
                مشاوره رایگان ←
              </Link>
              <Link href="/services"
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(74,140,124,.35)'; el.style.color='rgba(255,255,255,.7)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(255,255,255,.08)'; el.style.color='rgba(255,255,255,.35)' }}
                style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'.85rem 2rem', background:'transparent', border:'1px solid rgba(255,255,255,.08)', color:'rgba(255,255,255,.35)', borderRadius:11, fontSize:'.85rem', fontWeight:500, textDecoration:'none', transition:'all .22s ease' }}>
                مشاهده خدمات
              </Link>
            </div>
          </div>

          <div style={{ position:'absolute', bottom:0, left:'15%', right:'15%', height:1, background:'linear-gradient(to right,transparent,rgba(74,140,124,.12),transparent)' }} />
        </div>
      </div>
    </section>
  )
}
