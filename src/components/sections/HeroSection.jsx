import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const titles = ['Full Stack Engineer', 'Problem Solver', 'Tech Enthusiast']

function TypewriterText({ text }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35 }}
        style={{
          background: 'linear-gradient(135deg, #818cf8, #34d399)',
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

const socialLinks = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/Yashuchirag', label: 'GitHub' },
  { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/chirag-chandrashe-15b965103/', label: 'LinkedIn' },
  { icon: <SiLeetcode size={20} />, href: 'https://leetcode.com/u/YashuChirag/', label: 'LeetCode' },
]

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTitleIndex((i) => (i + 1) % titles.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center">
      <div className="w-full max-w-5xl mx-auto px-6 py-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              className="font-mono text-sm mb-3 tracking-widest uppercase"
              style={{ color: '#818cf8' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3 leading-tight"
              style={{ color: '#f1f5f9', letterSpacing: '-0.03em' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Chirag<br />Chandrashekar
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl font-semibold mb-6"
              style={{ minHeight: '2rem' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TypewriterText text={titles[titleIndex]} />
            </motion.div>

            <motion.p
              className="text-base leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
              style={{ color: '#94a3b8' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Passionate software engineer specializing in building exceptional digital
              experiences at the intersection of technology and user-centered design.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a
                href="/Chirag_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm"
                style={{
                  background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                  color: '#fff',
                  boxShadow: '0 4px 18px rgba(129, 140, 248, 0.35)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 6px 28px rgba(129, 140, 248, 0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                <FaFilePdf /> View Resume
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm"
                style={{ border: '1px solid rgba(129, 140, 248, 0.4)', color: '#818cf8' }}
                whileHover={{ scale: 1.03, background: 'rgba(129, 140, 248, 0.1)' }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-5 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {socialLinks.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: '#64748b' }}
                  whileHover={{ color: '#818cf8', y: -3 }}
                  transition={{ duration: 0.15 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div
                className="rounded-full overflow-hidden"
                style={{
                  width: 240,
                  height: 240,
                  border: '2px solid transparent',
                  background: 'linear-gradient(#070711, #070711) padding-box, linear-gradient(135deg, #7c3aed, #2563eb, #0891b2) border-box',
                  boxShadow: '0 0 60px rgba(124, 58, 237, 0.25)',
                }}
              >
                <img
                  src="/chirag_1.jpg"
                  alt="Chirag Chandrashekar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-xl text-xs font-mono"
                style={{
                  background: 'rgba(7,7,17,0.9)',
                  border: '1px solid rgba(129,140,248,0.3)',
                  color: '#818cf8',
                  backdropFilter: 'blur(10px)',
                  whiteSpace: 'nowrap',
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                Open to work
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="flex justify-center mt-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-1.5"
            style={{ color: '#334155', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Scroll down"
          >
            <span className="text-xs font-mono tracking-widest">scroll</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
