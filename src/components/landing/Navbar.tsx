'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Shield, Unlock, Lock, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { GUMROAD_PRODUCT_URL, PRODUCT_PRICE, STORAGE_KEYS } from '@/lib/config'

interface NavbarProps {
  onEnterCommandCenter: () => void
}

const navLinks = [
  { label: '3 Pillars', href: '#pillars' },
  { label: 'Scripts', href: '#scripts' },
  { label: 'Bonuses', href: '#bonuses' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar({ onEnterCommandCenter }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [unlocked] = useLocalStorage(STORAGE_KEYS.UNLOCKED, false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Scroll spy
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d1b2a]/95 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="h-[2px] bg-gold origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 sm:gap-3 group">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors"
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              </motion.div>
              <span className="font-bold text-sm sm:text-lg text-white">
                100% <span className="text-gold">Accountability</span>
              </span>
              {/* Unlock indicator */}
              {unlocked && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20"
                >
                  <Unlock className="w-3 h-3 text-green-400" />
                  <span className="text-green-400 text-[10px] font-bold">UNLOCKED</span>
                </motion.div>
              )}
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative ${
                      isActive ? 'text-gold' : 'text-[#b0b8c8] hover:text-gold'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                      />
                    )}
                  </a>
                )
              })}
              <Button
                onClick={onEnterCommandCenter}
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold/10 hover:text-gold"
              >
                Command Center
              </Button>
              <a href={GUMROAD_PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold shadow-md shadow-gold/10 hover:shadow-gold/20 transition-shadow">
                  Buy — {PRODUCT_PRICE}
                  <ExternalLink className="ml-1 w-3.5 h-3.5" />
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#b0b8c8] hover:text-gold transition-colors p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0d1b2a]/98 backdrop-blur-md border-b border-gold/10"
            >
              <div className="px-4 py-4 space-y-3">
                {/* Mobile unlock indicator */}
                {unlocked && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 mb-2">
                    <Unlock className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-xs font-bold">Playbook Unlocked</span>
                  </div>
                )}
                {navLinks.map((link) => {
                  const sectionId = link.href.replace('#', '')
                  const isActive = activeSection === sectionId
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2 font-medium transition-colors ${
                        isActive ? 'text-gold' : 'text-[#b0b8c8] hover:text-gold'
                      }`}
                    >
                      {link.label}
                    </a>
                  )
                })}
                <Button
                  onClick={() => {
                    setMobileOpen(false)
                    onEnterCommandCenter()
                  }}
                  variant="outline"
                  className="w-full border-gold/30 text-gold hover:bg-gold/10"
                >
                  Command Center
                </Button>
                <a href={GUMROAD_PRODUCT_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold">
                    Buy — {PRODUCT_PRICE}
                    <ExternalLink className="ml-1 w-3.5 h-3.5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
