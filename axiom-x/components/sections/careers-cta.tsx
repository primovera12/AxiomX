"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedElement } from "@/components/shared/section-wrapper";
import { CareersModal } from "@/components/features/careers-modal";

export function CareersCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Section - Responsive padding
  return (
    <section className="py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="container-axiom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left: Team Info - Responsive padding */}
          <AnimatedElement variant="slideLeft" className="pt-0 lg:pt-[40px] px-4 md:px-0">
            {/* h2 - Responsive font size */}
            <h2
              className="text-[28px] md:text-[36px] lg:text-[42px] text-black font-bold leading-[110%] mb-[10px]"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Careers
            </h2>

            {/* h3 - Responsive font size */}
            <h3 className="text-[18px] md:text-[22px] lg:text-[28px] text-black font-semibold leading-[110%] mb-[10px]">
              Build the future of operations.
            </h3>

            {/* p - Responsive font size */}
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-relaxed">
              We&apos;re looking for operators, strategists, and technologists
              ready to redesign what B2B execution looks like in the Middle
              East.
            </p>

            {/* Join Team - Responsive margin */}
            <div className="mt-[30px] md:mt-[40px] lg:mt-[50px]">
              {/* p - Responsive sizing */}
              <p className="mb-[15px] md:mb-[18px] lg:mb-[20px] text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-relaxed">
                Ready to build with us?
              </p>

              {/* Button - Responsive sizing */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center bg-[#3f7537] text-white text-[14px] md:text-[16px] lg:text-[18px] font-semibold h-[44px] md:h-[48px] lg:h-[52px] w-full md:w-auto py-[10px] px-[20px] md:px-[24px] lg:px-[32px] rounded-[8px] gap-[8px] transition-all duration-300 hover:bg-[#19342c] cursor-pointer"
              >
                Join the <span className="text-[#d4fb51]">X</span> Team
              </button>
            </div>
          </AnimatedElement>

          {/* Right: Team Member - Responsive sizing */}
          <AnimatedElement variant="slideUp" delay={0.15} className="relative max-w-[300px] md:max-w-[400px] lg:max-w-[520px] mx-auto px-4 md:px-[30px] lg:px-[50px] mt-8 lg:mt-0">
            {/* Background - Responsive height */}
            <div
              className="absolute inset-x-0 bottom-[1px] h-[300px] md:h-[400px] lg:h-[520px] -z-[1] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] bg-cover bg-center bg-[#eee]"
              style={{ backgroundImage: "url(/images/team-bg.jpg)" }}
            />

            {/* Team Member Image - Responsive */}
            <Image
              src="/images/careers-member.png"
              alt="Team Member"
              width={420}
              height={600}
              className="relative z-[1] w-full h-auto"
            />
          </AnimatedElement>
        </div>
      </div>

      <CareersModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
