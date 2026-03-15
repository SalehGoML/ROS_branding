'use client'
import Link from 'next/link'
import { useState } from 'react'

const articles = [
  { slug: 'branding-chist', title: 'برندینگ چیست؟ راهنمای جامع برندسازی برای کسب‌وکارهای ایرانی', excerpt: 'برندینگ فقط لوگو نیست. در این مقاله می‌آموزید برندینگ واقعی چه تفاوتی با طراحی گرافیک دارد و چرا هر کسب‌وکاری به آن نیاز دارد.', category: 'برندینگ', readTime: '۸', date: '۱۴۰۴/۰۲/۱۵', featured: true },
  { slug: 'logo-design-guide', title: 'طراحی لوگو حرفه‌ای: از ایده تا اجرا — راهنمای گام‌به‌گام', excerpt: 'چه معیارهایی یک لوگو را حرفه‌ای می‌کند؟ رنگ، فرم، تایپوگرافی و معنا — همه چیز درباره طراحی لوگوی ماندگار.', category: 'طراحی لوگو', readTime: '۱۰', date: '۱۴۰۴/۰۲/۰۸', featured: true },
  { slug: 'visual-identity-system', title: 'هویت بصری چیست و چگونه یک سیستم هویت بصری یکپارچه بسازیم؟', excerpt: 'هویت بصری مجموعه‌ای از المان‌های طراحی است که شخصیت برند شما را می‌سازند. از لوگو تا پالت رنگ و تایپوگرافی.', category: 'هویت بصری', readTime: '۱۲', date: '۱۴۰۴/۰۱/۲۸', featured: false },
  { slug: 'brand-strategy-iran', title: 'استراتژی برند در بازار ایران: چالش‌ها، فرصت‌ها و راهکارها', excerpt: 'بازار ایران ویژگی‌های فرهنگی منحصربه‌فردی دارد. چطور استراتژی برندی طراحی کنیم که با مخاطب ایرانی ارتباط واقعی برقرار کند؟', category: 'استراتژی برند', readTime: '۱۵', date: '۱۴۰۴/۰۱/۲۰', featured: false },
  { slug: 'ai-in-branding', title: 'هوش مصنوعی در برندینگ: ابزارها، کاربردها و محدودیت‌ها', excerpt: 'ChatGPT، Midjourney و دیگر ابزارهای AI چطور فرایند برندسازی را تغییر داده‌اند؟', category: 'هوش مصنوعی', readTime: '۱۱', date: '۱۴۰۴/۰۱/۱۲', featured: true },
  { slug: 'brand-positioning', title: 'جایگاه‌یابی برند: چطور در ذهن مخاطب جایگاه منحصربه‌فرد بسازیم؟', excerpt: 'جایگاه‌یابی برند تعیین می‌کند که وقتی مخاطب به دسته‌ای از محصولات فکر می‌کند، اول به کدام برند فکر کند.', category: 'استراتژی برند', readTime: '۹', date: '۱۴۰۳/۱۲/۲۵', featured: false },
  { slug: 'brand-voice-tone', title: 'صدا و لحن برند: چطور شخصیت برند خود را در کلام نشان دهیم؟', excerpt: 'برند شما چطور حرف می‌زند؟ رسمی یا دوستانه؟ جدی یا شوخ‌طبع؟ راهنمای تعریف صدا و لحن برند.', category: 'برندینگ', readTime: '۷', date: '۱۴۰۳/۱۲/۱۸', featured: false },
  { slug: 'brandbook-guide', title: 'برندبوک چیست؟ راهنمای کامل ساخت مستندات هویت برند', excerpt: 'برندبوک کتاب قانون اساسی برند شماست. چه چیزهایی باید در آن باشد و چطور آن را بسازیم؟', category: 'هویت بصری', readTime: '۱۳', date: '۱۴۰۳/۱۲/۱۰', featured: false },
  { slug: 'rebranding-when-how', title: 'ریبرندینگ: چه زمانی و چطور برند خود را بازطراحی کنیم؟', excerpt: 'آیا برند شما نیاز به ریبرندینگ دارد؟ علائم هشداردهنده، مراحل اجرا و نمونه‌های موفق ریبرندینگ در ایران.', category: 'برندینگ', readTime: '۱۰', date: '۱۴۰۳/۱۱/۲۸', featured: false },
  { slug: 'color-psychology-branding', title: 'روانشناسی رنگ در برندینگ: چطور رنگ مناسب برند خود را انتخاب کنیم؟', excerpt: 'رنگ قدرتمندترین ابزار بصری برند است. قرمز، آبی، سبز — هر رنگ چه پیامی می‌دهد؟', category: 'هویت بصری', readTime: '۸', date: '۱۴۰۳/۱۱/۱۵', featured: false },
  { slug: 'personal-branding', title: 'برند شخصی: چطور خودتان را به عنوان یک برند حرفه‌ای معرفی کنید؟', excerpt: 'در عصر شبکه‌های اجتماعی، هر فردی یک برند است. راهنمای ساخت برند شخصی قوی.', category: 'برندینگ', readTime: '۹', date: '۱۴۰۳/۱۱/۰۵', featured: false },
  { slug: 'startup-branding', title: 'برندینگ استارتاپ: چطور با بودجه محدود برند قوی بسازیم؟', excerpt: 'استارتاپ‌ها بودجه محدود دارند اما نیاز به برند قوی دارند. اولویت‌بندی درست و مراحل صرفه‌جویانه.', category: 'استراتژی برند', readTime: '۱۱', date: '۱۴۰۳/۱۰/۲۵', featured: false },
]

