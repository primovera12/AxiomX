"use client";

import Link from "next/link";

export function OurStorySection() {
  return (
    <section id="our-story" className="mt-[20px] md:mt-[25px] lg:mt-[30px] mb-[40px] md:mb-[50px] lg:mb-[60px]">
      <div className="container-axiom">
        {/* Story Wrapper - Responsive padding and border-radius */}
        <div className="bg-[#3f8f5a] p-[25px] md:p-[35px] lg:p-[50px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 items-start">
            {/* Left: Title */}
            <div>
              {/* h2 - Responsive font size */}
              <h2
                className="text-[24px] md:text-[30px] lg:text-[36px] uppercase text-white leading-[120%] m-0 font-extrabold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                OUR STORY: FROM
                <br />
                1997 TO THE AI ERA
              </h2>
            </div>

            {/* Right: Content */}
            <div>
              {/* p - Responsive font size */}
              <p
                className="text-white text-[14px] md:text-[15px] lg:text-[16px] mb-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We started in 1997 as Axiom x Telecom — building the Middle East&apos;s
                largest mobility distribution engine. We helped global brands scale
                through precision logistics, resilient warehousing, and high-volume
                fulfillment.
              </p>

              {/* Button - Responsive margin and padding */}
              <div className="mt-[18px] md:mt-[22px] lg:mt-[25px]">
                <Link
                  href="/about"
                  className="inline-block bg-white text-[#53ac70] font-medium text-[13px] md:text-[13px] lg:text-[14px] py-[8px] px-[20px] md:px-[28px] lg:px-[35px] rounded-[200px] leading-[130%] border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
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
