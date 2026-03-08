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

const stats = [
  { num: '۱۴۰+', label: 'پروژه اجراشده',  primary: true },
  { num: '۸۷',   label: 'مشتری فعال',      primary: false },
  { num: '۹۲٪',  label: 'رضایت مشتریان',   primary: false },
  { num: '۷',    label: 'سال تجربه تخصصی', primary: false },
]

export default function AdvantageSection() {
  return (
    <section style={{ background: 'var(--c-surface)', padding: '7rem 0' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 2rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '5rem', alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            fontSize: '.72rem', fontWeight: 500,
            letterSpacing: '.12em', textTransform: 'uppercase',
            color: 'var(--c-primary)', marginBottom: '1rem',
          }}>
            <span style={{ display: 'block', width: 18, height: 2, background: 'var(--c-primary)', borderRadius: 2 }} />
            چرا ROS
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 700, lineHeight: 1.25,
            letterSpacing: '-.02em', marginBottom: '1.25rem',
          }}>
            ما خدمات نمی‌فروشیم.<br />راهکار طراحی می‌کنیم.
          </h2>
          <p style={{
            fontSize: '1.05rem', color: 'var(--c-text-muted)',
            lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 480,
          }}>
            تفاوت ROS در عمق تحلیل، درک بستر فرهنگی و پایبندی به خروجی‌های اجرایی‌ست.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {advantages.map(adv => (
              <div key={adv.name} style={{
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
                padding: '1.1rem 1.25rem',
                background: 'var(--c-surface-2)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--r-md)',
              }}>
                <div style={{
                  width: 38, height: 38,
                  background: 'var(--c-primary-bg)',
                  borderRadius: 'var(--r-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="var(--c-primary)" strokeWidth="1.8">
                    <path d={adv.icon}/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '.92rem', fontWeight: 600, marginBottom: '.2rem' }}>{adv.name}</div>
                  <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.6 }}>{adv.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {stats.map(s => (
            <div key={s.label} style={{
              padding: '1.75rem 1.5rem',
              background: s.primary ? 'var(--c-primary)' : 'var(--c-surface-2)',
              border: `1px solid ${s.primary ? 'var(--c-primary)' : 'var(--c-border)'}`,
              borderRadius: 'var(--r-md)',
            }}>
              <div style={{
                fontSize: '2.4rem', fontWeight: 700,
                letterSpacing: '-.03em', lineHeight: 1,
                color: s.primary ? 'white' : 'var(--c-primary)',
                marginBottom: '.35rem',
              }}>{s.num}</div>
              <div style={{
                fontSize: '.8rem',
                color: s.primary ? 'rgba(255,255,255,.75)' : 'var(--c-text-muted)',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
