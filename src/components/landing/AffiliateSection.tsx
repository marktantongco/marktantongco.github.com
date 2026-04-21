'use client'

import { motion } from 'framer-motion'
import { Users, DollarSign, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function AffiliateSection() {
  const [copied, setCopied] = useState(false)

  const outreachScript = `"Hey [Name], I just went through this accountability playbook by Mark Tantongco—it's the exact framework he uses for MDRT qualifiers. It's got scripts, templates, the whole thing. If you find it useful, you can also become an affiliate and earn 30% when you share it.

Here's my link: [your-affiliate-link]"`

  return (
    <section className="py-16 sm:py-24 bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Part 4
          </p>
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
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-gold" />
                  </div>
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

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gold/5">
                    <span className="text-[#b0b8c8]">10 referrals</span>
                    <span className="text-white font-bold">$81</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gold/5">
                    <span className="text-[#b0b8c8]">25 referrals</span>
                    <span className="text-white font-bold">$202.50</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#b0b8c8]">50 referrals</span>
                    <span className="text-gold font-bold text-lg">$405</span>
                  </div>
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
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
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
                    <li key={i} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-[#b0b8c8] text-sm">{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="relative">
                  <p className="text-xs text-[#8892a4] font-semibold uppercase tracking-wider mb-2">
                    Outreach Script
                  </p>
                  <div className="bg-[#0d1b2a] rounded-lg p-4 border border-gold/10 font-mono text-xs text-[#b0b8c8] whitespace-pre-wrap">
                    {outreachScript}
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(outreachScript)
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
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
