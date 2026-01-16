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
    image: "/images/services/service-1.jpg",
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
    image: "/images/services/service-1.jpg",
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
    image: "/images/services/service-1.jpg",
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
    image: "/images/services/service-1.jpg",
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
    image: "/images/services/service-1.jpg",
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
    image: "/images/services/service-1.jpg",
    icon: "TrendingUp",
  },
];
