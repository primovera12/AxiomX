# Axiom X Website - Complete Design Reference Document

> **CLAUDE: AFTER EVERY CONTEXT COMPACTION, YOU MUST READ THIS ENTIRE DOCUMENT BEFORE DOING ANY WORK.**
> This document contains all the user's requirements and corrections. Do not rely on memory from previous context.
> File location: `docs/DESIGN-REFERENCE.md`

---

## CRITICAL: Read This First

This document is the **SINGLE SOURCE OF TRUTH** for implementing the Axiom X website. The goal is a **1:1 pixel-perfect replica** of the PDF design at `docs/Full Website Design.pdf`.

**Key Principles:**
- Every padding, spacing, border-radius, font size, font weight, line height, and color must match the PDF EXACTLY
- Work on ONE section at a time
- User must verify each section is 100% match before moving to next
- When in doubt, refer to the PDF

---

## Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary Green | `#53ac70` | Buttons, stats numbers, accents |
| Dark Green/Navy | `#19342c` | Dark backgrounds, play button boxes |
| Lime/Accent | `#d4fb50` | X logo highlight, tags, tooltips, underlines |
| Light Gray | `#ececec` | Partners section background |
| Dark Gray | `#f5f7f6` | Service snapshot card background |
| White | `#ffffff` | Text on dark, backgrounds |
| Black | `#000000` | Body text |

### Fonts
- **Headings:** Alexandria font family
- **Body:** Inter font family
- **Special:** Aloevera-Regular for service tags

### Container
- Class: `container-axiom`
- Max-width: 1250px
- Centered with auto margins

### Border Radius Values
- Small: 8px (buttons)
- Medium: 12px (brand values bar)
- Large: 15px (hero, partners box, cards)
- XL: 24px (service images)
- XXL: 40px (section containers like services, why axiom)
- Pill: 200px (full rounded buttons, tooltips)

---

## Section 1: Header

**File:** `components/layout/header.tsx`

### Key Points (User Feedback #1)
- Header is **SEPARATE** from hero - NOT an overlay
- White background
- Sits above the hero section normally

### Layout
```
[Logo] -------- [Home] [Services] [Why AxiomX] [Contact] [About] -------- [Sign Up] [Login]
```

