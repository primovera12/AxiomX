# Axiom X Website - Progress Tracker

> **Last Updated:** January 16, 2025
> **Current Phase:** Phase 1 Complete, Ready for Phase 2

---

## Overview

| Phase | Status | Progress |
|-------|--------|----------|
| Phase 1: Project Setup | ✅ Complete | 100% |
| Phase 2: Layout (Header + Footer) | ⏳ Pending | 0% |
| Phase 3: Hero Carousel | ⏳ Pending | 0% |
| Phase 4: Stats Bar | ⏳ Pending | 0% |
| Phase 5: Services Section | ⏳ Pending | 0% |
| Phase 6: Content Sections | ⏳ Pending | 0% |
| Phase 7: Contact + Tracking | ⏳ Pending | 0% |
| Phase 8: Animations + Polish | ⏳ Pending | 0% |
| Phase 9: Responsive Testing | ⏳ Pending | 0% |
| Phase 10: Final Review | ⏳ Pending | 0% |

---

## Phase 1: Project Setup ✅ COMPLETE

### 1.1 Initialize Next.js Project
- [x] Create Next.js 16 project with TypeScript
- [x] Configure Tailwind CSS 4
- [x] Setup ESLint
- [x] Configure App Router
- [x] Setup import alias `@/*`

### 1.2 Install Dependencies
- [x] framer-motion (animations)
- [x] react-intersection-observer (scroll detection)
- [x] @number-flow/react (animated counters)
- [x] embla-carousel-react (carousel)
- [x] embla-carousel-autoplay (carousel autoplay)
- [x] react-hook-form (forms)
- [x] zod (validation)
- [x] @hookform/resolvers (form validation)
- [x] @tanstack/react-query (data fetching)
- [x] sonner (toast notifications)
- [x] usehooks-ts (utility hooks)
- [x] clsx + tailwind-merge (class utilities)
- [x] lucide-react (icons)
- [x] prettier + prettier-plugin-tailwindcss (formatting)
- [x] tailwindcss-animate (animation utilities)

### 1.3 Initialize shadcn/ui
- [x] Run shadcn init
- [x] Add button component
- [x] Add input component
- [x] Add textarea component
- [x] Add card component
- [x] Add accordion component
- [x] Add sheet component
- [x] Add form component
- [x] Add skeleton component

### 1.4 Create Folder Structure
- [x] components/layout/
- [x] components/sections/
- [x] components/sections/services/
- [x] components/features/
- [x] components/shared/
- [x] data/
- [x] hooks/
- [x] lib/
- [x] app/actions/
- [x] app/login/
- [x] app/signup/
- [x] public/images/ (with subfolders)
- [x] public/videos/
- [x] public/fonts/

### 1.5 Setup Configuration Files
- [x] Update globals.css with Axiom X design tokens
- [x] Configure custom colors (primary green, dark navy, lime accent)
- [x] Setup Google Fonts (Poppins, Alexandria, Inter)
- [x] Update layout.tsx with fonts and metadata
- [x] Create .prettierrc

### 1.6 Create Data Files
- [x] data/site-config.ts
- [x] data/navigation.ts
- [x] data/hero-slides.ts
- [x] data/stats.ts
- [x] data/services.ts
- [x] data/brand-values.ts
- [x] data/partners.ts
- [x] data/content.ts
- [x] lib/validations.ts
- [x] lib/constants.ts
- [x] hooks/use-media-query.ts

### 1.7 Migrate Assets
- [x] Copy logos to public/images/logo/
- [x] Copy backgrounds to public/images/backgrounds/
- [x] Copy partner logos to public/images/partners/
- [x] Copy icons to public/images/icons/
- [x] Copy service images to public/images/services/
- [x] Copy videos to public/videos/

### 1.8 Verify Setup
- [x] npm run build passes
- [x] No TypeScript errors
- [x] Basic page.tsx with placeholder sections

---

## Phase 2: Layout (Header + Footer) ⏳ PENDING

### 2.1 Smooth Scroll Link Component
- [ ] Create components/shared/smooth-scroll-link.tsx
- [ ] Handle anchor navigation
- [ ] Account for fixed header offset

### 2.2 Header Component
- [ ] Create components/layout/header.tsx
- [ ] Logo on left
- [ ] Nav links center (Home, Services, Why AxiomX, About, Contact)
- [ ] CTAs right (Sign Up, Login)
- [ ] Scroll detection for backdrop blur
- [ ] Responsive: hamburger menu on mobile

