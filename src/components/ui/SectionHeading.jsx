import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ label, sub }) {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p
        className="text-sm font-mono mb-3 tracking-widest uppercase"
        style={{ color: '#818cf8' }}
      >
        {sub}
      </p>
      <h2
        className="text-4xl md:text-5xl font-bold tracking-tight"
        style={{ color: '#f1f5f9' }}
      >
        {label}
      </h2>
      <div className="mt-4 mx-auto h-px w-24" style={{ background: 'linear-gradient(90deg, transparent, #818cf8, transparent)' }} />
    </motion.div>
  )
}
