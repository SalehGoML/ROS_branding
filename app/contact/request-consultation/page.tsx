'use client'

import { useState } from 'react'
import Link from 'next/link'

const services = [
  'استراتژی برند',
  'طراحی مسیر برند',
  'ساختار برند و پورتفولیو',
  'تحلیل عملکرد برند',
  'نام‌گذاری و هویت برند',
  'طراحی تجربه برند',
  'نوآوری دیجیتال برند',
  'تحلیل هوشمند با ROS AI',
  'مطمئن نیستم — راهنمایی نیاز دارم',
]

const budgets = [
  'کمتر از ۵۰ میلیون تومان',
  '۵۰ تا ۱۵۰ میلیون تومان',
  '۱۵۰ تا ۵۰۰ میلیون تومان',
  'بیشتر از ۵۰۰ میلیون تومان',
  'ترجیح می‌دهم نگویم',
]

const timelines = [
  'فوری — در اسرع وقت',
  '۱ تا ۳ ماه آینده',
  '۳ تا ۶ ماه آینده',
  'هنوز مشخص نیست',
]

export default function RequestConsultationPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '', company: '', role: '', email: '', phone: '',
    service: '', budget: '', timeline: '', description: '',
  })

  function set(k: string, v: string) {
    setForm(f => ({ ...f, [k]: v }))
  }

  const inputStyle = {
    width: '100%', padding: '.8rem 1rem',
    background: 'var(--c-surface-2)',
    border: '1px solid var(--c-border)',
    borderRadius: 'var(--r-sm)',
    fontSize: '.92rem', color: 'var(--c-text)',
    outline: 'none', boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    fontSize: '.78rem', fontWeight: 500 as const,
    color: 'var(--c-text-muted)',
    display: 'block' as const, marginBottom: '.4rem',
  }

  const chipStyle = (selected: boolean) => ({
    padding: '.55rem 1.1rem',
    background: selected ? 'var(--c-primary)' : 'var(--c-surface-2)',
    color: selected ? 'white' : 'var(--c-text)',
    border: `1.5px solid ${selected ? 'var(--c-primary)' : 'var(--c-border)'}`,
    borderRadius: 100,
    fontSize: '.82rem', fontWeight: 500 as const,
    cursor: 'pointer' as const,
    transition: 'all .15s',
  })

  return (
    <main style={{ paddingTop: 68, background: 'var(--c-bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        padding: '4rem 2rem 3rem',
        background: 'var(--c-surface)',
        borderBottom: '1px solid var(--c-border)',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            fontSize: '.82rem', color: 'var(--c-text-muted)', marginBottom: '1.5rem',
          }}>
            ← بازگشت
          </Link>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: '-.03em', marginBottom: '.75rem',
          }}>
            درخواست جلسه مشاوره
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--c-text-muted)', lineHeight: 1.8 }}>
            چند سوال کوتاه — تا بهترین مسیر را با هم پیدا کنیم.
          </p>

          {/* Progress */}
          <div style={{ display: 'flex', gap: '.5rem', marginTop: '2rem' }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{
                height: 4, flex: 1, borderRadius: 2,
                background: s <= step ? 'var(--c-primary)' : 'var(--c-border)',
                transition: 'background .3s',
              }} />
            ))}
          </div>
          <div style={{ fontSize: '.75rem', color: 'var(--c-text-light)', marginTop: '.5rem' }}>
            مرحله {step} از ۳
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '4rem 2rem', maxWidth: 680, margin: '0 auto' }}>

        {/* Step 1 — اطلاعات تماس */}
        {step === 1 && (
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '2.5rem',
          }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '.4rem' }}>
              اطلاعات تماس
            </h2>
            <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)', marginBottom: '2rem' }}>
              برای برقراری تماس و شخصی‌سازی جلسه.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>نام کامل <span style={{ color: 'var(--c-primary)' }}>*</span></label>
                  <input value={form.name} onChange={e => set('name', e.target.value)}
                    placeholder="علی احمدی" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>نام شرکت / برند</label>
                  <input value={form.company} onChange={e => set('company', e.target.value)}
                    placeholder="نام سازمان" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>سمت شما</label>
                <input value={form.role} onChange={e => set('role', e.target.value)}
                  placeholder="مثلاً مدیرعامل، مدیر مارکتینگ..." style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>ایمیل <span style={{ color: 'var(--c-primary)' }}>*</span></label>
                  <input value={form.email} onChange={e => set('email', e.target.value)}
                    placeholder="email@example.com"
                    style={{ ...inputStyle, direction: 'ltr' }} />
                </div>
                <div>
                  <label style={labelStyle}>شماره تماس <span style={{ color: 'var(--c-primary)' }}>*</span></label>
                  <input value={form.phone} onChange={e => set('phone', e.target.value)}
                    placeholder="۰۹۱۲ ۳۴۵ ۶۷۸۹" style={inputStyle} />
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!form.name || !form.email || !form.phone}
              style={{
                marginTop: '2rem',
                padding: '.85rem 2rem',
                background: form.name && form.email && form.phone ? 'var(--c-primary)' : 'var(--c-border)',
                color: form.name && form.email && form.phone ? 'white' : 'var(--c-text-light)',
                border: 'none', borderRadius: 'var(--r-sm)',
                fontSize: '.95rem', fontWeight: 600,
                cursor: form.name && form.email && form.phone ? 'pointer' : 'not-allowed',
              }}
            >
              مرحله بعد ←
            </button>
          </div>
        )}

        {/* Step 2 — جزئیات پروژه */}
        {step === 2 && (
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '2.5rem',
          }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '.4rem' }}>
              جزئیات پروژه
            </h2>
            <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)', marginBottom: '2rem' }}>
              تا جلسه مشاوره را دقیق‌تر آماده کنیم.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

              {/* Service */}
              <div>
                <label style={labelStyle}>چه خدمتی نیاز دارید؟</label>
                <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
                  {services.map(s => (
                    <div key={s} style={chipStyle(form.service === s)}
                      onClick={() => set('service', s)}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label style={labelStyle}>بودجه تقریبی</label>
                <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
                  {budgets.map(b => (
                    <div key={b} style={chipStyle(form.budget === b)}
                      onClick={() => set('budget', b)}>
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label style={labelStyle}>زمان‌بندی مورد نظر</label>
                <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
                  {timelines.map(t => (
                    <div key={t} style={chipStyle(form.timeline === t)}
                      onClick={() => set('timeline', t)}>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button onClick={() => setStep(1)} style={{
                padding: '.85rem 1.5rem',
                background: 'transparent',
                border: '1.5px solid var(--c-border)',
                borderRadius: 'var(--r-sm)',
                fontSize: '.9rem', fontWeight: 500,
                cursor: 'pointer', color: 'var(--c-text-muted)',
              }}>
                ← قبلی
              </button>
              <button onClick={() => setStep(3)} style={{
                padding: '.85rem 2rem',
                background: 'var(--c-primary)', color: 'white',
                border: 'none', borderRadius: 'var(--r-sm)',
                fontSize: '.95rem', fontWeight: 600, cursor: 'pointer',
              }}>
                مرحله بعد ←
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — توضیحات + ارسال */}
        {step === 3 && (
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '2.5rem',
          }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '.4rem' }}>
              توضیحات تکمیلی
            </h2>
            <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)', marginBottom: '2rem' }}>
              هر اطلاعات اضافه‌ای که فکر می‌کنید مفید است.
            </p>

            <textarea
              value={form.description}
              onChange={e => set('description', e.target.value)}
              placeholder="درباره برند، چالش‌ها یا هدف پروژه بنویسید..."
              rows={6}
              style={{
                ...inputStyle,
                resize: 'vertical', lineHeight: 1.8,
              }}
            />

            {/* Summary */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              background: 'var(--c-primary-bg)',
              border: '1px solid rgba(46,107,94,.15)',
              borderRadius: 'var(--r-sm)',
              fontSize: '.82rem',
              color: 'var(--c-text-muted)',
              lineHeight: 1.8,
            }}>
              <div style={{ fontWeight: 600, color: 'var(--c-primary)', marginBottom: '.5rem' }}>خلاصه درخواست:</div>
              <div>نام: {form.name} {form.company && `| ${form.company}`}</div>
              {form.service && <div>خدمت: {form.service}</div>}
              {form.timeline && <div>زمان‌بندی: {form.timeline}</div>}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button onClick={() => setStep(2)} style={{
                padding: '.85rem 1.5rem',
                background: 'transparent',
                border: '1.5px solid var(--c-border)',
                borderRadius: 'var(--r-sm)',
                fontSize: '.9rem', fontWeight: 500,
                cursor: 'pointer', color: 'var(--c-text-muted)',
              }}>
                ← قبلی
              </button>
              <button onClick={() => setStep(4)} style={{
                padding: '.85rem 2rem',
                background: 'var(--c-primary)', color: 'white',
                border: 'none', borderRadius: 'var(--r-sm)',
                fontSize: '.95rem', fontWeight: 600, cursor: 'pointer',
              }}>
                ارسال درخواست ←
              </button>
            </div>
          </div>
        )}

        {/* Step 4 — تایید */}
        {step === 4 && (
          <div style={{
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
          }}>
            <div style={{
              width: 64, height: 64,
              background: 'var(--c-primary)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '.75rem' }}>
              درخواست شما ثبت شد!
            </h2>
            <p style={{
              fontSize: '.95rem', color: 'var(--c-text-muted)',
              lineHeight: 1.8, maxWidth: 400, margin: '0 auto 2rem',
            }}>
              تیم ROS حداکثر ظرف ۲۴ ساعت کاری با شما تماس
              می‌گیرد تا جلسه مشاوره را هماهنگ کند.
            </p>
            <Link href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              padding: '.8rem 1.8rem',
              background: 'var(--c-primary)', color: 'white',
              borderRadius: 'var(--r-sm)',
              fontSize: '.9rem', fontWeight: 600,
            }}>
              بازگشت به خانه
            </Link>
          </div>
        )}

      </section>
    </main>
  )
}