### 2.3 Mobile Navigation
- [ ] Create components/layout/mobile-nav.tsx
- [ ] Use shadcn Sheet component
- [ ] Slide from right
- [ ] All nav links + CTAs
- [ ] Close on link click

### 2.4 Footer Component
- [ ] Create components/layout/footer.tsx
- [ ] Company logo + description
- [ ] Quick links section
- [ ] Account links section
- [ ] Newsletter signup form
- [ ] App download placeholders
- [ ] Contact info (regions, email, phone)
- [ ] Social links
- [ ] Copyright

### 2.5 Update Layout
- [ ] Add Header to layout.tsx
- [ ] Add Footer to layout.tsx
- [ ] Update page.tsx with proper section IDs

### 2.6 Test Navigation
- [ ] Smooth scroll works for all sections
- [ ] Mobile menu opens/closes
- [ ] Header blur on scroll
- [ ] Responsive breakpoints correct

---

## Phase 3: Hero Carousel ⏳ PENDING

### 3.1 Hero Section Component
- [ ] Create components/sections/hero.tsx
- [ ] Full-width, full-viewport-height
- [ ] Setup Embla Carousel with autoplay
- [ ] 5-second intervals

### 3.2 Slide Content
- [ ] Headline text
- [ ] Subtext/description
- [ ] Two CTAs (Speak to Expert, Create Account)
- [ ] Background video/image support

### 3.3 Navigation
- [ ] Custom green navigation arrows (desktop)
- [ ] Dot indicators (mobile)
- [ ] Hide arrows on mobile
- [ ] Enable swipe gestures

### 3.4 Animations
- [ ] Framer Motion text animations
- [ ] Staggered fade-in on slide change
- [ ] Slide crossfade transitions

### 3.5 Responsive
- [ ] Stack CTAs vertically on mobile
- [ ] Adjust text sizes
- [ ] Test swipe on mobile

---

## Phase 4: Stats Bar ⏳ PENDING

### 4.1 Animated Counter Component
- [ ] Create components/shared/animated-counter.tsx
- [ ] Use @number-flow/react
- [ ] Trigger on scroll into view
- [ ] Support suffix (%, +, etc.)

### 4.2 Stats Bar Section
- [ ] Create components/sections/stats-bar.tsx
- [ ] Import stats from data file
- [ ] Grid: 4 columns desktop, 2x2 mobile
- [ ] Style matching design

### 4.3 Testing
- [ ] Numbers animate on scroll
- [ ] Animation triggers once
- [ ] Responsive grid works

---

## Phase 5: Services Section ⏳ PENDING

### 5.1 Services Desktop Component
- [ ] Create components/sections/services/services-desktop.tsx
- [ ] Left panel: vertical tabs
- [ ] Right panel: content + image
- [ ] Active indicator animation
- [ ] Framer Motion content transitions

### 5.2 Services Mobile Component
- [ ] Create components/sections/services/services-mobile.tsx
- [ ] Vertical accordion
- [ ] One item open at a time
- [ ] Image above text

### 5.3 Services Section Wrapper
- [ ] Create components/sections/services/index.tsx
- [ ] Use useIsDesktop hook
- [ ] Render appropriate component

### 5.4 Styling
- [ ] Match design colors
- [ ] Feature checkmarks
- [ ] Proper typography

---

## Phase 6: Content Sections ⏳ PENDING

### 6.1 Section Wrapper Component
- [ ] Create components/shared/section-wrapper.tsx
- [ ] Scroll animation (fade up)
- [ ] useInView trigger

### 6.2 Why Axiom X Section
- [ ] Create components/sections/why-axiom.tsx
- [ ] Headline + subheadline
- [ ] Body text
- [ ] Two CTAs
- [ ] Layout: text left, visual right (desktop)

### 6.3 Partners Section
- [ ] Create components/sections/partners.tsx
- [ ] Horizontal marquee
- [ ] Partner logos from data
- [ ] Gradient fade edges
- [ ] Pause on hover

### 6.4 Our Story Section
- [ ] Create components/sections/our-story.tsx
- [ ] Headline
- [ ] Story text
- [ ] CTA button

### 6.5 Vision & Mission Section
- [ ] Create components/sections/vision-mission.tsx
- [ ] Two cards side by side
- [ ] Icon + title + text each
- [ ] Stack on mobile

