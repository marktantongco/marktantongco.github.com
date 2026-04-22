'use client'

import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { StatsSection } from './StatsSection'
import { FaithSection } from './FaithSection'
import { PillarsSection } from './PillarsSection'
import { ScriptsPreview } from './ScriptsPreview'
import { WeeklyResetSection } from './WeeklyResetSection'
import { AffiliateSection } from './AffiliateSection'
import { BonusesSection } from './BonusesSection'
import { PricingSection } from './PricingSection'
import { TestimonialsSection } from './TestimonialsSection'
import { FinalCTA } from './FinalCTA'
import { Footer } from './Footer'

interface LandingPageProps {
  onEnterCommandCenter: () => void
}

export function LandingPage({ onEnterCommandCenter }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onEnterCommandCenter={onEnterCommandCenter} />
      <main className="flex-1">
        <Hero onEnterCommandCenter={onEnterCommandCenter} />
        <StatsSection />
        <FaithSection />
        <PillarsSection />
        <ScriptsPreview />
        <WeeklyResetSection />
        <AffiliateSection />
        <BonusesSection />
        <PricingSection onEnterCommandCenter={onEnterCommandCenter} />
        <TestimonialsSection />
        <FinalCTA onEnterCommandCenter={onEnterCommandCenter} />
      </main>
      <Footer />
    </div>
  )
}
