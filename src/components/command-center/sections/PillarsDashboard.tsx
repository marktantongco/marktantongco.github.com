'use client'

import { motion } from 'framer-motion'
import { Target, MessageSquare, Zap, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLocalStorage } from '@/hooks/use-local-storage'

interface ActionStep {
  id: string
  text: string
  completed: boolean
}

interface PillarData {
  icon: typeof Target
  title: string
  subtitle: string
  description: string
  quote?: string
  actionSteps: ActionStep[]
  expanded: boolean
}

const defaultPillars: PillarData[] = [
  {
    icon: Target,
    title: 'Fix the Problem, Not the Blame',
    subtitle: 'Pillar 1',
    description:
      'The moment you shift from blame to curiosity, you reclaim your power. Blame is comfortable—it absolves you of responsibility. But comfort doesn\'t close deals. Accountability does.',
    quote:
      '"When a client says no, most advisors ask: \'Why did they reject me?\' The accountable advisor asks: \'What did I miss in understanding their need?\'"',
    actionSteps: [
      { id: 'p1-1', text: 'What I controlled in that conversation', completed: false },
      { id: 'p1-2', text: 'One thing I\'d adjust next time', completed: false },
      { id: 'p1-3', text: 'One question I should\'ve asked earlier', completed: false },
    ],
    expanded: false,
  },
  {
    icon: MessageSquare,
    title: 'Words Create Worlds',
    subtitle: 'Pillar 2',
    description:
      'Your language doesn\'t just describe your reality—it creates it. Every time you say "they\'re not ready," you surrender your agency. The shift isn\'t semantic. It\'s strategic.',
    actionSteps: [
      { id: 'p2-1', text: 'Audit your last 10 client notes', completed: false },
      { id: 'p2-2', text: 'Circle any external-blame language', completed: false },
      { id: 'p2-3', text: 'Rewrite one sentence using ownership language', completed: false },
    ],
    expanded: false,
  },
  {
    icon: Zap,
    title: 'Faith + Framework = Freedom',
    subtitle: 'Pillar 3',
    description:
      'Faith gives you courage. Framework gives you clarity. Together, they remove fear-based selling. Faith doesn\'t replace effort—it fuels it.',
    actionSteps: [
      { id: 'p3-1', text: 'Before your next client call, spend 60 seconds in silence', completed: false },
      { id: 'p3-2', text: 'Ask: "How can I serve, not sell?"', completed: false },
      { id: 'p3-3', text: 'Proceed with full confidence in your preparation and faith', completed: false },
    ],
    expanded: false,
  },
]

const STORAGE_KEY = 'playbook-pillars'

export function PillarsDashboard() {
  const [pillars, setPillars] = useLocalStorage<PillarData[]>(STORAGE_KEY, defaultPillars)

  const toggleStep = (pillarIndex: number, stepId: string) => {
    setPillars((prev) =>
      prev.map((p, i) =>
        i === pillarIndex
          ? {
              ...p,
              actionSteps: p.actionSteps.map((s) =>
                s.id === stepId ? { ...s, completed: !s.completed } : s
              ),
            }
          : p
      )
    )
  }

  const toggleExpand = (index: number) => {
    setPillars((prev) =>
      prev.map((p, i) => (i === index ? { ...p, expanded: !p.expanded } : p))
    )
  }

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          The 3 <span className="text-gold">Pillars</span>
        </h1>
        <p className="text-[#8892a4]">
          Master each pillar by completing the action steps. Click to expand and track your progress.
        </p>
      </motion.div>

      <div className="space-y-6">
        {pillars.map((pillar, index) => {
          const completedSteps = pillar.actionSteps.filter((s) => s.completed).length
          const totalSteps = pillar.actionSteps.length
          const progress = (completedSteps / totalSteps) * 100

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#1b2838] border-gold/10 overflow-hidden">
                <CardHeader
                  className="cursor-pointer hover:bg-[#0d1b2a]/50 transition-colors"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <pillar.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gold text-xs font-bold tracking-widest uppercase mb-1">
                        {pillar.subtitle}
                      </p>
                      <CardTitle className="text-white text-lg mb-2">{pillar.title}</CardTitle>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-[#0d1b2a] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gold rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <span className="text-xs text-[#8892a4] shrink-0">
                          {completedSteps}/{totalSteps}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                {pillar.expanded && (
                  <CardContent className="pt-0">
                    <p className="text-[#b0b8c8] text-sm leading-relaxed mb-4">
                      {pillar.description}
                    </p>

                    {pillar.quote && (
                      <div className="border-l-2 border-gold/40 pl-4 py-2 mb-4">
                        <p className="text-[#8892a4] text-sm italic">{pillar.quote}</p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <p className="text-xs text-gold font-bold tracking-wider uppercase mb-3">
                        Action Steps
                      </p>
                      {pillar.actionSteps.map((step) => (
                        <button
                          key={step.id}
                          onClick={() => toggleStep(index, step.id)}
                          className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#0d1b2a] border border-gold/5 hover:border-gold/15 transition-all text-left group"
                        >
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                              step.completed
                                ? 'bg-gold border-gold'
                                : 'border-[#8892a4] group-hover:border-gold'
                            }`}
                          >
                            {step.completed && <Check className="w-3 h-3 text-[#0d1b2a]" />}
                          </div>
                          <span
                            className={`text-sm transition-colors ${
                              step.completed
                                ? 'text-[#8892a4] line-through'
                                : 'text-[#b0b8c8] group-hover:text-white'
                            }`}
                          >
                            {step.text}
                          </span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
