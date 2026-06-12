import React from 'react'
import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading.jsx'
import { experiences } from '../../data/Experience.js'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading command="ps aux | grep career" note="02 · click a row to expand" title="Where I've Worked" />

        <div className="hidden grid-cols-[90px_1fr_220px] gap-4 px-7 pb-3 text-xs uppercase tracking-[0.14em] text-fg-dim md:grid">
          <span>PID</span>
          <span>PROCESS</span>
          <span className="text-right">UPTIME</span>
        </div>

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="mb-5"
          >
            <details open={i === 0} className="group">
              <summary className="grid cursor-pointer items-center gap-2 rounded-xl border border-line bg-panel px-7 py-5 transition-colors duration-200 hover:border-neon/45 group-open:rounded-b-none group-open:border-b-transparent md:grid-cols-[90px_1fr_220px] md:gap-4">
                <span className="text-sm text-fg-dim">{String(i + 1).padStart(3, '0')}</span>
                <span>
                  <span className="block text-lg font-bold text-fg md:text-xl">{exp.role}</span>
                  <span className="text-sm text-neon">@ {exp.company}</span>
                </span>
                <span className="text-sm font-medium text-amber md:text-right">{exp.period}</span>
              </summary>
              <div className="rounded-b-xl border border-t-0 border-line bg-deep px-7 py-6 md:px-9">
                <ul className="space-y-3">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="shrink-0 font-bold text-neon">&gt;</span>
                      <span className="text-[15px] leading-relaxed text-fg-soft md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-neon/25 bg-neon/5 px-3 py-1 text-xs font-medium text-mint md:text-[13px]"
                    >
                      {skill}
                    </span>
                  ))}
                  {exp.award && (
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-amber/40 bg-amber/10 px-3 py-1 text-xs font-semibold text-amber md:text-[13px]">
                      <FaAward size={12} /> {exp.award.name}
                    </span>
                  )}
                </div>
              </div>
            </details>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
