"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ServicesDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <div className="grid grid-cols-[320px_1fr] xl:grid-cols-[380px_1fr] gap-8 lg:gap-12">
      {/* Left: Service Tabs */}
      <div className="relative">
        {/* Active Indicator */}
        <motion.div
          className="absolute left-0 w-1 bg-primary rounded-full"
          layoutId="activeIndicator"
          initial={false}
          animate={{
            top: activeIndex * 64,
            height: 56,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        <div className="flex flex-col">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "text-left px-6 py-4 rounded-r-lg transition-all duration-200 border-l-4 border-transparent",
                activeIndex === index
                  ? "bg-primary/5 text-primary-dark border-l-primary"
                  : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
              )}
            >
              <span className="text-base lg:text-lg font-medium line-clamp-1">
                {service.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right: Content Panel */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 xl:grid-cols-2 gap-8"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h3 className="font-heading text-2xl xl:text-3xl font-bold text-primary-dark mb-4">
                {activeService.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activeService.description}
              </p>

              {activeService.features.length > 0 && (
                <ul className="space-y-3">
                  {activeService.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
