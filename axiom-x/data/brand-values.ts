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
    description: "We operate with a discipline that turns 'logistics' into an exact science.",
  },
  {
    id: "agility",
    label: "Agility",
    icon: "Zap",
    description: "We don't just react; we reroute and adapt at the speed of the market.",
  },
  {
    id: "reliability",
    label: "Reliability",
    icon: "Shield",
    description: "We are the foundation. You can build your biggest ambitions on our infrastructure.",
  },
  {
    id: "impact",
    label: "Impact",
    icon: "HeartHandshake",
    description: "We don't just add to your workload; we multiply your capabilities.",
  },
  {
    id: "innovation",
    label: "Innovation",
    icon: "Lightbulb",
    description: "We embed intelligence at every touchpoint—because 'standard' is never enough.",
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
    headline: "The Axiom X Factor",
    description: "One Platform. One Partner.",
    cards: [
      {
        icon: "/images/icons/idea.png",
        title: "The Single-Window Advantage",
        text: "From the first click to final revenue realization, we provide a seamless, end-to-end solution. No more fragmented vendors or data silos—just one partner, one platform, and total accountability.",
      },
      {
        icon: "/images/icons/innovation.png",
        title: "Innovation with Purpose",
        text: "We challenge the status quo by bringing fresh, tech-forward ideas to the table. We don't just follow industry standards; we set them, continuously seeking smarter ways to transform your business outcomes.",
      },
    ],
    note: "Our differentiation is built on a culture that refuses to stagnate.",
  },
  {
    id: 2,
    headline: "The Axiom X Factor",
    description: "One Platform. One Partner.",
    cards: [
      {
        icon: "/images/icons/adaptation.png",
        title: "Proven Agility & Bold Execution",
        text: "We thrive where others see boundaries. As demonstrated in our high-stakes work with major partners, we are agile, proactive, and bold. We don't wait for instructions—we take the initiative to push beyond expectations and deliver results.",
      },
      {
        icon: "/images/icons/iteration.png",
        title: "A Culture of Excellence",
        text: "Our differentiation is built on a culture that refuses to stagnate. We combine years of deep experience with a restless drive to evolve, ensuring that your operations are always powered by the latest in strategic excellence.",
      },
    ],
    note: "Our excellence, leadership, and differentiation are not just built on experience, but on a culture that drives us to constantly evolve and excel.",
  },
];
