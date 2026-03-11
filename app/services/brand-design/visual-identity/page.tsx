import Link from 'next/link'

export default function Page() {
  return (
    <main style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '7rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.25rem 5rem' }}>

        <Link href="/services" style={{
          display: 'inline-flex', alignItems: 'center', gap: '.4rem',
          fontSize: '.8rem', color: 'var(--c-text-muted)',
          marginBottom: '2rem',
        }}>
          ← بازگشت به خدمات
        </Link>

        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700, letterSpacing: '-.03em',
            marginBottom: '1rem',
          }}>هویت بصری</h1>
          <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', lineHeight: 1.8, maxWidth: 600 }}>
            طراحی لوگو، پالت رنگ، تایپوگرافی و سیستم بصری یکپارچه.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem', marginBottom: '3rem',
        }}>
          
          <div style={{
            padding: '1.5rem',
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 12,
          }}>
            <div style={{ fontSize: '.7rem', color: 'var(--c-primary)', fontWeight: 600, marginBottom: '.75rem' }}>۰1</div>
            <div style={{ fontSize: '.95rem', fontWeight: 600, marginBottom: '.5rem' }}>طراحی لوگو</div>
            <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>خلق نماد بصری اصلی برند با تمام واریانت‌های کاربردی.</div>
          </div>
          <div style={{
            padding: '1.5rem',
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 12,
          }}>
            <div style={{ fontSize: '.7rem', color: 'var(--c-primary)', fontWeight: 600, marginBottom: '.75rem' }}>۰2</div>
            <div style={{ fontSize: '.95rem', fontWeight: 600, marginBottom: '.5rem' }}>پالت رنگ</div>
            <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>انتخاب رنگ‌های اصلی و فرعی با مستندات روانشناسی رنگ.</div>
          </div>
          <div style={{
            padding: '1.5rem',
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 12,
          }}>
            <div style={{ fontSize: '.7rem', color: 'var(--c-primary)', fontWeight: 600, marginBottom: '.75rem' }}>۰3</div>
            <div style={{ fontSize: '.95rem', fontWeight: 600, marginBottom: '.5rem' }}>تایپوگرافی</div>
            <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>انتخاب فونت‌های اصلی و فرعی برای استفاده در تمام رسانه‌ها.</div>
          </div>
          <div style={{
            padding: '1.5rem',
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 12,
          }}>
            <div style={{ fontSize: '.7rem', color: 'var(--c-primary)', fontWeight: 600, marginBottom: '.75rem' }}>۰4</div>
            <div style={{ fontSize: '.95rem', fontWeight: 600, marginBottom: '.5rem' }}>سیستم بصری</div>
            <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>الگوها، آیکون‌ها و عناصر گرافیکی یکپارچه.</div>
          </div>
        </div>

        <div style={{
          padding: '2rem',
          background: 'var(--c-primary-bg)',
          border: '1px solid rgba(46,107,94,.2)',
          borderRadius: 16,
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        }}>
          <div>
            <div style={{ fontWeight: 600, marginBottom: '.3rem' }}>آماده شروع هستید؟</div>
            <div style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>با یک جلسه رایگان شروع کنید</div>
          </div>
          <Link href="/contact/request-consultation" style={{
            padding: '.75rem 1.75rem',
            background: 'var(--c-primary)', color: 'white',
            borderRadius: 8, fontSize: '.9rem', fontWeight: 700,
          }}>مشاوره رایگان ←</Link>
        </div>

      </div>
    </main>
  )
}
