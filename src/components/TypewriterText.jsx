import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = [
  { text: 'I architect systems that scale', highlights: ['scale'] },
  { text: 'I design interfaces that inspire', highlights: ['inspire'] },
  { text: 'React, Next.js, SaaS — pushing the limits of web technology', highlights: ['SaaS', 'limits'] },
]

const TYPING_SPEED = 45
const PAUSE_AFTER_TYPE = 2000
const FADE_DURATION = 0.5

function TypewriterLine({ text, highlights, onComplete }) {
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (charCount < text.length) {
      const timer = setTimeout(() => setCharCount(c => c + 1), TYPING_SPEED)
      return () => clearTimeout(timer)
    }
    const timer = setTimeout(onComplete, PAUSE_AFTER_TYPE)
    return () => clearTimeout(timer)
  }, [charCount, text.length, onComplete])

  const segments = (() => {
    const regex = new RegExp(`\\b(${highlights.join('|')})\\b`, 'gi')
    const parts = []
    let lastIdx = 0
    let match
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        parts.push({ text: text.slice(lastIdx, match.index), hl: false })
      }
      parts.push({ text: match[0], hl: true })
      lastIdx = regex.lastIndex
    }
    if (lastIdx < text.length) {
      parts.push({ text: text.slice(lastIdx), hl: false })
    }
    return parts
  })()

  let visibleChars = 0

  return (
    <span>
      {segments.map((seg, sIdx) => {
        const segStart = visibleChars
        visibleChars += seg.text.length
        const visibleText = seg.text.slice(0, Math.max(0, charCount - segStart))
        if (!visibleText) return null

        if (seg.hl) {
          return (
            <span key={sIdx} className="relative inline-flex">
              <span className="relative z-10 font-semibold text-white">{visibleText}</span>
              <motion.span
                className="absolute inset-0 -left-0.5 -right-0.5 rounded-sm -skew-x-2"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
                style={{ originX: 0, backgroundColor: 'rgba(251, 191, 36, 0.3)' }}
              />
            </span>
          )
        }
        return <span key={sIdx}>{visibleText}</span>
      })}
    </span>
  )
}

export default function TypewriterText({ className }) {
  const [lineIdx, setLineIdx] = useState(0)
  const [phase, setPhase] = useState('typing')

  const handleComplete = useCallback(() => {
    setPhase('fading')
    setTimeout(() => {
      setLineIdx(i => (i + 1) % LINES.length)
      setPhase('typing')
    }, FADE_DURATION * 1000)
  }, [])

  const current = LINES[lineIdx]

  return (
    <p className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={lineIdx}
          initial={{ opacity: 0, filter: 'blur(4px)', y: 8 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          exit={{ opacity: 0, filter: 'blur(8px)', y: -12 }}
          transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
          className="inline"
        >
          <TypewriterLine
            text={current.text}
            highlights={current.highlights}
            onComplete={handleComplete}
          />
        </motion.span>
      </AnimatePresence>
    </p>
  )
}
