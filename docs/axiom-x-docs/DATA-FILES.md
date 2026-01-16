# Data Files for Axiom X

> **For Claude Code:** Create these files in the `data/` directory during Phase 1.

---

## data/navigation.ts

```typescript
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Why AxiomX", href: "#why-axiom" },
  { label: "About", href: "#our-story" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms Of Use", href: "/terms" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "#contact" },
  ],
  account: [
    { label: "My Account", href: "/account" },
    { label: "Login / Register", href: "/login" },
  ],
};
```

---

## data/site-config.ts

```typescript
export const siteConfig = {
  name: "Axiom X",
  tagline: "Your operational growth engine",
  description:
    "From first mile to final revenue touchpoint, we power the unseen. Axiom X helps you find untapped potential and turn it into execution, insight, and growth.",
  contact: {
    email: "info@axiomxgroup.com",
    phone: "+971 4 3101 010",
    regions: ["UAE", "KSA", "Oman", "Kuwait"],
  },
  social: {
    facebook: "https://facebook.com/axiomxgroup",
    twitter: "https://twitter.com/axiomxgroup",
    instagram: "https://instagram.com/axiomxgroup",
    linkedin: "https://linkedin.com/company/axiomxgroup",
  },
};
```

---

## data/hero-slides.ts

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
    subtext:
      "Your operations have untapped potential. Axiom X helps you find it and turn it into execution, insight, and growth.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
  },
  {
    id: 2,
    headline: "Are you Searching for X?",
    subtext:
      "At Axiom X, we don't sell services. We offer a system. One that thinks, scales, and adapts with your business.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
  },
  {
    id: 3,
    headline: "29+ Facilities. 99.9% Accuracy. One Platform.",
    subtext:
      "Our AI-enhanced ecosystem was built for the operational complexity that most businesses are only now realizing they need to solve.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
  },
];
```

---

## data/stats.ts

```typescript
export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

// Primary stats bar (displayed prominently)
export const stats: Stat[] = [
  {
    id: "years",
    value: 20,
    suffix: "+",
    label: "Years Operational Excellence",
  },
  {
    id: "orders",
    value: 2000000,
    suffix: "+",
    label: "Orders / Year Delivered",
  },
  {
    id: "sla",
    value: 98,
    suffix: "%",
    label: "SLA Achievement",
  },
  {
    id: "support",
    value: 160000,
    suffix: "+",
    label: "Technical Cases Resolutions / Yearly",
  },
];

// Secondary stats (can be displayed elsewhere)
export const additionalStats: Stat[] = [
  {
    id: "accuracy",
    value: 99,
    suffix: "%",
    label: "Inventory Accuracy",
  },
  {
    id: "iso",
    value: 5,
    suffix: "",
    label: "ISO Certifications Compliance",
  },
  {
    id: "hubs",
    value: 7,
    suffix: "",
    label: "Regional Network Hubs",
  },
  {
    id: "response",
    value: 30,
    suffix: " Sec",
    label: "Response Customer Support",
  },
];
```

---

## data/services.ts

```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon?: string; // Lucide icon name
}

export const services: Service[] = [
  {
    id: "last-mile",
    title: "Last Mile Delivery",
    description:
      "The promise of speed, delivered. From AI-based dispatch to branded delivery fleets, we make sure the last step of your customer journey reflects everything you stand for.",
    features: [
      "Same-Day & Next-Day Delivery",
      "On-Demand & Express Delivery",
      "B2C & B2B Deliveries",
      "Reverse Logistics",
      "Customized delivery solutions",
    ],
    image: "/images/services/last-mile.jpg",
    icon: "Truck",
  },
  {
    id: "warehousing",
    title: "Warehousing & Inventory Management",
    description:
      "Storage built for action, not stagnation. From inventory intelligence to optimized flow, our fulfillment-first warehouses are ready for your growth — and your complexity.",
    features: [
      "Inventory Management",
      "Storage solutions",
      "Inbound & Outbound",
      "Order Fulfillment",
    ],
    image: "/images/services/warehousing.jpg",
    icon: "Warehouse",
  },
  {
    id: "call-center",
    title: "Call Center Support",
    description:
      "Where customer empathy meets automated efficiency. Whether you're resolving issues or driving conversions, we power conversations that matter. With a scale of 1M+ annual interactions yearly at 30 sec response time.",
    features: [
      "Omnichannel Customer Support",
      "AI / Multilingual Voice Agents / Chat",
      "Inbound Customer Care",
      "Outbound Engagement",
    ],
    image: "/images/services/call-center.jpg",
    icon: "Headphones",
  },
  {
    id: "back-office",
    title: "Back Office Services",
    description:
      "Because the backend shouldn't slow you down. We handle the data, the documents, and the details — so your team can focus on building. With a proven track record of 160K+ technical ticket resolution yearly.",
    features: [
      "Onshore Back Office Services",
      "Offshore Back Office Services",
      "Multi level technical support",
    ],
    image: "/images/services/back-office.jpg",
    icon: "FileText",
  },
  {
    id: "vas",
    title: "Value-Added Services (VAS)",
    description:
      "Your packaging, presentation, and post-sale excellence — all handled. From kitting to IMEI tracking, we extend your customer promise beyond the delivery itself.",
    features: [
      "Packaging, Kitting & Customization",
      "Post-Delivery Assembly & Installation",
      "Returns, Exchange & Reverse Processing",
      "Refurbishment & Repair Services",
    ],
    image: "/images/services/vas.jpg",
    icon: "Package",
  },
  {
    id: "upselling",
    title: "Upselling Revenue Programs",
    description:
      "We don't just fulfill demand — we create it. We activate upsell logic across your call centers, field teams, and support scripts — delivering real revenue from service interactions.",
    features: [
      "Embedded Upselling at Every Touchpoint",
      "Brand presentation & merchandising activity",
    ],
    image: "/images/services/upselling.jpg",
    icon: "TrendingUp",
  },
];
```

---

## data/brand-values.ts

```typescript
export interface BrandValue {
  id: string;
  label: string;
  icon: string; // Lucide icon name
  description?: string;
}

