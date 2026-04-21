'use client'

import { motion } from 'framer-motion'
import { Phone, Copy, Check, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const touchScripts = [
  {
    touch: 1,
    timing: 'Within 24h',
    label: 'First Touch',
    script:
      '"Great connecting today, [Name]. As promised, here\'s [resource]. One question I\'m still thinking about from our chat: [personalized question]. No need to reply now—just wanted to share."',
  },
  {
    touch: 2,
    timing: 'Day 4',
    label: 'Second Touch',
    script:
      '"Hi [Name], circling back on [specific topic]. I found this [article/case study] that relates to what you mentioned about [their goal]. Thought you might find it useful."',
  },
  {
    touch: 3,
    timing: 'Day 7',
    label: 'Final Touch',
    script:
      '"Hi [Name], last nudge from me this week. If now\'s not the right time to explore [solution], no worries at all. If you\'re still curious, I have 2 slots open next week for a quick 15-min chat. Either way, wishing you a great week."',
  },
]

const pipelineTags = [
  { color: 'bg-blue-500', label: 'BLUE', status: 'Warm', desc: 'Met, needs nurturing' },
  { color: 'bg-yellow-500', label: 'YELLOW', status: 'Hot', desc: 'Ready to decide, follow up in 48h' },
  { color: 'bg-green-500', label: 'GREEN', status: 'Closed', desc: 'Client onboarded' },
  { color: 'bg-gray-400', label: 'WHITE', status: 'Cold', desc: 'Not now, revisit in 90 days' },
]

const weeklyChecklist = [
  'Review all BLUE contacts — send Touch 1 or 2',
  'Follow up with YELLOW contacts within 48h',
  'Log all new contacts with pipeline tags',
  'Move GREEN contacts to onboarding',
  'Schedule 90-day re-engage for WHITE contacts',
]

export function FollowUpDashboard() {
  const [copiedTouch, setCopiedTouch] = useState<number | null>(null)
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Follow-Up <span className="text-gold">System</span>
        </h1>
        <p className="text-[#8892a4]">
          The 3-Touch Rule: Never let a warm lead go cold. Track your pipeline with color-coded tags.
        </p>
      </motion.div>

      {/* 3-Touch Rule */}
      <div className="grid lg:grid-cols-3 gap-4 mb-8">
        {touchScripts.map((touch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-[#1b2838] border-gold/10 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge className="bg-gold/10 text-gold border border-gold/30 text-[10px]">
                    Touch {touch.touch}
                  </Badge>
                  <span className="text-xs text-[#8892a4]">{touch.timing}</span>
                </div>
                <CardTitle className="text-white text-base">{touch.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-[#0d1b2a] rounded-lg p-3 border border-gold/10 text-xs text-[#b0b8c8] italic">
                  {touch.script}
                  <button
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(touch.script)
                        setCopiedTouch(touch.touch)
                        setTimeout(() => setCopiedTouch(null), 2000)
                      } catch {
                        // Fallback: ignore silently
                      }
                    }}
                    className="absolute top-2 right-2 p-1.5 rounded-md hover:bg-gold/10 transition-colors"
                    aria-label="Copy script"
                  >
                    {copiedTouch === touch.touch ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#8892a4]" />
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pipeline Tags */}
        <Card className="bg-[#1b2838] border-gold/10">
          <CardHeader>
            <CardTitle className="text-white text-lg">Pipeline Tags</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pipelineTags.map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0d1b2a] border border-gold/5"
              >
                <div className={`w-4 h-4 rounded-full ${tag.color} shrink-0`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm">{tag.label}</span>
                    <Badge variant="outline" className="text-[10px] border-[#8892a4] text-[#8892a4]">
                      {tag.status}
                    </Badge>
                  </div>
                  <p className="text-[#8892a4] text-xs mt-0.5">{tag.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Review Checklist */}
        <Card className="bg-[#1b2838] border-gold/10">
          <CardHeader>
            <CardTitle className="text-white text-lg">Weekly Review Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {weeklyChecklist.map((item, i) => (
              <button
                key={i}
                onClick={() => toggleCheck(i)}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#0d1b2a] border border-gold/5 hover:border-gold/15 transition-all text-left"
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                    checkedItems.has(i)
                      ? 'bg-gold border-gold'
                      : 'border-[#8892a4]'
                  }`}
                >
                  {checkedItems.has(i) && <Check className="w-3 h-3 text-[#0d1b2a]" />}
                </div>
                <span
                  className={`text-sm transition-colors ${
                    checkedItems.has(i) ? 'text-[#8892a4] line-through' : 'text-[#b0b8c8]'
                  }`}
                >
                  {item}
                </span>
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
