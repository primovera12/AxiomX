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

      <div className="container-axiom-left">
        {/* Vision & Mission Content */}
        <AnimatedElement variant="slideLeft">
          {/* Vision - Responsive margin */}
          <div className="mb-[25px] md:mb-[32px] lg:mb-[40px]">
            {/* h2 - Responsive font size */}
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] uppercase text-white font-bold leading-[110%] mb-[8px] md:mb-[9px] lg:mb-[10px]">
              Vision
            </h2>
            {/* p - Responsive font size */}
            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-medium max-w-[700px]">
              To be the invisible engine of the world's most ambitious brands.
            </p>
          </div>

          {/* Mission - Responsive margin */}
          <div className="mb-[25px] md:mb-[32px] lg:mb-[40px]">
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] uppercase text-white font-bold leading-[110%] mb-[8px] md:mb-[9px] lg:mb-[10px]">
              Mission
            </h2>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-medium max-w-[700px]">
              To transform operational complexity into a competitive advantage, giving businesses the freedom to scale through precision, insight, and intelligence.
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
      </div>
    </section>
  );
}
