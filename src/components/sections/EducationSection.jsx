import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading.jsx'
import { educationData } from '../../data/Education.js'

export default function EducationSection() {
  return (
    <section id="education" className="relative z-10 py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="Education" sub="My academic background" />

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ boxShadow: '0 8px 32px rgba(129, 140, 248, 0.1)', borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(129, 140, 248, 0.12)', border: '1px solid rgba(129,140,248,0.2)' }}
              >
                <FaGraduationCap size={22} style={{ color: '#818cf8' }} />
              </div>

              <h3 className="text-xl font-bold mb-2 leading-snug" style={{ color: '#f1f5f9' }}>
                {edu.school}
              </h3>
              <p className="text-base font-medium mb-2" style={{ color: '#818cf8' }}>
                {edu.degree}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-sm font-mono" style={{ color: '#64748b' }}>{edu.date}</span>
                <span
                  className="text-sm font-mono px-3 py-1 rounded-full"
                  style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)', color: '#34d399' }}
                >
                  {edu.gpa}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
