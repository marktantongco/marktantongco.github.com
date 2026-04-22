'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, ExternalLink, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { GUMROAD_PRODUCT_URL, PRODUCT_PRICE, STORAGE_KEYS } from '@/lib/config'
import { FloatingParticles } from './FloatingParticles'

interface FinalCTAProps {
  onEnterCommandCenter: () => void
}

export function FinalCTA({ onEnterCommandCenter }: FinalCTAProps) {
  const [unlocked] = useLocalStorage(STORAGE_KEYS.UNLOCKED, false)

  return (
    <section id="final-cta" className="py-16 sm:py-24 bg-[#0d1b2a] relative overflow-hidden">
      {/* Warm amber glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#92400e]/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      {/* Floating particles */}
      <FloatingParticles count={10} color="#c9a84c" minSize={1} maxSize={3} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-8"
          >
            <Shield className="w-8 h-8 text-gold" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-xs font-semibold tracking-wider uppercase">
              Your Framework Awaits
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            You were created to lead.
            <br />
            <span className="text-gold-gradient">Now you have the framework.</span>
          </h2>

          <p className="text-[#b0b8c8] text-lg mb-8 max-w-xl mx-auto">
            Accountability isn&apos;t about guilt. It&apos;s about power. When you own your words, 
            your actions, your results—you stop waiting for permission to succeed.
          </p>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 150 }}
            className="text-gold font-bold text-xl mb-8"
          >
            Go build a better us.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {unlocked ? (
              <Button
                size="lg"
                onClick={onEnterCommandCenter}
                className="bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold text-base px-8 h-14 w-full sm:w-auto shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-shadow"
              >
                Enter Command Center
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            ) : (
              <a href={GUMROAD_PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold text-base px-8 h-14 w-full sm:w-auto shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-shadow"
                >
                  Buy the Playbook — {PRODUCT_PRICE}
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            )}
            <Button
              size="lg"
              variant="outline"
              onClick={onEnterCommandCenter}
              className="border-gold/30 text-gold hover:bg-gold/10 hover:text-gold font-semibold text-base px-8 h-14 w-full sm:w-auto"
            >
              {unlocked ? 'Command Center' : 'Enter Access Code'}
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[#8892a4] text-xs"
          >
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-gold/50" />
              30-day money-back guarantee
            </span>
            <span className="text-gold/20">|</span>
            <span>Lifetime access</span>
            <span className="text-gold/20">|</span>
            <span>8 downloadable resources</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
