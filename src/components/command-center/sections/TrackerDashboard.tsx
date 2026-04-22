'use client'

import { motion } from 'framer-motion'
import { BarChart3, Plus, Trash2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLocalStorage } from '@/hooks/use-local-storage'

interface TrackerRow {
  id: string
  week: string
  goal: string
  action: string
  result: string
  reflection: string
  adjustment: string
}

const STORAGE_KEY = 'playbook-tracker'

export function TrackerDashboard() {
  const [rows, setRows] = useLocalStorage<TrackerRow[]>(STORAGE_KEY, [
    {
      id: '1',
      week: 'Week 1',
      goal: '',
      action: '',
      result: '',
      reflection: '',
      adjustment: '',
    },
  ])

  const addRow = () => {
    const newRow: TrackerRow = {
      id: Date.now().toString(),
      week: `Week ${rows.length + 1}`,
      goal: '',
      action: '',
      result: '',
      reflection: '',
      adjustment: '',
    }
    setRows((prev) => [...prev, newRow])
  }

  const deleteRow = (id: string) => {
    if (rows.length <= 1) return
    setRows((prev) => prev.filter((r) => r.id !== id))
  }

  const updateRow = (id: string, field: keyof TrackerRow, value: string) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    )
  }

  const filledGoals = rows.filter((r) => r.goal).length
  const progress = (filledGoals / rows.length) * 100

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Accountability <span className="text-gold">Tracker</span>
        </h1>
        <p className="text-[#8892a4]">
          Track your goals, actions, and reflections weekly. Patterns emerge after 4-6 weeks.
        </p>
      </motion.div>

      {/* Progress */}
      <Card className="bg-[#1b2838] border-gold/10 mb-6">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#8892a4]">Tracking Progress</span>
            <span className="text-sm text-gold font-bold">{filledGoals}/{rows.length} weeks filled</span>
          </div>
          <div className="h-2 bg-[#0d1b2a] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Tracker Table */}
      <Card className="bg-[#1b2838] border-gold/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-gold" />
              <CardTitle className="text-white">Weekly Tracker</CardTitle>
            </div>
            <Button
              onClick={addRow}
              size="sm"
              className="bg-gold/10 text-gold hover:bg-gold/20 border border-gold/20"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Week
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gold/10">
                  {['Week', 'Goal', 'Action Taken', 'Result', 'Ownership Reflection', 'Adjustment', ''].map(
                    (h) => (
                      <th key={h} className="text-left p-2 text-gold text-xs font-bold tracking-wider uppercase">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-gold/5">
                    <td className="p-2">
                      <Input
                        value={row.week}
                        onChange={(e) => updateRow(row.id, 'week', e.target.value)}
                        className="bg-[#0d1b2a] border-gold/10 text-white text-xs h-8 w-24"
                      />
                    </td>
                    <td className="p-2">
                      <Input
                        value={row.goal}
                        onChange={(e) => updateRow(row.id, 'goal', e.target.value)}
                        placeholder="Goal..."
                        className="bg-[#0d1b2a] border-gold/10 text-[#b0b8c8] text-xs h-8 placeholder:text-[#4a5568]"
                      />
                    </td>
                    <td className="p-2">
                      <Input
                        value={row.action}
                        onChange={(e) => updateRow(row.id, 'action', e.target.value)}
                        placeholder="Action..."
                        className="bg-[#0d1b2a] border-gold/10 text-[#b0b8c8] text-xs h-8 placeholder:text-[#4a5568]"
                      />
                    </td>
                    <td className="p-2">
                      <Input
                        value={row.result}
                        onChange={(e) => updateRow(row.id, 'result', e.target.value)}
                        placeholder="Result..."
                        className="bg-[#0d1b2a] border-gold/10 text-[#b0b8c8] text-xs h-8 placeholder:text-[#4a5568]"
                      />
                    </td>
                    <td className="p-2">
                      <Input
                        value={row.reflection}
                        onChange={(e) => updateRow(row.id, 'reflection', e.target.value)}
                        placeholder="Reflection..."
                        className="bg-[#0d1b2a] border-gold/10 text-[#b0b8c8] text-xs h-8 placeholder:text-[#4a5568]"
                      />
                    </td>
                    <td className="p-2">
                      <Input
                        value={row.adjustment}
                        onChange={(e) => updateRow(row.id, 'adjustment', e.target.value)}
                        placeholder="Adjustment..."
                        className="bg-[#0d1b2a] border-gold/10 text-[#b0b8c8] text-xs h-8 placeholder:text-[#4a5568]"
                      />
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => deleteRow(row.id)}
                        className="p-1.5 rounded hover:bg-red-500/10 transition-colors"
                        aria-label="Delete row"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-[#8892a4] hover:text-red-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            {rows.map((row) => (
              <div key={row.id} className="bg-[#0d1b2a] rounded-lg p-4 border border-gold/5">
                <div className="flex items-center justify-between mb-3">
                  <Input
                    value={row.week}
                    onChange={(e) => updateRow(row.id, 'week', e.target.value)}
                    className="bg-[#1b2838] border-gold/10 text-white text-sm h-8 w-28"
                  />
                  <button
                    onClick={() => deleteRow(row.id)}
                    className="p-1.5 rounded hover:bg-red-500/10 transition-colors"
                    aria-label="Delete row"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-[#8892a4]" />
                  </button>
                </div>
                <div className="space-y-2">
                  {[
                    { key: 'goal' as const, label: 'Goal' },
                    { key: 'action' as const, label: 'Action Taken' },
                    { key: 'result' as const, label: 'Result' },
                    { key: 'reflection' as const, label: 'Reflection' },
                    { key: 'adjustment' as const, label: 'Adjustment' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="text-[#8892a4] text-xs font-semibold">{field.label}</label>
                      <Input
                        value={row[field.key]}
                        onChange={(e) => updateRow(row.id, field.key, e.target.value)}
                        placeholder={`${field.label}...`}
                        className="bg-[#1b2838] border-gold/10 text-[#b0b8c8] text-xs h-8 mt-1 placeholder:text-[#4a5568]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
