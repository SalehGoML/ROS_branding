'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const PUBLIC_PATHS = ['/', '/login', '/register', '/forgot-password', '/reset-password', '/about', '/services', '/portfolio', '/magazine', '/contact', '/team']

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('ros_token')
    const isPublic = PUBLIC_PATHS.some(p => pathname === p || pathname.startsWith(p + '/') || pathname.startsWith('/magazine/') || pathname.startsWith('/services/') || pathname.startsWith('/team/'))

    if (!token && !isPublic) {
      router.replace('/login?redirect=' + encodeURIComponent(pathname))
      return
    }

    if (token && (pathname === '/login' || pathname === '/register')) {
      router.replace('/dashboard')
      return
    }
    if (token && pathname.startsWith('/admin')) {
      setChecked(true)
      return
    }

    setChecked(true)
  }, [pathname])

  if (!checked) return (
    <div style={{ minHeight: '100vh', background: '#0C0F0E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '3px solid rgba(74,140,124,.2)', borderTop: '3px solid #4A8C7C', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )

  return <>{children}</>
}
