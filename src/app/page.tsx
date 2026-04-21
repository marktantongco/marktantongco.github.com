'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LandingPage } from '@/components/landing/LandingPage'
import { CommandCenter } from '@/components/command-center/CommandCenter'

export default function Home() {
  const [view, setView] = useState<'landing' | 'command-center'>('landing')

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LandingPage onEnterCommandCenter={() => setView('command-center')} />
        </motion.div>
      ) : (
        <motion.div
          key="command-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CommandCenter onBack={() => setView('landing')} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
