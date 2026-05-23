import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import StarField from '../components/space/StarField.jsx'
import BackToHome from '../components/space/BackToHome.jsx'
import ScrambleText from '../components/ui/ScrambleText.jsx'

const contacts = [
  { icon: <FaEnvelope size={22} />, label: 'Email', value: 'chiragchandrashekar@gmail.com', href: 'mailto:chiragchandrashekar@gmail.com' },
  { icon: <FaGithub size={22} />, label: 'GitHub', value: 'Yashuchirag', href: 'https://github.com/Yashuchirag' },
  { icon: <FaLinkedin size={22} />, label: 'LinkedIn', value: 'chirag-ch', href: 'https://www.linkedin.com/in/chirag-ch/' },
  { icon: <SiLeetcode size={22} />, label: 'LeetCode', value: 'YashuChirag', href: 'https://leetcode.com/u/YashuChirag/' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function ContactPage() {
  return (
    <motion.div
      className="fixed inset-0 overflow-y-auto"
      style={{ background: '#00000f' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StarField count={300} />
      <div className="contact-glow fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />

      <div style={{
        position: 'fixed', top: '18%', right: '22%', zIndex: 3, pointerEvents: 'none',
      }}>
        <div style={{
          width: 6, height: 6, borderRadius: '50%', background: '#fff',
          boxShadow: '0 0 12px 4px rgba(255,255,255,0.9), 0 0 40px 16px rgba(200,180,255,0.4), 0 0 100px 40px rgba(168,85,247,0.2)',
        }} />
        <div style={{ position: 'absolute', top: '50%', left: '-60px', width: '120px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: '50%', top: '-60px', width: '1px', height: '120px', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.3), transparent)', transform: 'translateX(-50%)' }} />
      </div>

      <div style={{
        position: 'fixed', top: 0, left: 0, width: '55%', height: '55%', zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 20% 20%, rgba(168,85,247,0.08) 0%, rgba(99,102,241,0.05) 40%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 860, margin: '0 auto', padding: 'clamp(52px, 8vh, 80px) clamp(20px, 4vw, 36px) clamp(64px, 10vh, 100px)', textAlign: 'center' }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 24 }}>
          <ScrambleText as="p" delay={400} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, color: '#a855f7', letterSpacing: '0.12em', marginBottom: 12 }}>
            Deep space · contact
          </ScrambleText>
          <ScrambleText as="h1" delay={600} style={{ fontSize: 'clamp(36px, 7vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', display: 'block' }}>
            Get In Touch
          </ScrambleText>
        </motion.div>

        <motion.p {...fadeUp(0.2)} style={{ fontSize: 19, color: '#94a3b8', lineHeight: 1.7, marginBottom: 56 }}>
          <ScrambleText as="span" delay={700} style={{ display: 'block' }}>
            I'm currently open to new opportunities. Whether you have a project in mind,
            a question, or just want to say hello — my inbox is always open.
          </ScrambleText>
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: 16, marginBottom: 48, textAlign: 'left' }}>
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              {...fadeUp(0.3 + i * 0.07)}
              className="glass"
              style={{
                display: 'flex', alignItems: 'center', gap: 16, padding: '22px 24px',
                border: '1px solid rgba(168,85,247,0.15)', textDecoration: 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              whileHover={{ borderColor: 'rgba(168,85,247,0.35)', boxShadow: '0 0 20px rgba(168,85,247,0.1)' }}
            >
              <div style={{
                width: 50, height: 50, borderRadius: 14, flexShrink: 0,
                background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#a855f7',
              }}>
                {c.icon}
              </div>
              <div>
                <ScrambleText as="p" delay={800 + i * 80} style={{ fontSize: 14, fontFamily: "'JetBrains Mono',monospace", color: '#64748b', marginBottom: 3 }}>{c.label}</ScrambleText>
                <ScrambleText as="p" delay={840 + i * 80} style={{ fontSize: 16, color: '#e2e8f0', fontWeight: 500 }}>{c.value}</ScrambleText>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:chiragchandrashekar@gmail.com"
          {...fadeUp(0.55)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '16px 38px', borderRadius: 14, textDecoration: 'none',
            background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
            color: '#fff', fontSize: 18, fontWeight: 600,
            boxShadow: '0 4px 20px rgba(168,85,247,0.4)',
          }}
          whileHover={{ scale: 1.04, boxShadow: '0 6px 30px rgba(168,85,247,0.55)' }}
          whileTap={{ scale: 0.97 }}
        >
          <FaEnvelope size={18} /> Say Hello
        </motion.a>
      </div>
      <BackToHome />
    </motion.div>
  )
}
