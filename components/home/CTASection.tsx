import Link from 'next/link'

export default function CTASection() {
  return (
    <section style={{ background: 'var(--c-bg)', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        <div style={{
          background: 'var(--c-primary)',
          borderRadius: 'var(--r-xl)',
          padding: '5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}>

          {/* Background texture */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
          }} />

          {/* Glow */}
          <div style={{
            position: 'absolute',
            top: '-40%', left: '50%',
            transform: 'translateX(-50%)',
            width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(255,255,255,.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Tag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              padding: '.4rem 1rem',
              background: 'rgba(255,255,255,.12)',
              borderRadius: 100,
              fontSize: '.78rem', fontWeight: 500,
              color: 'rgba(255,255,255,.85)',
              marginBottom: '2rem',
            }}>
              <span style={{
                width: 6, height: 6,
                background: 'white',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              مشاوره رایگان — بدون تعهد
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700, lineHeight: 1.2,
              letterSpacing: '-.03em',
              color: 'white',
              marginBottom: '1.25rem',
            }}>
              برندت را دوباره تعریف کن<br />با ROS
            </h2>

            <p style={{
              fontSize: '1.1rem', fontWeight: 300,
              color: 'rgba(255,255,255,.75)',
              maxWidth: 480, margin: '0 auto 3rem',
              lineHeight: 1.75,
            }}>
              یک جلسه مشاوره رایگان — وضعیت برندت را بررسی می‌کنیم
              و مسیر رشد را با هم ترسیم می‌کنیم.
            </p>

            {/* Buttons */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: '1rem',
              flexWrap: 'wrap',
            }}>
              <Link href="/contact/request-consultation" style={{
                display: 'inline-flex', alignItems: 'center', gap: '.6rem',
                padding: '.9rem 2.2rem',
                background: 'white',
                color: 'var(--c-primary)',
                borderRadius: 'var(--r-sm)',
                fontSize: '.95rem', fontWeight: 700,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/>
                </svg>
                رزرو جلسه مشاوره رایگان
              </Link>

              <Link href="/ai" style={{
                display: 'inline-flex', alignItems: 'center', gap: '.6rem',
                padding: '.9rem 2.2rem',
                background: 'transparent',
                color: 'white',
                border: '1.5px solid rgba(255,255,255,.35)',
                borderRadius: 'var(--r-sm)',
                fontSize: '.95rem', fontWeight: 500,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                تحلیل رایگان با ROS AI
              </Link>
            </div>

            {/* Trust note */}
            <p style={{
              fontSize: '.75rem',
              color: 'rgba(255,255,255,.45)',
              marginTop: '2rem',
            }}>
              بدون نیاز به ثبت‌نام — پاسخ در کمتر از ۲۴ ساعت
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}