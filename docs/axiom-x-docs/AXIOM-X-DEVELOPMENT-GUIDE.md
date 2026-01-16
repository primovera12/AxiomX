# Axiom X Website — Complete Development Guide

> **For Claude Code:** This is the master guide for building the Axiom X website. Read this document first, then proceed phase by phase. The design PDF and assets will be in the project folder.

---

## Project Overview

**Client:** Axiom X  
**Type:** Single-page marketing website with anchor navigation  
**Industry:** 3PL / Logistics / Warehousing (B2B)  
**Target Markets:** UAE, KSA, Oman, Kuwait (Middle East)

### Tech Stack

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

## Site Structure

This is a **single-page website** where navigation links scroll to sections.

### Sections (in order)

1. **Header** — Fixed navigation with anchor links
2. **Hero** — Full-width carousel with slides
3. **Stats Bar** — Key metrics (2M+ orders, 99.9% accuracy, etc.)
4. **Services** — Custom accordion/tabs component
5. **Why Axiom X** — Value proposition section
6. **Partners** — Logo marquee
7. **Our Story** — Company history (1997 to AI era)
8. **Vision & Mission** — Two cards side by side
9. **Brand Values** — 5 values with icons
10. **Careers CTA** — Join the team section
11. **Contact** — Form + tracking widget
12. **Footer** — Links, newsletter, app download

### Navigation Anchors

```
Home        → #hero
Services    → #services
Why AxiomX  → #why-axiom
About       → #our-story
Contact     → #contact
```

### Additional Pages (placeholders)

- `/login` — Placeholder login page
- `/signup` — Placeholder signup page

---

## Design Specifications

> **See `DESIGN-SYSTEM.md` for complete design tokens and Tailwind configuration.**

### Color Palette

```css
/* Primary Colors */
--primary-green: #53ac70;    /* Emerald green - CTAs, buttons, accents */
--primary-dark: #19342c;     /* Dark navy - secondary buttons, dark sections */
--forest-green: #3f7537;     /* Hover states */
--accent-lime: #d4fb50;      /* Lime/neon yellow - highlights, active states */

/* Neutrals */
--white: #FFFFFF;
--black: #000000;
--gray-light: #f5f7f6;       /* Card backgrounds */
--gray-medium: #ececec;      /* Partners section background */
--gray-dark: #373737;        /* Muted text */

/* Form & Status Colors */
--form-input-bg: #519b66;    /* Contact form inputs */
--status-transit: #db5e54;   /* In Transit badge */
--status-shipped: #edc771;   /* Shipped badge */
--status-delivered: #66c5a6; /* Delivered badge */
```

