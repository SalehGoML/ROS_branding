'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  {
    label: 'استراتژی برندینگ',
    sub: 'Brand Strategy',
    desc: 'سند استراتژی · معماری برند · نام‌گذاری · تجربه برند',
    href: '/services/brand-strategy',
  },
  {
    label: 'برند دیزاین',
    sub: 'Brand Design',
    desc: 'هویت بصری · ست اداری · برندبوک',
    href: '/services/brand-design',
  },
]

export default function HeroImageLinks() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
      {links.map((item, i) => (
        <Link
          key={item.label}
          href={item.href}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            flex: 1,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '.6rem',
            textDecoration: 'none',
            position: 'relative',
            overflow: 'hidden',
            background: hovered === i
              ? 'rgba(46,107,94,.28)'
              : 'transparent',
            transition: 'background .4s ease',
          }}
        >
          {/* shimmer border on hover */}
          {hovered === i && (
            <div style={{
              position: 'absolute', inset: 0,
              border: '1px solid rgba(74,140,124,.3)',
              borderRadius: 0,
              pointerEvents: 'none',
            }} />
          )}

          {/* glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 200, height: 200,
            background: 'radial-gradient(ellipse, rgba(46,107,94,.35) 0%, transparent 70%)',
            opacity: hovered === i ? 1 : 0,
            transition: 'opacity .4s ease',
            pointerEvents: 'none',
          }} />

          {/* sub label */}
          <span style={{
            fontSize: '.65rem', letterSpacing: '.2em',
            color: hovered === i ? 'rgba(255,255,255,.6)' : 'rgba(255,255,255,.3)',
            textTransform: 'uppercase' as const,
            fontFamily: 'Georgia, serif',
            transition: 'color .3s, transform .3s',
            transform: hovered === i ? 'translateY(0)' : 'translateY(4px)',
          }}>
            {item.sub}
          </span>

          {/* main title */}
          <span style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            fontWeight: 800,
            color: hovered === i ? 'white' : 'rgba(255,255,255,.82)',
            letterSpacing: '-.02em',
            transition: 'color .3s, transform .3s',
            transform: hovered === i ? 'translateY(-2px)' : 'translateY(0)',
            position: 'relative', zIndex: 1,
            textShadow: hovered === i ? '0 0 30px rgba(74,140,124,.6)' : 'none',
          }}>
            {item.label}
          </span>

          {/* animated underline */}
          <div style={{
            width: hovered === i ? '50%' : '20%',
            height: 1,
            background: hovered === i
              ? 'linear-gradient(to left, transparent, #4A8C7C, transparent)'
              : 'rgba(255,255,255,.12)',
            transition: 'width .4s ease, background .4s ease',
            borderRadius: 2,
          }} />

          {/* desc */}
          <span style={{
            fontSize: '.72rem',
            color: 'rgba(255,255,255,.45)',
            opacity: hovered === i ? 1 : 0,
            transform: hovered === i ? 'translateY(0)' : 'translateY(6px)',
            transition: 'all .35s ease',
            letterSpacing: '.03em',
          }}>
            {item.desc}
          </span>

          {/* arrow */}
          <div style={{
            position: 'absolute', bottom: '1.5rem',
            display: 'flex', alignItems: 'center', gap: '.35rem',
            opacity: hovered === i ? 1 : 0,
            transform: hovered === i ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all .3s ease .05s',
            fontSize: '.75rem', color: 'rgba(255,255,255,.65)',
            fontWeight: 500,
          }}>
            مشاهده خدمات
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </div>
        </Link>
      ))}

      {/* divider */}
      <div style={{
        position: 'absolute', top: '10%', bottom: '10%', left: '50%',
        width: 1,
        background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,.18), transparent)',
        pointerEvents: 'none',
      }} />

      {/* bottom branding */}
      <div style={{
        position: 'absolute', bottom: '1rem', left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '.58rem', letterSpacing: '.3em',
        color: 'rgba(255,255,255,.18)',
        fontFamily: 'Georgia, serif',
        whiteSpace: 'nowrap' as const,
        pointerEvents: 'none',
      }}>
        ROS BRANDING AGENCY
      </div>
    </div>
  )
}
