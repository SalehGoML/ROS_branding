import Link from 'next/link'

const services = [
  {
    slug: 'naming-identity',
    titleFa: 'نام‌گذاری و هویت برند',
    titleEn: 'Naming & Identity Design',
    desc: 'خلق نامی ماندگار، زبان برند و هویتی بصری که برند را در ذهن‌ها حک می‌کند.',
    deliverables: ['نام برند و دامنه', 'لوگو و سیستم بصری', 'پالت رنگ و تایپوگرافی', 'برندبوک'],
  },
  {
    slug: 'brand-experience',
    titleFa: 'طراحی تجربه برند',
    titleEn: 'Customer & Brand Experience Design',
    desc: 'مهندسی نقاط تماس برند برای ایجاد تجربه‌ای منسجم، انسانی و به‌یادماندنی.',
    deliverables: ['نقشه سفر مشتری', 'طراحی نقاط تماس', 'راهنمای تجربه برند'],
  },
  {
    slug: 'digital-innovation',
    titleFa: 'نوآوری دیجیتال برند',
    titleEn: 'Digital Innovation & Brand Ecosystems',
    desc: 'خلق اکوسیستم‌های دیجیتال تعاملی برای گسترش تجربه برند در دنیای متصل امروز.',
    deliverables: ['استراتژی دیجیتال برند', 'طراحی UI/UX برند', 'اکوسیستم دیجیتال'],
  },
  {
    slug: 'ai-brand-analysis',
    titleFa: 'تحلیل هوشمند برند با ROS AI',
    titleEn: 'AI-powered Brand Analysis',
    desc: 'بررسی وضعیت برند با استفاده از داده‌های واقعی و الگوریتم‌های تحلیلی اختصاصی ROS.',
    deliverables: ['گزارش تحلیل AI', 'داشبورد برند', 'توصیه‌های داده‌محور'],
    highlight: true,
  },
]

export default function BrandDesignPage() {
  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        padding: '6rem 2rem 4rem',
        background: '#1A1916',
        color: 'white',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <Link href="/services" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            fontSize: '.82rem', color: 'rgba(255,255,255,.6)', marginBottom: '2rem',
          }}>
            ← بازگشت به خدمات
          </Link>
          <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.4)', letterSpacing: '.1em', marginBottom: '.75rem' }}>
            Brand Design Services
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-.03em', marginBottom: '1rem',
          }}>
            خدمات طراحی برند
          </h1>
          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,.7)',
            maxWidth: 540, lineHeight: 1.8,
          }}>
            از نام‌گذاری تا اکوسیستم دیجیتال — خلق هویتی که برند شما را
            در ذهن مخاطب ماندگار و در بازار متمایز می‌کند.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {services.map((svc, i) => (
            <div key={svc.slug} style={{
              background: svc.highlight ? 'var(--c-primary)' : 'var(--c-surface)',
              border: `1px solid ${svc.highlight ? 'var(--c-primary)' : 'var(--c-border)'}`,
              borderRadius: 'var(--r-lg)',
              padding: '2rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '2rem',
              alignItems: 'start',
            }}>
              <div>
                {/* Number + title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem' }}>
                  <span style={{
                    fontSize: '.72rem', fontWeight: 700,
                    color: svc.highlight ? 'white' : 'var(--c-primary)',
                    background: svc.highlight ? 'rgba(255,255,255,.15)' : 'var(--c-primary-bg)',
                    padding: '.2rem .65rem',
                    borderRadius: 100,
                    letterSpacing: '.04em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div style={{
                      fontSize: '.7rem', letterSpacing: '.04em',
                      color: svc.highlight ? 'rgba(255,255,255,.55)' : 'var(--c-text-light)',
                    }}>
                      {svc.titleEn}
                    </div>
                    <h3 style={{
                      fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.3,
                      color: svc.highlight ? 'white' : 'var(--c-text)',
                    }}>
                      {svc.titleFa}
                    </h3>
                  </div>
                </div>

                {/* Desc */}
                <p style={{
                  fontSize: '.9rem', lineHeight: 1.75,
                  marginBottom: '1.25rem', maxWidth: 620,
                  color: svc.highlight ? 'rgba(255,255,255,.75)' : 'var(--c-text-muted)',
                }}>
                  {svc.desc}
                </p>

                {/* Deliverables */}
                <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                  {svc.deliverables.map(d => (
                    <span key={d} style={{
                      fontSize: '.72rem', fontWeight: 500,
                      padding: '.25rem .75rem',
                      background: svc.highlight ? 'rgba(255,255,255,.12)' : 'var(--c-surface-2)',
                      color: svc.highlight ? 'rgba(255,255,255,.85)' : 'var(--c-text-muted)',
                      border: `1px solid ${svc.highlight ? 'rgba(255,255,255,.15)' : 'var(--c-border)'}`,
                      borderRadius: 100,
                    }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link href="/contact/request-consultation" style={{
                display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                padding: '.6rem 1.2rem',
                border: `1.5px solid ${svc.highlight ? 'rgba(255,255,255,.3)' : 'var(--c-border)'}`,
                borderRadius: 'var(--r-sm)',
                fontSize: '.82rem', fontWeight: 500,
                color: svc.highlight ? 'white' : 'var(--c-text-muted)',
                whiteSpace: 'nowrap',
              }}>
                مشاوره ←
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '4rem 2rem',
        background: 'var(--c-surface)',
        borderTop: '1px solid var(--c-border)',
        textAlign: 'center',
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '.75rem' }}>
          آماده شروع هستید؟
        </h3>
        <p style={{ color: 'var(--c-text-muted)', marginBottom: '2rem' }}>
          یک جلسه رایگان — وضعیت برندتان را با هم بررسی می‌کنیم.
        </p>
        <Link href="/contact/request-consultation" style={{
          display: 'inline-flex', alignItems: 'center', gap: '.6rem',
          padding: '.85rem 2rem',
          background: 'var(--c-primary)', color: 'white',
          borderRadius: 'var(--r-sm)',
          fontSize: '.95rem', fontWeight: 600,
        }}>
          مشاوره رایگان ←
        </Link>
      </section>

    </main>
  )
}