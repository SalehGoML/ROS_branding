'use client'
import { useState, useEffect } from 'react'

export function useBreakpoint() {
  const [width, setWidth] = useState(1280)
  useEffect(() => {
    setWidth(window.innerWidth)
    const fn = () => setWidth(window.innerWidth)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return {
    isMobile: width < 480,
    isTablet: width < 768,
    isLaptop: width < 1024,
    width,
  }
}
