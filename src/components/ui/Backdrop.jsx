import React from 'react'
import HexBackdrop from './HexBackdrop.jsx'

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* drifting glow fields so the page never reads as flat black */}
      <div
        className="motion-bg absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.13), transparent 65%)',
          filter: 'blur(90px)',
          animation: 'drift-a 26s ease-in-out infinite',
        }}
      />
      <div
        className="motion-bg absolute -bottom-48 -right-32 h-[38rem] w-[38rem] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251,191,36,0.09), transparent 65%)',
          filter: 'blur(100px)',
          animation: 'drift-b 32s ease-in-out infinite',
        }}
      />
      <div
        className="motion-bg absolute top-1/3 left-1/2 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(45,212,191,0.07), transparent 70%)',
          filter: 'blur(110px)',
          animation: 'drift-a 38s ease-in-out infinite reverse',
        }}
      />

      {/* interactive honeycomb: cells light up near the cursor and fade back */}
      <HexBackdrop />
    </div>
  )
}
