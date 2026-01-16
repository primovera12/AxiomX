# CLAUDE CODE: START HERE

> **Read this file first before doing anything else.**

---

## Project: Axiom X Website

You are building a single-page marketing website for **Axiom X**, a 3PL/logistics company operating in the Middle East (UAE, KSA, Oman, Kuwait).

---

## Documentation Files

Read these files in order:

1. **`AXIOM-X-DEVELOPMENT-GUIDE.md`** — Master overview of the entire project
2. **`DESIGN-SYSTEM.md`** — Complete color palette, typography, and Tailwind config
3. **`ASSET-MIGRATION.md`** — Asset inventory and migration guide from Old AxiomX
4. **`PHASE-TASKS.md`** — Step-by-step task list with detailed subtasks
5. **`COMPONENT-SPECS.md`** — Code examples and component specifications
6. **`DATA-FILES.md`** — Data templates and TypeScript interfaces

---

## Assets

### Design Reference
- **`../Full Website Design.pdf`** — The client's website design file

### Available Assets (from Old AxiomX)
The `Old AxiomX/assets/` folder contains reusable assets from the previous implementation:

- **Images:** 30+ files including logos, backgrounds, partner logos (20), icons
- **Videos:** 2 hero background videos (video-1.mov, video-2.mp4)
- **Fonts:** Alexandria (6 weights), Aloevera Display

See **`ASSET-MIGRATION.md`** for complete inventory and migration instructions.

### Quick Design Reference
| Token | Value |
|-------|-------|
| Primary Green | `#53ac70` |
| Dark Navy | `#19342c` |
| Accent Lime | `#d4fb50` |
| Body Font | Poppins |
| Heading Font | Alexandria |

See **`DESIGN-SYSTEM.md`** for complete color palette and typography.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui |
| Animations | Framer Motion |
| Carousel | Embla Carousel |
| Forms | React Hook Form + Zod |
| Data Fetching | TanStack React Query |
| Icons | Lucide React |
| Toasts | Sonner |

---

## How to Proceed

### Step 1: Read Documentation
Read all three markdown files completely before writing any code.

### Step 2: Start Phase 1
Go to `PHASE-TASKS.md` and begin with **Phase 1: Project Setup**.

### Step 3: Build Sequentially
Complete each phase fully before moving to the next. Verify the build works after each phase.

### Step 4: Reference Design
Always check the design PDF when building components. Extract exact colors, fonts, and spacing.

### Step 5: Test Responsive
Test responsive behavior at each phase, not just at the end.

---

## Quick Reference

### Site Structure (Single Page with Anchors)

```
#hero        → Hero Carousel
#services    → Services Accordion/Tabs
#why-axiom   → Why Axiom X
#our-story   → Our Story + Vision/Mission
#contact     → Contact Form + Tracking Widget
```

### Key Components

| Component | Complexity | Notes |
|-----------|------------|-------|
| Hero Carousel | High | Embla + Framer Motion, custom arrows |
| Services Section | High | Different layouts for desktop (tabs) vs mobile (accordion) |
| Stats Bar | Medium | Animated counters with scroll trigger |
| Tracking Widget | Medium | Mock API for now, real integration later |
| Contact Form | Medium | React Hook Form + Zod + Server Actions |

### Mobile Breakpoint

Primary flip point: `lg` (1024px)
- Below 1024px = Mobile/Tablet layout
- 1024px and above = Desktop layout

---

## Important Notes

1. **This is a single-page website** — Navigation links scroll to sections, not separate pages
2. **Login/Signup are placeholders** — Client has an existing app
3. **Tracking API comes later** — Build frontend with mock data
4. **Extract design details** — Colors, fonts, exact spacing from the PDF
5. **Use placeholder images** — If assets aren't provided yet

---

## Commands to Remember

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Add shadcn component
npx shadcn@latest add [component-name]

# Format code
npx prettier --write .
```

---

## When You're Stuck

1. Check `COMPONENT-SPECS.md` for code examples
2. Reference the design PDF for visual details
3. Look at shadcn/ui documentation for component APIs
4. Check Framer Motion docs for animation patterns
5. Check Embla Carousel docs for carousel configuration

---

## Success Criteria

The website is complete when:

- [ ] All 10 phases in `PHASE-TASKS.md` are done
- [ ] Site works on mobile, tablet, and desktop
- [ ] All animations are smooth (no jank)
- [ ] Forms validate and show feedback
- [ ] Tracking widget shows mock results
- [ ] Navigation scrolls smoothly to sections
- [ ] Production build passes without errors

---

**Now go read `AXIOM-X-DEVELOPMENT-GUIDE.md` and then start Phase 1!**
