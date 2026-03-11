import Link from 'next/link'

const modules = [
  {
    title: 'مدیریت انسجام پیام‌ها و هویت برند',
    desc: 'سنجش هماهنگی برند در تمام نقاط تماس',
    active: true,
  },
  {
    title: 'بررسی جایگاه برند و مقایسه با رقبا',
    desc: 'تحلیل رقابتی و موقعیت‌یابی برند',
    active: false,
  },
  {
    title: 'پایش مستمر رفتار بازار و مخاطب',
    desc: 'رصد تغییرات بازار به‌صورت لحظه‌ای',
    active: false,
  },
  {
    title: 'تحلیل احساسات مشتریان با NLP',
    desc: 'پردازش زبان طبیعی برای درک عمیق‌تر مشتری',
    active: false,
  },
]

const steps = [
  {
    num: '۰۱',
    title: 'تعریف برند',
    desc: 'شخصیت، ارزش‌ها، لحن و ویژگی‌های برند خود را وارد می‌کنید — یا اجازه می‌دهید ابزار ما برایتان بسازد.',
  },
  {
    num: '۰۲',
    title: 'شناسایی نقاط تماس',
    desc: 'براساس صنعت شما، کانال‌های ارتباطی (اینستاگرام، وب‌سایت، پشتیبانی، بسته‌بندی) شناسایی و پایش می‌شوند.',
  },
  {
    num: '۰۳',
    title: 'گزارش و پیشنهاد بهبود',
    desc: 'داشبوردی ساده و قابل‌فهم دریافت می‌کنید با امکان درخواست گزارش تحلیلی کامل از تیم ROS.',
  },
]

const faqs = [
  { q: 'آیا این سرویس رایگان است؟', a: 'یک تحلیل آزمایشی رایگان در اختیار دارید. برای استفاده کامل، پلن‌های مختلفی با قیمت‌های متفاوت وجود دارد.' },
  { q: 'چقدر طول می‌کشد؟', a: 'اولین تحلیل معمولاً بین ۲ تا ۵ دقیقه زمان می‌برد. گزارش‌های کامل‌تر تا ۲۴ ساعت آماده می‌شوند.' },
  { q: 'داده‌های من محفوظ می‌ماند؟', a: 'بله. تمام اطلاعات برند شما رمزنگاری‌شده ذخیره می‌شود و هرگز با اشخاص ثالث به اشتراک گذاشته نمی‌شود.' },
  { q: 'به چه چیزهایی برای شروع نیاز دارم؟', a: 'کافی است یک حساب کاربری بسازید. داشتن سند برند کمک می‌کند، اما اگر ندارید ابزار ما برایتان می‌سازد.' },
  { q: 'این سرویس جای مشاور انسانی را می‌گیرد؟', a: 'خیر. ROS AI یک ابزار تکمیلی است. تحلیل‌های عمیق‌تر با همراهی تیم متخصص ROS انجام می‌شود.' },
]

const channels = [
  { name: 'اینستاگرام', personality: 75, tone: 45, values: 60 },
  { name: 'وب‌سایت', personality: 88, tone: 72, values: 81 },
  { name: 'پشتیبانی', personality: 52, tone: 68, values: 44 },
]

