import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading.jsx'
import SkillTag from '../ui/SkillTag.jsx'
import { experiences } from '../../data/Experience.js'

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section id="experience" className="relative z-10 py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="Experience" sub="Where I've worked" />

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => {
            const isOpen = expanded === i
            return (
              <motion.div
                key={i}
                className="glass rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  border: isOpen
                    ? '1px solid rgba(129, 140, 248, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ boxShadow: '0 8px 32px rgba(129, 140, 248, 0.1)' }}
                onClick={() => setExpanded(isOpen ? -1 : i)}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-semibold" style={{ color: '#f1f5f9' }}>
                        {exp.role}
                      </h3>
                      {exp.award && (
                        <span
                          className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-full"
                          style={{
                            background: 'rgba(52,211,153,0.1)',
                            border: '1px solid rgba(52,211,153,0.25)',
                            color: '#34d399',
                          }}
                        >
                          <FaAward size={10} /> {exp.award.name}
                        </span>
                      )}
                    </div>
                    <p className="text-sm mt-1" style={{ color: '#818cf8' }}>{exp.company}</p>
                    <p className="text-xs font-mono mt-1" style={{ color: '#64748b' }}>{exp.period}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 mt-1"
                    style={{ color: '#475569' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                        <p className="text-sm leading-relaxed mt-4 mb-4" style={{ color: '#94a3b8' }}>
                          {exp.description}
                        </p>
                        <ul className="space-y-2 mb-5">
                          {exp.responsibilities.map((r, j) => (
                            <li key={j} className="flex gap-3 text-sm" style={{ color: '#94a3b8' }}>
                              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: '#818cf8' }} />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((s) => <SkillTag key={s} label={s} />)}
                        </div>
                        {exp.award?.PDF && (
                          <a
                            href={exp.award.PDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono"
                            style={{ color: '#34d399' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaAward size={12} /> View Award Certificate <FaExternalLinkAlt size={10} />
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
