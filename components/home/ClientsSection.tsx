
'use client'

const clients = [

  { name: 'راهکار صنعت', slug: 'rahkarsanat' },

  { name: 'آبرسو', slug: 'abrso' },

  { name: 'تراbar', slug: 'terabar' },

  { name: 'آوا پرداز', slug: 'avapardaz' },

  { name: 'حساب‌رو', slug: 'hesabro' },

  { name: 'حجت‌راه', slug: 'hojjatrah' },

  { name: 'موبیت', slug: 'mobit' },

  { name: 'موبیت استور', slug: 'mobit-store' },

  { name: 'پی‌بای', slug: 'paybuy' },

  { name: 'آوینوکس', slug: 'avinox' },

  { name: 'تفکر', slug: 'tafakor' },

  { name: 'پارک', slug: 'park' },

  { name: 'صدرا مدرن', slug: 'sadra-modern' },

  { name: 'رادمان سرویس', slug: 'rademan-service' },

  { name: 'نیروبار', slug: 'niroobar' },

  { name: 'کیز', slug: 'kiz' },

  { name: 'نوویتیت', slug: 'novitiate' },

  { name: 'Innovation Factory', slug: 'innovation-factory' },

  { name: 'ایزی تریپ', slug: 'easy-trip' },

  { name: 'بیسبال', slug: 'baseball' },

  { name: 'iMITCO', slug: 'imitco' },

  { name: 'Mining Platform', slug: 'mining-platform' },

  { name: 'مهارت افزار', slug: 'maharat-afzar' },

]

function ClientCard({ client }: { client: typeof clients[0] }) {

  return (

    <div style={{

      display: 'flex', alignItems: 'center', gap: '.75rem',

      padding: '.65rem 1.25rem',

      background: 'rgba(255,255,255,.03)',

      border: '1px solid rgba(255,255,255,.07)',

      borderRadius: 12, flexShrink: 0,

      whiteSpace: 'nowrap' as const,

    }}>

      {/* logo placeholder — replace with <img> when logos are ready */}

      <div style={{

        width: 28, height: 28, borderRadius: 6, flexShrink: 0,

        background: 'rgba(74,140,124,.12)',

        border: '1px solid rgba(74,140,124,.15)',

        display: 'flex', alignItems: 'center', justifyContent: 'center',

        fontSize: '.65rem', fontWeight: 700, color: 'rgba(74,140,124,.6)',

        overflow: 'hidden',

      }}>

        {/* وقتی لوگو آماده شد این خط رو uncomment کن */}

        {/* <img src={`/clients/${client.slug}.png`} alt={client.name} style={{ width:'100%', height:'100%', objectFit:'contain' }} /> */}

        {client.name.charAt(0)}

      </div>

      <span style={{ fontSize: '.82rem', fontWeight: 600, color: 'rgba(255,255,255,.5)' }}>

        {client.name}

      </span>

    </div>

  )

}

export default function ClientsSection() {

  const doubled = [...clients, ...clients]

  return (

    <section style={{ background: 'var(--c-bg)', padding: '2.5rem 0', borderTop: '1px solid var(--c-border)', overflow: 'hidden' }}>

      <style>{`

        @keyframes scrollRTL {

          from { transform: translateX(0); }

          to   { transform: translateX(-50%); }

        }

        .clients-track {

          animation: scrollRTL 35s linear infinite;

          display: flex; gap: .75rem;

          width: max-content;

        }

        .clients-track:hover { animation-play-state: paused; }

      `}</style>

      {/* label */}

      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>

        <span style={{ fontSize: '.62rem', fontWeight: 700, letterSpacing: '.18em', color: 'rgba(74,140,124,.5)', textTransform: 'uppercase' as const }}>

          سازمان‌های همکار

        </span>

      </div>

      {/* fade edges */}

      <div style={{ position: 'relative' }}>

        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, var(--c-bg), transparent)', zIndex: 1, pointerEvents: 'none' }} />

        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, var(--c-bg), transparent)', zIndex: 1, pointerEvents: 'none' }} />

        <div className="clients-track">

          {doubled.map((client, i) => (

            <ClientCard key={`${client.slug}-${i}`} client={client} />

          ))}

        </div>

      </div>

    </section>

  )

}

