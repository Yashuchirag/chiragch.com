import React from 'react'
import { motion } from 'framer-motion'
import StarField from '../components/space/StarField.jsx'
import BackToHome from '../components/space/BackToHome.jsx'
import { Saturn } from '../components/space/PlanetVisual.jsx'
import { skillsData } from '../data/Skills.js'

const CATEGORY_ACCENT = {
  'Frontend': { color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
  'Backend': { color: '#fde68a', bg: 'rgba(253,230,138,0.06)', border: 'rgba(253,230,138,0.18)' },
  'Database & Tools': { color: '#d97706', bg: 'rgba(217,119,6,0.07)', border: 'rgba(217,119,6,0.2)' },
  'Business Skills': { color: '#b45309', bg: 'rgba(180,83,9,0.07)', border: 'rgba(180,83,9,0.18)' },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function SkillsPage() {
  return (
    <motion.div
      className="fixed inset-0 overflow-y-auto"
      style={{ background: '#00000f' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StarField count={170} />
      <div className="saturn-glow fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />

      {/* Saturn — right side, large */}
      <div style={{ position: 'fixed', top: '50%', right: -180, transform: 'translateY(-50%)', zIndex: 2, opacity: 0.5, pointerEvents: 'none' }}>
        <Saturn size={400} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 820, margin: '0 auto', padding: 'clamp(52px, 8vh, 80px) clamp(16px, 4vw, 28px) clamp(64px, 10vh, 100px)' }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#fbbf24', letterSpacing: '0.12em', marginBottom: 10 }}>
            Saturn · skills
          </p>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            What I Work With
          </h1>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(360px, 100%), 1fr))', gap: 18 }}>
          {skillsData.map((category, i) => {
            const accent = CATEGORY_ACCENT[category.category] || { color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' }
            return (
              <motion.div
                key={category.category}
                {...fadeUp(0.2 + i * 0.1)}
                className="glass"
                style={{ padding: '26px 26px', border: `1px solid ${accent.border}` }}
              >
                <h3 style={{ fontSize: 15, fontWeight: 700, color: accent.color, marginBottom: 16 }}>
                  {category.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {category.tags.map((tag, j) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 + j * 0.03 }}
                      style={{
                        fontSize: 12, padding: '5px 12px', borderRadius: 20,
                        background: accent.bg, border: `1px solid ${accent.border}`,
                        color: accent.color, fontFamily: "'JetBrains Mono',monospace",
                        cursor: 'default',
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <BackToHome />
    </motion.div>
  )
}
