const steps = [
  {
    num: '۰۱',
    title: 'بررسی وضعیت برند',
    desc: 'تحلیل جایگاه فعلی، رقبا، مخاطبان و شکاف‌های هویتی برند شما.',
    icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z',
  },
  {
    num: '۰۲',
    title: 'استراتژی و جایگاه‌یابی',
    desc: 'تعریف ارزش‌های اصلی، شخصیت برند، لحن ارتباطی و جایگاه رقابتی.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    num: '۰۳',
    title: 'هویت بصری',
    desc: 'طراحی لوگو، پالت رنگ، تایپوگرافی و سیستم بصری یکپارچه.',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  {
    num: '۰۴',
    title: 'مستندسازی برند',
    desc: 'تدوین برندبوک کامل — راهنمای جامع استفاده از هویت برند.',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
  },
  {
    num: '۰۵',
    title: 'ست اداری و اجرا',
    desc: 'طراحی و تحویل تمام ابزارهای اداری، دیجیتال و چاپی برند.',
    icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  },
  {
    num: '۰۶',
    title: 'پایش هوشمند با ROS AI',
    desc: 'رصد مستمر یکپارچگی برند در تمام نقاط تماس با تحلیل هوشمند.',
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    highlight: true,
  },
]

export default function ProcessSection() {
  return (
    <section style={{ background: 'var(--c-surface)', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            fontSize: '.72rem', fontWeight: 500,
            letterSpacing: '.12em', textTransform: 'uppercase',
            color: 'var(--c-primary)', marginBottom: '1rem',
          }}>
            <span style={{ display: 'block', width: 18, height: 2, background: 'var(--c-primary)', borderRadius: 2 }} />
            فرایند کار
            <span style={{ display: 'block', width: 18, height: 2, background: 'var(--c-primary)', borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, lineHeight: 1.25,
            letterSpacing: '-.02em',
          }}>
            از تحلیل تا اجرا — ۶ مرحله دقیق
          </h2>
        </div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}>
          {steps.map((step) => (
            <div key={step.num} style={{
              padding: '2rem',
              background: step.highlight ? 'var(--c-primary)' : 'var(--c-surface-2)',
              border: `1px solid ${step.highlight ? 'var(--c-primary)' : 'var(--c-border)'}`,
              borderRadius: 'var(--r-lg)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Step number watermark */}
              <div style={{
                position: 'absolute', top: '1rem', left: '1.25rem',
                fontSize: '3.5rem', fontWeight: 800,
                color: step.highlight ? 'rgba(255,255,255,.08)' : 'rgba(26,25,22,.04)',
                lineHeight: 1, letterSpacing: '-.04em',
                pointerEvents: 'none',
              }}>
                {step.num}
              </div>

              {/* Icon */}
              <div style={{
                width: 44, height: 44,
                background: step.highlight ? 'rgba(255,255,255,.15)' : 'var(--c-primary-bg)',
                borderRadius: 'var(--r-sm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24"
                  fill="none"
                  stroke={step.highlight ? 'white' : 'var(--c-primary)'}
                  strokeWidth="1.8">
                  <path d={step.icon}/>
                </svg>
              </div>

              <div style={{
                fontSize: '.72rem', fontWeight: 600,
                letterSpacing: '.06em',
                color: step.highlight ? 'rgba(255,255,255,.6)' : 'var(--c-text-light)',
                marginBottom: '.4rem',
              }}>
                مرحله {step.num}
              </div>

              <div style={{
                fontSize: '1rem', fontWeight: 700,
                color: step.highlight ? 'white' : 'var(--c-text)',
                marginBottom: '.6rem',
              }}>
                {step.title}
              </div>

              <div style={{
                fontSize: '.84rem', lineHeight: 1.7,
                color: step.highlight ? 'rgba(255,255,255,.75)' : 'var(--c-text-muted)',
              }}>
                {step.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}