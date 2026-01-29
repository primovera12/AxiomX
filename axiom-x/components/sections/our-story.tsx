"use client";

import { AnimatedElement } from "@/components/shared/section-wrapper";

export function OurStorySection() {
  return (
    <section id="our-story" className="mt-[20px] md:mt-[25px] lg:mt-[30px] mb-[40px] md:mb-[50px] lg:mb-[60px]">
      <div className="container-axiom">
        {/* Story Wrapper - Responsive padding and border-radius */}
        <AnimatedElement variant="slideUp">
          <div className="story-gradient-bg p-[25px] md:p-[35px] lg:p-[50px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 items-start">
              {/* Left: Title */}
              <div>
                {/* h2 - Responsive font size */}
                <h2
                  className="text-[24px] md:text-[30px] lg:text-[36px] text-white leading-[120%] m-0 font-bold"
                  style={{ fontFamily: "'Alexandria', sans-serif" }}
                >
                  Our Story: Decades in the Making. Reimagined for the AI Era.
                </h2>
              </div>

              {/* Right: Content */}
              <div className="space-y-4">
                <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed">
                  In 1997, we began as Axiom Telecom. To become the Middle East&apos;s largest mobility distribution engine, we had to build what didn&apos;t yet exist: a logistics infrastructure capable of moving high-value technology with absolute precision.
                </p>
                <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed">
                  For over 25 years, we operated as the silent engine behind a multi-billion dollar industry—mastering customs clearing, resilient warehousing, and high-volume fulfillment. At our peak, we were managing thousands of deliveries every day, protecting and moving over $100M in inventory value every month. We didn&apos;t just follow market standards; we built the benchmark for speed and reliability in the region&apos;s most demanding sector.
                </p>
                <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed font-semibold">
                  Today, that engine has evolved. Welcome to Axiom X.
                </p>
                <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed">
                  We have unbundled our decades of accumulated expertise to serve you. Axiom X is a platform-based, AI-enhanced operational partner designed for the next generation of B2B scale-ups, telcos, and e-commerce leaders.
                </p>
                <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed">
                  The &quot;X&quot; represents our commitment to the X Factor—a level of precision and insight that is, quite simply, unlike others. We have mastered the complexity of high-value operations so that you don&apos;t have to.
                </p>
                <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed font-semibold">
                  We&apos;ve powered the region&apos;s giants. Now, we&apos;re powering you.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* CSS for animated gradient background */}
      <style jsx>{`
        .story-gradient-bg {
          background: linear-gradient(
            135deg,
            #0a1f15 0%,
            #19342c 25%,
            #2a4a3d 50%,
            #3f7537 75%,
            #19342c 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 100%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
