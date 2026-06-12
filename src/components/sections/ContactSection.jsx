import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from '../ui/SectionHeading.jsx'

const socials = [
  { icon: <FaGithub size={16} />, label: 'github/Yashuchirag', href: 'https://github.com/Yashuchirag' },
  { icon: <FaLinkedin size={16} />, label: 'linkedin/chirag-ch', href: 'https://www.linkedin.com/in/chirag-ch/' },
  { icon: <SiLeetcode size={16} />, label: 'leetcode/YashuChirag', href: 'https://leetcode.com/u/YashuChirag/' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading command="./contact.sh --say-hello" note="06" title="Get in Touch" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-neon/35 md:p-10"
        >
          <p className="max-w-2xl text-base leading-relaxed text-fg-soft md:text-lg">
            I'm currently open to new opportunities. Whether you have a project in mind, a question, or just want to
            say hi — my inbox is always open.
          </p>

          <p className="my-7 text-2xl font-extrabold tracking-tight md:text-4xl">
            <span className="text-fg">→ </span>
            <a
              href="mailto:chiragchandrashekar@gmail.com"
              className="break-all border-b-2 border-dashed border-fg-dim text-neon transition-all duration-200 hover:border-neon hover:[text-shadow:0_0_24px_rgba(74,222,128,0.5)]"
            >
              chiragchandrashekar@gmail.com
            </a>
          </p>

          <div className="flex flex-wrap gap-3">
            {socials.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-line px-5 py-3 text-sm text-fg-soft transition-colors duration-200 hover:border-neon/50 hover:text-neon md:text-[15px]"
              >
                <span className="text-fg-dim">$ open</span>
                {icon}
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
