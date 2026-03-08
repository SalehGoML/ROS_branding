import Link from 'next/link'

const services = [
  {
    slug: 'brand-roadmap',
    titleFa: 'طراحی مسیر برند',
    titleEn: 'Brand Strategy',
    desc: 'تدوین نقشه راه برند برای ساخت جایگاه متمایز و هم‌راستایی با اهداف کسب‌وکار.',
    deliverables: ['سند استراتژی برند', 'نقشه راه ۱۲ ماهه', 'KPIهای برند'],
  },
  {
    slug: 'brand-architecture',
    titleFa: 'ساختار برند و پورتفولیو',
    titleEn: 'Brand Architecture & Portfolio',
    desc: 'سامان‌دهی برندها، زیربرندها و محصولات برای انسجام درونی و درک بهتر بازار.',
    deliverables: ['نمودار معماری برند', 'دستورالعمل روابط برند', 'راهنمای نام‌گذاری'],
  },
  {
    slug: 'brand-performance',
    titleFa: 'تحلیل عملکرد برند',
    titleEn: 'Brand Performance',
    desc: 'ارزیابی تأثیر برند بر نتایج واقعی: از فروش تا وفاداری مشتری و ارزش ذهنی.',
    deliverables: ['گزارش سلامت برند', 'داشبورد عملکرد', 'توصیه‌های بهبود'],
  },
  {
    slug: 'brand-ma',
    titleFa: 'یکپارچه‌سازی برند در ادغام‌ها',
    titleEn: 'Brand Strategy in M&A',
    desc: 'مدیریت استراتژیک برندها هنگام ادغام یا خرید، برای حفظ معنا و جلوگیری از ابهام.',
    deliverables: ['ارزیابی برند', 'استراتژی ادغام', 'نقشه راه انتقال'],
  },
  {
    slug: 'brand-governance',
    titleFa: 'چارچوب و حاکمیت برند',
    titleEn: 'Brand Governance',
    desc: 'تعریف دستورالعمل‌ها و نقش‌ها برای اجرای هماهنگ و پایدار برند در سازمان.',
    deliverables: ['برندبوک حاکمیتی', 'ماتریس مسئولیت‌ها', 'فرایند تایید برند'],
  },
  {
    slug: 'brand-sustainability',
    titleFa: 'استراتژی پایداری برند',
    titleEn: 'Brand Sustainability Strategy',
    desc: 'کمک به برندها برای ایفای نقش مؤثر و صادقانه در مسئولیت‌های زیست‌محیطی و اجتماعی.',
    deliverables: ['سند ESG برند', 'پیام‌های پایداری', 'راهنمای گزارش‌دهی'],
  },
  {
    slug: 'brand-ethics',
    titleFa: 'اصالت و اخلاق برند',
    titleEn: 'Brand Ethics & Integrity',
    desc: 'تضمین صداقت در وعده‌ها و رفتار برند؛ از درون تا ارتباط با مخاطب.',
    deliverables: ['منشور اخلاقی برند', 'راهنمای ارتباطات صادقانه', 'ارزیابی تناقضات برند'],
  },
  {
    slug: 'inclusive-branding',
    titleFa: 'برند فراگیر و در دسترس',
    titleEn: 'Inclusive Branding',
    desc: 'طراحی برندهایی برای تمام افراد؛ بدون استثناء، تبعیض یا محدودیت.',
    deliverables: ['ممیزی فراگیری برند', 'راهنمای زبان فراگیر', 'چک‌لیست دسترس‌پذیری'],
  },
]

export default function BrandStrategyPage() {
  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        padding: '6rem 2rem 4rem',
        background: 'var(--c-primary)',
        color: 'white',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
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
          <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.1em', marginBottom: '.75rem' }}>
            Brand Strategy Services
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-.03em', marginBottom: '1rem',
          }}>
            خدمات استراتژی برند
          </h1>
          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,.75)',
            maxWidth: 540, lineHeight: 1.8,
          }}>
            تعریف جایگاه، معنا و مسیر رشد بلندمدت برند شما —
            با تکیه بر داده، تجربه و درک عمیق بازار ایران.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {services.map((svc, i) => (
            <div key={svc.slug} style={{
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
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
                    color: 'var(--c-primary)',
                    background: 'var(--c-primary-bg)',
                    padding: '.2rem .65rem',
                    borderRadius: 100,
                    letterSpacing: '.04em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div style={{ fontSize: '.7rem', color: 'var(--c-text-light)', letterSpacing: '.04em' }}>
                      {svc.titleEn}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.3 }}>
                      {svc.titleFa}
                    </h3>
                  </div>
                </div>

                {/* Desc */}
                <p style={{
                  fontSize: '.9rem', color: 'var(--c-text-muted)',
                  lineHeight: 1.75, marginBottom: '1.25rem', maxWidth: 620,
                }}>
                  {svc.desc}
                </p>

                {/* Deliverables */}
                <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                  {svc.deliverables.map(d => (
                    <span key={d} style={{
                      fontSize: '.72rem', fontWeight: 500,
                      padding: '.25rem .75rem',
                      background: 'var(--c-surface-2)',
                      color: 'var(--c-text-muted)',
                      border: '1px solid var(--c-border)',
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
                border: '1.5px solid var(--c-border)',
                borderRadius: 'var(--r-sm)',
                fontSize: '.82rem', fontWeight: 500,
                color: 'var(--c-text-muted)',
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