import Link from 'next/link'

const principles = [
  {
    icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 1 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6',
    title: 'تحلیل عمیق',
    desc: 'شناخت زمینه واقعی برند، بازار و مخاطب',
  },
  {
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    title: 'استراتژی روشن',
    desc: 'طراحی تصمیم‌هایی که برند را در مسیر درست قرار می‌دهند',
  },
  {
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    title: 'طراحی اجرایی',
    desc: 'خروجی‌هایی که قابل اجرا، قابل تجربه و قابل سنجش‌اند',
  },
]

const timeline = [
  { year: '۱۳۹۸', title: 'تأسیس ROS', desc: 'شروع با ایده‌ای ساده: برندینگ باید با تفکر واقعی همراه باشد.' },
  { year: '۱۳۹۹', title: 'اولین پروژه‌های بزرگ', desc: 'همکاری با برندهای صنعتی و خدماتی در حوزه B2B.' },
  { year: '۱۴۰۰', title: 'توسعه خدمات', desc: 'گسترش تیم و افزودن خدمات استراتژی و تجربه برند.' },
  { year: '۱۴۰۲', title: 'تولد ROS AI', desc: 'راه‌اندازی اولین نسخه ابزار هوشمند تحلیل انسجام برند.' },
  { year: '۱۴۰۳', title: 'نسخه عمومی سرویس', desc: 'عرضه سرویس ROS AI به عموم برندها و کسب‌وکارها.' },
]

const values = [
  'تعهد به تفکر پیش از اجرا',
  'درک بستر فرهنگی برندها',
  'مسئولیت‌پذیری در قبال نتایج',
  'پرهیز از شعارهای پوچ یا خروجی‌های تزئینی',
  'شفافیت در فرایند و ارتباط با مشتری',
  'احترام به هویت منحصربه‌فرد هر برند',
]