export default function AIPage() {
  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)' }}>

      {/* Hero */}
      <section style={{
        padding: 'clamp(5rem,10vw,9rem) 2rem clamp(4rem,8vw,7rem)',
        background: 'var(--c-surface)',
        borderBottom: '1px solid var(--c-border)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            fontSize: '.72rem', fontWeight: 600,
            letterSpacing: '.12em', textTransform: 'uppercase' as const,
            color: 'var(--c-primary)', marginBottom: '1.5rem',
            padding: '.4rem 1rem',
            background: 'var(--c-primary-bg)',
            border: '1px solid rgba(46,107,94,.2)',
            borderRadius: 100,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c-primary)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            ROS AI — هوش مصنوعی برندینگ
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem,5vw,3.5rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-.03em', marginBottom: '1.5rem',
          }}>
            تحلیل هوشمند برند،
            <br />
            <span style={{ color: 'var(--c-primary)' }}>برای انسجام واقعی</span>
          </h1>
          <p style={{
            fontSize: 'clamp(.95rem,2vw,1.1rem)',
            color: 'var(--c-text-muted)', lineHeight: 1.9,
            maxWidth: 540, margin: '0 auto 2.5rem',
          }}>
            سرویس هوش مصنوعی ROS به برند شما کمک می‌کند تا در همه‌ی نقاط تماس،
            هماهنگ، هدفمند و قابل سنجش ظاهر شود.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" style={{
              padding: '.85rem 2rem',
              background: 'var(--c-primary)', color: 'white',
              borderRadius: 'var(--r-sm)',
              fontSize: '.95rem', fontWeight: 700,
              textDecoration: 'none',
            }}>
              شروع تحلیل برند ✦
            </Link>
            <Link href="/login" style={{
              padding: '.85rem 1.75rem',
              background: 'transparent',
              color: 'var(--c-text-muted)',
              border: '1.5px solid var(--c-border)',
              borderRadius: 'var(--r-sm)',
              fontSize: '.9rem', fontWeight: 500,
              textDecoration: 'none',
            }}>
              ورود به پنل
            </Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) 2rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', color: 'var(--c-primary)', marginBottom: '1rem', textTransform: 'uppercase' as const }}>
              قابلیت‌ها
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.75rem' }}>
              چطور به شما کمک می‌کنیم؟
            </h2>
            <p style={{ fontSize: '.9rem', color: 'var(--c-text-muted)', maxWidth: 480, margin: '0 auto' }}>
              چهار ماژول اصلی — ماژول اول فعال، بقیه در حال توسعه
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }}>
            {modules.map((m, i) => (
              <div key={i} style={{
                padding: '1.75rem',
                background: m.active ? 'var(--c-surface)' : 'var(--c-surface)',
                border: `1.5px solid ${m.active ? 'var(--c-primary)' : 'var(--c-border)'}`,
                borderRadius: 'var(--r-xl)',
                opacity: m.active ? 1 : .55,
                position: 'relative',
              }}>
                {m.active && (
                  <div style={{
                    position: 'absolute', top: '1.25rem', left: '1.25rem',
                    fontSize: '.65rem', fontWeight: 700,
                    padding: '.2rem .65rem',
                    background: 'var(--c-primary-bg)',
                    color: 'var(--c-primary)',
                    border: '1px solid rgba(46,107,94,.2)',
                    borderRadius: 100,
                  }}>
                    ✓ فعال
                  </div>
                )}
                {!m.active && (
                  <div style={{
                    position: 'absolute', top: '1.25rem', left: '1.25rem',
                    fontSize: '.65rem', fontWeight: 600,
                    padding: '.2rem .65rem',
                    background: 'var(--c-surface-2)',
                    color: 'var(--c-text-light)',
                    border: '1px solid var(--c-border)',
                    borderRadius: 100,
                  }}>
                    به‌زودی
                  </div>
                )}
                <div style={{
                  width: 40, height: 40,
                  background: m.active ? 'var(--c-primary-bg)' : 'var(--c-surface-2)',
                  borderRadius: 'var(--r-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                  fontSize: '1rem', color: m.active ? 'var(--c-primary)' : 'var(--c-text-light)',
                  fontWeight: 800,
                }}>
                  {['✦','◎','⟳','◈'][i]}
                </div>
                <h3 style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '.5rem', paddingLeft: '4rem' }}>{m.title}</h3>
                <p style={{ fontSize: '.83rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Module Detail */}
      <section style={{
        padding: 'clamp(4rem,8vw,7rem) 2rem',
        background: 'var(--c-surface)',
        borderTop: '1px solid var(--c-border)',
        borderBottom: '1px solid var(--c-border)',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', color: 'var(--c-primary)', marginBottom: '1rem', textTransform: 'uppercase' as const }}>
              ماژول فعال
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '1.25rem', lineHeight: 1.3 }}>
              در حال حاضر چه چیزی برایتان فعال است؟
            </h2>
            <p style={{ fontSize: '.92rem', color: 'var(--c-text-muted)', lineHeight: 2, marginBottom: '1.75rem' }}>
              ماژول «مدیریت انسجام برند» به شما کمک می‌کند مطمئن شوید برندتان در کانال‌هایی
              مثل اینستاگرام، وب‌سایت، خدمات مشتری و بسته‌بندی، ویژگی‌های شخصیتی،
              لحن و ارزش‌هایش را درست منتقل می‌کند.
            </p>
            <Link href="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              padding: '.8rem 1.75rem',
              background: 'var(--c-primary)', color: 'white',
              borderRadius: 'var(--r-sm)',
              fontSize: '.9rem', fontWeight: 700,
              textDecoration: 'none',
            }}>
              شروع مسیر تحلیل ←
            </Link>
          </div>

          {/* Mock dashboard preview */}
          <div style={{
            background: 'var(--c-bg)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.5rem',
          }}>
            <div style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--c-text-muted)', marginBottom: '1.25rem' }}>
              نمونه خروجی تحلیل — برند فرضی
            </div>
            {channels.map(ch => (
              <div key={ch.name} style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '.8rem', fontWeight: 600, marginBottom: '.75rem', color: 'var(--c-text)' }}>
                  {ch.name}
                </div>
                {[
                  { label: 'شخصیت برند', val: ch.personality },
                  { label: 'لحن برند', val: ch.tone },
                  { label: 'ارزش‌ها', val: ch.values },
                ].map(bar => (
                  <div key={bar.label} style={{ marginBottom: '.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.72rem', color: 'var(--c-text-muted)', marginBottom: '.25rem' }}>
                      <span>{bar.label}</span>
                      <span style={{ fontWeight: 600, color: bar.val >= 70 ? 'var(--c-primary)' : bar.val >= 50 ? '#D97706' : '#DC2626' }}>
                        {bar.val}٪
                      </span>
                    </div>
                    <div style={{ height: 6, background: 'var(--c-border)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', borderRadius: 3,
                        width: `${bar.val}%`,
                        background: bar.val >= 70 ? 'var(--c-primary)' : bar.val >= 50 ? '#D97706' : '#DC2626',
                        transition: 'width .6s ease',
                      }} />
                    </div>
                  </div>
                ))}
                {ch.name !== channels[channels.length - 1].name && (
                  <div style={{ height: 1, background: 'var(--c-border)', margin: '1rem 0' }} />
                )}
              </div>
            ))}
            <div style={{
              fontSize: '.72rem', color: 'var(--c-text-muted)',
              padding: '.75rem', background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              borderRadius: 'var(--r-sm)', lineHeight: 1.7,
              marginTop: '.5rem',
            }}>
              شما تصویری زنده، قابل اندازه‌گیری و قابل تصمیم‌سازی از برندتان دریافت می‌کنید.
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) 2rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', color: 'var(--c-primary)', marginBottom: '1rem', textTransform: 'uppercase' as const }}>
              نحوه عملکرد
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, letterSpacing: '-.02em' }}>
              چگونه برند شما تحلیل می‌شود؟
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                padding: '2rem',
                background: 'var(--c-surface)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--r-xl)',
                position: 'relative',
              }}>
                <div style={{
                  fontSize: '2.5rem', fontWeight: 900,
                  color: 'var(--c-border)',
                  lineHeight: 1, marginBottom: '1.25rem',
                  letterSpacing: '-.04em',
                }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)', lineHeight: 1.85 }}>{s.desc}</p>
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', top: '50%', left: -20,
                    transform: 'translateY(-50%)',
                    fontSize: '1.2rem', color: 'var(--c-border)',
                    display: 'none',
                  }}>←</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: 'clamp(4rem,8vw,7rem) 2rem',
        background: 'var(--c-surface)',
        borderTop: '1px solid var(--c-border)',
        borderBottom: '1px solid var(--c-border)',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', color: 'var(--c-primary)', marginBottom: '1rem', textTransform: 'uppercase' as const }}>
              سوالات متداول
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, letterSpacing: '-.02em' }}>
              پاسخ سوال‌های رایج
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{
                padding: '1.25rem 1.5rem',
                background: 'var(--c-bg)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--r-lg)',
              }}>
                <div style={{ fontSize: '.9rem', fontWeight: 700, marginBottom: '.6rem', color: 'var(--c-text)' }}>
                  {f.q}
                </div>
                <div style={{ fontSize: '.85rem', color: 'var(--c-text-muted)', lineHeight: 1.8 }}>
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: 'clamp(4rem,8vw,7rem) 2rem',
        background: 'var(--c-primary)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem,3vw,2.3rem)',
            fontWeight: 700, color: 'white',
            letterSpacing: '-.02em', marginBottom: '1rem', lineHeight: 1.3,
          }}>
            برند شما چه تصویری در ذهن مخاطب می‌سازد؟
          </h2>
          <p style={{
            fontSize: '.95rem', color: 'rgba(255,255,255,.75)',
            marginBottom: '2rem', lineHeight: 1.8,
          }}>
            با ROS، این تصویر را دقیق‌تر و هوشمندتر ببینید.
          </p>
          <Link href="/register" style={{
            display: 'inline-block',
            padding: '.9rem 2.5rem',
            background: 'white', color: 'var(--c-primary)',
            borderRadius: 'var(--r-sm)',
            fontSize: '1rem', fontWeight: 700,
            textDecoration: 'none',
          }}>
            شروع تحلیل برند ✦
          </Link>
        </div>
      </section>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }`}</style>
    </main>
  )
}
