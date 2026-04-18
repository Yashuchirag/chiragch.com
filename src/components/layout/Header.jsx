import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollSpy from '../../utils/useScrollSpy.js'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(7, 7, 17, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="font-mono text-lg font-semibold"
            style={{ color: '#818cf8' }}
          >
            CC<span style={{ color: '#f1f5f9' }}>.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-sm font-medium transition-colors duration-200 relative group"
                  style={{ color: isActive ? '#818cf8' : '#94a3b8' }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-200"
                    style={{
                      width: isActive ? '100%' : '0%',
                      background: '#818cf8',
                    }}
                  />
                </a>
              )
            })}
            <a
              href="/Chirag_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                border: '1px solid rgba(129, 140, 248, 0.5)',
                color: '#818cf8',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(129, 140, 248, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Resume
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{ color: '#f1f5f9' }}
          >
            <motion.span
              className="block h-0.5 w-6 rounded-full"
              style={{ background: '#f1f5f9', transformOrigin: 'center' }}
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded-full"
              style={{ background: '#f1f5f9' }}
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded-full"
              style={{ background: '#f1f5f9', transformOrigin: 'center' }}
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(7, 7, 17, 0.95)', backdropFilter: 'blur(20px)' }}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Links */}
            <motion.nav
              className="absolute top-20 left-0 right-0 flex flex-col items-center gap-6 py-12"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-2xl font-semibold transition-colors"
                  style={{ color: activeId === link.href.slice(1) ? '#818cf8' : '#f1f5f9' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/Chirag_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-lg font-mono px-6 py-3 rounded-xl"
                style={{ border: '1px solid rgba(129, 140, 248, 0.5)', color: '#818cf8' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Resume
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
