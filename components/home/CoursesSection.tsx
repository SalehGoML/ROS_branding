'use client'
import { useState } from 'react'

const courses = [
  {
    slug: 'bootcamp-graphic-1403',
    title: 'بوت‌کمپ گرافیک ۱۴۰۳',
    desc: 'دوره فشرده طراحی گرافیک از مقدماتی تا حرفه‌ای',
    tag: 'گرافیک',
    cover: 'بوتکمپ دوره گرافیک-وبسایت copy.jpg',
    images: ['بوتکمپ دوره گرافیک-وبسایت copy.jpg','دوره گرافیک آوینوکس - 1 copy.jpg','دوره گرافیک آوینوکس - ایلاستریتور copy.jpg','دوره گرافیک آوینوکس - رزومه نویسی copy.jpg','دوره گرافیک آوینوکس - فتوشاپ copy.jpg','دوره گرافیک آوینوکس - موقعیت های شغلی copy.jpg'],
  },
  {
    slug: 'design-process',
    title: 'فرایند طراحی',
    desc: 'آموزش سواد دیزاین و فرایند حرفه‌ای طراحی',
    tag: 'طراحی',
    cover: 'پوستر دوره فرآیند طراحی copy.jpg',
    images: ['پوستر دوره فرآیند طراحی copy.jpg','پوستر سواد دیزاین copy.jpg','پوستر سواد دیزاین-2 copy.jpg','پوستر سواد دیزاین-3 copy.jpg','20250423165127_IMG_2065.JPG','20250423165209_IMG_2068.JPG','20250423165559_IMG_2073.JPG','20250423172946_IMG_2139.JPG','نغمه غلامحسینی.jpg'],
  },
  {
    slug: 'ai-branding',
    title: 'هوش مصنوعی در برندسازی',
    desc: 'استفاده از ابزارهای AI در فرایند برندینگ',
    tag: 'هوش مصنوعی',
    cover: 'دوره هوش مصنوعی-آکادمی رس copy.jpg',
    images: ['دوره هوش مصنوعی-آکادمی رس copy.jpg','IMG_6745.JPG','IMG_7712.jpg','IMG_7714.jpg','IMG_7721.jpg'],
  },
]

function imgUrl(slug: string, name: string) {
  return `/courses/${slug}/${encodeURIComponent(name)}`
}

function CourseCard({ c, onClick }: { c: typeof courses[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', borderRadius: 20, overflow: 'hidden',
        cursor: 'pointer', padding: 0, border: 'none',
        width: '100%', aspectRatio: '3/4',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 32px 64px rgba(0,0,0,.6), 0 0 0 1px rgba(74,140,124,.4)'
          : '0 8px 32px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,.06)',
        transition: 'all .5s cubic-bezier(.16,1,.3,1)',
      }}
    >
      {/* bg */}
      <img src={imgUrl(c.slug, c.cover)} alt={c.title}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform .7s cubic-bezier(.16,1,.3,1)',
        }}
      />

      {/* gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(4,12,10,.98) 0%, rgba(4,12,10,.7) 45%, rgba(4,12,10,.2) 100%)'
          : 'linear-gradient(to top, rgba(4,12,10,.95) 0%, rgba(4,12,10,.5) 50%, rgba(4,12,10,.1) 100%)',
        transition: 'background .4s ease',
      }} />

      {/* top: badges */}
      <div style={{ position: 'absolute', top: 16, right: 16, left: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '.35rem',
          background: 'rgba(120,80,0,.75)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(245,158,11,.45)', borderRadius: 100,
          padding: '.22rem .65rem',
        }}>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#F59E0B', display: 'inline-block', boxShadow: '0 0 5px #F59E0B' }} />
          <span style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.08em', color: 'rgba(255,255,255,.9)' }}>برگزار شده</span>
        </div>
        <div style={{
          background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,.08)', borderRadius: 100,
          padding: '.22rem .65rem', fontSize: '.58rem', fontWeight: 600, color: 'rgba(255,255,255,.5)',
        }}>
          {c.tag}
        </div>
      </div>

      {/* bottom */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, left: 0, padding: '1.5rem' }}>
        <div style={{ fontSize: '.6rem', fontWeight: 600, letterSpacing: '.12em', color: 'rgba(74,140,124,.65)', marginBottom: '.45rem' }}>
          {c.images.length} تصویر
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', lineHeight: 1.35, letterSpacing: '-.02em', marginBottom: '.6rem' }}>
          {c.title}
        </div>
        <div style={{
          fontSize: '.74rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.65,
          maxHeight: hovered ? '4rem' : '0',
          overflow: 'hidden',
          opacity: hovered ? 1 : 0,
          marginBottom: hovered ? '.9rem' : 0,
          transition: 'max-height .4s ease, opacity .35s ease, margin .4s ease',
        }}>
          {c.desc}
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '.4rem',
          background: hovered ? 'rgba(74,140,124,.2)' : 'rgba(255,255,255,.06)',
          border: `1px solid ${hovered ? 'rgba(74,140,124,.5)' : 'rgba(255,255,255,.1)'}`,
          borderRadius: 100, padding: '.3rem .8rem',
          transition: 'all .35s ease',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={hovered ? '#4A8C7C' : 'rgba(255,255,255,.35)'} strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          <span style={{ fontSize: '.67rem', fontWeight: 700, color: hovered ? 'rgba(74,140,124,.95)' : 'rgba(255,255,255,.35)', transition: 'color .35s ease' }}>مشاهده دوره</span>
        </div>
      </div>
    </button>
  )
}

