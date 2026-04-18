import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/Yashuchirag" target="_blank" rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: '#64748b' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#818cf8'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
          aria-label="GitHub">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/chirag-chandrashe-15b965103/" target="_blank" rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: '#64748b' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#818cf8'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
          aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="https://leetcode.com/u/YashuChirag/" target="_blank" rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: '#64748b' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#818cf8'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
          aria-label="LeetCode">
          <SiLeetcode size={20} />
        </a>
      </div>
      <p className="text-sm font-mono" style={{ color: '#475569' }}>
        Designed & Built by{' '}
        <span style={{ color: '#818cf8' }}>Chirag Chandrashekar</span>
      </p>
    </footer>
  )
}
