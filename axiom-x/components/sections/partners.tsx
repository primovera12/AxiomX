"use client";

import Image from "next/image";
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
    <section id="partners" className="pt-[40px] pb-[80px] md:pt-[60px] md:pb-[90px] lg:pt-[40px] lg:pb-[100px]">
      {/* Partners Title - Responsive sizing */}
      <AnimatedElement variant="fadeUp" className="container-axiom text-center mb-[30px] md:mb-[45px] lg:mb-[60px]">
        <h2
          className="text-[28px] md:text-[40px] lg:text-[55px] text-black font-bold leading-[110%] pb-[20px]"
          style={{ fontFamily: "'Alexandria', sans-serif" }}
        >
          Become a Partner
        </h2>
      </AnimatedElement>

      {/* Partners Wrapper - Responsive padding and height */}
      <div className="bg-[#f7f7f7] py-[20px] md:py-[30px] lg:py-[40px] relative overflow-hidden">
        {/* Marquee - Edge to edge infinite loop */}
        <div className="flex items-center overflow-hidden">
            {/* Marquee animation container - Responsive height */}
            <div className="flex animate-marquee items-center h-[80px] md:h-[120px] lg:h-[160px]">
              {/* First set of logos */}
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 px-5 md:px-7 lg:px-10 flex items-center justify-center h-[80px] md:h-[120px] lg:h-[160px]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className={
                      partner.type === "long"
                        ? "w-auto max-h-[40px] md:max-h-[50px] lg:max-h-[60px]"
                        : "w-auto max-h-[55px] md:max-h-[70px] lg:max-h-[85px]"
                    }
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`dup-${partner.id}`}
                  className="flex-shrink-0 px-5 md:px-7 lg:px-10 flex items-center justify-center h-[80px] md:h-[120px] lg:h-[160px]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className={
                      partner.type === "long"
                        ? "w-auto max-h-[40px] md:max-h-[50px] lg:max-h-[60px]"
                        : "w-auto max-h-[55px] md:max-h-[70px] lg:max-h-[85px]"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

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
