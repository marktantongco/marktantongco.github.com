'use client'

import { motion } from 'framer-motion'
import { Shield, MessageSquare, Calendar, CheckSquare, ArrowRight, TrendingUp, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
  { label: '3 Pillars', value: '0/3', sub: 'Mastered', icon: Shield, color: 'text-gold' },
  { label: 'Scripts', value: '0/5', sub: 'Practiced', icon: MessageSquare, color: 'text-green-400' },
  { label: 'Weekly Resets', value: '0', sub: 'Completed', icon: Calendar, color: 'text-orange-400' },
  { label: 'Checklist', value: '0/7', sub: 'Days Done', icon: CheckSquare, color: 'text-purple-400' },
]

const recentActivity = [
  { text: 'Welcome to the Command Center!', time: 'Just now', icon: TrendingUp },
  { text: 'Start by exploring the 3 Pillars', time: 'Next step', icon: ArrowRight },
  { text: 'Practice your first Ownership Script', time: 'Recommended', icon: MessageSquare },
]

interface OverviewProps {
  onNavigate: (tab: string) => void
}

export function Overview({ onNavigate }: OverviewProps) {
  return (
    <div>
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Welcome to the <span className="text-gold">Command Center</span>
        </h1>
        <p className="text-[#8892a4]">
          Your central hub for mastering the 100% Accountability framework. Track your progress,
          practice scripts, and own every outcome.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-[#1b2838] border-gold/10">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-[#8892a4] mt-1">{stat.sub}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions + Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="bg-[#1b2838] border-gold/10">
          <CardHeader>
            <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: 'Review the 3 Pillars', tab: 'pillars', icon: Shield },
              { label: 'Practice a Script', tab: 'scripts', icon: MessageSquare },
              { label: 'Complete Weekly Reset', tab: 'weekly-reset', icon: Calendar },
              { label: 'Start Quick-Start Checklist', tab: 'checklist', icon: CheckSquare },
              { label: 'Download Resources', tab: 'resources', icon: Download },
            ].map((action, i) => (
              <button
                key={i}
                onClick={() => onNavigate(action.tab)}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#0d1b2a] border border-gold/5 hover:border-gold/20 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <action.icon className="w-4 h-4 text-gold" />
                </div>
                <span className="text-[#b0b8c8] text-sm group-hover:text-white transition-colors">
                  {action.label}
                </span>
                <ArrowRight className="w-4 h-4 text-[#8892a4] ml-auto group-hover:text-gold transition-colors" />
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-[#1b2838] border-gold/10">
          <CardHeader>
            <CardTitle className="text-white text-lg">Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0d1b2a] border border-gold/5"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <activity.icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-white text-sm">{activity.text}</p>
                  <p className="text-[#8892a4] text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
