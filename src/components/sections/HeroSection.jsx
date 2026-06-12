import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import TerminalWindow from '../ui/TerminalWindow.jsx'

const BOOT_CMD = 'whoami --verbose'
const ROLES = ['Full Stack Engineer', 'Problem Solver', 'Tech Enthusiast']
const SECTION_IDS = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']

const LINKS = {
  github: 'https://github.com/Yashuchirag',
  linkedin: 'https://www.linkedin.com/in/chirag-ch',
  leetcode: 'https://leetcode.com/u/YashuChirag/',
}

const CHIPS = [
  { cmd: 'help', hint: 'See everything this terminal can do' },
  { cmd: 'projects', hint: 'Jump to the things I have built' },
  { cmd: 'experience', hint: 'Jump to my work history' },
  { cmd: 'resume', hint: 'Open my resume PDF in a new tab' },
  { cmd: 'contact', hint: 'Jump to my contact details' },
  { cmd: 'ask what is his tech stack?', hint: 'Ask the AI assistant anything about me' },
]

const HELP_TEXT = [
  ['help', 'show this list'],
  ['about / experience / projects / skills / education / contact', 'scroll to that section'],
  ['resume', 'open my resume PDF'],
  ['github / linkedin / leetcode', 'open my profiles'],
  ['ask <question>', 'ask the AI assistant about me'],
  ['clear', 'wipe the screen'],
]

let nextId = 0
const entry = (type, text) => ({ id: ++nextId, type, text })

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function RoleRotator() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 3000)
    return () => clearInterval(id)
  }, [])
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={ROLES[index]}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        {ROLES[index]}
      </motion.span>
    </AnimatePresence>
  )
}

function HistoryLine({ item }) {
  if (item.type === 'cmd') {
    return (
      <p className="break-words">
        <span className="font-bold text-neon">guest@chiragch.com:~$ </span>
        <span className="text-fg">{item.text}</span>
      </p>
    )
  }
  if (item.type === 'loading') {
    return <p className="animate-pulse text-amber">querying llama-3 via groq…</p>
  }
  const colors = { ok: 'text-neon', err: 'text-[#FCA5A5]', out: 'text-fg-soft' }
  return <p className={`whitespace-pre-wrap break-words ${colors[item.type] || 'text-fg-soft'}`}>{item.text}</p>
}

