'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  onEnterCommandCenter: () => void
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Bonuses', href: '#bonuses' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar({ onEnterCommandCenter }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1b2a]/95 backdrop-blur-md border-b border-gold/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            </div>
            <span className="font-bold text-sm sm:text-lg text-white">
              100% <span className="text-gold">Accountability</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#b0b8c8] hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={onEnterCommandCenter}
              variant="outline"
              className="border-gold/30 text-gold hover:bg-gold/10 hover:text-gold"
            >
              Command Center
            </Button>
            <a href="#pricing">
              <Button className="bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold">
                Get the Playbook
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[#b0b8c8] hover:text-gold transition-colors py-2 font-medium"
                >
                  {link.label}
                </a>
              ))}
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
              <a href="#pricing" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-gold text-[#0d1b2a] hover:bg-gold-dark font-bold">
                  Get the Playbook
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
