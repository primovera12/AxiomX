# Axiom X — Phase-by-Phase Task List

> **For Claude Code:** Execute these phases in order. Complete each phase fully before moving to the next. Verify the build works after each phase.

---

## Phase 1: Project Setup

### 1.1 Initialize Next.js Project

```bash
npx create-next-app@latest axiom-x --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
cd axiom-x
```

### 1.2 Install Dependencies

```bash
# Animations & Interactions
npm install framer-motion react-intersection-observer @number-flow/react embla-carousel-react embla-carousel-autoplay

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Data Fetching
npm install @tanstack/react-query

# UI Enhancements
npm install sonner

# Utilities
npm install usehooks-ts clsx tailwind-merge

# Email (optional for now)
npm install resend

# Dev Dependencies
npm install -D prettier prettier-plugin-tailwindcss
```

### 1.3 Initialize shadcn/ui

```bash
npx shadcn@latest init
```

Choose these options:
- Style: Default
- Base color: Slate (or extract from design)
- CSS variables: Yes

### 1.4 Add shadcn Components

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add card
npx shadcn@latest add accordion
npx shadcn@latest add sheet
npx shadcn@latest add form
npx shadcn@latest add toast
npx shadcn@latest add skeleton
```

### 1.5 Create Folder Structure

Create these directories:
```
components/
├── layout/
├── sections/
│   └── services/
├── features/
└── shared/

lib/
hooks/
data/
docs/
public/
└── images/
    ├── services/
    └── partners/
```

### 1.6 Setup Utility Files

**lib/utils.ts** (should exist from shadcn):
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**lib/constants.ts:**
```typescript
export const siteConfig = {
  name: "Axiom X",
  description: "Your operational growth engine",
  contact: {
    email: "hello@Axiomx.com",
    phone: "+971 4 123 4567",
    regions: ["UAE", "KSA", "Oman", "Kuwait"],
  },
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Why AxiomX", href: "#why-axiom" },
  { label: "About", href: "#our-story" },
  { label: "Contact", href: "#contact" },
];
```

### 1.7 Configure Tailwind

Update `tailwind.config.ts` with custom colors extracted from design:
```typescript
// Add custom colors, fonts, and animations
// Extract exact values from design PDF
```

### 1.8 Setup Prettier

Create `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 1.9 Verify Setup

```bash
npm run dev
```

Confirm the app runs at `http://localhost:3000`.

**✓ Phase 1 Complete**

---

## Phase 2: Layout (Header + Footer)

### 2.1 Create Smooth Scroll Link Component

**components/shared/smooth-scroll-link.tsx:**
```typescript
"use client";

import { cn } from "@/lib/utils";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SmoothScrollLink({ 
  href, 
  children, 
  className,
  onClick 
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
```

### 2.2 Create Header Component

**components/layout/header.tsx:**

Requirements:
- Fixed position at top
- Logo on left
- Nav links center (use navLinks from constants)
- CTAs right: "Sign Up" (outlined), "Login" (filled)
- Backdrop blur + background on scroll (use useState + useEffect)
- Responsive: hide nav links on mobile, show hamburger

Implementation checklist:
- [ ] Import navLinks from constants
- [ ] Create scroll detection for background change
- [ ] Style nav links with hover states
- [ ] Create CTA buttons (use shadcn Button)
- [ ] Add hamburger button for mobile (visible below lg breakpoint)
- [ ] Wire up SmoothScrollLink for navigation

### 2.3 Create Mobile Navigation

**components/layout/mobile-nav.tsx:**

Requirements:
- Use shadcn Sheet component
- Slide in from right
- Full navigation links
- Sign Up and Login CTAs
- Close on link click
- Backdrop overlay

Implementation checklist:
- [ ] Import Sheet from shadcn
- [ ] Pass isOpen and onClose props
- [ ] Map through navLinks
- [ ] Add CTAs at bottom
- [ ] Close sheet when link clicked

### 2.4 Create Footer Component

**components/layout/footer.tsx:**

Requirements:
- Company logo + description
- Quick links section
- Account links section
- Newsletter signup form (email input + button)
- App download section (placeholder buttons)
- Contact info (regions, email, phone)
- Copyright line

Layout:
- Desktop: Multi-column grid
- Mobile: Single column stack

Implementation checklist:
- [ ] Create responsive grid layout
- [ ] Add logo and company description
- [ ] Map link sections
- [ ] Create newsletter form (just UI for now)
- [ ] Add app store badges (placeholder images)
- [ ] Add contact information
- [ ] Add copyright with current year

### 2.5 Update Root Layout

