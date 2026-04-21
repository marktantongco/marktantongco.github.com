'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Lock, X } from 'lucide-react'
import { LandingPage } from '@/components/landing/LandingPage'
import { CommandCenter } from '@/components/command-center/CommandCenter'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'

export default function Home() {
  const [view, setView] = useState<'landing' | 'command-center'>('landing')
  const [unlocked, setUnlocked] = useLocalStorage('playbook-unlocked', false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState('')

  const handleEnterCommandCenter = () => {
    if (unlocked) {
      setView('command-center')
    } else {
      setShowPasswordModal(true)
      setPasswordInput('')
      setError('')
    }
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordInput === '/q123') {
      setUnlocked(true)
      setShowPasswordModal(false)
      setView('command-center')
    } else {
      setError('Incorrect access code. Please try again.')
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LandingPage onEnterCommandCenter={handleEnterCommandCenter} />
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

      {/* Global Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setShowPasswordModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#1b2838] border border-gold/30 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Access Your Playbook</h3>
                </div>
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="p-2 rounded-lg hover:bg-gold/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-[#8892a4]" />
                </button>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label htmlFor="global-password-input" className="text-sm text-[#8892a4] mb-2 block">
                    Enter the access code provided with your purchase
                  </label>
                  <input
                    id="global-password-input"
                    type="password"
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value)
                      setError('')
                    }}
                    placeholder="Enter access code..."
                    className="w-full bg-[#0d1b2a] border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-[#8892a4] focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                    autoFocus
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold h-12"
                >
                  Unlock Playbook
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>

              <p className="text-center text-xs text-[#8892a4] mt-4">
                Enter the access code provided with your purchase
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
