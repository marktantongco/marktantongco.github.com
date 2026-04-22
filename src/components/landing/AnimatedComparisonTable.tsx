'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, X, Check } from 'lucide-react'

const comparisons = [
  { blame: '"They\'re not ready"', ownership: '"I haven\'t built enough trust yet"' },
  { blame: '"The market is slow"', ownership: '"I haven\'t identified the right segment"' },
  { blame: '"My team isn\'t performing"', ownership: '"I haven\'t clarified expectations"' },
  { blame: '"That client was impossible"', ownership: '"I didn\'t find the right approach"' },
  { blame: '"It\'s not my fault"', ownership: '"What part is within my control?"' },
]

export function AnimatedComparisonTable() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="space-y-3">
      {comparisons.map((row, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 + index * 0.15, duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-4 group"
        >
          {/* Blame side */}
          <div className="flex-1 flex items-center gap-2 bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2.5 group-hover:border-red-500/20 transition-colors">
            <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="text-[#8892a4] text-xs sm:text-sm line-through decoration-red-400/30">{row.blame}</span>
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3 + index * 0.15, type: 'spring', stiffness: 300 }}
            className="shrink-0"
          >
            <ArrowRight className="w-4 h-4 text-gold" />
          </motion.div>

          {/* Ownership side */}
          <div className="flex-1 flex items-center gap-2 bg-green-500/5 border border-green-500/10 rounded-lg px-3 py-2.5 group-hover:border-green-500/20 transition-colors">
            <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
            <span className="text-white text-xs sm:text-sm font-medium">{row.ownership}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
