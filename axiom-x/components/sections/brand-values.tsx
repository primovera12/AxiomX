"use client";

import { useState } from "react";
import { Target, Zap, Shield, HeartHandshake, Lightbulb } from "lucide-react";
import { AnimatedElement } from "@/components/shared/section-wrapper";

const brandValues = [
  {
    id: "precision",
    label: "Precision",
    icon: Target,
    note: "We operate with a discipline that turns 'logistics' into an exact science.",
  },
  {
    id: "agility",
    label: "Agility",
    icon: Zap,
    note: "We don't just react; we reroute and adapt at the speed of the market.",
  },
  {
    id: "reliability",
    label: "Reliability",
    icon: Shield,
    note: "We are the foundation. You can build your biggest ambitions on our infrastructure.",
  },
  {
    id: "impact",
    label: "Impact",
    icon: HeartHandshake,
    note: "We don't just add to your workload; we multiply your capabilities.",
  },
  {
    id: "innovation",
    label: "Innovation",
    icon: Lightbulb,
    note: "We embed intelligence at every touchpoint—because 'standard' is never enough.",
  },
];

export function BrandValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="pt-[60px] pb-[30px] md:pt-[80px] md:pb-[110px] lg:pt-[100px] lg:pb-[120px]">
      <div className="container-axiom">
        {/* Title - Responsive margin and text */}
        <AnimatedElement variant="fadeUp" className="text-center mb-[30px] md:mb-[40px] lg:mb-[50px]">
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] text-[#529b66] font-bold tracking-[0.4px]">
            Brand Values
          </h2>
        </AnimatedElement>

        {/* Mobile Layout - Row style with visible lime boxes */}
        <AnimatedElement variant="fadeUp" delay={0.1} className="md:hidden">
          {/* Mobile Value Items - Stacked rows */}
          <div className="bg-[#f7f7f7] rounded-[12px] py-4 px-4">
            {brandValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.id}
                  className={`flex items-center gap-3 py-3 ${
                    index < brandValues.length - 1 ? "border-b border-black/10" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Icon className="w-[32px] h-[32px] text-[#334045]" />
                  </div>

                  {/* Title */}
                  <h4 className="text-[14px] text-black font-semibold min-w-[80px]">
                    {value.label}
                  </h4>

                  {/* Description - Always visible on mobile */}
                  <div className="flex-1">
                    <span className="text-[11px] font-normal text-black">
                      {value.note}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedElement>

        {/* Desktop/Tablet Layout - Grid with hover effect */}
        <AnimatedElement variant="fadeUp" delay={0.1} className="hidden md:block bg-[#f7f7f7] rounded-[12px]">
          {/* Value Items Grid - Responsive columns */}
          <div className="grid grid-cols-3 lg:grid-cols-5 items-center w-full relative">
            {brandValues.map((value, index) => {
              const Icon = value.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={value.id}
                  className={`text-center py-4 lg:py-[20px] cursor-pointer relative ${
                    index < brandValues.length - 1 ? "border-r border-black/20 lg:border-black" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Icon - Responsive sizing */}
                  <div className="mb-4 lg:mb-[20px] flex justify-center">
                    <Icon
                      className={`w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] transition-all duration-400 ${
                        isHovered
                          ? "scale-[1.5] lg:scale-[1.6] -translate-y-4 lg:-translate-y-5 text-[#3f7537]"
                          : "text-[#334045]"
                      }`}
                    />
                  </div>

                  {/* Label - Responsive text size */}
                  <h4
                    className={`m-0 text-[14px] lg:text-[16px] text-black transition-all duration-300 ${
                      isHovered ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {value.label}
                  </h4>

                  {/* Tooltip Note - Responsive sizing and positioning */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bg-[#d4fb50] py-3 px-5 lg:py-[18px] lg:px-[30px] rounded-[200px] max-w-[90vw] text-[14px] lg:text-[16px] font-normal z-[9] shadow-[0px_7px_15px_rgba(0,0,0,0.2)] transition-all duration-300 text-center whitespace-nowrap ${
                      isHovered
                        ? "opacity-100 visible mt-[35px] lg:mt-[45px]"
                        : "opacity-0 invisible mt-[50px] lg:mt-[60px]"
                    }`}
                    style={{ top: "100%" }}
                  >
                    {value.note}
                  </span>
                </div>
              );
            })}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
