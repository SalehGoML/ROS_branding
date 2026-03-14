'use client'
import { useState } from 'react'

export default function SectionBadge({ label }: { label: string }) {
  const [h, setH] = useState(false)
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '.6rem',
        marginBottom: '1.1rem', cursor: 'default',
      }}
    >
      {/* left line */}
      <div style={{
        height: 1,
        width: h ? 32 : 24,
        background: 'linear-gradient(to left, var(--c-primary), transparent)',
        transition: 'width .3s ease',
      }} />

      {/* badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '.45rem',
        padding: '.3rem .85rem',
        borderRadius: 100,
        border: `1px solid ${h ? 'rgba(46,107,94,.5)' : 'rgba(46,107,94,.2)'}`,
        background: h ? 'rgba(46,107,94,.14)' : 'rgba(46,107,94,.06)',
        boxShadow: h ? '0 0 16px rgba(46,107,94,.15)' : 'none',
        transform: h ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'all .3s ease',
      }}>
        <span style={{
          width: 5, height: 5, borderRadius: '50%',
          background: 'var(--c-primary)', display: 'block', flexShrink: 0,
          boxShadow: h ? '0 0 8px rgba(46,107,94,.9)' : '0 0 5px rgba(46,107,94,.6)',
          transition: 'box-shadow .3s ease',
          animation: 'badgePulse 2.5s infinite',
        }} />
        <span style={{
          fontSize: '.68rem', fontWeight: 700,
          letterSpacing: '.14em', textTransform: 'uppercase' as const,
          color: h ? 'var(--c-primary)' : 'var(--c-primary)',
          opacity: h ? 1 : .85,
          transition: 'opacity .3s ease',
        }}>{label}</span>
      </div>

      {/* right line */}
      <div style={{
        height: 1,
        width: h ? 32 : 24,
        background: 'linear-gradient(to right, var(--c-primary), transparent)',
        transition: 'width .3s ease',
      }} />

      <style>{`
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>
    </div>
  )
}
