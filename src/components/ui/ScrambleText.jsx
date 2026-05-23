import { useEffect, useRef } from 'react'
import { animate, createTimeline, scrambleText } from 'animejs'

export default function ScrambleText({ children, as: Tag = 'span', className, style, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tl = createTimeline({ delay })
    tl.add(el, {
      innerHTML: scrambleText({
        override: '',
        duration: 750,
        settleDuration: 250,
        perturbation: 0.2,
        cursor: '░▒▓█',
      }),
    })
    tl.init()

    const replay = () =>
      animate(el, {
        innerHTML: scrambleText({
          duration: 500,
          settleDuration: 250,
          perturbation: 0.15,
          cursor: '░▒▓█',
        }),
      })

    el.addEventListener('pointerenter', replay)
    el.addEventListener('pointerdown', replay)
    return () => {
      el.removeEventListener('pointerenter', replay)
      el.removeEventListener('pointerdown', replay)
    }
  }, [delay])

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  )
}
