"use client";

import Link from "next/link";
import Image from "next/image";

export function CareersCTASection() {
  return (
    /* Section - CSS: padding: 80px 0 */
    <section className="py-[80px]">
      <div className="container-axiom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Team Info - CSS: padding-top: 40px */}
          <div className="pt-[40px]">
            {/* h2 - CSS: font-size: 55px, color: #000, font-weight: 700,
                line-height: 110%, margin-bottom: 10px, font-family: Alexandria */}
            <h2
              className="text-[55px] text-black font-bold leading-[110%] mb-[10px]"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Careers
            </h2>

            {/* h3 - CSS: font-size: 28px, color: #000, font-weight: 600,
                line-height: 110%, margin-bottom: 10px, font-family: Alexandria */}
            <h3
              className="text-[28px] text-black font-semibold leading-[110%] mb-[10px]"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Build the future of operations.
            </h3>

            {/* p - CSS: font-size: 24px, font-weight: 300, font-family: Alexandria */}
            <p
              className="text-[24px] font-light"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              We&apos;re looking for operators, strategists, and technologists
              ready to redesign what B2B execution looks like in the Middle
              East.
            </p>

            {/* Join Team - CSS: margin-top: 50px */}
            <div className="mt-[50px]">
              {/* p - CSS: margin-bottom: 20px */}
              <p
                className="mb-[20px] text-[24px] font-light"
                style={{ fontFamily: "'Alexandria', sans-serif" }}
              >
                Ready to build with us?
              </p>

              {/* a - CSS: background: #19342c, font-size: 28px, font-weight: 600, color: #fff,
                  height: 84px, width: 440px, padding: 10px 30px, border-radius: 100px, gap: 0 10px,
                  hover: bg #3f7537 */}
              <Link
                href="/careers"
                className="inline-flex items-center justify-center bg-[#19342c] text-white text-[28px] font-semibold h-[84px] w-[440px] py-[10px] px-[30px] rounded-[100px] gap-[10px] transition-all duration-300 hover:bg-[#3f7537]"
              >
                Join the <span className="text-[#d4fb51]">X</span> Team
              </Link>
            </div>
          </div>

          {/* Right: Team Member - CSS: max-width: 520px, margin: 0 auto, padding: 0 50px,
              position: relative */}
          <div className="relative max-w-[520px] mx-auto px-[50px]">
            {/* Background - CSS: background: url(team-bg.jpg), background-position: center,
                background-size: cover, width: 100%, height: 520px, border-radius: 24px,
                position: absolute, bottom: 1px, z-index: -1 */}
            <div
              className="absolute inset-x-0 bottom-[1px] h-[520px] -z-[1] rounded-[24px] bg-cover bg-center bg-[#eee]"
              style={{ backgroundImage: "url(/images/team-bg.jpg)" }}
            />

            {/* Team Member Image */}
            <Image
              src="/images/member-1.png"
              alt="Team Member"
              width={420}
              height={600}
              className="relative z-[1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
