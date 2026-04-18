import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import StarField from '../components/space/StarField.jsx'
import ShootingStars from '../components/space/ShootingStars.jsx'
import OrbitingPlanet from '../components/space/OrbitingPlanet.jsx'
import { Sun, Mercury, Venus, Earth, Jupiter, Saturn } from '../components/space/PlanetVisual.jsx'
import { useWindowSize } from '../utils/useWindowSize.js'

const roles = ['Full Stack Engineer', 'Computer Vision Engineer', 'Problem Solver']

const CX = '38%'
const CY = '54%'

const PLANETS = [
  { key: 'mercury', a: 190, b: 82, duration: 22, startAngle: 0.5, planet: <Mercury size={30} />, label: 'Education', path: '/education' },
  { key: 'venus', a: 275, b: 118, duration: 38, startAngle: 2.1, planet: <Venus size={46} />, label: 'Projects', path: '/projects' },
  { key: 'earth', a: 365, b: 155, duration: 55, startAngle: 3.8, planet: <Earth size={55} />, label: 'About Me', path: '/about' },
  { key: 'jupiter', a: 470, b: 200, duration: 80, startAngle: 1.2, planet: <Jupiter size={88} />, label: 'Experience', path: '/experience' },
  { key: 'saturn', a: 575, b: 245, duration: 115, startAngle: 5.0, planet: <Saturn size={70} />, label: 'Skills', path: '/skills' },
]

const MOBILE_NAV = [
  { key: 'mercury', planet: <Mercury size={40} />, label: 'Education', path: '/education' },
  { key: 'venus', planet: <Venus size={44} />, label: 'Projects', path: '/projects' },
  { key: 'earth', planet: <Earth size={44} />, label: 'About Me', path: '/about' },
  { key: 'jupiter', planet: <Jupiter size={52} />, label: 'Experience', path: '/experience' },
  { key: 'saturn', planet: <Saturn size={48} />, label: 'Skills', path: '/skills' },
  { key: 'neptune', planet: <div className="planet-neptune" style={{ width: 40, height: 40 }} />, label: 'Contact', path: '/contact' },
]

function TypewriterRole({ text }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35 }}
        style={{
          background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'inline-block',
        }}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  )
}