export const brandValues: BrandValue[] = [
  {
    id: "precision",
    label: "Precision",
    icon: "Target",
    description: "We execute with discipline and clarity",
  },
  {
    id: "agility",
    label: "Agility",
    icon: "Zap",
    description: "We respond, reroute, and adapt in real-time",
  },
  {
    id: "reliability",
    label: "Reliability",
    icon: "Shield",
    description: "You can build your business on us",
  },
  {
    id: "support",
    label: "Support",
    icon: "HeartHandshake",
    description: "We extend your capabilities, not just your workload",
  },
  {
    id: "innovation",
    label: "Innovation",
    icon: "Lightbulb",
    description: "Embedded intelligence at every touchpoint",
  },
];

// Why Axiom X carousel slides (from old site)
export interface WhyAxiomSlide {
  id: number;
  headline: string;
  description: string;
  cards: {
    icon: string;
    title: string;
    text: string;
  }[];
  note: string;
}

export const whyAxiomSlides: WhyAxiomSlide[] = [
  {
    id: 1,
    headline: "Why Axiom X?",
    description: "One platform. One partner. A single-window solution from inception to final revenue realization.",
    cards: [
      {
        icon: "/images/icons/idea.png",
        title: "Challenge Status Quo",
        text: "We challenge the status quo – Continuously seeking smarter, more efficient ways to improve and transform the business.",
      },
      {
        icon: "/images/icons/innovation.png",
        title: "Innovate With Purpose",
        text: "We innovate with purpose – Bringing fresh ideas and embracing new approaches to enhance outcomes.",
      },
    ],
    note: "Our excellence, leadership, and differentiation are not just built on experience, but on a culture that drives us to constantly evolve and excel.",
  },
  {
    id: 2,
    headline: "Why Axiom X?",
    description: "You don't just need to outsource. You need to outsmart, outscale, and out-deliver.",
    cards: [
      {
        icon: "/images/icons/adaptation.png",
        title: "Agile and Adaptable",
        text: "We are agile and adaptable – Demonstrated in past projects where we break conventional boundaries to deliver results.",
      },
      {
        icon: "/images/icons/iteration.png",
        title: "Proactive and Bold",
        text: "We are proactive and bold – Always looking ahead, taking initiative, and pushing beyond expectations.",
      },
    ],
    note: "Our excellence, leadership, and differentiation are not just built on experience, but on a culture that drives us to constantly evolve and excel.",
  },
];
```

---

## data/content.ts

```typescript
export const content = {
  whyAxiom: {
    headline: "Why Axiom X?",
    subheadline:
      "You don't just need to outsource. You need to outsmart, outscale, and out-deliver.",
    description:
      "Our AI-enhanced ecosystem was built for the operational complexity that most businesses are only now realizing they need to solve. Axiom X isn't just a service provider — we're your operational growth engine.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
  },

  ourStory: {
    headline: "OUR STORY: FROM 1997 TO THE AI ERA",
    content:
      "We started in 1997 as Axiom X Telecom — building the Middle East's largest mobility distribution engine. We helped global brands scale through precision logistics, resilient warehousing, and high-volume fulfillment. Today, we combine that legacy with AI-driven innovation to power the next generation of business operations.",
    cta: "Read full story",
  },

  vision: {
    headline: "Vision",
    content:
      "To be the unseen force powering the next era of business operations.",
  },

  mission: {
    headline: "Mission",
    content:
      "To simplify, enable, and scale modern operations through intelligent, AI-driven services.",
  },

  careers: {
    headline: "Build the future of operations.",
    subheadline:
      "We're looking for operators, strategists, and technologists ready to redesign what B2B execution looks like in the Middle East.",
    ctaPrimary: "Join the X Team",
    ctaSecondary: "READ MORE CAREERS",
  },

  contact: {
    headline: "Let's talk scale.",
    subheadline:
      "Whether you're looking to optimize delivery, centralize operations, or unlock new revenue — Axiom X is your growth partner.",
  },

  tracking: {
    headline: "Real-time Tracking for your Shipments",
    placeholder: "Tracking Number",
    helperText: "* enter the tracking number provided by the company.",
    buttonText: "Track",
  },

  newsletter: {
    headline: "Subscribe",
    description: "Get 10% off your first order",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
};
```

---

## lib/validations.ts

```typescript
import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const trackingSchema = z.object({
  trackingNumber: z
    .string()
    .min(5, "Please enter a valid tracking number")
    .max(50, "Tracking number is too long"),
});

// Type exports
export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type TrackingFormData = z.infer<typeof trackingSchema>;
```

---

## lib/constants.ts

```typescript
// Re-export everything for convenience
export { siteConfig } from "@/data/site-config";
export { navLinks, footerLinks } from "@/data/navigation";
export { heroSlides } from "@/data/hero-slides";
export { stats, additionalStats } from "@/data/stats";
export { services } from "@/data/services";
export { brandValues, whyAxiomSlides } from "@/data/brand-values";
export { content } from "@/data/content";
```

---

*Copy these files into your project during setup.*
