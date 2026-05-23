import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import StarField from '../components/space/StarField.jsx'
import BackToHome from '../components/space/BackToHome.jsx'
import { Venus } from '../components/space/PlanetVisual.jsx'
import { Projects } from '../data/Projects.js'
import ScrambleText from '../components/ui/ScrambleText.jsx'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState(null)

  return (
    <motion.div
      className="fixed inset-0 overflow-y-auto"
      style={{ background: '#00000f' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StarField count={150} />
      <div className="venus-glow fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />

      <div style={{ position: 'fixed', top: '50%', right: -160, transform: 'translateY(-50%)', zIndex: 2, opacity: 0.45, pointerEvents: 'none' }}>
        <Venus size={500} />
      </div>

      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: 80, zIndex: 3, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(180,83,9,0.12), transparent)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1120, margin: '0 auto', padding: 'clamp(52px, 8vh, 80px) clamp(20px, 4vw, 36px) clamp(64px, 10vh, 100px)' }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 56 }}>
          <ScrambleText as="p" delay={400} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, color: '#f59e0b', letterSpacing: '0.12em', marginBottom: 12 }}>
            Venus · projects
          </ScrambleText>
          <ScrambleText as="h1" delay={600} style={{ fontSize: 'clamp(36px, 7vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', display: 'block' }}>
            Things I've Built
          </ScrambleText>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(440px, 100%), 1fr))', gap: 20 }}>
          {Projects.map((project, i) => {
            const isOpen = expanded === i
            return (
              <motion.div
                key={i}
                {...fadeUp(0.15 + (i % 2) * 0.08)}
                className="glass"
                style={{
                  border: isOpen ? '1px solid rgba(245,158,11,0.35)' : '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  boxShadow: isOpen ? '0 0 24px rgba(245,158,11,0.08)' : 'none',
                }}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                <div style={{ padding: '26px 26px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                    <ScrambleText as="h3" delay={600 + i * 60} style={{ fontSize: 17, fontWeight: 700, color: '#fff', lineHeight: 1.4, flex: 1 }}>
                      {project.title}
                    </ScrambleText>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: '#475569', flexShrink: 0, marginTop: 2 }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#f59e0b'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                  <ScrambleText as="p" delay={650 + i * 60} style={{ fontSize: 14, fontFamily: "'JetBrains Mono',monospace", color: '#64748b', marginBottom: 12 }}>
                    {project.period}
                  </ScrambleText>
                  <ScrambleText as="p" delay={700 + i * 60} style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.65, marginBottom: 16 }}>
                    {project.description}
                  </ScrambleText>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.skills.slice(0, 5).map((s) => (
                      <span key={s} style={{
                        fontSize: 12, padding: '3px 10px', borderRadius: 20,
                        background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                        color: '#f59e0b', fontFamily: "'JetBrains Mono',monospace",
                      }}>{s}</span>
                    ))}
                    {project.skills.length > 5 && (
                      <span style={{ fontSize: 12, color: '#475569', padding: '3px 8px', fontFamily: "'JetBrains Mono',monospace" }}>
                        +{project.skills.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{
                  padding: '12px 26px', borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span style={{ fontSize: 13, fontFamily: "'JetBrains Mono',monospace", color: '#475569' }}>
                    {isOpen ? 'show less' : 'view details'}
                  </span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: '#475569' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
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
                      <div style={{ padding: '20px 26px 26px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 16 }}>
                          {project.responsibilities.map((r, j) => (
                            <li key={j} style={{ display: 'flex', gap: 10, fontSize: 15, color: '#94a3b8', lineHeight: 1.6 }}>
                              <span style={{ flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: '#f59e0b' }} />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: project.link ? 14 : 0 }}>
                          {project.skills.map((s) => (
                            <span key={s} style={{
                              fontSize: 12, padding: '3px 10px', borderRadius: 20,
                              background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                              color: '#f59e0b', fontFamily: "'JetBrains Mono',monospace",
                            }}>{s}</span>
                          ))}
                        </div>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#f59e0b', fontFamily: "'JetBrains Mono',monospace", textDecoration: 'none' }}>
                            <FaGithub size={13} /> View on GitHub <FaExternalLinkAlt size={11} />
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
