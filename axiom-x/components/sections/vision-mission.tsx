"use client";

import Link from "next/link";
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
        <div className="max-w-[700px]">
          {/* Vision & Mission Content */}
          <AnimatedElement variant="slideLeft">
            {/* Vision - Responsive margin */}
            <div className="mb-[25px] md:mb-[32px] lg:mb-[40px]">
              {/* h2 - Responsive font size */}
              <h2 className="text-[24px] md:text-[30px] lg:text-[36px] uppercase text-white font-bold tracking-[0.4px] mb-[8px] md:mb-[9px] lg:mb-[10px]">
                Vision
              </h2>
              {/* p - Responsive font size */}
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-normal leading-relaxed">
                To be the invisible engine of the world's most ambitious brands.
              </p>
            </div>

            {/* Mission - Responsive margin */}
            <div className="mb-[25px] md:mb-[32px] lg:mb-[40px]">
              <h2 className="text-[24px] md:text-[30px] lg:text-[36px] uppercase text-white font-bold tracking-[0.4px] mb-[8px] md:mb-[9px] lg:mb-[10px]">
                Mission
              </h2>
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-normal leading-relaxed">
                To transform operational complexity into a competitive advantage, giving businesses the freedom to scale through precision, insight, and intelligence.
              </p>
            </div>

            {/* Buttons - Responsive sizing */}
            <div className="flex items-center gap-[10px] md:gap-[12px] lg:gap-[15px]">
              <Link
                href="/about"
                className="text-center py-[10px] px-[20px] md:py-[12px] md:px-[24px] lg:py-[14px] lg:px-[28px] text-[14px] md:text-[15px] lg:text-[16px] font-medium bg-[#53ac70] text-white rounded-[8px] border-2 border-[#53ac70] transition-all duration-300 hover:bg-[#3f8f5a] hover:border-[#3f8f5a]"
              >
                READ MORE
              </Link>
              <Link
                href="/careers"
                className="text-center py-[10px] px-[20px] md:py-[12px] md:px-[24px] lg:py-[14px] lg:px-[28px] text-[14px] md:text-[15px] lg:text-[16px] font-medium bg-white text-[#53ac70] rounded-[8px] border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white"
              >
                CAREERS
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
