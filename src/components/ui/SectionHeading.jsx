import React from 'react'
import { motion } from 'framer-motion'

// Each section opens with a shell command for the theme, then a large
// plain-English title so non-technical visitors always know where they are.
export default function SectionHeading({ command, title, note }) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm md:text-base">
        <span className="font-bold text-neon">$ </span>
        <span className="text-fg-soft">{command}</span>
        {note && <span className="text-fg-dim"> # {note}</span>}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg md:text-5xl">{title}</h2>
    </motion.div>
  )
}
