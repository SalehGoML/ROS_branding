'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = hash.slice(1)

    let found = false
    const observer = new MutationObserver(() => {
      const el = document.getElementById(id)
      if (el && !found) {
        found = true
        observer.disconnect()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })

    // اول چک کن شاید الان هست
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    // اگه نبود منتظر DOM بمون
    observer.observe(document.body, { childList: true, subtree: true })
    // timeout بعد از ۳ ثانیه
    const t = setTimeout(() => observer.disconnect(), 3000)
    return () => { observer.disconnect(); clearTimeout(t) }
  }, [pathname])

  return null
}
