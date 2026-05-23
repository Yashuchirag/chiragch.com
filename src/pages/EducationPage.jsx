import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import StarField from '../components/space/StarField.jsx'
import BackToHome from '../components/space/BackToHome.jsx'
import { Mercury, Sun } from '../components/space/PlanetVisual.jsx'
import { educationData } from '../data/Education.js'
import ScrambleText from '../components/ui/ScrambleText.jsx'

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

      <div style={{ position: 'fixed', bottom: -200, right: -200, zIndex: 2, opacity: 0.5, pointerEvents: 'none' }}>
        <Sun size={420} />
      </div>

      <div style={{ position: 'fixed', top: 40, right: 60, zIndex: 3, opacity: 0.7, pointerEvents: 'none' }}>
        <Mercury size={110} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 920, margin: '0 auto', padding: 'clamp(52px, 8vh, 80px) clamp(20px, 4vw, 36px) clamp(64px, 10vh, 100px)' }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 60 }}>
          <ScrambleText as="p" delay={400} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, color: '#9ca3af', letterSpacing: '0.12em', marginBottom: 12 }}>
            Mercury · education
          </ScrambleText>
          <ScrambleText as="h1" delay={600} style={{ fontSize: 'clamp(36px, 7vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', display: 'block' }}>
            Academic Background
          </ScrambleText>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.2 + i * 0.12)}
              className="glass"
              style={{ padding: '44px 44px', border: '1px solid rgba(156,163,175,0.15)' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16, flexShrink: 0,
                  background: 'rgba(156,163,175,0.1)', border: '1px solid rgba(156,163,175,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FaGraduationCap size={28} color="#9ca3af" />
                </div>
                <div style={{ flex: 1 }}>
                  <ScrambleText as="h2" delay={700 + i * 100} style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3, display: 'block' }}>
                    {edu.school}
                  </ScrambleText>
                  <ScrambleText as="p" delay={750 + i * 100} style={{ fontSize: 18, color: '#d1d5db', fontWeight: 500, marginBottom: 20 }}>
                    {edu.degree}
                  </ScrambleText>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <ScrambleText as="span" delay={800 + i * 100} style={{ fontSize: 15, fontFamily: "'JetBrains Mono',monospace", color: '#64748b' }}>
                      {edu.date}
                    </ScrambleText>
                    <ScrambleText as="span" delay={830 + i * 100} style={{
                      fontSize: 15, fontFamily: "'JetBrains Mono',monospace",
                      padding: '4px 14px', borderRadius: 20,
                      background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)',
                      color: '#34d399',
                    }}>
                      {edu.gpa}
                    </ScrambleText>
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
