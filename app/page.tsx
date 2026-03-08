import HeroForm from '@/components/home/HeroForm'
import MarqueeSection from '@/components/home/MarqueeSection'
import AdvantageSection from '@/components/home/AdvantageSection'
import ServicesSection from '@/components/home/ServicesSection'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh',
        paddingTop: 68,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--c-bg)',
      }}>

        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(var(--c-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--c-border) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: .35,
          pointerEvents: 'none',
        }} />

        {/* Fade bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 200,
          background: 'linear-gradient(to bottom, transparent, var(--c-bg))',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: 1280, margin: '0 auto',
          padding: '5rem 2rem 4rem',
        }}>

          {/* Tag */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.6rem',
            padding: '.4rem 1rem',
            background: 'var(--c-primary-bg)',
            border: '1px solid rgba(46,107,94,.2)',
            borderRadius: 100,
            fontSize: '.78rem', fontWeight: 500,
            color: 'var(--c-primary)',
            marginBottom: '2rem',
          }}>
            <span style={{
              width: 7, height: 7,
              background: 'var(--c-primary)',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            آژانس هوشمند برندینگ | تهران
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: 700,
            lineHeight: 1.18,
            letterSpacing: '-.03em',
            maxWidth: 820,
            marginBottom: '1.5rem',
          }}>
            مدیریت یکپارچگی برند<br />
            با{' '}
            <span style={{ color: 'var(--c-primary)' }}>تفکر استراتژیک</span>
            <br />
            و تحلیل هوشمند
          </h1>

          {/* Subline */}
          <p style={{
            fontSize: '1.15rem', fontWeight: 300,
            color: 'var(--c-text-muted)',
            maxWidth: 520, lineHeight: 1.75,
            marginBottom: '3rem',
          }}>
            رس | آژانس هوشمند برندینگ — ترکیب دقیق تحلیل داده
            و درک فرهنگی بازار ایران برای ساخت برندهایی که ماندگار می‌مانند.
          </p>

          {/* Form */}
          <HeroForm />

          {/* Trust badges */}
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: '2rem', marginTop: '3rem', flexWrap: 'wrap',
          }}>
            {[
              { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',          label: 'تحلیل داده‌محور' },
              { icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20',      label: 'درک بازار ایران' },
              { icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3', label: 'خروجی‌های اجرایی' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: '.5rem',
                fontSize: '.8rem', color: 'var(--c-text-muted)',
              }}>
                <div style={{
                  width: 28, height: 28,
                  background: 'var(--c-primary-bg)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="var(--c-primary)" strokeWidth="2">
                    <path d={item.icon}/>
                  </svg>
                </div>
                {item.label}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Marquee ── */}
      <MarqueeSection />

      {/* ── Advantage ── */}
      <AdvantageSection />
      <ServicesSection />
    </>
    
  )
}