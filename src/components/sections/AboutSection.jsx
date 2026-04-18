import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'

const techs = [
  'React', 'JavaScript', 'TypeScript', 'Node.js',
  'Python', 'Java', 'PostgreSQL', 'MongoDB',
  'Docker', 'Git', 'AWS', 'Express',
]

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="About Me" sub="Who I am" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              Hey! I'm Chirag — a passionate Full Stack Developer with a strong foundation in
              computer science and a love for creating beautiful, functional, and user-centered
              digital experiences.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              I hold a Master's degree in Computer Science from the{' '}
              <span style={{ color: '#818cf8' }}>University of Colorado Boulder</span>, where I
              honed my skills in software development, algorithms, and system design. My journey
              in tech started when I wrote my first "Hello World" program, and I've been hooked
              ever since.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              When I'm not writing code, I enjoy exploring new technologies, contributing to
              open source, and solving algorithm challenges on LeetCode.
            </p>
          </motion.div>

          {/* Tech grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="glass p-8 rounded-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-sm font-mono mb-6" style={{ color: '#818cf8' }}>
                // technologies I work with
              </p>
              <div className="grid grid-cols-3 gap-3">
                {techs.map((tech, i) => (
                  <motion.div
                    key={tech}
                    className="glass-hover text-center py-3 px-2 rounded-xl text-sm font-mono cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: '#94a3b8',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ color: '#818cf8', borderColor: 'rgba(129,140,248,0.3)' }}
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
