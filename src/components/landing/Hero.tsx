'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { GUMROAD_PRODUCT_URL, PRODUCT_PRICE, STORAGE_KEYS } from '@/lib/config'
import { FloatingParticles } from './FloatingParticles'
import Image from 'next/image'

interface HeroProps {
  onEnterCommandCenter: () => void
}

export function Hero({ onEnterCommandCenter }: HeroProps) {
  const [unlocked] = useLocalStorage(STORAGE_KEYS.UNLOCKED, false)

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-navy-gradient">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(201,168,76,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(201,168,76,0.2) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Floating particles background */}
      <FloatingParticles count={15} />

      {/* Animated floating accent shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                Purpose-Driven Professional
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
              Own Outcomes,
              <br />
              <span className="text-gold-gradient">Not Excuses</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#b0b8c8] mb-4 max-w-xl mx-auto lg:mx-0">
              How Faith-Driven Filipino Advisors Own Results, Lead Stronger Teams, and Sell with
              Integrity
            </p>

            <p className="text-sm text-[#8892a4] mb-8 italic">
              &ldquo;I can do all things through Christ who strengthens me&rdquo; — Philippians 4:13
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* PRIMARY CTA: Buy on Gumroad (revenue!) or Enter Command Center if already unlocked */}
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

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {['RS', 'MR', 'JT'].map((initials, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gold/10 border-2 border-[#0d1b2a] flex items-center justify-center">
                    <span className="text-gold text-[9px] font-bold">{initials}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 text-gold fill-gold" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#8892a4] text-xs">Trusted by Filipino advisors</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Product mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 bg-gold/5 rounded-3xl blur-2xl"
              />
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-2xl transform rotate-3" />
              <div className="relative bg-[#1b2838] border border-gold/20 rounded-2xl p-6 sm:p-8 gold-glow">
                <Image
                  src="/playbook-hero.png"
                  alt="100% Accountability Sales Playbook"
                  width={500}
                  height={350}
                  className="w-full rounded-lg"
                  priority
                />
                <div className="mt-4 text-center">
                  <p className="text-gold font-bold text-lg">The 100% Accountability</p>
                  <p className="text-gold font-black text-2xl">Sales Playbook</p>
                  <p className="text-[#8892a4] text-sm mt-1">by Mark Anthony Ng Tantongco</p>
                </div>

                {/* Floating price badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 bg-gold text-[#0d1b2a] text-xs font-black px-3 py-1.5 rounded-full shadow-lg"
                >
                  {PRODUCT_PRICE}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
