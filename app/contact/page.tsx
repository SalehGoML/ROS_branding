'use client'

import { useState } from 'react'
import Link from 'next/link'

const subjects = ['مشاوره برند', 'اطلاعات خدمات', 'همکاری', 'سوال دیگر']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    // TODO: connect to Go API
    setSent(true)
  }

  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        padding: '6rem 2rem 5rem',
        background: 'var(--c-surface)',
        borderBottom: '1px solid var(--c-border)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(var(--c-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--c-border) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: .35, pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            padding: '.35rem .9rem',
            background: 'var(--c-primary-bg)',
            border: '1px solid rgba(46,107,94,.2)',
            borderRadius: 100,
            fontSize: '.75rem', fontWeight: 500,
            color: 'var(--c-primary)',
            marginBottom: '1.5rem',
          }}>
            <span style={{ width: 6, height: 6, background: 'var(--c-primary)', borderRadius: '50%', display: 'inline-block' }} />
            پاسخ در کمتر از ۲۴ ساعت
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-.03em', marginBottom: '1rem',
          }}>
            در ارتباط باشیم
          </h1>
          <p style={{
            fontSize: '1.05rem', color: 'var(--c-text-muted)',
            lineHeight: 1.8, maxWidth: 480, margin: '0 auto',
          }}>
            برای دریافت مشاوره، پرسش درباره خدمات یا همکاری،
            تیم ما پاسخ‌گوی شماست.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* Form */}
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '2.5rem',
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '.4rem' }}>
              پیام مستقیم
            </h2>
            <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)', marginBottom: '2rem' }}>
              فرم زیر را پر کنید — در اسرع وقت پاسخ می‌دهیم.
            </p>

            {sent ? (
              <div style={{
                padding: '2.5rem',
                background: 'var(--c-primary-bg)',
                border: '1px solid rgba(46,107,94,.2)',
                borderRadius: 'var(--r-lg)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 52, height: 52,
                  background: 'var(--c-primary)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '.5rem' }}>
                  پیام شما ارسال شد
                </div>
                <div style={{ fontSize: '.88rem', color: 'var(--c-text-muted)' }}>
                  تیم ROS در کمتر از ۲۴ ساعت با شما تماس می‌گیرد.
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--c-text-muted)', display: 'block', marginBottom: '.4rem' }}>
                      نام کامل <span style={{ color: 'var(--c-primary)' }}>*</span>
                    </label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="مثلاً علی احمدی"
                      style={{
                        width: '100%', padding: '.75rem 1rem',
                        background: 'var(--c-surface-2)',
                        border: '1px solid var(--c-border)',
                        borderRadius: 'var(--r-sm)',
                        fontSize: '.9rem', color: 'var(--c-text)',
                        outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--c-text-muted)', display: 'block', marginBottom: '.4rem' }}>
                      ایمیل <span style={{ color: 'var(--c-primary)' }}>*</span>
                    </label>
                    <input
                      name="email" value={form.email} onChange={handleChange}
                      placeholder="email@example.com"
                      style={{
                        width: '100%', padding: '.75rem 1rem',
                        background: 'var(--c-surface-2)',
                        border: '1px solid var(--c-border)',
                        borderRadius: 'var(--r-sm)',
                        fontSize: '.9rem', color: 'var(--c-text)',
                        outline: 'none', boxSizing: 'border-box',
                        direction: 'ltr',
                      }}
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--c-text-muted)', display: 'block', marginBottom: '.4rem' }}>
                      شماره تماس <span style={{ color: 'var(--c-text-light)' }}>(اختیاری)</span>
                    </label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="۰۹۱۲ ۳۴۵ ۶۷۸۹"
                      style={{
                        width: '100%', padding: '.75rem 1rem',
                        background: 'var(--c-surface-2)',
                        border: '1px solid var(--c-border)',
                        borderRadius: 'var(--r-sm)',
                        fontSize: '.9rem', color: 'var(--c-text)',
                        outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--c-text-muted)', display: 'block', marginBottom: '.4rem' }}>
                      موضوع پیام <span style={{ color: 'var(--c-primary)' }}>*</span>
                    </label>
                    <select
                      name="subject" value={form.subject} onChange={handleChange}
                      style={{
                        width: '100%', padding: '.75rem 1rem',
                        background: 'var(--c-surface-2)',
                        border: '1px solid var(--c-border)',
                        borderRadius: 'var(--r-sm)',
                        fontSize: '.9rem', color: form.subject ? 'var(--c-text)' : 'var(--c-text-light)',
                        outline: 'none', boxSizing: 'border-box',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">انتخاب کنید...</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--c-text-muted)', display: 'block', marginBottom: '.4rem' }}>
                    متن پیام <span style={{ color: 'var(--c-primary)' }}>*</span>
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="پیام خود را بنویسید..."
                    rows={5}
                    style={{
                      width: '100%', padding: '.75rem 1rem',
                      background: 'var(--c-surface-2)',
                      border: '1px solid var(--c-border)',
                      borderRadius: 'var(--r-sm)',
                      fontSize: '.9rem', color: 'var(--c-text)',
                      outline: 'none', resize: 'vertical',
                      boxSizing: 'border-box', lineHeight: 1.7,
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: '.9rem 2rem',
                    background: 'var(--c-primary)', color: 'white',
                    border: 'none', borderRadius: 'var(--r-sm)',
                    fontSize: '.95rem', fontWeight: 600,
                    cursor: 'pointer', alignSelf: 'flex-start',
                  }}
                >
                  ارسال پیام ←
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Quick contact */}
            <div style={{
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              borderRadius: 'var(--r-lg)',
              padding: '1.75rem',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                راه‌های دیگر تماس
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                {/* Email general */}
                <a href="mailto:info@rosbrand.ir" style={{
                  display: 'flex', alignItems: 'center', gap: '.85rem',
                  textDecoration: 'none', color: 'var(--c-text)',
                }}>
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    background: 'var(--c-primary-bg)',
                    borderRadius: 'var(--r-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '.7rem', color: 'var(--c-text-light)', marginBottom: '.1rem' }}>ایمیل عمومی</div>
                    <div style={{ fontSize: '.88rem', fontWeight: 500, direction: 'ltr' }}>info@rosbrand.ir</div>
                  </div>
                </a>

                {/* Email HR */}
                <a href="mailto:hr@rosbrand.ir" style={{
                  display: 'flex', alignItems: 'center', gap: '.85rem',
                  textDecoration: 'none', color: 'var(--c-text)',
                }}>
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    background: 'var(--c-primary-bg)',
                    borderRadius: 'var(--r-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '.7rem', color: 'var(--c-text-light)', marginBottom: '.1rem' }}>همکاری و استخدام</div>
                    <div style={{ fontSize: '.88rem', fontWeight: 500, direction: 'ltr' }}>hr@rosbrand.ir</div>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+989134945184" style={{
                  display: 'flex', alignItems: 'center', gap: '.85rem',
                  textDecoration: 'none', color: 'var(--c-text)',
                }}>
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    background: 'var(--c-primary-bg)',
                    borderRadius: 'var(--r-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-primary)" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '.7rem', color: 'var(--c-text-light)', marginBottom: '.1rem' }}>تلفن تماس</div>
                    <div style={{ fontSize: '.88rem', fontWeight: 500, direction: 'ltr' }}>+98 913 494 5184</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://t.me/rosbranding" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '.85rem',
                  textDecoration: 'none', color: 'var(--c-text)',
                }}>
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    background: '#EDFBF0',
                    borderRadius: 'var(--r-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#26A5E4">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '.7rem', color: 'var(--c-text-light)', marginBottom: '.1rem' }}>تلگرام</div>
                    <div style={{ fontSize: '.88rem', fontWeight: 500 }}>پیام مستقیم</div>
                  </div>
                </a>

                {/* Divider */}
                <div style={{ height: 1, background: 'var(--c-border)', margin: '.25rem 0' }} />

                {/* Social */}
                <div style={{ display: 'flex', gap: '.75rem' }}>
                  {[
                    { label: 'Instagram', href: 'https://instagram.com/rosbrand', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/company/rosbrand', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                      width: 38, height: 38,
                      background: 'var(--c-surface-2)',
                      border: '1px solid var(--c-border)',
                      borderRadius: 'var(--r-sm)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--c-text-muted)">
                        <path d={s.icon}/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Consultation CTA box */}
            <div style={{
              background: 'var(--c-primary)',
              borderRadius: 'var(--r-lg)',
              padding: '1.75rem',
              color: 'white',
            }}>
              <div style={{
                width: 40, height: 40,
                background: 'rgba(255,255,255,.15)',
                borderRadius: 'var(--r-sm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>
                جلسه مشاوره تخصصی
              </h3>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.75)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                برای شروع همکاری یا دریافت مشاوره تخصصی، همین حالا اقدام کنید.
              </p>
              <Link href="/contact/request-consultation" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem',
                padding: '.75rem 1rem',
                background: 'white', color: 'var(--c-primary)',
                borderRadius: 'var(--r-sm)',
                fontSize: '.88rem', fontWeight: 700,
              }}>
                درخواست جلسه مشاوره ←
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}