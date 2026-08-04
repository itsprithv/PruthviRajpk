import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 cursor-spotlight transition-[background] duration-150" />
  )
}
