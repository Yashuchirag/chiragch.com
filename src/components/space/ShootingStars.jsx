import React, { useState, useEffect, useCallback } from 'react'

function createStar() {
  const angle = 28 + Math.random() * 18   // 28–46° — diagonal, upper-left to lower-right
  const length = 110 + Math.random() * 110
  return {
    id: Math.random(),
    x: Math.random() * 65,      // start in left 65% of screen
    y: Math.random() * 55,      // start in upper 55%
    length,
    angle,
    duration: 0.65 + Math.random() * 0.55,
  }
}

export default function ShootingStars({ maxActive = 5 }) {
  const [stars, setStars] = useState([])

  const addStar = useCallback(() => {
    setStars((prev) => {
      if (prev.length >= maxActive) return prev
      return [...prev, createStar()]
    })
  }, [maxActive])

  const removeStar = useCallback((id) => {
    setStars((prev) => prev.filter((s) => s.id !== id))
  }, [])

  useEffect(() => {
    const schedule = () => {
      const delay = 700 + Math.random() * 2200
      return setTimeout(() => { addStar(); schedule() }, delay)
    }
    const t = schedule()
    return () => clearTimeout(t)
  }, [addStar])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {stars.map((s) => (
        /*
          Two-element approach:
          - Outer div: holds the rotation (inline style, no animation)
          - Inner div: translates along the ROTATED x-axis → genuine diagonal movement
          This avoids the CSS animation overriding the inline rotate transform.
        */
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            transform: `rotate(${s.angle}deg)`,
            transformOrigin: 'left center',
          }}
        >
          <div
            onAnimationEnd={() => removeStar(s.id)}
            style={{
              width: s.length,
              height: 1.8,
              borderRadius: 1,
              /* Transparent tail on left → bright head on right (direction of travel) */
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,1) 100%)',
              boxShadow: '0 0 5px 1px rgba(255,255,255,0.55)',
              animation: `star-move ${s.duration}s ease-out forwards, star-fade ${s.duration}s ease-out forwards`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
