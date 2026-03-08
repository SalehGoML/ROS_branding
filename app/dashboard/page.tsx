'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock data — بعداً از Go API میاد
const mockBrand = {
  name: 'زودکس',
  hasStrategy: true,
  lastAnalysis: '۵ روز پیش',
  score: 78,
  personality: ['نوآور', 'قابل اعتماد', 'پویا'],
  values: ['کیفیت', 'صداقت', 'مشتری‌محوری'],
  tone: 'حرفه‌ای و دوستانه',
  lastUpdate: '۱۴۰۳/۰۹/۱۵',
}

const channels = [
  { name: 'اینستاگرام', personality: 82, tone: 75, values: 68, status: 'good', lastUpdate: '۲ روز پیش', connected: true },
  { name: 'وب‌سایت', personality: 91, tone: 88, values: 85, status: 'good', lastUpdate: '۱ هفته پیش', connected: true },
  { name: 'پشتیبانی', personality: 45, tone: 38, values: 52, status: 'bad', lastUpdate: null, connected: false },
  { name: 'بسته‌بندی', personality: 65, tone: 70, values: 60, status: 'medium', lastUpdate: '۳ هفته پیش', connected: true },
]

const suggestions = [
  { id: 1, priority: 'high', channel: 'پشتیبانی', text: 'لحن برند در پشتیبانی رسمی‌تر از حد تعریف‌شده است.' },
  { id: 2, priority: 'medium', channel: 'اینستاگرام', text: 'انتقال ارزش‌های برند در محتوای اینستاگرام نیاز به تقویت دارد.' },
  { id: 3, priority: 'low', channel: 'بسته‌بندی', text: 'شخصیت برند در طراحی بسته‌بندی با سند برند ۷۰٪ هماهنگ است.' },
]

const progressData = [
  { month: 'مهر', score: 62 },
  { month: 'آبان', score: 68 },
  { month: 'آذر', score: 71 },
  { month: 'دی', score: 78 },
]

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    good:   { bg: '#ECFDF5', color: '#059669', label: 'هماهنگ' },
    medium: { bg: '#FFFBEB', color: '#D97706', label: 'متوسط' },
    bad:    { bg: '#FEF2F2', color: '#DC2626', label: 'ناسازگار' },
  }
  const s = map[status]
  return (
    <span style={{
      padding: '.2rem .65rem', borderRadius: 100,
      fontSize: '.7rem', fontWeight: 600,
      background: s.bg, color: s.color,
    }}>{s.label}</span>
  )
}

function ScoreBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
      <div style={{
        flex: 1, height: 6, background: 'var(--c-surface-2)',
        borderRadius: 3, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${value}%`,
          background: color, borderRadius: 3,
          transition: 'width .6s ease',
        }} />
      </div>
      <span style={{ fontSize: '.72rem', color: 'var(--c-text-muted)', minWidth: 28 }}>
        {value}٪
      </span>
    </div>
  )
}

export default function DashboardPage() {
  const [analyzing, setAnalyzing] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const hasStrategy = mockBrand.hasStrategy

  async function handleReanalyze() {
    setShowModal(true)
    setAnalyzing(true)
    await new Promise(r => setTimeout(r, 3000))
    setAnalyzing(false)
    setShowModal(false)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>

      {/* Reanalyze Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(0,0,0,.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: 'var(--c-surface)',
            borderRadius: 'var(--r-xl)',
            padding: '2.5rem',
            textAlign: 'center', maxWidth: 360, width: '90%',
          }}>
            <div style={{
              width: 52, height: 52,
              background: 'var(--c-primary-bg)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="var(--c-primary)" strokeWidth="2"
                style={{ animation: 'spin 1s linear infinite' }}>
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
            </div>
            <h3 style={{ fontWeight: 700, marginBottom: '.5rem' }}>در حال تحلیل مجدد...</h3>
            <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>
              داده‌های برند شما در حال پردازش است. لطفاً چند لحظه صبر کنید.
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'flex-start',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '1rem', marginBottom: '2rem',
      }}>
        <div>
          <div style={{ fontSize: '.78rem', color: 'var(--c-text-light)', marginBottom: '.25rem' }}>
            خوش آمدید
          </div>
          <h1 style={{
            fontSize: '1.6rem', fontWeight: 700,
            letterSpacing: '-.02em', marginBottom: '.25rem',
          }}>
            {mockBrand.name}
          </h1>
          <div style={{ fontSize: '.82rem', color: 'var(--c-text-muted)' }}>
            آخرین تحلیل: {mockBrand.lastAnalysis}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
          <Link href="/dashboard/brand" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            padding: '.6rem 1.2rem',
            border: '1.5px solid var(--c-border)',
            borderRadius: 'var(--r-sm)',
            fontSize: '.85rem', fontWeight: 500,
            color: 'var(--c-text-muted)',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            ویرایش سند برند
          </Link>
          <button onClick={handleReanalyze} style={{
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            padding: '.6rem 1.2rem',
            background: 'var(--c-primary)', color: 'white',
            border: 'none', borderRadius: 'var(--r-sm)',
            fontSize: '.85rem', fontWeight: 600,
            cursor: 'pointer',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"/>
            </svg>
            تحلیل مجدد
          </button>
        </div>
      </div>

      {/* No strategy banner */}
      {!hasStrategy && (
        <div style={{
          background: '#FFFBEB',
          border: '1px solid #FDE68A',
          borderRadius: 'var(--r-lg)',
          padding: '1.25rem 1.5rem',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '1rem', marginBottom: '2rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span style={{ fontSize: '.88rem', color: '#92400E' }}>
              برای فعال‌سازی کامل سرویس، ابتدا سند برند خود را وارد یا ایجاد کنید.
            </span>
          </div>
          <Link href="/onboarding/need-strategy" style={{
            padding: '.5rem 1.1rem',
            background: '#D97706', color: 'white',
            borderRadius: 'var(--r-sm)',
            fontSize: '.82rem', fontWeight: 600,
          }}>
            ساخت سند برند ←
          </Link>
        </div>
      )}

      {/* Progress bar row */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem', marginBottom: '2rem',
      }}>
        {[
          { label: 'تکمیل ورودی‌ها', value: 65, color: 'var(--c-primary)' },
          { label: 'سند برند', value: hasStrategy ? 100 : 0, color: '#8B5CF6' },
          { label: 'آخرین تحلیل', value: 78, color: '#0EA5E9' },
          { label: 'پیشنهادنامه', value: 40, color: '#F59E0B' },
        ].map(item => (
          <div key={item.label} style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-lg)',
            padding: '1.25rem',
          }}>
            <div style={{ fontSize: '.75rem', color: 'var(--c-text-muted)', marginBottom: '.5rem' }}>
              {item.label}
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: item.color, marginBottom: '.5rem' }}>
              {item.value}٪
            </div>
            <div style={{
              height: 4, background: 'var(--c-surface-2)',
              borderRadius: 2, overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', width: `${item.value}%`,
                background: item.color, borderRadius: 2,
              }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Brand Snapshot */}
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.75rem',
            filter: hasStrategy ? 'none' : 'blur(3px)',
            pointerEvents: hasStrategy ? 'auto' : 'none',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>خلاصه برند</h2>
              <div style={{ fontSize: '.72rem', color: 'var(--c-text-light)' }}>
                به‌روزرسانی: {mockBrand.lastUpdate}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '.72rem', color: 'var(--c-text-light)', marginBottom: '.4rem' }}>شخصیت برند</div>
                <div style={{ display: 'flex', gap: '.3rem', flexWrap: 'wrap' }}>
                  {mockBrand.personality.map(p => (
                    <span key={p} style={{
                      fontSize: '.72rem', padding: '.2rem .6rem',
                      background: 'var(--c-primary-bg)', color: 'var(--c-primary)',
                      borderRadius: 100,
                    }}>{p}</span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '.72rem', color: 'var(--c-text-light)', marginBottom: '.4rem' }}>ارزش‌های برند</div>
                <div style={{ display: 'flex', gap: '.3rem', flexWrap: 'wrap' }}>
                  {mockBrand.values.map(v => (
                    <span key={v} style={{
                      fontSize: '.72rem', padding: '.2rem .6rem',
                      background: 'var(--c-surface-2)', color: 'var(--c-text-muted)',
                      border: '1px solid var(--c-border)', borderRadius: 100,
                    }}>{v}</span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '.72rem', color: 'var(--c-text-light)', marginBottom: '.4rem' }}>لحن برند</div>
                <div style={{ fontSize: '.85rem', fontWeight: 500 }}>{mockBrand.tone}</div>
              </div>
            </div>
            <Link href="/dashboard/brand" style={{
              display: 'inline-flex', alignItems: 'center', gap: '.4rem',
              marginTop: '1.25rem',
              fontSize: '.8rem', color: 'var(--c-primary)', fontWeight: 500,
            }}>
              بازبینی سند برند ←
            </Link>
          </div>

          {/* Channel Analysis */}
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.75rem',
            filter: hasStrategy ? 'none' : 'blur(3px)',
            pointerEvents: hasStrategy ? 'auto' : 'none',
          }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.4rem' }}>
              تحلیل نقاط تماس
            </h2>
            <p style={{ fontSize: '.82rem', color: 'var(--c-text-muted)', marginBottom: '1.5rem' }}>
              برند شما در این هفته چقدر خودش بوده است؟
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {channels.map(ch => (
                <div key={ch.name} style={{
                  padding: '1.25rem',
                  background: 'var(--c-surface-2)',
                  border: '1px solid var(--c-border)',
                  borderRadius: 'var(--r-lg)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '.9rem' }}>{ch.name}</span>
                      <StatusBadge status={ch.status} />
                    </div>
                    <div style={{ fontSize: '.72rem', color: 'var(--c-text-light)' }}>
                      {ch.connected
                        ? `آخرین به‌روزرسانی: ${ch.lastUpdate}`
                        : (
                          <span style={{ color: '#DC2626', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/>
                              <line x1="12" y1="8" x2="12" y2="12"/>
                              <line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg>
                            داده‌ای ارائه نشده
                          </span>
                        )
                      }
                    </div>
                  </div>

                  {ch.connected ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                        <span style={{ fontSize: '.72rem', color: 'var(--c-text-muted)', minWidth: 100 }}>شخصیت برند</span>
                        <ScoreBar value={ch.personality} color="var(--c-primary)" />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                        <span style={{ fontSize: '.72rem', color: 'var(--c-text-muted)', minWidth: 100 }}>هماهنگی لحن</span>
                        <ScoreBar value={ch.tone} color="#0EA5E9" />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                        <span style={{ fontSize: '.72rem', color: 'var(--c-text-muted)', minWidth: 100 }}>انتقال ارزش‌ها</span>
                        <ScoreBar value={ch.values} color="#8B5CF6" />
                      </div>
                    </div>
                  ) : (
                    <div style={{
                      padding: '.85rem 1rem',
                      background: '#FEF2F2',
                      border: '1px solid #FECACA',
                      borderRadius: 'var(--r-sm)',
                      fontSize: '.8rem', color: '#DC2626',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem',
                    }}>
                      <span>برای تحلیل دقیق {ch.name}، فایل یا لینک بارگذاری کنید.</span>
                      <button style={{
                        padding: '.35rem .85rem',
                        background: '#DC2626', color: 'white',
                        border: 'none', borderRadius: 'var(--r-sm)',
                        fontSize: '.75rem', fontWeight: 600, cursor: 'pointer',
                      }}>
                        تکمیل ورودی
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Progress chart */}
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.75rem',
            filter: hasStrategy ? 'none' : 'blur(3px)',
            pointerEvents: hasStrategy ? 'auto' : 'none',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>روند پیشرفت برند</h2>
              <button onClick={handleReanalyze} style={{
                padding: '.45rem 1rem',
                background: 'var(--c-primary-bg)', color: 'var(--c-primary)',
                border: '1px solid rgba(46,107,94,.2)',
                borderRadius: 'var(--r-sm)',
                fontSize: '.78rem', fontWeight: 600, cursor: 'pointer',
              }}>
                تحلیل مجدد
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: 120 }}>
              {progressData.map(d => (
                <div key={d.month} style={{
                  flex: 1, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: '.5rem', height: '100%', justifyContent: 'flex-end',
                }}>
                  <span style={{ fontSize: '.72rem', color: 'var(--c-primary)', fontWeight: 600 }}>{d.score}</span>
                  <div style={{
                    width: '100%',
                    height: `${(d.score / 100) * 100}px`,
                    background: 'var(--c-primary)',
                    borderRadius: '4px 4px 0 0',
                    opacity: d.month === 'دی' ? 1 : 0.5,
                  }} />
                  <span style={{ fontSize: '.72rem', color: 'var(--c-text-muted)' }}>{d.month}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Brand score */}
          <div style={{
            background: 'var(--c-primary)',
            borderRadius: 'var(--r-xl)',
            padding: '1.75rem',
            color: 'white', textAlign: 'center',
            filter: hasStrategy ? 'none' : 'blur(3px)',
            pointerEvents: hasStrategy ? 'auto' : 'none',
          }}>
            <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.7)', marginBottom: '.75rem' }}>
              نمره سلامت برند
            </div>
            <div style={{
              fontSize: '3.5rem', fontWeight: 800,
              letterSpacing: '-.04em', lineHeight: 1,
              marginBottom: '.5rem',
            }}>
              {mockBrand.score}
            </div>
            <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.7)' }}>از ۱۰۰</div>
            <div style={{
              marginTop: '1.25rem', padding: '.6rem 1rem',
              background: 'rgba(255,255,255,.12)',
              borderRadius: 'var(--r-sm)',
              fontSize: '.78rem', color: 'rgba(255,255,255,.85)',
            }}>
              وضعیت: خوب — نیاز به بهبود در پشتیبانی
            </div>
          </div>

          {/* Suggestions */}
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.5rem',
            filter: hasStrategy ? 'none' : 'blur(3px)',
            pointerEvents: hasStrategy ? 'auto' : 'none',
          }}>
            <h3 style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '1rem' }}>
              پیشنهادنامه بهبود
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {suggestions.map(s => (
                <div key={s.id} style={{
                  padding: '.85rem',
                  background: 'var(--c-surface-2)',
                  border: '1px solid var(--c-border)',
                  borderRadius: 'var(--r-sm)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', marginBottom: '.4rem' }}>
                    <span style={{
                      fontSize: '.65rem', fontWeight: 700,
                      padding: '.15rem .5rem', borderRadius: 100,
                      background: s.priority === 'high' ? '#FEE2E2' : s.priority === 'medium' ? '#FEF3C7' : '#ECFDF5',
                      color: s.priority === 'high' ? '#DC2626' : s.priority === 'medium' ? '#D97706' : '#059669',
                    }}>
                      {s.priority === 'high' ? 'مهم' : s.priority === 'medium' ? 'متوسط' : 'کم'}
                    </span>
                    <span style={{ fontSize: '.72rem', color: 'var(--c-text-light)' }}>{s.channel}</span>
                  </div>
                  <p style={{ fontSize: '.78rem', color: 'var(--c-text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
            <button style={{
              width: '100%', marginTop: '1rem',
              padding: '.65rem',
              background: 'var(--c-primary-bg)', color: 'var(--c-primary)',
              border: '1px solid rgba(46,107,94,.2)',
              borderRadius: 'var(--r-sm)',
              fontSize: '.82rem', fontWeight: 600, cursor: 'pointer',
            }}>
              دریافت فایل پیشنهادنامه
            </button>
          </div>

          {/* CTA */}
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.5rem', textAlign: 'center',
          }}>
            <div style={{ fontSize: '.85rem', fontWeight: 600, marginBottom: '.4rem' }}>
              نیاز به تحلیل شخصی‌تر دارید؟
            </div>
            <p style={{ fontSize: '.78rem', color: 'var(--c-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
              با تیم متخصص ROS یک جلسه مشاوره بگیرید.
            </p>
            <Link href="/contact/request-consultation" style={{
              display: 'block', padding: '.7rem',
              background: 'var(--c-primary)', color: 'white',
              borderRadius: 'var(--r-sm)',
              fontSize: '.85rem', fontWeight: 600,
            }}>
              درخواست مشاوره ←
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

    </div>
  )
}