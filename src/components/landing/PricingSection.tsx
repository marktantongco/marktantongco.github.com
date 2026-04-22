'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, BookOpen, FileSpreadsheet, MessageSquare, Phone, Users, CheckSquare, Unlock, Download, FileText, Presentation, ExternalLink, ShoppingCart, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { GUMROAD_PRODUCT_URL, PRODUCT_PRICE, STORAGE_KEYS } from '@/lib/config'

const included = [
  { icon: BookOpen, text: 'The 3 Pillars of 100% Accountability' },
  { icon: MessageSquare, text: 'The Ownership Script (word-for-word)' },
  { icon: CheckSquare, text: 'The Weekly Reset Routine' },
  { icon: Users, text: 'The Affiliate Advantage Guide' },
  { icon: FileSpreadsheet, text: 'Accountability Tracker Template' },
  { icon: Phone, text: 'Client Follow-Up System' },
  { icon: Users, text: 'Team Huddle Agenda Template' },
  { icon: CheckSquare, text: '7-Day Quick-Start Checklist' },
]

const quickDownloads = [
  { name: 'Playbook (PDF)', filename: '100-Accountability-Playbook.pdf', icon: FileText, color: 'text-red-400' },
  { name: 'Presentation (PPTX)', filename: '100-Accountability-Playbook.pptx', icon: Presentation, color: 'text-orange-400' },
]

interface PricingSectionProps {
  onEnterCommandCenter: () => void
}

export function PricingSection({ onEnterCommandCenter }: PricingSectionProps) {
  const [unlocked] = useLocalStorage(STORAGE_KEYS.UNLOCKED, false)

  const handleBuyClick = () => {
    if (unlocked) {
      onEnterCommandCenter()
    }
  }

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#0d1b2a] relative overflow-hidden" itemScope itemType="https://schema.org/Product">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />

      <meta itemProp="name" content="100% Accountability Sales Playbook" />
      <meta itemProp="description" content="The faith-driven framework for Filipino advisors who own results, lead stronger teams, and sell with integrity." />
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer" className="hidden">
        <meta itemProp="price" content="27.00" />
        <meta itemProp="priceCurrency" content="USD" />
        <link itemProp="availability" href="https://schema.org/InStock" />
      </div>

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
          className="bg-[#1b2838] border-2 border-gold/20 rounded-2xl p-8 sm:p-12 gold-glow max-w-2xl mx-auto relative overflow-hidden"
        >
          {/* Animated border shimmer */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
            className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          />

          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 mb-4"
            >
              {unlocked ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400 text-xs font-bold tracking-wider uppercase">
                    Unlocked
                  </span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5 text-gold" />
                  <span className="text-gold text-xs font-bold tracking-wider uppercase">
                    One-Time Payment
                  </span>
                </>
              )}
            </motion.div>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
                className="text-5xl sm:text-6xl font-black text-gold"
              >
                {PRODUCT_PRICE}
              </motion.span>
            </div>
            <p className="text-[#8892a4]">
              {unlocked ? 'Lifetime access unlocked. Download your resources below.' : 'No subscriptions. No hidden fees. Lifetime access.'}
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05, type: 'spring', stiffness: 200 }}
                  className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0"
                >
                  <Check className="w-3.5 h-3.5 text-gold" />
                </motion.div>
                <span className="text-[#b0b8c8] text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Quick Download Section - only visible when unlocked */}
          {unlocked && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6"
            >
              <div className="bg-[#0d1b2a] rounded-xl p-4 border border-gold/10">
                <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Download className="w-3.5 h-3.5" />
                  Quick Download
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {quickDownloads.map((file) => (
                    <a
                      key={file.filename}
                      href={`/download/${file.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-gold/10 text-gold hover:bg-gold/20 border border-gold/20 font-semibold"
                      >
                        <file.icon className={`w-3.5 h-3.5 mr-2 ${file.color}`} />
                        {file.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* PRIMARY CTA */}
          {unlocked ? (
            <Button
              size="lg"
              className="w-full bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold text-lg h-14 shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-shadow"
              onClick={handleBuyClick}
            >
              Enter Command Center
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          ) : (
            <a
              href={GUMROAD_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="w-full bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold text-lg h-14 shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-shadow"
              >
                Buy Now — {PRODUCT_PRICE}
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          )}

          {/* "Already purchased?" link — delegates to global modal in page.tsx */}
          {!unlocked && (
            <div className="text-center mt-4">
              <button
                onClick={onEnterCommandCenter}
                className="text-[#8892a4] text-xs hover:text-gold transition-colors underline underline-offset-2"
              >
                Already purchased? Enter your access code
              </button>
            </div>
          )}

          <div className="mt-3 flex items-center justify-center gap-3 text-[#8892a4] text-xs">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-gold/50" />
              30-day guarantee
            </span>
            <span className="text-gold/20">|</span>
            <span>Email support</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
