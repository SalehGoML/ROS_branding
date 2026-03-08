'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

interface Props {
  isOpen:     boolean
  onClose:    () => void
  brandName:  string
  brandField: string
}

export default function AIResultPanel({ isOpen, onClose, brandName, brandField }: Props) {
  const typingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen || !typingRef.current) return

    const text = `بر اساس اطلاعاتی که در مورد «${brandName}» در حوزه «${brandField}» ارائه دادید، تحلیل اولیه ROS به شرح زیر است:

🔍 وضعیت فعلی برند:
برند شما در مرحله‌ای قرار دارد که تعریف جایگاه متمایز، یک اولویت استراتژیک اساسی است. بر اساس الگوهای معمول در صنعت ${brandField}، احتمالاً با چالش‌هایی مانند ناهماهنگی پیام در کانال‌های مختلف مواجه هستید.

📊 فرصت‌های کلیدی:
۱. تعریف دقیق شخصیت و لحن برند برای انسجام در تمام نقاط تماس
۲. بازتعریف جایگاه ذهنی در بازار ${brandField} با تمرکز بر تمایز واقعی
۳. ایجاد سیستم هویت بصری منعطف و مقیاس‌پذیر

⚡ پیشنهاد ROS:
پیش از هر اقدام اجرایی، تدوین «سند استراتژی برند» ضروری است. این سند پایه تمام تصمیم‌های بعدی خواهد بود.`

    const el = typingRef.current
    el.innerHTML = ''

    const cursor = document.createElement('span')
    cursor.style.cssText = `
      display: inline-block;
      width: 2px; height: 1.1em;
      background: var(--c-primary);
      animation: blink .8s step-end infinite;
      vertical-align: middle;
      margin-right: 2px;
    `
    el.appendChild(cursor)

    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        el.insertBefore(document.createTextNode(text[i]), cursor)
        i++
      } else {
        clearInterval(interval)
        cursor.remove()
      }
    }, 16)

    return () => clearInterval(interval)
  }, [isOpen, brandName, brandField])

  if (!isOpen) return null

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0,
      background: 'rgba(26,25,22,.7)',
      backdropFilter: 'blur(10px)',
      zIndex: 210,
      display: 'flex', alignItems: 'stretch',
    }}>

      {/* Panel */}
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', maxWidth: 860,
        background: 'var(--c-surface)',
        height: '100%', overflowY: 'auto',
        padding: '3rem',
      }}>

        {/* Brand header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          padding: '1.5rem',
          background: 'var(--c-primary-bg)',
          border: '1px solid rgba(46,107,94,.15)',
          borderRadius: 'var(--r-lg)',
          marginBottom: '2rem',
        }}>
          <div style={{
            width: 48, height: 48,
            background: 'var(--c-primary)',
            borderRadius: 'var(--r-md)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem', fontWeight: 700, color: 'white',
            flexShrink: 0,
          }}>
            {brandName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{brandName}</div>
            <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)' }}>{brandField}</div>
          </div>
        </div>

        {/* Typing output */}
        <div ref={typingRef} style={{
          fontSize: '.95rem',
          lineHeight: 1.9,
          whiteSpace: 'pre-wrap',
          marginBottom: '2.5rem',
          minHeight: 200,
        }} />

        {/* CTA */}
        <div style={{
          display: 'flex', gap: '1rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--c-border)',
        }}>
          <Link href="/contact/request-consultation" style={{
            flex: 1, height: 48,
            background: 'var(--c-primary)', color: 'white',
            borderRadius: 'var(--r-sm)',
            fontSize: '.9rem', fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem',
          }}>
            دریافت مسیر برندینگ ←
          </Link>
          <Link href="/contact/request-consultation" style={{
            flex: 1, height: 48,
            border: '1.5px solid var(--c-border)',
            borderRadius: 'var(--r-sm)',
            fontSize: '.9rem', fontWeight: 500,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem',
            color: 'var(--c-text-muted)',
          }}>
            مشاوره رایگان ←
          </Link>
        </div>

      </div>

      {/* Close button */}
      <button onClick={onClose} style={{
        position: 'fixed', top: '1.5rem', right: '1.5rem',
        zIndex: 220, width: 42, height: 42,
        background: '#1A1916', color: 'white',
        border: 'none', borderRadius: '50%',
        cursor: 'pointer', fontSize: '1rem',
      }}>✕</button>

    </div>
  )
}