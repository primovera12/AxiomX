"use client";

import { useState } from "react";
import { Play, Target, Zap, Shield, HeartHandshake, Lightbulb } from "lucide-react";

const brandValues = [
  {
    id: "precision",
    label: "Precision",
    icon: Target,
    note: "We execute with discipline and clarity",
  },
  {
    id: "agility",
    label: "Agility",
    icon: Zap,
    note: "We respond, reroute, and adapt in real-time",
  },
  {
    id: "reliability",
    label: "Reliability",
    icon: Shield,
    note: "You can build your business on us",
  },
  {
    id: "support",
    label: "Support",
    icon: HeartHandshake,
    note: "We extend your capabilities, not just your workload",
  },
  {
    id: "innovation",
    label: "Innovation",
    icon: Lightbulb,
    note: "Embedded intelligence at every touchpoint",
  },
];

export function BrandValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    /* Section - Responsive padding */
    <section className="pt-[60px] pb-[100px] md:pt-[80px] md:pb-[110px] lg:pt-[100px] lg:pb-[120px]">
      <div className="container-axiom">
        {/* Title - Responsive margin and text */}
        <div className="text-center mb-[30px] md:mb-[40px] lg:mb-[50px]">
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] text-[#529b66] font-bold tracking-[0.4px]">
            BRAND VALUES
          </h2>
        </div>

        {/* Brand Value Wrapper - Responsive flex direction */}
        <div className="flex flex-col md:flex-row items-center relative bg-[#eeeeee] rounded-[12px] p-0">
          {/* Video Play Button - Responsive sizing */}
          <div className="bg-[#19342c] flex items-center justify-center w-full md:w-[120px] lg:w-[150px] h-[80px] md:h-[180px] lg:h-[220px] rounded-t-[12px] md:rounded-t-none md:rounded-tl-[12px] md:rounded-bl-[12px] flex-shrink-0">
            <button className="text-[#d4fb50]" aria-label="Play video">
              <Play className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 fill-[#d4fb50]" />
            </button>
          </div>

          {/* Value Items Grid - Responsive columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center w-full relative">
            {brandValues.map((value, index) => {
              const Icon = value.icon;
              const isHovered = hoveredIndex === index;

              return (
                {/* Value Item - Responsive padding and borders */}
                <div
                  key={value.id}
                  className={`text-center py-3 md:py-4 lg:py-[20px] cursor-pointer relative ${
                    index < brandValues.length - 1 ? "md:border-r border-black/20 lg:border-black" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Icon - Responsive sizing */}
                  <div className="mb-3 md:mb-4 lg:mb-[20px] flex justify-center">
                    <Icon
                      className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[65px] lg:h-[65px] transition-all duration-400 ${
                        isHovered
                          ? "scale-[1.4] md:scale-[1.5] lg:scale-[1.6] -translate-y-3 md:-translate-y-4 lg:-translate-y-5 text-[#3f7537]"
                          : "text-[#334045]"
                      }`}
                    />
                  </div>

                  {/* Label - Responsive text size */}
                  <h4
                    className={`m-0 text-[14px] md:text-[17px] lg:text-[22px] text-black transition-all duration-300 ${
                      isHovered ? "font-semibold" : "font-normal"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {value.label}
                  </h4>

                  {/* Tooltip Note - Responsive sizing and positioning */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bg-[#d4fb50] py-2 px-4 md:py-3 md:px-5 lg:py-[18px] lg:px-[30px] rounded-[200px] max-w-[85vw] md:max-w-[90vw] text-[12px] md:text-[14px] lg:text-[20px] font-normal z-[9] shadow-[0px_7px_15px_rgba(0,0,0,0.2)] transition-all duration-300 text-center whitespace-nowrap ${
                      isHovered
                        ? "opacity-100 visible mt-[30px] md:mt-[35px] lg:mt-[45px]"
                        : "opacity-0 invisible mt-[45px] md:mt-[50px] lg:mt-[60px]"
                    }`}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      top: "100%",
                    }}
                  >
                    {value.note}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
