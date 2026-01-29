"use client";

import { AnimatedElement } from "@/components/shared/section-wrapper";
import Image from "next/image";

export function OurStorySection() {
  return (
    <section id="our-story" className="mt-[20px] md:mt-[25px] lg:mt-[10px] mb-[40px] md:mb-[50px] lg:mb-[60px]">
      <div className="container-axiom">
        <AnimatedElement variant="slideUp">
          <div className="story-gradient-bg p-[25px] md:p-[40px] lg:p-[60px] rounded-[16px] md:rounded-[24px] lg:rounded-[30px]">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              {/* Heading */}
              <h2
                className="text-white text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[110%]"
                style={{ fontFamily: "'Alexandria', sans-serif" }}
              >
                Decades in the Making
              </h2>

              {/* Body Text */}
              <div className="flex flex-col gap-5 md:gap-6 text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-relaxed text-white/90">
                <p>
                  Born from the complexities of global logistics, our journey began over{" "}
                  <span className="font-bold text-[#d4fb50]">25 years</span> ago. We didn&apos;t
                  just observe the supply chain; we lived it, managing massive infrastructures
                  and optimizing routes for the region&apos;s most demanding carriers. This
                  foundation gave us a unique perspective on the intersection of physical
                  movement and digital intelligence.
                </p>
                <p>
                  As the world evolved, so did we. We pivoted to AI-enhanced operations,
                  translating decades of hard-won data into predictive models. Today, we manage
                  over <span className="font-bold text-[#d4fb50]">$100M in inventory</span>{" "}
                  annually, bridging the gap between legacy infrastructure and futuristic
                  mobility solutions.
                </p>
                <p>
                  We ensure that our partners don&apos;t just survive the transition—they lead
                  it. By combining deep operational wisdom with cutting-edge artificial
                  intelligence, we are rewriting the rules of what&apos;s possible in modern
                  logistics.
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
