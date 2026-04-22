'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Save, Trash2, Eye, Heart, Battery, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useLocalStorage } from '@/hooks/use-local-storage'

interface WeeklyReset {
  id: string
  date: string
  review: string
  reflect: string
  recharge: string
  priorities: string[]
}

const STORAGE_KEY = 'playbook-weekly-resets'

const steps = [
  { key: 'review', title: 'Review', icon: Eye, color: 'text-gold', prompt: 'What 3 conversations went well this week? Why? Be specific.' },
  { key: 'reflect', title: 'Reflect', icon: Heart, color: 'text-green-400', prompt: 'Where did I default to blame? What\'s the ownership rewrite?' },
  { key: 'recharge', title: 'Recharge', icon: Battery, color: 'text-orange-400', prompt: 'One thing I\'m grateful for in my work this week.' },
  { key: 'plan', title: 'Plan', icon: Target, color: 'text-purple-400', prompt: 'Top 3 priorities for next week.' },
] as const

export function WeeklyResetDashboard() {
  const [resets, setResets] = useLocalStorage<WeeklyReset[]>(STORAGE_KEY, [])
  const [form, setForm] = useState({
    review: '',
    reflect: '',
    recharge: '',
    priorities: ['', '', ''],
  })

  const handleSubmit = () => {
    if (!form.review && !form.reflect && !form.recharge && !form.priorities.some((p) => p)) return

    const newReset: WeeklyReset = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      ...form,
    }

    setResets((prev) => [newReset, ...prev])
    setForm({ review: '', reflect: '', recharge: '', priorities: ['', '', ''] })
  }

  const handleDelete = (id: string) => {
    setResets((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Weekly <span className="text-gold">Reset</span>
        </h1>
        <p className="text-[#8892a4]">
          15 minutes every Friday at 4:30 PM. Complete all 4 steps and save your reflection.
        </p>
      </motion.div>

      {/* Reset Form */}
      <Card className="bg-[#1b2838] border-gold/10 mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gold" />
            <CardTitle className="text-white">This Week&apos;s Reset</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Review */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-gold" />
              <h3 className="text-gold font-bold text-sm tracking-wider uppercase">Step 1: Review</h3>
            </div>
            <p className="text-[#8892a4] text-xs mb-2">{steps[0].prompt}</p>
            <Textarea
              value={form.review}
              onChange={(e) => setForm((prev) => ({ ...prev, review: e.target.value }))}
              placeholder="Name the client, the moment, the turning point..."
              className="bg-[#0d1b2a] border-gold/15 text-[#b0b8c8] placeholder:text-[#4a5568] min-h-[80px] focus:border-gold/40"
            />
          </div>

          {/* Step 2: Reflect */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-green-400" />
              <h3 className="text-green-400 font-bold text-sm tracking-wider uppercase">Step 2: Reflect</h3>
            </div>
            <p className="text-[#8892a4] text-xs mb-2">{steps[1].prompt}</p>
            <Textarea
              value={form.reflect}
              onChange={(e) => setForm((prev) => ({ ...prev, reflect: e.target.value }))}
              placeholder="Where did you default to blame? What's the ownership rewrite?"
              className="bg-[#0d1b2a] border-gold/15 text-[#b0b8c8] placeholder:text-[#4a5568] min-h-[80px] focus:border-gold/40"
            />
          </div>

          {/* Step 3: Recharge */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Battery className="w-4 h-4 text-orange-400" />
              <h3 className="text-orange-400 font-bold text-sm tracking-wider uppercase">Step 3: Recharge</h3>
            </div>
            <p className="text-[#8892a4] text-xs mb-2">{steps[2].prompt}</p>
            <Textarea
              value={form.recharge}
              onChange={(e) => setForm((prev) => ({ ...prev, recharge: e.target.value }))}
              placeholder="What are you grateful for?"
              className="bg-[#0d1b2a] border-gold/15 text-[#b0b8c8] placeholder:text-[#4a5568] min-h-[60px] focus:border-gold/40"
            />
          </div>

          {/* Step 4: Plan */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-purple-400" />
              <h3 className="text-purple-400 font-bold text-sm tracking-wider uppercase">Step 4: Plan</h3>
            </div>
            <p className="text-[#8892a4] text-xs mb-2">{steps[3].prompt}</p>
            <div className="space-y-2">
              {form.priorities.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs text-[#8892a4] font-bold w-6">{i + 1}.</span>
                  <Input
                    value={p}
                    onChange={(e) => {
                      const newPriorities = [...form.priorities]
                      newPriorities[i] = e.target.value
                      setForm((prev) => ({ ...prev, priorities: newPriorities }))
                    }}
                    placeholder={`Priority ${i + 1}`}
                    className="bg-[#0d1b2a] border-gold/15 text-[#b0b8c8] placeholder:text-[#4a5568] focus:border-gold/40"
                  />
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Weekly Reset
          </Button>
        </CardContent>
      </Card>

      {/* History */}
      {resets.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Reset History</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {resets.map((reset) => (
              <Card key={reset.id} className="bg-[#1b2838] border-gold/10">
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gold font-semibold text-sm">{reset.date}</p>
                    <button
                      onClick={() => handleDelete(reset.id)}
                      className="p-1.5 rounded hover:bg-red-500/10 transition-colors"
                      aria-label="Delete reset"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-[#8892a4] hover:text-red-400" />
                    </button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    {reset.review && (
                      <div>
                        <p className="text-gold text-xs font-bold mb-1">Review</p>
                        <p className="text-[#b0b8c8] text-xs">{reset.review}</p>
                      </div>
                    )}
                    {reset.reflect && (
                      <div>
                        <p className="text-green-400 text-xs font-bold mb-1">Reflect</p>
                        <p className="text-[#b0b8c8] text-xs">{reset.reflect}</p>
                      </div>
                    )}
                    {reset.recharge && (
                      <div>
                        <p className="text-orange-400 text-xs font-bold mb-1">Recharge</p>
                        <p className="text-[#b0b8c8] text-xs">{reset.recharge}</p>
                      </div>
                    )}
                    {reset.priorities.some((p) => p) && (
                      <div>
                        <p className="text-purple-400 text-xs font-bold mb-1">Priorities</p>
                        <ul className="space-y-1">
                          {reset.priorities
                            .filter((p) => p)
                            .map((p, i) => (
                              <li key={i} className="text-[#b0b8c8] text-xs">
                                {i + 1}. {p}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