### Typography

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
```

- **Headings:** Alexandria (variable weight 100-900)
- **Body:** Poppins (default sans-serif)
- **Content:** Inter (for longer text blocks)
- **Display:** Aloevera Display (service tags - self-host if used)

**Type Scale:**
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero H1 | Poppins | 50px (36px mobile) | 600 |
| Section Title | Alexandria | 55px (36px mobile) | 700 |
| Service Title | Alexandria | 36px (24px mobile) | 600 |
| Body | Poppins | 16px | 400 |

### Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Default | 0-639px | Mobile |
| `sm` | 640px+ | Large phones |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Desktop (primary flip point) |
| `xl` | 1280px+ | Large desktop |
| `2xl` | 1536px+ | Extra large |

---

## Component Specifications

### 1. Header

**Desktop:**
- Logo on left
- Nav links center: Home, Services, Why AxiomX, Contact, About
- CTAs right: Sign Up, Login
- Becomes sticky/fixed on scroll with backdrop blur

**Mobile:**
- Logo on left
- Hamburger menu on right
- Slide-in drawer from right
- All nav items + CTAs in drawer

**Animations:**
- Backdrop blur + slight background on scroll
- Smooth transition when scrolling

---

### 2. Hero Carousel

**Structure:**
- Full-width carousel
- Green navigation arrows on sides (visible in design)
- Each slide contains:
  - Headline text
  - Subtext/description
  - Two CTAs: "Speak to an Expert" + "Create an Account"

**Desktop:**
- Side arrows visible for navigation
- Autoplay with pause on hover

**Mobile:**
- Hide arrows
- Enable swipe gestures
- Show dot indicators at bottom
- Stack CTAs vertically

**Animations:**
- Slide transition: Fade + subtle scale
- Text elements: Staggered fade-in on slide change
- Autoplay: 5-6 second intervals

**Technical:**
- Use Embla Carousel
- Framer Motion for text animations
- Build with one slide, duplicate structure for additional slides

---

### 3. Stats Bar

**Content:**
| Stat | Value |
|------|-------|
| Yearly Orders Delivered | 2M+ |
| Activated Monthly Upsells | 600k+ |
| SLA Delivery Rate | 98% |
| Tech Support Cases Resolved | 140K |

Plus:
- Inventory Accuracy: 99.9%
- Facilities: 29+

**Desktop:** 4-6 stats in horizontal row

**Mobile:** 2x2 grid

**Animations:**
- Numbers count up on scroll into view
- Use `@number-flow/react` for smooth counting
- Trigger once when section enters viewport

---

### 4. Services Section (Custom Accordion/Tabs)

**This is the most complex component.**

**Services List:**
1. Warehousing & Inventory
2. Call Center Support
3. Back Office Services
4. Value-Added Services (VAS)
5. Upselling Revenue Programs

**Each service contains:**
- Title
- Description text
- Bullet points with features
- Image

**Example - Warehousing & Inventory:**
- 29 warehouses, 122K+ sqft capacity
- 99.9% inventory accuracy
- Real-time dashboards via WMS integrations
- Modular zoning, temperature-controlled environments

---

**Desktop Layout:**
```
┌─────────────────┬──────────────────────────────┐
│                 │                              │
│  Service 1  ←── │    Image + Content           │
│  Service 2      │    for selected service      │
│  Service 3      │                              │
│  Service 4      │                              │
│  Service 5      │                              │
│                 │                              │
└─────────────────┴──────────────────────────────┘
```
- Left: Vertical list of service titles (like tabs)
- Right: Content panel showing selected service details + image
- Active service highlighted

**Mobile Layout:**
- Convert to true vertical accordion
- Tap title → content expands below
- Only one service open at a time
- Image above text content

**Animations:**
- Desktop: Crossfade content on selection change
- Mobile: Height animation on expand/collapse
- Active indicator slides to selected item

**Technical Approach:**
```tsx
// Use separate components for desktop/mobile
const ServicesSection = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  return isDesktop ? <ServicesDesktop /> : <ServicesMobile />;
};
```

---

### 5. Why Axiom X Section

**Content:**
- Headline: "Why Axiom x?"
- Subhead: "You don't just need to outsource. You need to outsmart, outscale, and out-deliver."
- Description about AI-enhanced ecosystem
- CTAs: "Speak to an Expert" + "Create an Account"

**Desktop:** Text + visual side by side
**Mobile:** Stack vertically

---

### 6. Partners Section

**Content:** Partner company logos

**Layout:** Horizontal infinite scroll (marquee)

**Technical:**
- Use Embla Carousel with loop
- Or CSS animation for simple marquee
- Pause on hover optional

**Mobile:** Same behavior, slightly smaller logos

---

### 7. Our Story Section

**Content:**
- Headline: "OUR STORY: FROM 1997 TO THE AI ERA"
- Text: "We started in 1997 as Axiom x Telecom — building the Middle East's largest mobility distribution engine..."
- CTA: "Read full story"

**Layout:** Text with possible timeline or visual element

---

### 8. Vision & Mission

**Content:**
- **Vision:** "To be the unseen force powering the next era of business operations."
- **Mission:** "To simplify, enable, and scale modern operations through intelligent, AI-driven services."

**Layout:** Two cards side by side (desktop), stacked (mobile)

---

### 9. Brand Values

**Values:**
1. Precision
2. Agility
3. Reliability
4. Support
5. Innovation

**Desktop:** 5 items in horizontal row with icons

**Mobile:** Horizontal scroll with snap points

**Animations:** Subtle hover effects on each value

---

### 10. Careers CTA

**Content:**
- Headline: "Build the future of operations."
- Subhead: "We're looking for operators, strategists, and technologists..."
- CTAs: "Join the X Team", "READ MORE CAREERS"

**Layout:** Full-width banner section

---

### 11. Contact Section

**Contains two main elements:**

#### Contact Form
- Fields: Full Name, Email, Message
- Validation with Zod
- Submit via Server Action
- Success/error toast notifications

#### Tracking Widget
- Input: Tracking Number
- Button: Track
- Results display (build UI, API integration later)

**Mobile:** Stack form and tracking widget vertically

---

### 12. Footer

**Sections:**
- Company info + logo
- Quick links: Privacy Policy, Terms of Use, FAQ, Contact
- Account links: My Account, Login/Register
- Newsletter signup form
- App download section (placeholders)
- Social links
- Copyright

**Contact Info:**
- Regions: UAE | KSA | Oman | Kuwait
- Email: info@axiomxgroup.com
- Phone: +971 4 3101 010

**Mobile:** Single column, collapsible sections optional

---

## Animation Specifications

### Global Animations

| Element | Animation | Trigger |
|---------|-----------|---------|
| Sections | Fade up + slight scale | Scroll into view |
| Stats numbers | Count up | Scroll into view (once) |
| CTAs | Magnetic hover effect | Hover |
| Page load | Staggered fade in | On mount |

### Section-Specific

| Section | Animation |
|---------|-----------|
| Hero | Slide crossfade + text stagger |
| Services | Content crossfade (desktop), height expand (mobile) |
| Partners | Infinite horizontal scroll |
| Brand Values | Hover lift + glow |

### Implementation

```tsx
// Reusable scroll animation wrapper
const SectionWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
```

---

## Form Handling

### Contact Form Schema

```typescript
import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

