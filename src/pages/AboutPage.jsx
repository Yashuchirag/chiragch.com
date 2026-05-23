import React from 'react'
import { motion } from 'framer-motion'
import StarField from '../components/space/StarField.jsx'
import BackToHome from '../components/space/BackToHome.jsx'
import { Earth } from '../components/space/PlanetVisual.jsx'
import ScrambleText from '../components/ui/ScrambleText.jsx'

const techs = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'Java', 'FastAPI', 'PostgreSQL', 'MongoDB',
  'Docker', 'YOLOv8', 'OpenCV', 'AWS',
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '3.8', label: 'M.S. GPA' },
  { value: '10+', label: 'Projects Built' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

export default function AboutPage() {
  return (
    <motion.div
      className="fixed inset-0 overflow-y-auto"
      style={{ background: '#00000f' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StarField count={160} />

      <div className="earth-glow fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />

      <div style={{
        position: 'fixed', bottom: -120, right: -100,
        zIndex: 2, opacity: 0.55, pointerEvents: 'none',
      }}>
        <Earth size={480} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1000, margin: '0 auto', padding: 'clamp(52px, 8vh, 80px) clamp(20px, 4vw, 36px) clamp(64px, 10vh, 100px)' }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 56 }}>
          <ScrambleText as="p" delay={400} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, color: '#38bdf8', letterSpacing: '0.12em', marginBottom: 12 }}>
            Earth · about me
          </ScrambleText>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            <ScrambleText as="span" delay={600} style={{ display: 'block' }}>Chirag</ScrambleText>
            <ScrambleText as="span" delay={700} style={{ display: 'block' }}>Chandrashekar</ScrambleText>
          </h1>
          <ScrambleText as="p" delay={750} style={{ fontSize: 22, color: '#38bdf8', fontWeight: 600, marginTop: 10 }}>
            Full Stack Engineer · Computer Vision
          </ScrambleText>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="glass" style={{ padding: 40, marginBottom: 28, border: '1px solid rgba(56,189,248,0.15)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <ScrambleText as="p" delay={850} style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: 18 }}>
              I'm Chirag, a Full Stack Engineer and Computer Science graduate from the{' '}
              <span style={{ color: '#38bdf8' }}>University of Colorado Boulder</span> with a
              background spanning enterprise software, data engineering, and applied machine learning.
            </ScrambleText>
            <ScrambleText as="p" delay={850} style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: 18 }}>
              At <span style={{ color: '#38bdf8' }}>Glenysys</span>, I build production-grade systems
              from scalable warehouse management platforms on GCP to full-stack product dashboards.
              Before that, at <span style={{ color: '#38bdf8' }}>Accenture</span>, I designed clinical
              trial data pipelines handling millions of records, earning recognition for delivering
              critical projects ahead of schedule.
            </ScrambleText>
            <ScrambleText as="p" delay={850} style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: 18 }}>
              Outside work, I push into computer vision and sports analytics, currently building an
              AI system that automatically scores badminton matches from raw video using YOLOv8 and
              TrackNet. I believe the best code solves real problems elegantly.
            </ScrambleText>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 20, marginBottom: 28, flexWrap: 'wrap' }}>
          {stats.map(({ value, label }) => (
            <div key={label} className="glass" style={{
              flex: 1, minWidth: 140, padding: '24px 28px', textAlign: 'center',
              border: '1px solid rgba(56,189,248,0.12)',
            }}>
              <ScrambleText as="p" delay={800} style={{ fontSize: 38, fontWeight: 800, color: '#38bdf8', marginBottom: 6 }}>{value}</ScrambleText>
              <ScrambleText as="p" delay={850} style={{ fontSize: 15, color: '#64748b', fontFamily: "'JetBrains Mono',monospace" }}>{label}</ScrambleText>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="glass" style={{ padding: 34, border: '1px solid rgba(56,189,248,0.12)' }}>
          <ScrambleText as="p" delay={900} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 15, color: '#38bdf8', marginBottom: 22 }}>
            Technologies
          </ScrambleText>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }}>
            {techs.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.04 }}
                style={{
                  padding: '13px 10px', borderRadius: 10, textAlign: 'center',
                  background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.12)',
                  fontSize: 14, fontFamily: "'JetBrains Mono',monospace", color: '#94a3b8',
                  cursor: 'default',
                }}
              >
                <ScrambleText as="span" delay={950 + i * 50}>{tech}</ScrambleText>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <BackToHome />
    </motion.div>
  )
}
