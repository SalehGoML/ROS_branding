import ScrollReveal from '../ui/ScrollReveal'
import Link from 'next/link'

const steps = [
  { num: '۰۱', title: 'بررسی وضعیت برند', desc: 'تحلیل جایگاه فعلی، رقبا، مخاطبان و شکاف‌های هویتی برند شما.', icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10', highlight: false },
  { num: '۰۲', title: 'استراتژی و جایگاه‌یابی', desc: 'تعریف ارزش‌های اصلی، شخصیت برند، لحن ارتباطی و جایگاه رقابتی.', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', highlight: false },
  { num: '۰۳', title: 'هویت بصری', desc: 'طراحی لوگو، پالت رنگ، تایپوگرافی و سیستم بصری یکپارچه.', icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z', highlight: false },
  { num: '۰۴', title: 'مستندسازی و تحویل', desc: 'تولید برندبوک کامل، راهنمای کاربرد و آموزش تیم داخلی.', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6', highlight: false },
  { num: '۰۵', title: 'بهینه‌سازی مداوم', desc: 'گزارش‌های دوره‌ای و پیشنهادهای بهبود بر اساس داده‌های واقعی.', icon: 'M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15', highlight: false },
  { num: '۰۶', title: 'پایش با ROS AI', desc: 'رصد مستمر انسجام برند در تمام نقاط تماس با هوش مصنوعی.', icon: 'M22 12h-4l-3 9L9 3l-3 9H2', highlight: true },
]

export default function ProcessSection() {
  return (
    <ScrollReveal>
      <section style={{
      background: 'var(--c-surface)',
      padding: '5rem 0',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.25rem' }}>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            color: 'var(--c-primary)', fontSize: '.72rem',
            fontWeight: 600, letterSpacing: '.12em',
            textTransform: 'uppercase' as const, marginBottom: '1rem',
          }}>
            <span style={{ width: 16, height: 1, background: 'var(--c-primary)', display: 'block' }} />
            فرایند کار
            <span style={{ width: 16, height: 1, background: 'var(--c-primary)', display: 'block' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
            fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.75rem',
          }}>فرایند برندینگ آژانس ROS</h2>
          <p style={{
            fontSize: '.9rem', color: 'var(--c-text-muted)',
            maxWidth: 480, margin: '0 auto', lineHeight: 1.8,
          }}>از اولین جلسه تا تحویل برند — یک مسیر شفاف و اثبات‌شده</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {steps.map((step) => (
            <div key={step.num} className="card-hover" style={{
              borderRadius: 16, padding: '1.5rem',
              background: step.highlight ? 'var(--c-primary)' : 'var(--c-surface-2)',
              border: `1px solid ${step.highlight ? 'var(--c-primary)' : 'var(--c-border)'}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: step.highlight ? 'rgba(255,255,255,.15)' : 'var(--c-primary-bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke={step.highlight ? 'white' : 'var(--c-primary)'} strokeWidth="1.8">
                    <path d={step.icon}/>
                  </svg>
                </div>
                <span style={{
                  fontSize: '.72rem', fontWeight: 700, letterSpacing: '.08em',
                  color: step.highlight ? 'rgba(255,255,255,.6)' : 'var(--c-text-muted)',
                }}>مرحله {step.num}</span>
              </div>
              <h3 style={{
                fontSize: '1rem', fontWeight: 700, marginBottom: '.6rem',
                color: step.highlight ? 'white' : 'var(--c-text)',
              }}>{step.title}</h3>
              <p style={{
                fontSize: '.82rem', lineHeight: 1.75,
                color: step.highlight ? 'rgba(255,255,255,.75)' : 'var(--c-text-muted)',
              }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/contact/request-consultation" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            padding: '.85rem 2rem',
            background: 'var(--c-primary)', color: 'white',
            borderRadius: 10, fontSize: '.9rem', fontWeight: 700,
          }}>شروع فرایند برندینگ ←</Link>
        </div>

      </div>
    </section>
    </ScrollReveal>
  )
}