### Newsletter Schema

```typescript
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});
```

### Server Actions

Create server actions in `app/actions/` for form submissions. Use Resend for email delivery (or mock for now).

---

## Tracking Widget

### Mock Data Structure

```typescript
interface TrackingResult {
  trackingNumber: string;
  status: 'in_transit' | 'delivered' | 'pending' | 'exception';
  currentLocation: string;
  estimatedDelivery: string;
  timeline: {
    date: string;
    location: string;
    status: string;
  }[];
}
```

### Implementation

- Build complete UI with mock data
- Use React Query for data fetching
- Show loading skeleton during fetch
- Display results in expandable panel
- API endpoint will be provided by client later

---

## File Structure

```
axiom-x/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page (single page)
│   ├── login/
│   │   └── page.tsx            # Placeholder
│   ├── signup/
│   │   └── page.tsx            # Placeholder
│   ├── globals.css             # Global styles
│   └── actions/
│       ├── contact.ts          # Contact form action
│       └── newsletter.ts       # Newsletter action
│
├── components/
│   ├── ui/                     # shadcn components
│   │
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── mobile-nav.tsx
│   │   └── footer.tsx
│   │
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── stats-bar.tsx
│   │   ├── services/
│   │   │   ├── index.tsx
│   │   │   ├── services-desktop.tsx
│   │   │   └── services-mobile.tsx
│   │   ├── why-axiom.tsx
│   │   ├── partners.tsx
│   │   ├── our-story.tsx
│   │   ├── vision-mission.tsx
│   │   ├── brand-values.tsx
│   │   ├── careers-cta.tsx
│   │   └── contact-section.tsx
│   │
│   ├── features/
│   │   ├── contact-form.tsx
│   │   ├── newsletter-form.tsx
│   │   └── tracking-widget.tsx
│   │
│   └── shared/
│       ├── section-wrapper.tsx     # Scroll animation wrapper
│       ├── animated-counter.tsx    # Number counting component
│       ├── magnetic-button.tsx     # Hover effect button
│       └── smooth-scroll-link.tsx  # Anchor navigation
│
├── lib/
│   ├── utils.ts                # Utility functions (cn, etc.)
│   ├── validations.ts          # Zod schemas
│   └── constants.ts            # Site data, navigation, etc.
│
├── hooks/
│   ├── use-media-query.ts
│   └── use-scroll-animation.ts
│
├── data/
│   ├── services.ts             # Services content
│   ├── stats.ts                # Stats data
│   └── navigation.ts           # Nav links
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── services/
│   │   └── partners/
│   └── fonts/                  # If using custom fonts
│
├── docs/                       # This documentation
│   ├── AXIOM-X-DEVELOPMENT-GUIDE.md
│   ├── PHASE-TASKS.md
│   └── COMPONENT-SPECS.md
│
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Development Phases

See `PHASE-TASKS.md` for detailed task breakdown.

**Summary:**

| Phase | Focus | Estimated Effort |
|-------|-------|------------------|
| 1 | Project Setup | 1-2 hours |
| 2 | Layout (Header + Footer) | 2-3 hours |
| 3 | Hero Carousel | 2-3 hours |
| 4 | Stats Bar | 1 hour |
| 5 | Services Section | 3-4 hours |
| 6 | Content Sections | 2-3 hours |
| 7 | Contact + Tracking | 2-3 hours |
| 8 | Animations + Polish | 2-3 hours |
| 9 | Responsive Testing | 1-2 hours |
| 10 | Final Review | 1 hour |

---

## Getting Started

**For Claude Code — Start Here:**

1. Read this entire document
2. Read `PHASE-TASKS.md` for detailed tasks
3. Begin with Phase 1: Project Setup
4. After each phase, verify the build works before proceeding
5. Reference the design PDF in the project folder for visual details

**Initial Command:**
```bash
# Start Phase 1
# See PHASE-TASKS.md → Phase 1 for detailed steps
```

---

## Notes

- Client will provide tracking API later — build frontend with mock data
- Login/Signup are placeholders — client has existing app
- App download links pending — use placeholder buttons
- Extract exact colors and fonts from design PDF
- Prioritize desktop first, then mobile responsiveness

---

*Last Updated: January 2025*
*Project: Axiom X Website*
*Stack: Next.js 16 + Tailwind 4 + shadcn*
