# Axiom X Website Content Update - Complete Task List

**Date:** January 29, 2026
**Source Document:** `docs/Updated _ V2 Website Content Axiom X Final.docx`
**Status:** Pending Implementation

---

## Table of Contents

1. [Navigation Header](#1-navigation-header)
2. [Last Mile Delivery Service](#2-last-mile-delivery-service)
3. [Vision Content](#3-vision-content)
4. [Mission Content](#4-mission-content)
5. [Brand Values](#5-brand-values)
6. [Our Story Section](#6-our-story-section)
7. [Axiom X Factor Content](#7-axiom-x-factor-content)
8. [Contact Information](#8-contact-information)
9. [Footer Restructure](#9-footer-restructure)
10. [Terms & Conditions Page](#10-terms--conditions-page)
11. [Privacy Policy Page](#11-privacy-policy-page)
12. [Deferred Tasks](#12-deferred-tasks)

---

## 1. Navigation Header

**File:** `axiom-x/components/layout/header.tsx`
**Priority:** High
**Status:** Pending

### Current State
- Two buttons: "Sign Up" and "Login"
- Links to `/signup` and `/login` routes

### Required Changes

#### 1.1 Desktop Navigation (Lines 79-93)
- [ ] Remove "Sign Up" button
- [ ] Remove "Login" button
- [ ] Add single "Let's Talk" button
- [ ] Link to `#contact` section

**New Button Code:**
```tsx
<Link
  href="#contact"
  className="inline-flex justify-center items-center min-w-[110px] px-5 py-[7px] bg-[#53ac70] text-white font-medium text-[14px] rounded-[200px] border-[1.5px] border-[#53ac70] transition-all duration-300 hover:bg-transparent hover:text-[#53ac70]"
>
  Let's Talk
</Link>
```

#### 1.2 Mobile Navigation (Lines 145-160)
- [ ] Remove "Sign Up" button
- [ ] Remove "Login" button
- [ ] Add single "Let's Talk" button
- [ ] Link to `#contact` section

---

## 2. Last Mile Delivery Service

**File:** `axiom-x/data/services.ts`
**Priority:** High
**Status:** Pending

### Current State
- 5 services defined (Warehousing, Call Center, Back Office, VAS, Upselling)
- Last Mile Delivery is MISSING

### Required Changes

#### 2.1 Add New Service Object
- [ ] Add as FIRST item in the `services` array (index 0)

**New Service Content:**
```typescript
{
  id: "last-mile",
  emoji: "🚚",
  title: "Last Mile Delivery",
  boldText: "The promise of speed, delivered.",
  description: "From AI-based dispatch to branded delivery fleets, we make sure the last step of your customer journey reflects everything you stand for.",
  tags: [
    "Same-Day & Next-Day Delivery",
    "On-Demand & Express Delivery",
    "B2C & B2B Deliveries",
    "Reverse Logistics",
    "Customized delivery solutions"
  ],
  image: "/images/service-1.jpg"
}
```

### Document Reference
> "🚚 Last Mile Delivery - The promise of speed, delivered. From AI-based dispatch to branded delivery fleets, we make sure the last step of your customer journey reflects everything you stand for."

---

## 3. Vision Content

**File:** `axiom-x/data/content.ts`
**Priority:** Medium
**Status:** Pending

### Current State (Lines 19-23)
```typescript
vision: {
  headline: "Vision",
  content: "To be the unseen force powering the next era of business operations.",
}
```

### Required Changes

#### 3.1 Update Vision Content
- [ ] Change `content` value

**New Content:**
```typescript
content: "To be the invisible engine of the world's most ambitious brands."
```

### Document Reference
> "Vision: To be the invisible engine of the world's most ambitious brands."

---

## 4. Mission Content

**File:** `axiom-x/data/content.ts`
**Priority:** Medium
**Status:** Pending

### Current State (Lines 25-29)
```typescript
mission: {
  headline: "Mission",
  content: "To simplify, enable, and scale modern operations through intelligent, AI-driven services.",
}
```

### Required Changes

#### 4.1 Update Mission Content
- [ ] Change `content` value

**New Content:**
```typescript
content: "To transform operational complexity into a competitive advantage, giving businesses the freedom to scale through precision, insight, and intelligence."
```

### Document Reference
> "Mission: To transform operational complexity into a competitive advantage, giving businesses the freedom to scale through precision, insight, and intelligence."

---

## 5. Brand Values

**File:** `axiom-x/data/brand-values.ts`
**Priority:** Medium
**Status:** Pending

### Current State (Lines 8-39)
| ID | Label | Current Description |
|----|-------|---------------------|
| precision | Precision | "We execute with discipline and clarity" |
| agility | Agility | "We respond, reroute, and adapt in real-time" |
| reliability | Reliability | "You can build your business on us" |
| support | Support | "We extend your capabilities, not just your workload" |
| innovation | Innovation | "Embedded intelligence at every touchpoint" |

### Required Changes

#### 5.1 Update Precision
- [ ] Change description

**New:**
```typescript
description: "We operate with a discipline that turns 'logistics' into an exact science."
```

#### 5.2 Update Agility
- [ ] Change description

**New:**
```typescript
description: "We don't just react; we reroute and adapt at the speed of the market."
```

#### 5.3 Update Reliability
- [ ] Change description

**New:**
```typescript
description: "We are the foundation. You can build your biggest ambitions on our infrastructure."
```

#### 5.4 Rename Support to Impact
- [ ] Change `id` from "support" to "impact"
- [ ] Change `label` from "Support" to "Impact"
- [ ] Change description

**New:**
```typescript
{
  id: "impact",
  label: "Impact",
  icon: "HeartHandshake",
  description: "We don't just add to your workload; we multiply your capabilities."
}
```

#### 5.5 Update Innovation
- [ ] Change description

**New:**
```typescript
description: "We embed intelligence at every touchpoint—because 'standard' is never enough."
```

### Document Reference
> Brand Values:
> - Precision: We operate with a discipline that turns "logistics" into an exact science.
> - Agility: We don't just react; we reroute and adapt at the speed of the market.
> - Reliability: We are the foundation. You can build your biggest ambitions on our infrastructure.
> - Impact (Replacing Support): We don't just add to your workload; we multiply your capabilities.
> - Innovation: We embed intelligence at every touchpoint—because "standard" is never enough.

---

## 6. Our Story Section

**File:** `axiom-x/components/sections/our-story.tsx`
**Priority:** Medium
**Status:** Pending

### Current State
- Solid green background: `bg-[#3f8f5a]`
- Static color, no animation

### Required Changes

#### 6.1 Replace Background with Animated Gradient
- [ ] Remove `bg-[#3f8f5a]` class
- [ ] Add `story-gradient-bg` class
- [ ] Add CSS keyframes animation

**Reference Implementation (from services/index.tsx Lines 131-162):**
```tsx
{/* Add to the component */}
<style jsx>{`
  .story-gradient-bg {
    background: linear-gradient(
      135deg,
      #0a1f15 0%,
      #19342c 25%,
      #2a4a3d 50%,
      #3f7537 75%,
      #19342c 100%
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 50% 100%;
    }
    50% {
      background-position: 100% 50%;
    }
    75% {
      background-position: 50% 0%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`}</style>
```

#### 6.2 Update Section Div (Line 12)
**Current:**
```tsx
<div className="bg-[#3f8f5a] p-[25px] md:p-[35px] lg:p-[50px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px]">
```

**New:**
```tsx
<div className="story-gradient-bg p-[25px] md:p-[35px] lg:p-[50px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px]">
```

### Document Feedback Reference
> "We recommend removing the video currently placed behind the Mission and Vision section. Instead, we suggest using dashboards, real-time tracking visuals, or the Axiom TMS app as background elements..."

---

## 7. Axiom X Factor Content

**File:** `axiom-x/data/brand-values.ts`
**Priority:** Medium
**Status:** Pending (Content Only - Design Later)

### Current State (Lines 54-93)
- 2 slides with different card structures
- Cards: "Challenge Status Quo", "Innovate With Purpose", "Agile and Adaptable", "Proactive and Bold"

### Required Changes

#### 7.1 Update whyAxiomSlides Content
- [ ] Update to match 4 pillars from document

**New Content Structure:**
```typescript
export const whyAxiomSlides: WhyAxiomSlide[] = [
  {
    id: 1,
    headline: "The Axiom X Factor",
    description: "One Platform. One Partner.",
    cards: [
      {
        icon: "/images/icons/idea.png",
        title: "The Single-Window Advantage",
        text: "From the first click to final revenue realization, we provide a seamless, end-to-end solution. No more fragmented vendors or data silos—just one partner, one platform, and total accountability.",
      },
      {
        icon: "/images/icons/innovation.png",
        title: "Innovation with Purpose",
        text: "We challenge the status quo by bringing fresh, tech-forward ideas to the table. We don't just follow industry standards; we set them, continuously seeking smarter ways to transform your business outcomes.",
      },
    ],
    note: "Our differentiation is built on a culture that refuses to stagnate.",
  },
  {
    id: 2,
    headline: "The Axiom X Factor",
    description: "One Platform. One Partner.",
    cards: [
      {
        icon: "/images/icons/adaptation.png",
        title: "Proven Agility & Bold Execution",
        text: "We thrive where others see boundaries. As demonstrated in our high-stakes work with major partners, we are agile, proactive, and bold. We don't wait for instructions—we take the initiative to push beyond expectations and deliver results.",
      },
      {
        icon: "/images/icons/iteration.png",
        title: "A Culture of Excellence",
        text: "Our differentiation is built on a culture that refuses to stagnate. We combine years of deep experience with a restless drive to evolve, ensuring that your operations are always powered by the latest in strategic excellence.",
      },
    ],
    note: "Our excellence, leadership, and differentiation are not just built on experience, but on a culture that drives us to constantly evolve and excel.",
  },
];
```

### Document Reference
> **The Axiom X Factor: One Platform. One Partner.**
>
> - The Single-Window Advantage: From the first click to final revenue realization, we provide a seamless, end-to-end solution...
> - Innovation with Purpose: We challenge the status quo by bringing fresh, tech-forward ideas to the table...
> - Proven Agility & Bold Execution: We thrive where others see boundaries...
> - A Culture of Excellence: Our differentiation is built on a culture that refuses to stagnate...

---

## 8. Contact Information

**File:** `axiom-x/components/sections/contact-section.tsx`
**Priority:** Low
**Status:** Pending

### Current State
- Phone: `+971 4 123 4567`

### Required Changes

#### 8.1 Update Phone Number
- [ ] Find phone number in component
- [ ] Update to correct number

**New Phone:**
```
+971 4 3101 010
```

### Document Reference
> 📞 +971 4 3101 010

---

## 9. Footer Restructure

**File:** `axiom-x/components/layout/footer.tsx`
**Priority:** High
**Status:** Pending

### Current State (4 Columns)
1. Logo + Subscribe
2. Account (My Account, Login/Register, Cart, Wishlist, Shop)
3. Quick Link (Privacy Policy, Terms Of Use, FAQ, Contact)
4. Download App + Social Links

### Required Changes

#### 9.1 Replace "Account" Column with "Our Services" (Lines 81-110)
- [ ] Change heading from "Account" to "Our Services"
- [ ] Replace all links with service links

**New Links:**
```tsx
<ul className="space-y-2">
  <li>
    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
      Last Mile Delivery
    </a>
  </li>
  <li>
    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
      Warehousing & Inventory
    </a>
  </li>
  <li>
    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
      Call Center Support
    </a>
  </li>
  <li>
    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
      Back Office Services
    </a>
  </li>
  <li>
    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
      Value-Added Services
    </a>
  </li>
</ul>
```

#### 9.2 Update "Quick Link" Column (Lines 112-137)
- [ ] Update Privacy Policy link to `/privacy-policy`
- [ ] Update Terms Of Use link to `/terms`
- [ ] Remove FAQ link
- [ ] Keep Contact link as `#contact`

**New Links:**
```tsx
<ul className="space-y-2">
  <li>
    <Link href="/privacy-policy" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
      Privacy Policy
    </Link>
  </li>
  <li>
    <Link href="/terms" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
      Terms Of Use
    </Link>
  </li>
  <li>
    <a href="#contact" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
      Contact
    </a>
  </li>
</ul>
```

#### 9.3 Remove "Download App" Section (Lines 140-170)
- [ ] Remove entire "Download App" heading and description
- [ ] Keep Social Links only
- [ ] Restructure grid to accommodate removal

#### 9.4 Restructure Grid Layout
- [ ] Update grid from 4 columns to 3 main areas
- [ ] New structure:
  - Column 1: Logo + Subscribe (lg:col-span-5)
  - Column 2: Our Services (lg:col-span-3)
  - Column 3: Quick Links + Social (lg:col-span-4)

---

## 10. Terms & Conditions Page

**File:** `axiom-x/app/terms/page.tsx` (NEW)
**Priority:** Medium
**Status:** Pending

### Required Structure

#### 10.1 Create New Page
- [ ] Create `axiom-x/app/terms/page.tsx`
- [ ] Match site styling (container-axiom, fonts, colors)
- [ ] Add metadata for SEO

**Page Structure:**
```
- Header (imported from layout)
- Page Title: "Terms & Conditions"
- Last Updated Date
- Sections:
  1. Introduction / Agreement to Terms
  2. Description of Services
  3. User Responsibilities
  4. Intellectual Property
  5. Limitation of Liability
  6. Indemnification
  7. Governing Law (UAE)
  8. Changes to Terms
  9. Contact Information
- Footer (imported from layout)
```

**Styling Guidelines:**
- Use `container-axiom` for consistent width
- Headings: `text-[24px] md:text-[28px] lg:text-[32px] font-bold text-black`
- Subheadings: `text-[18px] md:text-[20px] font-semibold text-black mt-8 mb-4`
- Body text: `text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 leading-relaxed`
- Section spacing: `mb-6 md:mb-8`

---

## 11. Privacy Policy Page

**File:** `axiom-x/app/privacy-policy/page.tsx` (NEW)
**Priority:** Medium
**Status:** Pending

### Required Structure

#### 11.1 Create New Page
- [ ] Create `axiom-x/app/privacy-policy/page.tsx`
- [ ] Match site styling (container-axiom, fonts, colors)
- [ ] Add metadata for SEO

**Page Structure:**
```
- Header (imported from layout)
- Page Title: "Privacy Policy"
- Last Updated Date
- Sections:
  1. Introduction
  2. Information We Collect
  3. How We Use Your Information
  4. Information Sharing
  5. Data Security
  6. Cookies and Tracking
  7. Third-Party Links
  8. Your Rights
  9. Children's Privacy
  10. Changes to Privacy Policy
  11. Contact Information
- Footer (imported from layout)
```

**Styling Guidelines:**
- Same as Terms page for consistency
- Use `container-axiom` for consistent width
- Match heading/body text styles

---

## 12. Deferred Tasks

### 12.1 Hero Section (WAIT)
**Status:** Deferred - Will design together

**Document Feedback:**
- WAB tracking link is missing
- Video and text appear cluttered
- Better alignment needed
- Add tagline: "Scale with confidence, we'll handle the rest"

### 12.2 Axiom X Factor Visual Design (WAIT)
**Status:** Content added, visual design deferred

**Document Feedback:**
- Present values in iconic manner
- Simple, professional, elegant
- No background images

---

## File Summary

| File | Action | Priority |
|------|--------|----------|
| `axiom-x/components/layout/header.tsx` | Edit | High |
| `axiom-x/data/services.ts` | Edit | High |
| `axiom-x/data/content.ts` | Edit | Medium |
| `axiom-x/data/brand-values.ts` | Edit | Medium |
| `axiom-x/components/sections/our-story.tsx` | Edit | Medium |
| `axiom-x/components/sections/contact-section.tsx` | Edit | Low |
| `axiom-x/components/layout/footer.tsx` | Edit | High |
| `axiom-x/app/terms/page.tsx` | Create | Medium |
| `axiom-x/app/privacy-policy/page.tsx` | Create | Medium |

---

## Verification Checklist

After implementation, verify:

- [ ] Navigation shows single "Let's Talk" button (desktop)
- [ ] Navigation shows single "Let's Talk" button (mobile)
- [ ] Services section shows 6 services
- [ ] Last Mile Delivery appears first in services
- [ ] Vision content updated on page
- [ ] Mission content updated on page
- [ ] Brand values show "Impact" instead of "Support"
- [ ] Brand value descriptions match document
- [ ] Our Story has animated gradient background
- [ ] X Factor content matches document
- [ ] Contact phone shows +971 4 3101 010
- [ ] Footer shows "Our Services" column
- [ ] Footer shows updated Quick Links (no FAQ)
- [ ] Footer has no "Download App" section
- [ ] `/terms` page loads and displays correctly
- [ ] `/privacy-policy` page loads and displays correctly
- [ ] All internal links work properly
- [ ] Mobile responsiveness maintained
- [ ] No console errors

---

## Notes

- All content sourced from: `docs/Updated _ V2 Website Content Axiom X Final.docx`
- Animated gradient CSS pattern sourced from: `axiom-x/components/sections/services/index.tsx`
- Brand colors: Primary Green `#53ac70`, Lime Accent `#d4fb50`