const team = [
  { name: 'سعید معینی‌نیا', role: 'مدیر' },
  { name: 'محمد امین رجبی', role: 'مدیر محصول' },
  { name: 'محمد صالح عسکرزاده', role: 'توسعه‌دهنده' },
]

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)' }}>

      {/* Hero */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem clamp(4rem, 8vw, 7rem)',
        background: 'var(--c-surface)',
        borderBottom: '1px solid var(--c-border)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            fontSize: '.72rem', fontWeight: 500,
            letterSpacing: '.12em', textTransform: 'uppercase',
            color: 'var(--c-primary)', marginBottom: '1.5rem',
          }}>
            <span style={{ width: 18, height: 2, background: 'var(--c-primary)', borderRadius: 2, display: 'inline-block' }} />
            درباره ما
            <span style={{ width: 18, height: 2, background: 'var(--c-primary)', borderRadius: 2, display: 'inline-block' }} />
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-.03em', marginBottom: '1.5rem',
          }}>
            ما برند را طراحی نمی‌کنیم،
            <br />
            <span style={{ color: 'var(--c-primary)' }}>آن را می‌فهمیم.</span>
          </h1>
          <p style={{
            fontSize: 'clamp(.95rem, 2vw, 1.1rem)',
            color: 'var(--c-text-muted)', lineHeight: 1.9,
            maxWidth: 560, margin: '0 auto',
          }}>
            در ROS، طراحی برند با تحلیل شروع می‌شود، با استراتژی ادامه می‌یابد،
            و با تجربه معنا پیدا می‌کند.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{
              fontSize: '.72rem', fontWeight: 600,
              letterSpacing: '.1em', color: 'var(--c-primary)',
              marginBottom: '1rem', textTransform: 'uppercase',
            }}>
              فلسفه برند
            </div>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700, lineHeight: 1.3,
              letterSpacing: '-.02em', marginBottom: '1.5rem',
            }}>
              چرا ROS شکل گرفت؟
            </h2>
            <p style={{
              fontSize: '.95rem', color: 'var(--c-text-muted)',
              lineHeight: 2, marginBottom: '1.25rem',
            }}>
              در بازاری که برندینگ اغلب به ظاهرسازی تقلیل پیدا می‌کند، ROS با یک باور ساده شکل گرفت:
              طراحی بدون تفکر، شعار بدون محتوا، و اجرا بدون استراتژی، هدر دادن منابع و فرصت است.
            </p>
            <p style={{
              fontSize: '.95rem', color: 'var(--c-text-muted)',
              lineHeight: 2,
            }}>
              ما به این نیاز پاسخ دادیم که برندهای فارسی‌زبان به یک مرجع بومی نیاز دارند — مرجعی که
              زبان، فرهنگ و بازارشان را بفهمد. هدف ما خلق برندهایی است که نه فقط زیبا، بلکه معنادار
              و ماندگار باشند.
            </p>
          </div>

          {/* Visual */}
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '2.5rem',
            display: 'flex', flexDirection: 'column', gap: '1.25rem',
          }}>
            {[
              { num: '۵+', label: 'سال تجربه در برندینگ' },
              { num: '۵۰+', label: 'پروژه موفق' },
              { num: '۳', label: 'حوزه تخصصی' },
              { num: '۱', label: 'ابزار هوشمند بومی' },
            ].map(s => (
              <div key={s.label} style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                padding: '1rem 1.25rem',
                background: 'var(--c-surface-2)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--r-lg)',
              }}>
                <div style={{
                  fontSize: '1.8rem', fontWeight: 800,
                  color: 'var(--c-primary)', minWidth: 70,
                  letterSpacing: '-.03em',
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '.88rem', color: 'var(--c-text-muted)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2rem',
        background: 'var(--c-surface)',
        borderTop: '1px solid var(--c-border)',
        borderBottom: '1px solid var(--c-border)',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', color: 'var(--c-primary)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              رویکرد ما
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-.02em' }}>
              چگونه با برندها کار می‌کنیم؟
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {principles.map((p, i) => (
              <div key={p.title} style={{
                padding: '2rem',
                background: 'var(--c-bg)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--r-xl)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: '1.5rem', left: '1.5rem',
                  fontSize: '3rem', fontWeight: 900,
                  color: 'var(--c-border)',
                  lineHeight: 1, letterSpacing: '-.04em',
                }}>
                  {['۱', '۲', '۳'][i]}
                </div>
                <div style={{
                  width: 48, height: 48,
                  background: 'var(--c-primary-bg)',
                  borderRadius: 'var(--r-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" strokeWidth="1.8">
                    <path d={p.icon}/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '.6rem' }}>{p.title}</h3>
                <p style={{ fontSize: '.88rem', color: 'var(--c-text-muted)', lineHeight: 1.8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', color: 'var(--c-primary)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              مسیر ROS
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-.02em' }}>
              از کجا شروع کردیم و تا کجا رسیدیم؟
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: 0, bottom: 0, right: 19,
              width: 2, background: 'var(--c-border)',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {timeline.map((item, i) => (
                <div key={item.year} style={{ display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 40, height: 40, flexShrink: 0,
                    background: i === timeline.length - 1 ? 'var(--c-primary)' : 'var(--c-surface)',
                    border: `2px solid ${i === timeline.length - 1 ? 'var(--c-primary)' : 'var(--c-border)'}`,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: i === timeline.length - 1 ? 'white' : 'var(--c-primary)',
                    }} />
                  </div>
                  <div style={{
                    flex: 1,
                    background: 'var(--c-surface)',
                    border: '1px solid var(--c-border)',
                    borderRadius: 'var(--r-lg)',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '.25rem',
                  }}>
                    <div style={{ fontSize: '.72rem', color: 'var(--c-primary)', fontWeight: 700, marginBottom: '.3rem' }}>
                      {item.year}
                    </div>
                    <div style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '.4rem' }}>{item.title}</div>
                    <div style={{ fontSize: '.85rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2rem',
        background: 'var(--c-surface)',
        borderTop: '1px solid var(--c-border)',
        borderBottom: '1px solid var(--c-border)',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', color: 'var(--c-primary)', marginBottom: '1rem', textTransform: 'uppercase' }}>تیم</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-.02em' }}>
              آدم‌هایی که این مسیر را می‌سازند
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {team.map(m => (
              <div key={m.name} style={{
                background: 'var(--c-bg)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--r-xl)',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 64, height: 64,
                  background: 'var(--c-primary-bg)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.4rem', fontWeight: 800,
                  color: 'var(--c-primary)',
                }}>
                  {m.name[0]}
                </div>
                <div style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '.3rem' }}>{m.name}</div>
                <div style={{ fontSize: '.78rem', color: 'var(--c-text-muted)' }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', color: 'var(--c-primary)', marginBottom: '1rem', textTransform: 'uppercase' }}>منش حرفه‌ای</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-.02em' }}>
              ما در ROS چه چیزهایی را مهم می‌دانیم؟
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {values.map((v, i) => (
              <div key={v} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.1rem 1.25rem',
                background: 'var(--c-surface)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--r-lg)',
              }}>
                <div style={{
                  width: 28, height: 28, flexShrink: 0,
                  background: 'var(--c-primary-bg)',
                  borderRadius: 7,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.72rem', fontWeight: 800, color: 'var(--c-primary)',
                }}>
                  {['۱','۲','۳','۴','۵','۶'][i]}
                </div>
                <span style={{ fontSize: '.88rem', color: 'var(--c-text)', lineHeight: 1.6 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 2rem',
        background: 'var(--c-primary)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 700, color: 'white',
            letterSpacing: '-.02em', marginBottom: '1rem',
          }}>
            می‌خواهید ما را بهتر بشناسید
            <br />یا پروژه‌ای را با ما شروع کنید؟
          </h2>
          <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.75)', marginBottom: '2rem', lineHeight: 1.8 }}>
            یک جلسه کافی است تا بفهمید برند شما کجا ایستاده.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact/request-consultation" style={{
              padding: '.85rem 2rem',
              background: 'white', color: 'var(--c-primary)',
              borderRadius: 'var(--r-sm)',
              fontSize: '.95rem', fontWeight: 700,
            }}>
              درخواست جلسه مشاوره
            </Link>
            <Link href="/services" style={{
              padding: '.85rem 2rem',
              background: 'rgba(255,255,255,.12)',
              color: 'white',
              border: '1.5px solid rgba(255,255,255,.25)',
              borderRadius: 'var(--r-sm)',
              fontSize: '.95rem', fontWeight: 600,
            }}>
              مشاهده خدمات ما
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
