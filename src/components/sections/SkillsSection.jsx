import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import { skillsData } from '../../data/Skills.js'

const categoryIcons = {
  Frontend: '🎨',
  Backend: '⚙️',
  'Database & Tools': '🗄️',
  'Business Skills': '📊',
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="Skills" sub="What I work with" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((category, i) => (
            <motion.div
              key={category.category}
              className="glass rounded-2xl p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{categoryIcons[category.category] || '💡'}</span>
                <h3 className="text-base font-semibold" style={{ color: '#f1f5f9' }}>
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag, j) => (
                  <motion.span
                    key={tag}
                    className="inline-block px-3 py-1.5 text-sm rounded-lg font-mono cursor-default transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#94a3b8',
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.03 }}
                    whileHover={{
                      backgroundColor: 'rgba(129,140,248,0.12)',
                      borderColor: 'rgba(129,140,248,0.3)',
                      color: '#818cf8',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
