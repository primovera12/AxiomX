# Axiom X — Component Specifications

> **For Claude Code:** This document contains detailed specifications and code examples for complex components. Reference this when building specific components.

---

## Table of Contents

0. [Project Setup & Configuration](#project-setup--configuration)
1. [Header Component](#header-component)
2. [Hero Carousel](#hero-carousel)
3. [Animated Counter](#animated-counter)
4. [Services Section](#services-section)
5. [Partners Marquee](#partners-marquee)
6. [Contact Form](#contact-form)
7. [Tracking Widget](#tracking-widget)
8. [Section Wrapper](#section-wrapper)
9. [Smooth Scroll Link](#smooth-scroll-link)

---

## Project Setup & Configuration

> **Important:** See `DESIGN-SYSTEM.md` for complete design tokens. This section provides ready-to-copy configuration files.

### File: `tailwind.config.ts`

```typescript
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
        hero: ["50px", { lineHeight: "1.2", fontWeight: "600" }],
        "hero-mobile": ["36px", { lineHeight: "1.2", fontWeight: "600" }],
        section: ["55px", { lineHeight: "1.1", fontWeight: "700" }],
        "section-mobile": ["36px", { lineHeight: "1.1", fontWeight: "700" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        marquee: "marquee 30s linear infinite",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### File: `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  /* Primary Colors */
  --primary-green: #53ac70;
  --primary-dark: #19342c;
  --forest-green: #3f7537;
  --accent-lime: #d4fb50;

  /* Neutrals */
  --white: #ffffff;
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
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--black);
  background-color: var(--white);
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Alexandria", sans-serif;
}

/* Custom utility classes */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### Hero Video Background Component

```typescript
// components/sections/hero-video-slide.tsx
"use client";

import { ReactNode } from "react";

interface HeroVideoSlideProps {
  videoSrc: string;
  children: ReactNode;
}

export function HeroVideoSlide({ videoSrc, children }: HeroVideoSlideProps) {
  return (
    <div className="relative w-full h-screen min-h-[600px]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.mov')} type="video/quicktime" />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.48) 50%, rgba(0,0,0,0) 100%)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    </div>
  );
}
```

---

## Header Component

### File: `components/layout/header.tsx`

```typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmoothScrollLink } from "@/components/shared/smooth-scroll-link";
import { MobileNav } from "./mobile-nav";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {/* Add logo image or text */}
              <span className="text-2xl font-bold">{siteConfig.name}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <SmoothScrollLink
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </SmoothScrollLink>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
```

### File: `components/layout/mobile-nav.tsx`

```typescript
"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SmoothScrollLink } from "@/components/shared/smooth-scroll-link";
import { navLinks, siteConfig } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <SmoothScrollLink
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
            >
              {link.label}
            </SmoothScrollLink>
          ))}
        </nav>

        <div className="flex flex-col gap-4 mt-8">
          <Button variant="outline" asChild className="w-full">
            <Link href="/signup" onClick={onClose}>
              Sign Up
            </Link>
          </Button>
          <Button asChild className="w-full">
            <Link href="/login" onClick={onClose}>
              Login
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

---

## Hero Carousel

### File: `components/sections/hero.tsx`

```typescript
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroSlides } from "@/data/hero-slides";

export function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="hero" className="relative min-h-screen">
      {/* Carousel Container */}
      <div className="overflow-hidden h-screen" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 relative"
            >
              {/* Background Image/Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />

              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="max-w-3xl"
                    >
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                      >
                        {slide.headline}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-white/80 mb-8"
                      >
                        {slide.subtext}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <Button size="lg" className="bg-green-500 hover:bg-green-600">
                          {slide.ctaPrimary}
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                          {slide.ctaSecondary}
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Desktop Only */}
      <button
        onClick={scrollPrev}
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators - Mobile Only */}
      <div className="flex lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              selectedIndex === index ? "bg-green-500" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
```

### File: `data/hero-slides.ts`

```typescript
export interface HeroSlide {
  id: number;
  headline: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary: string;
  backgroundImage?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    headline: "From first mile to final revenue touchpoint, we power the unseen.",
    subtext: "Your operations have untapped potential. Axiom X helps you find it and turn it into execution, insight, and growth.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
  },
  {
    id: 2,
    headline: "Scale smarter with AI-driven operations.",
    subtext: "Our intelligent systems adapt to your business needs, delivering precision at every step.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
  },
  {
    id: 3,
    headline: "29+ facilities. One unified platform.",
    subtext: "From warehousing to last-mile delivery, experience seamless operations across the Middle East.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
  },
];
```

---

## Animated Counter

### File: `components/shared/animated-counter.tsx`

```typescript
"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      // Small delay for better visual effect
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <NumberFlow
        value={displayValue}
        format={{
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }}
        transformTiming={{ duration: 1000, easing: "ease-out" }}
      />
      {suffix}
    </span>
  );
}
```

### File: `components/sections/stats-bar.tsx`

```typescript
"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { stats } from "@/data/stats";

export function StatsBar() {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-sm md:text-base text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Services Section

### File: `components/sections/services/index.tsx`

```typescript
"use client";

import { useIsDesktop } from "@/hooks/use-media-query";
import { ServicesDesktop } from "./services-desktop";
import { ServicesMobile } from "./services-mobile";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function ServicesSection() {
  const isDesktop = useIsDesktop();

  return (
    <SectionWrapper id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to scale with your business
          </p>
        </div>

        {isDesktop ? <ServicesDesktop /> : <ServicesMobile />}
      </div>
    </SectionWrapper>
  );
}
```

### File: `components/sections/services/services-desktop.tsx`

```typescript
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <div className="grid grid-cols-[350px_1fr] gap-12">
      {/* Left: Service Tabs */}
      <div className="relative">
        {/* Active Indicator */}
        <motion.div
          className="absolute left-0 w-1 bg-green-500 rounded-full"
          layoutId="activeIndicator"
          initial={false}
          animate={{
            top: activeIndex * 72, // Adjust based on item height
            height: 64,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        <div className="flex flex-col gap-2">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "text-left px-6 py-4 rounded-lg transition-all duration-200",
                activeIndex === index
                  ? "bg-slate-100 text-slate-900"
                  : "hover:bg-slate-50 text-slate-600"
              )}
            >
              <span className="text-lg font-medium">{service.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right: Content Panel */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
              {activeService.image ? (
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  Image placeholder
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold mb-4">{activeService.title}</h3>
              <p className="text-muted-foreground mb-6">
                {activeService.description}
              </p>

              {activeService.features.length > 0 && (
                <ul className="space-y-3">
                  {activeService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
```

### File: `components/sections/services/services-mobile.tsx`

```typescript
"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/data/services";

export function ServicesMobile() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {services.map((service) => (
        <AccordionItem key={service.id} value={service.id}>
          <AccordionTrigger className="text-left text-lg font-medium">
            {service.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-4 space-y-4">
              {/* Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    Image placeholder
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground">{service.description}</p>

              {/* Features */}
              {service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
```

---

## Partners Marquee

### File: `components/sections/partners.tsx`

```typescript
"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/shared/section-wrapper";

// Placeholder partner logos - replace with actual
const partners = [
  { id: 1, name: "Partner 1", logo: "/images/partners/partner1.png" },
  { id: 2, name: "Partner 2", logo: "/images/partners/partner2.png" },
  { id: 3, name: "Partner 3", logo: "/images/partners/partner3.png" },
  { id: 4, name: "Partner 4", logo: "/images/partners/partner4.png" },
  { id: 5, name: "Partner 5", logo: "/images/partners/partner5.png" },
  { id: 6, name: "Partner 6", logo: "/images/partners/partner6.png" },
];

export function PartnersSection() {
  return (
    <SectionWrapper className="py-12 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Be a Part of Our Partners
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee">
          {/* Double the items for seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-32 h-16 relative">
                {/* Replace with actual logos */}
                <div className="w-full h-full bg-slate-200 rounded flex items-center justify-center text-slate-400 text-sm">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

### Add to `globals.css`:

```css
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
```

---

## Contact Form

### File: `components/features/contact-form.tsx`

```typescript
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { contactSchema, type ContactFormData } from "@/lib/validations";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const result = await submitContactForm(formData);

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Message sent successfully! We'll be in touch soon.");
        form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Full Name Here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your Mail Here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What's on your mind?"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
```

---

## Tracking Widget

### File: `components/features/tracking-widget.tsx`

```typescript
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Package, MapPin, Clock, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackingSchema, type TrackingFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface TrackingResult {
  trackingNumber: string;
  status: "in_transit" | "delivered" | "pending" | "exception";
  currentLocation: string;
  estimatedDelivery: string;
  timeline: {
    date: string;
    location: string;
    status: string;
  }[];
}

// Mock data - replace with actual API call later
const mockTrackingResult: TrackingResult = {
  trackingNumber: "AX123456789",
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
      status: "Package processed",
    },
    {
      date: "2025-01-16 08:00",
      location: "Dubai Distribution Center",
      status: "In transit to destination",
    },
  ],
};

const statusConfig = {
  in_transit: { label: "In Transit", color: "text-blue-500", bg: "bg-blue-100" },
  delivered: { label: "Delivered", color: "text-green-500", bg: "bg-green-100" },
  pending: { label: "Pending", color: "text-yellow-500", bg: "bg-yellow-100" },
  exception: { label: "Exception", color: "text-red-500", bg: "bg-red-100" },
};

export function TrackingWidget() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<TrackingFormData>({
    resolver: zodResolver(trackingSchema),
    defaultValues: {
      trackingNumber: "",
    },
  });

  async function onSubmit(data: TrackingFormData) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Replace with actual API call
      // const response = await fetch(`/api/tracking/${data.trackingNumber}`);
      // const result = await response.json();

      setResult(mockTrackingResult);
    } catch (err) {
      setError("Unable to find tracking information. Please check your tracking number.");
    } finally {
      setIsLoading(false);
    }
  }

  const status = result ? statusConfig[result.status] : null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">
        Real-time Tracking for your Shipments
      </h3>

      {/* Search Form */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 mb-4">
        <Input
          placeholder="Enter tracking number"
          {...form.register("trackingNumber")}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Track"
          )}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground mb-4">
        * Enter the tracking number provided by the company.
      </p>

      {/* Error State */}
      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="space-y-3">
          <div className="h-4 bg-slate-100 rounded animate-pulse" />
          <div className="h-4 bg-slate-100 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-slate-100 rounded animate-pulse w-1/2" />
        </div>
      )}

      {/* Results */}
      <AnimatePresence>
        {result && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            {/* Status Header */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-slate-600" />
                <span className="font-mono font-medium">
                  {result.trackingNumber}
                </span>
              </div>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium",
                  status?.bg,
                  status?.color
                )}
              >
                {status?.label}
              </span>
            </div>

            {/* Current Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Current Location</p>
                  <p className="font-medium">{result.currentLocation}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Est. Delivery</p>
                  <p className="font-medium">{result.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium mb-3">Tracking History</h4>
              <div className="space-y-3">
                {result.timeline.map((event, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <CheckCircle2
                        className={cn(
                          "h-4 w-4",
                          index === result.timeline.length - 1
                            ? "text-green-500"
                            : "text-slate-300"
                        )}
                      />
                      {index < result.timeline.length - 1 && (
                        <div className="w-px h-full bg-slate-200 my-1" />
                      )}
                    </div>
                    <div className="flex-1 pb-3">
                      <p className="text-sm font-medium">{event.status}</p>
                      <p className="text-xs text-muted-foreground">
                        {event.location} • {event.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## Section Wrapper

### File: `components/shared/section-wrapper.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionWrapper({
  children,
  className,
  id,
  delay = 0,
}: SectionWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn("py-16 md:py-24", className)}
    >
      {children}
    </motion.section>
  );
}
```

---

## Smooth Scroll Link

### File: `components/shared/smooth-scroll-link.tsx`

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
  onClick,
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Handle anchor links
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    onClick?.();
  };

  return (
    <a href={href} onClick={handleClick} className={cn(className)}>
      {children}
    </a>
  );
}
```

---

## Hook: useMediaQuery

### File: `hooks/use-media-query.ts`

```typescript
"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Create listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    media.addEventListener("change", listener);

    // Cleanup
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}

export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 639px)");
}

export function useIsTablet(): boolean {
  return useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
}
```

---

*This document contains reference implementations. Adjust styles and content to match the actual design.*
