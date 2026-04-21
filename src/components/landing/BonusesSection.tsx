'use client'

import { motion } from 'framer-motion'
import { FileSpreadsheet, Phone, Users, CheckSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const bonuses = [
  {
    icon: FileSpreadsheet,
    title: 'Accountability Tracker',
    subtitle: 'Excel / Google Sheets',
    badge: 'Bonus 1',
    description:
      'A weekly tracking template that records your goals, actions, results, ownership reflections, and adjustments. Fill one row per week. After 4-6 weeks, patterns emerge that reveal your blind spots and your strengths.',
    file: 'Accountability-Tracker-Template.xlsx',
  },
  {
    icon: Phone,
    title: 'Client Follow-Up System',
    subtitle: '3-Touch Rule',
    badge: 'Bonus 2',
    description:
      'Never let a warm lead go cold. This template includes a complete follow-up sequence with timing, scripts, and CRM pipeline tags. Copy into Notion or Google Docs and customize for your practice.',
    file: 'Client-FollowUp-System.md',
  },
  {
    icon: Users,
    title: 'Team Huddle Agenda',
    subtitle: '15-min Template',
    badge: 'Bonus 3',
    description:
      'A 15-minute Monday morning huddle template that keeps your team aligned, accountable, and blame-free. Includes strict timeboxing, ground rules, and leader preparation checklist.',
    file: 'Team-Huddle-Agenda-Template.md',
  },
  {
    icon: CheckSquare,
    title: '7-Day Quick-Start Checklist',
    subtitle: 'PDF',
    badge: 'Bonus 4',
    description:
      'A day-by-day launch plan that takes you from reading this playbook to operating at 100% accountability in one week. Print it. Check boxes. Win.',
    file: 'BONUS-Quick-Start-Checklist.pdf',
  },
]

export function BonusesSection() {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-[#1b2838]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Exclusive Resources
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Your <span className="text-gold-gradient">Bonuses</span>
          </h2>
          <p className="text-[#b0b8c8] max-w-2xl mx-auto">
            Every bonus is designed for immediate implementation. No theory—just tools you can use today.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#0d1b2a] border-gold/10 hover:border-gold/25 transition-all h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <bonus.icon className="w-6 h-6 text-gold" />
                    </div>
                    <Badge className="bg-[#0d1b2a] text-gold border border-gold/30 font-bold text-[10px] tracking-widest">
                      {bonus.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{bonus.title}</CardTitle>
                  <p className="text-gold text-sm font-medium">{bonus.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#b0b8c8] text-sm leading-relaxed mb-3">
                    {bonus.description}
                  </p>
                  <p className="text-xs text-[#8892a4]">
                    <span className="font-semibold">File:</span> {bonus.file}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
