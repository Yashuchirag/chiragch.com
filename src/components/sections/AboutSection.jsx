import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'

const techs = [
  'React', 'TypeScript', 'Node.js',
  'Python', 'Java', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'Docker',
  'YOLOv8', 'OpenCV', 'AWS',
]

const facts = [
  { k: 'years_experience', v: '5+' },
  { k: 'ms_gpa', v: '3.8 / 4.0' },
  { k: 'projects_built', v: '10+' },
  { k: 'location', v: 'San Jose, CA' },
  { k: 'focus', v: 'Full Stack · ML/CV' },
  { k: 'status', v: 'open_to_work', green: true },
]

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading command="cat about.md" note="01 · who I am" title="About Me" />

        <div className="grid items-start gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.div
            {...reveal}
            transition={{ duration: 0.6 }}
            className="space-y-5 rounded-xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-neon/35 md:p-10"
          >
            <p className="leading-relaxed text-fg-soft">
              I'm Chirag — a Full Stack Engineer and Computer Science graduate from the{' '}
              <span className="text-neon">University of Colorado Boulder</span> with a background that spans
              enterprise software, data engineering, and applied machine learning.
            </p>
            <p className="leading-relaxed text-fg-soft">
              At <span className="text-neon">Glenysys</span>, I build production-grade systems — from scalable
              warehouse management platforms on GCP to full-stack product dashboards with real-time data. Before
              that, at <span className="text-neon">Accenture</span>, I designed clinical trial data pipelines and
              ETL systems handling millions of records, earning recognition for delivering critical projects ahead
              of schedule.
            </p>
            <p className="leading-relaxed text-fg-soft">
              Outside of work, I push into computer vision and sports analytics — currently building an AI system
              that automatically scores badminton matches from raw video using YOLOv8 and TrackNet. I believe the
              best code solves real problems elegantly.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              {...reveal}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl border border-line bg-panel p-7 text-sm md:text-[15px]"
            >
              {facts.map(({ k, v, green }, i) => (
                <div
                  key={k}
                  className={`flex items-center justify-between gap-4 py-2.5 ${
                    i < facts.length - 1 ? 'border-b border-dashed border-line' : ''
                  }`}
                >
                  <span className="text-fg-dim">{k}</span>
                  <span className={`font-semibold ${green ? 'text-neon' : 'text-amber'}`}>{v}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...reveal}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="rounded-xl border border-line bg-panel p-7"
            >
              <p className="mb-4 text-sm text-fg-dim"># technologies I work with</p>
              <div className="grid grid-cols-3 gap-2.5">
                {techs.map((tech) => (
                  <div
                    key={tech}
                    className="cursor-default rounded-lg border border-line bg-deep px-2 py-2.5 text-center text-xs text-fg-soft transition-colors duration-200 hover:border-neon/50 hover:text-neon md:text-[13px]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
