import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane, FaTimes, FaRobot } from 'react-icons/fa'

const SUGGESTED = [
  "What's Chirag's tech stack?",
  'What is his current role?',
  'Tell me about his projects.',
  'Is he open to opportunities?',
]

// Renders plain text with bullet points and bold markers nicely
function FormattedAnswer({ text }) {
  const lines = text.split('\n').filter((l) => l.trim() !== '')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {lines.map((line, i) => {
        const trimmed = line.trim()
        const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')

        // Parse **bold** inline
        const parseBold = (str) => {
          const parts = str.split(/\*\*(.*?)\*\*/g)
          return parts.map((part, j) =>
            j % 2 === 1
              ? <strong key={j} style={{ color: '#e2e8f0', fontWeight: 600 }}>{part}</strong>
              : part
          )
        }

        if (isBullet) {
          const content = trimmed.replace(/^[•\-\*]\s*/, '')
          return (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{
                flexShrink: 0, marginTop: 7,
                width: 5, height: 5, borderRadius: '50%',
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              }} />
              <span style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.65 }}>
                {parseBold(content)}
              </span>
            </div>
          )
        }

        return (
          <p key={i} style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
            {parseBold(trimmed)}
          </p>
        )
      })}
    </div>
  )
}

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '4px 0' }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          style={{ width: 7, height: 7, borderRadius: '50%', background: '#fbbf24' }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function AskPanel() {
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)
    setQuestion('')
    setAnswer(null)
    setError(null)
    setLoading(false)
  }

  const ask = async (q) => {
    const trimmed = q.trim()
    if (!trimmed || loading) return

    setLoading(true)
    setAnswer(null)
    setError(null)
    setQuestion('')

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setError(data.error || 'Something went wrong. Please try again.')
      } else {
        setAnswer({ question: trimmed, text: data.answer })
      }
    } catch {
      setError('Could not reach the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ask(question)
  }

  const handleSuggestion = (s) => {
    ask(s)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      ask(question)
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 200 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: 60,
              right: 0,
              width: 'min(380px, calc(100vw - 40px))',
              borderRadius: 18,
              background: 'rgba(7, 7, 20, 0.92)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(251,191,36,0.2)',
              boxShadow: '0 0 40px rgba(251,191,36,0.08), 0 24px 60px rgba(0,0,0,0.7)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 18px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(251,191,36,0.04)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(251,191,36,0.2), rgba(245,158,11,0.1))',
                  border: '1px solid rgba(251,191,36,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FaRobot size={14} color="#fbbf24" />
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: 0 }}>Ask about Chirag</p>
                  <p style={{ fontSize: 10, color: '#64748b', margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>
                    Powered by Llama 3 · Groq
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#475569', padding: 4, display: 'flex',
                  borderRadius: 6, transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#94a3b8'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: '18px 18px 0', minHeight: 140, maxHeight: 320, overflowY: 'auto' }}>
              {!loading && !answer && !error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <p style={{ fontSize: 13, color: '#64748b', marginBottom: 14, lineHeight: 1.6 }}>
                    Ask anything about Chirag's experience, skills, or projects.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {SUGGESTED.map((s) => (
                      <motion.button
                        key={s}
                        onClick={() => handleSuggestion(s)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          fontSize: 11, padding: '6px 12px', borderRadius: 20,
                          background: 'rgba(251,191,36,0.07)',
                          border: '1px solid rgba(251,191,36,0.18)',
                          color: '#fbbf24', cursor: 'pointer',
                          fontFamily: "'JetBrains Mono', monospace",
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(251,191,36,0.13)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(251,191,36,0.07)'}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <TypingDots />
                </motion.div>
              )}

              {error && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '12px 14px', borderRadius: 10,
                    background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                  }}
                >
                  <p style={{ fontSize: 12, color: '#f87171', margin: 0, lineHeight: 1.6 }}>{error}</p>
                  <button
                    onClick={() => setError(null)}
                    style={{
                      marginTop: 8, fontSize: 11, color: '#fbbf24', background: 'none',
                      border: 'none', cursor: 'pointer', padding: 0,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    Try again →
                  </button>
                </motion.div>
              )}

              {answer && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Question bubble */}
                  <div style={{
                    marginBottom: 12, display: 'flex', justifyContent: 'flex-end',
                  }}>
                    <div style={{
                      maxWidth: '80%', padding: '8px 14px', borderRadius: '14px 14px 4px 14px',
                      background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.2)',
                    }}>
                      <p style={{ fontSize: 12, color: '#fde68a', margin: 0, lineHeight: 1.5 }}>
                        {answer.question}
                      </p>
                    </div>
                  </div>

                  {/* Answer bubble */}
                  <div style={{
                    padding: '14px 16px', borderRadius: '4px 14px 14px 14px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    marginBottom: 14,
                  }}>
                    <FormattedAnswer text={answer.text} />
                  </div>

                  {/* Ask another */}
                  <button
                    onClick={() => { setAnswer(null); setError(null); setTimeout(() => inputRef.current?.focus(), 50) }}
                    style={{
                      fontSize: 11, color: '#64748b', background: 'none',
                      border: 'none', cursor: 'pointer', padding: '0 0 16px',
                      fontFamily: "'JetBrains Mono', monospace",
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                  >
                    ← Ask another question
                  </button>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              style={{
                padding: '12px 14px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', gap: 8, alignItems: 'center',
              }}
            >
              <input
                ref={inputRef}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about Chirag..."
                disabled={loading}
                maxLength={400}
                style={{
                  flex: 1, background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                  padding: '9px 12px', fontSize: 13, color: '#e2e8f0',
                  outline: 'none', fontFamily: 'inherit',
                  transition: 'border-color 0.15s',
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(251,191,36,0.4)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <motion.button
                type="submit"
                disabled={!question.trim() || loading}
                whileHover={question.trim() && !loading ? { scale: 1.06 } : {}}
                whileTap={question.trim() && !loading ? { scale: 0.94 } : {}}
                style={{
                  width: 36, height: 36, borderRadius: 10, border: 'none',
                  background: question.trim() && !loading
                    ? 'linear-gradient(135deg, #fbbf24, #d97706)'
                    : 'rgba(255,255,255,0.06)',
                  color: question.trim() && !loading ? '#000' : '#475569',
                  cursor: question.trim() && !loading ? 'pointer' : 'default',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'background 0.2s, color 0.2s',
                }}
              >
                <FaPaperPlane size={13} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        style={{
          width: 48, height: 48, borderRadius: '50%', border: 'none',
          background: open
            ? 'rgba(30,30,50,0.95)'
            : 'linear-gradient(135deg, #fbbf24, #d97706)',
          color: open ? '#fbbf24' : '#000',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: open
            ? '0 0 0 1px rgba(251,191,36,0.3), 0 8px 24px rgba(0,0,0,0.5)'
            : '0 0 24px rgba(251,191,36,0.5), 0 8px 24px rgba(0,0,0,0.4)',
          transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
          position: 'relative',
        }}
        title="Ask about Chirag"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <FaTimes size={16} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <FaRobot size={18} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!open && (
          <motion.div
            style={{
              position: 'absolute', inset: -4, borderRadius: '50%',
              border: '2px solid rgba(251,191,36,0.4)', pointerEvents: 'none',
            }}
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
      </motion.button>
    </div>
  )
}
