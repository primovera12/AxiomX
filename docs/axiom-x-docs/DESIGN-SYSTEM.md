# Axiom X Design System

> **For Claude Code:** This document contains all design tokens extracted from the client design and previous implementation. Use these exact values when building components.

---

## Color Palette

### Primary Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Emerald Green | `#53ac70` | `--primary-green` | Primary buttons, CTAs, stats highlights, accents |
| Dark Navy | `#19342c` | `--primary-dark` | Secondary buttons, dark backgrounds, footer |
| Forest Green | `#3f7537` | `--forest-green` | Hover states, vision section backgrounds |
| Lime/Neon Yellow | `#d4fb50` | `--accent-lime` | Accent highlights, service tags, active states, tooltips |

### Neutral Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| White | `#FFFFFF` | `--white` | Text on dark backgrounds, primary backgrounds |
| Black | `#000000` | `--black` | Body text, headings |
| Light Gray | `#f5f7f6` | `--gray-light` | Card backgrounds, section backgrounds |
| Medium Gray | `#ececec` | `--gray-medium` | Partners section background, dividers |
| Dark Gray | `#373737` | `--gray-dark` | Description cards, muted text |

### Functional Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Form Input BG | `#519b66` | `--form-input` | Contact form input backgrounds |
| In Transit | `#db5e54` | `--status-transit` | Tracking status badge |
| Shipped | `#edc771` | `--status-shipped` | Tracking status badge |
| Delivered | `#66c5a6` | `--status-delivered` | Tracking status badge |

### Color Variations Found in Design

```css
/* Primary green variations (use #53ac70 as standard) */
#53ac70  /* Primary - most common */
#52ac70  /* Slight variation */
#529b66  /* Darker variation */

/* Dark green variations */
#19342c  /* Primary dark */
#1a3a30  /* Section backgrounds */
```

---

## Typography

### Font Families

| Font | Weight Range | Primary Usage |
|------|--------------|---------------|
| **Poppins** | 100-900 | Default body text, buttons, navigation |
| **Alexandria** | 100-900 (variable) | Headings, section titles, service accordion titles |
| **Inter** | 100-900 | Story content, about cards, longer descriptions |
| **Aloevera Display** | Regular only | Service feature tags (decorative) |

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
```

### Type Scale

| Element | Font Family | Size | Weight | Line Height |
|---------|-------------|------|--------|-------------|
| Hero Headline | Poppins | 50px | 600 | 1.2 |
| Section Title | Alexandria | 55px | 700 | 1.1 |
| Service Accordion Title | Alexandria | 36px | 600 | 1.2 |
| Subsection Title | Poppins | 24px | 600 | 1.3 |
| Body Text | Poppins | 16px | 400 | 1.6 |
| Small Text | Poppins | 14px | 400 | 1.5 |
| Button Text | Poppins | 14-16px | 500-600 | 1 |
| Service Tags | Aloevera | 14px | 400 | 1 |

### Mobile Type Scale

| Element | Size (Mobile) |
|---------|---------------|
| Hero Headline | 32-36px |
| Section Title | 32-40px |
| Service Accordion Title | 24px |
| Body Text | 14-16px |

---

## Tailwind CSS Configuration

### Colors Configuration

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#53ac70",
          dark: "#19342c",
          forest: "#3f7537",
        },
        accent: {
          lime: "#d4fb50",
        },
        neutral: {
          light: "#f5f7f6",
          medium: "#ececec",
          dark: "#373737",
        },
        form: {
          input: "#519b66",
        },
        status: {
          transit: "#db5e54",
          shipped: "#edc771",
          delivered: "#66c5a6",
        },
      },
    },
  },
};

export default config;
```

### Font Family Configuration

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Alexandria", "sans-serif"],
        body: ["Inter", "sans-serif"],
        display: ["Aloevera Display", "sans-serif"],
      },
    },
  },
};

