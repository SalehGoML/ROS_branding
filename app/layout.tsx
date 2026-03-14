import ScrollToHash from '@/components/shared/ScrollToHash'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../lib/theme'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export const metadata: Metadata = {
  title: 'رُس | آژانس هوشمند برندینگ',
  description: 'آژانس هوشمند برندینگ — ترکیب دقیق تحلیل داده و درک فرهنگی بازار ایران',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        {/* prevent flash — set dark before paint */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            document.documentElement.setAttribute('data-theme','dark');
            document.documentElement.style.background='#0C0F0E';
          })();
        `}} />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <ScrollToHash />
        {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
