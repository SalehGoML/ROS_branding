'use client'

import SectionBadge from '../ui/SectionBadge'
import { useState, useEffect, useRef } from 'react'

const advantages = [
  {
    icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z',
    name: 'تحلیل داده‌محور، نه شهودی',
    short: 'تصمیم‌ها بر پایه داده‌های واقعی، نه حدس و احساس.',
    detail: 'ما از ابزارهای تحلیل رفتار مخاطب، نقشه‌برداری رقبا و داده‌های بازار ایران استفاده می‌کنیم تا هر استراتژی روی زمین محکم بایستد — نه روی ذوق طراح.',
    metric: { value: '۳x', label: 'بازگشت سرمایه بالاتر نسبت به برندینگ سنتی' },
  },
  {
    icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
    name: 'درک دقیق بستر فرهنگی ایران',
    short: 'استراتژی‌هایی که با واقعیت بازار بومی همخوانی دارند.',
    detail: 'بازار ایران ویژگی‌های منحصربه‌فردی دارد که مدل‌های غربی آن را نادیده می‌گیرند. ما با شناخت عمیق رفتار مصرف‌کننده ایرانی، استراتژی‌هایی می‌سازیم که واقعاً جواب می‌دهند.',
    metric: { value: '+۸۵٪', label: 'از مشتریان تأثیر فرهنگی را مهم‌ترین عامل می‌دانند' },
  },
  {
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    name: 'خروجی‌های اجرایی، نه صرفاً تئوریک',
    short: 'سند، گزارش و راهکاری که واقعاً قابل اجرا باشد.',
    detail: 'هر پروژه با یک roadmap اجرایی دقیق تحویل می‌شود. نه فقط PDF زیبا — بلکه یک نقشه عملیاتی که تیم شما می‌تواند فردا شروع به اجرایش کند.',
    metric: { value: '۱۰۰٪', label: 'پروژه‌ها با مستندات اجرایی کامل تحویل داده می‌شوند' },
  },
]

export default function AdvantageSection() {
  const [open, setOpen] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background: 'var(--c-surface)', padding: '5rem 0', borderTop: '1px solid var(--c-border)' }}>
      <style>{`
        @keyframes pulseGlow { 0%,100%{opacity:.06} 50%{opacity:.14} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes expandDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem,5vw,4rem)', alignItems: 'center' }}>

          {/* RIGHT — accordion */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all .7s cubic-bezier(.16,1,.3,1) .1s' }}>
            <SectionBadge label="چرا رس" />
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '2.25rem' }}>
              <span style={{ background: 'linear-gradient(135deg,#4A8C7C,#2E6B5E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>رُس</span>
              {' '}بر پایه داده تصمیم می‌گیرد،
              <br />
              <span style={{ fontSize: '.82em', fontWeight: 600, color: 'var(--c-text-muted)' }}>نه صرفاً بر اساس سلیقه</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {advantages.map((a, i) => {
                const isOpen = open === i
                return (
                  <div
                    key={a.name}
                    onClick={() => setOpen(i)}
                    style={{
                      borderRadius: 16, overflow: 'hidden',
                      border: `1px solid ${isOpen ? 'rgba(74,140,124,.4)' : 'var(--c-border)'}`,
                      background: isOpen ? 'linear-gradient(135deg, rgba(46,107,94,.1), rgba(46,107,94,.04))' : 'var(--c-surface-2)',
                      transition: 'all .3s ease',
                      cursor: 'pointer',
                    }}
                  >
                    {/* header row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.35rem' }}>
                      <div style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 9, background: isOpen ? 'var(--c-primary)' : 'var(--c-primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .3s ease', boxShadow: isOpen ? '0 4px 14px rgba(46,107,94,.3)' : 'none' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isOpen ? 'white' : 'var(--c-primary)'} strokeWidth="1.8">
                          <path d={a.icon}/>
                        </svg>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '.9rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: isOpen ? 0 : '.2rem' }}>{a.name}</div>
                        {!isOpen && <div style={{ fontSize: '.74rem', color: 'var(--c-text-muted)', lineHeight: 1.5 }}>{a.short}</div>}
                      </div>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, border: `1px solid ${isOpen ? 'rgba(74,140,124,.4)' : 'var(--c-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .3s ease', background: isOpen ? 'rgba(74,140,124,.1)' : 'transparent' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isOpen ? 'var(--c-primary)' : 'var(--c-text-muted)'} strokeWidth="2.5" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .3s ease' }}>
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </div>
                    </div>

                    {/* expanded content */}
                    {isOpen && (
                      <div style={{ padding: '0 1.35rem 1.35rem', animation: 'expandDown .3s ease' }}>
                        <div style={{ height: 1, background: 'rgba(74,140,124,.12)', marginBottom: '1rem' }} />
                        <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.85, margin: '0 0 1rem' }}>
                          {a.detail}
                        </p>

                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* LEFT — quote */}
          <div style={{ position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all .7s cubic-bezier(.16,1,.3,1) .3s' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: 20, background: 'radial-gradient(ellipse at 60% 40%, rgba(46,107,94,.18) 0%, transparent 70%)', animation: 'pulseGlow 5s ease-in-out infinite', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', borderRadius: 20, background: '#07100d', border: '1px solid rgba(46,107,94,.18)', padding: '2.5rem', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: '15%', left: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(74,140,124,.6), transparent)' }} />

              <div style={{ fontSize: '4rem', lineHeight: .7, fontFamily: 'Georgia, serif', color: 'rgba(74,140,124,.2)', marginBottom: '1.5rem', userSelect: 'none' as const }}>"</div>

              <div style={{ fontSize: 'clamp(1.15rem,2vw,1.45rem)', fontWeight: 800, color: '#fff', lineHeight: 1.5, letterSpacing: '-.02em', marginBottom: '.75rem' }}>
                در دنیایی که همه فریاد می‌زنند؛
              </div>

              <div style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', fontWeight: 700, color: '#4A8C7C', lineHeight: 1.55, letterSpacing: '-.01em', marginBottom: '1.75rem' }}>
                تنها صدایی ماندگار است که از خرد می‌آید.
                <span style={{ animation: 'blink 1.2s step-end infinite', marginRight: '.05em' }}>|</span>
              </div>

              <div style={{ height: 1, marginBottom: '1.5rem', background: 'rgba(74,140,124,.15)' }} />

              <p style={{ fontSize: '.88rem', lineHeight: 2, color: 'rgba(255,255,255,.65)', margin: '0 0 2rem' }}>
                برندینگ یک فرآیند استراتژیک است که با درک هویت، ارزش‌ها
                و تمایز کسب‌وکار، مسیر ماندگاری را هموار می‌کند.
              </p>


            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
