'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

export default function ScrollReveal({ children, delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const translate = direction === 'up' ? 'translateY(32px)' : direction === 'left' ? 'translateX(-32px)' : 'translateX(32px)'

    el.style.opacity = '0'
    el.style.transform = translate
    el.style.transition = `opacity .65s ease ${delay}ms, transform .65s ease ${delay}ms`

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translate(0)'
        obs.disconnect()
      }
    }, { threshold: 0.12 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, direction])

  return <div ref={ref}>{children}</div>
}
