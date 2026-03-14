'use client'

import { useState } from 'react'
import SectionBadge from '../ui/SectionBadge'
import ScrollReveal from '../ui/ScrollReveal'
import Link from 'next/link'

const clients = [
  { name: 'راهکار صنعت', logo: 'rahkarsanat.png', url: 'https://rahkarsanat.ir' },
  { name: 'آبرسو', logo: 'abrso.png', url: 'https://abrso.ir' },
  { name: 'آوینوکس', logo: 'avinox.png', url: 'https://avinox.ir' },
  { name: 'آوا پرداز', logo: 'avapardaz.svg', url: 'https://avapardaz.ir' },
  { name: 'موبیت', logo: 'mobit.svg', url: 'https://mobit.ir' },
  { name: 'نیروبار', logo: 'niroobar.png', url: 'https://niroobar.com' },
  { name: 'پی‌بای', logo: 'paybay.svg', url: 'https://paybuy.ir' },
  { name: 'ایزی تریپ', logo: 'easytrip.png', url: 'https://ezztrip.com' },
  { name: 'زودکس', logo: 'zoodex.svg', url: 'https://zoodex.ir' },
]

const projects = [
  {
    title: 'راهکار صنعت',
    category: 'اینترنت اشیا (IoT)',
    tags: ['هویت بصری', 'طراحی لوگو', 'ست اداری', 'بروشور'],
    result: 'هویت بصری یکپارچه برای ورود به بازار B2B',
    href: '/portfolio/rahkar-sanat',
    img: '/portfolio/rahkar-sanat/cover.jpg',
    accent: '#003d71',
  },
  {
    title: 'زودکس',
    category: 'برندینگ دیجیتال',
    tags: ['موکاپ', 'هویت بصری', 'طراحی محیطی'],
    result: 'اجرای هویت برند در فضای واقعی و دیجیتال',
    href: '/portfolio/zoodex-mockup',
    img: '/portfolio/zoodex-mockup/1.jpg',
    accent: '#1a3a6b',
  },
]

function TrustedByLabel() {
  const [h, setH] = useState(false)
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display:'flex', alignItems:'center', gap:'.7rem', cursor:'default', position:'relative' }}>
      <div style={{ width:5, height:5, borderRadius:'50%', background: h ? '#4A8C7C' : 'rgba(74,140,124,.6)', boxShadow: h ? '0 0 14px rgba(74,140,124,.9)' : 'none', transition:'all .4s ease' }} />
      <span style={{ fontSize:'.58rem', fontWeight:700, letterSpacing: h ? '.28em' : '.2em', textTransform:'uppercase' as const, whiteSpace:'nowrap' as const, WebkitBackgroundClip: h ? 'text' : 'unset', WebkitTextFillColor: h ? 'transparent' : 'rgba(255,255,255,.22)', background: h ? 'linear-gradient(90deg,rgba(255,255,255,.6),rgba(74,140,124,.9),rgba(255,255,255,.6))' : 'none', color: h ? 'transparent' : 'rgba(255,255,255,.22)', transition:'all .4s ease' }}>
        Trusted By · سازمان‌های همکار
      </span>
      <div style={{ width:5, height:5, borderRadius:'50%', background: h ? '#4A8C7C' : 'rgba(74,140,124,.6)', boxShadow: h ? '0 0 14px rgba(74,140,124,.9)' : 'none', transition:'all .4s ease' }} />
      <div style={{ position:'absolute', bottom:-6, left:0, right:0, height:1, background:'linear-gradient(to right,transparent,rgba(74,140,124,.6),transparent)', transform: h ? 'scaleX(1)' : 'scaleX(0)', transition:'transform .4s ease' }} />
    </div>
  )
}

