"use client";

import Link from "next/link";
import Image from "next/image";

export function CareersCTASection() {
  // Section - Responsive padding
  return (
    <section className="py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="container-axiom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left: Team Info - Responsive padding */}
          <div className="pt-0 lg:pt-[40px] px-4 md:px-0">
            {/* h2 - Responsive font size */}
            <h2
              className="text-[28px] md:text-[40px] lg:text-[55px] text-black font-bold leading-[110%] mb-[10px]"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Careers
            </h2>

            {/* h3 - Responsive font size */}
            <h3
              className="text-[18px] md:text-[22px] lg:text-[28px] text-black font-semibold leading-[110%] mb-[10px]"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Build the future of operations.
            </h3>

            {/* p - Responsive font size */}
            <p
              className="text-[14px] md:text-[18px] lg:text-[24px] font-light"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              We&apos;re looking for operators, strategists, and technologists
              ready to redesign what B2B execution looks like in the Middle
              East.
            </p>

            {/* Join Team - Responsive margin */}
            <div className="mt-[30px] md:mt-[40px] lg:mt-[50px]">
              {/* p - Responsive sizing */}
              <p
                className="mb-[15px] md:mb-[18px] lg:mb-[20px] text-[14px] md:text-[18px] lg:text-[24px] font-light"
                style={{ fontFamily: "'Alexandria', sans-serif" }}
              >
                Ready to build with us?
              </p>

              {/* Button - Responsive sizing */}
              <Link
                href="/careers"
                className="inline-flex items-center justify-center bg-[#19342c] text-white text-[16px] md:text-[22px] lg:text-[28px] font-semibold h-[50px] md:h-[65px] lg:h-[84px] w-full md:w-auto lg:w-[440px] py-2 md:py-[8px] lg:py-[10px] px-6 md:px-[20px] lg:px-[30px] rounded-[100px] gap-[10px] transition-all duration-300 hover:bg-[#3f7537]"
              >
                Join the <span className="text-[#d4fb51]">X</span> Team
              </Link>
            </div>
          </div>

          {/* Right: Team Member - Responsive sizing */}
          <div className="relative max-w-[300px] md:max-w-[400px] lg:max-w-[520px] mx-auto px-4 md:px-[30px] lg:px-[50px] mt-8 lg:mt-0">
            {/* Background - Responsive height */}
            <div
              className="absolute inset-x-0 bottom-[1px] h-[300px] md:h-[400px] lg:h-[520px] -z-[1] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] bg-cover bg-center bg-[#eee]"
              style={{ backgroundImage: "url(/images/team-bg.jpg)" }}
            />

            {/* Team Member Image - Responsive */}
            <Image
              src="/images/member-1.png"
              alt="Team Member"
              width={420}
              height={600}
              className="relative z-[1] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
