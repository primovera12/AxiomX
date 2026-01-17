export interface Service {
  id: string;
  emoji: string;
  title: string;
  boldText: string;
  description: string;
  tags: string[];
  image: string;
}

// 5 services as shown in PDF (NO Last Mile Delivery)
export const services: Service[] = [
  {
    id: "warehousing",
    emoji: "🏪",
    title: "Warehousing & Inventory",
    boldText: "Storage built for action, not stagnation.",
    description:
      "From inventory intelligence to optimized flow, our fulfillment-first warehouses are ready for your growth — and your complexity.",
    tags: [
      "29 warehouses, 122K+ sqft capacity",
      "99.9% inventory accuracy",
      "Real-time dashboards via WMS integrations",
      "Modular zoning, temperature-controlled environments",
    ],
    image: "/images/service-1.jpg",
  },
  {
    id: "call-center",
    emoji: "📞",
    title: "Call Center Support",
    boldText: "Where customer empathy meets automated efficiency.",
    description:
      "Whether you're resolving issues or driving conversions, we power conversations that matter.",
    tags: [
      "Omnichannel Customer Support",
      "AI / Multilingual Voice Agents / Chat",
      "Inbound Customer Care",
      "Outbound Engagement",
    ],
    image: "/images/service-1.jpg",
  },
  {
    id: "back-office",
    emoji: "💼",
    title: "Back Office Services",
    boldText: "Because the backend shouldn't slow you down.",
    description:
      "We handle the data, the documents, and the details — so your team can focus on building.",
    tags: [
      "Onshore Back Office Services",
      "Offshore Back Office Services",
      "Multi level technical support",
    ],
    image: "/images/service-1.jpg",
  },
  {
    id: "vas",
    emoji: "📦",
    title: "Value-Added Services (VAS)",
    boldText: "Your packaging, presentation, and post-sale excellence — all handled.",
    description:
      "From kitting to IMEI tracking, we extend your customer promise beyond the delivery itself.",
    tags: [
      "Packaging, Kitting & Customization",
      "Post-Delivery Assembly & Installation",
      "Returns, Exchange & Reverse Processing",
      "Refurbishment & Repair Services",
    ],
    image: "/images/service-1.jpg",
  },
  {
    id: "upselling",
    emoji: "📈",
    title: "Upselling Revenue Programs",
    boldText: "We don't just fulfill demand — we create it.",
    description:
      "We activate upsell logic across your call centers, field teams, and support scripts.",
    tags: [
      "Embedded Upselling at Every Touchpoint",
      "Brand presentation & merchandising activity",
    ],
    image: "/images/service-1.jpg",
  },
];