function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const [h, setH] = useState(false)
  return (
    <Link href={p.href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display:'block', borderRadius:20, overflow:'hidden', background:'#111210', border: h ? `1px solid ${p.accent}55` : '1px solid rgba(255,255,255,.07)', textDecoration:'none', transform: h ? 'translateY(-8px)' : 'translateY(0)', boxShadow: h ? `0 24px 60px ${p.accent}44` : '0 2px 12px rgba(0,0,0,.3)', transition:'all .35s cubic-bezier(.4,0,.2,1)' }}>
      <div style={{ position:'relative', height:220, overflow:'hidden' }}>
        <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transform: h ? 'scale(1.06)' : 'scale(1)', transition:'transform .5s ease', filter: h ? 'brightness(1)' : 'brightness(.85)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 60%)' }} />
        <div style={{ position:'absolute', top:'1rem', right:'1rem', width:32, height:32, borderRadius:8, background:'rgba(0,0,0,.5)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,.1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.68rem', fontWeight:700, color:'rgba(255,255,255,.6)' }}>0{index+1}</div>
        <div style={{ position:'absolute', bottom:'.85rem', right:'.85rem', display:'flex', flexWrap:'wrap', gap:'.35rem' }}>
          {p.tags.map(tag => <span key={tag} style={{ fontSize:'.65rem', padding:'.18rem .55rem', borderRadius:100, color:'rgba(255,255,255,.9)', fontWeight:600, background:'rgba(0,0,0,.45)', backdropFilter:'blur(6px)', border:'1px solid rgba(255,255,255,.12)' }}>{tag}</span>)}
        </div>
      </div>
      <div style={{ padding:'1.25rem 1.35rem 1.4rem' }}>
        <div style={{ fontSize:'.7rem', color:p.accent, fontWeight:700, marginBottom:'.35rem' }}>{p.category}</div>
        <div style={{ fontSize:'1rem', fontWeight:700, color:'white', marginBottom:'.5rem' }}>{p.title}</div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:'.75rem', borderTop:'1px solid rgba(255,255,255,.06)' }}>
          <span style={{ fontSize:'.78rem', color:'rgba(255,255,255,.45)', lineHeight:1.5 }}>{p.result}</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={h ? p.accent : 'rgba(255,255,255,.25)'} strokeWidth="2" style={{ flexShrink:0, marginRight:'.5rem', transform: h ? 'translateX(-3px)' : 'none', transition:'all .25s ease' }}><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </div>
      </div>
    </Link>
  )
}

