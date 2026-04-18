import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from '../ui/SectionHeading.jsx'

const contactLinks = [
  {
    icon: <FaEnvelope size={20} />,
    label: 'Email',
    value: 'chirag.chandrashekar@colorado.edu',
    href: 'mailto:chirag.chandrashekar@colorado.edu',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'Yashuchirag',
    href: 'https://github.com/Yashuchirag',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'chirag-chandrashe',
    href: 'https://www.linkedin.com/in/chirag-chandrashe-15b965103/',
  },
  {
    icon: <SiLeetcode size={20} />,
    label: 'LeetCode',
    value: 'YashuChirag',
    href: 'https://leetcode.com/u/YashuChirag/',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading label="Get In Touch" sub="Let's connect" />

        <motion.p
          className="text-lg leading-relaxed mb-16 mx-auto max-w-2xl"
          style={{ color: '#94a3b8' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          I'm currently open to new opportunities. Whether you have a project in mind,
          a question, or just want to say hi — my inbox is always open.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.2)', color: '#818cf8' }}
              >
                {link.icon}
              </div>
              <div>
                <p className="text-xs font-mono mb-0.5" style={{ color: '#64748b' }}>{link.label}</p>
                <p className="text-sm font-medium" style={{ color: '#f1f5f9' }}>{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="mailto:chirag.chandrashekar@colorado.edu"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #818cf8, #6366f1)',
            color: '#fff',
            boxShadow: '0 4px 24px rgba(129, 140, 248, 0.35)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(129, 140, 248, 0.5)' }}
          whileTap={{ scale: 0.97 }}
        >
          <FaEnvelope /> Say Hello
        </motion.a>
      </div>
    </section>
  )
}
