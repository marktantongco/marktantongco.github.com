'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface HeroProps {
  onEnterCommandCenter: () => void
}

export function Hero({ onEnterCommandCenter }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-gradient">
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

      {/* Floating accent shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

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
              <Shield className="w-4 h-4 text-gold" />
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

          {/* Right - Product mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
