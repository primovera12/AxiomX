"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

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
    <section id="stats" className="py-[80px]" ref={ref}>
      <div className="container-axiom">
        {/* First row - 4 stats with separators */}
        <div className="flex justify-center items-stretch mb-[55px]">
          {stats.slice(0, 4).map((stat, index) => (
            <div
              key={stat.id}
              className={`info-box text-center px-8 md:px-12 ${
                index < 3 ? "border-r-2 border-black/30" : ""
              }`}
            >
              <h2 className="text-[#53ac70] text-[50px] font-semibold mb-[20px] transition-all duration-300">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isInView={inView}
                />
              </h2>
              <p className="text-[18px] font-semibold">
                {stat.label}
                {stat.sublabel && (
                  <span className="block mt-[5px] font-normal text-[16px]">
                    {stat.sublabel}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Second row - 2 stats centered with separator */}
        <div className="flex justify-center items-stretch">
          {stats.slice(4).map((stat, index) => (
            <div
              key={stat.id}
              className={`info-box text-center px-12 md:px-16 ${
                index < 1 ? "border-r-2 border-black/30" : ""
              }`}
            >
              <h2 className="text-[#53ac70] text-[50px] font-semibold mb-[20px] transition-all duration-300">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isInView={inView}
                />
              </h2>
              <p className="text-[18px] font-semibold">
                {stat.label}
                {stat.sublabel && (
                  <span className="block mt-[5px] font-normal text-[16px]">
                    {stat.sublabel}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