const catColor: Record<string,string> = { 'برندینگ':'#4A8C7C','طراحی لوگو':'#818CF8','هویت بصری':'#F472B6','استراتژی برند':'#FBBF24','هوش مصنوعی':'#38BDF8' }
const catBg: Record<string,string> = { 'برندینگ':'rgba(74,140,124,.12)','طراحی لوگو':'rgba(99,102,241,.12)','هویت بصری':'rgba(236,72,153,.1)','استراتژی برند':'rgba(245,158,11,.1)','هوش مصنوعی':'rgba(14,165,233,.1)' }

function ArticleIcon({ color }: { color: string }) {
  return (
    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}18`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" opacity=".7">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    </div>
  )
}

function FeaturedCard({ a, large }: { a: typeof articles[0]; large?: boolean }) {
  const [h, setH] = useState(false)
  const color = catColor[a.category] || '#4A8C7C'
  return (
    <Link href={`/magazine/${a.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          height: '100%', display: 'flex', flexDirection: 'column',
          background: h ? 'var(--c-surface)' : 'var(--c-surface)',
          border: `1px solid ${h ? color + '50' : 'var(--c-border)'}`,
          borderRadius: 20, overflow: 'hidden',
          transform: h ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: h ? `0 20px 50px rgba(0,0,0,.4), 0 0 0 1px ${color}25` : 'none',
          transition: 'all .4s cubic-bezier(.16,1,.3,1)',
        }}
      >

        <div style={{ height: 3, background: `linear-gradient(to right, ${color}, ${color}60)`, opacity: h ? 1 : 0.4, transition: 'opacity .3s ease' }} />

        <div style={{ background: `linear-gradient(135deg, var(--c-bg-rgb, 15, 20, 18) 0%, ${color}15 100%)`, height: large ? 220 : 140, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
          <ArticleIcon color={color} />
          <div style={{ position: 'absolute', top: 12, right: 12 }}>
            <span style={{ fontSize: '.58rem', fontWeight: 700, background: catBg[a.category], color, borderRadius: 100, padding: '.2rem .65rem', border: `1px solid ${color}30` }}>{a.category}</span>
          </div>
        </div>

        <div style={{ padding: large ? '1.75rem' : '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          <h3 style={{ fontSize: large ? '1.15rem' : '.92rem', fontWeight: 800, color: 'var(--c-text)', lineHeight: 1.5, letterSpacing: '-.02em', margin: 0 }}>{a.title}</h3>
          {large && <p style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.8, margin: 0 }}>{a.excerpt}</p>}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '.75rem', borderTop: `1px solid rgba(255,255,255,.05)` }}>
            <span style={{ fontSize: '.62rem', color: 'var(--c-text-light)' }}>{a.readTime} دقیقه · {a.date}</span>
            <span style={{ fontSize: '.7rem', fontWeight: 600, color, display: 'flex', alignItems: 'center', gap: '.3rem', opacity: h ? 1 : 0.6, transition: 'opacity .3s' }}>
              ادامه مطلب
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function ArticleCard({ a }: { a: typeof articles[0] }) {
  const [h, setH] = useState(false)
  const color = catColor[a.category] || '#4A8C7C'
  return (
    <Link href={`/magazine/${a.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          display: 'flex', gap: '1rem', padding: '1.25rem',
          background: h ? 'var(--c-surface)' : 'var(--c-surface)',
          border: `1px solid ${h ? color + '40' : 'var(--c-border)'}`,
          borderRadius: 16, borderRight: `3px solid ${h ? color : color + '40'}`,
          transform: h ? 'translateX(-3px)' : 'translateX(0)',
          transition: 'all .3s cubic-bezier(.16,1,.3,1)',
        }}
      >
        <ArticleIcon color={color} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem' }}>
            <span style={{ fontSize: '.58rem', fontWeight: 700, color, background: catBg[a.category], borderRadius: 100, padding: '.15rem .55rem' }}>{a.category}</span>
            <span style={{ fontSize: '.58rem', color: 'var(--c-text-light)' }}>{a.readTime} دقیقه</span>
          </div>
          <div style={{ fontSize: '.88rem', fontWeight: 700, color: h ? 'white' : 'rgba(255,255,255,.8)', lineHeight: 1.5, letterSpacing: '-.01em', transition: 'color .3s' }}>{a.title}</div>
          <div style={{ fontSize: '.74rem', color: 'var(--c-text-light)', marginTop: '.35rem' }}>{a.date}</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" style={{ flexShrink: 0, marginTop: 4, opacity: h ? 1 : 0, transition: 'opacity .3s' }}><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      </div>
    </Link>
  )
}

export default function MagazinePage() {
  const [activecat, setActivecat] = useState('همه')
  const categories = ['همه', 'برندینگ', 'طراحی لوگو', 'هویت بصری', 'استراتژی برند', 'هوش مصنوعی']
  const featured = articles.filter(a => a.featured)
  const filtered = activecat === 'همه' ? articles.filter(a => !a.featured) : articles.filter(a => a.category === activecat)

  return (
    <main style={{ background: 'var(--c-bg)', color: 'var(--c-text)', minHeight: '100vh', paddingTop: 80 }}>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>

      <section style={{ padding: '5rem 1.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(74,140,124,.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(74,140,124,.2) 30%, rgba(74,140,124,.2) 70%, transparent)' }} />

        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ height: 1, width: 40, background: 'rgba(74,140,124,.3)' }} />
            <span style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.2em', color: 'rgba(74,140,124,.6)', textTransform: 'uppercase' as const }}>ROS MAGAZINE</span>
            <div style={{ height: 1, width: 40, background: 'rgba(74,140,124,.3)' }} />
          </div>

          <h1 style={{ fontSize: 'clamp(3rem,8vw,5.5rem)', fontWeight: 900, letterSpacing: '-.06em', lineHeight: .95, marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--c-text)' }}>مجله </span>
            <span style={{ background: 'linear-gradient(135deg,#7dcfbe 0%,#4A8C7C 50%,#2E6B5E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 40px rgba(74,140,124,.5))' }}>رُس</span>
          </h1>

          <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.35)', lineHeight: 1.9, maxWidth: 480, margin: '0 auto 2rem' }}>
            مقالات تخصصی برندینگ، طراحی لوگو، هویت بصری و استراتژی برند — به زبان ساده، با عمق حرفه‌ای
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' as const }}>
            {[`${articles.length} مقاله تخصصی`, 'به‌روزرسانی هفتگی', 'کاملاً رایگان'].map((t, i) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontSize: '.72rem', color: 'var(--c-text-light)' }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#4A8C7C', display: 'inline-block' }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 1.5rem 8rem' }}>

        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: 3, height: 18, background: 'linear-gradient(to bottom, #7dcfbe, #2E6B5E)', borderRadius: 2 }} />
            <h2 style={{ fontSize: '.9rem', fontWeight: 700, color: 'var(--c-text)', margin: 0, letterSpacing: '-.01em' }}>مقالات ویژه</h2>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.05)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', height: 'auto' }}>
            <div style={{ gridRow: '1 / 3' }}><FeaturedCard a={featured[0]} large /></div>
            <FeaturedCard a={featured[1]} />
            <FeaturedCard a={featured[2]} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {/* extra info cards */}
              {[{ icon: '✦', label: 'مقاله جدید', val: 'هر هفته' }, { icon: '◈', label: 'موضوعات تخصصی', val: '۵ دسته‌بندی' }].map(item => (
                <div key={item.label} style={{ background: 'rgba(74,140,124,.04)', border: '1px solid rgba(74,140,124,.12)', borderRadius: 16, display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem' }}>
                  <span style={{ fontSize: '1.2rem', color: 'rgba(74,140,124,.5)' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--c-text)' }}>{item.val}</div>
                    <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.3)', marginTop: '.1rem' }}>{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap' as const, gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 3, height: 18, background: 'linear-gradient(to bottom, #7dcfbe, #2E6B5E)', borderRadius: 2 }} />
              <h2 style={{ fontSize: '.9rem', fontWeight: 700, color: 'var(--c-text)', margin: 0 }}>همه مقالات</h2>
            </div>
            {/* category filter */}
            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' as const }}>
              {categories.map(cat => {
                const isActive = activecat === cat
                const color = catColor[cat]
                return (
                  <button key={cat} onClick={() => setActivecat(cat)} style={{
                    fontSize: '.65rem', fontWeight: 600, borderRadius: 100, padding: '.3rem .8rem', cursor: 'pointer',
                    background: isActive ? (color ? catBg[cat] : 'rgba(74,140,124,.15)') : 'rgba(255,255,255,.04)',
                    border: `1px solid ${isActive ? (color || '#4A8C7C') + '50' : 'var(--c-border)'}`,
                    color: isActive ? (color || '#4A8C7C') : 'var(--c-text-muted)',
                    transition: 'all .25s ease',
                  }}>{cat}</button>
                )
              })}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
            {filtered.map(a => <ArticleCard key={a.slug} a={a} />)}
          </div>
        </div>

        <div style={{ marginTop: '5rem', padding: '3rem', background: 'linear-gradient(135deg, rgba(46,107,94,.12), rgba(74,140,124,.06))', border: '1px solid rgba(74,140,124,.2)', borderRadius: 24, textAlign: 'center' as const }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 900, letterSpacing: '-.03em', color: 'var(--c-text)', marginBottom: '.6rem' }}>برند خود را با رُس بسازید</div>
          <div style={{ fontSize: '.87rem', color: 'var(--c-text-muted)', marginBottom: '1.75rem', lineHeight: 1.8 }}>از مشاوره رایگان تا تحویل برندبوک کامل — همراه شما هستیم</div>
          <Link href="/contact/request-consultation" style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', background: '#4A8C7C', color: 'var(--c-text)', borderRadius: 12, padding: '.85rem 2rem', fontSize: '.88rem', fontWeight: 700, textDecoration: 'none' }}>
            مشاوره رایگان ←
          </Link>
        </div>
      </div>
    </main>
  )
}
