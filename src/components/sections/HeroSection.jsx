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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="inline-block"
        style={{
          background: 'linear-gradient(135deg, #818cf8, #34d399)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  )
}

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTitleIndex((i) => (i + 1) % titles.length), 3000)
    return () => clearInterval(id)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              className="font-mono text-sm mb-4 tracking-widest uppercase"
              style={{ color: '#818cf8' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight"
              style={{ color: '#f1f5f9', letterSpacing: '-0.03em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Chirag
              <br />
              Chandrashekar
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-semibold mb-6 h-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TypewriterText text={titles[titleIndex]} />
            </motion.div>

            <motion.p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0"
              style={{ color: '#94a3b8' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Passionate software engineer specializing in building exceptional digital
              experiences at the intersection of technology and user-centered design.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="/Chirag_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(129, 140, 248, 0.3)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 30px rgba(129, 140, 248, 0.5)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(129, 140, 248, 0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <FaFilePdf /> View Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300"
                style={{
                  border: '1px solid rgba(129, 140, 248, 0.4)',
                  color: '#818cf8',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(129, 140, 248, 0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="flex gap-5 justify-center md:justify-start mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {[
                { icon: <FaGithub size={22} />, href: 'https://github.com/Yashuchirag', label: 'GitHub' },
                { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/chirag-chandrashe-15b965103/', label: 'LinkedIn' },
                { icon: <SiLeetcode size={22} />, href: 'https://leetcode.com/u/YashuChirag/', label: 'LeetCode' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-all duration-200"
                  style={{ color: '#64748b' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#818cf8'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #2563eb, #0891b2)',
                  padding: '3px',
                  borderRadius: '9999px',
                  filter: 'blur(8px)',
                  opacity: 0.7,
                }}
              />
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: 260,
                  height: 260,
                  border: '3px solid transparent',
                  background: 'linear-gradient(#070711, #070711) padding-box, linear-gradient(135deg, #7c3aed, #2563eb, #0891b2) border-box',
                }}
              >
                <img
                  src="/chirag_1.jpg"
                  alt="Chirag Chandrashekar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl text-xs font-mono"
                style={{
                  background: 'rgba(7,7,17,0.9)',
                  border: '1px solid rgba(129,140,248,0.3)',
                  color: '#818cf8',
                  backdropFilter: 'blur(10px)',
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                Available for work
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ color: '#475569' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll down"
        >
          <span className="text-xs font-mono tracking-widest">scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.button>
      </div>
    </section>
  )
}
