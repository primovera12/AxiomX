# Axiom X Website Content Update - Task Tracker

**Date:** January 29, 2026
**Source Document:** `docs/Updated _ V2 Website Content Axiom X Final.docx`
**Status:** ✅ Phase 1 Complete | 🔄 Phase 2 Pending (Hero + X Factor Design)
**Last Updated:** January 29, 2026
**Commit:** `3372ca9`

---

## Progress Summary

| Category | Status |
|----------|--------|
| Content Updates | ✅ 11/11 Complete |
| Design Tasks | ✅ 2 Complete, 🔄 4 Pending |

---

## Table of Contents

1. [Navigation Header](#1-navigation-header) ✅
2. [Last Mile Delivery Service](#2-last-mile-delivery-service) ✅
3. [Vision Content](#3-vision-content) ✅
4. [Mission Content](#4-mission-content) ✅
5. [Brand Values](#5-brand-values) ✅
6. [Our Story Section](#6-our-story-section) ✅
7. [Axiom X Factor Content](#7-axiom-x-factor-content) ✅
8. [Contact Information](#8-contact-information) ✅
9. [Footer Restructure](#9-footer-restructure) ✅
10. [Terms & Conditions Page](#10-terms--conditions-page) ✅
11. [Privacy Policy Page](#11-privacy-policy-page) ✅
12. [Pending Design Tasks](#12-pending-design-tasks) 🔄 (6 items)

---

## ✅ Completed Tasks

### 1. Navigation Header

**File:** `axiom-x/components/layout/header.tsx`
**Status:** ✅ Complete

**Changes Made:**
- [x] Removed "Sign Up" button
- [x] Removed "Login" button
- [x] Added single "Let's Talk" button
- [x] Links to `#contact` section
- [x] Updated mobile navigation to match

---

### 2. Last Mile Delivery Service

**File:** `axiom-x/data/services.ts`
**Status:** ✅ Complete

**Changes Made:**
- [x] Added as FIRST item in the `services` array (index 0)
- [x] 6 services now total

**Content Added:**
```typescript
{
  id: "last-mile",
  emoji: "🚚",
  title: "Last Mile Delivery",
  boldText: "The promise of speed, delivered.",
  description: "From AI-based dispatch to branded delivery fleets...",
  tags: ["Same-Day & Next-Day Delivery", "On-Demand & Express Delivery", "B2C & B2B Deliveries", "Reverse Logistics", "Customized delivery solutions"],
  image: "/images/service-1.jpg"
}
```

---

### 3. Vision Content

**File:** `axiom-x/data/content.ts`
**Status:** ✅ Complete

**Changes Made:**
- [x] Updated content value

**New Content:**
> "To be the invisible engine of the world's most ambitious brands."

---

### 4. Mission Content

**File:** `axiom-x/data/content.ts`
**Status:** ✅ Complete

**Changes Made:**
- [x] Updated content value

**New Content:**
> "To transform operational complexity into a competitive advantage, giving businesses the freedom to scale through precision, insight, and intelligence."

---

### 5. Brand Values

**File:** `axiom-x/data/brand-values.ts`
**Status:** ✅ Complete

**Changes Made:**
- [x] Updated Precision description
- [x] Updated Agility description
- [x] Updated Reliability description
- [x] Renamed "Support" to "Impact"
- [x] Updated Innovation description

**Current Values:**
| ID | Label | Description |
|----|-------|-------------|
| precision | Precision | "We operate with a discipline that turns 'logistics' into an exact science." |
| agility | Agility | "We don't just react; we reroute and adapt at the speed of the market." |
| reliability | Reliability | "We are the foundation. You can build your biggest ambitions on our infrastructure." |
| impact | **Impact** | "We don't just add to your workload; we multiply your capabilities." |
| innovation | Innovation | "We embed intelligence at every touchpoint—because 'standard' is never enough." |

---

### 6. Our Story Section

**File:** `axiom-x/components/sections/our-story.tsx`
**Status:** ✅ Complete

**Changes Made:**
- [x] Replaced solid `bg-[#3f8f5a]` with animated gradient
- [x] Added `story-gradient-bg` class
- [x] Added CSS keyframes animation (matches services section style)

---

### 7. Axiom X Factor Content

**File:** `axiom-x/data/brand-values.ts`
**Status:** ✅ Content Complete | 🔄 Visual Design Pending

**Changes Made:**
- [x] Updated headline to "The Axiom X Factor"
- [x] Updated description to "One Platform. One Partner."
- [x] Updated 4 pillars content:
  1. The Single-Window Advantage
  2. Innovation with Purpose
  3. Proven Agility & Bold Execution
  4. A Culture of Excellence

---

### 8. Contact Information

**File:** `axiom-x/components/sections/contact-section.tsx`
**Status:** ✅ Complete

**Changes Made:**
- [x] Updated phone from `+971 4 123 4567` to `+971 4 3101 010`
- [x] Updated `href` attribute to match

---

### 9. Footer Restructure

**File:** `axiom-x/components/layout/footer.tsx`
**Status:** ✅ Complete

**Changes Made:**
- [x] Replaced "Account" column with "Our Services" column
- [x] Added 5 service links (Last Mile, Warehousing, Call Center, Back Office, VAS)
- [x] Updated Privacy Policy link to `/privacy-policy`
- [x] Updated Terms Of Use link to `/terms`
- [x] Removed FAQ link
- [x] Removed "Download App" section
- [x] Restructured grid layout (5-3-2-2 columns)
- [x] Added "Follow Us" section with social links

---

### 10. Terms & Conditions Page

**File:** `axiom-x/app/terms/page.tsx`
**Status:** ✅ Complete (NEW FILE)

**Features:**
- [x] SEO metadata
- [x] Matches site styling
- [x] 9 legal sections
- [x] Contact information
- [x] Back to Home link
- [x] Responsive design

**URL:** `/terms`

---

### 11. Privacy Policy Page

**File:** `axiom-x/app/privacy-policy/page.tsx`
**Status:** ✅ Complete (NEW FILE)

**Features:**
- [x] SEO metadata
- [x] Matches site styling
- [x] 11 privacy sections
- [x] Contact information
- [x] Back to Home link
- [x] Responsive design

**URL:** `/privacy-policy`

---

## 🔄 Pending Design Tasks

### 12.1 Hero Section

**Status:** 🔄 Waiting - To design together

**File:** `axiom-x/components/sections/hero.tsx`

**Document Feedback:**
- [ ] WAB tracking link is missing
- [ ] Video and text appear cluttered - better alignment needed
- [ ] Add tagline: "Scale with confidence, we'll handle the rest"
- [ ] Main navigation tab "Let's Talk" to drive engagement

**Notes:**
- Will edit together with user
- Needs design decisions on layout and video placement

---

### 12.2 Axiom X Factor Visual Design

**Status:** 🔄 Content added, visual design pending

**File:** `axiom-x/components/sections/why-axiom.tsx`

**Document Feedback:**
- [ ] Present values in iconic manner
- [ ] Simple, professional, elegant design
- [ ] No background images
- [ ] More iconic presentation of 4 pillars

**Notes:**
- Content has been updated in `brand-values.ts`
- Visual component redesign needed
- Will design together with user

---

### 12.3 Tracking Section Edits

**Status:** 🔄 Pending

**File:** `axiom-x/components/sections/shipment-tracking.tsx`

**Tasks:**
- [ ] Review and update tracking section as needed

---

### 12.4 Vision Mission Section - Remove Play Button

**Status:** ✅ Complete

**File:** `axiom-x/components/sections/vision-mission.tsx`

**Changes Made:**
- [x] Removed play button and right column
- [x] Updated Vision content to match data file
- [x] Updated Mission content to match data file
- [x] Removed unused Image import

---

### 12.5 Brand Values Section - Remove Play Button

**Status:** ✅ Complete

**File:** `axiom-x/components/sections/brand-values.tsx`

**Changes Made:**
- [x] Removed left play button from mobile layout
- [x] Removed left play button from desktop layout
- [x] Removed unused Play import
- [x] Updated brand values content (Support → Impact, new descriptions)

---

### 12.6 General Style Consistency Audit

**Status:** 🔄 Pending

**Files:** Multiple components

**Tasks:**
- [ ] Ensure all headlines have uniform styling (font family, sizes, weights)
- [ ] Ensure all body text has consistent styling
- [ ] Ensure all buttons have the same style (colors, padding, border-radius, hover states)
- [ ] Check spacing consistency across sections
- [ ] Verify responsive breakpoints are consistent

**Areas to Review:**
- Headlines: Check `text-[size]`, `font-weight`, `font-family` across all sections
- Buttons: Primary (green filled), Secondary (outlined), CTA consistency
- Text: Body text sizes, line heights, colors
- Spacing: Section padding, element margins

---

## Verification Checklist

**Completed Verifications:**
- [x] Navigation shows single "Let's Talk" button (desktop)
- [x] Navigation shows single "Let's Talk" button (mobile)
- [x] Services section shows 6 services
- [x] Last Mile Delivery appears first in services
- [x] Vision content updated on page
- [x] Mission content updated on page
- [x] Brand values show "Impact" instead of "Support"
- [x] Brand value descriptions match document
- [x] Our Story has animated gradient background
- [x] X Factor content matches document
- [x] Contact phone shows +971 4 3101 010
- [x] Footer shows "Our Services" column
- [x] Footer shows updated Quick Links (no FAQ)
- [x] Footer has no "Download App" section
- [x] `/terms` page loads and displays correctly
- [x] `/privacy-policy` page loads and displays correctly
- [x] All internal links work properly

**Pending Verifications (after design tasks):**
- [ ] Hero section layout improved
- [ ] X Factor visual design implemented
- [ ] Tracking section edits completed
- [ ] Vision Mission play button removed
- [ ] Brand Values left play button removed
- [ ] Style consistency audit complete (headlines, text, buttons)

---

## File Summary

| File | Action | Status |
|------|--------|--------|
| `axiom-x/components/layout/header.tsx` | Edit | ✅ |
| `axiom-x/data/services.ts` | Edit | ✅ |
| `axiom-x/data/content.ts` | Edit | ✅ |
| `axiom-x/data/brand-values.ts` | Edit | ✅ |
| `axiom-x/components/sections/our-story.tsx` | Edit | ✅ |
| `axiom-x/components/sections/contact-section.tsx` | Edit | ✅ |
| `axiom-x/components/layout/footer.tsx` | Edit | ✅ |
| `axiom-x/app/terms/page.tsx` | Create | ✅ |
| `axiom-x/app/privacy-policy/page.tsx` | Create | ✅ |
| `axiom-x/components/sections/hero.tsx` | Edit | 🔄 Pending |
| `axiom-x/components/sections/why-axiom.tsx` | Edit | 🔄 Pending |
| `axiom-x/components/sections/shipment-tracking.tsx` | Edit | 🔄 Pending |
| `axiom-x/components/sections/vision-mission.tsx` | Edit | 🔄 Pending |
| `axiom-x/components/sections/brand-values.tsx` | Edit | 🔄 Pending |
| Multiple components | Style Audit | 🔄 Pending |

---

## Notes

- All content sourced from: `docs/Updated _ V2 Website Content Axiom X Final.docx`
- Animated gradient CSS pattern sourced from: `axiom-x/components/sections/services/index.tsx`
- Brand colors: Primary Green `#53ac70`, Lime Accent `#d4fb50`
- Commit: `3372ca9` - "Update website content based on V2 document feedback"