### Specifications
| Element | Spec |
|---------|------|
| Logo width | ~120px |
| Nav font | Medium weight, normal case (not uppercase) |
| Nav items | Home, Services, Why AxiomX, Contact, About |
| Sign Up button | Green (#53ac70) background, white text, pill shape |
| Login button | Green (#53ac70) background, white text, pill shape |
| Padding | Standard header padding |

### Latest Refinements (Round 2)
- **Reduce button padding**: Top and bottom padding inside buttons should be slimmer

---

## Section 2: Hero

**File:** `components/sections/hero.tsx`

### Key Points (User Feedback #2, #3, #4)
- **NO GREEN GRADIENT** anywhere
- Background is a **static image** (bg-2.jpg - motorcycle rider)
- **BLACK gradient overlay** on LEFT side (70-80% opacity) fading to transparent on RIGHT
- **2 CTA buttons**: 1 green filled, 1 white outlined
- **Keep Service Snapshot** card exactly as in V1 (don't change it)

### Background
- Image: `/images/bg-2.jpg` (green motorcycle rider)
- Overlay: `linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)`
- Container has rounded corners (~15px)

### Content (Left Side)
```
Are you Searching
for X ?                    <- X is lime (#d4fb50)

[Description text - white, smaller font]

[Speak to an Expert] [Create an Account]
     green filled       white outlined
```

### Buttons
| Button | Background | Text | Border |
|--------|------------|------|--------|
| Speak to an Expert | #53ac70 | white | #53ac70 |
| Create an Account | white | #53ac70 | #53ac70 |

### Service Snapshot Card
- Position: Overlaps bottom-right of hero
- Background: #f5f7f6
- Contains X logo icon + text
- Has "See more" link with arrow
- **DO NOT CHANGE** - V1 version was correct

### Latest Refinements (Round 2) - 90% accurate
1. **Carousel transition**: Change to FADE transition (smoother, not ugly sliding)
2. **White line**: Should be ROUNDED at edges, 2-3px thick, slightly transparent
3. **CTA buttons**: Match EXACT size, padding, font size, spacing from PDF

---

## Section 2.5: Service Snapshot Card

**File:** Part of `components/sections/hero.tsx`

### Latest Refinements (Round 2) - 95% accurate
1. **"See more" text**: Make slightly BOLDER
2. **"See more" text**: Make 2px SMALLER font
3. **Arrow icon circle**: Make slightly SMALLER

---

## Section 3: Stats Bar

**File:** `components/sections/stats-bar.tsx`

### Key Points (User Feedback #5, #6)
- **Separator bars** between stats (vertical lines)
- Match **exact font size, weight, height** from PDF

### Layout
```
Top Row:    2M+  |  600k+  |  98%  |  140K
           Orders  Upsells   SLA    Tech Support

Bottom Row:      99.9%    |    29+
              Inventory    Warehouses
```

### Specifications
| Element | Spec |
|---------|------|
| Numbers | Green (#53ac70), large font (~48px+), bold |
| Labels | Black, smaller font (~14px), below numbers |
| Separators | Thin vertical lines (1px, gray/black) between each stat |
| Top row | 4 stats |
| Bottom row | 2 stats, centered |

### Stats Data
1. **2M+** - Orders Delivered Yearly
2. **600k+** - Monthly Upsells Activated
3. **98%** - SLA Delivery Rate
4. **140K** - Tech Support Cases Resolved
5. **99.9%** - Inventory Accuracy
6. **29+** - Warehousing Facilities

### Latest Refinements (Round 2) - 90% accurate
1. **Add BLACK borders/separators** between stats (currently missing)
2. **Add more padding** between 1st and 2nd row (~10-20px more)

---

## Section 4: Partners

**File:** `components/sections/partners.tsx`

### Key Points (User Feedback #7, #8)
- Green PARTNERS box should be **STICKY**
- Logos move as **MARQUEE** (auto-scrolling, continuous loop)
- **REMOVE** left/right navigation arrows completely
- Keep CTA buttons below

### Layout
```
           BE A PART OF OUR PARTNERS

[PARTNERS]  [logo] [logo] [logo] [logo] [logo] →→→ (auto-scrolling)
  green      marquee animation
  sticky

        [Speak to an Expert] [Create an Account]
```

### PARTNERS Box
| Element | Spec |
|---------|------|
| Size | 180x180px |
| Background | #53ac71 |
| Border radius | 15px |
| Text | "PA RT NE RS" stacked vertically |
| Text color | White |
| Font size | 45px |
| Font weight | 400 (normal) |
| Line height | 80% |
| Position | **STICKY** (stays in place while logos scroll) |

### Logo Marquee
- Auto-scrolling animation (CSS marquee or JS)
- Continuous loop
- No user interaction needed
- **NO NAVIGATION ARROWS**

### CTA Buttons
| Button | Style |
|--------|-------|
| Speak to an Expert | Outlined green (transparent bg, green border/text) |
| Create an Account | Filled green (#53ac70 bg, white text) |

### Latest Refinements (Round 2) - TRICKY LAYOUT
1. **PARTNERS box**: LESS padding inside
2. **PARTNERS text**: Make BOLDER
3. **REMOVE carousel navigation arrows** completely
4. **SPECIAL LAYOUT**:
   - LEFT side is BOXED (container width) - PARTNERS box sits here
   - RIGHT side is FULL WIDTH (edge of screen)
   - Logos marquee from LEFT (behind PARTNERS box) to RIGHT (disappear at screen edge)
   - Logos scroll continuously left-to-right
5. **Button colors**: Match PDF - one is GREEN, one is DARK GREEN (not both same green)

---

## Section 5: Why Axiom X

**File:** `components/sections/why-axiom.tsx`

### Key Points (User Feedback #9, #10, #11, #12) - MAJOR REDESIGN NEEDED
- **NOT** image on left, text on right
- It's a **FULL SECTION** with rounded corners and **BACKGROUND IMAGE**
- **NO green subtitle** anywhere
- **NO buttons** (already in partners section)
- Has **CAROUSEL CARDS** that autoplay with hover color change

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│  Background Image (warehouse/industrial from old assets)     │
│                                                              │
│  Why Axiom x ?                                               │
│                                                              │
│  You don't just need to outsource. You need to outsmart,    │
│  outscale, and out-deliver.                                  │
│                                                              │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │ White card       │  │ Black card       │   ← Carousel    │
│  │ (semi-transparent)│  │ (semi-transparent)│                │
│  │ Black text       │  │ White text       │                 │
│  └──────────────────┘  └──────────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Specifications
| Element | Spec |
|---------|------|
| Container | Full width, rounded corners (~40px) |
| Background | Image from old assets (warehouse/industrial) |
| Title | "Why Axiom x ?" - white text, large |
| Subtitle | "You don't just need to outsource..." - white text |

### Carousel Cards
| Card Type | Background | Text Color |
|-----------|------------|------------|
| Card 1 | White semi-transparent (rgba(255,255,255,0.8)) | Black |
| Card 2 | Black semi-transparent (rgba(0,0,0,0.8)) | White |

- Cards show 2 at a time
- **Autoplay** enabled
- **Hover effect**: card colors swap/change
- Content: "At Axiom x, we don't sell services. We offer a system. One that thinks, scales, and adapts with your business."

### Latest Refinements (Round 2) - NEEDS FULL REBUILD
- Current implementation is WRONG
- Must rebuild entire section according to specs above

---

## Section 6: Our Services

**File:** `components/sections/services/index.tsx`

### Key Points (User Feedback #13, #14, #15)
- Background is **CSS animated gradient** with multiple green shades (Apple-style effect)
- **NOT** a static background image
- Accordions have **line on left + X logo** when open
- **100% match** spacing, padding, image heights to PDF

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│  Animated Green Gradient Background                          │
│                                                              │
│  Our Services                                                │
│  ───────────── (lime underline)                              │
│                                                              │
│  X │ Warehousing & Inventory  ▲                              │
│    │ [Image - full width, rounded corners]                   │
│    │ Storage built for action, not stagnation...             │
│    │ [tag] [tag] [tag] [tag]                                 │
│                                                              │
│    Call Center Support  ▼                                    │
│    Back Office Services  ▼                                   │
│    Value-Added Services (VAS)  ▼                             │
│    Upselling Revenue Programs  ▼                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Animated Gradient Background
- CSS-only animation
- Multiple shades of green (dark to light)
- Flowing/moving effect (like Apple website backgrounds)
- Use CSS @keyframes for animation

### Accordion - Open State
| Element | Spec |
|---------|------|
| X Logo | Position at top of left line |
| Left border | Vertical lime line (#d4fb50), 1px width |
| Content padding | Match PDF exactly |
| Image | Full width, border-radius 24px |
| Bold text | Service intro text |
| Description | Regular weight text |
| Tags | Lime background (#d4fb50), black text, pill shape, padding 14px 24px |

### Accordion - Closed State
- Just the title text
- Dropdown arrow on right
- Arrow rotates 180° when toggled open

### Accordion Items
1. Warehousing & Inventory (open by default)
2. Call Center Support
3. Back Office Services
4. Value-Added Services (VAS)
5. Upselling Revenue Programs

### Latest Refinements (Round 2) - 70% accurate
1. **Background**: Must be CSS ANIMATED GRADIENT (Apple-style), NOT static
2. **REMOVE icons** before accordion titles
3. **Description text**: ALL same font weight (first line is NOT bold, everything same weight)
4. **Lime tags**: Already accurate ✓
5. **Add LEFT LIME LINE** when accordion is open - connects to X logo
6. **Reduce image height by 30%** to match PDF proportions

---

## Section 7: Our Story

**File:** `components/sections/our-story.tsx`

### Key Points (User Feedback #16)
- Green background (find exact shade)
- 2 columns layout
- CTA button: white background, green text, fully rounded (pill)

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│  Green Background (#53ac70)                                  │
│                                                              │
│  OUR STORY: FROM          │  We started in 1997 as Axiom    │
│  1997 TO THE AI ERA       │  x Telecom — building the       │
│                           │  Middle East's largest mobility  │
│  (Left column - Title)    │  distribution engine...          │
│                           │                                  │
│                           │  [Read full story]               │
│                           │   white bg, green text, pill     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Specifications
| Element | Spec |
|---------|------|
| Background | #53ac70 (or exact shade from PDF) |
| Left column | Title only "OUR STORY: FROM 1997 TO THE AI ERA" |
| Title color | White |
| Right column | Description text + CTA button |
| Text color | White |
| CTA button | White background, green text, pill shape (border-radius: 200px) |

### Latest Refinements (Round 2) - 85% accurate
1. **Title**: Make slightly BOLDER
2. **CTA button font**: 2px SMALLER
3. **CTA button padding**: Reduce top/bottom padding (slimmer button)

---

## Section 8: Vision/Mission

**File:** `components/sections/vision-mission.tsx`

### Key Points (User Feedback #17)
- **Full width edge-to-edge** dark background
- Content is **boxed** (inside container)
- 2 columns: **LEFT has play button**, RIGHT has text + buttons
- Play button has **animation/hover effect**
- Launches video player overlay on click

### Layout
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Full-width dark background (warehouse image or dark overlay)            │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │  Container (boxed content)                                       │    │
│  │                                                                  │    │
│  │  ┌────────────┐    Vision                                       │    │
│  │  │            │    To be the unseen force powering the next     │    │
│  │  │   ▶ Play   │    era of business operations.                  │    │
│  │  │            │                                                  │    │
│  │  │  (dark box)│    Mission                                       │    │
│  │  │  (#19342c) │    To simplify, enable, and scale modern        │    │
│  │  │            │    operations through intelligent, AI-driven     │    │
│  │  └────────────┘    services.                                     │    │
│  │                                                                  │    │
│  │                    [CTA Button 1] [CTA Button 2]                │    │
│  │                                                                  │    │
│  └─────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
```

### Play Button Box
| Element | Spec |
|---------|------|
| Background | #19342c (dark green/navy) |
| Play icon | Lime (#d4fb50) |
| Hover effect | Scale up or pulse animation |
| Click action | Opens video player overlay |

### Text Content
- **Vision** title + description text
- **Mission** title + description text
- 2 CTA buttons at bottom

### Latest Refinements (Round 2) - 95% accurate
1. **Description text**: Make BOLDER
2. **Button fonts**: Make BOLDER

---

## Section 9: Brand Values

**File:** `components/sections/brand-values.tsx`

### Key Points (User Feedback #18)
- Use **correct icons** for each value
- Fix **text overflow** in lime tooltip - all text must fit inside

### Layout
```
                    BRAND VALUES

┌────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│        │          │          │          │          │          │
│  ▶     │ Precision│ Agility  │Reliability│ Support │Innovation│
│ Play   │   icon   │   icon   │   icon   │   icon   │   icon   │
│        │          │          │          │          │          │
└────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
                              │
                              ▼ (on hover)
              ┌─────────────────────────────────────┐
              │  Tooltip text in lime pill          │
              │  (must fit all text inside!)        │
              └─────────────────────────────────────┘
```

### Specifications
| Element | Spec |
|---------|------|
| Title | "BRAND VALUES" - green (#529b66), centered |
| Play button box | Dark green (#19342c), on left |
| Value icons | Correct icons for each (Target, Zap, Shield, HeartHandshake, Lightbulb) |
| Background bar | Gray (#eeeeee) |
| Separators | Vertical black lines between values |
| Tooltip | Lime (#d4fb50), pill shape, appears on hover |
| **Tooltip text** | MUST FIT INSIDE - no overflow! |

### Brand Values Data
1. **Precision** - "We execute with discipline and clarity"
2. **Agility** - "We respond, reroute, and adapt in real-time"
3. **Reliability** - "You can build your business on us"
4. **Support** - "We extend your capabilities, not just your workload"
5. **Innovation** - "Embedded intelligence at every touchpoint"

### Latest Refinements (Round 2) - 95% accurate
1. **Lime tooltip**: Only appears on HOVER (currently correct ✓)
2. **REMOVE static bottom section** - the lime pill at bottom should NOT exist as static element

---

## Section 10: Careers

**File:** `components/sections/careers-cta.tsx`

### Key Points (User Feedback #19)
- 2 columns layout
- LEFT: Title, subtitle, text, space, text, **BIG CTA button with X in lime color**
- RIGHT: Image (find in old assets folder)

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  Careers                         │  ┌──────────────────┐    │
│                                  │  │                  │    │
│  Build the future of             │  │     Image of     │    │
│  operations.                     │  │     person in    │    │
│                                  │  │     Middle East  │    │
│  We're looking for operators,    │  │     dress        │    │
│  strategists, and technologists  │  │                  │    │
│  ready to redesign what B2B      │  │                  │    │
│  execution looks like...         │  └──────────────────┘    │
│                                  │                          │
│  Ready to build with us?         │                          │
│                                  │                          │
│  ┌──────────────────────────┐    │                          │
│  │  Join the X Team         │    │                          │
│  │  (X is lime #d4fb50)     │    │                          │
│  └──────────────────────────┘    │                          │
│                                  │                          │
└─────────────────────────────────────────────────────────────┘
```

### Specifications
| Element | Spec |
|---------|------|
| Title | "Careers" - large, black |
| Subtitle | "Build the future of operations." - bold, black |
| Description | Regular text |
| Question | "Ready to build with us?" |
| CTA Button | Black background, white text, "Join the X Team" - X is lime (#d4fb50) |
| Image | Find in old assets folder (man in traditional Middle Eastern dress) |

### Latest Refinements (Round 2) - 100% accurate ✓
- No changes needed

---

## Section 11: Shipment Tracking

**File:** `components/sections/shipment-tracking.tsx`

### Key Points (User Feedback #21)
- Made of **MULTIPLE SECTIONS**
- Bottom section (tracking table) **only appears AFTER entering tracking number**
- Motorcycle image **OVERFLOWS** the green box (negative margin effect)

### Layout - Part 1 (Always Visible)
```
┌─────────────────────────────────────────────────────────────┐
│  Green Background (#53ac70)                                  │
│                                                              │
│  Real-time Tracking            │        ┌─────────────┐     │
│  for your Shipments            │        │             │     │
│                                │        │  Motorcycle │     │
│  Tracking Number               │        │   Image     │ ←── overflow!
│  ┌─────────────────────────┐   │        │             │     │
│  │  Enter tracking number  │   │        │             │     │
│  └─────────────────────────┘   │        └─────────────┘     │
│                                │             ↑              │
│  [small instruction text]      │             │              │
└────────────────────────────────│─────────────│──────────────┘
                                               │
                                    Image extends BELOW
                                    the green container
```

### Layout - Part 2 (Shows After Input)
```
┌─────────────────────────────────────────────────────────────┐
│  Tracking List                                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Tracking ID │ Date │ Category │ Route │ Status │ Action│ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ TRK123456  │ ...  │ ...      │ ...   │ ...    │ ...   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Shipment Statistics                                         │
│  [Bar Chart visualization]                                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Specifications
| Element | Spec |
|---------|------|
| Part 1 background | Green (#53ac70) |
| Title | "Real-time Tracking for your Shipments" - white |
| Input label | "Tracking Number" |
| Motorcycle image | From old assets, **overflows container** with negative margin or absolute positioning |
| Part 2 | Hidden by default, shows after tracking number entered |
| Table | Tracking list with columns |
| Chart | Bar chart for shipment statistics |

### Latest Refinements (Round 2) - 90% accurate
1. **Input area**: Add WHITE BACKGROUND
2. **"Tracking Number" label**: Make SMALLER, match color from PDF
3. **Add instruction text**: Small text at bottom-left corner of green box (see PDF)
4. **Tracking list data**: Copy EXACT data from PDF, match bold/non-bold styling
5. **Tracking list section**: Only appears AFTER entering tracking number (conditional render)

---

## Section 11.5: Shipment Statistics Chart

**File:** Part of `components/sections/shipment-tracking.tsx`

### Latest Refinements (Round 2) - NEEDS MAJOR WORK
1. **Chart design**: 2 columns per month (not single bars)
2. **Columns**: ROUNDED at the top
3. **Hover effect**: Show VALUE popup when hovering over column
4. **Y-axis lines**: DASHED horizontal lines for value rows
5. **Filter**: Match filter style from PDF
6. **Filter functionality**: MUST BE DYNAMIC - values change when filter is pressed

---

## Section 12: Contact

**File:** `components/sections/contact-section.tsx`

### Key Points (User Feedback #20)
- **1:1 replica** from PDF
- Match **all padding, spacing, style** exactly

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  Contact Us                                                  │
│  Let's talk scale.                                           │
│                                                              │
│  Whether you're looking to optimize delivery, centralize     │
│  operations, or unlock new revenue — Axiom x is your growth  │
│  partner.                                                    │
│                                                              │
│  UAE | KSA | Oman | Kuwait    hello@Axiomxx.com    +971...   │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Your Name                                               ││
│  └─────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Your Mail                                               ││
│  └─────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Write your question or Message                          ││
│  │                                                         ││
│  │                                                         ││
│  └─────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────┐│
│  │                        Submit                           ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Specifications
| Element | Spec |
|---------|------|
| Title | "Contact Us" - large |
| Subtitle | "Let's talk scale." |
| Description | Regular text |
| Location | "UAE \| KSA \| Oman \| Kuwait" |
| Email | hello@Axiomxx.com |
| Phone | +971 4 123 4567 |
| Input fields | Full width, proper padding |
| Submit button | Green (#53ac70), full width |

### Latest Refinements (Round 2) - 100% accurate ✓
- No changes needed

---

## Section 13: Footer

**File:** `components/layout/footer.tsx`

### Layout
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Dark Background                                                         │
│                                                                          │
│  [Logo]     Subscribe              Account        Quick Link             │
│             Get 10% off your       My Account     Privacy Policy         │
│             first order            Login/Register Terms Of Use           │
│             ┌─────────────────┐    Cart           FAQ                    │
│             │ Enter email     │    Wishlist       Contact                │
│             └─────────────────┘    Shop                                  │
│                                                                          │
│             Download App                                                 │
│             Save $3 with App New User Only                               │
│             [App Store] [Google Play]                                    │
│                                                                          │
│  ─────────────────────────────────────────────────────────────────────  │
│  Copyright Axiomx.com All right reserved          [Social Icons]         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Latest Refinements (Round 2) - 100% accurate ✓
- No changes needed

---

## File Locations

### Current Component Files
- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `components/layout/mobile-nav.tsx`
- `components/sections/hero.tsx`
- `components/sections/stats-bar.tsx`
- `components/sections/partners.tsx`
- `components/sections/why-axiom.tsx`
- `components/sections/services/index.tsx`
- `components/sections/services/services-desktop.tsx`
- `components/sections/our-story.tsx`
- `components/sections/vision-mission.tsx`
- `components/sections/brand-values.tsx`
- `components/sections/careers-cta.tsx`
- `components/sections/contact-section.tsx`
- `components/sections/shipment-tracking.tsx` (may need to create)

### Assets
- Background images: `public/images/bg-1.jpg`, `bg-2.jpg`, `bg-3.jpg`
- Logo: `public/images/logo.png`, `x-logo.png`, `x-logo-2.svg`
- Partner logos: `public/images/partners/`
- Service images: `public/images/services/`
- Old assets folder: Check for additional images needed

### Data Files
- `data/services.ts` - Service accordion data

---

## User's Original 21 Corrections (NEVER FORGET)

1. Header is separate from hero, not an overlay
2. Hero has BLACK gradient (70-80%) on left fading to transparent - NO green
3. Hero has 2 CTA buttons: 1 green, 1 white
4. Service Snapshot was good in V1 - don't ruin it
5. Stats section needs separator bars between stats
6. Stats section needs correct font size, weight, height
7. PARTNERS box should be sticky, logos as marquee, find exact font
8. Partners section - remove left/right arrows, they're useless
9. Why Axiom X - full section with background image, NOT image on left
10. Why Axiom X - NO green subtitle
11. Why Axiom X - NO buttons (already in partners)
12. Why Axiom X - carousel cards with autoplay, hover changes color
13. Our Services - CSS animated gradient background (Apple-style)
14. Our Services - accordion has line on left + X logo when open
15. Our Services - 100% match spacing, padding, image heights
16. Our Story - 2 columns, green background, white rounded CTA button
17. Vision/Mission - full width background, boxed content, play button with animation
18. Brand Values - correct icons, fix text overflow in lime tooltip
19. Careers - 2 columns, big CTA with lime X, image on right
20. Contact - 1:1 replica from PDF
21. Shipment Tracking - multiple sections, tracking table after input, motorcycle overflows

---

## Current Completion Status (Round 2 - FINAL)

### ✅ ALL SECTIONS VERIFIED AND COMPLETE:

**Originally 100% Done (confirmed):**
1. **Header** - ✅ COMPLETE
2. **Hero** - ✅ COMPLETE (fade transition, 2 CTAs, white line)
3. **Vision/Mission** - ✅ COMPLETE
4. **Careers** - ✅ COMPLETE
5. **Tracking List** - ✅ COMPLETE (conditional render working)
6. **Contact Us** - ✅ COMPLETE
7. **Footer** - ✅ COMPLETE

**Fixed in Round 2 verification:**
8. **Service Snapshot** - ✅ FIXED (bolder "see more", smaller font/icon)
9. **Stats Bar** - ✅ FIXED (borders 30% opacity, correct green #53ac70)
10. **Partners** - ✅ FIXED (correct green #53ac70, bolder PARTNERS text)
11. **Why Axiom X** - ✅ VERIFIED (carousel, hover effects working)
12. **Our Services** - ✅ VERIFIED (animated gradient, lime line, correct image heights)
13. **Our Story** - ✅ FIXED (correct green #53ac70)
14. **Brand Values** - ✅ VERIFIED (no static pill, hover tooltip working)
15. **Shipment Statistics Chart** - ✅ VERIFIED (2-column bars, hover tooltips, dashed Y-axis lines)

---

## Implementation Workflow

1. **Read this document** before starting any section
2. **Read the PDF** (`docs/Full Website Design.pdf`) for visual reference
3. **Work on ONE section** at a time
4. **Make changes** to match PDF exactly
5. **User verifies** visually
6. **Only move to next section** after 100% match confirmed

---

## Common Mistakes to Avoid

1. **DON'T** add green gradients to the hero - it's BLACK on the left
2. **DON'T** make the header overlay the hero - they're separate
3. **DON'T** add navigation arrows to partners - use marquee auto-scroll only
4. **DON'T** put an image on the left in Why Axiom X - it's a full background
5. **DON'T** add buttons to Why Axiom X - they're already in partners
6. **DON'T** use a static image for Services background - use CSS animated gradient
7. **DON'T** forget the X logo and left line on open accordions
8. **DON'T** let tooltip text overflow in Brand Values
9. **DON'T** forget the motorcycle overflows the green container in Shipment Tracking

---

*Last Updated: January 2026 (Round 2 Feedback)*
*Reference PDF: docs/Full Website Design.pdf*
