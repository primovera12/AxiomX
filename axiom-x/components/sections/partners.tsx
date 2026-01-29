"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedElement } from "@/components/shared/section-wrapper";

// Partner logos
const partners = [
  { id: 1, logo: "/images/l-1.png", name: "Partner 1", type: "long" },
  { id: 2, logo: "/images/l-2.png", name: "Partner 2", type: "box" },
  { id: 3, logo: "/images/l-11.png", name: "Partner 3", type: "long" },
  { id: 4, logo: "/images/l-3.png", name: "Partner 4", type: "long" },
  { id: 5, logo: "/images/l-4.png", name: "Partner 5", type: "long" },
  { id: 6, logo: "/images/l-18.png", name: "Partner 6", type: "box" },
  { id: 7, logo: "/images/l-5.webp", name: "Partner 7", type: "long" },
  { id: 8, logo: "/images/l-6.png", name: "Partner 8", type: "long" },
  { id: 9, logo: "/images/l-7.png", name: "Partner 9", type: "box" },
  { id: 10, logo: "/images/l-8.png", name: "Partner 10", type: "long" },
  { id: 11, logo: "/images/l-9.jpeg", name: "Partner 11", type: "long" },
  { id: 12, logo: "/images/l-10.png", name: "Partner 12", type: "box" },
  { id: 13, logo: "/images/l-13.png", name: "Partner 13", type: "long" },
  { id: 14, logo: "/images/l-12.png", name: "Partner 14", type: "box" },
  { id: 15, logo: "/images/l-20.png", name: "Partner 15", type: "long" },
];

export function PartnersSection() {
  return (
    <section id="partners" className="pb-[40px] md:pb-[60px] lg:pb-[80px]">
      {/* Partners Title - Responsive sizing */}
      <AnimatedElement variant="fadeUp" className="container-axiom text-center mb-[30px] md:mb-[45px] lg:mb-[60px]">
        <h2 className="text-[18px] md:text-[22px] lg:text-[28px] tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px] font-light uppercase font-heading mb-[10px] md:mb-[15px] lg:mb-[20px]">
          BE A PART OF OUR PARTNERS
        </h2>
      </AnimatedElement>

      {/* Partners Wrapper - Responsive padding and height */}
      <div className="bg-[#ececec] py-[20px] md:py-[30px] lg:py-[40px] relative overflow-hidden">
        {/* Marquee - Edge to edge infinite loop */}
        <div className="flex items-center overflow-hidden">
            {/* Marquee animation container - Responsive height */}
            <div className="flex animate-marquee items-center h-[80px] md:h-[120px] lg:h-[160px]">
              {/* First set of logos */}
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 px-3 md:px-4 lg:px-6 flex items-center justify-center h-[80px] md:h-[120px] lg:h-[160px]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className={
                      partner.type === "long"
                        ? "w-auto max-h-[30px] md:max-h-[38px] lg:max-h-[45px]"
                        : "w-auto max-h-[45px] md:max-h-[55px] lg:max-h-[70px]"
                    }
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`dup-${partner.id}`}
                  className="flex-shrink-0 px-3 md:px-4 lg:px-6 flex items-center justify-center h-[80px] md:h-[120px] lg:h-[160px]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className={
                      partner.type === "long"
                        ? "w-auto max-h-[30px] md:max-h-[38px] lg:max-h-[45px]"
                        : "w-auto max-h-[45px] md:max-h-[55px] lg:max-h-[70px]"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* CTA Buttons - Responsive sizing */}
      <AnimatedElement variant="fadeUp" delay={0.1} className="container-axiom px-4 md:px-0">
        <div className="flex flex-row justify-center gap-2 md:gap-4 mt-6 md:mt-8 lg:mt-10">
          {/* Green filled button */}
          <Link
            href="#contact"
            className="inline-flex justify-center items-center py-[10px] px-[20px] md:py-[12px] md:px-[24px] lg:py-[14px] lg:px-[28px] bg-[#53ac70] text-white text-[14px] md:text-[15px] lg:text-[16px] rounded-[8px] font-medium border-2 border-[#53ac70] transition-all duration-300 hover:bg-[#3f8f5a] hover:border-[#3f8f5a]"
          >
            Speak to an Expert
          </Link>
          {/* Dark green filled button */}
          <Link
            href="/signup"
            className="inline-flex justify-center items-center py-[10px] px-[20px] md:py-[12px] md:px-[24px] lg:py-[14px] lg:px-[28px] bg-[#19342c] text-white text-[14px] md:text-[15px] lg:text-[16px] rounded-[8px] font-medium border-2 border-[#19342c] transition-all duration-300 hover:bg-[#2a4a3d] hover:border-[#2a4a3d]"
          >
            Create an Account
          </Link>
        </div>
      </AnimatedElement>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
