'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authAPI } from '@/lib/api'

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'ok' | 'denied'>('loading')

  useEffect(() => {
    const token = localStorage.getItem('ros_token')
    if (!token) {
      router.replace('/login')
      return
    }
    authAPI.me()
      .then(user => {
        if (user.role === 'admin') {
          setStatus('ok')
        } else {
          setStatus('denied')
          router.replace('/dashboard')
        }
      })
      .catch(() => {
        localStorage.removeItem('ros_token')
        localStorage.removeItem('ros_user')
        setStatus('denied')
        router.replace('/login')
      })
  }, [router])

  if (status === 'loading') return (
    <div style={{ minHeight: '100vh', background: '#0F1117', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '3px solid rgba(255,255,255,.1)', borderTop: '3px solid #4A8C7C', borderRadius: '50%', animation: 'spin .8s linear infinite' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  if (status === 'denied') return null

  return <>{children}</>
}
