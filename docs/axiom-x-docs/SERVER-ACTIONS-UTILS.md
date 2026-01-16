# Server Actions & Utilities

> **For Claude Code:** Reference implementations for server actions and utility functions.

---

## Server Actions

### app/actions/contact.ts

```typescript
"use server";

import { contactSchema, type ContactFormData } from "@/lib/validations";

export interface ActionResult {
  success?: boolean;
  error?: string;
}

export async function submitContactForm(
  formData: FormData
): Promise<ActionResult> {
  // Extract form data
  const rawData = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  // Validate
  const validated = contactSchema.safeParse(rawData);
  if (!validated.success) {
    return {
      error: validated.error.errors[0]?.message || "Invalid form data",
    };
  }

  const data = validated.data;

  try {
    // Option 1: Log for now (development)
    console.log("Contact form submission:", data);

    // Option 2: Send email with Resend (uncomment when ready)
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: "Axiom X <noreply@axiomx.com>",
    //   to: "hello@axiomx.com",
    //   subject: `New Contact Form Submission from ${data.fullName}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.fullName}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //   `,
    // });

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { error: "Failed to send message. Please try again." };
  }
}
```

---

### app/actions/newsletter.ts

```typescript
"use server";

import { newsletterSchema } from "@/lib/validations";

export interface ActionResult {
  success?: boolean;
  error?: string;
}

export async function subscribeNewsletter(
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email") as string;

  // Validate
  const validated = newsletterSchema.safeParse({ email });
  if (!validated.success) {
    return {
      error: validated.error.errors[0]?.message || "Invalid email",
    };
  }

  try {
    // Log for now (development)
    console.log("Newsletter subscription:", validated.data.email);

    // TODO: Add to email service (Mailchimp, ConvertKit, etc.)
    // const response = await fetch("https://api.emailservice.com/subscribe", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: validated.data.email }),
    // });

    return { success: true };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return { error: "Failed to subscribe. Please try again." };
  }
}
```

---

### app/actions/tracking.ts

```typescript
"use server";

import { trackingSchema } from "@/lib/validations";

export interface TrackingEvent {
  date: string;
  location: string;
  status: string;
}

export interface TrackingResult {
  trackingNumber: string;
  status: "in_transit" | "delivered" | "pending" | "exception";
  currentLocation: string;
  estimatedDelivery: string;
  timeline: TrackingEvent[];
}

export interface TrackingActionResult {
  success?: boolean;
  data?: TrackingResult;
  error?: string;
}

// Mock data for development
const mockTrackingData: TrackingResult = {
  trackingNumber: "",
  status: "in_transit",
  currentLocation: "Dubai Distribution Center",
  estimatedDelivery: "2025-01-20",
  timeline: [
    {
      date: "2025-01-15 09:00",
      location: "Dubai",
      status: "Package received at origin facility",
    },
    {
      date: "2025-01-15 14:30",
      location: "Dubai",
      status: "Package processed and ready for dispatch",
    },
    {
      date: "2025-01-16 08:00",
      location: "Dubai Distribution Center",
      status: "In transit to destination",
    },
  ],
};

export async function trackShipment(
  formData: FormData
): Promise<TrackingActionResult> {
  const trackingNumber = formData.get("trackingNumber") as string;

  // Validate
  const validated = trackingSchema.safeParse({ trackingNumber });
  if (!validated.success) {
    return {
      error: validated.error.errors[0]?.message || "Invalid tracking number",
    };
  }

  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Replace with actual API call
    // const response = await fetch(
    //   `${process.env.TRACKING_API_URL}/track/${validated.data.trackingNumber}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.TRACKING_API_KEY}`,
    //     },
    //   }
    // );
    // const data = await response.json();

    // Return mock data for now
    return {
      success: true,
      data: {
        ...mockTrackingData,
        trackingNumber: validated.data.trackingNumber,
      },
    };
  } catch (error) {
    console.error("Error tracking shipment:", error);
    return {
      error: "Unable to track shipment. Please check your tracking number.",
    };
  }
}
```

---

## Utility Functions

### lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number with commas (e.g., 1000000 → 1,000,000)
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

/**
 * Format a number compactly (e.g., 1000000 → 1M)
 */
export function formatCompactNumber(num: number): string {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(num);
}

/**
 * Delay execution (useful for animations)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * Generate a random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Check if we're on the client side
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Scroll to an element smoothly
 */
export function scrollToElement(
  elementId: string,
  offset: number = 80
): void {
  if (!isClient()) return;

  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
```

---

## React Query Setup

### lib/query-client.ts

```typescript
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});
```

### components/providers/query-provider.tsx

```typescript
"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

### Update app/layout.tsx to include provider:

```typescript
import { QueryProvider } from "@/components/providers/query-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {/* ... rest of layout */}
        </QueryProvider>
      </body>
    </html>
  );
}
```

---

## Environment Variables

### .env.local (create this file)

```env
# Email (Resend)
RESEND_API_KEY=your_resend_api_key

# Tracking API (when provided by client)
TRACKING_API_URL=https://api.tracking-service.com
TRACKING_API_KEY=your_tracking_api_key

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### .env.example (commit this to repo)

```env
# Email (Resend)
RESEND_API_KEY=

# Tracking API
TRACKING_API_URL=
TRACKING_API_KEY=

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Type Definitions

### types/index.ts

```typescript
// Re-export all types for convenience

export type { HeroSlide } from "@/data/hero-slides";
export type { Stat } from "@/data/stats";
export type { Service } from "@/data/services";
export type { BrandValue } from "@/data/brand-values";
export type { NavLink } from "@/data/navigation";

export type {
  ContactFormData,
  NewsletterFormData,
  TrackingFormData,
} from "@/lib/validations";

export type {
  TrackingResult,
  TrackingEvent,
  TrackingActionResult,
} from "@/app/actions/tracking";
```

---

## Tailwind CSS Custom Animations

### Add to tailwind.config.ts:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  // ... other config
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "slide-in-left": "slideInLeft 0.3s ease-out",
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};

export default config;
```

---

## Global CSS Additions

### Add to app/globals.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Remove tap highlight on mobile */
  * {
    -webkit-tap-highlight-color: transparent;
  }

  /* Better focus styles */
  *:focus-visible {
    outline: 2px solid hsl(var(--primary));
    outline-offset: 2px;
  }
}

@layer components {
  /* Container with max-width */
  .container {
    @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  /* Section padding */
  .section-padding {
    @apply py-16 md:py-24;
  }

  /* Gradient text */
  .gradient-text {
    @apply bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent;
  }
}

@layer utilities {
  /* Hide scrollbar but allow scrolling */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Text balance for better headlines */
  .text-balance {
    text-wrap: balance;
  }
}

/* Marquee pause on hover */
.animate-marquee:hover {
  animation-play-state: paused;
}
```

---

*Copy these implementations into your project as needed.*
