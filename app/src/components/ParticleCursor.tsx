import { useEffect, useState } from 'react'

export function ParticleCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ x: number; y: number; alpha: number }>>([])

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add new particle
      setParticles(prev => [
        ...prev.slice(-15),
        { x: e.clientX, y: e.clientY, alpha: 0.8 }
      ])
    }

    const animateParticles = () => {
      setParticles(prev =>
        prev.map(p => ({ ...p, alpha: p.alpha - 0.03 })).filter(p => p.alpha > 0)
      )
      requestAnimationFrame(animateParticles)
    }

    window.addEventListener('mousemove', updateMouse)
    const animId = requestAnimationFrame(animateParticles)

    return () => {
      window.removeEventListener('mousemove', updateMouse)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-500"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.alpha,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      <div
        className="absolute w-32 h-32 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}