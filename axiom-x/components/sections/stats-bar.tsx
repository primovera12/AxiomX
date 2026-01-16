"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { stats } from "@/lib/constants";

export function StatsBar() {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-sm md:text-base text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
