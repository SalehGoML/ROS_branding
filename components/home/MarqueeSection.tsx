const items = [
  'استراتژی برند', 'هویت بصری', 'تحلیل هوشمند',
  'نام‌گذاری برند', 'حاکمیت برند', 'تجربه مشتری',
  'اکوسیستم دیجیتال', 'ROS AI', 'Brand Architecture', 'M&A Branding',
]

export default function MarqueeSection() {
  const doubled = [...items, ...items]

  return (
    <div style={{
      borderTop: '1px solid var(--c-border)',
      borderBottom: '1px solid var(--c-border)',
      padding: '1rem 0',
      overflow: 'hidden',
      background: 'var(--c-surface)',
    }}>
      <div style={{
        display: 'flex',
        gap: '3rem',
        animation: 'marquee 24s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: 'flex', alignItems: 'center', gap: '.75rem',
            fontSize: '.78rem', fontWeight: 400,
            color: 'var(--c-text-muted)',
            whiteSpace: 'nowrap', letterSpacing: '.05em',
          }}>
            <span style={{
              width: 4, height: 4,
              background: 'var(--c-primary)',
              borderRadius: '50%', opacity: .6,
              display: 'inline-block',
            }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}