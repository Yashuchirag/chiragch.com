import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import StarField from '../components/space/StarField.jsx'
import BackToHome from '../components/space/BackToHome.jsx'
import { Mercury, Sun } from '../components/space/PlanetVisual.jsx'
import { educationData } from '../data/Education.js'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function EducationPage() {
  return (
    <motion.div
      className="fixed inset-0 overflow-y-auto"
      style={{ background: '#00000f' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StarField count={100} />
      <div className="mercury-glow fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />

      {/* Sun glow — bottom right (Mercury is close to the Sun) */}
      <div style={{ position: 'fixed', bottom: -200, right: -200, zIndex: 2, opacity: 0.5, pointerEvents: 'none' }}>
        <Sun size={420} />
      </div>

      {/* Mercury — top right */}
      <div style={{ position: 'fixed', top: 40, right: 60, zIndex: 3, opacity: 0.7, pointerEvents: 'none' }}>
        <Mercury size={110} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 740, margin: '0 auto', padding: 'clamp(52px, 8vh, 80px) clamp(16px, 4vw, 28px) clamp(64px, 10vh, 100px)' }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 52 }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#9ca3af', letterSpacing: '0.12em', marginBottom: 10 }}>
            Mercury · education
          </p>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            Academic Background
          </h1>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.2 + i * 0.12)}
              className="glass"
              style={{ padding: '36px 36px', border: '1px solid rgba(156,163,175,0.15)' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: 'rgba(156,163,175,0.1)', border: '1px solid rgba(156,163,175,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FaGraduationCap size={22} color="#9ca3af" />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 6, lineHeight: 1.3 }}>
                    {edu.school}
                  </h2>
                  <p style={{ fontSize: 15, color: '#d1d5db', fontWeight: 500, marginBottom: 16 }}>
                    {edu.degree}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: 12, fontFamily: "'JetBrains Mono',monospace", color: '#64748b',
                    }}>{edu.date}</span>
                    <span style={{
                      fontSize: 12, fontFamily: "'JetBrains Mono',monospace",
                      padding: '3px 12px', borderRadius: 20,
                      background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)',
                      color: '#34d399',
                    }}>{edu.gpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BackToHome />
    </motion.div>
  )
}
