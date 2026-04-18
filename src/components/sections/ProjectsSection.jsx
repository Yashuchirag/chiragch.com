import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading.jsx'
import SkillTag from '../ui/SkillTag.jsx'
import { Projects } from '../../data/Projects.js'

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="relative z-10 py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="Projects" sub="Things I've built" />

        <div className="grid md:grid-cols-2 gap-5">
          {Projects.map((project, i) => {
            const isOpen = expanded === i
            return (
              <motion.div
                key={i}
                className="glass rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                style={{
                  border: isOpen
                    ? '1px solid rgba(129,140,248,0.3)'
                    : '1px solid rgba(255,255,255,0.08)',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                whileHover={{ boxShadow: '0 8px 32px rgba(129, 140, 248, 0.12)' }}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                {/* Card body */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-sm font-semibold leading-snug" style={{ color: '#f1f5f9' }}>
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-shrink-0 transition-colors"
                        style={{ color: '#475569' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#818cf8'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
                        aria-label="View on GitHub"
                      >
                        <FaGithub size={17} />
                      </a>
                    )}
                  </div>

                  <p className="text-xs font-mono mb-3" style={{ color: '#64748b' }}>{project.period}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.slice(0, 5).map((s) => <SkillTag key={s} label={s} />)}
                    {project.skills.length > 5 && (
                      <span className="text-xs font-mono px-2 py-1" style={{ color: '#475569' }}>
                        +{project.skills.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expand toggle bar */}
                <div
                  className="px-6 py-3 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="text-xs font-mono" style={{ color: '#475569' }}>
                    {isOpen ? 'Show less' : 'View details'}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: '#475569' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </div>

                {/* Expanded responsibilities */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <ul className="space-y-2 mt-4 mb-4">
                          {project.responsibilities.map((r, j) => (
                            <li key={j} className="flex gap-3 text-sm" style={{ color: '#94a3b8' }}>
                              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: '#818cf8' }} />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.skills.map((s) => <SkillTag key={s} label={s} />)}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono"
                            style={{ color: '#818cf8' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub size={12} /> View on GitHub <FaExternalLinkAlt size={10} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
