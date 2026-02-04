"use client";

import { AnimatedElement } from "@/components/shared/section-wrapper";
import Image from "next/image";

export function OurStorySection() {
  return (
    <section id="our-story" className="mt-[20px] md:mt-[25px] lg:mt-[10px] mb-[40px] md:mb-[50px] lg:mb-[100px]">
      <div className="container-axiom">
        <AnimatedElement variant="slideUp">
          <div className="story-gradient-bg p-[25px] md:p-[40px] lg:p-[60px] rounded-[16px] md:rounded-[24px] lg:rounded-[30px]">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              {/* Heading */}
              <div>
                <h2
                  className="text-white text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[110%]"
                  style={{ fontFamily: "'Alexandria', sans-serif" }}
                >
                  Our Story: Decades in the Making.
                </h2>
                <p className="text-[#d4fb50] text-[18px] md:text-[22px] lg:text-[26px] font-medium mt-1">
                  Reimagined for the AI Era.
                </p>
              </div>

              {/* Body Text */}
              <div className="flex flex-col gap-5 md:gap-6 text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-relaxed text-white/90">
                <p>
                  In <span className="font-bold text-[#d4fb50]">1997</span>, we began as Axiom Telecom. To become the Middle East&apos;s largest mobility distribution engine, we had to build what didn&apos;t yet exist: a logistics infrastructure capable of moving high-value technology with absolute precision.
                </p>
                <p>
                  For over <span className="font-bold text-[#d4fb50]">25 years</span>, we operated as the silent engine behind a multi-billion dollar industry—mastering customs clearing, resilient warehousing, and high-volume fulfillment. At our peak, we were managing thousands of deliveries every day, protecting and moving over <span className="font-bold text-[#d4fb50]">$100M in inventory</span> value every month. We didn&apos;t just follow market standards; we built the benchmark for speed and reliability in the region&apos;s most demanding sector.
                </p>
                <p>
                  Today, that engine has evolved. <span className="font-bold text-white">Welcome to Axiom X.</span> We have unbundled our decades of accumulated expertise to serve you. Axiom X is a platform-based, AI-enhanced operational partner designed for the next generation of B2B scale-ups, telcos, and e-commerce leaders. The &quot;X&quot; represents our commitment to the <span className="font-bold text-[#d4fb50]">X Factor</span>—a level of precision and insight that is, quite simply, unlike others. We have mastered the complexity of high-value operations so that you don&apos;t have to.
                </p>
              </div>

              {/* Sign-off Component */}
              <div className="pt-6 md:pt-8 lg:pt-10 border-t border-white/20 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                {/* X Logo */}
                <div className="shrink-0">
                  <Image
                    src="/images/x-logo-2.svg"
                    alt="X"
                    width={48}
                    height={48}
                    className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px]"
                  />
                </div>
                {/* Closing Statement */}
                <div className="flex flex-col justify-center">
                  <p
                    className="text-[18px] md:text-[22px] lg:text-[26px] font-bold text-white leading-tight"
                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                  >
                    We&apos;ve powered the region&apos;s giants.{" "}
                    <br className="hidden sm:block" /> Now, we&apos;re powering you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* CSS for animated gradient background and custom styles */}
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
