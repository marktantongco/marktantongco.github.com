'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Rafael Santos',
    role: 'Senior Financial Advisor | MDRT',
    initials: 'RS',
    text: 'This playbook changed how I approach every client conversation. The ownership scripts alone helped me convert 3 warm leads I had given up on. The faith foundation makes it truly unique.',
    stars: 5,
  },
  {
    name: 'Maria Cristina Reyes',
    role: 'Agency Unit Manager',
    initials: 'MR',
    text: 'I bought this for my team of 12 advisors. Within a month, our weekly team huddles went from complaint sessions to solution workshops. The 3-Touch Follow-Up System is gold.',
    stars: 5,
  },
  {
    name: 'James Tan',
    role: 'Independent Advisor | 8 Years',
    initials: 'JT',
    text: 'The weekly reset routine alone is worth 10x the price. I\'ve never been this consistent. When you combine the framework with faith, something clicks that no sales training ever achieved.',
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#1b2838]">
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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#0d1b2a] border-gold/10 h-full">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-[#b0b8c8] text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
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
