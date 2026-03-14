'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  {
    label: 'استراتژی برند',
    sub: 'Brand Strategy',
    desc: 'سند استراتژی · معماری برند · نام‌گذاری',
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
            textDecoration: 'none',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background .4s ease',
            background: hovered === i ? 'rgba(0,0,0,.22)' : 'transparent',
          }}
        >
          {/* glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: hovered === i
              ? 'radial-gradient(ellipse at center, rgba(46,107,94,.18) 0%, transparent 65%)'
              : 'transparent',
            transition: 'background .45s ease',
            pointerEvents: 'none',
          }} />

          {/* content */}
          <div style={{
            position: 'relative', zIndex: 1,
            textAlign: 'center',
            transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
            transition: 'transform .4s cubic-bezier(.16,1,.3,1)',
          }}>
            <div style={{
              fontSize: '.58rem', letterSpacing: '.22em',
              color: hovered === i ? 'rgba(74,140,124,.9)' : 'rgba(255,255,255,.3)',
              textTransform: 'uppercase' as const,
              marginBottom: '.55rem',
              transition: 'color .3s ease',
            }}>{item.sub}</div>

            <div style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              fontWeight: 800, letterSpacing: '-.02em',
              color: 'white',
              textShadow: hovered === i ? '0 0 40px rgba(46,107,94,.6)' : 'none',
              transition: 'text-shadow .3s ease',
              marginBottom: '.65rem',
            }}>{item.label}</div>

            <div style={{
              width: hovered === i ? 40 : 16,
              height: 1.5,
              background: hovered === i
                ? 'linear-gradient(to right, transparent, #4A8C7C, transparent)'
                : 'rgba(255,255,255,.18)',
              margin: '0 auto',
              borderRadius: 2,
              transition: 'all .4s ease',
              marginBottom: '.6rem',
            }} />

            <div style={{
              fontSize: '.7rem',
              color: 'rgba(255,255,255,.4)',
              opacity: hovered === i ? 1 : 0,
              transform: hovered === i ? 'translateY(0)' : 'translateY(6px)',
              transition: 'all .35s ease .05s',
              letterSpacing: '.02em',
            }}>{item.desc}</div>
          </div>

          {/* arrow bottom */}
          <div style={{
            position: 'absolute', bottom: '1.5rem',
            display: 'flex', alignItems: 'center', gap: '.35rem',
            fontSize: '.7rem', color: 'rgba(255,255,255,.4)',
            opacity: hovered === i ? 1 : 0,
            transform: hovered === i ? 'translateY(0)' : 'translateY(6px)',
            transition: 'all .3s ease',
          }}>
            مشاهده خدمات
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </div>
        </Link>
      ))}

      {/* divider */}
      <div style={{
        position: 'absolute', top: '20%', bottom: '20%', left: '50%',
        width: 1,
        background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,.15) 40%, rgba(255,255,255,.15) 60%, transparent)',
        pointerEvents: 'none',
      }} />

      {/* bottom label */}
      <div style={{
        position: 'absolute', bottom: '.85rem', left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '.48rem', letterSpacing: '.3em',
        color: 'rgba(255,255,255,.1)',
        fontFamily: 'Georgia, serif',
        whiteSpace: 'nowrap' as const,
        pointerEvents: 'none',
      }}>ROS BRANDING AGENCY</div>
    </div>
  )
}