### 6.6 Brand Values Section
- [ ] Create components/sections/brand-values.tsx
- [ ] 5 values with icons
- [ ] Horizontal row (desktop)
- [ ] Horizontal scroll with snap (mobile)

### 6.7 Careers CTA Section
- [ ] Create components/sections/careers-cta.tsx
- [ ] Full-width banner
- [ ] Headline + subtext
- [ ] Two CTAs

---

## Phase 7: Contact + Tracking ⏳ PENDING

### 7.1 Contact Form Component
- [ ] Create components/features/contact-form.tsx
- [ ] Fields: Full Name, Email, Message
- [ ] React Hook Form + Zod validation
- [ ] Loading state
- [ ] Success/error toasts

### 7.2 Server Action
- [ ] Create app/actions/contact.ts
- [ ] Validate form data
- [ ] Log submission (email integration later)

### 7.3 Tracking Widget
- [ ] Create components/features/tracking-widget.tsx
- [ ] Input for tracking number
- [ ] Track button with loading
- [ ] Mock data results
- [ ] Timeline display
- [ ] Status badges

### 7.4 Contact Section
- [ ] Create components/sections/contact-section.tsx
- [ ] Form left, tracking right (desktop)
- [ ] Stack on mobile

### 7.5 Newsletter Form
- [ ] Update footer newsletter
- [ ] Zod validation
- [ ] Toast feedback

---

## Phase 8: Animations + Polish ⏳ PENDING

### 8.1 Page Load Animation
- [ ] Fade in on mount
- [ ] Stagger children

### 8.2 Magnetic Button Component
- [ ] Create components/shared/magnetic-button.tsx
- [ ] Subtle follow cursor effect

### 8.3 Hover Effects
- [ ] Buttons: scale + shadow
- [ ] Cards: lift effect
- [ ] Links: underline animation
- [ ] Service tabs: background slide

### 8.4 Micro-interactions
- [ ] Form field focus states
- [ ] Button click feedback
- [ ] Loading spinners
- [ ] Success checkmarks

### 8.5 Performance Check
- [ ] No animation jank
- [ ] Test on lower-end devices
- [ ] Lighthouse performance

---

## Phase 9: Responsive Testing ⏳ PENDING

### 9.1 Test Breakpoints
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 14)
- [ ] 768px (iPad)
- [ ] 1024px (iPad Pro / laptop)
- [ ] 1280px (Desktop)
- [ ] 1536px (Large desktop)

### 9.2 Section Checks
- [ ] Header: mobile menu, sticky behavior
- [ ] Hero: swipe, text readable, CTAs
- [ ] Stats: grid changes
- [ ] Services: accordion/tabs switch
- [ ] Why Axiom: stacks properly
- [ ] Partners: marquee smooth
- [ ] Story: text readable
- [ ] Vision/Mission: cards stack
- [ ] Values: horizontal scroll
- [ ] Careers: full-width good
- [ ] Contact: forms usable
- [ ] Footer: single column

### 9.3 Touch Interactions
- [ ] Tap targets min 44px
- [ ] Carousel swipe smooth
- [ ] Horizontal scroll sections
- [ ] No hover-only interactions

---

## Phase 10: Final Review ⏳ PENDING

### 10.1 Code Cleanup
- [ ] Remove console.logs
- [ ] Remove unused imports
- [ ] Remove commented code
- [ ] Run Prettier

### 10.2 Accessibility
- [ ] All images have alt text
- [ ] Form labels associated
- [ ] Color contrast WCAG AA
- [ ] Keyboard navigation
- [ ] Focus states visible

### 10.3 SEO
- [ ] Page title set
- [ ] Meta description
- [ ] OG tags
- [ ] Semantic HTML

### 10.4 Performance
- [ ] Images optimized
- [ ] Fonts optimized
- [ ] No layout shift
- [ ] Bundle size check

### 10.5 Final Build
- [ ] npm run build passes
- [ ] Test production locally
- [ ] All pages render

---

## Notes & Issues

### Known Issues
- None currently

### Pending Decisions
- Tracking API endpoint (client to provide)
- Login/Signup app URLs (client to provide)
- App store download links (client to provide)

### Asset Notes
- video-2.mp4 is 33.9MB - consider compression
- member-1.png is 2.1MB - needs optimization

---

## Git Commits Log

| Date | Commit | Description |
|------|--------|-------------|
| 2025-01-16 | TBD | Phase 1: Project Setup Complete |

---

*This tracker is updated as development progresses. Check the status column for current progress.*
