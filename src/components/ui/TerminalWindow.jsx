import React from 'react'

export default function TerminalWindow({ title, children, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(74,222,128,0.06)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-deep px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        {title && <span className="ml-3 text-xs text-fg-dim md:text-[13px]">{title}</span>}
      </div>
      {children}
    </div>
  )
}
