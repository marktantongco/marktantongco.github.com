'use client'

import { motion } from 'framer-motion'
import { Cross, Quote } from 'lucide-react'

export function FaithSection() {
  return (
    <section id="faith" className="py-16 sm:py-24 bg-[#0d1b2a] relative overflow-hidden">
      {/* Warm amber gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#92400e]/5 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#92400e]/40 bg-[#92400e]/10 mb-8">
            <Cross className="w-4 h-4 text-[#b45309]" />
            <span className="text-[#b45309] text-sm font-semibold tracking-wider uppercase">
              Faith-Driven
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Your Faith Is Your{' '}
            <span className="bg-gradient-to-r from-[#92400e] to-[#b45309] bg-clip-text text-transparent">
              Competitive Advantage
            </span>
          </h2>

          <div className="faith-accent rounded-xl p-8 sm:p-10 mb-8 max-w-2xl mx-auto">
            <Quote className="w-8 h-8 text-[#b45309] mx-auto mb-4 opacity-60" />
            <blockquote className="text-xl sm:text-2xl font-serif italic text-[#b0b8c8] mb-4">
              &ldquo;I can do all things through Christ who strengthens me&rdquo;
            </blockquote>
            <p className="text-[#b45309] font-semibold">— Philippians 4:13</p>
          </div>

          <p className="text-[#b0b8c8] text-lg max-w-2xl mx-auto leading-relaxed">
            This playbook is built on a conviction: <strong className="text-white">your faith is your competitive advantage</strong>. 
            Philippians 4:13 isn&apos;t a slogan—it&apos;s a system. When you combine unshakable faith 
            with a proven framework, fear-based selling disappears. You stop performing and start serving.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
