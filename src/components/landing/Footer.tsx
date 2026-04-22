'use client'

import { Shield, Mail, ExternalLink, Download, FileText, Presentation, Lock, Unlock } from 'lucide-react'
import { useLocalStorage } from '@/hooks/use-local-storage'

export function Footer() {
  const [unlocked] = useLocalStorage('playbook-unlocked', false)

  return (
    <footer className="bg-[#0a1525] border-t border-gold/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Shield className="w-4 h-4 text-gold" />
              </div>
              <span className="font-bold text-white">
                100% <span className="text-gold">Accountability</span>
              </span>
            </div>
            <p className="text-[#8892a4] text-sm">
              Own Outcomes, Not Excuses. The faith-driven framework for purpose-driven professionals.
            </p>
            {/* Unlock status indicator */}
            <div className="mt-3 flex items-center gap-2">
              {unlocked ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400 text-xs font-medium">Resources Unlocked</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-[#8892a4]" />
                  <span className="text-[#8892a4] text-xs">Locked — Enter access code</span>
                </>
              )}
            </div>
          </div>

          {/* Author */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Author</h4>
            <p className="text-[#b0b8c8] text-sm">Mark Anthony Ng Tantongco</p>
            <p className="text-[#8892a4] text-xs">Agency Sales Director | MDRT</p>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Support</h4>
            <a
              href="mailto:mark.tantongco@gmail.com"
              className="flex items-center gap-2 text-[#b0b8c8] text-sm hover:text-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              mark.tantongco@gmail.com
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Community</h4>
            <a
              href="https://marktantongco.typeform.com/to/playbook-takeaway"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#b0b8c8] text-sm hover:text-gold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Share Your Takeaway
            </a>
            <p className="text-[#8892a4] text-xs mt-2">
              Affiliate program: 30% commission per sale
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Resources</h4>
            {unlocked ? (
              <div className="space-y-2">
                <a
                  href="/download/100-Accountability-Playbook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#b0b8c8] text-sm hover:text-gold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-red-400" />
                  Playbook (PDF)
                </a>
                <a
                  href="/download/100-Accountability-Playbook.pptx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#b0b8c8] text-sm hover:text-gold transition-colors"
                >
                  <Presentation className="w-3.5 h-3.5 text-orange-400" />
                  Presentation (PPTX)
                </a>
                <a
                  href="/download/BONUS-Quick-Start-Checklist.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#b0b8c8] text-sm hover:text-gold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Quick-Start Checklist
                </a>
                <a
                  href="/download/Accountability-Tracker-Template.xlsx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#b0b8c8] text-sm hover:text-gold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Tracker Template
                </a>
              </div>
            ) : (
              <p className="text-[#8892a4] text-xs italic">
                Unlock with access code to see downloads
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-gold/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#8892a4] text-xs">
            &copy; {new Date().getFullYear()} 100% Accountability Sales Playbook. All rights reserved.
          </p>
          <p className="text-[#8892a4] text-xs">
            Built with faith. Driven by purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
