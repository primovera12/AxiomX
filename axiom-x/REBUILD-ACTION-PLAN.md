# Axiom X Website Rebuild - Detailed Action Plan

## Goal: Exact 1:1 Copy of PDF Design

**Primary Reference:** `docs/Full Website Design.pdf` - THE SINGLE SOURCE OF TRUTH
**Secondary Reference:** `Old AxiomX/index.html` + `Old AxiomX/assets/css/style.css`
**Tech Stack:** Next.js 15 + Tailwind CSS 4 + TypeScript

---

## Design Specifications

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Green | `#53ac70` | Buttons, links, accents |
| Dark Navy | `#19342c` | Dark buttons, footer elements |
| Forest Green | `#3f7537` | Secondary green accents |
| Accent Lime | `#d4fb50` | Highlights, tags, "X" in logo |
| Light Gray BG | `#ececec` | Section backgrounds |
| Form Input Green | `#519b66` | Form field backgrounds |

### Typography
| Font | Usage | Weights |
|------|-------|---------|
| Poppins | Body text | 400, 500, 600 |
| Alexandria | Headings | 600, 700 |
| Inter | Some UI elements | 400, 500, 600 |
| Aloevera Display | Service tags | Regular |

### Layout Specs
- Max container width: 1250px
- Section vertical padding: 80px
- Border radius: 15px (cards), 20px (large cards), 24px (sections)

---

## Phase 1: Setup & Assets

### Tasks
- [x] Copy all images from `Old AxiomX/assets/img/` to `axiom-x/public/images/`
- [ ] Copy videos from `Old AxiomX/assets/video/` to `axiom-x/public/videos/`
- [ ] Copy fonts from `Old AxiomX/assets/fonts/` to `axiom-x/public/fonts/`
- [ ] Update `tailwind.config.ts` with exact color values
- [ ] Configure custom fonts in `globals.css`
- [ ] Reset `PROGRESS-TRACKER.md`

### Files to Modify
- `axiom-x/tailwind.config.ts`
- `axiom-x/app/globals.css`
- `axiom-x/PROGRESS-TRACKER.md`

---

## Phase 2: Core Layout Components

### Header (Exact Match to PDF)
**Location:** `components/layout/header.tsx`

**Elements:**
- Logo: 120px width, links to home
- Navigation: Home, Services, Why AxiomX, Contact, About
- CTA Button: "Let's Talk" (green, pill shape, 124px min-width)
- Mobile: Hamburger menu with slide-out drawer

**PDF Reference Points:**
- Header padding: 25px vertical
- Nav gap: 40px between items
- Button: `#52ac70` background, white text, 50px border-radius

### Footer (Exact Match to PDF)
**Location:** `components/layout/footer.tsx`

**Elements:**
- Logo + Subscribe section (left column)
- Account links (middle column)
- Quick Links (middle column)
- Download App + Social icons (right column)
- Copyright bar at bottom

---

## Phase 3: Hero & Stats

### Hero Section
**Location:** `components/sections/hero.tsx`

**Elements:**
- Video background (640px height, 15px border-radius)
- Dark gradient overlay (linear-gradient 90deg)
- Headline: "Are you Searching for X?" (X in lime `#d4fb50`)
- Description text (max-width 440px)
- CTA: "Speak to an Expert" button
- Carousel with navigation arrows (green squares, 70x70px)

**Animations:**
- Slide fade transition (0.8s)
- Text stagger animation (h1: 0.15s, description: 0.3s, buttons: 0.45s)

### Service Snapshot Card
**Location:** `components/sections/snapshot-card.tsx`

**Elements:**
- Position: overlapping hero (-75px margin-top)
- X logo icon (70px width)
- "Service Snapshot" title
- Description text
- "See more" link with arrow icon

### Stats Bar
**Location:** `components/sections/stats-bar.tsx`

**Stats (8 items in grid):**
1. 20+ Years Operational Excellence
2. 2M+ Orders/Year Delivered
3. 98% SLA Achievement
4. 160K+ Technical Cases Resolutions
5. 99% Inventory Accuracy
6. 5 ISO Certifications
7. 7 Regional Network Hubs
8. 30 Sec Response Customer Support

**Features:**
- Animated counter (count up on scroll)
- Green numbers (`#53ac71`)
- 50px font size for numbers

---

## Phase 4: Partners & Why Axiom

### Partners Section
**Location:** `components/sections/partners.tsx`

**Elements:**
- Title: "BE A PART OF OUR PARTNERS" (28px, letter-spacing 3px)
- Gray background (`#ececec`)
- Auto-scrolling logo carousel
- 15 partner logos with two size classes:
  - `logo-long`: max-height 45px
  - `logo-box`: max-height 70px

### Why Axiom X Section
**Location:** `components/sections/why-axiom.tsx`