**app/layout.tsx:**

```typescript
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
```

### 2.6 Create Placeholder Home Page

**app/page.tsx:**

```typescript
export default function Home() {
  return (
    <div className="pt-20"> {/* Account for fixed header */}
      <section id="hero" className="min-h-screen">Hero</section>
      <section id="services">Services</section>
      <section id="why-axiom">Why AxiomX</section>
      <section id="our-story">Our Story</section>
      <section id="contact">Contact</section>
    </div>
  );
}
```

### 2.7 Test Navigation

- [ ] Verify smooth scroll works for all sections
- [ ] Test mobile menu opens/closes
- [ ] Verify header blur on scroll
- [ ] Check responsive breakpoints

**✓ Phase 2 Complete**

---

## Phase 3: Hero Carousel

### 3.1 Create Hero Section Component

**components/sections/hero.tsx:**

Requirements:
- Full-width, full-viewport-height carousel
- Embla Carousel with autoplay
- Custom navigation arrows (green, as in design)
- Slide content: headline, subtext, two CTAs
- Dot indicators for mobile

### 3.2 Setup Embla Carousel

```typescript
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef, emblaApi] = useEmblaCarousel(
  { loop: true },
  [Autoplay({ delay: 5000, stopOnInteraction: false })]
);
```

### 3.3 Create Slide Data

**data/hero-slides.ts:**
```typescript
export const heroSlides = [
  {
    id: 1,
    headline: "From first mile to final revenue touchpoint, we power the unseen.",
    subtext: "Your operations have untapped potential. Axiom X helps you find it and turn it into execution, insight, and growth.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
  },
  // Add more slides with similar structure
  // Use placeholder content until client provides
];
```

### 3.4 Create Navigation Arrows

Custom styled arrows matching design (green color):
- Left arrow: positioned absolute left
- Right arrow: positioned absolute right
- Hidden on mobile (use `hidden lg:flex`)

### 3.5 Create Dot Indicators

- Visible on mobile only (`flex lg:hidden`)
- Active dot highlighted
- Positioned at bottom of carousel

### 3.6 Add Text Animations

Using Framer Motion:
```typescript
// Stagger children on slide change
<motion.div
  key={currentSlide}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ staggerChildren: 0.1 }}
>
  <motion.h1>...</motion.h1>
  <motion.p>...</motion.p>
  <motion.div>CTAs</motion.div>
</motion.div>
```

### 3.7 Style CTAs

- Primary: Filled green button
- Secondary: Outlined button
- Stack vertically on mobile

### 3.8 Implementation Checklist

- [ ] Setup Embla with autoplay
- [ ] Create slide structure
- [ ] Add custom navigation arrows
- [ ] Add dot indicators (mobile)
- [ ] Implement Framer Motion animations
- [ ] Style CTAs matching design
- [ ] Test responsive behavior
- [ ] Test swipe on mobile
- [ ] Verify autoplay pauses on hover

**✓ Phase 3 Complete**

---

## Phase 4: Stats Bar

### 4.1 Create Stats Data

**data/stats.ts:**
```typescript
export const stats = [
  { value: 2000000, suffix: "+", label: "Yearly Orders Delivered" },
  { value: 600000, suffix: "+", label: "Activated Monthly Upsells" },
  { value: 98, suffix: "%", label: "SLA Delivery Rate" },
  { value: 140000, suffix: "", label: "Tech Support Cases Resolved" },
];

export const additionalStats = [
  { value: 99.9, suffix: "%", label: "Inventory Accuracy" },
  { value: 29, suffix: "+", label: "Facilities" },
];
```

### 4.2 Create Animated Counter Component

**components/shared/animated-counter.tsx:**

Using `@number-flow/react`:
```typescript
"use client";

import NumberFlow from "@number-flow/react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setDisplayValue(value);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      <NumberFlow value={displayValue} />
      {suffix}
    </span>
  );
}
```

### 4.3 Create Stats Bar Section

**components/sections/stats-bar.tsx:**

Requirements:
- Background color matching design
- Grid layout: 4 columns on desktop, 2x2 on mobile
- Each stat: large number + label below
- Numbers animate on scroll

Implementation checklist:
- [ ] Import stats data
- [ ] Create responsive grid
- [ ] Use AnimatedCounter for each stat
- [ ] Style matching design (fonts, colors, spacing)
- [ ] Add subtle dividers between stats (if in design)

**✓ Phase 4 Complete**

---

## Phase 5: Services Section (Complex)

### 5.1 Create Services Data

