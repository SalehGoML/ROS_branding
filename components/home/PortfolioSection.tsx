import ScrollReveal from '../ui/ScrollReveal'
import Link from 'next/link'

const projects = [
  {
    title: 'راهکار صنعت',
    category: 'اینترنت اشیا (IoT)',
    tags: ['هویت بصری', 'طراحی لوگو', 'ست اداری', 'بروشور'],
    result: 'هویت بصری یکپارچه برای ورود به بازار B2B',
    href: '/portfolio/rahkar-sanat',
    img: '/portfolio/rahkar-sanat/cover.jpg',
    accent: '#003d71',
  },
]

export default function PortfolioSection() {
  return (
    <ScrollReveal>
      <section style={{
      background: '#1A1916',
      padding: '5rem 0',
      borderTop: '1px solid rgba(255,255,255,.06)',
    }}>
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
              color: 'var(--c-primary-lt)', fontSize: '.72rem',
              fontWeight: 600, letterSpacing: '.12em',
              textTransform: 'uppercase' as const, marginBottom: '1rem',
            }}>
              <span style={{ width: 16, height: 1, background: 'var(--c-primary)', display: 'block' }} />
              نمونه‌کارها
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              fontWeight: 700, color: 'white',
              letterSpacing: '-.02em',
            }}>
              برندهایی که با هم ساختیم
            </h2>
          </div>
          <Link href="/portfolio" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            fontSize: '.85rem', fontWeight: 500,
            color: 'var(--c-primary-lt)',
            border: '1.5px solid var(--c-primary)',
            borderRadius: 8, padding: '.5rem 1.1rem',
          }}>همه پروژه‌ها ←</Link>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {/* Project card */}
          <Link href="/portfolio/rahkar-sanat" className="card-hover" style={{
            display: 'block', borderRadius: 16,
            overflow: 'hidden',
            background: 'white',
            border: '1px solid rgba(255,255,255,.06)',
            textDecoration: 'none',
          }}>
            <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
              <img src="/portfolio/rahkar-sanat/cover.jpg" alt="راهکار صنعت"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,.6), transparent)',
              }} />
              <div style={{
                position: 'absolute', bottom: '1rem', right: '1rem',
                display: 'flex', flexWrap: 'wrap', gap: '.4rem',
              }}>
                {['هویت بصری', 'طراحی لوگو', 'ست اداری', 'بروشور'].map(tag => (
                  <span key={tag} style={{
                    fontSize: '.7rem', padding: '.2rem .6rem',
                    borderRadius: 100, color: 'white', fontWeight: 500,
                    background: 'rgba(0,61,113,.4)',
                    border: '1px solid rgba(0,61,113,.5)',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '.75rem', color: '#003d71', marginBottom: '.4rem' }}>اینترنت اشیا (IoT)</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1916', marginBottom: '.5rem' }}>راهکار صنعت</div>
              <div style={{ fontSize: '.82rem', color: '#6B6860', lineHeight: 1.6 }}>هویت بصری یکپارچه برای ورود به بازار B2B</div>
            </div>
          </Link>

          {/* Placeholder */}
          <Link href="/portfolio" style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            borderRadius: 16, minHeight: 280,
            border: '1.5px dashed rgba(255,255,255,.1)',
            background: 'rgba(255,255,255,.02)',
            gap: '.75rem', textDecoration: 'none',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', color: 'rgba(255,255,255,.3)',
            }}>+</div>
            <span style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.3)' }}>
              پروژه‌های بیشتر به‌زودی اضافه می‌شوند
            </span>
          </Link>
        </div>

      </div>
    </section>
    </ScrollReveal>
  )
}
