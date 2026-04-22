# The 100% Accountability Sales Playbook

> **Own Outcomes, Not Excuses** — The faith-driven framework for Filipino advisors who own results, lead stronger teams, and sell with integrity.

[![Deploy to GitHub Pages](https://github.com/marktantongco/marktantongco.github.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/marktantongco/marktantongco.github.com/actions/workflows/deploy.yml)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/marktantongco/marktantongco.github.com)

---

## Live Demos

| Platform | URL |
|----------|-----|
| **GitHub Pages** | [marktantongco.github.com](https://marktantongco.github.com) |
| **Vercel** | [accountability-playbook.vercel.app](https://accountability-playbook.vercel.app) |

---

## Quick Access

### Access Code
The Command Center and downloadable resources are protected by an access code. When you click **"Get the Playbook Now"** or **"Enter Command Center"**, you'll be prompted to enter the code:

```
Access Code: /q123
```

Once entered, access is saved to your browser — no need to re-enter on future visits.

### Download Resources

All files are available in the **Command Center → Resources** tab after unlocking, or via direct links:

| Resource | Format | Direct Link |
|----------|--------|-------------|
| **Main Playbook** | PDF | [100-Accountability-Playbook.pdf](https://marktantongco.github.com/download/100-Accountability-Playbook.pdf) |
| **Presentation Deck** | PPTX | [100-Accountability-Playbook.pptx](https://marktantongco.github.com/download/100-Accountability-Playbook.pptx) |
| **Tracker Template** | XLSX | [Accountability-Tracker-Template.xlsx](https://marktantongco.github.com/download/Accountability-Tracker-Template.xlsx) |
| **Quick-Start Checklist** | PDF | [BONUS-Quick-Start-Checklist.pdf](https://marktantongco.github.com/download/BONUS-Quick-Start-Checklist.pdf) |
| **Follow-Up System** | MD | [Client-FollowUp-System.md](https://marktantongco.github.com/download/Client-FollowUp-System.md) |
| **Huddle Agenda** | MD | [Team-Huddle-Agenda-Template.md](https://marktantongco.github.com/download/Team-Huddle-Agenda-Template.md) |
| **Deployment Guide** | PDF | [Gumroad-Deployment-Guide.pdf](https://marktantongco.github.com/download/Gumroad-Deployment-Guide.pdf) |
| **Cover Image** | PNG | [cover-image.png](https://marktantongco.github.com/download/cover-image.png) |

> **Vercel mirrors**: Replace `marktantongco.github.com` with `accountability-playbook.vercel.app` in any link above.

### Quick Download (After Unlocking)

After entering the access code, the **Pricing section** on the landing page reveals quick-download buttons for the PDF and PPTX files. The **Footer** also shows download links when unlocked. The **Command Center → Resources** tab provides the full download center with download tracking.

---

## Overview

This is the official web application for **The 100% Accountability Sales Playbook** by **Mark Anthony Ng Tantongco** — Agency Sales Director and MDRT qualifier. The application combines a high-converting landing page with an interactive Command Center dashboard, providing a complete digital experience for the playbook's framework, tools, and community.

### What You'll Find

- **Landing Page** — A full marketing/sales page showcasing the playbook's value proposition, the 3 Pillars of Accountability, ownership scripts, weekly reset routine, affiliate program, bonuses, and pricing
- **Command Center** — An interactive dashboard where buyers can practice scripts, track weekly resets, manage their accountability tracker, implement the 3-Touch follow-up system, run team huddles, download resources, and complete the 7-day quick-start checklist
- **Password Gate** — Access code `/q123` protects the Command Center and downloadable resources, with persistent unlock via localStorage
- **Toast Notifications** — Visual feedback on unlock success, download tracking, and clipboard operations
- **Scroll Spy Navigation** — Active section highlighting in the navbar as you scroll through the landing page

---

## Features

### Landing Page

| Section | ID | Description |
|---------|-----|-------------|
| **Hero** | `#hero` | "Own Outcomes, Not Excuses" headline with animated product mockup, social proof, and dual CTAs |
| **Faith Section** | `#faith` | Philippians 4:13 and the faith-driven competitive advantage |
| **3 Pillars** | `#pillars` | Fix the Problem, Words Create Worlds, Faith + Framework = Freedom |
| **Ownership Scripts** | `#scripts` | Collapsible accordion with copy-to-clipboard for all 3 scripts |
| **Weekly Reset** | `#weekly-reset` | 4-step visual: Review, Reflect, Recharge, Plan |
| **Affiliate Advantage** | `#affiliate` | 30% commission program with quick math and outreach script |
| **Bonuses** | `#bonuses` | 4 bonus resources: Tracker, Follow-Up System, Huddle Agenda, Checklist |
| **Pricing** | `#pricing` | $27 one-time with password-gated access (code: `/q123`) + quick download after unlock |
| **Testimonials** | `#testimonials` | Social proof section with star ratings |
| **Final CTA** | — | Motivational close with "You were created to lead" |

### Command Center Dashboard

| Section | Description |
|---------|-------------|
| **Overview** | Stats cards, quick actions (navigable), getting started guide |
| **3 Pillars** | Expandable cards with progress tracking and action step checkboxes |
| **Ownership Scripts** | Filterable script library with copy-to-clipboard and practice tracker |
| **Weekly Reset** | Interactive 4-step form with history (saved to localStorage) |
| **Affiliate Program** | Commission calculator with slider, 3-step recruiting guide |
| **Tracker** | Interactive table with add/delete rows (saved to localStorage) |
| **Follow-Up System** | 3-Touch Rule scripts, color-coded pipeline tags (BLUE/YELLOW/GREEN/WHITE) |
| **Huddle Agenda** | 15-minute timer with timebox sections, leader prep checklist |
| **Quick-Start Checklist** | 7-day interactive checklist with progress bar (saved to localStorage) |
| **Resources** | Download all playbook files (PDF, PPTX, XLSX, MD, PNG) — password protected with download tracking |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router, static export |
| **TypeScript 5** | Type-safe development (strict mode, zero errors) |
| **Tailwind CSS 4** | Utility-first styling |
| **shadcn/ui** | UI component library (New York style) |
| **Framer Motion** | Animations and transitions |
| **Recharts** | Data visualization |
| **Lucide React** | Icon library |
| **localStorage** | Client-side data persistence + unlock state + download tracking |

---

## Project Structure

```
marktantongco.github.com/
├── public/
│   ├── download/                # Downloadable product files
│   │   ├── 100-Accountability-Playbook.pdf
│   │   ├── 100-Accountability-Playbook.pptx
│   │   ├── Accountability-Tracker-Template.xlsx
│   │   ├── BONUS-Quick-Start-Checklist.pdf
│   │   ├── Client-FollowUp-System.md
│   │   ├── Team-Huddle-Agenda-Template.md
│   │   ├── Gumroad-Deployment-Guide.pdf
│   │   └── cover-image.png
│   ├── playbook-hero.png        # Product mockup image
│   ├── cover-image.png          # Social share cover
│   ├── pattern-bg.png           # Background pattern
│   ├── logo.svg                 # Site logo
│   ├── .nojekyll                # GitHub Pages compatibility
│   └── robots.txt               # SEO crawl rules
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles + custom theme
│   │   ├── layout.tsx           # Root layout with metadata + OG image + Twitter cards
│   │   └── page.tsx             # Main page (view switcher + password gate + unlock badge)
│   ├── components/
│   │   ├── landing/             # Landing page sections
│   │   │   ├── Navbar.tsx       # Scroll spy + unlock indicator
│   │   │   ├── Hero.tsx         # Animated mockup + social proof + scroll indicator
│   │   │   ├── FaithSection.tsx
│   │   │   ├── PillarsSection.tsx
│   │   │   ├── ScriptsPreview.tsx
│   │   │   ├── WeeklyResetSection.tsx
│   │   │   ├── AffiliateSection.tsx
│   │   │   ├── BonusesSection.tsx
│   │   │   ├── PricingSection.tsx    # Password gate (/q123) + quick downloads after unlock
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── Footer.tsx            # Conditional download links (locked/unlocked)
│   │   │   └── LandingPage.tsx
│   │   ├── command-center/      # Dashboard sections
│   │   │   ├── CommandCenter.tsx      # Sidebar + nav + onNavigate
│   │   │   └── sections/
│   │   │       ├── Overview.tsx       # Navigable quick actions
│   │   │       ├── PillarsDashboard.tsx
│   │   │       ├── ScriptsDashboard.tsx
│   │   │       ├── WeeklyResetDashboard.tsx
│   │   │       ├── AffiliateDashboard.tsx
│   │   │       ├── TrackerDashboard.tsx
│   │   │       ├── FollowUpDashboard.tsx
│   │   │       ├── HuddleDashboard.tsx
│   │   │       ├── ChecklistDashboard.tsx
│   │   │       └── ResourcesDashboard.tsx  # Download center + tracking
│   │   └── ui/                  # shadcn/ui components
│   ├── hooks/
│   │   ├── use-local-storage.ts # Hydration-safe localStorage persistence
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib/
│       ├── db.ts
│       └── utils.ts
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment workflow
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
3. Adds `.nojekyll` for compatibility
4. Deploys to GitHub Pages
5. Site goes live at [marktantongco.github.com](https://marktantongco.github.com)

**Manual deployment:**

```bash
# Build static export
bun run build

# Deploy the /out directory
npx gh-pages -d out
```

### Vercel (Automatic)

The project is deployed to Vercel with automatic builds on push.

**Deploy via Vercel CLI:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod --token YOUR_VERCEL_TOKEN
```

**Or connect via Vercel Dashboard:**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repository
3. Vercel auto-detects Next.js and deploys

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
| Green | `#4ade80` | Success states, unlock indicators |

### Typography

- **Headlines**: Geist Sans (variable weight, black for impact)
- **Body**: Geist Sans (regular weight)
- **Code**: Geist Mono

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
| 1. Accountability Tracker | [Accountability-Tracker-Template.xlsx](https://marktantongco.github.com/download/Accountability-Tracker-Template.xlsx) | Weekly tracking with Goal/Action/Result/Reflection/Adjustment columns |
| 2. Client Follow-Up System | [Client-FollowUp-System.md](https://marktantongco.github.com/download/Client-FollowUp-System.md) | 3-Touch Rule with pipeline tags and CRM integration |
| 3. Team Huddle Agenda | [Team-Huddle-Agenda-Template.md](https://marktantongco.github.com/download/Team-Huddle-Agenda-Template.md) | 15-minute Monday morning meeting template |
| 4. Quick-Start Checklist | [BONUS-Quick-Start-Checklist.pdf](https://marktantongco.github.com/download/BONUS-Quick-Start-Checklist.pdf) | 7-day launch plan to 100% accountability |

---

## Affiliate Program

Earn **30% commission** on every sale through your unique affiliate link.

- **Per sale**: $8.10 (on $27 playbook)
- **10 referrals**: $81
- **50 referrals**: $405
- **Instant payouts** via Gumroad

To join: Email [mark.tantongco@gmail.com](mailto:mark.tantongco@gmail.com) with subject "Affiliate Request"

---

## Bug Fixes & Upgrades (v3 — Comprehensive Upgrade)

| Issue | Severity | Fix |
|-------|----------|-----|
| Broken `#features` nav link | Critical | Changed to `#pillars` with proper section IDs on all sections |
| Missing section IDs | Critical | Added IDs: `#hero`, `#faith`, `#pillars`, `#scripts`, `#weekly-reset`, `#affiliate`, `#bonuses`, `#pricing`, `#testimonials` |
| `ignoreBuildErrors: true` hiding TS issues | Critical | Removed flag, fixed by excluding `examples/` and `skills/` from tsconfig |
| `metadataBase` not set | High | Added `metadataBase: new URL('https://marktantongco.github.com')` |
| Missing Twitter card metadata | High | Added `twitter` card metadata with `summary_large_image` |
| Missing `.nojekyll` file | High | Added to `public/` for GitHub Pages compatibility |
| Footer download links bypass password gate | High | Footer links now conditional — only visible when unlocked |
| No feedback on successful unlock | High | Added toast notifications on password success in all 3 gate locations |
| No quick download after unlocking | Medium | Pricing section now shows PDF/PPTX quick-download buttons after unlock |
| No download tracking | Medium | Resources dashboard tracks downloaded files with visual indicator |
| No scroll spy in navbar | Medium | Added active section highlighting with `layoutId` animation |
| No unlock status indicator | Medium | Added "UNLOCKED" badge in navbar + footer unlock status |
| No visual feedback on password errors | Medium | Added animated error messages with background highlight |
| Generic package name | Low | Changed from `nextjs_tailwind_shadcn_ts` to `100-accountability-playbook` |
| Hero missing social proof | Low | Added avatar stack + star rating + scroll indicator |
| Hero missing floating price badge | Low | Added animated $27 badge on product mockup |
| Navbar missing scroll spy indicator | Low | Added active underline animation on nav links |
| Unlock badge on landing page | Feature | Floating "Playbook Unlocked" badge with PDF/PPT quick links |
| Download tracking persistence | Feature | Resources dashboard saves downloaded file state to localStorage |

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
