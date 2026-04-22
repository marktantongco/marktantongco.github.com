'use client'

import { motion } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is the 100% Accountability Sales Playbook?',
    answer:
      'A faith-driven framework for Filipino advisors featuring 3 pillars of accountability, word-for-word ownership scripts, a weekly reset routine, and 4 bonus resources including a tracker template and follow-up system. It\'s designed for professionals who want to own outcomes instead of excuses, and sell with integrity rather than pressure.',
  },
  {
    question: 'How much does the playbook cost?',
    answer:
      'The complete playbook package is $27 as a one-time payment with lifetime access. No subscriptions, no hidden fees, no upsells. You get the full playbook PDF, presentation deck, and all 4 bonus resources immediately. There\'s also a 30-day money-back guarantee if it doesn\'t meet your expectations.',
  },
  {
    question: 'What\'s included in the playbook?',
    answer:
      'You receive the complete 14-page playbook covering all 3 Pillars of 100% Accountability, the Ownership Script (word-for-word), the Weekly Reset Routine, and the Affiliate Advantage Guide. Plus 4 bonus resources: an Accountability Tracker Template (Excel/Google Sheets), a Client Follow-Up System (3-Touch Rule), a Team Huddle Agenda (15-minute template), and a 7-Day Quick-Start Checklist (PDF). You also get the interactive Command Center dashboard.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      'Yes, absolutely. There\'s a 30-day money-back guarantee. If the playbook doesn\'t deliver value within your first month, email mark.tantongco@gmail.com for a full refund. No questions asked. We stand behind this framework because we\'ve seen the results it produces.',
  },
  {
    question: 'Who is this playbook for?',
    answer:
      'This playbook is built for faith-driven Filipino advisors, financial planners, insurance professionals, agency unit managers, and team leaders who want to own outcomes instead of excuses. If you\'ve ever caught yourself blaming the market, your team, or your clients—and you want a proven framework to shift from blame to ownership—this is for you.',
  },
  {
    question: 'How is this different from other sales training?',
    answer:
      'Most sales training focuses on tactics: closing techniques, objection handling, pipeline management. This playbook focuses on the foundation beneath all tactics: accountability. When you own your outcomes, every tactic works better. Plus, it\'s the only framework that combines faith (Philippians 4:13) with a repeatable sales system. Faith gives you courage. Framework gives you clarity. Together, they eliminate fear-based selling.',
  },
  {
    question: 'How does the affiliate program work?',
    answer:
      'When you purchase the playbook, you automatically qualify for the affiliate program at 30% commission ($8.10 per sale). Share your unique affiliate link with peers. No ad spend required—just genuine recommendations. The playbook includes a complete outreach script and a 3-step guide to recruit affiliates, creating a passive income stream from your network.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0d1b2a] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Common Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-[#b0b8c8] max-w-xl mx-auto">
            Everything you need to know before you invest in the framework that transforms how you sell, lead, and live.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <AccordionItem
                value={`faq-${index}`}
                className="border border-gold/10 rounded-xl bg-[#1b2838] px-6 overflow-hidden data-[state=open]:border-gold/25 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left group">
                  <span className="text-white font-semibold text-sm sm:text-base pr-4 group-hover:text-gold transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-[#b0b8c8] text-sm leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