export default function CoursesSection() {
  const [modal, setModal] = useState<null | typeof courses[0]>(null)
  const [activeImg, setActiveImg] = useState(0)

  function openModal(c: typeof courses[0]) { setModal(c); setActiveImg(0); document.body.style.overflow = 'hidden' }
  function closeModal() { setModal(null); document.body.style.overflow = '' }

  return (
    <section style={{ background: '#0C0F0E', padding: '7rem 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* header */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,.05)' }} />
            <span style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '.2em', color: 'rgba(74,140,124,.5)', textTransform: 'uppercase' as const }}>ROS ACADEMY</span>
            <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,.05)' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem,5vw,4.2rem)', fontWeight: 900, letterSpacing: '-.05em', lineHeight: 1.05, margin: 0 }}>
              <span style={{ color: 'white' }}>دوره‌های </span>
              <span style={{ background: 'linear-gradient(135deg,#7dcfbe 0%,#4A8C7C 50%,#2E6B5E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 30px rgba(74,140,124,.4))' }}>آموزشی</span>
            </h2>
            <p style={{ fontSize: '.87rem', color: 'rgba(255,255,255,.28)', lineHeight: 1.8, maxWidth: 300, margin: 0 }}>
              دوره‌هایی که تاکنون توسط آژانس رُس برگزار شده‌اند
            </p>
          </div>
        </div>

        {/* grid — 3 equal cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {courses.map(c => <CourseCard key={c.slug} c={c} onClick={() => openModal(c)} />)}
        </div>
      </div>

      {/* modal */}
      {modal && (
        <div onClick={closeModal} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.93)', backdropFilter: 'blur(20px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#141412', border: '1px solid rgba(255,255,255,.08)', borderRadius: 24, width: '100%', maxWidth: 920, maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white' }}>{modal.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginTop: '.3rem' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4A8C7C', boxShadow: '0 0 6px rgba(74,140,124,1)', display: 'inline-block' }} />
                  <span style={{ fontSize: '.65rem', fontWeight: 700, color: 'rgba(74,140,124,.8)' }}>برگزار شده</span>
                  <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.2)' }}>·</span>
                  <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.3)' }}>{modal.images.length} تصویر</span>
                </div>
              </div>
              <button onClick={closeModal} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '.4rem .75rem', color: 'rgba(255,255,255,.5)', cursor: 'pointer', fontSize: '.85rem' }}>✕</button>
            </div>
            <div style={{ flex: 1, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 420, overflow: 'hidden' }}>
              <img src={imgUrl(modal.slug, modal.images[activeImg])} alt="" style={{ maxWidth: '100%', maxHeight: '58vh', objectFit: 'contain' }} />
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
