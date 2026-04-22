'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FloatingParticlesProps {
  count?: number
  color?: string
  minSize?: number
  maxSize?: number
  className?: string
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function FloatingParticles({
  count = 20,
  color = '#c9a84c',
  minSize = 2,
  maxSize = 6,
  className = '',
}: FloatingParticlesProps) {
  // Defer particle generation to client-only to prevent hydration mismatch.
  // Math.random() produces different values on server vs client, so we
  // must generate particles only after hydration completes.
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.3,
      }))
    )
  }, [count, minSize, maxSize])

  // Render nothing during SSR — particles appear after hydration
  if (particles.length === 0) {
    return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.id % 2 === 0 ? 15 : -15, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
