'use client'

import { motion } from 'framer-motion'
import { Eye, Heart, Battery, Target } from 'lucide-react'

const steps = [
  {
    icon: Eye,
    title: 'Review',
    description: 'What 3 conversations went well this week? Why? Be specific—name the client, the moment, the turning point.',
    color: 'bg-[#c9a84c]',
  },
  {
    icon: Heart,
    title: 'Reflect',
    description: 'Where did I default to blame? What\'s the ownership rewrite? This is where the real growth happens.',
    color: 'bg-[#4ade80]',
  },
  {
    icon: Battery,
    title: 'Recharge',
    description: 'One thing I\'m grateful for in my work this week. Gratitude isn\'t soft—it\'s the fuel that prevents burnout.',
    color: 'bg-[#f97316]',
  },
  {
    icon: Target,
    title: 'Plan',
    description: 'Top 3 priorities for next week—written before I leave. Clarity on Friday means momentum on Monday.',
    color: 'bg-[#a78bfa]',
  },
]

export function WeeklyResetSection() {
  return (
    <section id="weekly-reset" className="py-16 sm:py-24 bg-[#1b2838]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Part 3
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            The Weekly <span className="text-gold-gradient">Reset Routine</span>
          </h2>
          <p className="text-[#b0b8c8] max-w-2xl mx-auto">
            15 minutes every Friday at 4:30 PM. No exceptions. This isn&apos;t optional—it&apos;s 
            the system that makes everything else work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line (hidden on mobile) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-gold/30 to-transparent z-0" />
              )}
              <div className="relative z-10 bg-[#0d1b2a] border border-gold/10 rounded-xl p-6 hover:border-gold/25 transition-all h-full">
                <div className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="w-6 h-6 text-[#0d1b2a]" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gold text-xs font-bold">Step {index + 1}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-[#b0b8c8] text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
