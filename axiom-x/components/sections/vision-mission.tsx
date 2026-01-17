"use client";

import Link from "next/link";
import Image from "next/image";

export function VisionMissionSection() {
  return (
    /* Section - CSS: padding: 280px 0, background-image: vission.jpg, background-position: center,
       background-size: cover, display: flex, align-items: center, position: relative, z-index: 1 */
    <section
      className="py-[280px] bg-cover bg-center flex items-center relative z-[1]"
      style={{ backgroundImage: "url(/images/vission.jpg)" }}
    >
      {/* Overlay - CSS: linear-gradient(90deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.40) 94%) */}
      <div
        className="absolute inset-0 -z-[1]"
        style={{
          background: "linear-gradient(90deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 94%)",
        }}
      />

      <div className="container-axiom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Vision & Mission Content */}
          <div>
            {/* Vision - CSS: margin-bottom: 40px */}
            <div className="mb-[40px]">
              {/* h2 - CSS: font-size: 36px, text-transform: uppercase, color: #fff,
                  font-weight: 700, line-height: 110%, margin-bottom: 10px */}
              <h2 className="text-[36px] uppercase text-white font-bold leading-[110%] mb-[10px]">
                Vision
              </h2>
              {/* p - CSS: font-size: 16px, color: #fff */}
              <p className="text-[16px] text-white font-medium">
                To be the unseen force powering the next era of business operations.
              </p>
            </div>

            {/* Mission - CSS: margin-bottom: 40px */}
            <div className="mb-[40px]">
              <h2 className="text-[36px] uppercase text-white font-bold leading-[110%] mb-[10px]">
                Mission
              </h2>
              <p className="text-[16px] text-white font-medium">
                To simplify, enable, and scale modern operations through intelligent, AI-driven services.
              </p>
            </div>

            {/* Buttons - CSS: vision-btn border: none, padding: 0 */}
            <div className="flex items-center gap-[15px]">
              {/* READ MORE button - CSS: width: 160px, padding: 10px, font-size: 16px,
                  uppercase, bg: #3f7537, border-color: #3f7537 */}
              <Link
                href="/about"
                className="w-[160px] text-center p-[10px] text-[16px] uppercase font-semibold bg-[#3f7537] text-white rounded-[8px] border border-[#3f7537] transition-all duration-300 hover:bg-[#53ac71] hover:border-[#53ac71]"
              >
                READ MORE
              </Link>
              {/* CAREERS button - CSS: width: 160px, padding: 10px, font-size: 16px,
                  uppercase, bg: #fff, border: 1px solid #fff, color: #000 */}
              <Link
                href="/careers"
                className="w-[160px] text-center p-[10px] text-[16px] uppercase font-semibold bg-white text-black rounded-[8px] border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                CAREERS
              </Link>
            </div>
          </div>

          {/* Right: Play Button - CSS: padding-left: 25px */}
          <div className="pl-[25px] flex justify-center lg:justify-end">
            {/* Play button - CSS: width: 140px, transition: .3s */}
            <button
              className="transition-all duration-300 hover:scale-110"
              aria-label="Play video"
            >
              <Image
                src="/images/play-btn.svg"
                alt="Play"
                width={140}
                height={140}
                className="w-[140px] h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
