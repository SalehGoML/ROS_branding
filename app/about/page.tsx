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
  { year: '۱۳۹۸', title: 'تأسیس رُس', desc: 'شروع با ایده‌ای ساده: برندینگ باید با تفکر واقعی همراه باشد.' },
  { year: '۱۳۹۹', title: 'اولین پروژه‌های بزرگ', desc: 'همکاری با برندهای صنعتی و خدماتی در حوزه B2B.' },
  { year: '۱۴۰۰', title: 'توسعه خدمات', desc: 'گسترش تیم و افزودن خدمات استراتژی و تجربه برند.' },
  { year: '۱۴۰۲', title: 'تولد رُس AI', desc: 'راه‌اندازی اولین نسخه ابزار هوشمند تحلیل انسجام برند.' },
  { year: '۱۴۰۳', title: 'نسخه عمومی سرویس رُس', desc: 'عرضه سرویس ROS AI به عموم برندها و کسب‌وکارها.' },
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
            درباره رُس
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
            در رُس، طراحی برند با تحلیل شروع می‌شود، با استراتژی ادامه می‌یابد،
            و با تجربه معنا پیدا می‌کند.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* bg glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(74,140,124,.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* عنوان بالا - مرکز */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 24, height: 1, background: 'rgba(74,140,124,.4)' }} />
              <span style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.18em', color: 'rgba(74,140,124,.7)', textTransform: 'uppercase' as const }}>فلسفه رُس</span>
              <div style={{ width: 24, height: 1, background: 'rgba(74,140,124,.4)' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1.15, color: 'var(--c-text)' }}>
              چرا رُس شکل گرفت؟
            </h2>
          </div>

          {/* گرید اصلی */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(1.5rem,3vw,3rem)', alignItems: 'stretch' }}>

            {/* چپ: کارت نقل‌قول بزرگ */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(74,140,124,.08) 0%, rgba(46,107,94,.04) 100%)',
              border: '1px solid rgba(74,140,124,.2)',
              borderRadius: 28, padding: '3rem',
              position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              {/* دکور پس‌زمینه */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,140,124,.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -60, left: -60, width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(46,107,94,.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

              {/* گیومه */}
              <div style={{ position: 'absolute', top: '1.5rem', left: '2rem', fontSize: '6rem', lineHeight: 1, color: 'rgba(74,140,124,.08)', fontFamily: 'Georgia, serif', userSelect: 'none' as const }}>"</div>

              <div style={{ position: 'relative' }}>
                <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 800, color: 'var(--c-text)', lineHeight: 1.7, letterSpacing: '-.02em', marginBottom: '1.25rem' }}>
                  در دنیایی که همه فریاد می‌زنند؛
                </p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div style={{ width: 4, borderRadius: 4, background: 'linear-gradient(to bottom, #7dcfbe, #2E6B5E)', flexShrink: 0, alignSelf: 'stretch', minHeight: 48 }} />
                  <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 800, color: 'var(--c-primary)', lineHeight: 1.7, letterSpacing: '-.02em', margin: 0 }}>
                    تنها صدایی ماندگار است که از خرد می‌آید.
                  </p>
                </div>
                <p style={{ fontSize: '.92rem', color: 'rgba(255,255,255,.38)', lineHeight: 1.9, margin: 0 }}>
                  برندینگ یک فرآیند استراتژیک است که با درک هویت، ارزش‌ها و تمایز کسب‌وکار، مسیر ماندگاری را هموار می‌کند.
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(74,140,124,.15)', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: 'linear-gradient(135deg,#1F4D43,#2E6B5E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.85rem', fontWeight: 700, color: 'white', fontFamily: 'Georgia, serif' }}>R</div>
                <span style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', color: 'rgba(74,140,124,.6)', textTransform: 'uppercase' as const }}>آژانس برندینگ رُس</span>
              </div>
            </div>

            {/* راست: دو کارت متنی */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                  label: 'باور بنیادین',
                  title: 'برندینگ با تفکر شروع می‌شود',
                  desc: 'در بازاری که برندینگ اغلب به ظاهرسازی تقلیل پیدا می‌کند، رُس با یک باور ساده شکل گرفت: طراحی بدون تفکر، شعار بدون محتوا، و اجرا بدون استراتژی، هدر دادن منابع و فرصت است.',
                },
                {
                  icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
                  label: 'رویکرد بومی',
                  title: 'مرجعی که زبان شما را می‌فهمد',
                  desc: 'برندهای فارسی‌زبان به یک مرجع بومی نیاز دارند — مرجعی که زبان، فرهنگ و بازارشان را بفهمد. هدف ما خلق برندهایی است که نه فقط زیبا، بلکه معنادار و ماندگار باشند.',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,.02)',
                  border: '1px solid rgba(255,255,255,.06)',
                  borderRadius: 20, padding: '2rem',
                  display: 'flex', gap: '1.25rem',
                  flex: 1,
                }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(74,140,124,.1)', border: '1px solid rgba(74,140,124,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(74,140,124,.8)" strokeWidth="1.8">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.1em', color: 'rgba(74,140,124,.5)', textTransform: 'uppercase' as const, marginBottom: '.4rem' }}>{item.label}</div>
                    <div style={{ fontSize: '.95rem', fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-.02em', marginBottom: '.75rem', lineHeight: 1.4 }}>{item.title}</div>
                    <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.38)', lineHeight: 1.85 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
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
              مسیر رُس
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
      <section style={{ padding: 'clamp(5rem, 9vw, 8rem) 2rem', background: '#0C0F0E', position: 'relative', overflow: 'hidden' }}>
        <style>{`
          .tc { transition: all .4s cubic-bezier(.16,1,.3,1); }
          .tc:hover { transform: translateY(-8px) !important; }
          .tc:hover .tc-img { transform: scale(1.08) !important; }
          .tc:hover .tc-btn { opacity: 1 !important; gap: .6rem !important; }
          .tc-img { transition: transform .4s cubic-bezier(.16,1,.3,1); }
        `}</style>

        <div style={{ position: 'absolute', top: '20%', right: '5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(74,140,124,.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(46,107,94,.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* تایتل */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 28, height: 1, background: 'rgba(74,140,124,.4)' }} />
              <span style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.2em', color: 'rgba(74,140,124,.6)', textTransform: 'uppercase' as const }}>تیم رُس</span>
              <div style={{ width: 28, height: 1, background: 'rgba(74,140,124,.4)' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-.05em', lineHeight: 1.1, margin: '0 0 1rem' }}>
              پشت هر برند،{' '}
              <span style={{ background: 'linear-gradient(135deg,#7dcfbe 0%,#4A8C7C 50%,#2E6B5E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>یک تیم</span>
              {' '}ایستاده
            </h2>
            <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.3)', maxWidth: 420, margin: '0 auto', lineHeight: 1.8 }}>
              ۶ متخصص در حوزه‌های استراتژی، فناوری، حقوق و طراحی
            </p>
          </div>

          {/* گرید */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.25rem' }}>
            {[
              { slug: 'saeid-maeini', name: 'سعید معینی‌نیا', role: 'مجری طرح | مدیرعامل', edu: 'MBA', photo: '/team/saeid-maeini.jpg', hasResume: true, skills: ['استراتژی برند','مدیریت محصول'], color: '#4A8C7C', num: '۰۱' },
              { slug: 'amjad-amiri', name: 'امجد امیری', role: 'مدیر امور حقوقی', edu: 'دکتری حقوق', photo: '/team/amjad-amiri.jpg', hasResume: false, skills: ['حقوق قراردادها','مالکیت فکری'], color: '#818CF8', num: '۰۲' },
              { slug: 'mojtaba-roshani', name: 'مجتبی روشنی', role: 'مدیر فنی (CTO)', edu: 'ارشد CS', photo: '/team/mojtaba-roshani.png', hasResume: true, skills: ['معماری سیستم','SRE'], color: '#38BDF8', num: '۰۳' },
              { slug: 'danial-khazaei', name: 'دانیال خزاعی', role: 'برنامه‌نویس | متخصص AI', edu: 'کارشناسی کامپیوتر', photo: null, hasResume: true, skills: ['هوش مصنوعی','Machine Learning'], color: '#A78BFA', num: '۰۴' },
              { slug: 'abolfazl-asadi', name: 'ابوالفضل اسدی', role: 'مدیر هنری | طراحی', edu: 'کارشناسی صنایع', photo: '/team/abolfazl-asadi.jpg', hasResume: true, skills: ['هویت بصری','طراحی گرافیک'], color: '#F472B6', num: '۰۵' },
              { slug: 'saleh-askarzadeh', name: 'محمد صالح عسکرزاده', role: 'Backend Developer | SRE', edu: 'کارشناسی کامپیوتر', photo: '/team/saleh-askarzadeh.jpg', hasResume: false, skills: ['Backend','DevOps'], color: '#FBBF24', num: '۰۶' },
            ].map(m => (
              <div key={m.slug} className="tc" style={{
                background: 'rgba(255,255,255,.02)',
                border: '1px solid rgba(255,255,255,.07)',
                borderRadius: 22, padding: '2rem',
                display: 'flex', flexDirection: 'column' as const, alignItems: 'center',
                textAlign: 'center' as const, gap: '1rem',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* شماره گوشه */}
                <span style={{ position: 'absolute', top: '1rem', right: '1.1rem', fontSize: '.58rem', fontWeight: 800, color: 'rgba(255,255,255,.08)', letterSpacing: '.05em' }}>{m.num}</span>

                {/* خط رنگی بالا */}
                <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 2, background: `linear-gradient(to right, transparent, ${m.color}, transparent)`, borderRadius: 2, opacity: .6 }} />

                {/* آواتار */}
                <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', border: `2px solid ${m.color}35`, background: `${m.color}10`, flexShrink: 0, position: 'relative' }}>
                  {m.photo ? (
                    <img className="tc-img" src={m.photo} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 900, color: m.color }}>{m.name[0]}</div>
                  )}
                </div>

                {/* اسم و سمت */}
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'white', letterSpacing: '-.03em', marginBottom: '.3rem' }}>{m.name}</div>
                  <div style={{ fontSize: '.7rem', fontWeight: 600, color: m.color, opacity: .8, lineHeight: 1.5 }}>{m.role}</div>
                  <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.2)', marginTop: '.3rem' }}>{m.edu}</div>
                </div>

                {/* divider */}
                <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,.05)' }} />

                {/* skills */}
                <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
                  {m.skills.map(s => (
                    <span key={s} style={{ fontSize: '.6rem', fontWeight: 600, background: `${m.color}10`, border: `1px solid ${m.color}25`, color: m.color, borderRadius: 100, padding: '.18rem .65rem' }}>{s}</span>
                  ))}
                </div>

                {/* دکمه */}
                <div style={{ marginTop: 'auto', width: '100%' }}>
                  {m.hasResume ? (
                    <a href={`/team/${m.slug}`} className="tc-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.7rem', fontWeight: 700, color: m.color, opacity: .65, textDecoration: 'none', transition: 'all .3s ease' }}>
                      مشاهده رزومه
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  ) : (
                    <span style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.12)' }}>رزومه در حال آماده‌سازی</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Values */}
      <section style={{ padding: 'clamp(5rem, 9vw, 8rem) 2rem', background: 'var(--c-surface)', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <style>{`.val-card { transition: all .35s cubic-bezier(.16,1,.3,1); } .val-card:hover { transform: translateY(-4px); border-color: rgba(74,140,124,.3) !important; background: rgba(74,140,124,.05) !important; } .val-card:hover .val-num { background: rgba(74,140,124,.2) !important; color: #7dcfbe !important; }`}</style>

        {/* bg */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(74,140,124,.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* تایتل + توضیح کنار هم */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem,4vw,4rem)', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: 3, height: 18, background: 'linear-gradient(to bottom, #7dcfbe, #2E6B5E)', borderRadius: 2 }} />
                <span style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.18em', color: 'rgba(74,140,124,.6)', textTransform: 'uppercase' as const }}>ارزش‌های رُس</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1.15, margin: 0 }}>
                ما در رُس چه<br />
                <span style={{ background: 'linear-gradient(135deg,#7dcfbe 0%,#4A8C7C 50%,#2E6B5E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>چیزهایی را مهم</span>
                {' '}می‌دانیم؟
              </h2>
            </div>
            <p style={{ fontSize: '.92rem', color: 'rgba(255,255,255,.32)', lineHeight: 2, margin: 0 }}>
              این ارزش‌ها نه شعار، بلکه اصولی هستند که در هر پروژه، هر جلسه و هر تصمیمی که می‌گیریم حاضرند. آنچه رُس را رُس می‌کند.
            </p>
          </div>

          {/* گرید ۳ ستونه */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { num: '۰۱', title: 'تعهد به تفکر پیش از اجرا', desc: 'هیچ قلمی نمی‌زنیم تا ندانیم چرا.' },
              { num: '۰۲', title: 'درک بستر فرهنگی برندها', desc: 'برند بدون فرهنگ، پوسته‌ای بی‌روح است.' },
              { num: '۰۳', title: 'مسئولیت‌پذیری در قبال نتایج', desc: 'موفقیت مشتری، موفقیت ماست.' },
              { num: '۰۴', title: 'پرهیز از شعارهای پوچ', desc: 'صداقت در کار، از هر تبلیغی مؤثرتر است.' },
              { num: '۰۵', title: 'شفافیت در فرآیند و ارتباط', desc: 'مشتری همیشه می‌داند کجای کار هستیم.' },
              { num: '۰۶', title: 'احترام به هویت منحصربه‌فرد هر برند', desc: 'هیچ دو برندی یکسان نیستند.' },
            ].map((item) => (
              <div key={item.num} className="val-card" style={{
                background: 'rgba(255,255,255,.02)',
                border: '1px solid rgba(255,255,255,.06)',
                borderRadius: 20, padding: '1.75rem',
                display: 'flex', flexDirection: 'column' as const, gap: '1rem',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* شماره */}
                <div className="val-num" style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(74,140,124,.08)', border: '1px solid rgba(74,140,124,.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.65rem', fontWeight: 800, color: 'rgba(74,140,124,.7)',
                  letterSpacing: '.05em', transition: 'all .3s ease',
                }}>{item.num}</div>

                <div>
                  <div style={{ fontSize: '.92rem', fontWeight: 800, color: 'white', letterSpacing: '-.02em', marginBottom: '.5rem', lineHeight: 1.4 }}>{item.title}</div>
                  <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.28)', lineHeight: 1.75 }}>{item.desc}</div>
                </div>

                {/* دکور گوشه */}
                <div style={{ position: 'absolute', bottom: -20, left: -20, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,140,124,.04), transparent)', pointerEvents: 'none' }} />
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
              مشاهده خدمات رُس
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
