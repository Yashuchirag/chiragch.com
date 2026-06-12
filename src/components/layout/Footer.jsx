import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const socials = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/Yashuchirag', label: 'GitHub' },
  { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/chirag-ch/', label: 'LinkedIn' },
  { icon: <SiLeetcode size={20} />, href: 'https://leetcode.com/u/YashuChirag/', label: 'LeetCode' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line py-9 text-center">
      <div className="mb-4 flex justify-center gap-6">
        {socials.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-fg-dim transition-colors duration-200 hover:text-neon"
          >
            {icon}
          </a>
        ))}
      </div>
      <p className="text-sm text-fg-dim">© {new Date().getFullYear()} Chirag Chandrashekar · exit code 0</p>
      <p className="mt-1 text-xs text-fg-dim">Built with React, Vite, and Tailwind · Deployed on Netlify</p>
    </footer>
  )
}