**data/services.ts:**
```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string; // path to image
}

export const services: Service[] = [
  {
    id: "warehousing",
    title: "Warehousing & Inventory",
    description: "Storage built for action, not stagnation. From inventory intelligence to optimized flow, our fulfillment-first warehouses are ready for your growth — and your complexity.",
    features: [
      "29 warehouses, 122K+ sqft capacity",
      "99.9% inventory accuracy",
      "Real-time dashboards via WMS integrations",
      "Modular zoning, temperature-controlled environments",
    ],
    image: "/images/services/warehousing.jpg",
  },
  {
    id: "call-center",
    title: "Call Center Support",
    description: "[Extract from design]",
    features: [],
    image: "/images/services/call-center.jpg",
  },
  {
    id: "back-office",
    title: "Back Office Services",
    description: "[Extract from design]",
    features: [],
    image: "/images/services/back-office.jpg",
  },
  {
    id: "vas",
    title: "Value-Added Services (VAS)",
    description: "[Extract from design]",
    features: [],
    image: "/images/services/vas.jpg",
  },
  {
    id: "upselling",
    title: "Upselling Revenue Programs",
    description: "[Extract from design]",
    features: [],
    image: "/images/services/upselling.jpg",
  },
];
```

### 5.2 Create Media Query Hook

**hooks/use-media-query.ts:**
```typescript
"use client";

import { useMediaQuery as useMediaQueryLib } from "usehooks-ts";

export function useMediaQuery(query: string) {
  return useMediaQueryLib(query);
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
```

### 5.3 Create Services Desktop Component

**components/sections/services/services-desktop.tsx:**

Layout:
```
┌─────────────────┬──────────────────────────────┐
│  Service tabs   │   Content panel              │
│  (vertical)     │   - Image                    │
│                 │   - Description              │
│  • Active       │   - Feature list             │
│    Service 2    │                              │
│    Service 3    │                              │
└─────────────────┴──────────────────────────────┘
```

Requirements:
- Left panel: Service titles as clickable tabs
- Active service highlighted with indicator
- Right panel: Image + description + features
- Framer Motion AnimatePresence for content transitions

Implementation:
```typescript
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";

export function ServicesDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <div className="grid grid-cols-[300px_1fr] gap-8">
      {/* Left: Service tabs */}
      <div className="flex flex-col gap-2">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => setActiveIndex(index)}
            className={/* active styles */}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Right: Content panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Image */}
          {/* Description */}
          {/* Features list */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

### 5.4 Create Services Mobile Component

**components/sections/services/services-mobile.tsx:**

Requirements:
- True vertical accordion
- One item open at a time
- Tap to expand/collapse
- Content: Image above text

Use shadcn Accordion as base:
```typescript
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/data/services";

