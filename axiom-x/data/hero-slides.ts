export interface HeroSlide {
  id: number;
  headline: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    headline: "From first mile to final revenue touchpoint, we power the unseen.",
    subtext:
      "Your operations have untapped potential. Axiom X helps you find it and turn it into execution, insight, and growth.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
    backgroundVideo: "/videos/video-1.mov",
  },
  {
    id: 2,
    headline: "Are you Searching for X?",
    subtext:
      "At Axiom X, we don't sell services. We offer a system. One that thinks, scales, and adapts with your business.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
    backgroundVideo: "/videos/video-2.mp4",
  },
  {
    id: 3,
    headline: "29+ Facilities. 99.9% Accuracy. One Platform.",
    subtext:
      "Our AI-enhanced ecosystem was built for the operational complexity that most businesses are only now realizing they need to solve.",
    ctaPrimary: "Speak to an Expert",
    ctaSecondary: "Create an Account",
    backgroundImage: "/images/backgrounds/bg-1.jpg",
  },
];
