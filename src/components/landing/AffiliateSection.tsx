'use client'

import { motion } from 'framer-motion'
import { Users, DollarSign, Copy, Check, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedCounter } from './AnimatedCounter'

export function AffiliateSection() {
  const [copied, setCopied] = useState(false)

  const outreachScript = `"Hey [Name], I just went through this accountability playbook by Mark Tantongco—it's the exact framework he uses for MDRT qualifiers. It's got scripts, templates, the whole thing. If you find it useful, you can also become an affiliate and earn 30% when you share it.

Here's my link: [your-affiliate-link]"`

  const earningsTiers = [
    { referrals: 10, amount: 81 },
    { referrals: 25, amount: 202.5 },
    { referrals: 50, amount: 405 },
    { referrals: 100, amount: 810 },
  ]

  return (
    <section id="affiliate" className="py-16 sm:py-24 bg-[#0d1b2a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Part 4
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            The Affiliate <span className="text-gold-gradient">Advantage</span>
          </h2>
          <p className="text-[#b0b8c8] max-w-2xl mx-auto">
            This playbook is also a business opportunity. When you share it with peers, you earn. 
            Here&apos;s how to turn your network into your distribution channel—with zero ad spend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Commission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#1b2838] border-gold/10 h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 150 }}
                    className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center"
                  >
                    <DollarSign className="w-6 h-6 text-gold" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-white">30% Commission</CardTitle>
                    <p className="text-gold text-sm font-semibold">Per Sale</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-[#0d1b2a] rounded-lg p-6 border border-gold/10 mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-black text-gold">$27</p>
                      <p className="text-xs text-[#8892a4]">Playbook Price</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-gold">×30%</p>
                      <p className="text-xs text-[#8892a4]">Commission</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-green-400">$8.10</p>
                      <p className="text-xs text-[#8892a4]">Per Sale</p>
                    </div>
                  </div>
                </div>

                {/* Animated Earnings Tiers */}
                <div className="space-y-3">
                  {earningsTiers.map((tier, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between py-2 border-b border-gold/5">
                        <span className="text-[#b0b8c8] text-sm flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-gold/50" />
                          {tier.referrals} referrals
                        </span>
                        <span className={`font-bold ${i === earningsTiers.length - 1 ? 'text-gold text-lg' : 'text-white'}`}>
                          <AnimatedCounter target={tier.amount} prefix="$" decimals={i > 0 ? 0 : 0} />
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-1 h-1 bg-gold/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(tier.referrals / 100) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-gold/30 to-gold/60 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Outreach Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#1b2838] border-gold/10 h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 150 }}
                    className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center"
                  >
                    <Users className="w-6 h-6 text-gold" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-white">Recruit 3 MDRT Peers</CardTitle>
                    <p className="text-gold text-sm font-semibold">3-Step Guide</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 mb-6">
                  {[
                    'Choose 3 trusted peers who share your values and work ethic.',
                    'Share your genuine experience. Don\'t sell—share.',
                    'Invite them to become affiliates too. 3 peers become 9, then 27.',
                  ].map((step, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15 }}
                      className="flex gap-3"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200 }}
                        className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                      >
                        {i + 1}
                      </motion.span>
                      <span className="text-[#b0b8c8] text-sm">{step}</span>
                    </motion.li>
                  ))}
                </ol>

                <div className="relative">
                  <p className="text-xs text-[#8892a4] font-semibold uppercase tracking-wider mb-2">
                    Outreach Script
                  </p>
                  <div className="bg-[#0d1b2a] rounded-lg p-4 border border-gold/10 font-mono text-xs text-[#b0b8c8] whitespace-pre-wrap">
                    {outreachScript}
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(outreachScript)
                          setCopied(true)
                          setTimeout(() => setCopied(false), 2000)
                        } catch {
                          // Fallback: ignore silently
                        }
                      }}
                      className="absolute top-8 right-2 p-2 rounded-md hover:bg-gold/10 transition-colors"
                      aria-label="Copy outreach script"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-[#8892a4]" />
                      )}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
