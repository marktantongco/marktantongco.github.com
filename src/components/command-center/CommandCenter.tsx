'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  Shield,
  MessageSquare,
  Calendar,
  Users,
  BarChart3,
  Phone,
  UserCheck,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Overview } from './sections/Overview'
import { PillarsDashboard } from './sections/PillarsDashboard'
import { ScriptsDashboard } from './sections/ScriptsDashboard'
import { WeeklyResetDashboard } from './sections/WeeklyResetDashboard'
import { AffiliateDashboard } from './sections/AffiliateDashboard'
import { TrackerDashboard } from './sections/TrackerDashboard'
import { FollowUpDashboard } from './sections/FollowUpDashboard'
import { HuddleDashboard } from './sections/HuddleDashboard'
import { ChecklistDashboard } from './sections/ChecklistDashboard'

const navItems = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'pillars', label: '3 Pillars', icon: Shield },
  { id: 'scripts', label: 'Ownership Scripts', icon: MessageSquare },
  { id: 'weekly-reset', label: 'Weekly Reset', icon: Calendar },
  { id: 'affiliate', label: 'Affiliate Program', icon: Users },
  { id: 'tracker', label: 'Tracker', icon: BarChart3 },
  { id: 'follow-up', label: 'Follow-Up System', icon: Phone },
  { id: 'huddle', label: 'Huddle Agenda', icon: UserCheck },
  { id: 'checklist', label: 'Quick-Start', icon: CheckSquare },
]

interface CommandCenterProps {
  onBack: () => void
}

export function CommandCenter({ onBack }: CommandCenterProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />
      case 'pillars':
        return <PillarsDashboard />
      case 'scripts':
        return <ScriptsDashboard />
      case 'weekly-reset':
        return <WeeklyResetDashboard />
      case 'affiliate':
        return <AffiliateDashboard />
      case 'tracker':
        return <TrackerDashboard />
      case 'follow-up':
        return <FollowUpDashboard />
      case 'huddle':
        return <HuddleDashboard />
      case 'checklist':
        return <ChecklistDashboard />
      default:
        return <Overview />
    }
  }

  return (
    <div className="min-h-screen flex bg-[#0d1b2a]">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 256 : 72 }}
        className="hidden md:flex flex-col bg-[#0a1525] border-r border-gold/10 shrink-0 overflow-hidden"
      >
        {/* Header */}
        <div className="h-16 flex items-center px-4 border-b border-gold/10 gap-2">
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-gold/10 transition-colors shrink-0"
            aria-label="Back to landing"
          >
            <ArrowLeft className="w-5 h-5 text-gold" />
          </button>
          {sidebarOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-sm text-white whitespace-nowrap"
            >
              Command <span className="text-gold">Center</span>
            </motion.span>
          )}
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gold/10 text-gold border border-gold/20'
                    : 'text-[#8892a4] hover:text-white hover:bg-[#1b2838]'
                }`}
              >
                <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-gold' : ''}`} />
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </button>
            )
          })}
        </nav>

        {/* Collapse button */}
        <div className="p-2 border-t border-gold/10">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-gold/10 transition-colors"
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarOpen ? (
              <ChevronLeft className="w-5 h-5 text-[#8892a4]" />
            ) : (
              <ChevronRight className="w-5 h-5 text-[#8892a4]" />
            )}
          </button>
        </div>
      </motion.aside>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-[#0a1525] border-t border-gold/10 z-50">
        <div className="flex overflow-x-auto px-1 py-1 gap-0.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center py-2 px-2 rounded-lg min-w-[56px] transition-all ${
                  isActive ? 'bg-gold/10 text-gold' : 'text-[#8892a4]'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-[9px] mt-1 whitespace-nowrap">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile header */}
        <div className="md:hidden h-14 flex items-center px-4 border-b border-gold/10 bg-[#0a1525]">
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-gold/10 transition-colors mr-2"
            aria-label="Back to landing"
          >
            <ArrowLeft className="w-5 h-5 text-gold" />
          </button>
          <span className="font-bold text-sm text-white">
            Command <span className="text-gold">Center</span>
          </span>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 pb-24 md:pb-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
