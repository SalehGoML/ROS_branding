'use client'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles: Record<string, { title: string; excerpt: string; category: string; readTime: string; date: string; keywords: string[]; content: { h2: string; p: string }[] }> = {
  'branding-chist': {
    title: 'برندینگ چیست؟ راهنمای جامع برندسازی برای کسب‌وکارهای ایرانی',
    excerpt: 'برندینگ فقط لوگو نیست. در این مقاله می‌آموزید برندینگ واقعی چه تفاوتی با طراحی گرافیک دارد و چرا هر کسب‌وکاری به آن نیاز دارد.',
    category: 'برندینگ', readTime: '۸', date: '۱۴۰۴/۰۲/۱۵',
    keywords: ['برندینگ چیست', 'برندسازی', 'تعریف برند'],
    content: [
      { h2: 'برند چیست؟', p: 'برند مجموعه‌ای از احساسات، تجربیات و انتظاراتی است که مخاطب درباره یک کسب‌وکار دارد. وقتی می‌گوییم "برند"، منظورمان فقط لوگو یا رنگ‌های شرکتی نیست — بلکه کل شخصیت، صدا، ارزش‌ها و وعده‌ای است که یک کسب‌وکار به مشتریانش می‌دهد.' },
      { h2: 'برندینگ در مقابل طراحی گرافیک', p: 'بسیاری از صاحبان کسب‌وکار فکر می‌کنند با داشتن یک لوگوی زیبا، برندسازی انجام داده‌اند. اما برندینگ بسیار عمیق‌تر از طراحی بصری است. برندینگ درباره جایگاه‌یابی در ذهن مخاطب، تعریف ارزش‌های اصلی، و ایجاد ارتباط عاطفی پایدار با مشتری است.' },
      { h2: 'چرا برندینگ برای کسب‌وکار ایرانی اهمیت دارد؟', p: 'در بازار رقابتی ایران، محصولات و خدمات مشابه بسیار زیاد است. تنها چیزی که شما را از رقبا متمایز می‌کند، برند شماست. مشتری ایرانی به اعتماد اهمیت زیادی می‌دهد — و برند قوی، این اعتماد را می‌سازد.' },
      { h2: 'مراحل اصلی برندینگ', p: 'فرایند برندینگ شامل کشف، استراتژی، هویت بصری، مستندسازی و پیاده‌سازی است. هر مرحله نیاز به تحقیق، تحلیل و خلاقیت دارد. آژانس برندینگ رُس این مسیر را به صورت شفاف و گام‌به‌گام طراحی کرده است.' },
      { h2: 'نتیجه‌گیری', p: 'برندینگ یک سرمایه‌گذاری است، نه هزینه. کسب‌وکارهایی که روی برند خود سرمایه‌گذاری می‌کنند، در بلندمدت قیمت بالاتری می‌گیرند، مشتریان وفادارتری دارند و در برابر رقبا مقاوم‌تر هستند.' },
    ],
  },
  'logo-design-guide': {
    title: 'طراحی لوگو حرفه‌ای: از ایده تا اجرا',
    excerpt: 'چه معیارهایی یک لوگو را حرفه‌ای می‌کند؟ همه چیز درباره طراحی لوگوی ماندگار.',
    category: 'طراحی لوگو', readTime: '۱۰', date: '۱۴۰۴/۰۲/۰۸',
    keywords: ['طراحی لوگو', 'لوگوی حرفه‌ای', 'اصول طراحی لوگو'],
    content: [
      { h2: 'لوگوی خوب چه ویژگی‌هایی دارد؟', p: 'یک لوگوی حرفه‌ای باید ساده، به‌یادماندنی، بی‌زمان، چندکاربردی و مناسب با کسب‌وکار باشد. این پنج اصل، پایه‌ای است که طراحان حرفه‌ای همیشه به آن توجه می‌کنند.' },
      { h2: 'مراحل طراحی لوگو', p: 'طراحی لوگو از تحقیق درباره برند و رقبا شروع می‌شود. سپس مرحله ایده‌پردازی، اسکچ، دیجیتال‌سازی، تست در سایزها و محیط‌های مختلف، و در نهایت تحویل فایل‌های نهایی است.' },
      { h2: 'رنگ در طراحی لوگو', p: 'انتخاب رنگ لوگو یکی از مهم‌ترین تصمیم‌های برندینگ است. هر رنگ احساس و پیام خاصی دارد. آبی اعتماد می‌سازد، سبز با طبیعت و سلامت مرتبط است، و قرمز انرژی و اورژانس را منتقل می‌کند.' },
      { h2: 'اشتباهات رایج در طراحی لوگو', p: 'استفاده از بیش از سه رنگ، انتخاب فونت‌های پیچیده، کپی‌برداری از لوگوهای موجود، و عدم توجه به خوانایی در سایزهای کوچک — اینها رایج‌ترین اشتباهاتی هستند که باید از آنها اجتناب کرد.' },
    ],
  },
  'ai-in-branding': {
    title: 'هوش مصنوعی در برندینگ: ابزارها، کاربردها و محدودیت‌ها',
    excerpt: 'ChatGPT، Midjourney و دیگر ابزارهای AI چطور فرایند برندسازی را تغییر داده‌اند؟',
    category: 'هوش مصنوعی', readTime: '۱۱', date: '۱۴۰۴/۰۱/۱۲',
    keywords: ['هوش مصنوعی برندینگ', 'AI در طراحی', 'ChatGPT برندینگ'],
    content: [
      { h2: 'انقلاب هوش مصنوعی در برندینگ', p: 'ظهور ابزارهای هوش مصنوعی مثل ChatGPT، Midjourney و Claude، فرایند برندسازی را متحول کرده‌اند. کارهایی که قبلاً هفته‌ها طول می‌کشید، حالا در ساعات انجام می‌شود.' },
      { h2: 'کجا از AI استفاده کنیم؟', p: 'هوش مصنوعی در تحقیق درباره مخاطب، تولید ایده، نوشتن متن برند، تحلیل رقبا و حتی ساخت اولیه المان‌های بصری بسیار مفید است. این ابزارها سرعت کار را چندین برابر می‌کنند.' },
      { h2: 'محدودیت‌های AI در برندینگ', p: 'هوش مصنوعی نمی‌تواند درک عمیق فرهنگی داشته باشد، احساسات انسانی را به‌درستی بسنجد، یا استراتژی منحصربه‌فرد خلق کند. نظارت انسانی همچنان ضروری است.' },
      { h2: 'آینده برندینگ با AI', p: 'آینده برندینگ ترکیبی از خلاقیت انسانی و توانمندی هوش مصنوعی خواهد بود. برندهایی که زودتر این ترکیب را یاد بگیرند، مزیت رقابتی قابل توجهی خواهند داشت.' },
    ],
  },
}

