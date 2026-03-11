'use client'

import { useState } from 'react'
import AIResultPanel from '../modals/AIResultPanel'

export default function HeroForm() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)

  async function handleAnalyze() {
    if (!url.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 2200))
    setLoading(false)
    setShowResult(true)
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '.65rem', maxWidth: 480, margin: '0 auto' }}>
        <input
          value={url}
          onChange={e => setUrl(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAnalyze()}
          placeholder="آدرس وب‌سایت یا اینستاگرام برند..."
          style={{
            flex: 1, padding: '.85rem 1.1rem',
            background: 'rgba(255,255,255,.07)',
            border: '1px solid rgba(255,255,255,.12)',
            borderRadius: 10, fontSize: '.88rem',
            color: 'white', outline: 'none', fontFamily: 'inherit',
          }}
        />
        <button
          onClick={handleAnalyze}
          disabled={loading}
          style={{
            padding: '.85rem 1.5rem',
            background: loading ? 'rgba(46,107,94,.5)' : '#2E6B5E',
            color: 'white', border: 'none', borderRadius: 10,
            fontSize: '.88rem', fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap', transition: 'background .2s',
          }}
        >
          {loading ? '...' : 'تحلیل رایگان ✦'}
        </button>
      </div>

      {showResult && (
        <AIResultPanel
          isOpen={showResult}
          onClose={() => setShowResult(false)}
          brandName={url}
          brandField="عمومی"
        />
      )}
    </>
  )
}
