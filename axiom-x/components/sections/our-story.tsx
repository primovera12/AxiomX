"use client";

import { AnimatedElement } from "@/components/shared/section-wrapper";

export function OurStorySection() {
  return (
    <section id="our-story" className="mt-[20px] md:mt-[25px] lg:mt-[30px] mb-[40px] md:mb-[50px] lg:mb-[60px]">
      <div className="container-axiom">
        <AnimatedElement variant="slideUp">
          <div className="story-gradient-bg p-[25px] md:p-[40px] lg:p-[60px] rounded-[16px] md:rounded-[24px] lg:rounded-[30px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left Column (40%) */}
              <div className="lg:col-span-5 flex flex-row gap-6 lg:gap-8 lg:sticky lg:top-32 h-fit">
                {/* Vertical Editorial Title */}
                <div className="hidden lg:flex flex-col justify-start h-[350px]">
                  <h2 className="vertical-text-rl text-6xl xl:text-7xl font-bold tracking-widest text-outline-white whitespace-nowrap opacity-60">
                    OUR STORY
                  </h2>
                </div>

                {/* Main Heading Block */}
                <div className="flex flex-col justify-start pt-2">
                  {/* Mobile-only Subtitle */}
                  <span className="lg:hidden text-sm font-bold tracking-widest text-white/50 mb-2 uppercase">
                    Our Story
                  </span>
                  <h2
                    className="text-white tracking-tight text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.1]"
                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                  >
                    Decades in <br className="hidden lg:block" /> the Making
                  </h2>
                  {/* Decorative element */}
                  <div className="w-16 h-1.5 bg-[#d4fb50] mt-6 lg:mt-8 rounded-full"></div>
                </div>
              </div>

              {/* Right Column (60%) */}
              <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-10">
                {/* Editorial Body Text */}
                <div className="flex flex-col gap-6 lg:gap-8 text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-normal leading-relaxed text-white/90">
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
                <div className="mt-4 lg:mt-8 pt-8 lg:pt-10 border-t border-white/20 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                  {/* Graphic X */}
                  <div className="shrink-0 text-[#d4fb50]">
                    <svg
                      fill="none"
                      height="56"
                      width="56"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:w-16 lg:h-16"
                    >
                      <path
                        d="M16 16L48 48M48 16L16 48"
                        stroke="currentColor"
                        strokeLinecap="square"
                        strokeWidth="8"
                      />
                    </svg>
                  </div>
                  {/* Closing Statement */}
                  <div className="flex flex-col justify-center h-full pt-1">
                    <p
                      className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight"
                      style={{ fontFamily: "'Alexandria', sans-serif" }}
                    >
                      We&apos;ve powered the region&apos;s giants.{" "}
                      <br className="hidden sm:block" /> Now, we&apos;re powering you.
                    </p>
                  </div>
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

        .vertical-text-rl {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        .text-outline-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
      `}</style>
    </section>
  );
}
