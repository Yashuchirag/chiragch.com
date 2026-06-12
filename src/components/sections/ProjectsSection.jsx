import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading.jsx'
import { Projects } from '../../data/Projects.js'

const dotColors = ['text-amber', 'text-neon', 'text-[#60A5FA]']

function repoName(project) {
  if (project.link) return project.link.split('/').filter(Boolean).pop()
  return project.title.split(/[—:]/)[0].trim().toLowerCase().replace(/\s+/g, '-')
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading command="gh repo list Yashuchirag" note="03 · things I've built" title="Projects" />

        <div className="grid gap-5 md:grid-cols-2">
          {Projects.map((project, i) => {
            const isLink = Boolean(project.link)
            const Tag = isLink ? motion.a : motion.div
            const linkProps = isLink ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {}
            return (
              <Tag
                key={project.title}
                {...linkProps}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className={`group flex flex-col rounded-xl border border-line bg-panel p-7 transition-all duration-250 hover:-translate-y-1 hover:border-neon/45 hover:shadow-[0_14px_40px_rgba(0,0,0,0.5)] md:p-8 ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="break-all text-base font-bold text-neon md:text-lg">
                    <span className="text-fg-dim">▸ </span>
                    {repoName(project)}
                  </span>
                  {isLink ? (
                    <FaExternalLinkAlt
                      size={13}
                      className="mt-1.5 shrink-0 text-fg-dim transition-colors duration-200 group-hover:text-neon"
                    />
                  ) : (
                    <span className="shrink-0 text-xs text-fg-dim"># private</span>
                  )}
                </div>
                <h3 className="mt-2 text-[15px] font-semibold leading-snug text-fg md:text-base">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-soft md:text-[15px]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-fg-soft md:text-[13px]">
                  {project.skills.slice(0, 5).map((skill, j) => (
                    <span key={skill} className="inline-flex items-center gap-1.5">
                      <span className={dotColors[j % dotColors.length]}>●</span>
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-fg-dim">
                  {project.period} · {project.company}
                </p>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