export function ServicesMobile() {
  return (
    <Accordion type="single" collapsible>
      {services.map((service) => (
        <AccordionItem key={service.id} value={service.id}>
          <AccordionTrigger>{service.title}</AccordionTrigger>
          <AccordionContent>
            {/* Image */}
            {/* Description */}
            {/* Features */}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

### 5.5 Create Services Section Wrapper

**components/sections/services/index.tsx:**
```typescript
"use client";

import { useIsDesktop } from "@/hooks/use-media-query";
import { ServicesDesktop } from "./services-desktop";
import { ServicesMobile } from "./services-mobile";

export function ServicesSection() {
  const isDesktop = useIsDesktop();

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2>Our Services</h2>
        {isDesktop ? <ServicesDesktop /> : <ServicesMobile />}
      </div>
    </section>
  );
}
```

### 5.6 Implementation Checklist

- [ ] Create services data file
- [ ] Build desktop tabs layout
- [ ] Add active indicator animation
- [ ] Build content panel with transitions
- [ ] Build mobile accordion
- [ ] Style accordion custom to match design
- [ ] Add images (placeholder or real)
- [ ] Test switching between desktop/mobile
- [ ] Verify animations are smooth

**✓ Phase 5 Complete**

---

## Phase 6: Content Sections

### 6.1 Create Section Wrapper Component

**components/shared/section-wrapper.tsx:**
```typescript
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-16 md:py-24", className)}
    >
      {children}
    </motion.section>
  );
}
```

### 6.2 Why Axiom X Section

**components/sections/why-axiom.tsx:**

Content from design:
- Headline: "Why Axiom x?"
- Subheadline: "You don't just need to outsource..."
- Body text about AI-enhanced ecosystem
- Two CTAs

Layout:
- Desktop: Text left, visual/image right
- Mobile: Stacked

### 6.3 Partners Section

**components/sections/partners.tsx:**

Requirements:
- Horizontal scrolling marquee
- Partner logos
- Infinite loop animation
- "BE A PART OF OUR PARTNERS" headline

Implementation options:
1. CSS animation (simpler)
2. Embla Carousel with loop (more control)

CSS approach:
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee {
  animation: marquee 30s linear infinite;
}
```

### 6.4 Our Story Section

**components/sections/our-story.tsx:**

Content:
- Headline: "OUR STORY: FROM 1997 TO THE AI ERA"
- Text about Axiom x Telecom history
- "Read full story" CTA

### 6.5 Vision & Mission Section

**components/sections/vision-mission.tsx:**

Content:
- Two cards side by side
- Vision card with icon and text
- Mission card with icon and text

Layout:
- Desktop: 2 columns
- Mobile: Stacked

### 6.6 Brand Values Section

**components/sections/brand-values.tsx:**

**data/brand-values.ts:**
```typescript
export const brandValues = [
  { id: "precision", label: "Precision", icon: "Target" },
  { id: "agility", label: "Agility", icon: "Zap" },
  { id: "reliability", label: "Reliability", icon: "Shield" },
  { id: "support", label: "Support", icon: "HeartHandshake" },
  { id: "innovation", label: "Innovation", icon: "Lightbulb" },
];
```

Layout:
- Desktop: 5 columns in a row
- Mobile: Horizontal scroll with snap

### 6.7 Careers CTA Section

**components/sections/careers-cta.tsx:**

Content:
- Headline: "Build the future of operations."
- Subtext about looking for operators, strategists...
- CTAs: "Join the X Team", "READ MORE CAREERS"

Full-width banner style.

### 6.8 Implementation Checklist

- [ ] Create SectionWrapper component
- [ ] Build Why Axiom X section
- [ ] Build Partners marquee
- [ ] Build Our Story section
- [ ] Build Vision & Mission cards
- [ ] Build Brand Values with horizontal scroll
- [ ] Build Careers CTA banner
- [ ] Apply SectionWrapper to all sections
- [ ] Test scroll animations
- [ ] Verify responsive layouts

**✓ Phase 6 Complete**

---

## Phase 7: Contact Section + Tracking Widget

### 7.1 Create Zod Schemas

**lib/validations.ts:**
```typescript
import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export const trackingSchema = z.object({
  trackingNumber: z.string().min(5, "Please enter a valid tracking number"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type TrackingFormData = z.infer<typeof trackingSchema>;
```

### 7.2 Create Contact Form Component

**components/features/contact-form.tsx:**

Requirements:
- Fields: Full Name, Email, Message
- React Hook Form + Zod validation
- Loading state on submit
- Success/error toast notifications
- Responsive layout

```typescript
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations";
import { toast } from "sonner";

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Call server action
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields using shadcn Form components */}
    </form>
  );
}
```

### 7.3 Create Server Action for Contact Form

**app/actions/contact.ts:**
```typescript
"use server";

import { contactSchema } from "@/lib/validations";

export async function submitContactForm(formData: FormData) {
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validated = contactSchema.safeParse(data);
  if (!validated.success) {
    return { error: "Invalid form data" };
  }

  // TODO: Send email with Resend or log for now
  console.log("Contact form submission:", validated.data);

  return { success: true };
}
```

### 7.4 Create Tracking Widget

**components/features/tracking-widget.tsx:**

Requirements:
- Input field for tracking number
- Track button with loading state
- Results display panel
- Mock data for now (API later)

Mock response:
```typescript
const mockTrackingResult = {
  trackingNumber: "AX123456789",
  status: "in_transit",
  currentLocation: "Dubai Distribution Center",
  estimatedDelivery: "2025-01-20",
  timeline: [
    { date: "2025-01-15", location: "Dubai", status: "Package received" },
    { date: "2025-01-16", location: "Dubai DC", status: "In transit" },
  ],
};
```

UI States:
- Empty: Just input and button
- Loading: Skeleton/spinner
- Results: Timeline display
- Error: Error message

### 7.5 Create Contact Section

**components/sections/contact-section.tsx:**

Layout:
- Desktop: Form left, Tracking widget right
- Mobile: Stacked

Include:
- Section headline
- Contact form
- Tracking widget
- Contact information (optional)

### 7.6 Update Newsletter Form in Footer

Wire up the newsletter form with validation and toast feedback.

### 7.7 Implementation Checklist

- [ ] Create Zod schemas
- [ ] Build contact form with validation
- [ ] Create contact server action
- [ ] Build tracking widget with mock data
- [ ] Create results display UI
- [ ] Build contact section layout
- [ ] Wire up newsletter in footer
- [ ] Test form submissions
- [ ] Test validation errors
- [ ] Verify toast notifications

**✓ Phase 7 Complete**

---

## Phase 8: Animations & Polish

### 8.1 Add Page Load Animation

In main page or layout:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### 8.2 Create Magnetic Button Component

**components/shared/magnetic-button.tsx:**

Subtle magnetic effect on hover where button follows cursor slightly.

### 8.3 Add Hover Effects

- Buttons: Scale + shadow on hover
- Cards: Lift effect
- Links: Underline animation
- Service tabs: Background slide

### 8.4 Refine Scroll Animations

- Ensure all sections use SectionWrapper
- Stagger children where appropriate
- Fine-tune timing and easing

### 8.5 Add Micro-interactions

- Form field focus states
- Button click feedback
- Loading spinners/skeletons
- Success checkmarks

### 8.6 Performance Check

- Verify animations don't cause jank
- Use `will-change` sparingly
- Test on lower-end devices
- Check Lighthouse performance score

### 8.7 Implementation Checklist

- [ ] Add page load animation
- [ ] Create magnetic button effect
- [ ] Add hover effects to all interactive elements
- [ ] Refine scroll animation timing
- [ ] Add loading states everywhere
- [ ] Test animation performance
- [ ] Remove any animation that causes issues

**✓ Phase 8 Complete**

---

## Phase 9: Responsive Testing & Fixes

### 9.1 Test Breakpoints

Test at these widths:
- 375px (iPhone SE)
- 390px (iPhone 14)
- 768px (iPad)
- 1024px (iPad Pro / small laptop)
- 1280px (Desktop)
- 1536px (Large desktop)

### 9.2 Section-by-Section Check

For each section, verify:
- [ ] Header: Mobile menu works, sticky behavior correct
- [ ] Hero: Swipe works, text readable, CTAs accessible
- [ ] Stats: Grid changes correctly
- [ ] Services: Accordion works on mobile, tabs on desktop
- [ ] Why Axiom: Stacks properly
- [ ] Partners: Marquee visible and smooth
- [ ] Story: Text readable
- [ ] Vision/Mission: Cards stack
- [ ] Values: Horizontal scroll works
- [ ] Careers: Full-width looks good
- [ ] Contact: Forms usable on mobile
- [ ] Footer: Single column, all links accessible

### 9.3 Touch Interactions

- [ ] All buttons have adequate tap targets (min 44px)
- [ ] Carousel swipe is smooth
- [ ] Horizontal scroll sections work
- [ ] No hover-only interactions block mobile users

### 9.4 Fix Any Issues

Document and fix any responsive issues found.

**✓ Phase 9 Complete**

---

## Phase 10: Final Review & Cleanup

### 10.1 Code Cleanup

- [ ] Remove console.logs
- [ ] Remove unused imports
- [ ] Remove commented code
- [ ] Ensure consistent formatting (run Prettier)

### 10.2 Accessibility Check

- [ ] All images have alt text
- [ ] Form labels are associated
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus states visible

### 10.3 SEO Basics

- [ ] Page title set
- [ ] Meta description set
- [ ] OG tags for social sharing
- [ ] Semantic HTML (proper headings hierarchy)

### 10.4 Performance Optimization

- [ ] Images optimized (use Next.js Image component)
- [ ] Fonts optimized
- [ ] No layout shift issues
- [ ] Bundle size reasonable

### 10.5 Final Build Test

```bash
npm run build
npm run start
```

Test production build locally.

### 10.6 Documentation

- [ ] Update any placeholder content notes
- [ ] Document any pending API integrations
- [ ] Note any known issues

**✓ Phase 10 Complete**

---

## Deployment Checklist

When ready to deploy:

- [ ] Environment variables set
- [ ] Build passes without errors
- [ ] All pages render correctly
- [ ] Forms work (or are properly mocked)
- [ ] Analytics configured (if applicable)
- [ ] Domain configured
- [ ] SSL certificate active

---

## Notes for Claude Code

1. **Execute phases sequentially** — don't skip ahead
2. **Verify build after each phase** — `npm run dev` should work
3. **Extract design details from PDF** — colors, fonts, spacing
4. **Use placeholder images** if assets aren't provided yet
5. **Comment complex logic** — especially in services section
6. **Test responsive at each phase** — don't leave for end
7. **Ask for clarification** if design intent is unclear

---

*This task list corresponds to AXIOM-X-DEVELOPMENT-GUIDE.md*
