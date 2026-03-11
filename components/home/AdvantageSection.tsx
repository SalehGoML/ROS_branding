'use client'
import { useState } from 'react'

const advantages = [
  {
    icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z',
    name: 'تحلیل داده‌محور، نه شهودی',
    desc: 'تصمیم‌ها بر پایه داده‌های واقعی، نه حدس و احساس.',
  },
  {
    icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
    name: 'درک دقیق بستر فرهنگی ایران',
    desc: 'استراتژی‌هایی که با واقعیت بازار بومی همخوانی دارند.',
  },
  {
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    name: 'خروجی‌های اجرایی، نه صرفاً تئوریک',
    desc: 'سند، گزارش و راهکاری که واقعاً قابل اجرا باشد.',
  },
]

const words = [
  'در', 'دنیایی', 'که', 'همه', 'فریاد', 'می‌زنند؛', 'تنها', 'صدایی',
  'ماندگار', 'است', 'که', 'از', 'خرد', 'می‌آید.', 'پیش', 'از',
  'ساخت', 'برندی', 'ماندگار،', 'شناخت', 'دقیق', 'جایگاه', 'فعلی',
  'کسب‌وکار', 'ضروری', 'است.', 'برندینگ', 'یک', 'فرآیند', 'استراتژیک',
  'است', 'که', 'با', 'درک', 'هویت،', 'ارزش‌ها', 'و', 'تمایز',
  'کسب‌وکار،', 'مسیر', 'ماندگاری', 'را', 'هموار', 'می‌کند.',
]

export default function AdvantageSection() {
  const [hovered, setHovered] = useState(false)
  const [cardHovered, setCardHovered] = useState<number | null>(null)

  return (
    <section style={{
      background: 'var(--c-surface)',
      padding: '5rem 0',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem', alignItems: 'center',
        }}>

          {/* Right — text */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              color: 'var(--c-primary)', fontSize: '.72rem', fontWeight: 600,
              letterSpacing: '.12em', textTransform: 'uppercase' as const,
              marginBottom: '1.25rem',
            }}>
              <span style={{ width: 16, height: 1, background: 'var(--c-primary)', display: 'block' }} />
              چرا ROS
            </div>

            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 700, lineHeight: 1.3,
              letterSpacing: '-.02em', marginBottom: '2rem',
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #4A8C7C, #2E6B5E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>ROS</span>
              {' '}بر پایه داده تصمیم می‌گیرد،
              <br />
              <span style={{ fontSize: '.85em', fontWeight: 600, color: 'var(--c-text-muted)' }}>
                نه صرفاً بر اساس سلیقه
              </span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {advantages.map((a, i) => (
                <div
                  key={a.name}
                  onMouseEnter={() => setCardHovered(i)}
                  onMouseLeave={() => setCardHovered(null)}
                  style={{
                    display: 'flex', gap: '1rem', padding: '1rem',
                    borderRadius: 12,
                    background: 'var(--c-surface-2)',
                    border: `1px solid ${cardHovered === i ? 'rgba(46,107,94,.35)' : 'var(--c-border)'}`,
                    transform: cardHovered === i ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: cardHovered === i ? '0 8px 32px rgba(46,107,94,.15)' : 'none',
                    transition: 'all .25s ease',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 8, flexShrink: 0,
                    background: cardHovered === i ? 'var(--c-primary)' : 'var(--c-primary-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background .25s ease',
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke={cardHovered === i ? 'white' : 'var(--c-primary)'} strokeWidth="1.8">
                      <path d={a.icon}/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '.88rem', fontWeight: 700, marginBottom: '.3rem' }}>{a.name}</div>
                    <div style={{ fontSize: '.78rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left — animated quote */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              position: 'relative',
              padding: '2.5rem',
              borderRadius: 20,
              background: hovered
                ? 'linear-gradient(135deg, #0f1f1c 0%, #162520 100%)'
                : 'var(--c-surface-2)',
              border: `1px solid ${hovered ? 'rgba(74,140,124,.3)' : 'var(--c-border)'}`,
              transition: 'all .5s ease',
              cursor: 'default',
              overflow: 'hidden',
              minHeight: 280,
            }}
          >
            {/* animated glow orbs */}
            <div style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: 200, height: 200,
              background: 'radial-gradient(circle, rgba(46,107,94,.4) 0%, transparent 70%)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity .6s ease',
              pointerEvents: 'none',
              filter: 'blur(30px)',
            }} />
            <div style={{
              position: 'absolute', bottom: '-40px', left: '-40px',
              width: 160, height: 160,
              background: 'radial-gradient(circle, rgba(74,140,124,.25) 0%, transparent 70%)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity .6s ease .1s',
              pointerEvents: 'none',
              filter: 'blur(25px)',
            }} />

            {/* quote icon */}
            <div style={{
              fontSize: '3.5rem', lineHeight: .8,
              color: hovered ? 'rgba(74,140,124,.4)' : 'rgba(255,255,255,.06)',
              fontFamily: 'Georgia, serif',
              marginBottom: '1.25rem',
              transition: 'color .4s ease',
              userSelect: 'none' as const,
            }}>"</div>

            {/* word-by-word colored text */}
            <p style={{
              fontSize: 'clamp(.88rem, 1.4vw, 1rem)',
              lineHeight: 2.1,
              position: 'relative', zIndex: 1,
              letterSpacing: '.01em',
            }}>
              {words.map((word, i) => (
                <span
                  key={i}
                  style={{
                    color: hovered
                      ? `rgba(255,255,255,${0.45 + (i / words.length) * 0.55})`
                      : 'var(--c-text-muted)',
                    transition: `color ${0.3 + i * 0.015}s ease`,
                    display: 'inline',
                  }}
                >
                  {word}{' '}
                </span>
              ))}
            </p>

            {/* bottom separator line */}
            <div style={{
              marginTop: '1.5rem',
              height: 1,
              background: hovered
                ? 'linear-gradient(to left, transparent, rgba(74,140,124,.5), transparent)'
                : 'var(--c-border)',
              transition: 'background .5s ease',
            }} />
          </div>

        </div>
      </div>
    </section>
  )
}
