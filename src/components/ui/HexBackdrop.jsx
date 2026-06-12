import React, { useEffect, useRef } from 'react'

const NEON = '74, 222, 128'
const HEX_RADIUS = 26
const GLOW_RADIUS = 280
const DECAY = 0.93 // per-frame energy retention, creates the fading wake
const BASE_ALPHA = 0.07

function hexPath(ctx, x, y, r) {
  ctx.beginPath()
  for (let i = 0; i < 6; i += 1) {
    const a = (Math.PI / 3) * i
    const px = x + r * Math.cos(a)
    const py = y + r * Math.sin(a)
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.closePath()
}

export default function HexBackdrop() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let cells = []
    let baseLayer = null
    let dpr = 1
    let raf = 0
    let running = false
    let resizeTimer = 0
    const mouse = { x: -1e4, y: -1e4 }

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

      cells = []
      const stepX = HEX_RADIUS * 1.5
      const stepY = Math.sqrt(3) * HEX_RADIUS
      for (let col = 0, x = 0; x < w + HEX_RADIUS; col += 1, x += stepX) {
        const offsetY = col % 2 ? stepY / 2 : 0
        for (let y = offsetY; y < h + HEX_RADIUS; y += stepY) {
          cells.push({ x, y, e: 0 })
        }
      }

      // The resting honeycomb never changes, so render it once offscreen
      baseLayer = document.createElement('canvas')
      baseLayer.width = canvas.width
      baseLayer.height = canvas.height
      const bctx = baseLayer.getContext('2d')
      bctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      bctx.strokeStyle = `rgba(${NEON}, ${BASE_ALPHA})`
      bctx.lineWidth = 1
      cells.forEach(({ x, y }) => {
        hexPath(bctx, x, y, HEX_RADIUS - 1)
        bctx.stroke()
      })
    }

    const draw = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(baseLayer, 0, 0)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      for (const cell of cells) {
        if (cell.e < 0.012) continue
        hexPath(ctx, cell.x, cell.y, HEX_RADIUS - 1)
        ctx.fillStyle = `rgba(${NEON}, ${cell.e * 0.14})`
        ctx.fill()
        ctx.strokeStyle = `rgba(${NEON}, ${Math.min(1, BASE_ALPHA + cell.e * 1.05)})`
        ctx.lineWidth = 1.2
        ctx.stroke()
      }
    }

    const tick = () => {
      if (!running) return
      // faint ambient shimmer so the grid has life without a cursor
      if (Math.random() < 0.05 && cells.length > 0) {
        const cell = cells[(Math.random() * cells.length) | 0]
        cell.e = Math.max(cell.e, 0.22)
      }
      for (const cell of cells) {
        const d = Math.hypot(cell.x - mouse.x, cell.y - mouse.y)
        const target = Math.max(0, 1 - d / GLOW_RADIUS)
        cell.e = Math.max(cell.e * DECAY, target * target)
      }
      draw()
      raf = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running || reduced) return
      running = true
      raf = requestAnimationFrame(tick)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const onPointerMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onPointerLeave = () => {
      mouse.x = -1e4
      mouse.y = -1e4
    }
    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        build()
        if (reduced) draw()
      }, 150)
    }

    build()
    if (reduced) {
      draw()
      window.addEventListener('resize', onResize)
      return () => {
        clearTimeout(resizeTimer)
        window.removeEventListener('resize', onResize)
      }
    }

    start()
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('resize', onResize)

    return () => {
      stop()
      clearTimeout(resizeTimer)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />
}
