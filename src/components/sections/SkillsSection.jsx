import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import { skillsData } from '../../data/Skills.js'

const dirName = (category) =>
  category.toLowerCase().replace(/\s*&\s*/g, '_').replace(/\s+/g, '_') + '/'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading command="ls -la ~/skills/" note="04 · my toolkit" title="Skills" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-neon/35 md:p-10"
        >
          {skillsData.map(({ category, tags }, i) => (
            <div key={category} className={i > 0 ? 'mt-8' : ''}>
              <p className="mb-3 text-sm md:text-[15px]">
                <span className="text-fg-dim">drwxr-xr-x&nbsp;&nbsp;</span>
                <span className="font-bold text-neon">{dirName(category)}</span>
                <span className="text-fg-dim"> # {category}</span>
              </p>
              <div className="flex flex-wrap gap-2.5 pl-1 md:pl-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="cursor-default rounded-md border border-line px-3.5 py-1.5 text-[13px] text-fg-soft transition-colors duration-200 hover:border-neon/50 hover:text-neon md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
