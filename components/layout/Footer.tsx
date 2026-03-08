import Link from 'next/link'

const serviceLinks = [
  { label: 'استراتژی برند',  href: '/brand-strategy/strategy' },
  { label: 'ساختار برند',    href: '/brand-strategy/architecture' },
  { label: 'تحلیل عملکرد',  href: '/brand-strategy/performance' },
  { label: 'هویت بصری',      href: '/brand-design/naming' },
  { label: 'تجربه برند',     href: '/brand-design/experience' },
  { label: 'تحلیل هوشمند',  href: '/ai' },
]

const companyLinks = [
  { label: 'درباره ما',      href: '/about' },
  { label: 'نمونه‌کارها',    href: '/portfolio' },
  { label: 'تماس با ما',     href: '/contact' },
  { label: 'مشاوره رایگان',  href: '/contact/request-consultation' },
]

const contactLinks = [
  { label: 'hello@ros.agency',   href: 'mailto:hello@ros.agency' },
  { label: '+۹۸ ۲۱ ×××× ××××',  href: 'tel:+98' },
  { label: 'واتساپ مستقیم',      href: '#' },
  { label: 'تهران، ایران',        href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1A1916', padding: '4rem 0 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>

        {/* Top */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,.08)',
          marginBottom: '2rem',
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: 34, height: 34,
                background: 'var(--c-primary)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L3 7v10l9 5 9-5V7L12 2z"/>
                </svg>
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'white', letterSpacing: '.06em' }}>
                ROS
              </span>
            </div>
            <p style={{
              fontSize: '.85rem',
              color: 'rgba(255,255,255,.4)',
              lineHeight: 1.75,
              maxWidth: 280,
              marginBottom: '1.5rem',
            }}>
              آژانس هوشمند برندینگ — ترکیب تفکر استراتژیک انسانی و تحلیل‌های داده‌محور.
            </p>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              {['in', 'ig', 'tw'].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36,
                  background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 'var(--r-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.7rem', fontWeight: 600,
                  color: 'rgba(255,255,255,.5)',
                }}>{s}</a>
              ))}
            </div>
          </div>

          <FooterCol title="خدمات"  links={serviceLinks} />
          <FooterCol title="شرکت"   links={companyLinks} />
          <FooterCol title="تماس"   links={contactLinks} />

        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.25)' }}>
            © ۱۴۰۴ آژانس ROS — تمام حقوق محفوظ است.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.4)' }}>
              حریم خصوصی
            </Link>
            <Link href="/terms" style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.4)' }}>
              شرایط استفاده
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

function FooterCol({ title, links }: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <div style={{
        fontSize: '.78rem', fontWeight: 600,
        letterSpacing: '.08em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,.35)',
        marginBottom: '1.25rem',
      }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.href} style={{ marginBottom: '.6rem' }}>
            <Link href={l.href} style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.5)' }}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}