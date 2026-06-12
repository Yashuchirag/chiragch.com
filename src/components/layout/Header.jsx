import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import useScrollSpy from '../../utils/useScrollSpy.js'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
const SECTION_IDS = ['home', ...LINKS.map((l) => l.id)]

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(SECTION_IDS, 90)

  const linkClass = (id) =>
    `rounded-md px-3.5 py-2 text-sm transition-colors duration-200 ${
      active === id ? 'bg-neon/10 text-neon' : 'text-fg-soft hover:bg-neon/5 hover:text-neon'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-term/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a href="#home" className="text-sm font-bold text-neon md:text-[15px]" onClick={() => setOpen(false)}>
          chirag@chiragch.com:~$<span className="caret-blink">▊</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)} aria-current={active === id ? 'true' : undefined}>
              {label}
            </a>
          ))}
          <a
            href="/Chirag_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-md border border-neon/40 px-4 py-2 text-sm font-semibold text-neon transition-colors duration-200 hover:bg-neon/10"
          >
            Resume
          </a>
        </nav>

        <button
          className="rounded-md p-2 text-fg-soft transition-colors hover:text-neon md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-term/95 px-6 pb-5 pt-2 backdrop-blur-md md:hidden" aria-label="Mobile navigation">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-3.5 text-base ${
                active === id ? 'bg-neon/10 text-neon' : 'text-fg-soft hover:text-neon'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="/Chirag_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md border border-neon/40 px-3 py-3 text-center text-base font-semibold text-neon"
          >
            View Resume
          </a>
        </nav>
      )}
    </header>
  )
}
