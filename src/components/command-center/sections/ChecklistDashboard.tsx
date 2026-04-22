'use client'

import { motion } from 'framer-motion'
import { CheckSquare, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useLocalStorage } from '@/hooks/use-local-storage'

const checklistDays = [
  {
    day: 1,
    title: 'Read the Playbook',
    description: 'Cover to cover. Don\'t skip. Highlight what resonates.',
    tasks: ['Read the full playbook', 'Highlight 3 key insights', 'Write your #1 takeaway'],
  },
  {
    day: 2,
    title: 'Complete the Self-Assessment',
    description: 'Honest evaluation of where you stand with accountability.',
    tasks: ['Rate yourself on each pillar (1-10)', 'Identify your weakest pillar', 'Write one commitment for improvement'],
  },
  {
    day: 3,
    title: 'Practice the Ownership Scripts',
    description: 'Record yourself. Listen back. Adjust your tone.',
    tasks: ['Record yourself reading each script', 'Listen back and note adjustments', 'Practice the "Client Hesitates" script 3 times'],
  },
  {
    day: 4,
    title: 'Set Up Your Accountability Tracker',
    description: 'Fill in Week 1. Set your Friday 4:30 PM reminder.',
    tasks: ['Open the tracker template', 'Fill in Week 1 goals', 'Set a weekly calendar reminder for Friday 4:30 PM'],
  },
  {
    day: 5,
    title: 'Run Your First Weekly Reset',
    description: 'Complete all 4 steps. Be brutally honest with yourself.',
    tasks: ['Complete the Review step', 'Complete the Reflect step', 'Complete the Recharge and Plan steps'],
  },
  {
    day: 6,
    title: 'Implement the 3-Touch Follow-Up',
    description: 'Tag your pipeline. Send your first Touch 1 messages.',
    tasks: ['Tag all contacts in your pipeline (BLUE/YELLOW/GREEN/WHITE)', 'Send Touch 1 to 3 warm leads', 'Schedule Touch 2 and 3 reminders'],
  },
  {
    day: 7,
    title: 'Lead Your First Team Huddle',
    description: '15 minutes. Use the agenda template. Stay strict on time.',
    tasks: ['Prepare using the leader checklist', 'Run the 15-minute huddle', 'Close with a commitment from each member'],
  },
]

const STORAGE_KEY = 'playbook-checklist'

export function ChecklistDashboard() {
  const [checkedItems, setCheckedItems] = useLocalStorage<string[]>(STORAGE_KEY, [])

  const checkedSet = new Set(checkedItems)

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const set = new Set(prev)
      if (set.has(id)) set.delete(id)
      else set.add(id)
      return [...set]
    })
  }

  const totalTasks = checklistDays.reduce((acc, d) => acc + d.tasks.length, 0)
  const completedTasks = checkedSet.size
  const progressPercent = (completedTasks / totalTasks) * 100
  const completedDays = checklistDays.filter((d) =>
    d.tasks.every((_, i) => checkedSet.has(`day${d.day}-${i}`))
  ).length

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          7-Day <span className="text-gold">Quick-Start</span>
        </h1>
        <p className="text-[#8892a4]">
          Your day-by-day launch plan to operating at 100% accountability.
        </p>
      </motion.div>

      {/* Progress */}
      <Card className="bg-[#1b2838] border-gold/10 mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white font-bold">Overall Progress</p>
              <p className="text-[#8892a4] text-sm">
                {completedTasks}/{totalTasks} tasks completed • {completedDays}/7 days done
              </p>
            </div>
            <div className="text-3xl font-black text-gold">{Math.round(progressPercent)}%</div>
          </div>
          <Progress value={progressPercent} className="h-3" />
        </CardContent>
      </Card>

      {/* Days */}
      <div className="space-y-4">
        {checklistDays.map((day, dayIndex) => {
          const dayComplete = day.tasks.every((_, i) => checkedSet.has(`day${day.day}-${i}`))
          const dayTasksCompleted = day.tasks.filter((_, i) =>
            checkedSet.has(`day${day.day}-${i}`)
          ).length

          return (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.05 }}
            >
              <Card
                className={`bg-[#1b2838] border-gold/10 ${
                  dayComplete ? 'border-green-500/20' : ''
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          dayComplete
                            ? 'bg-green-500/10 border border-green-500/30'
                            : 'bg-gold/10 border border-gold/30'
                        }`}
                      >
                        {dayComplete ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : (
                          <span className="text-gold font-bold text-sm">{day.day}</span>
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-white text-base">
                          Day {day.day}: {day.title}
                        </CardTitle>
                        <p className="text-[#8892a4] text-xs">{day.description}</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#8892a4] shrink-0">
                      {dayTasksCompleted}/{day.tasks.length}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 pl-13">
                    {day.tasks.map((task, i) => {
                      const itemId = `day${day.day}-${i}`
                      const isChecked = checkedSet.has(itemId)
                      return (
                        <button
                          key={i}
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center gap-3 p-2.5 rounded-lg bg-[#0d1b2a] border border-gold/5 hover:border-gold/15 transition-all text-left"
                        >
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                              isChecked ? 'bg-gold border-gold' : 'border-[#8892a4]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 text-[#0d1b2a]" />}
                          </div>
                          <span
                            className={`text-sm transition-colors ${
                              isChecked ? 'text-[#8892a4] line-through' : 'text-[#b0b8c8]'
                            }`}
                          >
                            {task}
                          </span>
                        </button>
                      )
                    })}
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
