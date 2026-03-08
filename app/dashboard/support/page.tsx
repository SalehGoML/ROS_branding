import Link from 'next/link'

const faqs = [
  { q: 'چطور سند برند خود را آپلود کنم؟', a: 'از منوی «سند برند» در داشبورد، گزینه «بارگذاری سند» را انتخاب کنید. فرمت‌های PDF و Word پشتیبانی می‌شوند.' },
  { q: 'تحلیل برند چقدر طول می‌کشد؟', a: 'معمولاً بین ۲ تا ۵ دقیقه. برای کانال‌هایی که نیاز به بارگذاری فایل دارند ممکن است کمی بیشتر باشد.' },
  { q: 'چند کانال می‌توانم تحلیل کنم؟', a: 'بستگی به پلن شما دارد. پلن حرفه‌ای تا ۴ کانال و پلن سازمانی کانال نامحدود دارد.' },
  { q: 'آیا می‌توانم سند برند را ویرایش کنم؟', a: 'بله، از صفحه «سند برند» می‌توانید تمام بخش‌ها را به صورت inline ویرایش کنید.' },
  { q: 'پیشنهادنامه چطور تولید می‌شود؟', a: 'ROS AI بر اساس داده‌های تحلیل‌شده و سند برند شما، پیشنهادات بهبود شخصی‌سازی‌شده تولید می‌کند.' },
]

export default function SupportPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: 760, margin: '0 auto' }}>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.25rem' }}>
          راهنما و پشتیبانی
        </h1>
        <p style={{ fontSize: '.85rem', color: 'var(--c-text-muted)' }}>
          سوالی دارید؟ اینجا پیدا می‌کنید.
        </p>
      </div>

      {/* Contact cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { icon: '📧', title: 'ایمیل', value: 'info@rosbrand.ir', href: 'mailto:info@rosbrand.ir' },
          { icon: '💬', title: 'واتساپ', value: '+98 913 494 5184', href: 'https://wa.me/989134945184' },
          { icon: '📅', title: 'جلسه مشاوره', value: 'رزرو آنلاین', href: '/contact/request-consultation' },
        ].map(c => (
          <a key={c.title} href={c.href} style={{
            display: 'block',
            background: 'var(--c-surface)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.5rem',
            textDecoration: 'none', textAlign: 'center',
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>{c.icon}</div>
            <div style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--c-text)', marginBottom: '.2rem' }}>{c.title}</div>
            <div style={{ fontSize: '.78rem', color: 'var(--c-primary)' }}>{c.value}</div>
          </a>
        ))}
      </div>

      {/* FAQ */}
      <div style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}>
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--c-border)' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>سوالات متداول</h2>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} style={{
            padding: '1.25rem 1.75rem',
            borderBottom: i < faqs.length - 1 ? '1px solid var(--c-border)' : 'none',
          }}>
            <div style={{ fontSize: '.9rem', fontWeight: 600, marginBottom: '.5rem' }}>
              {faq.q}
            </div>
            <div style={{ fontSize: '.83rem', color: 'var(--c-text-muted)', lineHeight: 1.7 }}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
