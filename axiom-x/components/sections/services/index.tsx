"use client";

import { useIsDesktop } from "@/hooks/use-media-query";
import { ServicesDesktop } from "./services-desktop";
import { ServicesMobile } from "./services-mobile";

export function ServicesSection() {
  const isDesktop = useIsDesktop();

  return (
    <section id="services" className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-section font-bold text-primary-dark mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to scale with your business
          </p>
        </div>

        {/* Services Content */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
          {isDesktop ? <ServicesDesktop /> : <ServicesMobile />}
        </div>
      </div>
    </section>
  );
}
