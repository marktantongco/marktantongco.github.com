'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { UserCheck, Play, Pause, RotateCcw, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const timeboxSections = [
  { label: 'Wins & Gratitude', start: 0, end: 120, color: 'text-gold' },
  { label: 'Blockers & Solutions', start: 120, end: 480, color: 'text-green-400' },
  { label: 'Priority Focus', start: 480, end: 720, color: 'text-orange-400' },
  { label: 'Commitment Close', start: 720, end: 900, color: 'text-purple-400' },
]

const rules = [
  'No problem-dumping without a proposed solution',
  'No blaming clients, market, or tools',
  'If it takes >2 mins, park it for 1:1 later',
  'Every complaint must include an ownership reframe',
]

const leaderPrep = [
  'Review each team member\'s tracker from last week',
  'Prepare 1 specific win to highlight per person',
  'Identify the #1 blocker to address',
  'Draft your commitment close statement',
]

const commitmentClose = `"Before we wrap: what's the ONE thing each of us commits to completing by Friday? Write it down. I'll check in on Wednesday."`

export function HuddleDashboard() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [prepChecked, setPrepChecked] = useState<Set<number>>(new Set())
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev >= 900) {
            setRunning(false)
            return 900
          }
          return prev + 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running])

  const togglePrep = (index: number) => {
    setPrepChecked((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
  }

  const getCurrentSection = () => {
    return timeboxSections.find((s) => seconds >= s.start && seconds < s.end) || timeboxSections[3]
  }

  const progress = (seconds / 900) * 100

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Team Huddle <span className="text-gold">Agenda</span>
        </h1>
        <p className="text-[#8892a4]">
          15-minute Monday morning huddle. Run it every week—consistency beats perfection.
        </p>
      </motion.div>

      {/* Timer */}
      <Card className="bg-[#1b2838] border-gold/10 mb-6">
        <CardContent className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <p className="text-sm text-[#8892a4] mb-2">
              Current Section: <span className={`font-bold ${getCurrentSection().color}`}>{getCurrentSection().label}</span>
            </p>
            <p className="text-5xl sm:text-7xl font-black text-white font-mono mb-4">
              {formatTime(seconds)}
            </p>
            <div className="h-2 bg-[#0d1b2a] rounded-full overflow-hidden mb-4 max-w-md mx-auto">
              <motion.div
                className="h-full bg-gold rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-center gap-3">
              <Button
                onClick={() => setRunning(!running)}
                className={`font-bold ${
                  running
                    ? 'bg-[#0d1b2a] text-white border border-gold/20 hover:bg-[#0d1b2a]/80'
                    : 'bg-gold text-[#0d1b2a] hover:bg-gold-dark'
                }`}
              >
                {running ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" /> Start
                  </>
                )}
              </Button>
              <Button
                onClick={() => {
                  setRunning(false)
                  setSeconds(0)
                }}
                variant="outline"
                className="border-gold/20 text-[#8892a4] hover:text-white"
              >
                <RotateCcw className="w-4 h-4 mr-2" /> Reset
              </Button>
            </div>
          </div>

          {/* Timebox sections */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {timeboxSections.map((section, i) => {
              const isActive = seconds >= section.start && seconds < section.end
              const isDone = seconds >= section.end
              return (
                <div
                  key={i}
                  className={`p-3 rounded-lg border transition-all text-center ${
                    isActive
                      ? 'bg-gold/10 border-gold/30'
                      : isDone
                      ? 'bg-[#0d1b2a] border-gold/5 opacity-60'
                      : 'bg-[#0d1b2a] border-gold/5'
                  }`}
                >
                  <p className={`text-xs font-bold ${section.color} mb-1`}>
                    {formatTime(section.start)}–{formatTime(section.end)}
                  </p>
                  <p className="text-white text-xs font-semibold">{section.label}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Rules */}
        <Card className="bg-[#1b2838] border-gold/10">
          <CardHeader>
            <CardTitle className="text-white text-lg">Ground Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#0d1b2a] border border-gold/5">
                <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[#b0b8c8] text-sm">{rule}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Leader Prep */}
        <Card className="bg-[#1b2838] border-gold/10">
          <CardHeader>
            <CardTitle className="text-white text-lg">Leader Preparation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {leaderPrep.map((item, i) => (
              <button
                key={i}
                onClick={() => togglePrep(i)}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#0d1b2a] border border-gold/5 hover:border-gold/15 transition-all text-left"
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                    prepChecked.has(i) ? 'bg-gold border-gold' : 'border-[#8892a4]'
                  }`}
                >
                  {prepChecked.has(i) && <Check className="w-3 h-3 text-[#0d1b2a]" />}
                </div>
                <span
                  className={`text-sm transition-colors ${
                    prepChecked.has(i) ? 'text-[#8892a4] line-through' : 'text-[#b0b8c8]'
                  }`}
                >
                  {item}
                </span>
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Commitment Close */}
      <Card className="bg-[#1b2838] border-gold/10 mt-6">
        <CardHeader>
          <CardTitle className="text-white text-lg">Sample Commitment Close</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-[#0d1b2a] rounded-lg p-4 border border-gold/10 font-mono text-sm text-[#b0b8c8]">
            {commitmentClose}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
