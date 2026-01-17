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
    /* Section - CSS: padding-top: 100px, padding-bottom: 120px for tooltip space */
    <section className="pt-[100px] pb-[120px]">
      <div className="container-axiom">
        {/* Title - CSS: margin-bottom: 50px, text-align: center */}
        <div className="text-center mb-[50px]">
          {/* h2 - CSS: color: #529b66, font-weight: 700, letter-spacing: 0.4px, font-size: 36px */}
          <h2 className="text-[36px] text-[#529b66] font-bold tracking-[0.4px]">
            BRAND VALUES
          </h2>
        </div>

        {/* Brand Value Wrapper - CSS: display: flex, align-items: center, position: relative,
            background-color: #eeeeee, border-radius: 12px, padding: 0 */}
        <div className="flex items-center relative bg-[#eeeeee] rounded-[12px] p-0">
          {/* Video Play Button - CSS: bg: #19342c, width: 150px, height: 220px,
              border-top-left-radius: 12px, border-bottom-left-radius: 12px */}
          <div className="bg-[#19342c] flex items-center justify-center w-[150px] h-[220px] rounded-tl-[12px] rounded-bl-[12px] flex-shrink-0">
            {/* Play icon - CSS: font-size: 40px, color: #d4fb50 */}
            <button className="text-[40px] text-[#d4fb50]" aria-label="Play video">
              <Play className="w-10 h-10 fill-[#d4fb50]" />
            </button>
          </div>

          {/* Value Items Grid - CSS: display: grid, grid-template-columns: repeat(5, 1fr),
              align-items: center, width: 100% */}
          <div className="grid grid-cols-5 items-center w-full relative">
            {brandValues.map((value, index) => {
              const Icon = value.icon;
              const isHovered = hoveredIndex === index;

              return (
                /* Value Item - CSS: text-align: center, padding: 20px 0,
                   border-right: 1px solid #000, cursor: pointer, position: relative */
                <div
                  key={value.id}
                  className={`text-center py-[20px] cursor-pointer relative ${
                    index < brandValues.length - 1 ? "border-r border-black" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Icon - CSS: margin-bottom: 20px, max-width: 65px, transition: .4s */}
                  <div className="mb-[20px] flex justify-center">
                    <Icon
                      className={`w-[65px] h-[65px] transition-all duration-400 ${
                        isHovered
                          ? "scale-[1.6] -translate-y-5 text-[#3f7537]"
                          : "text-[#334045]"
                      }`}
                    />
                  </div>

                  {/* Label - CSS: margin: 0, font-size: 22px, font-weight: 400 (hover: 600),
                      color: #000, font-family: Inter */}
                  <h4
                    className={`m-0 text-[22px] text-black transition-all duration-300 ${
                      isHovered ? "font-semibold" : "font-normal"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {value.label}
                  </h4>

                  {/* Tooltip Note - responsive width, text wraps to fit */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bg-[#d4fb50] py-[18px] px-[30px] rounded-[200px] max-w-[90vw] text-[20px] font-normal z-[9] shadow-[0px_7px_15px_rgba(0,0,0,0.2)] transition-all duration-300 text-center whitespace-nowrap ${
                      isHovered
                        ? "opacity-100 visible mt-[45px]"
                        : "opacity-0 invisible mt-[60px]"
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
