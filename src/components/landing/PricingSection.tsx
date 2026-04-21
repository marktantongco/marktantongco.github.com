'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, BookOpen, FileSpreadsheet, MessageSquare, Phone, Users, CheckSquare, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const included = [
  { icon: BookOpen, text: 'The 3 Pillars of 100% Accountability' },
  { icon: MessageSquare, text: 'The Ownership Script (word-for-word)' },
  { icon: Zap, text: 'The Weekly Reset Routine' },
  { icon: Users, text: 'The Affiliate Advantage Guide' },
  { icon: FileSpreadsheet, text: 'Accountability Tracker Template' },
  { icon: Phone, text: 'Client Follow-Up System' },
  { icon: Users, text: 'Team Huddle Agenda Template' },
  { icon: CheckSquare, text: '7-Day Quick-Start Checklist' },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#0d1b2a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/3 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Get the <span className="text-gold-gradient">Complete Playbook</span>
          </h2>
          <p className="text-[#b0b8c8] max-w-xl mx-auto">
            Everything you need to own outcomes, lead with faith, and sell with integrity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1b2838] border-2 border-gold/20 rounded-2xl p-8 sm:p-12 gold-glow max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 mb-4">
              <span className="text-gold text-xs font-bold tracking-wider uppercase">
                One-Time Payment
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl sm:text-6xl font-black text-gold">$27</span>
            </div>
            <p className="text-[#8892a4]">No subscriptions. No hidden fees. Lifetime access.</p>
          </div>

          <div className="space-y-3 mb-8">
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-gold" />
                </div>
                <span className="text-[#b0b8c8] text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="w-full bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold text-lg h-14"
          >
            Get the Playbook Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-center text-xs text-[#8892a4] mt-4">
            30-day money-back guarantee. Email mark.tantongco@gmail.com for support.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
