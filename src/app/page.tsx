'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Lock, X, Unlock, Download, FileText, Presentation, ExternalLink } from 'lucide-react'
import { LandingPage } from '@/components/landing/LandingPage'
import { CommandCenter } from '@/components/command-center/CommandCenter'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useToast } from '@/hooks/use-toast'
import { validateAccessCode, GUMROAD_PRODUCT_URL, STORAGE_KEYS } from '@/lib/config'
import { logError } from '@/lib/errors'

export default function Home() {
  const [view, setView] = useState<'landing' | 'command-center'>('landing')
  const [unlocked, setUnlocked] = useLocalStorage(STORAGE_KEYS.UNLOCKED, false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState('')
  const [showUnlockBadge, setShowUnlockBadge] = useState(false)
  const { toast } = useToast()

  // Show unlock badge briefly when unlocked
  useEffect(() => {
    if (unlocked) {
      setShowUnlockBadge(true)
      const timer = setTimeout(() => setShowUnlockBadge(false), 4000)
      return () => clearTimeout(timer)
    }
  }, [unlocked])

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
    try {
      const result = validateAccessCode(passwordInput)
      if (result.valid) {
        setUnlocked(true)
        setShowPasswordModal(false)
        setView('command-center')
        toast({
          title: '🔓 Playbook Unlocked!',
          description: 'Welcome to the Command Center. All resources are now available.',
          duration: 5000,
        })
      } else {
        setError(result.error || 'Invalid access code.')
      }
    } catch (err) {
      logError(err, 'PasswordSubmit')
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <ErrorBoundary>
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

      {/* Floating Unlock Badge */}
      <AnimatePresence>
        {showUnlockBadge && view === 'landing' && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-[90] bg-green-500/10 border border-green-500/30 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-3 shadow-2xl"
          >
            <Unlock className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold text-sm">Playbook Unlocked</span>
            <div className="w-px h-4 bg-green-500/30" />
            <a
              href="/download/100-Accountability-Playbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b0b8c8] hover:text-gold text-xs flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              PDF
            </a>
            <a
              href="/download/100-Accountability-Playbook.pptx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b0b8c8] hover:text-gold text-xs flex items-center gap-1 transition-colors"
            >
              <Presentation className="w-3.5 h-3.5" />
              PPT
            </a>
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

              {/* What you get preview */}
              <div className="bg-[#0d1b2a] rounded-lg p-4 border border-gold/10 mb-6">
                <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-3">After unlocking, you get access to:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[#b0b8c8] text-xs">Full Playbook (PDF) + Presentation (PPTX)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[#b0b8c8] text-xs">8 downloadable resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Unlock className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[#b0b8c8] text-xs">Interactive Command Center dashboard</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label htmlFor="global-password-input" className="text-sm text-[#8892a4] mb-2 block">
                    Enter the access code from your purchase confirmation
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
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm bg-red-400/10 rounded-lg px-3 py-2"
                  >
                    {error}
                  </motion.p>
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

              {/* Don't have a code? Buy link — CRITICAL: This fixes the $0 revenue problem */}
              <div className="mt-4 pt-4 border-t border-gold/10 text-center">
                <p className="text-[#8892a4] text-xs mb-2">Don&apos;t have an access code?</p>
                <a
                  href={GUMROAD_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:text-gold-dark transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Purchase the Playbook — $27
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  )
}
