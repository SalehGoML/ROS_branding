import Link from 'next/link'

const projects = [
  {
    slug: 'rahkar-sanat',
    name: 'راهکار صنعت',
    field: 'اینترنت اشیا (IoT)',
    tags: ['هویت بصری', 'طراحی لوگو', 'ست اداری', 'بروشور'],
    result: 'هویت بصری یکپارچه برای ورود به بازار B2B',
    cover: '/portfolio/rahkar-sanat/cover.jpg',
    accent: '#003d71',
    accentLight: '#EEF2F8',
  },
]

export default function PortfolioPage() {
  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        padding: '6rem 2rem 4rem',
        background: 'var(--c-surface)',
        borderBottom: '1px solid var(--c-border)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            fontSize: '.72rem', fontWeight: 500,
            letterSpacing: '.12em', textTransform: 'uppercase',
            color: 'var(--c-primary)', marginBottom: '1.25rem',
          }}>
            <span style={{ width: 18, height: 2, background: 'var(--c-primary)', borderRadius: 2, display: 'block' }} />
            نمونه‌کارها
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-.03em', marginBottom: '1rem',
          }}>
            برندهایی که با هم ساختیم
          </h1>
          <p style={{
            fontSize: '1.05rem', color: 'var(--c-text-muted)',
            maxWidth: 540, lineHeight: 1.8,
          }}>
            هر پروژه یک داستان متفاوت — از تحلیل تا اجرای کامل هویت برند.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1.25rem',
        }}>
          {projects.map((p) => (
            <Link href={`/portfolio/${p.slug}`} key={p.slug} style={{
              display: 'block', background: 'var(--c-surface)',
              borderRadius: 'var(--r-lg)', overflow: 'hidden',
              textDecoration: 'none',
              border: '1px solid var(--c-border)',
            }}>
              <div style={{ height: 260, overflow: 'hidden' }}>
                <img
                  src={p.cover} alt={p.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '.72rem', color: p.accent, fontWeight: 500, marginBottom: '.4rem', letterSpacing: '.04em' }}>
                  {p.field}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '.75rem' }}>
                  {p.name}
                </div>
                <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '.7rem', fontWeight: 500,
                      padding: '.2rem .65rem',
                      background: p.accentLight, color: p.accent,
                      borderRadius: 100,
                    }}>{tag}</span>
                  ))}
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '.5rem',
                  padding: '.65rem .85rem',
                  background: p.accentLight, borderRadius: 'var(--r-sm)',
                  fontSize: '.78rem', fontWeight: 500, color: p.accent,
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                    <polyline points="16 7 22 7 22 13"/>
                  </svg>
                  {p.result}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}
