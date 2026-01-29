"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedElement } from "@/components/shared/section-wrapper";
import { CareersModal } from "@/components/features/careers-modal";

export function VisionMissionSection() {
  const [careersModalOpen, setCareersModalOpen] = useState(false);

  return (
    /* Section - Responsive padding */
    <section
      className="py-[80px] md:py-[160px] lg:py-[280px] lg:mt-[40px] bg-cover bg-right md:bg-center flex items-center relative z-[1]"
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
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] text-white font-bold leading-[110%] mb-[8px] md:mb-[9px] lg:mb-[10px]">
              Vision
            </h2>
            {/* p - Responsive font size */}
            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-medium max-w-[700px]">
              To be the invisible engine of the world's most ambitious brands.
            </p>
          </div>

          {/* Mission - Responsive margin */}
          <div className="mb-[25px] md:mb-[32px] lg:mb-[40px]">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] text-white font-bold leading-[110%] mb-[8px] md:mb-[9px] lg:mb-[10px]">
              Mission
            </h2>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-medium max-w-[700px]">
              To transform operational complexity into a competitive advantage, giving businesses the freedom to scale through precision, insight, and intelligence.
            </p>
          </div>

          {/* Buttons - Matching hero section style */}
          <div className="flex items-center gap-2 md:gap-[12px] lg:gap-[15px]">
            <Link
              href="#contact"
              className="inline-block py-[10px] px-[18px] md:py-[11px] md:px-[20px] lg:py-[12px] lg:px-[24px] bg-[#3f7537] text-white text-[12px] md:text-[13px] lg:text-[14px] rounded-[8px] font-medium border-[1.5px] border-[#3f7537] transition-all duration-300 hover:bg-[#19342c] hover:border-[#19342c]"
            >
              Speak to an Expert
            </Link>
            <button
              onClick={() => setCareersModalOpen(true)}
              className="inline-block py-[10px] px-[18px] md:py-[11px] md:px-[20px] lg:py-[12px] lg:px-[24px] bg-transparent text-white text-[12px] md:text-[13px] lg:text-[14px] rounded-full font-medium border-[1.5px] border-white transition-all duration-300 hover:bg-[#19342c] hover:border-[#19342c] cursor-pointer"
            >
              Join the X Team
            </button>
          </div>
        </AnimatedElement>
      </div>

      {/* Careers Modal */}
      <CareersModal open={careersModalOpen} onOpenChange={setCareersModalOpen} />
    </section>
  );
}