function ConnectedBadge() {
  const [h, setH] = useState(false)
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display:'inline-flex', alignItems:'center', gap:0,
        marginBottom:'.75rem', borderRadius:100, overflow:'hidden',
        border:`1px solid ${h ? 'rgba(74,140,124,.45)' : 'rgba(74,140,124,.2)'}`,
        background: h ? 'rgba(74,140,124,.1)' : 'rgba(74,140,124,.04)',
        boxShadow: h ? '0 0 18px rgba(74,140,124,.15)' : 'none',
        transform: h ? 'translateY(-1px)' : 'translateY(0)',
        transition:'all .35s cubic-bezier(.16,1,.3,1)',
        cursor:'default',
      }}
    >
      {/* سازمان‌های همکار — راست */}
      <div style={{ display:'flex', alignItems:'center', gap:'.4rem', padding:'.3rem .85rem', borderLeft:'1px solid rgba(74,140,124,.15)' }}>
        <span style={{ width:5, height:5, borderRadius:'50%', background: h ? '#4A8C7C' : 'rgba(74,140,124,.6)', boxShadow: h ? '0 0 8px rgba(74,140,124,.9)' : 'none', display:'inline-block', transition:'all .3s ease' }} />
        <span style={{ fontSize:'.6rem', fontWeight:700, letterSpacing:'.14em', color: h ? 'rgba(74,140,124,.95)' : 'rgba(74,140,124,.7)', textTransform:'uppercase' as const, transition:'color .3s ease', whiteSpace:'nowrap' as const }}>سازمان‌های همکار</span>
      </div>
      {/* END TO END — چپ */}
      <div style={{ display:'flex', alignItems:'center', gap:'.4rem', padding:'.3rem .85rem' }}>
        <span style={{ width:5, height:5, borderRadius:'50%', background: h ? '#4A8C7C' : 'rgba(74,140,124,.5)', boxShadow: h ? '0 0 8px rgba(74,140,124,.9)' : 'none', display:'inline-block', transition:'all .3s ease' }} />
        <span style={{ fontSize:'.6rem', fontWeight:700, letterSpacing:'.15em', color: h ? 'rgba(74,140,124,.95)' : 'rgba(74,140,124,.7)', textTransform:'uppercase' as const, transition:'color .3s ease', whiteSpace:'nowrap' as const }}>END TO END</span>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  return (
    <ScrollReveal>
      <section style={{ background:'linear-gradient(180deg,#141412 0%,#0f0e0d 100%)', padding:'6rem 0', borderTop:'1px solid rgba(255,255,255,.05)', position:'relative', overflow:'hidden' }}>
        <style>{`
          @keyframes mqScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          @keyframes dotPulse { 0%,100%{opacity:.4} 50%{opacity:1} }
          .mq-outer { overflow:hidden; position:relative; direction:ltr; }
          .mq-track { display:flex; width:max-content; animation:mqScroll 38s linear infinite; align-items:center; gap:0; }
          .mq-track:hover { animation-play-state:paused; }
          .mq-item { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:.6rem; padding:0 2.75rem; height:88px; flex-shrink:0; text-decoration:none; position:relative; border-right:1px solid rgba(255,255,255,.06); transition:background .3s ease; }
          .mq-item:hover { background:rgba(255,255,255,.03); }
          .mq-img-box { width:130px; height:44px; display:flex; align-items:center; justify-content:center; }
          .mq-item img { width:100%; height:100%; object-fit:contain; filter:brightness(1) saturate(0) contrast(0.5) invert(0.7); transition:all .4s ease; }
          .mq-item:hover img { filter:brightness(1) saturate(1) contrast(1) invert(0); transform:scale(1.06); }
          .mq-item span { font-size:.6rem; font-weight:500; letter-spacing:.05em; color:rgba(255,255,255,.2); transition:color .3s ease; white-space:nowrap; }
          .mq-item:hover span { color:rgba(255,255,255,.55); }
        `}</style>

        <div style={{ position:'absolute', top:'10%', left:'50%', transform:'translateX(-50%)', width:600, height:400, background:'radial-gradient(ellipse,rgba(46,107,94,.06) 0%,transparent 70%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 1.5rem' }}>

          {/* 1. clients marquee */}
          <div style={{ marginBottom:'3.5rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'1.5rem', marginBottom:'2rem' }}>
              <div style={{ height:1, flex:1, background:'linear-gradient(to left,rgba(74,140,124,.12),transparent)' }} />
              <TrustedByLabel />
              <div style={{ height:1, flex:1, background:'linear-gradient(to right,rgba(74,140,124,.12),transparent)' }} />
            </div>
            <div className="mq-outer">
              <div style={{ position:'absolute', right:0, top:0, bottom:0, width:180, background:'linear-gradient(to left,#141412,transparent)', zIndex:2, pointerEvents:'none' }} />
              <div style={{ position:'absolute', left:0, top:0, bottom:0, width:180, background:'linear-gradient(to right,#141412,transparent)', zIndex:2, pointerEvents:'none' }} />
              <div className="mq-track">
                {[...clients, ...clients].map((c, i) => (
                  <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" className="mq-item">
                    <div className="mq-img-box"><img src={`/clients/${c.logo}`} alt={c.name} /></div>
                    <span>{c.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 2. header */}
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'2.5rem', flexWrap:'wrap', gap:'1.5rem' }}>
            <div>
              <ConnectedBadge />
              <h2 style={{ fontSize:'clamp(1.3rem,2.5vw,2rem)', fontWeight:800, color:'white', letterSpacing:'-.03em', lineHeight:1.3, margin:0 }}>
                مدیریت برند<br />
                <span style={{ color:'var(--c-primary)', marginTop:'.3rem', display:'block' }}>از استراتژی تا اجرا</span>
              </h2>
            </div>
            <Link href="/portfolio"
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='var(--c-primary)'; el.style.color='white'; el.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='transparent'; el.style.color='var(--c-primary)'; el.style.transform='translateY(0)' }}
              style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', fontSize:'.85rem', fontWeight:600, color:'var(--c-primary)', border:'1.5px solid var(--c-primary)', borderRadius:10, padding:'.6rem 1.25rem', transition:'all .25s ease' }}>
              همه پروژه‌ها ←
            </Link>
          </div>

          {/* 3. project cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,380px))', gap:'1.5rem', justifyContent:'center' }}>
            {projects.map((p, i) => <ProjectCard key={p.href} p={p} index={i} />)}
          </div>

        </div>
      </section>
    </ScrollReveal>
  )
}
