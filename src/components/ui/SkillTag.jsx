import React from 'react'

export default function SkillTag({ label }) {
  return (
    <span
      className="inline-block px-3 py-1 text-xs font-mono rounded-full"
      style={{
        background: 'rgba(129, 140, 248, 0.1)',
        border: '1px solid rgba(129, 140, 248, 0.25)',
        color: '#818cf8',
      }}
    >
      {label}
    </span>
  )
}
