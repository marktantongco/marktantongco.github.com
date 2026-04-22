'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Rafael Santos',
    role: 'Senior Financial Advisor | MDRT',
    initials: 'RS',
    text: 'This playbook changed how I approach every client conversation. The ownership scripts alone helped me convert 3 warm leads I had given up on. The faith foundation makes it truly unique.',
    stars: 5,
    highlight: '3 warm leads converted',
  },
  {
    name: 'Maria Cristina Reyes',
    role: 'Agency Unit Manager',
    initials: 'MR',
    text: 'I bought this for my team of 12 advisors. Within a month, our weekly team huddles went from complaint sessions to solution workshops. The 3-Touch Follow-Up System is gold.',
    stars: 5,
    highlight: '12 advisors transformed',
  },
  {
    name: 'James Tan',
    role: 'Independent Advisor | 8 Years',
    initials: 'JT',
    text: 'The weekly reset routine alone is worth 10x the price. I\'ve never been this consistent. When you combine the framework with faith, something clicks that no sales training ever achieved.',
    stars: 5,
    highlight: '10x value',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#1b2838] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            What Advisors Are <span className="text-gold-gradient">Saying</span>
          </h2>
          <p className="text-[#b0b8c8] max-w-xl mx-auto">
            Real results from real Filipino advisors who made the shift from blame to ownership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="bg-[#0d1b2a] border-gold/10 hover:border-gold/25 transition-all h-full">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.15 + i * 0.1, type: 'spring', stiffness: 200 }}
                      >
                        <Star className="w-4 h-4 fill-gold text-gold" />
                      </motion.div>
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-gold/30 mb-2" />
                  <p className="text-[#b0b8c8] text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  {/* Highlight badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4"
                  >
                    <span className="text-gold text-xs font-bold">{t.highlight}</span>
                  </motion.div>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border border-gold/20">
                      <AvatarFallback className="bg-gold/10 text-gold text-sm font-bold">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-[#8892a4] text-xs">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
