import React, { useMemo } from 'react'

export default function StarField({ count = 220 }) {
  const stars = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.15 ? (Math.random() * 1.5 + 1.5) : (Math.random() * 1 + 0.3),
      opacity: Math.random() * 0.6 + 0.15,
      twinkle: Math.random() > 0.65,
      duration: 2.5 + Math.random() * 4,
      delay: Math.random() * 5,
    })), []
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: '#ffffff',
            opacity: s.opacity,
            '--star-opacity': s.opacity,
            animation: s.twinkle
              ? `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`
              : 'none',
          }}
        />
      ))}
    </div>
  )
}
