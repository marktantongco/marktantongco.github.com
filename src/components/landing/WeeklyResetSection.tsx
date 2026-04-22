'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { AnimatedProcessFlow } from './AnimatedProcessFlow'

export function WeeklyResetSection() {
  return (
    <section id="weekly-reset" className="py-16 sm:py-24 bg-[#1b2838] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Part 3
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            The Weekly <span className="text-gold-gradient">Reset Routine</span>
          </h2>
          <p className="text-[#b0b8c8] max-w-2xl mx-auto mb-2">
            15 minutes every Friday at 4:30 PM. No exceptions. This isn&apos;t optional—it&apos;s 
            the system that makes everything else work.
          </p>
          <p className="text-[#8892a4] text-sm italic">
            Review → Reflect → Recharge → Plan
          </p>
        </motion.div>

        <AnimatedProcessFlow />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-[#0d1b2a] rounded-xl px-6 py-4 border border-gold/10">
            <Clock className="w-5 h-5 text-gold" />
            <p className="text-[#b0b8c8] text-sm">
              <span className="text-white font-bold">Every Friday at 4:30 PM</span> — 15 minutes that change your entire next week.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
