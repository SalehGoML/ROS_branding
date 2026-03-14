'use client'
import { useState } from 'react'

const phases = [
  { num: '۰۰', en: 'Kickoff & Alignment', fa: 'آغاز و هم‌راستایی', milestone: 'Project Aligned', color: '#4A8C7C', outputs: ['Project Charter', 'برنامه تحقیق', 'لیست ورودی‌ها / داده‌های لازم'], desc: 'تعریف دقیق اهداف، محدوده پروژه و انتظارات مشترک با تیم مشتری.' },
  { num: '۰۱', en: 'Brand Diagnosis', fa: 'تشخیص برند', milestone: 'Diagnosis Approved', color: '#38BDF8', outputs: ['گزارش تشخیص', 'تحلیل رقبا / بنچمارک', 'نقشه تصمیم خرید'], desc: 'بررسی وضعیت فعلی برند، تحلیل رقبا و شناسایی فرصت‌های جایگاه‌یابی.' },
  { num: '۰۲', en: 'Brand Strategy & Architecture', fa: 'استراتژی و معماری برند', milestone: 'Strategy Approved', color: '#A78BFA', outputs: ['Brand Platform', 'Positioning', 'Messaging / RTB', 'معماری برند'], desc: 'تدوین پلتفرم برند، پیام‌های کلیدی و جایگاه رقابتی در بازار هدف.' },
  { num: '۰۳', en: 'Identity System', fa: 'سیستم هویت بصری', milestone: 'Identity System Approved', color: '#F472B6', outputs: ['هویت بصری', 'قالب‌های استاندارد (دیتاشیت / کاتالوگ)'], desc: 'طراحی سیستم هویت بصری آماده برای استفاده صنعتی و تجاری.' },
  { num: '۰۴', en: 'Commercial Enablement', fa: 'توانمندسازی تجاری', milestone: 'Sales-Ready Pack', color: '#FBBF24', outputs: ['دیتاشیت / کاتالوگ هدایی', 'Objection Handling', 'Sales Kit'], desc: 'آماده‌سازی ابزارهای فروش و مستندات تجاری برای تیم فروش.' },
  { num: '۰۵', en: 'Market Launch & Presence', fa: 'لانچ و حضور در بازار', milestone: 'Launch Pack Live', color: '#34D399', outputs: ['بسته نمایشگاهی', 'برنامه محتوا', 'B2B'], desc: 'اجرای برنامه معرفی برند به بازار و حضور در کانال‌های هدف.' },
  { num: '۰۶', en: 'Measure & Improve', fa: 'اندازه‌گیری و بهبود', milestone: 'Quarterly Improvement Cycle', color: '#FB923C', outputs: ['گزارش‌های ماهانه', 'بهینه‌سازی دارایی‌ها / پیام‌ها'], desc: 'رصد عملکرد برند، تحلیل داده و بهبود مستمر بر اساس نتایج واقعی.' },
]

interface Props {
  mode?: 'full' | 'compact' | 'tracker'
  activePhase?: number
}

export default function ProjectRoadmap({ mode = 'full', activePhase = 0 }: Props) {
  const [active, setActive] = useState(activePhase)

  if (mode === 'compact') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '.5rem' }}>
        {phases.map((p) => (
          <div key={p.num} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.6rem .9rem', background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)', borderRadius: 10, borderRight: `3px solid ${p.color}40` }}>
            <span style={{ fontSize: '.6rem', fontWeight: 800, color: p.color, minWidth: 22 }}>{p.num}</span>
            <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.6)', flex: 1 }}>{p.fa}</span>
            <span style={{ fontSize: '.58rem', background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}25`, borderRadius: 100, padding: '.1rem .5rem', whiteSpace: 'nowrap' as const }}>{p.milestone}</span>
          </div>
        ))}
      </div>
    )
  }

  if (mode === 'tracker') {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: '1.5rem', overflowX: 'auto' as const, paddingBottom: '.5rem' }}>
          {phases.map((p, i) => (
            <div key={p.num} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <button onClick={() => setActive(i)} style={{ width: 36, height: 36, borderRadius: '50%', border: `2px solid ${i <= active ? p.color : 'rgba(255,255,255,.1)'}`, background: i < active ? p.color : i === active ? `${p.color}20` : 'transparent', color: i <= active ? p.color : 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '.6rem', fontWeight: 800, flexShrink: 0, transition: 'all .3s ease', }}>
                {i < active ? '✓' : p.num}
              </button>
              {i < phases.length - 1 && <div style={{ width: 28, height: 2, background: i < active ? phases[i].color : 'rgba(255,255,255,.08)', flexShrink: 0, transition: 'background .3s ease' }} />}
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(255,255,255,.02)', border: `1px solid ${phases[active].color}30`, borderRadius: 16, padding: '1.25rem', borderRight: `3px solid ${phases[active].color}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.75rem', flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: '.62rem', fontWeight: 800, color: phases[active].color }}>{phases[active].num}</span>
            <span style={{ fontSize: '.9rem', fontWeight: 700, color: 'white' }}>{phases[active].fa}</span>
            <span style={{ marginRight: 'auto', fontSize: '.58rem', background: `${phases[active].color}15`, color: phases[active].color, border: `1px solid ${phases[active].color}25`, borderRadius: 100, padding: '.15rem .6rem' }}>{phases[active].en}</span>
          </div>
          <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.7, margin: '0 0 .75rem' }}>{phases[active].desc}</p>
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' as const }}>
            {phases[active].outputs.map(o => (
              <span key={o} style={{ fontSize: '.62rem', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', borderRadius: 100, padding: '.15rem .6rem' }}>{o}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
      {phases.map((p, i) => (
        <div key={p.num} onClick={() => setActive(i)} style={{ background: active === i ? `${p.color}08` : 'rgba(255,255,255,.02)', border: `1px solid ${active === i ? p.color + '35' : 'rgba(255,255,255,.07)'}`, borderRadius: 18, padding: '1.5rem', cursor: 'pointer', transition: 'all .3s ease', borderRight: `3px solid ${p.color}${active === i ? '' : '50'}` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', gap: '.5rem' }}>
            <span style={{ fontSize: '.65rem', fontWeight: 800, color: p.color }}>{p.num}</span>
            <span style={{ fontSize: '.55rem', background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}25`, borderRadius: 100, padding: '.12rem .5rem', textAlign: 'left' as const }}>{p.milestone}</span>
          </div>
          <div style={{ fontSize: '.92rem', fontWeight: 800, color: 'white', marginBottom: '.25rem', letterSpacing: '-.02em' }}>{p.fa}</div>
          <div style={{ fontSize: '.68rem', color: p.color, opacity: .7, marginBottom: '.85rem' }}>{p.en}</div>
          <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.35)', lineHeight: 1.7, margin: '0 0 1rem' }}>{p.desc}</p>
          <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap' as const }}>
            {p.outputs.map(o => (
              <span key={o} style={{ fontSize: '.58rem', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', color: 'rgba(255,255,255,.4)', borderRadius: 100, padding: '.12rem .55rem' }}>{o}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
