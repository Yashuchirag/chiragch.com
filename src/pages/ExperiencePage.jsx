import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa'
import StarField from '../components/space/StarField.jsx'
import BackToHome from '../components/space/BackToHome.jsx'
import { Jupiter } from '../components/space/PlanetVisual.jsx'
import { experiences } from '../data/Experience.js'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function ExperiencePage() {
  const [expanded, setExpanded] = useState(0)

  return (
    <motion.div
      className="fixed inset-0 overflow-y-auto"
      style={{ background: '#00000f' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StarField count={140} />
      <div className="jupiter-glow fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />

      {/* Large Jupiter — decorative */}
      <div style={{ position: 'fixed', top: -60, right: -140, zIndex: 2, opacity: 0.5, pointerEvents: 'none' }}>
        <Jupiter size={520} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 820, margin: '0 auto', padding: 'clamp(52px, 8vh, 80px) clamp(16px, 4vw, 28px) clamp(64px, 10vh, 100px)' }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#f59e0b', letterSpacing: '0.12em', marginBottom: 10 }}>
            Jupiter · experience
          </p>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            Where I've Worked
          </h1>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {experiences.map((exp, i) => {
            const isOpen = expanded === i
            return (
              <motion.div
                key={i}
                {...fadeUp(0.2 + i * 0.08)}
                className="glass"
                style={{
                  border: isOpen ? '1px solid rgba(245,158,11,0.35)' : '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer', overflow: 'hidden',
                  boxShadow: isOpen ? '0 0 30px rgba(245,158,11,0.08)' : 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onClick={() => setExpanded(isOpen ? -1 : i)}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '22px 24px', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff' }}>{exp.role}</h3>
                      {exp.award && (
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                          fontSize: 11, padding: '2px 9px', borderRadius: 20,
                          background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)',
                          color: '#34d399', fontFamily: "'JetBrains Mono',monospace",
                        }}>
                          <FaAward size={10} /> {exp.award.name}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 14, color: '#f59e0b', fontWeight: 600 }}>{exp.company}</p>
                    <p style={{ fontSize: 12, color: '#64748b', fontFamily: "'JetBrains Mono',monospace", marginTop: 3 }}>{exp.period}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ color: '#475569', flexShrink: 0, marginTop: 2 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div style={{ padding: '0 24px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7, margin: '16px 0 12px' }}>{exp.description}</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                          {exp.responsibilities.map((r, j) => (
                            <li key={j} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>
                              <span style={{ flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: '#f59e0b' }} />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {exp.skills.map((s) => (
                            <span key={s} style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 20,
                              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.22)',
                              color: '#f59e0b', fontFamily: "'JetBrains Mono',monospace",
                            }}>{s}</span>
                          ))}
                        </div>
                        {exp.award?.PDF && (
                          <a href={exp.award.PDF} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, fontSize: 12, color: '#34d399', fontFamily: "'JetBrains Mono',monospace", textDecoration: 'none' }}>
                            <FaAward size={11} /> View Award <FaExternalLinkAlt size={9} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
      <BackToHome />
    </motion.div>
  )
}
