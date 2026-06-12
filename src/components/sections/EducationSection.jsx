import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading.jsx'
import { educationData } from '../../data/Education.js'

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading command="git log --education" note="05" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-neon/35 md:p-10"
        >
          {educationData.map((edu, i) => (
            <div
              key={edu.school}
              className={`flex flex-wrap items-start justify-between gap-4 py-6 ${
                i < educationData.length - 1 ? 'border-b border-dashed border-line' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 text-neon">
                  <FaGraduationCap size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-fg md:text-xl">{edu.school}</h3>
                  <p className="mt-1 text-sm text-fg-soft md:text-[15px]">{edu.degree}</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-bold text-neon">{edu.gpa}</p>
                <p className="mt-0.5 text-sm text-amber">{edu.date}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
