import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'

const techs = [
  'React', 'TypeScript', 'Node.js',
  'Python', 'Java', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'Docker',
  'YOLOv8', 'OpenCV', 'AWS',
]

const highlights = [
  { value: '5+', label: 'Years Experience' },
  { value: '3.8', label: 'M.S. GPA' },
  { value: '10+', label: 'Projects Built' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="About Me" sub="Who I am" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              I'm Chirag — a Full Stack Engineer and Computer Science graduate from the{' '}
              <span style={{ color: '#818cf8' }}>University of Colorado Boulder</span> with a
              background that spans enterprise software, data engineering, and applied machine learning.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              At <span style={{ color: '#818cf8' }}>Glenysys</span>, I build production-grade
              systems — from scalable warehouse management platforms on GCP to full-stack product
              dashboards with real-time data. Before that, at{' '}
              <span style={{ color: '#818cf8' }}>Accenture</span>, I designed clinical trial data
              pipelines and ETL systems handling millions of records, earning recognition for
              delivering critical projects ahead of schedule.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              Outside of work, I push into computer vision and sports analytics — currently
              building an AI system that automatically scores badminton matches from raw video
              using YOLOv8 and TrackNet. I believe the best code solves real problems elegantly.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 pt-3">
              {highlights.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold" style={{ color: '#818cf8' }}>{value}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: '#64748b' }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass p-7 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs font-mono mb-5" style={{ color: '#818cf8' }}>
                // technologies I work with
              </p>
              <div className="grid grid-cols-3 gap-2.5">
                {techs.map((tech, i) => (
                  <motion.div
                    key={tech}
                    className="text-center py-2.5 px-2 rounded-xl text-xs font-mono cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: '#94a3b8',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ color: '#818cf8', borderColor: 'rgba(129,140,248,0.3)', background: 'rgba(129,140,248,0.06)' }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
