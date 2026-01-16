"use client";

import Image from "next/image";
import { partners } from "@/lib/constants";

export function PartnersSection() {
  // Double the partners array for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-12 md:py-16 bg-neutral-medium overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          Be a Part of Our Partners
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative group">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-neutral-medium to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-neutral-medium to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {allPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-6 md:mx-10 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-24 md:w-32 h-12 md:h-16 relative flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
