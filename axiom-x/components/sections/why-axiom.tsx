"use client";

import { Layers, Lightbulb, Zap, Award } from "lucide-react";
import { AnimatedElement } from "@/components/shared/section-wrapper";

// Feature card data
const features = [
  {
    id: 1,
    title: "The Single-Window Advantage",
    icon: Layers,
    description:
      "From the first click to final revenue realization, we provide a seamless, end-to-end solution. No more fragmented vendors or data silos—just one partner, one platform, and total accountability.",
  },
  {
    id: 2,
    title: "Innovation with Purpose",
    icon: Lightbulb,
    description:
      "We challenge the status quo by bringing fresh, tech-forward ideas to the table. We don't just follow industry standards; we set them, continuously seeking smarter ways to transform your business outcomes.",
  },
  {
    id: 3,
    title: "Proven Agility & Bold Execution",
    icon: Zap,
    description:
      "We thrive where others see boundaries. We are agile, proactive, and bold. We don't wait for instructions—we take the initiative to push beyond expectations and deliver results.",
  },
  {
    id: 4,
    title: "A Culture of Excellence",
    icon: Award,
    description:
      "Our differentiation is built on a culture that refuses to stagnate. We combine years of deep experience with a restless drive to evolve, ensuring that your operations are always powered by strategic excellence.",
  },
];

export function WhyAxiomSection() {
  return (
    <section id="why-axiom" className="pt-[40px] pb-[80px] md:pt-[60px] md:pb-[100px] lg:pt-[80px] lg:pb-[120px]">
      <div className="container-axiom">
        {/* Header */}
        <AnimatedElement variant="fadeUp" className="text-center mb-[40px] md:mb-[50px] lg:mb-[60px]">
          <h2 className="text-black text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.01em]">
            One Platform. One Partner.
          </h2>
        </AnimatedElement>

        {/* Feature Cards Grid - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedElement
                key={feature.id}
                variant="fadeUp"
                delay={0.1 + index * 0.1}
                className="flex flex-col gap-3 md:gap-4 group p-5 md:p-6 bg-[#f7f7f7] border border-[#f0f0f0] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-[#53ac70] transition-all duration-300"
              >
                {/* Icon */}
                <div className="transition-all duration-300 group-hover:-translate-y-1">
                  <Icon className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 text-[#334045] group-hover:text-[#3f7537] transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 md:gap-3">
                  {/* Title */}
                  <h3 className="text-black text-[14px] lg:text-[16px] font-semibold leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#373737] text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}
