'use client'

import { useState } from 'react'

const plans = [
  {
    id: 'starter', name: 'استارتر', price: '۱۹۰,۰۰۰', period: 'ماهانه',
    features: ['۱ برند', '۲ کانال تحلیل', 'گزارش ماهانه', 'پشتیبانی ایمیل'],
    notIncluded: ['ROS AI پیشرفته', 'پیشنهادنامه هوشمند', 'مشاور اختصاصی'],
    color: 'var(--c-border)', highlight: false,
  },
  {
    id: 'pro', name: 'حرفه‌ای', price: '۴۹۰,۰۰۰', period: 'ماهانه',
    features: ['۳ برند', '۴ کانال تحلیل', 'گزارش هفتگی', 'ROS AI پیشرفته', 'پیشنهادنامه هوشمند', 'پشتیبانی اولویت‌دار'],
    notIncluded: ['مشاور اختصاصی'],
    color: 'var(--c-primary)', highlight: true,
    current: true,
  },
  {
    id: 'enterprise', name: 'سازمانی', price: 'تماس بگیرید', period: '',
    features: ['برند نامحدود', 'تمام کانال‌ها', 'گزارش روزانه', 'ROS AI پیشرفته', 'پیشنهادنامه هوشمند', 'مشاور اختصاصی', 'API اختصاصی'],
    notIncluded: [],
    color: '#1A1916', highlight: false,
  },
]

export default function PlanPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.25rem' }}>
          پلن و اشتراک
        </h1>
        <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
          پلن فعلی شما: <strong>حرفه‌ای</strong> — انقضا: ۱۴۰۳/۱۲/۲۹
        </p>
      </div>

      {/* Billing toggle */}
      <div style={{
        display: 'inline-flex',
        background: 'var(--c-surface-2)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-sm)',
        padding: 4, marginBottom: '2rem',
      }}>
        {([['monthly', 'ماهانه'], ['yearly', 'سالانه (۲ ماه رایگان)']] as const).map(([val, label]) => (
          <button key={val} onClick={() => setBilling(val)} style={{
            padding: '.5rem 1.1rem',
            background: billing === val ? 'white' : 'transparent',
            border: billing === val ? '1px solid var(--c-border)' : '1px solid transparent',
            borderRadius: 'calc(var(--r-sm) - 2px)',
            fontSize: '.82rem', fontWeight: billing === val ? 600 : 400,
            color: billing === val ? 'var(--c-text)' : 'var(--c-text-muted)',
            cursor: 'pointer',
            boxShadow: billing === val ? '0 1px 4px rgba(0,0,0,.08)' : 'none',
          }}>
            {label}
          </button>
        ))}
      </div>

      {/* Plans */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
        {plans.map(plan => (
          <div key={plan.id} style={{
            background: plan.highlight ? 'var(--c-primary)' : 'var(--c-surface)',
            border: `1.5px solid ${plan.highlight ? 'var(--c-primary)' : 'var(--c-border)'}`,
            borderRadius: 'var(--r-xl)',
            padding: '1.75rem',
            position: 'relative',
            color: plan.highlight ? 'white' : 'var(--c-text)',
          }}>
            {plan.current && (
              <div style={{
                position: 'absolute', top: '-12px', right: '50%',
                transform: 'translateX(50%)',
                padding: '.2rem .85rem',
                background: '#F59E0B', color: 'white',
                borderRadius: 100,
                fontSize: '.68rem', fontWeight: 700,
                whiteSpace: 'nowrap',
              }}>
                پلن فعلی شما
              </div>
            )}

            <div style={{ fontSize: '.82rem', opacity: .7, marginBottom: '.3rem' }}>{plan.name}</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '.2rem' }}>
              {billing === 'yearly' && plan.price !== 'تماس بگیرید'
                ? plan.price.replace('۴۹۰', '۳۹۰').replace('۱۹۰', '۱۵۰')
                : plan.price}
            </div>
            {plan.period && (
              <div style={{ fontSize: '.75rem', opacity: .6, marginBottom: '1.5rem' }}>
                تومان / {plan.period}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.5rem' }}>
              {plan.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.82rem' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke={plan.highlight ? 'rgba(255,255,255,.9)' : 'var(--c-primary)'} strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </div>
              ))}
              {plan.notIncluded.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.82rem', opacity: .4 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  {f}
                </div>
              ))}
            </div>

            <button style={{
              width: '100%', padding: '.7rem',
              background: plan.highlight ? 'white' : plan.id === 'enterprise' ? 'var(--c-primary)' : 'var(--c-primary-bg)',
              color: plan.highlight ? 'var(--c-primary)' : plan.id === 'enterprise' ? 'white' : 'var(--c-primary)',
              border: 'none', borderRadius: 'var(--r-sm)',
              fontSize: '.85rem', fontWeight: 700, cursor: 'pointer',
            }}>
              {plan.current ? 'پلن فعلی' : plan.id === 'enterprise' ? 'تماس بگیرید' : 'انتخاب پلن'}
            </button>
          </div>
        ))}
      </div>

      {/* Invoice */}
      <div style={{
        marginTop: '2.5rem',
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-xl)',
        padding: '1.75rem',
      }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>تاریخچه پرداخت‌ها</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {[
            { date: '۱۴۰۳/۰۹/۰۱', amount: '۴۹۰,۰۰۰', status: 'موفق', plan: 'حرفه‌ای' },
            { date: '۱۴۰۳/۰۸/۰۱', amount: '۴۹۰,۰۰۰', status: 'موفق', plan: 'حرفه‌ای' },
            { date: '۱۴۰۳/۰۷/۰۱', amount: '۴۹۰,۰۰۰', status: 'موفق', plan: 'حرفه‌ای' },
          ].map((inv, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem',
              padding: '.85rem 1rem',
              background: 'var(--c-surface-2)',
              borderRadius: 'var(--r-sm)',
            }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '.8rem', color: 'var(--c-text-muted)' }}>{inv.date}</span>
                <span style={{ fontSize: '.82rem', fontWeight: 500 }}>{inv.plan}</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{
                  fontSize: '.7rem', padding: '.15rem .55rem',
                  background: '#ECFDF5', color: '#059669',
                  borderRadius: 100, fontWeight: 600,
                }}>{inv.status}</span>
                <span style={{ fontSize: '.85rem', fontWeight: 600 }}>{inv.amount} تومان</span>
                <button style={{
                  fontSize: '.75rem', color: 'var(--c-primary)',
                  background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500,
                }}>
                  دانلود فاکتور
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