function CardContent({ roleIdx, navigate }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <div style={{
          width: 105, height: 105, borderRadius: '50%', padding: 3,
          background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
          boxShadow: '0 0 28px rgba(251,191,36,0.4)',
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#00000f' }}>
            <img src="/chirag_1.jpg" alt="Chirag Chandrashekar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>
        Chirag Chandrashekar
      </h2>

      <div style={{ fontSize: 14, fontWeight: 600, height: 22, marginBottom: 14 }}>
        <TypewriterRole text={roles[roleIdx]} />
      </div>

      <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.65, marginBottom: 20 }}>
        Building scalable software at the intersection of engineering and intelligence.
      </p>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
        <motion.a
          href="/Chirag_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 10,
            background: 'linear-gradient(135deg, #fbbf24, #d97706)',
            color: '#000', fontSize: 13, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(251,191,36,0.4)',
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaFilePdf size={12} /> Resume
        </motion.a>
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); navigate('/contact') }}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 10,
            border: '1px solid rgba(251,191,36,0.35)',
            color: '#fbbf24', fontSize: 13, fontWeight: 600, textDecoration: 'none',
          }}
          whileHover={{ scale: 1.04, background: 'rgba(251,191,36,0.08)' }}
          whileTap={{ scale: 0.97 }}
        >
          Contact
        </motion.a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
        {[
          { icon: <FaGithub size={18} />, href: 'https://github.com/Yashuchirag', label: 'GitHub' },
          { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/chirag-ch/', label: 'LinkedIn' },
          { icon: <SiLeetcode size={18} />, href: 'https://leetcode.com/u/YashuChirag/', label: 'LeetCode' },
        ].map(({ icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{ color: '#64748b', display: 'flex' }}
            whileHover={{ color: '#fbbf24', y: -2 }}
            transition={{ duration: 0.15 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </>
  )
}

export default function HomePage() {
  const navigate = useNavigate()
  const [roleIdx, setRoleIdx] = useState(0)
  const width = useWindowSize()
  const isMobile = width < 768

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="fixed inset-0"
      style={{ background: '#00000f', overflowY: isMobile ? 'auto' : 'hidden', overflowX: 'hidden' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <StarField count={240} />
      <ShootingStars />

      {isMobile ? (
        /* ── Mobile Layout ── */
        <div style={{ position: 'relative', zIndex: 10, padding: '52px 20px 64px' }}>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 28 }}
          >
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: 'rgba(251,191,36,0.6)',
              letterSpacing: '0.18em', marginBottom: 6, textTransform: 'uppercase',
            }}>
              Welcome to
            </p>
            <h1 style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(26px, 8vw, 46px)',
              fontWeight: 800, color: '#fff',
              letterSpacing: '0.04em', lineHeight: 1.1,
              textShadow: '0 0 40px rgba(251,191,36,0.35)',
            }}>
              My Universe
            </h1>
          </motion.div>

          {/* Info card */}
          <motion.div
            className="glass"
            style={{
              padding: '28px 24px', textAlign: 'center',
              border: '1px solid rgba(251,191,36,0.16)',
              boxShadow: '0 0 50px rgba(251,191,36,0.05), 0 20px 60px rgba(0,0,0,0.6)',
              marginBottom: 28,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <CardContent roleIdx={roleIdx} navigate={navigate} />
          </motion.div>

          {/* Planet navigation grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: 'rgba(251,191,36,0.5)', letterSpacing: '0.12em',
              textAlign: 'center', marginBottom: 14,
            }}>
              Explore the universe
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {MOBILE_NAV.map((p, i) => (
                <motion.div
                  key={p.key}
                  onClick={() => navigate(p.path)}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + i * 0.06 }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="glass"
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: 8, padding: '16px 8px', cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {p.planet}
                  <span style={{
                    fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
                    color: '#94a3b8', textAlign: 'center',
                  }}>
                    {p.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        /* ── Desktop Layout ── */
        <>
          {/* Solar system layer */}
          <div className="absolute inset-0" style={{ zIndex: 3 }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
              {PLANETS.map((p) => (
                <ellipse
                  key={p.key}
                  cx={CX} cy={CY}
                  rx={p.a} ry={p.b}
                  fill="none"
                  stroke="rgba(255,255,255,0.055)"
                  strokeWidth="1"
                  strokeDasharray="3 10"
                />
              ))}
            </svg>

            <div style={{
              position: 'absolute', top: CY, left: CX,
              transform: 'translate(-50%, -50%)', zIndex: 4,
            }}>
              <Sun size={105} />
            </div>

            {PLANETS.map((p) => (
              <OrbitingPlanet
                key={p.key}
                a={p.a} b={p.b}
                duration={p.duration}
                startAngle={p.startAngle}
                planet={p.planet}
                label={p.label}
                path={p.path}
                centerX={CX}
                centerY={CY}
              />
            ))}
          </div>

          {/* Foreground: heading + card */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 20,
            display: 'flex', alignItems: 'center',
            justifyContent: 'flex-end', padding: '0 4% 0 0',
            pointerEvents: 'none',
          }}>
            <motion.div
              style={{
                position: 'absolute', top: '8%', left: '40%',
                transform: 'translateX(-50%)',
                textAlign: 'center', pointerEvents: 'none',
              }}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, color: 'rgba(251,191,36,0.6)',
                letterSpacing: '0.18em', marginBottom: 6, textTransform: 'uppercase',
              }}>
                Welcome to
              </p>
              <h1 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 'clamp(36px, 5vw, 68px)',
                fontWeight: 800, color: '#fff',
                letterSpacing: '0.04em', lineHeight: 1.1,
                textShadow: '0 0 60px rgba(251,191,36,0.35), 0 0 20px rgba(251,191,36,0.15)',
              }}>
                My Universe
              </h1>
              <p style={{
                marginTop: 10, fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, color: 'rgba(251,191,36,0.7)', letterSpacing: '0.12em',
              }}>
                click a planet to explore ↗
              </p>
            </motion.div>

            <motion.div
              className="glass"
              style={{
                pointerEvents: 'all', padding: '32px 36px', width: 370, flexShrink: 0,
                textAlign: 'center', border: '1px solid rgba(251,191,36,0.16)',
                boxShadow: '0 0 50px rgba(251,191,36,0.05), 0 20px 60px rgba(0,0,0,0.6)',
              }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            >
              <CardContent roleIdx={roleIdx} navigate={navigate} />
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  )
}
