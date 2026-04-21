'use client'

import { motion } from 'framer-motion'
import { Target, MessageSquare, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const pillars = [
  {
    icon: Target,
    title: 'Fix the Problem, Not the Blame',
    subtitle: 'Pillar 1',
    description:
      'The moment you shift from blame to curiosity, you reclaim your power. Blame is comfortable—it absolves you of responsibility. But comfort doesn\'t close deals. Accountability does.',
    quote:
      '"When a client says no, most advisors ask: \'Why did they reject me?\' The accountable advisor asks: \'What did I miss in understanding their need?\'"',
    color: 'from-[#c9a84c] to-[#a68a3a]',
  },
  {
    icon: MessageSquare,
    title: 'Words Create Worlds',
    subtitle: 'Pillar 2',
    description:
      'Your language doesn\'t just describe your reality—it creates it. Every time you say "they\'re not ready," you surrender your agency. The shift isn\'t semantic. It\'s strategic.',
    table: [
      ['"They\'re not ready"', '"I haven\'t built enough trust yet"'],
      ['"The market is slow"', '"I haven\'t identified the right segment"'],
      ['"My team isn\'t performing"', '"I haven\'t clarified expectations"'],
      ['"That client was impossible"', '"I didn\'t find the right approach"'],
      ['"It\'s not my fault"', '"What part is within my control?"'],
    ],
    color: 'from-[#4ade80] to-[#22c55e]',
  },
  {
    icon: Zap,
    title: 'Faith + Framework = Freedom',
    subtitle: 'Pillar 3',
    description:
      'Faith gives you courage. Framework gives you clarity. Together, they remove fear-based selling. Faith doesn\'t replace effort—it fuels it.',
    points: [
      'Faith provides the courage to have honest conversations',
      'Framework provides the repeatable structure that turns courage into results',
      'Freedom is the result: freedom from fear, from blame, from the feast-or-famine cycle',
    ],
    color: 'from-[#b45309] to-[#92400e]',
  },
]

export function PillarsSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-[#1b2838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            The Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            The 3 Pillars of{' '}
            <span className="text-gold-gradient">100% Accountability</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="bg-[#0d1b2a] border-gold/10 hover:border-gold/25 transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}
                  >
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gold text-xs font-bold tracking-widest uppercase">
                    {pillar.subtitle}
                  </p>
                  <CardTitle className="text-white text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#b0b8c8] text-sm leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  {pillar.quote && (
                    <div className="border-l-2 border-gold/40 pl-4 py-2 mb-4">
                      <p className="text-[#8892a4] text-sm italic">{pillar.quote}</p>
                    </div>
                  )}

                  {pillar.table && (
                    <div className="rounded-lg overflow-hidden border border-gold/10">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="bg-gold/10">
                            <th className="text-left p-2 text-gold font-semibold">
                              Instead of...
                            </th>
                            <th className="text-left p-2 text-gold font-semibold">Say this...</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pillar.table.map((row, i) => (
                            <tr key={i} className="border-t border-gold/5">
                              <td className="p-2 text-[#8892a4]">{row[0]}</td>
                              <td className="p-2 text-white font-medium">{row[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {pillar.points && (
                    <ul className="space-y-2">
                      {pillar.points.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-gold mt-1">•</span>
                          <span className="text-[#b0b8c8]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
