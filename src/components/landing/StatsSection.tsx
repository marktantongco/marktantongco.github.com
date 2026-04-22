'use client'

import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Clock, Award } from 'lucide-react'
import { AnimatedCounter } from './AnimatedCounter'

const stats = [
  {
    icon: TrendingUp,
    value: 3,
    suffix: ' Pillars',
    label: 'Of Total Accountability',
    description: 'Fix the Problem, Words Create Worlds, Faith + Framework',
  },
  {
    icon: Users,
    value: 12,
    suffix: '+',
    label: 'Advisors Transformed',
    description: 'Team huddles went from complaint sessions to solution workshops',
  },
  {
    icon: Clock,
    value: 15,
    suffix: ' min',
    label: 'Weekly Reset',
    description: 'Every Friday at 4:30 PM. The system that makes everything work.',
  },
  {
    icon: Award,
    value: 30,
    suffix: '%',
    label: 'Affiliate Commission',
    description: 'Earn $8.10 per referral. Turn your network into income.',
  },
]

export function StatsSection() {
  return (
    <section id="stats" className="py-12 sm:py-16 bg-[#1b2838] border-y border-gold/10 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 mb-3 group-hover:bg-gold/20 transition-colors">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gold font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-[#8892a4] text-xs hidden sm:block">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