const placeholder = { title: 'این مقاله به زودی منتشر می‌شود', excerpt: 'محتوای این مقاله در حال آماده‌سازی است.', category: 'برندینگ', readTime: '۵', date: '۱۴۰۴', keywords: ['برندینگ', 'رُس'], content: [{ h2: 'به زودی', p: 'این مقاله در حال نگارش است و به زودی منتشر خواهد شد.' }] }

const catColors: Record<string,string> = { 'برندینگ':'rgba(74,140,124,.15)','طراحی لوگو':'rgba(99,102,241,.15)','هویت بصری':'rgba(236,72,153,.12)','استراتژی برند':'rgba(245,158,11,.12)','هوش مصنوعی':'rgba(14,165,233,.12)' }
const catText: Record<string,string> = { 'برندینگ':'rgba(74,140,124,.9)','طراحی لوگو':'rgba(129,140,248,.9)','هویت بصری':'rgba(244,114,182,.9)','استراتژی برند':'rgba(251,191,36,.9)','هوش مصنوعی':'rgba(56,189,248,.9)' }

export default function ArticleClient({ slug }: { slug: string }) {
  const article = articles[slug] || placeholder

  return (
    <main style={{ background: '#0C0F0E', color: 'white', minHeight: '100vh', paddingTop: 80 }}>
      <article style={{ maxWidth: 780, margin: '0 auto', padding: '4rem 1.5rem 8rem' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '2.5rem', fontSize: '.72rem', color: 'rgba(255,255,255,.25)' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>خانه</Link>
          <span>/</span>
          <Link href="/magazine" style={{ color: 'inherit', textDecoration: 'none' }}>مجله</Link>
          <span>/</span>
          <span style={{ color: 'rgba(74,140,124,.7)' }}>{article.category}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' as const }}>
          <span style={{ fontSize: '.62rem', fontWeight: 700, background: catColors[article.category] || 'rgba(74,140,124,.15)', color: catText[article.category] || 'rgba(74,140,124,.9)', borderRadius: 100, padding: '.25rem .75rem' }}>{article.category}</span>
          <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.25)' }}>{article.readTime} دقیقه مطالعه</span>
          <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.2)' }}>·</span>
          <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.2)' }}>{article.date}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, letterSpacing: '-.04em', lineHeight: 1.3, marginBottom: '1.5rem' }}>{article.title}</h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.9, marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,.07)' }}>{article.excerpt}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {article.content.map((block, i) => (
            <div key={i}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white', letterSpacing: '-.02em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <span style={{ width: 3, height: 20, background: 'linear-gradient(to bottom, #7dcfbe, #2E6B5E)', borderRadius: 2, flexShrink: 0, display: 'inline-block' }} />
                {block.h2}
              </h2>
              <p style={{ fontSize: '.92rem', color: 'rgba(255,255,255,.55)', lineHeight: 2, paddingRight: '1.25rem' }}>{block.p}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.2)', marginBottom: '.75rem', letterSpacing: '.08em' }}>کلمات کلیدی:</div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' as const }}>
            {article.keywords.map(k => <span key={k} style={{ fontSize: '.65rem', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 100, padding: '.2rem .65rem', color: 'rgba(255,255,255,.35)' }}>{k}</span>)}
          </div>
        </div>

        <div style={{ marginTop: '3.5rem', padding: '2rem', background: 'rgba(74,140,124,.06)', border: '1px solid rgba(74,140,124,.15)', borderRadius: 20, textAlign: 'center' as const }}>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '.5rem' }}>برند خود را حرفه‌ای بسازید</div>
          <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.35)', marginBottom: '1.25rem' }}>آژانس رُس آماده است تا در مسیر برندسازی همراه شما باشد</div>
          <Link href="/contact/request-consultation" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: '#4A8C7C', color: 'white', borderRadius: 10, padding: '.7rem 1.5rem', fontSize: '.82rem', fontWeight: 700, textDecoration: 'none' }}>مشاوره رایگان ←</Link>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' as const }}>
          <Link href="/magazine" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontSize: '.82rem', fontWeight: 600, color: 'rgba(74,140,124,.7)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            بازگشت به مجله
          </Link>
        </div>
      </article>
    </main>
  )
}
