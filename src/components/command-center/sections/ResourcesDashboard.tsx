'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, FileText, Presentation, FileSpreadsheet, FileCode, Image, Lock, ArrowRight, X, Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useToast } from '@/hooks/use-toast'
import { validateAccessCode, DOWNLOAD_RESOURCES, GUMROAD_PRODUCT_URL, PRODUCT_PRICE, STORAGE_KEYS, type DownloadResource } from '@/lib/config'
import { logError } from '@/lib/errors'

const resources = [
  {
    name: 'Main Playbook',
    filename: '100-Accountability-Playbook.pdf',
    type: 'PDF' as const,
    description: 'The complete 14-page playbook with all 3 pillars, scripts, and frameworks.',
    icon: FileText,
  },
  {
    name: 'Presentation',
    filename: '100-Accountability-Playbook.pptx',
    type: 'PPTX' as const,
    description: 'Slide deck for team presentations and training sessions.',
    icon: Presentation,
  },
  {
    name: 'Tracker Template',
    filename: 'Accountability-Tracker-Template.xlsx',
    type: 'XLSX' as const,
    description: 'Weekly accountability tracker with follow-up pipeline sheets.',
    icon: FileSpreadsheet,
  },
  {
    name: 'Quick-Start Checklist',
    filename: 'BONUS-Quick-Start-Checklist.pdf',
    type: 'PDF' as const,
    description: 'Your 7-day quick-start checklist to hit the ground running.',
    icon: FileText,
  },
  {
    name: 'Follow-Up System',
    filename: 'Client-FollowUp-System.md',
    type: 'MD' as const,
    description: 'The 3-Touch Rule follow-up system with templates.',
    icon: FileCode,
  },
  {
    name: 'Huddle Agenda',
    filename: 'Team-Huddle-Agenda-Template.md',
    type: 'MD' as const,
    description: '15-minute team huddle agenda template with timebox sections.',
    icon: FileCode,
  },
  {
    name: 'Deployment Guide',
    filename: 'Gumroad-Deployment-Guide.pdf',
    type: 'PDF' as const,
    description: 'Step-by-step Gumroad setup guide with 23 detailed steps.',
    icon: FileText,
  },
  {
    name: 'Cover Image',
    filename: 'cover-image.png',
    type: 'PNG' as const,
    description: 'High-resolution cover image for promotional use.',
    icon: Image,
  },
]

const typeColors: Record<string, string> = {
  PDF: 'bg-red-500/10 text-red-400 border-red-500/30',
  PPTX: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  XLSX: 'bg-green-500/10 text-green-400 border-green-500/30',
  MD: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  PNG: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
}

export function ResourcesDashboard() {
  const [unlocked, setUnlocked] = useLocalStorage('playbook-unlocked', false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState('')

  const { toast } = useToast()

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordInput === '/q123') {
      setUnlocked(true)
      setShowPasswordModal(false)
      toast({
        title: '🔓 Resources Unlocked!',
        description: 'All 8 files are now available for download.',
        duration: 4000,
      })
    } else {
      setError('Incorrect access code. Please try again.')
    }
  }

  const [downloadedFiles, setDownloadedFiles] = useLocalStorage<string[]>('playbook-downloaded', [])

  const handleDownload = (filename: string) => {
    setDownloadedFiles(prev => 
      prev.includes(filename) ? prev : [...prev, filename]
    )
    toast({
      title: 'Download started',
      description: filename,
      duration: 3000,
    })
  }

  if (!unlocked) {
    return (
      <div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
            <span className="text-gold">Resources</span>
          </h1>
          <p className="text-[#8892a4]">
            Download all playbook materials, templates, and guides.
          </p>
        </motion.div>

        <Card className="bg-[#1b2838] border-gold/10">
          <CardContent className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-gold" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Resources Locked</h2>
            <p className="text-[#8892a4] mb-6 max-w-md mx-auto">
              Enter your access code to unlock all downloadable resources including the playbook, templates, and guides.
            </p>
            <Button
              size="lg"
              className="bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold"
              onClick={() => {
                setShowPasswordModal(true)
                setPasswordInput('')
                setError('')
              }}
            >
              <Lock className="w-4 h-4 mr-2" />
              Unlock with Access Code
            </Button>
          </CardContent>
        </Card>

        {/* Password Modal */}
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
                    <h3 className="text-xl font-bold text-white">Unlock Resources</h3>
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
                    <label htmlFor="resources-password" className="text-sm text-[#8892a4] mb-2 block">
                      Enter the access code provided with your purchase
                    </label>
                    <input
                      id="resources-password"
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
                    Unlock Resources
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
      </div>
    )
  }

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
          <span className="text-gold">Resources</span>
        </h1>
        <p className="text-[#8892a4]">
          Download all playbook materials, templates, and guides. {resources.length} files available.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource, index) => {
          const Icon = resource.icon
          return (
            <motion.div
              key={resource.filename}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-[#1b2838] border-gold/10 h-full hover:border-gold/25 transition-colors">
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold text-sm truncate">
                          {resource.name}
                        </h3>
                        <Badge className={`${typeColors[resource.type]} text-[9px] font-bold tracking-wider shrink-0`}>
                          {resource.type}
                        </Badge>
                      </div>
                      <p className="text-[#8892a4] text-xs line-clamp-2">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto pt-3">
                    <a
                      href={`/download/${resource.filename}`}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleDownload(resource.filename)}
                    >
                      <Button
                        size="sm"
                        className={`w-full font-semibold ${
                          downloadedFiles.includes(resource.filename)
                            ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20'
                            : 'bg-gold/10 text-gold hover:bg-gold/20 border border-gold/20'
                        }`}
                      >
                        {downloadedFiles.includes(resource.filename) ? (
                          <>
                            <Check className="w-3.5 h-3.5 mr-2" />
                            Downloaded
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5 mr-2" />
                            Download
                          </>
                        )}
                      </Button>
                    </a>
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