export default config;
```

### Complete Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: "#53ac70",
          dark: "#19342c",
          forest: "#3f7537",
        },
        // Accent colors
        accent: {
          lime: "#d4fb50",
        },
        // Neutral colors
        neutral: {
          light: "#f5f7f6",
          medium: "#ececec",
          dark: "#373737",
        },
        // Form-specific colors
        form: {
          input: "#519b66",
        },
        // Status colors for tracking
        status: {
          transit: "#db5e54",
          shipped: "#edc771",
          delivered: "#66c5a6",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Alexandria", "sans-serif"],
        body: ["Inter", "sans-serif"],
        display: ["Aloevera Display", "sans-serif"],
      },
      fontSize: {
        "hero": ["50px", { lineHeight: "1.2", fontWeight: "600" }],
        "hero-mobile": ["36px", { lineHeight: "1.2", fontWeight: "600" }],
        "section": ["55px", { lineHeight: "1.1", fontWeight: "700" }],
        "section-mobile": ["36px", { lineHeight: "1.1", fontWeight: "700" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "count-up": "countUp 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

## CSS Variables (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  /* Primary Colors */
  --primary-green: #53ac70;
  --primary-dark: #19342c;
  --forest-green: #3f7537;
  --accent-lime: #d4fb50;

  /* Neutrals */
  --white: #FFFFFF;
  --black: #000000;
  --gray-light: #f5f7f6;
  --gray-medium: #ececec;
  --gray-dark: #373737;

  /* Form Colors */
  --form-input-bg: #519b66;

  /* Status Colors */
  --status-transit: #db5e54;
  --status-shipped: #edc771;
  --status-delivered: #66c5a6;

  /* Typography */
  --font-sans: "Poppins", sans-serif;
  --font-heading: "Alexandria", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-display: "Aloevera Display", sans-serif;
}

body {
  font-family: var(--font-sans);
  color: var(--black);
  background-color: var(--white);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}
```

---

## Button Styles

### Primary Button (Green)

```css
.btn-primary {
  background-color: #53ac70;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #3f7537;
}
```

### Secondary Button (Dark)

```css
.btn-secondary {
  background-color: #19342c;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #000000;
}
```

### Accent Button (Lime outline)

```css
.btn-accent {
  background-color: transparent;
  border: 2px solid #d4fb50;
  color: #d4fb50;
  padding: 10px 22px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-accent:hover {
  background-color: #d4fb50;
  color: #19342c;
}
```

---

## Gradients & Overlays

### Hero Gradient Overlay

```css
.hero-overlay {
  background: linear-gradient(90deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.48) 50%, rgba(0,0,0,0) 100%);
}
```

### Section Gradient (Green)

```css
.section-gradient-green {
  background: linear-gradient(135deg, #53ac70 0%, #3f7537 100%);
}
```

---

## Shadows & Effects

### Card Shadow

```css
.card-shadow {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
```

### Hover Lift Effect

```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
```

---

## Spacing System

Based on the design, use Tailwind's default spacing with these common values:

| Usage | Value | Tailwind Class |
|-------|-------|----------------|
| Section Padding (Desktop) | 80-120px | `py-20` to `py-30` |
| Section Padding (Mobile) | 48-64px | `py-12` to `py-16` |
| Container Max Width | 1280px | `max-w-7xl` |
| Card Padding | 24-32px | `p-6` to `p-8` |
| Element Gap | 16-24px | `gap-4` to `gap-6` |

---

## Z-Index Scale

| Layer | Z-Index | Usage |
|-------|---------|-------|
| Base | 0 | Default content |
| Dropdown | 10 | Dropdown menus |
| Sticky Header | 50 | Fixed navigation |
| Modal Backdrop | 100 | Modal overlays |
| Modal Content | 110 | Modal content |
| Toast | 200 | Notifications |

---

## Responsive Breakpoints

| Breakpoint | Width | Tailwind Prefix |
|------------|-------|-----------------|
| Mobile | 0-639px | (default) |
| Small | 640px+ | `sm:` |
| Medium | 768px+ | `md:` |
| Large (Primary) | 1024px+ | `lg:` |
| Extra Large | 1280px+ | `xl:` |
| 2XL | 1536px+ | `2xl:` |

**Primary flip point:** `lg` (1024px) - This is where most desktop/mobile layout switches occur.

---

*Design system extracted from client design PDF and Old AxiomX implementation. Last updated: January 2025*