export default function HeroSection() {
  // phases: typing -> output -> ready
  const [phase, setPhase] = useState('typing')
  const [typed, setTyped] = useState('')
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setTyped(BOOT_CMD)
      setPhase('ready')
      return
    }
    let i = 0
    const t = setInterval(() => {
      i += 1
      setTyped(BOOT_CMD.slice(0, i))
      if (i >= BOOT_CMD.length) {
        clearInterval(t)
        setTimeout(() => setPhase('output'), 350)
        setTimeout(() => setPhase('ready'), 1100)
      }
    }, 65)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [history, phase])

  const push = useCallback((...items) => {
    setHistory((h) => [...h, ...items].slice(-80))
  }, [])

  const goTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }, [])

  const askAI = useCallback(async (question) => {
    const loading = entry('loading', '')
    setHistory((h) => [...h, loading])
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })
      const data = await res.json()
      const ok = res.ok && !data.error
      setHistory((h) =>
        h.map((item) =>
          item.id === loading.id
            ? { ...item, type: ok ? 'out' : 'err', text: ok ? data.answer : data.error || 'Something went wrong. Please try again.' }
            : item
        )
      )
    } catch {
      setHistory((h) =>
        h.map((item) => (item.id === loading.id ? { ...item, type: 'err', text: 'Could not reach the server. Please try again.' } : item))
      )
    }
  }, [])

  const run = useCallback(
    (raw) => {
      const text = raw.trim()
      if (!text) return
      push(entry('cmd', text))

      const lower = text.toLowerCase()
      // strip shell-isms so "cd projects", "./contact.sh" or "cat about.md" all work
      const word = lower
        .replace(/^(cd|open|goto|cat|run)\s+/, '')
        .replace(/^\.\//, '')
        .replace(/\.(md|sh|pdf|txt)$/, '')
        .replace(/\s+--?\S+/g, '')
        .trim()

      if (lower === 'clear') {
        setHistory([])
        return
      }
      if (lower === 'help' || lower === '?') {
        push(entry('out', 'Available commands:'))
        HELP_TEXT.forEach(([cmd, desc]) => push(entry('out', `  ${cmd}  →  ${desc}`)))
        push(entry('out', 'Not a terminal person? The menu at the top works too.'))
        return
      }
      if (word === 'whoami' || lower === 'whoami --verbose') {
        push(entry('out', 'Chirag Chandrashekar · Full Stack Engineer · San Jose, CA'))
        push(entry('ok', '[OK] Open to work · Software Developer @ Glenysys'))
        return
      }
      if (SECTION_IDS.includes(word)) {
        push(entry('ok', `→ opening #${word}`))
        goTo(word)
        return
      }
      if (word === 'resume' || word === 'cv') {
        push(entry('ok', '→ opening Chirag_Resume.pdf in a new tab'))
        window.open('/Chirag_Resume.pdf', '_blank', 'noopener')
        return
      }
      if (LINKS[word]) {
        push(entry('ok', `→ opening ${word} profile in a new tab`))
        window.open(LINKS[word], '_blank', 'noopener')
        return
      }
      if (word === 'email' || word === 'mail') {
        push(entry('ok', '→ chiragchandrashekar@gmail.com'))
        window.location.href = 'mailto:chiragchandrashekar@gmail.com'
        return
      }
      if (lower === 'sudo hire-chirag' || lower === 'sudo hire chirag') {
        push(entry('ok', '[OK] Excellent decision. Routing you to the contact section…'))
        goTo('contact')
        return
      }
      if (lower.startsWith('ask ')) {
        askAI(text.slice(4).trim())
        return
      }
      // anything that reads like a question goes to the AI assistant
      if (lower.endsWith('?') || lower.split(/\s+/).length > 2) {
        push(entry('out', 'Interpreting that as a question for the AI assistant…'))
        askAI(text)
        return
      }
      push(entry('err', `command not found: ${text}`))
      push(entry('out', `Type "help" to see what works, or "ask ${text}" to ask the AI.`))
    },
    [push, goTo, askAI]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    run(input)
    setInput('')
  }

  return (
    <section id="home" className="flex min-h-screen items-center pb-16 pt-28">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <TerminalWindow title="chirag@bengaluru — zsh — interactive">
            <div
              className="p-6 text-[15px] md:p-10 md:text-base"
              onClick={() => phase === 'ready' && inputRef.current?.focus()}
            >
              {/* boot command */}
              <p>
                <span className="font-bold text-neon">$ </span>
                <span className="text-fg">{typed}</span>
                {phase === 'typing' && <span className="caret-blink ml-0.5 inline-block h-[1.1em] w-[9px] translate-y-[3px] bg-neon" />}
              </p>

              {/* whoami output */}
              {phase !== 'typing' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                  <h1 className="mb-2 mt-5 text-4xl font-extrabold leading-tight tracking-tight text-fg md:text-6xl lg:text-7xl">
                    Chirag{' '}
                    <span className="text-neon" style={{ textShadow: '0 0 28px rgba(74,222,128,0.45)' }}>
                      Chandrashekar
                    </span>
                  </h1>
                  <p className="mb-5 min-h-[2rem] text-lg font-semibold text-amber md:text-2xl">
                    <RoleRotator />
                  </p>
                  <p className="max-w-3xl text-fg-soft">
                    Passionate software engineer specializing in building exceptional digital experiences at the
                    intersection of technology and user-centered design.
                  </p>

                  <p className="mt-6">
                    <span className="font-bold text-neon">$ </span>
                    <span className="text-fg">status --check</span>
                  </p>
                  <p className="text-fg-soft">
                    [<span className="font-bold text-neon">OK</span>] Open to work ·{' '}
                    <span className="font-semibold text-fg">Software Developer @ Glenysys</span> · San Jose, CA
                  </p>

                  <div className="mt-5 flex items-center gap-5">
                    <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-fg-soft transition-colors hover:text-neon">
                      <FaGithub size={22} />
                    </a>
                    <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-fg-soft transition-colors hover:text-neon">
                      <FaLinkedin size={22} />
                    </a>
                    <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-fg-soft transition-colors hover:text-neon">
                      <SiLeetcode size={22} />
                    </a>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="/Chirag_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-neon px-6 py-3 text-sm font-bold text-[#06100A] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(74,222,128,0.45)] md:text-[15px]"
                    >
                      View Resume
                    </a>
                    <a
                      href="#contact"
                      className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-neon transition-colors duration-200 hover:border-neon hover:bg-neon/10 md:text-[15px]"
                    >
                      Get in Touch
                    </a>
                  </div>
                </motion.div>
              )}

              {/* interactive prompt */}
              {phase === 'ready' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mt-9 border-t border-dashed border-line pt-6"
                >
                  <p className="text-sm text-fg-dim md:text-[15px]">
                    # This terminal is live. Click a shortcut below or type a command, and it will take you around the
                    site or answer questions about me. New to terminals? Start with "help", or just scroll.
                  </p>

                  <div ref={scrollRef} className="mt-4 max-h-72 space-y-1.5 overflow-y-auto pr-2">
                    {history.map((item) => (
                      <HistoryLine key={item.id} item={item} />
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
                    <label htmlFor="hero-terminal-input" className="shrink-0 font-bold text-neon">
                      guest@chiragch.com:~$
                    </label>
                    <input
                      id="hero-terminal-input"
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder='type a command… (try "help")'
                      autoComplete="off"
                      spellCheck="false"
                      maxLength={300}
                      className="min-w-0 flex-1 bg-transparent text-fg caret-neon outline-none placeholder:text-fg-dim"
                    />
                  </form>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {CHIPS.map(({ cmd, hint }) => (
                      <button
                        key={cmd}
                        type="button"
                        title={hint}
                        onClick={() => run(cmd)}
                        className="rounded-md border border-line px-3.5 py-2 text-[13px] text-mint transition-all duration-200 hover:border-neon/60 hover:bg-neon/10 md:text-sm"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  )
}
