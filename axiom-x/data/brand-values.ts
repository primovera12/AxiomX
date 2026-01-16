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

// Why Axiom X carousel slides
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
    description:
      "One platform. One partner. A single-window solution from inception to final revenue realization.",
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
    description:
      "You don't just need to outsource. You need to outsmart, outscale, and out-deliver.",
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
