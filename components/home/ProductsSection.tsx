'use client'
import { useState } from 'react'

const products = [
  {
    slug: 'branding-concepts',
    title: 'مفاهیم کلیدی برندینگ',
    desc: 'اصول استراتژیک برندینگ در قالب درس‌های کوتاه و تأثیرگذار',
    cover: 'جایگاه‌یابی برند copy.jpg',
    images: ['جایگاه‌یابی برند copy.jpg','استراتژی یعنی نه گفتن copy.jpg','طراحی بدون استراتژی بی‌اثر است copy.jpg','لحن برند copy.jpg','چرا برند برای همه نباشد؟ copy.jpg','یکپارچگی در هویت برند copy.jpg'],
  },
  {
    slug: 'wisdom-lessons',
    title: 'درس‌های خرد',
    desc: 'تحلیل جملات کلیدی از متفکران برندینگ و طراحی',
    cover: 'معنا در برند copy.jpg',
    images: ['معنا در برند copy.jpg','اول گوش بده، بعد حرف بزن copy.jpg','سکوت در طراحی copy.jpg','مخاطب، برند را از حس تجربه می‌سازد، نه تبلیغات copy.jpg','ساده بودن، تصمیم شجاعانه است..jpg','طراحی یعنی همه‌چیز..jpg'],
  },
  {
    slug: 'brand-analysis',
    title: 'تحلیل نقل‌قول',
    desc: 'مفاهیم پایه‌ای برندینگ به زبان ساده و بصری',
    cover: 'برند = قول انجام‌شده copy.jpg',
    images: ['برند = قول انجام‌شده copy.jpg','سادگی در IKEA copy.jpg'],
  },
  {
    slug: 'quote-analysis',
    title: 'تحلیل برند',
    desc: 'بررسی عمیق برندهای جهانی و درس‌های کاربردی برای بازار ایران',
    cover: 'Nike و انگیزش copy.jpg',
    images: ['Nike و انگیزش copy.jpg','Apple و مینیمالیسم copy.jpg','Airbnb و حس تعلق copy.jpg','Dove و جسارت پیام انسانی copy.jpg','Patagonia و صداقت زیست‌محیطی copy.jpg'],
  },
]

function imgUrl(slug: string, name: string) {
  return `/products/${slug}/${encodeURIComponent(name)}`
}

function ProductCard({ p, onClick }: { p: typeof products[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,.02)',
        border: `1px solid ${hovered ? 'rgba(74,140,124,.5)' : 'rgba(255,255,255,.07)'}`,
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'pointer',
        textAlign: 'right',
        padding: 0,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(46,107,94,.25)' : '0 4px 20px rgba(0,0,0,.2)',
        transition: 'all .4s cubic-bezier(.16,1,.3,1)',
      }}
    >
      {/* image */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '72%', overflow: 'hidden', background: '#0a0a0a' }}>
        <img
          src={imgUrl(p.slug, p.cover)}
          alt={p.title}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform .6s cubic-bezier(.16,1,.3,1)',
            filter: hovered ? 'brightness(.45)' : 'brightness(.75)',
          }}
        />

        {/* hover overlay text */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all .35s ease',
        }}>
          <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'white', marginBottom: '.5rem', textShadow: '0 2px 12px rgba(0,0,0,.5)' }}>{p.title}</div>
          <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.7, textAlign: 'center' }}>{p.desc}</div>
          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '.4rem', background: 'rgba(74,140,124,.25)', border: '1px solid rgba(74,140,124,.5)', borderRadius: 100, padding: '.35rem .9rem' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(74,140,124,1)" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <span style={{ fontSize: '.7rem', fontWeight: 700, color: 'rgba(74,140,124,.95)' }}>مشاهده محتوا</span>
          </div>
        </div>

        {/* count badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: 'rgba(0,0,0,.65)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,.1)', borderRadius: 100,
          padding: '.2rem .65rem', fontSize: '.63rem', fontWeight: 700, color: 'rgba(255,255,255,.6)',
          opacity: hovered ? 0 : 1, transition: 'opacity .3s ease',
        }}>
          {p.images.length} تصویر
        </div>
      </div>

      {/* info (visible when not hovered) */}
      <div style={{
        padding: '1.25rem 1.4rem 1.4rem',
        opacity: hovered ? 0 : 1,
        transform: hovered ? 'translateY(4px)' : 'translateY(0)',
        transition: 'all .3s ease',
      }}>
        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '.4rem' }}>{p.title}</div>
        <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.32)', lineHeight: 1.7 }}>{p.desc}</div>
      </div>
    </button>
  )
}

export default function ProductsSection() {
  const [modal, setModal] = useState<null | typeof products[0]>(null)
  const [activeImg, setActiveImg] = useState(0)

  function openModal(p: typeof products[0]) {
    setModal(p); setActiveImg(0); document.body.style.overflow = 'hidden'
  }
  function closeModal() {
    setModal(null); document.body.style.overflow = ''
  }

  return (
    <section style={{ background: '#0f0f0d', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: '1rem' }}>
            <span style={{ color: 'white' }}>برندینگ از دیدگاه </span>
            <span style={{ background: 'linear-gradient(135deg,#7dcfbe 0%,#4A8C7C 40%,#2E6B5E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 24px rgba(74,140,124,.4))' }}>خرد</span>
          </h2>

          <p style={{ fontSize: '.92rem', color: 'rgba(255,255,255,.35)', maxWidth: 460, margin: '0 auto', lineHeight: 1.9 }}>
            برندینگ همراه با خرد، از خود میراثی جاودانه به جای بگذارید
          </p>
        </div>

        {/* divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem', maxWidth: 600, margin: '0 auto 3.5rem' }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(74,140,124,.25))' }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(74,140,124,.4)" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(74,140,124,.25))' }} />
        </div>

        {/* grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {products.map(p => <ProductCard key={p.slug} p={p} onClick={() => openModal(p)} />)}
        </div>
      </div>

      {/* modal */}
      {modal && (
        <div onClick={closeModal} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.92)', backdropFilter: 'blur(16px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#141412', border: '1px solid rgba(255,255,255,.08)', borderRadius: 24, width: '100%', maxWidth: 920, maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white' }}>{modal.title}</div>
                <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.3)', marginTop: '.2rem' }}>{modal.images.length} تصویر</div>
              </div>
              <button onClick={closeModal} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '.4rem .75rem', color: 'rgba(255,255,255,.5)', cursor: 'pointer', fontSize: '.85rem' }}>✕</button>
            </div>
            <div style={{ flex: 1, overflow: 'hidden', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 420 }}>
              <img src={imgUrl(modal.slug, modal.images[activeImg])} alt={modal.images[activeImg]} style={{ maxWidth: '100%', maxHeight: '58vh', objectFit: 'contain' }} />
            </div>
            {modal.images.length > 1 && (
              <div style={{ display: 'flex', gap: '.5rem', padding: '1rem 1.5rem', overflowX: 'auto', borderTop: '1px solid rgba(255,255,255,.06)' }}>
                {modal.images.map((img2, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} style={{ flexShrink: 0, width: 76, height: 52, borderRadius: 8, overflow: 'hidden', padding: 0, cursor: 'pointer', border: `2px solid ${activeImg === i ? '#4A8C7C' : 'transparent'}`, opacity: activeImg === i ? 1 : 0.4, transition: 'all .2s ease' }}>
                    <img src={imgUrl(modal.slug, img2)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
