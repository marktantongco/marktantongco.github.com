'use client'

import { motion } from 'framer-motion'
import { FileSpreadsheet, Phone, Users, CheckSquare, Download } from 'lucide-react'
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
    accent: '#4ade80',
  },
  {
    icon: Phone,
    title: 'Client Follow-Up System',
    subtitle: '3-Touch Rule',
    badge: 'Bonus 2',
    description:
      'Never let a warm lead go cold. This template includes a complete follow-up sequence with timing, scripts, and CRM pipeline tags. Copy into Notion or Google Docs and customize for your practice.',
    file: 'Client-FollowUp-System.md',
    accent: '#c9a84c',
  },
  {
    icon: Users,
    title: 'Team Huddle Agenda',
    subtitle: '15-min Template',
    badge: 'Bonus 3',
    description:
      'A 15-minute Monday morning huddle template that keeps your team aligned, accountable, and blame-free. Includes strict timeboxing, ground rules, and leader preparation checklist.',
    file: 'Team-Huddle-Agenda-Template.md',
    accent: '#f97316',
  },
  {
    icon: CheckSquare,
    title: '7-Day Quick-Start Checklist',
    subtitle: 'PDF',
    badge: 'Bonus 4',
    description:
      'A day-by-day launch plan that takes you from reading this playbook to operating at 100% accountability in one week. Print it. Check boxes. Win.',
    file: 'BONUS-Quick-Start-Checklist.pdf',
    accent: '#a78bfa',
  },
]

export function BonusesSection() {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-[#1b2838] relative overflow-hidden">
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/20"
          >
            <Download className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-bold">4 Downloadable Resources Included</span>
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Card className="bg-[#0d1b2a] border-gold/10 hover:border-gold/25 transition-all h-full overflow-hidden group">
                {/* Top accent line */}
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: bonus.accent }}
                />
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.12, type: 'spring', stiffness: 200 }}
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${bonus.accent}15`, border: `1px solid ${bonus.accent}30` }}
                    >
                      <bonus.icon className="w-6 h-6" style={{ color: bonus.accent }} />
                    </motion.div>
                    <Badge className="bg-[#0d1b2a] text-gold border border-gold/30 font-bold text-[10px] tracking-widest">
                      {bonus.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{bonus.title}</CardTitle>
                  <p className="text-sm font-medium" style={{ color: bonus.accent }}>{bonus.subtitle}</p>
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
