/**
 * Playbook Configuration — Single Source of Truth
 * 
 * CRITICAL: This file centralizes all business logic constants.
 * The access code is intentionally client-side for a MARKETING/DEMO site.
 * 
 * SECURITY MODEL:
 * - This is a static site (output: "export") — no server-side auth is possible
 * - The access code is a UX gate, not a security gate
 * - Actual product delivery happens through Gumroad (they handle auth + payments)
 * - Files in public/download/ are accessible by direct URL — this is BY DESIGN
 *   for the marketing/demo version on GitHub Pages
 * - For a fully protected version, deploy to Vercel with API routes (remove output: "export")
 * 
 * TO CHANGE THE GUMROAD LINK:
 * Update GUMROAD_PRODUCT_URL below with your actual Gumroad product URL
 */

// ===== BUSINESS CONFIGURATION =====

/** Gumroad product checkout URL — UPDATE THIS with your actual Gumroad product link */
export const GUMROAD_PRODUCT_URL = 'https://marktantongco.gumroad.com/l/100-accountability-playbook'

/** Access code for post-purchase Command Center access */
export const ACCESS_CODE = '/q123'

/** Product price */
export const PRODUCT_PRICE = '$27'

/** Product name */
export const PRODUCT_NAME = '100% Accountability Sales Playbook'

/** Support email */
export const SUPPORT_EMAIL = 'mark.tantongco@gmail.com'

/** Author name */
export const AUTHOR_NAME = 'Mark Anthony Ng Tantongco'

/** Typeform feedback URL */
export const TYPEFORM_URL = 'https://marktantongco.typeform.com/to/playbook-takeaway'

// ===== LOCAL STORAGE KEYS =====

export const STORAGE_KEYS = {
  UNLOCKED: 'playbook-unlocked',
  DOWNLOADED: 'playbook-downloaded',
} as const

// ===== DOWNLOADABLE RESOURCES =====

export interface DownloadResource {
  name: string
  filename: string
  type: 'PDF' | 'PPTX' | 'XLSX' | 'MD' | 'PNG'
  description: string
}

export const DOWNLOAD_RESOURCES: DownloadResource[] = [
  {
    name: 'Main Playbook',
    filename: '100-Accountability-Playbook.pdf',
    type: 'PDF',
    description: 'The complete 14-page playbook with all 3 pillars, scripts, and frameworks.',
  },
  {
    name: 'Presentation',
    filename: '100-Accountability-Playbook.pptx',
    type: 'PPTX',
    description: 'Slide deck for team presentations and training sessions.',
  },
  {
    name: 'Tracker Template',
    filename: 'Accountability-Tracker-Template.xlsx',
    type: 'XLSX',
    description: 'Weekly accountability tracker with follow-up pipeline sheets.',
  },
  {
    name: 'Quick-Start Checklist',
    filename: 'BONUS-Quick-Start-Checklist.pdf',
    type: 'PDF',
    description: 'Your 7-day quick-start checklist to hit the ground running.',
  },
  {
    name: 'Follow-Up System',
    filename: 'Client-FollowUp-System.md',
    type: 'MD',
    description: 'The 3-Touch Rule follow-up system with templates.',
  },
  {
    name: 'Huddle Agenda',
    filename: 'Team-Huddle-Agenda-Template.md',
    type: 'MD',
    description: '15-minute team huddle agenda template with timebox sections.',
  },
  {
    name: 'Deployment Guide',
    filename: 'Gumroad-Deployment-Guide.pdf',
    type: 'PDF',
    description: 'Step-by-step Gumroad setup guide with 23 detailed steps.',
  },
  {
    name: 'Cover Image',
    filename: 'cover-image.png',
    type: 'PNG',
    description: 'High-resolution cover image for promotional use.',
  },
]

// ===== ACCESS CODE VALIDATION =====

/**
 * Validates an access code input.
 * Returns { valid: boolean, error?: string }
 * 
 * NOTE: This runs client-side. The access code is visible in the JS bundle.
 * This is intentional for the static/demo deployment.
 * For server-side validation, deploy to Vercel without output: "export"
 * and create an API route that validates the code server-side.
 */
export function validateAccessCode(input: string): { valid: boolean; error?: string } {
  if (!input || input.trim().length === 0) {
    return { valid: false, error: 'Please enter an access code.' }
  }
  if (input === ACCESS_CODE) {
    return { valid: true }
  }
  return { valid: false, error: 'Incorrect access code. Did you purchase the playbook?' }
}
