'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, DollarSign, Copy, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

export function AffiliateDashboard() {
  const [referrals, setReferrals] = useState([10])
  const [copied, setCopied] = useState(false)

  const earnings = referrals[0] * 8.1

  const outreachScript = `"Hey [Name], I just went through this accountability playbook by Mark Tantongco—it's the exact framework he uses for MDRT qualifiers. It's got scripts, templates, the whole thing. If you find it useful, you can also become an affiliate and earn 30% when you share it.

Here's my link: [your-affiliate-link]"`

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Affiliate <span className="text-gold">Program</span>
        </h1>
        <p className="text-[#8892a4]">
          Turn your network into your distribution channel. Earn 30% on every referral.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Commission Calculator */}
        <Card className="bg-[#1b2838] border-gold/10">
          <CardHeader>
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-gold" />
              <CardTitle className="text-white">Commission Calculator</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-4xl sm:text-5xl font-black text-gold mb-1">
                ${earnings.toFixed(2)}
              </p>
              <p className="text-[#8892a4] text-sm">Estimated Earnings</p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#8892a4]">Number of Referrals</span>
                <span className="text-white font-bold">{referrals[0]}</span>
              </div>
              <Slider
                value={referrals}
                onValueChange={setReferrals}
                min={1}
                max={100}
                step={1}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-[#8892a4] mt-1">
                <span>1</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>

            <div className="bg-[#0d1b2a] rounded-lg p-4 border border-gold/10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm font-bold text-white">{referrals[0]}</p>
                  <p className="text-xs text-[#8892a4]">Referrals</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">× $8.10</p>
                  <p className="text-xs text-[#8892a4]">Per Sale</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gold">= ${earnings.toFixed(2)}</p>
                  <p className="text-xs text-[#8892a4]">Earnings</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Affiliate Link & Steps */}
        <Card className="bg-[#1b2838] border-gold/10">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-gold" />
              <CardTitle className="text-white">3-Step Recruiting Guide</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4 mb-6">
              {[
                {
                  title: 'Choose 3 Trusted Peers',
                  desc: 'Who share your values and work ethic. They don\'t need to be your closest friends—they need to be respected voices.',
                },
                {
                  title: 'Share Your Genuine Experience',
                  desc: 'Don\'t sell—share. "I started using this framework and my follow-up conversion went from 20% to 35%."',
                },
                {
                  title: 'Invite Them to Become Affiliates',
                  desc: 'When they earn, they\'re motivated to keep sharing. 3 peers become 9, then 27. Exponential reach.',
                },
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">{step.title}</p>
                    <p className="text-[#8892a4] text-xs mt-1">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div>
              <p className="text-xs text-[#8892a4] font-semibold uppercase tracking-wider mb-2">
                Outreach Script
              </p>
              <div className="relative bg-[#0d1b2a] rounded-lg p-3 border border-gold/10 font-mono text-xs text-[#b0b8c8] whitespace-pre-wrap">
                {outreachScript}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(outreachScript)
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                  }}
                  className="absolute top-2 right-2 p-1.5 rounded-md hover:bg-gold/10 transition-colors"
                  aria-label="Copy script"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#8892a4]" />
                  )}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <Card className="bg-[#1b2838] border-gold/10">
        <CardHeader>
          <CardTitle className="text-white">How the Gumroad Affiliate Program Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: '30% Commission', desc: 'On every sale through your link' },
              { label: 'No Inventory', desc: 'Gumroad handles payments & delivery' },
              { label: 'Instant Payouts', desc: 'Directly to your bank account' },
              { label: 'Full Transparency', desc: 'Track clicks, conversions, earnings' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0d1b2a] rounded-lg p-4 border border-gold/5">
                <p className="text-gold font-bold text-sm mb-1">{item.label}</p>
                <p className="text-[#8892a4] text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-[#0d1b2a] rounded-lg border border-gold/10">
            <p className="text-[#b0b8c8] text-sm">
              <span className="text-gold font-bold">Get started:</span> Email{' '}
              <a href="mailto:mark.tantongco@gmail.com" className="text-gold underline">
                mark.tantongco@gmail.com
              </a>{' '}
              with subject &ldquo;Affiliate Request&rdquo; to get your unique affiliate link within 24 hours.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
