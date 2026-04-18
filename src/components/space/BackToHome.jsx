import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Earth } from './PlanetVisual.jsx'

export default function BackToHome() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={() => navigate('/')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: 28,
        left: 28,
        zIndex: 100,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 14px 8px 8px',
        borderRadius: 50,
        background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        transition: 'background 0.2s, transform 0.2s',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
      }}
      title="Back to Home"
    >
      <Earth size={28} />
      <span style={{
        fontSize: 12,
        fontFamily: "'JetBrains Mono', monospace",
        color: '#94a3b8',
        opacity: hovered ? 1 : 0,
        maxWidth: hovered ? 80 : 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        transition: 'opacity 0.2s, max-width 0.25s',
      }}>
        Home
      </span>
    </div>
  )
}