**Elements:**
- Carousel with background image (bg-2.jpg)
- Height: 700px, border-radius 20px
- "Why Axiom x?" title (italic)
- Description card (dark background `#373737`)
- 2 feature cards with icons
- Bottom note text
- Navigation arrows above section

---

## Phase 5: Services & Story

### Our Services Section
**Location:** `components/sections/services.tsx`

**Elements:**
- Background image (services-bg.jpg)
- "Our Services" title with lime underline
- Accordion with 6 services:
  1. Last Mile Delivery
  2. Warehousing & Inventory Management
  3. Call Center Support
  4. Back Office Services
  5. Value-Added Services (VAS)
  6. Upselling Revenue Programs
- X-logo indicator on active item
- Service tags with lime background (`#d4fb50`)
- Custom font (Aloevera) for tags

### Our Story Section
**Location:** `components/sections/our-story.tsx`

**Elements:**
- Green background (`#53ac71`)
- Two columns: Title left, Content right
- "Read full story" button (white, pill shape)

---

## Phase 6: Vision & Brand Values

### Vision/Mission Section
**Location:** `components/sections/vision-mission.tsx`

**Elements:**
- Full-width background image (vission.jpg)
- Dark overlay (40% opacity)
- Vision + Mission text blocks
- "READ MORE" button (forest green `#3f7537`)
- "CAREERS" button (white)
- Play button for video (140px)

### Brand Values Section
**Location:** `components/sections/brand-values.tsx`

**Elements:**
- Title: "BRAND VALUES" (green text `#529b66`)
- Dark video play button on left (`#19342c`)
- 5 values in grid with SVG icons:
  1. Precision
  2. Agility
  3. Reliability
  4. Support
  5. Innovation
- Hover tooltips (lime pill `#d4fb50`, 580px width)

---

## Phase 7: Careers & Contact

### Careers Section
**Location:** `components/sections/careers.tsx`

**Elements:**
- Two columns: Info left, Image right
- "Careers" title (55px)
- "Build the future of operations." subtitle
- Description text
- "Join the X Team" button (dark, 440px width, 84px height)
- Team image with background (team-bg.jpg)

### Contact Section
**Location:** `components/sections/contact.tsx`

**Elements:**
- "Contact Us" title (55px)
- "Let's talk scale." subtitle
- Form fields (green background `#519b66`, pill shape):
  - Your Name (90px height)
  - Your Mail (90px height)
  - Message (250px height, 24px border-radius)
- Submit button (dark `#19342c`, 440px width, 94px height)
- Contact info pills: UAE | KSA | Oman | Kuwait, email, phone

---

## Phase 8: Shipment Tracking

### Tracking Section
**Location:** `components/sections/tracking.tsx`

**Elements:**
- Green header card (`#519b66`, 24px border-radius)
- "Real-time Tracking for your Shipments" title
- Tracking number input field
- Delivery bike image (positioned bottom-right, overflowing)
- Tracking table with columns:
  - Order ID
  - Date of Loading
  - Category
  - Route
  - Status (color-coded)
- Statistics bar chart (Chart.js style)
- Filter buttons: 1D, 1M, 3M, 1Y

---

## Verification Checklist

After each section, verify against PDF:
- [ ] Layout matches exactly
- [ ] Colors are correct
- [ ] Typography is correct (font, size, weight)
- [ ] Spacing is correct
- [ ] Border radius matches
- [ ] Hover states work
- [ ] Animations are smooth
- [ ] Responsive behavior is correct

---

## File Structure

```
axiom-x/
├── app/
│   ├── globals.css (fonts, custom CSS)
│   ├── page.tsx (compose all sections)
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── snapshot-card.tsx
│   │   ├── stats-bar.tsx
│   │   ├── partners.tsx
│   │   ├── why-axiom.tsx
│   │   ├── services.tsx
│   │   ├── our-story.tsx
│   │   ├── vision-mission.tsx
│   │   ├── brand-values.tsx
│   │   ├── careers.tsx
│   │   ├── contact.tsx
│   │   └── tracking.tsx
│   └── ui/ (reusable components)
├── public/
│   ├── images/ (all images from old project)
│   ├── videos/ (video backgrounds)
│   └── fonts/ (Aloevera font)
└── tailwind.config.ts
```

---

## Progress Tracking

| Phase | Section | Status | PDF Match |
|-------|---------|--------|-----------|
| 1 | Setup & Assets | In Progress | - |
| 2 | Header | Pending | |
| 2 | Footer | Pending | |
| 3 | Hero | Pending | |
| 3 | Snapshot Card | Pending | |
| 3 | Stats Bar | Pending | |
| 4 | Partners | Pending | |
| 4 | Why Axiom X | Pending | |
| 5 | Services | Pending | |
| 5 | Our Story | Pending | |
| 6 | Vision/Mission | Pending | |
| 6 | Brand Values | Pending | |
| 7 | Careers | Pending | |
| 7 | Contact | Pending | |
| 8 | Tracking | Pending | |
