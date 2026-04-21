'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Copy, Check, BookOpen, Users, Cross } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'

interface Script {
  id: string
  title: string
  category: 'Client Conversations' | 'Team Conversations' | 'Faith-Driven'
  parts: { label: string; text: string }[]
  note?: string
  practiced: boolean
}

const defaultScripts: Script[] = [
  {
    id: 's1',
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
    practiced: false,
  },
  {
    id: 's2',
    title: 'When a Prospect Ghosts',
    category: 'Client Conversations',
    parts: [
      {
        label: 'The Ghost Script',
        text: `"Hi [Name], I know life gets busy. No pressure at all. If now's not the right time, just reply 'later' and I'll circle back in 90 days.\n\nIf there's something I missed, I'd genuinely value your honesty—what held you back?"`,
      },
    ],
    note: 'This script removes pressure while keeping the door open. The 90-day option gives them an easy out, which paradoxically makes them more likely to re-engage.',
    practiced: false,
  },
  {
    id: 's3',
    title: 'When Your Team Misses Target',
    category: 'Team Conversations',
    parts: [
      {
        label: 'The Team Script',
        text: `"Let's look at this together. What part of the process felt unclear? What support do you need from me to hit this next week?"`,
      },
    ],
    note: 'Notice what\'s absent: blame, shame, or accusation. You\'re modeling Pillar 1—fixing the problem, not the blame.',
    practiced: false,
  },
  {
    id: 's4',
    title: 'When You Need to Deliver Tough News',
    category: 'Faith-Driven',
    parts: [
      {
        label: 'Honesty Script',
        text: `"I want to be honest with you because I respect you too much to sugarcoat this. Based on where you are today, [product A] isn't the best fit. Here's what I'd actually recommend instead..."`,
      },
    ],
    note: 'When you\'re willing to recommend against your own product, you prove you\'re a trusted advisor—not just a salesperson.',
    practiced: false,
  },
  {
    id: 's5',
    title: 'When a Client Asks for a Discount',
    category: 'Client Conversations',
    parts: [
      {
        label: 'Value Script',
        text: `"I appreciate you asking directly. The price reflects the value of the solution. What I can do is adjust the scope to match your budget—which part matters most to you right now?"`,
      },
    ],
    note: 'This maintains your value positioning while staying flexible on scope. You never discount your worth—you adjust the offering.',
    practiced: false,
  },
]

const STORAGE_KEY = 'playbook-scripts'

const categoryIcons = {
  'Client Conversations': MessageSquare,
  'Team Conversations': Users,
  'Faith-Driven': Cross,
}

const categoryColors = {
  'Client Conversations': 'bg-gold/10 text-gold border-gold/30',
  'Team Conversations': 'bg-green-500/10 text-green-400 border-green-500/30',
  'Faith-Driven': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
}

export function ScriptsDashboard() {
  const [scripts, setScripts] = useLocalStorage<Script[]>(STORAGE_KEY, defaultScripts)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const togglePracticed = (id: string) => {
    setScripts((prev) =>
      prev.map((s) => (s.id === id ? { ...s, practiced: !s.practiced } : s))
    )
  }

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const filteredScripts =
    filter === 'all' ? scripts : scripts.filter((s) => s.category === filter)

  const practicedCount = scripts.filter((s) => s.practiced).length

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Ownership <span className="text-gold">Scripts</span>
        </h1>
        <p className="text-[#8892a4]">
          Practice each script until it becomes natural. {practicedCount}/{scripts.length} practiced.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['all', 'Client Conversations', 'Team Conversations', 'Faith-Driven'].map((cat) => (
          <Button
            key={cat}
            variant="outline"
            size="sm"
            onClick={() => setFilter(cat)}
            className={`border-gold/20 text-sm ${
              filter === cat
                ? 'bg-gold/10 text-gold border-gold/40'
                : 'text-[#8892a4] hover:text-white'
            }`}
          >
            {cat === 'all' ? 'All' : cat}
          </Button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {filteredScripts.map((script, index) => {
          const CatIcon = categoryIcons[script.category]
          return (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`bg-[#1b2838] border-gold/10 h-full ${
                  script.practiced ? 'border-green-500/20' : ''
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      className={`${categoryColors[script.category]} text-[10px] font-bold tracking-wider`}
                    >
                      <CatIcon className="w-3 h-3 mr-1" />
                      {script.category}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePracticed(script.id)}
                      className={`text-xs ${
                        script.practiced ? 'text-green-400' : 'text-[#8892a4]'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5 mr-1" />
                      {script.practiced ? 'Practiced' : 'Mark Practiced'}
                    </Button>
                  </div>
                  <CardTitle className="text-white text-base">{script.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {script.parts.map((part, i) => (
                      <div key={i}>
                        <p className="text-xs text-[#8892a4] font-semibold uppercase tracking-wider mb-1">
                          {part.label}
                        </p>
                        <div className="relative bg-[#0d1b2a] rounded-lg p-3 border border-gold/10 font-mono text-xs text-[#b0b8c8] whitespace-pre-wrap">
                          {part.text}
                          <button
                            onClick={() => handleCopy(part.text, `${script.id}-${i}`)}
                            className="absolute top-2 right-2 p-1.5 rounded-md hover:bg-gold/10 transition-colors"
                            aria-label="Copy script"
                          >
                            {copiedId === `${script.id}-${i}` ? (
                              <Check className="w-3.5 h-3.5 text-green-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-[#8892a4]" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                    {script.note && (
                      <p className="text-xs text-[#8892a4] italic pl-3 border-l border-gold/15">
                        {script.note}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
