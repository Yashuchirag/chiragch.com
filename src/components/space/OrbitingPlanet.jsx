import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrbitingPlanet({
  a, b,           // semi-major and semi-minor axes (px)
  duration,       // seconds per orbit
  startAngle = 0, // initial angle in radians
  planet,         // React element (the planet visual)
  label,          // section label shown on hover
  path,           // route to navigate to on click
  centerX = '50%',
  centerY = '50%',
  showOrbit = true,
}) {
  const navigate = useNavigate()
  const planetRef = useRef(null)
  const angleRef = useRef(startAngle)
  const lastTimeRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const speed = (2 * Math.PI) / (duration * 1000)
    let rafId

    const animate = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time
      const dt = time - lastTimeRef.current
      lastTimeRef.current = time
      angleRef.current += speed * dt

      if (planetRef.current) {
        const x = a * Math.cos(angleRef.current)
        const y = b * Math.sin(angleRef.current)
        planetRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
      }
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [a, b, duration])

  return (
    <>
      {/* Orbit path (SVG ellipse) rendered by parent — see SolarSystem */}
      {/* Planet + label */}
      <div
        ref={planetRef}
        onClick={() => navigate(path)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'absolute',
          top: centerY,
          left: centerX,
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          transform: 'translate(-50%, -50%)',
          transition: 'filter 0.2s',
          filter: hovered ? 'brightness(1.4)' : 'brightness(1)',
        }}
      >
        {planet}
        {/* Label */}
        <div style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          transition: 'opacity 0.2s, transform 0.2s',
          background: 'rgba(0,0,0,0.75)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 8,
          padding: '3px 10px',
          fontSize: 11,
          fontFamily: "'JetBrains Mono', monospace",
          color: '#f1f5f9',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(8px)',
          pointerEvents: 'none',
        }}>
          {label}
        </div>
      </div>
    </>
  )
}
