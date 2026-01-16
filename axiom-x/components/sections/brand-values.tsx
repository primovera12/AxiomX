"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Zap,
  Shield,
  HeartHandshake,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { brandValues } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Zap,
  Shield,
  HeartHandshake,
  Lightbulb,
};

export function BrandValuesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4"
          >
            Our Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            The principles that drive everything we do
          </motion.p>
        </div>

        {/* Desktop: Horizontal Row */}
        <div className="hidden md:grid md:grid-cols-5 gap-6">
          {brandValues.map((value, index) => {
            const Icon = iconMap[value.icon] || Target;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary-dark mb-2">
                  {value.label}
                </h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Horizontal Scroll with Snap */}
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {brandValues.map((value, index) => {
              const Icon = iconMap[value.icon] || Target;
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="flex-shrink-0 w-[200px] snap-center bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-primary-dark mb-2">
                    {value.label}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
