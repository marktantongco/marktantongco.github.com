'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Eye, Heart, Battery, Target } from 'lucide-react'

const processSteps = [
  {
    icon: Eye,
    title: 'Review',
    description: 'What 3 conversations went well this week? Name the client, the moment, the turning point.',
    color: '#c9a84c',
    bgColor: 'rgba(201,168,76,0.1)',
  },
  {
    icon: Heart,
    title: 'Reflect',
    description: 'Where did I default to blame? What\'s the ownership rewrite?',
    color: '#4ade80',
    bgColor: 'rgba(74,222,128,0.1)',
  },
  {
    icon: Battery,
    title: 'Recharge',
    description: 'One thing I\'m grateful for in my work this week. Gratitude prevents burnout.',
    color: '#f97316',
    bgColor: 'rgba(249,115,22,0.1)',
  },
  {
    icon: Target,
    title: 'Plan',
    description: 'Top 3 priorities for next week. Clarity on Friday means momentum on Monday.',
    color: '#a78bfa',
    bgColor: 'rgba(167,139,250,0.1)',
  },
]

export function AnimatedProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <div ref={containerRef} className="relative">
      {/* Desktop: Horizontal flow */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between relative">
          {/* Animated connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#c9a84c] via-[#4ade80] to-[#a78bfa] origin-left"
          />

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.3, duration: 0.6 }}
              className="flex flex-col items-center relative z-10 w-1/4"
            >
              {/* Step circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.3, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 rounded-full border-2 flex items-center justify-center mb-4 relative"
                style={{
                  borderColor: step.color,
                  backgroundColor: step.bgColor,
                }}
              >
                <step.icon className="w-10 h-10" style={{ color: step.color }} />
                {/* Pulse ring */}
                <motion.div
                  animate={isInView ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0, 0.3],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: step.color }}
                />
                {/* Step number */}
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-black flex items-center justify-center text-[#0d1b2a]"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </span>
              </motion.div>

              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-[#b0b8c8] text-sm text-center max-w-[200px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical flow */}
      <div className="lg:hidden space-y-6">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            {/* Vertical connector */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.2, type: 'spring', stiffness: 200 }}
                className="w-14 h-14 rounded-full border-2 flex items-center justify-center shrink-0 relative"
                style={{
                  borderColor: step.color,
                  backgroundColor: step.bgColor,
                }}
              >
                <step.icon className="w-6 h-6" style={{ color: step.color }} />
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center text-[#0d1b2a]"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </span>
              </motion.div>
              {index < processSteps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
                  className="w-[2px] h-8 origin-top"
                  style={{ backgroundColor: step.color, opacity: 0.5 }}
                />
              )}
            </div>
            <div className="pt-2">
              <h3 className="text-white font-bold mb-1">{step.title}</h3>
              <p className="text-[#b0b8c8] text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
