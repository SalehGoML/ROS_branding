import HeroForm from '../components/home/HeroForm'
import HeroImageLinks from '../components/home/HeroImageLinks'
import MarqueeSection from '../components/home/MarqueeSection'
import AdvantageSection from '../components/home/AdvantageSection'
import ServicesSection from '../components/home/ServicesSection'
import PortfolioSection from '../components/home/PortfolioSection'
import ProcessSection from '../components/home/ProcessSection'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  return (
    <main style={{ background: '#0C0F0E', color: 'white' }}>
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        padding: '7rem 2rem 4rem',
        position: 'relative', overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '15%', left: '50%',
          transform: 'translateX(-50%)',
          width: 500, height: 250,
          background: 'radial-gradient(ellipse, rgba(46,107,94,.15) 0%, transparent 70%)',
          pointerEvents: 'none', filter: 'blur(60px)',
        }} />

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          padding: '.3rem 1rem .3rem .5rem',
          background: 'rgba(46,107,94,.12)',
          border: '1px solid rgba(46,107,94,.25)',
          borderRadius: 100,
          fontSize: '.7rem', color: 'rgba(255,255,255,.55)',
          marginBottom: '1.75rem',
          position: 'relative', zIndex: 2,
        }}>
          <span style={{
            padding: '.18rem .6rem',
            background: '#2E6B5E', color: 'white',
            borderRadius: 100, fontSize: '.62rem', fontWeight: 700,
          }}>ROS</span>
          آژانس هوشمند برندینگ | تهران
        </div>

        <div style={{
          position: 'relative', zIndex: 2,
          width: '100%', maxWidth: 780,
          marginBottom: '2.25rem',
        }}>
          <div style={{
            borderRadius: 16, overflow: 'hidden',
            border: '1px solid rgba(255,255,255,.08)',
            position: 'relative',
          }}>
            <img
              src="/brand/wallpaper-1.jpg"
              alt="ROS Branding"
              style={{
                width: '100%', height: 500,
                objectFit: 'cover', objectPosition: 'center 35%',
                display: 'block',
                filter: 'brightness(.5) saturate(1.15)',
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to left, rgba(46,107,94,.25) 0%, rgba(0,0,0,.3) 60%)',
            }} />
            <HeroImageLinks />
            <div style={{
              position: 'absolute', top: '20%', bottom: '20%',
              left: '50%', width: 1,
              background: 'rgba(255,255,255,.15)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>

        <h1 style={{
          fontSize: 'clamp(1.7rem, 3.5vw, 2.8rem)',
          fontWeight: 700, lineHeight: 1.3,
          letterSpacing: '-.03em',
          marginBottom: '1rem',
          position: 'relative', zIndex: 2,
          maxWidth: 680,
        }}>
          مدیریت یکپارچگی برند
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #4A8C7C 0%, #2E6B5E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>با تفکر استراتژیک</span>
          {' '}و تحلیل هوشمند
        </h1>

        <p style={{
          fontSize: '.88rem',
          color: 'rgba(255,255,255,.4)',
          lineHeight: 1.85, maxWidth: 400,
          marginBottom: '2rem',
          position: 'relative', zIndex: 2,
        }}>
          ترکیب دقیق تحلیل داده و درک فرهنگی بازار ایران
          برای ساخت برندهایی که ماندگار می‌مانند.
        </p>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 500 }}>
          <HeroForm />
        </div>

        <div style={{
          position: 'absolute', bottom: '1.5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.35rem',
          color: 'rgba(255,255,255,.12)', fontSize: '.58rem',
        }}>
          <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, rgba(255,255,255,.12), transparent)' }} />
          پایین
        </div>
      </section>

      <ServicesSection />
      <MarqueeSection />
      <AdvantageSection />
      <PortfolioSection />
      <ProcessSection />
      <CTASection />

    </main>
  )
}
