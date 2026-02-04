import { Truck, Warehouse, Phone, Building2, Wrench, TrendingUp, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  boldText: string;
  description: string;
  tags: string[];
  image: string;
}

// 6 services including Last Mile Delivery
export const services: Service[] = [
  {
    id: "last-mile",
    icon: Truck,
    title: "Last Mile Delivery",
    boldText: "The promise of speed, delivered.",
    description:
      "From AI-based dispatch to branded delivery fleets, we make sure the last step of your customer journey reflects everything you stand for.",
    tags: [
      "Same-Day & Next-Day Delivery",
      "On-Demand & Express Delivery",
      "B2C & B2B Deliveries",
      "Reverse Logistics",
      "Customized delivery solutions",
    ],
    image: "/images/service-last-mile.png",
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing & Inventory Management",
    boldText: "Storage built for action, not stagnation.",
    description:
      "From inventory intelligence to optimized flow, our fulfillment-first warehouses are ready for your growth — and your complexity.",
    tags: [
      "Inventory Management",
      "Storage Solutions",
      "Inbound & Outbound",
      "Order Fulfillment",
      "Customized 3PL/4PL Solutions",
    ],
    image: "/images/service-warehouse.png",
  },
  {
    id: "call-center",
    icon: Phone,
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
    image: "/images/service-call-center.png",
  },
  {
    id: "back-office",
    icon: Building2,
    title: "Back Office Services",
    boldText: "Because the backend shouldn't slow you down.",
    description:
      "We handle the data, the documents, and the details — so your team can focus on building.",
    tags: [
      "Onshore Back Office Services",
      "Offshore Back Office Services",
      "Multi level technical support",
    ],
    image: "/images/service-back-office.png",
  },
  {
    id: "vas",
    icon: Wrench,
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
    image: "/images/service-vas.png",
  },
  {
    id: "upselling",
    icon: TrendingUp,
    title: "Upselling Revenue Programs",
    boldText: "We don't just fulfill demand — we create it.",
    description:
      "We activate upsell logic across your call centers, field teams, and support scripts.",
    tags: [
      "Embedded Upselling at Every Touchpoint",
      "Brand presentation & merchandising activity",
    ],
    image: "/images/service-upselling.png",
  },
];
