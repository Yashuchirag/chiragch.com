import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa'
import StarField from '../components/space/StarField.jsx'
import BackToHome from '../components/space/BackToHome.jsx'
import { Jupiter } from '../components/space/PlanetVisual.jsx'
import { experiences } from '../data/Experience.js'
import ScrambleText from '../components/ui/ScrambleText.jsx'

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

      <div style={{ position: 'fixed', top: -60, right: -140, zIndex: 2, opacity: 0.5, pointerEvents: 'none' }}>
        <Jupiter size={520} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1020, margin: '0 auto', padding: 'clamp(52px, 8vh, 80px) clamp(20px, 4vw, 36px) clamp(64px, 10vh, 100px)' }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 56 }}>
          <ScrambleText as="p" delay={400} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, color: '#f59e0b', letterSpacing: '0.12em', marginBottom: 12 }}>
            Jupiter · experience
          </ScrambleText>
          <ScrambleText as="h1" delay={600} style={{ fontSize: 'clamp(36px, 7vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', display: 'block' }}>
            Where I've Worked
          </ScrambleText>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '26px 30px', gap: 14 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                      <ScrambleText as="h3" delay={600 + i * 80} style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>{exp.role}</ScrambleText>
                      {exp.award && (
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                          fontSize: 13, padding: '3px 11px', borderRadius: 20,
                          background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)',
                          color: '#34d399', fontFamily: "'JetBrains Mono',monospace",
                        }}>
                          <FaAward size={11} /> {exp.award.name}
                        </span>
                      )}
                    </div>
                    <ScrambleText as="p" delay={650 + i * 80} style={{ fontSize: 17, color: '#f59e0b', fontWeight: 600 }}>{exp.company}</ScrambleText>
                    <ScrambleText as="p" delay={700 + i * 80} style={{ fontSize: 15, color: '#64748b', fontFamily: "'JetBrains Mono',monospace", marginTop: 4 }}>{exp.period}</ScrambleText>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ color: '#475569', flexShrink: 0, marginTop: 2 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
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
                      <div style={{ padding: '0 30px 30px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <ScrambleText as="p" delay={0} style={{ fontSize: 17, color: '#94a3b8', lineHeight: 1.7, margin: '20px 0 14px' }}>{exp.description}</ScrambleText>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                          {exp.responsibilities.map((r, j) => (
                            <li key={j} style={{ display: 'flex', gap: 12, fontSize: 16, color: '#94a3b8', lineHeight: 1.6 }}>
                              <span style={{ flexShrink: 0, marginTop: 8, width: 6, height: 6, borderRadius: '50%', background: '#f59e0b' }} />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {exp.skills.map((s) => (
                            <span key={s} style={{
                              fontSize: 13, padding: '4px 12px', borderRadius: 20,
                              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.22)',
                              color: '#f59e0b', fontFamily: "'JetBrains Mono',monospace",
                            }}>{s}</span>
                          ))}
                        </div>
                        {exp.award?.PDF && (
                          <a href={exp.award.PDF} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 14, color: '#34d399', fontFamily: "'JetBrains Mono',monospace", textDecoration: 'none' }}>
                            <FaAward size={13} /> View Award <FaExternalLinkAlt size={11} />
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
