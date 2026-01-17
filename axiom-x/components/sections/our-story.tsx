"use client";

import Link from "next/link";

export function OurStorySection() {
  return (
    <section id="our-story" className="mt-[30px] mb-[60px]">
      <div className="container-axiom">
        {/* Story Wrapper - CSS: background: darker green #3f8f5a, padding: 50px, border-radius: 20px */}
        <div className="bg-[#3f8f5a] p-[50px] rounded-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Title */}
            <div>
              {/* h2 - CSS: font-size: 36px, text-transform: uppercase, color: #fff,
                  line-height: 120%, margin: 0, font-weight: 700, font-family: Inter */}
              <h2
                className="text-[36px] uppercase text-white leading-[120%] m-0 font-extrabold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                OUR STORY: FROM
                <br />
                1997 TO THE AI ERA
              </h2>
            </div>

            {/* Right: Content */}
            <div>
              {/* p - CSS: color: #fff, font-size: 16px, font-family: Inter */}
              <p
                className="text-white text-[16px] mb-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We started in 1997 as Axiom x Telecom — building the Middle East&apos;s
                largest mobility distribution engine. We helped global brands scale
                through precision logistics, resilient warehousing, and high-volume
                fulfillment.
              </p>

              {/* Button - CSS: margin-top: 25px */}
              <div className="mt-[25px]">
                {/* a - CSS: background: #fff, color: #53ac70, font-weight: 500,
                    padding: 12px 40px, border-radius: 30px, line-height: 130%, border: 1px solid #fff */}
                <Link
                  href="/about"
                  className="inline-block bg-white text-[#53ac70] font-medium text-[14px] py-[8px] px-[35px] rounded-[200px] leading-[130%] border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
                >
                  Read full story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
