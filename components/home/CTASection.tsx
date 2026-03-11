import ScrollReveal from '../ui/ScrollReveal'
import Link from 'next/link'

export default function CTASection() {
  return (
    <ScrollReveal>
      <section style={{
      background: 'var(--c-bg)',
      padding: '5rem 0',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1F4D43 0%, #2E6B5E 50%, #1F4D43 100%)',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
        }}>
          {/* grid overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          {/* glow */}
          <div style={{
            position: 'absolute', top: '-40%', left: '50%',
            transform: 'translateX(-50%)',
            width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(74,140,124,.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
            
            {/* Text */}
            <div style={{ flex: '1 1 300px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                fontSize: '.7rem', fontWeight: 600, letterSpacing: '.15em',
                color: 'rgba(255,255,255,.5)', marginBottom: '1rem',
                textTransform: 'uppercase' as const,
                border: '1px solid rgba(255,255,255,.15)',
                padding: '.3rem .8rem', borderRadius: 100,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,.6)', display: 'block' }} />
                شروع همکاری
              </div>
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: 'rgba(255,255,255,.92)',
                lineHeight: 1.85, fontWeight: 500,
                maxWidth: 420,
              }}>
                با یک جلسه مشاوره رایگان شروع کنید.
                <br />
                <span style={{ color: 'rgba(255,255,255,.6)', fontSize: '.9em' }}>
                  تیم ROS آماده شنیدن چالش‌های برند شماست.
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', flexShrink: 0 }}>
              <Link href="/contact/request-consultation" className="btn-lift" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem',
                padding: '.85rem 2rem',
                background: 'white', color: '#1F4D43',
                borderRadius: 10, fontSize: '.88rem', fontWeight: 700,
                boxShadow: '0 4px 20px rgba(0,0,0,.2)',
                whiteSpace: 'nowrap' as const,
              }}>
                مشاوره رایگان ←
              </Link>
              <Link href="/services" className="btn-lift" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '.8rem 2rem',
                background: 'rgba(255,255,255,.08)',
                border: '1px solid rgba(255,255,255,.2)',
                color: 'rgba(255,255,255,.85)',
                borderRadius: 10, fontSize: '.88rem', fontWeight: 500,
                whiteSpace: 'nowrap' as const,
              }}>
                مشاهده خدمات ما
              </Link>
            </div>

          </div>

          {/* دکوراتیو */}
          <div style={{
            position: 'absolute', bottom: '-20px', right: '-20px',
            width: 180, height: 180,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,.06)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-50px', right: '-50px',
            width: 280, height: 280,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,.04)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>
    </section>
    </ScrollReveal>
  )
}
