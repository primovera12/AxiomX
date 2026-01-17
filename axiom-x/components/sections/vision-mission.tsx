"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedElement } from "@/components/shared/section-wrapper";

export function VisionMissionSection() {
  return (
    /* Section - Responsive padding */
    <section
      className="py-[80px] md:py-[160px] lg:py-[280px] bg-cover bg-right md:bg-center flex items-center relative z-[1]"
      style={{ backgroundImage: "url(/images/vission.jpg)" }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 -z-[1]"
        style={{
          background: "linear-gradient(90deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 94%)",
        }}
      />

      <div className="container-axiom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7 lg:gap-8 items-center">
          {/* Left: Vision & Mission Content */}
          <AnimatedElement variant="slideLeft">
            {/* Vision - Responsive margin */}
            <div className="mb-[25px] md:mb-[32px] lg:mb-[40px]">
              {/* h2 - Responsive font size */}
              <h2 className="text-[24px] md:text-[30px] lg:text-[36px] uppercase text-white font-bold leading-[110%] mb-[8px] md:mb-[9px] lg:mb-[10px]">
                Vision
              </h2>
              {/* p - Responsive font size */}
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-medium">
                To be the unseen force powering the next era of business operations.
              </p>
            </div>

            {/* Mission - Responsive margin */}
            <div className="mb-[25px] md:mb-[32px] lg:mb-[40px]">
              <h2 className="text-[24px] md:text-[30px] lg:text-[36px] uppercase text-white font-bold leading-[110%] mb-[8px] md:mb-[9px] lg:mb-[10px]">
                Mission
              </h2>
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-medium">
                To simplify, enable, and scale modern operations through intelligent, AI-driven services.
              </p>
            </div>

            {/* Buttons - Responsive sizing */}
            <div className="flex items-center gap-[10px] md:gap-[12px] lg:gap-[15px]">
              <Link
                href="/about"
                className="w-[130px] md:w-[145px] lg:w-[160px] text-center p-[8px] md:p-[9px] lg:p-[10px] text-[14px] md:text-[15px] lg:text-[16px] uppercase font-semibold bg-[#3f7537] text-white rounded-[8px] border border-[#3f7537] transition-all duration-300 hover:bg-[#53ac71] hover:border-[#53ac71]"
              >
                READ MORE
              </Link>
              <Link
                href="/careers"
                className="w-[130px] md:w-[145px] lg:w-[160px] text-center p-[8px] md:p-[9px] lg:p-[10px] text-[14px] md:text-[15px] lg:text-[16px] uppercase font-semibold bg-white text-black rounded-[8px] border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                CAREERS
              </Link>
            </div>
          </AnimatedElement>

          {/* Right: Play Button - Responsive padding and sizing */}
          <AnimatedElement variant="scaleUp" delay={0.2} className="pl-0 md:pl-[15px] lg:pl-[25px] flex justify-start lg:justify-end mt-6 lg:mt-0">
            <button
              className="transition-all duration-300 hover:scale-110"
              aria-label="Play video"
            >
              <Image
                src="/images/play-btn.svg"
                alt="Play"
                width={140}
                height={140}
                className="w-[100px] md:w-[120px] lg:w-[140px] h-auto"
              />
            </button>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
