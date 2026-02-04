"use client";

import Image from "next/image";
import { AnimatedElement } from "@/components/shared/section-wrapper";

// Partner logos
const partners = [
  { id: 1, logo: "/images/l-1.png", name: "Partner 1", type: "long" },
  { id: 2, logo: "/images/partners/du-seeklogo.png", name: "du", type: "box" },
  { id: 3, logo: "/images/l-11.png", name: "Partner 3", type: "long" },
  { id: 4, logo: "/images/l-3.png", name: "Partner 4", type: "long" },
  { id: 5, logo: "/images/l-4.png", name: "Partner 5", type: "long" },
  { id: 6, logo: "/images/l-18.png", name: "Partner 6", type: "box" },
  { id: 7, logo: "/images/l-5.webp", name: "Partner 7", type: "long" },
  { id: 8, logo: "/images/l-6.png", name: "Partner 8", type: "long" },
  { id: 9, logo: "/images/l-7.png", name: "Partner 9", type: "box" },
  { id: 10, logo: "/images/l-8.png", name: "Partner 10", type: "long" },
  { id: 11, logo: "/images/l-9.jpeg", name: "Partner 11", type: "long" },
  { id: 12, logo: "/images/partners/VM Logo.png", name: "VM", type: "box" },
  { id: 13, logo: "/images/l-13.png", name: "Partner 13", type: "long" },
  { id: 14, logo: "/images/l-12.png", name: "Partner 14", type: "box" },
  { id: 15, logo: "/images/l-20.png", name: "Partner 15", type: "long" },
];

// Render a single logo item
function LogoItem({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="flex-shrink-0 px-5 md:px-7 lg:px-10 flex items-center justify-center h-[80px] md:h-[120px] lg:h-[160px]">
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
  );
}

export function PartnersSection() {
  return (
    <section id="partners" className="pt-[40px] pb-[80px] md:pt-[60px] md:pb-[90px] lg:pt-[40px] lg:pb-[100px]">
      {/* Partners Title - Responsive sizing */}
      <AnimatedElement variant="fadeUp" className="container-axiom text-center mb-[30px] md:mb-[45px] lg:mb-[60px]">
        <h2
          className="text-[28px] md:text-[36px] lg:text-[42px] text-black font-bold leading-[110%] pb-[20px]"
          style={{ fontFamily: "'Alexandria', sans-serif" }}
        >
          Become a Partner
        </h2>
      </AnimatedElement>

      {/* Partners Wrapper */}
      <div className="bg-[#f7f7f7] py-[20px] md:py-[30px] lg:py-[40px] overflow-hidden">
        {/* Marquee container */}
        <div className="marquee-container h-[80px] md:h-[120px] lg:h-[160px]">
          {/* First track */}
          <div className="marquee-track">
            {partners.map((partner) => (
              <LogoItem key={partner.id} partner={partner} />
            ))}
          </div>
          {/* Second track (duplicate for seamless loop) */}
          <div className="marquee-track" aria-hidden="true">
            {partners.map((partner) => (
              <LogoItem key={`dup-${partner.id}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS for true infinite marquee */}
      <style jsx>{`
        .marquee-container {
          display: flex;
          width: 100%;
          position: relative;
        }
        .marquee-track {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
