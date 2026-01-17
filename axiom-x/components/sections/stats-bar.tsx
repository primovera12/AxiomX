"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedElement } from "@/components/shared/section-wrapper";

// Stats data matching the PDF design
const stats = [
  { id: 1, value: 2, suffix: "M+", label: "Orders Delivered", sublabel: "Yearly" },
  { id: 2, value: 600, suffix: "K+", label: "Monthly Upsells", sublabel: "Activated" },
  { id: 3, value: 98, suffix: "%", label: "SLA Delivery", sublabel: "Rate" },
  { id: 4, value: 140, suffix: "K", label: "Tech Support", sublabel: "Cases Resolved" },
  { id: 5, value: 99.9, suffix: "%", label: "Inventory", sublabel: "Accuracy", decimals: 1 },
  { id: 6, value: 29, suffix: "+", label: "Warehousing", sublabel: "Facilities" },
];

interface CounterProps {
  value: number;
  suffix: string;
  decimals?: number;
  isInView: boolean;
}

function Counter({ value, suffix, decimals = 0, isInView }: CounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="stats" className="py-[40px] md:py-[60px] lg:py-[80px]" ref={ref}>
      <div className="container-axiom">
        {/* First row - 4 stats: 2x2 grid on mobile, 4 columns on desktop */}
        <AnimatedElement variant="fadeUp" className="grid grid-cols-2 md:flex md:justify-center md:items-stretch gap-y-6 md:gap-y-0 mb-[30px] md:mb-[45px] lg:mb-[55px]">
          {stats.slice(0, 4).map((stat, index) => (
            <div
              key={stat.id}
              className={`info-box text-center px-3 md:px-8 lg:px-12 ${
                index < 3 ? "md:border-r-2 md:border-black/30" : ""
              } ${index % 2 === 0 ? "border-r border-black/20 md:border-r-0" : ""}`}
            >
              <h2 className="text-[#53ac70] text-[28px] md:text-[38px] lg:text-[50px] font-semibold mb-[10px] md:mb-[15px] lg:mb-[20px] transition-all duration-300">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isInView={inView}
                />
              </h2>
              <p className="text-[12px] md:text-[14px] lg:text-[18px] font-semibold">
                {stat.label}
                {stat.sublabel && (
                  <span className="block mt-[3px] md:mt-[4px] lg:mt-[5px] font-normal text-[11px] md:text-[13px] lg:text-[16px]">
                    {stat.sublabel}
                  </span>
                )}
              </p>
            </div>
          ))}
        </AnimatedElement>

        {/* Second row - 2 stats centered with separator */}
        <AnimatedElement variant="fadeUp" delay={0.15} className="flex justify-center items-stretch">
          {stats.slice(4).map((stat, index) => (
            <div
              key={stat.id}
              className={`info-box text-center px-6 md:px-10 lg:px-16 ${
                index < 1 ? "border-r md:border-r-2 border-black/20 md:border-black/30" : ""
              }`}
            >
              <h2 className="text-[#53ac70] text-[28px] md:text-[38px] lg:text-[50px] font-semibold mb-[10px] md:mb-[15px] lg:mb-[20px] transition-all duration-300">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isInView={inView}
                />
              </h2>
              <p className="text-[12px] md:text-[14px] lg:text-[18px] font-semibold">
                {stat.label}
                {stat.sublabel && (
                  <span className="block mt-[3px] md:mt-[4px] lg:mt-[5px] font-normal text-[11px] md:text-[13px] lg:text-[16px]">
                    {stat.sublabel}
                  </span>
                )}
              </p>
            </div>
          ))}
        </AnimatedElement>
      </div>
    </section>
  );
}
