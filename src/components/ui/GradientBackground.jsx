import React from 'react'
import { motion } from 'framer-motion'

const blobs = [
  { color: '#7c3aed', size: 600, x: '-10%', y: '-10%', delay: 0 },
  { color: '#2563eb', size: 500, x: '60%', y: '10%', delay: 2 },
  { color: '#0891b2', size: 450, x: '20%', y: '50%', delay: 4 },
  { color: '#7c3aed', size: 350, x: '75%', y: '60%', delay: 1 },
  { color: '#1d4ed8', size: 400, x: '-5%', y: '75%', delay: 3 },
]

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: blob.color,
            filter: 'blur(120px)',
            opacity: 0.18,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
            scale: [1, 1.05, 0.97, 1.03, 1],
          }}
          transition={{
            duration: 18 + i * 3,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />
    </div>
  )
}
