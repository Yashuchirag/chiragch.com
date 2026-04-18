import React from 'react'

export function Sun({ size = 100 }) {
  return (
    <div
      className="planet-sun"
      style={{ width: size, height: size, flexShrink: 0 }}
    />
  )
}

export function Mercury({ size = 22 }) {
  return <div className="planet-mercury" style={{ width: size, height: size }} />
}

export function Venus({ size = 36 }) {
  return <div className="planet-venus" style={{ width: size, height: size }} />
}

export function Earth({ size = 40 }) {
  return <div className="planet-earth" style={{ width: size, height: size }} />
}

export function Jupiter({ size = 68 }) {
  return <div className="planet-jupiter" style={{ width: size, height: size }} />
}

export function Saturn({ size = 52 }) {
  const ringW = size * 2.1
  const ringH = size * 0.32
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      {/* Back ring half */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        width: ringW, height: ringH,
        marginLeft: -ringW / 2, marginTop: -ringH / 2,
        borderRadius: '50%',
        border: `${Math.max(2, size * 0.055)}px solid rgba(251,191,36,0.4)`,
        boxShadow: '0 0 8px rgba(251,191,36,0.2)',
        transform: 'rotateX(72deg)',
        zIndex: 0,
        clipPath: 'inset(50% 0 0 0)',
      }} />
      {/* Planet body */}
      <div
        className="planet-saturn"
        style={{ width: size, height: size, position: 'relative', zIndex: 1 }}
      />
      {/* Front ring half */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        width: ringW, height: ringH,
        marginLeft: -ringW / 2, marginTop: -ringH / 2,
        borderRadius: '50%',
        border: `${Math.max(2, size * 0.055)}px solid rgba(251,191,36,0.55)`,
        boxShadow: '0 0 10px rgba(251,191,36,0.25)',
        transform: 'rotateX(72deg)',
        zIndex: 2,
        clipPath: 'inset(0 0 50% 0)',
      }} />
    </div>
  )
}

export function Neptune({ size = 44 }) {
  return <div className="planet-neptune" style={{ width: size, height: size }} />
}
