'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, Clock, Mail } from 'lucide-react'

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-16 sm:py-20 bg-[#1b2838] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/3 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Shield icon with animated ring */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="relative inline-flex items-center justify-center mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-24 h-24 rounded-full border-2 border-gold/20"
            />
            <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
              <Shield className="w-10 h-10 text-gold" />
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            30-Day <span className="text-gold-gradient">Money-Back Guarantee</span>
          </h2>

          <p className="text-[#b0b8c8] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Try the entire playbook risk-free. If it doesn&apos;t transform how you approach client conversations, 
            team leadership, and personal accountability within 30 days, we&apos;ll refund every penny. 
            No questions asked, no hoops to jump through.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-gold" />
              </div>
              <p className="text-white font-bold text-sm mb-1">No Risk</p>
              <p className="text-[#8892a4] text-xs">Full refund within 30 days if you&apos;re not satisfied</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <p className="text-white font-bold text-sm mb-1">Lifetime Access</p>
              <p className="text-[#8892a4] text-xs">One payment, forever access. No recurring fees ever.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <p className="text-white font-bold text-sm mb-1">Email Support</p>
              <p className="text-[#8892a4] text-xs">Direct access to the author for questions and guidance</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
