import Link from 'next/link'

const categories = [
  {
    slug: 'brand-strategy',
    titleFa: 'استراتژی برند',
    titleEn: 'Brand Strategy',
    desc: 'تعریف جایگاه، معنا و مسیر رشد بلندمدت برند شما.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    services: [
      'طراحی مسیر برند',
      'ساختار برند و پورتفولیو',
      'تحلیل عملکرد برند',
      'یکپارچه‌سازی برند در ادغام‌ها',
      'چارچوب و حاکمیت برند',
      'استراتژی پایداری برند',
      'اصالت و اخلاق برند',
      'برند فراگیر و در دسترس',
    ],
  },
  {
    slug: 'brand-design',
    titleFa: 'طراحی برند',
    titleEn: 'Brand Design',
    desc: 'خلق هویت بصری و تجربه‌ای که برند را در ذهن‌ها ماندگار می‌کند.',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    services: [
      'نام‌گذاری و هویت برند',
      'طراحی تجربه برند',
      'نوآوری دیجیتال برند',
      'تحلیل هوشمند برند با ROS AI',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ padding: '6rem 2rem 4rem', background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            fontSize: '.72rem', fontWeight: 500,
            letterSpacing: '.12em', textTransform: 'uppercase',
            color: 'var(--c-primary)', marginBottom: '1.25rem',
          }}>
            <span style={{ width: 18, height: 2, background: 'var(--c-primary)', borderRadius: 2, display: 'block' }} />
            خدمات ROS
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-.03em', marginBottom: '1rem',
          }}>
            راهکارهای تخصصی برندینگ
          </h1>
          <p style={{
            fontSize: '1.05rem', color: 'var(--c-text-muted)',
            maxWidth: 540, lineHeight: 1.8,
          }}>
            از استراتژی تا اجرا — خدمات یکپارچه برای ساخت، تقویت
            و پایش برندهایی که در بازار ایران ماندگار می‌مانند.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {categories.map((cat) => (
            <div key={cat.slug} style={{
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              borderRadius: 'var(--r-xl)',
              overflow: 'hidden',
            }}>
              {/* Category header */}
              <div style={{
                padding: '2.5rem 2.5rem 2rem',
                borderBottom: '1px solid var(--c-border)',
                display: 'flex', alignItems: 'flex-start',
                justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 52, height: 52,
                    background: 'var(--c-primary-bg)',
                    borderRadius: 'var(--r-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24"
                      fill="none" stroke="var(--c-primary)" strokeWidth="1.8">
                      <path d={cat.icon}/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '.72rem', color: 'var(--c-text-light)', letterSpacing: '.06em', marginBottom: '.2rem' }}>
                      {cat.titleEn}
                    </div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.2 }}>
                      {cat.titleFa}
                    </h2>
                  </div>
                </div>
                <Link href={`/services/${cat.slug}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                  padding: '.6rem 1.4rem',
                  background: 'var(--c-primary)', color: 'white',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '.85rem', fontWeight: 600,
                }}>
                  مشاهده همه ←
                </Link>
              </div>

              {/* Services grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '0',
              }}>
                {cat.services.map((svc, i) => (
                  <div key={svc} style={{
                    padding: '1.5rem 2rem',
                    borderBottom: i < cat.services.length - 1 ? '1px solid var(--c-border)' : 'none',
                    borderLeft: i % 2 === 0 ? 'none' : '1px solid var(--c-border)',
                    display: 'flex', alignItems: 'center', gap: '.75rem',
                  }}>
                    <div style={{
                      width: 6, height: 6,
                      background: 'var(--c-primary)',
                      borderRadius: '50%', flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '.9rem', color: 'var(--c-text)' }}>
                      {svc}
                    </span>
                  </div>
                ))}
              </div>
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
          مطمئن نیستید از کجا شروع کنید؟
        </h3>
        <p style={{ color: 'var(--c-text-muted)', marginBottom: '2rem' }}>
          در یک جلسه رایگان وضعیت برندتان را بررسی می‌کنیم.
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