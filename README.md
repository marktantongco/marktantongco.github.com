# The 100% Accountability Sales Playbook

> **Own Outcomes, Not Excuses** — The faith-driven framework for Filipino advisors who own results, lead stronger teams, and sell with integrity.

[![Deploy to GitHub Pages](https://github.com/marktantongco/marktantongco.github.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/marktantongco/marktantongco.github.com/actions/workflows/deploy.yml)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/marktantongco/marktantongco.github.com)

---

## Live Demos

| Platform | URL |
|----------|-----|
| **GitHub Pages** | [marktantongco.github.com](https://marktantongco.github.com) |
| **Vercel** | Deployed via Vercel CLI |

---

## Overview

This is the official web application for **The 100% Accountability Sales Playbook** by **Mark Anthony Ng Tantongco** — Agency Sales Director and MDRT qualifier. The application combines a high-converting landing page with an interactive Command Center dashboard, providing a complete digital experience for the playbook's framework, tools, and community.

### What You'll Find

- **Landing Page** — A full marketing/sales page showcasing the playbook's value proposition, the 3 Pillars of Accountability, ownership scripts, weekly reset routine, affiliate program, bonuses, and pricing
- **Command Center** — An interactive dashboard where buyers can practice scripts, track weekly resets, manage their accountability tracker, implement the 3-Touch follow-up system, run team huddles, and complete the 7-day quick-start checklist

---

## Features

### Landing Page

| Section | Description |
|---------|-------------|
| **Hero** | "Own Outcomes, Not Excuses" headline with product mockup and dual CTAs |
| **Faith Section** | Philippians 4:13 and the faith-driven competitive advantage |
| **3 Pillars** | Fix the Problem, Words Create Worlds, Faith + Framework = Freedom |
| **Ownership Scripts** | Collapsible accordion with copy-to-clipboard for all 5 scripts |
| **Weekly Reset** | 4-step visual: Review, Reflect, Recharge, Plan |
| **Affiliate Advantage** | 30% commission program with quick math and outreach script |
| **Bonuses** | 4 bonus resources: Tracker, Follow-Up System, Huddle Agenda, Checklist |
| **Pricing** | $27 one-time with full feature list |
| **Testimonials** | Social proof section |
| **Final CTA** | Motivational close with "You were created to lead" |

### Command Center Dashboard

| Section | Description |
|---------|-------------|
| **Overview** | Stats cards, quick actions, getting started guide |
| **3 Pillars** | Expandable cards with progress tracking and action step checkboxes |
| **Ownership Scripts** | Filterable script library with copy-to-clipboard and practice tracker |
| **Weekly Reset** | Interactive 4-step form with history (saved to localStorage) |
| **Affiliate Program** | Commission calculator with slider, 3-step recruiting guide |
| **Tracker** | Interactive table with add/delete rows (saved to localStorage) |
| **Follow-Up System** | 3-Touch Rule scripts, color-coded pipeline tags (BLUE/YELLOW/GREEN/WHITE) |
| **Huddle Agenda** | 15-minute timer with timebox sections, leader prep checklist |
| **Quick-Start Checklist** | 7-day interactive checklist with progress bar (saved to localStorage) |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript 5** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **shadcn/ui** | UI component library (New York style) |
| **Framer Motion** | Animations and transitions |
| **Recharts** | Data visualization |
| **Lucide React** | Icon library |
| **localStorage** | Client-side data persistence |

---

## Project Structure

```
marktantongco.github.com/
├── public/
│   ├── playbook-hero.png        # Product mockup image
│   ├── cover-image.png          # Social share cover
│   ├── pattern-bg.png           # Background pattern
│   ├── logo.svg                 # Site logo
│   ├── .nojekyll                # GitHub Pages compatibility
│   └── robots.txt               # SEO crawl rules
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles + custom theme
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page (view switcher)
│   ├── components/
│   │   ├── landing/             # Landing page sections
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── FaithSection.tsx
│   │   │   ├── PillarsSection.tsx
│   │   │   ├── ScriptsPreview.tsx
│   │   │   ├── WeeklyResetSection.tsx
│   │   │   ├── AffiliateSection.tsx
│   │   │   ├── BonusesSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LandingPage.tsx
│   │   ├── command-center/      # Dashboard sections
│   │   │   ├── CommandCenter.tsx
│   │   │   └── sections/
│   │   │       ├── Overview.tsx
│   │   │       ├── PillarsDashboard.tsx
│   │   │       ├── ScriptsDashboard.tsx
│   │   │       ├── WeeklyResetDashboard.tsx
│   │   │       ├── AffiliateDashboard.tsx
│   │   │       ├── TrackerDashboard.tsx
│   │   │       ├── FollowUpDashboard.tsx
│   │   │       ├── HuddleDashboard.tsx
│   │   │       └── ChecklistDashboard.tsx
│   │   └── ui/                  # shadcn/ui components
│   ├── hooks/
│   │   ├── use-local-storage.ts # localStorage persistence hook
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib/
│       ├── db.ts
│       └── utils.ts
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment workflow
├── download/                    # Product deliverables (PDF, XLSX, etc.)
├── next.config.ts               # Next.js configuration (static export)
├── tailwind.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** runtime
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/marktantongco/marktantongco.github.com.git
cd marktantongco.github.com

# Install dependencies
bun install

# Start development server
bun run dev
```

The app will be available at `http://localhost:3000`.

### Build

```bash
# Build static export (outputs to /out directory)
bun run build
```

### Lint

```bash
bun run lint
```

---

## Deployment

### GitHub Pages (Automatic)

The project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to the `main` branch.

1. Push changes to `main`
2. GitHub Actions builds the static export
3. Deploys to `gh-pages` branch
4. Site goes live at [marktantongco.github.com](https://marktantongco.github.com)

**Manual deployment:**

```bash
# Build static export
bun run build

# Deploy the /out directory to gh-pages branch
npx gh-pages -d out
```

### Vercel (Automatic)

The project is configured for Vercel deployment. Vercel automatically detects Next.js and handles the build.

**Deploy via Vercel CLI:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Or connect via Vercel Dashboard:**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repository
3. Vercel auto-detects Next.js and deploys

> **Note:** For Vercel, change `output: "export"` to `output: "standalone"` in `next.config.ts` to enable SSR and API routes if needed in the future.

---

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Dark | `#0d1b2a` | Primary background, sidebar |
| Navy Light | `#1b2838` | Card backgrounds, hover states |
| Gold | `#c9a84c` | Primary accent, CTAs, highlights |
| Gold Dark | `#a68a3a` | Hover states for gold elements |
| Faith Amber | `#92400e` | Faith section accents |
| Slate | `#8892a4` | Muted text, secondary info |
| Light Gray | `#b0b8c8` | Body text on dark backgrounds |

### Typography

- **Headlines**: Geist Sans (variable weight, black for impact)
- **Body**: Geist Sans (regular weight)
- **Code**: Geist Mono

### Animations

- **Page transitions**: Framer Motion `AnimatePresence` with fade
- **Scroll reveals**: Intersection Observer-based animations
- **Hover effects**: Scale transforms, border color transitions
- **Card interactions**: Expand/collapse with spring physics

---

## The 3 Pillars of 100% Accountability

### Pillar 1: Fix the Problem, Not the Blame
Shift from blame to curiosity. Own your role in every outcome — good or bad. When you own it, you can change it.

### Pillar 2: Words Create Worlds
Your language doesn't just describe reality — it creates it. Replace blame language with ownership language. "They're not ready" becomes "I haven't built enough trust yet."

### Pillar 3: Faith + Framework = Freedom
Faith gives you courage. Framework gives you clarity. Together, they remove fear-based selling. Philippians 4:13 isn't a slogan — it's a system.

---

## Included Bonuses

| Bonus | File | Description |
|-------|------|-------------|
| 1. Accountability Tracker | `Accountability-Tracker-Template.xlsx` | Weekly tracking with Goal/Action/Result/Reflection/Adjustment columns |
| 2. Client Follow-Up System | `Client-FollowUp-System.md` | 3-Touch Rule with pipeline tags and CRM integration |
| 3. Team Huddle Agenda | `Team-Huddle-Agenda-Template.md` | 15-minute Monday morning meeting template |
| 4. Quick-Start Checklist | `BONUS-Quick-Start-Checklist.pdf` | 7-day launch plan to 100% accountability |

---

## Affiliate Program

Earn **30% commission** on every sale through your unique affiliate link.

- **Per sale**: $8.10 (on $27 playbook)
- **10 referrals**: $81
- **50 referrals**: $405
- **Instant payouts** via Gumroad

To join: Email [mark.tantongco@gmail.com](mailto:mark.tantongco@gmail.com) with subject "Affiliate Request"

---

## Product Files

All product deliverables are in the `/download` directory:

| File | Format | Size |
|------|--------|------|
| `100-Accountability-Playbook.pdf` | PDF | 183 KB |
| `Accountability-Tracker-Template.xlsx` | Excel | 7.5 KB |
| `Client-FollowUp-System.md` | Markdown | 1.6 KB |
| `Team-Huddle-Agenda-Template.md` | Markdown | 1.5 KB |
| `BONUS-Quick-Start-Checklist.pdf` | PDF | 55 KB |
| `cover-image.png` | PNG | 108 KB |
| `Gumroad-Deployment-Guide.pdf` | PDF | 161 KB |

---

## Environment Variables

No environment variables are required for the static build. The application runs entirely client-side with localStorage for data persistence.

---

## Contributing

This is a personal product by Mark Anthony Ng Tantongco. For suggestions, corrections, or collaboration inquiries:

- **Email**: [mark.tantongco@gmail.com](mailto:mark.tantongco@gmail.com)
- **Feedback Form**: [Share Your #1 Takeaway](https://marktantongco.typeform.com/to/playbook-takeaway)

---

## License

All rights reserved. This playbook and its contents are the intellectual property of Mark Anthony Ng Tantongco. Unauthorized reproduction, distribution, or modification is prohibited.

---

## Author

**Mark Anthony Ng Tantongco**
Agency Sales Director | MDRT

*"Faith gives you courage. Framework gives you clarity. Together, they give you freedom."*

---

> "I can do all things through Christ who strengthens me" — Philippians 4:13
