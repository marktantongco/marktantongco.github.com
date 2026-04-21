'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FinalCTAProps {
  onEnterCommandCenter: () => void
}

export function FinalCTA({ onEnterCommandCenter }: FinalCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#0d1b2a] relative overflow-hidden">
      {/* Warm amber glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#92400e]/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            You were created to lead.
            <br />
            <span className="text-gold-gradient">Now you have the framework.</span>
          </h2>

          <p className="text-[#b0b8c8] text-lg mb-8 max-w-xl mx-auto">
            Accountability isn&apos;t about guilt. It&apos;s about power. When you own your words, 
            your actions, your results—you stop waiting for permission to succeed.
          </p>

          <p className="text-gold font-bold text-xl mb-8">Go build a better us.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing">
              <Button
                size="lg"
                className="bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold text-base px-8 h-14 w-full sm:w-auto"
              >
                Get the Playbook
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={onEnterCommandCenter}
              className="border-gold/30 text-gold hover:bg-gold/10 hover:text-gold font-semibold text-base px-8 h-14 w-full sm:w-auto"
            >
              Enter Command Center
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
