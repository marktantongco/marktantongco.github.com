'use client'

import { motion } from 'framer-motion'
import { MessageSquare, ChevronDown, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

const scripts = [
  {
    id: 'client-hesitates',
    title: 'When a Client Hesitates',
    category: 'Client Conversations',
    parts: [
      {
        label: 'First Response',
        text: `"I appreciate you sharing that. Help me understand—when you say [repeat their concern], what's the biggest worry behind that for you?"`,
      },
      {
        label: 'Follow-Up',
        text: `"Thank you. Based on what you've shared, here's what I recommend we do next..."`,
      },
    ],
  },
  {
    id: 'prospect-ghosts',
    title: 'When a Prospect Ghosts',
    category: 'Client Conversations',
    parts: [
      {
        label: 'The Ghost Script',
        text: `"Hi [Name], I know life gets busy. No pressure at all. If now's not the right time, just reply 'later' and I'll circle back in 90 days.

If there's something I missed, I'd genuinely value your honesty—what held you back?"`,
      },
    ],
    note: 'This script works because it removes pressure (which causes ghosting in the first place) while keeping the door open. The 90-day option gives them an easy out, which paradoxically makes them more likely to re-engage.',
  },
  {
    id: 'team-misses',
    title: 'When Your Team Misses Target',
    category: 'Team Conversations',
    parts: [
      {
        label: 'The Team Script',
        text: `"Let's look at this together. What part of the process felt unclear? What support do you need from me to hit this next week?"`,
      },
    ],
    note: 'Notice what\'s absent: blame, shame, or accusation. Instead, you\'re modeling Pillar 1—fixing the problem, not the blame—while simultaneously coaching your team to do the same.',
  },
]

export function ScriptsPreview() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section className="py-16 sm:py-24 bg-[#0d1b2a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <MessageSquare className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Ownership Scripts
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Word-for-Word <span className="text-gold-gradient">Frameworks</span>
          </h2>
          <p className="text-[#b0b8c8] max-w-2xl mx-auto">
            Use these scripts word-for-word. They&apos;re not manipulations—they&apos;re bridges. 
            Each script is designed to deepen understanding, demonstrate empathy, and keep you in a 
            position of service rather than pressure.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {scripts.map((script, index) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={script.id}
                className="border border-gold/10 rounded-xl bg-[#1b2838] px-6 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-5 group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gold font-semibold tracking-wider uppercase mb-1">
                        {script.category}
                      </p>
                      <p className="text-white font-bold text-base group-hover:text-gold transition-colors">
                        {script.title}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-4">
                    {script.parts.map((part, i) => (
                      <div key={i}>
                        <p className="text-xs text-[#8892a4] font-semibold uppercase tracking-wider mb-2">
                          {part.label}
                        </p>
                        <div className="relative bg-[#0d1b2a] rounded-lg p-4 border border-gold/10 font-mono text-sm text-[#b0b8c8] whitespace-pre-wrap">
                          {part.text}
                          <button
                            onClick={() => handleCopy(part.text, `${script.id}-${i}`)}
                            className="absolute top-2 right-2 p-2 rounded-md hover:bg-gold/10 transition-colors"
                            aria-label="Copy script"
                          >
                            {copiedId === `${script.id}-${i}` ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-[#8892a4]" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                    {script.note && (
                      <p className="text-sm text-[#8892a4] italic pl-4 border-l-2 border-gold/20">
                        {script.note}
                      </p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a href="#pricing">
            <Button className="bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold">
              Get the Full Playbook
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
