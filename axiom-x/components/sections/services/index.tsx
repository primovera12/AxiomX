"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { AnimatedElement } from "@/components/shared/section-wrapper";

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="services" className="pb-[30px] md:pb-[45px] lg:pb-[10px]">
      <div className="container-axiom">
        {/* Services Wrapper - CSS animated gradient background (Apple-style) - Responsive padding */}
        <div className="services-gradient-bg rounded-[20px] md:rounded-[30px] lg:rounded-[40px] py-[30px] px-4 md:py-[45px] md:px-[40px] lg:py-[60px] lg:px-[80px] mb-[20px] md:mb-[30px] lg:mb-[40px] relative overflow-hidden">
          {/* Title Container - Responsive margin */}
          <AnimatedElement variant="fadeUp" className="mb-[25px] md:mb-[35px] lg:mb-[50px] relative z-10">
            <h2 className="text-[28px] md:text-[40px] lg:text-[55px] text-white leading-[1] font-bold inline-block border-b-[1.5px] border-[#d4fb50] pb-[8px] md:pb-[10px] pr-[30px] md:pr-[45px] lg:pr-[60px] m-0">
              Our Services
            </h2>
          </AnimatedElement>

          {/* Accordion - Responsive left padding */}
          <AnimatedElement variant="fadeUp" delay={0.15} className="relative z-10 pl-[10px] md:pl-[15px] lg:pl-[20px]">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "relative mb-[12px] md:mb-[16px] lg:mb-[20px] transition-all duration-300",
                  activeIndex === index ? "pl-[30px] md:pl-[45px] lg:pl-[60px]" : "pl-[5px] md:pl-[8px] lg:pl-[10px]"
                )}
              >
                {/* X Logo - Responsive sizing */}
                <Image
                  src="/images/x-logo-2.svg"
                  alt="X"
                  width={35}
                  height={35}
                  className={cn(
                    "absolute left-[-5px] md:left-[-6px] lg:left-[-7px] top-[8px] md:top-[10px] lg:top-[11px] w-[22px] md:w-[28px] lg:w-[35px] h-auto transition-all duration-300",
                    activeIndex === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  )}
                />

                {/* Left Lime Line - connects to X logo when open */}
                <div
                  className={cn(
                    "absolute left-[5px] md:left-[7px] lg:left-[10px] bottom-0 h-[94%] w-[2px] bg-[#d4fb50] transition-all duration-300 -z-10 rounded-full",
                    activeIndex === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  )}
                />

                {/* Accordion Button - Responsive text */}
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-2 md:py-[8px] lg:py-[10px] px-0 bg-transparent text-white text-[16px] md:text-[24px] lg:text-[36px] font-semibold tracking-[0.5px] border-none outline-none cursor-pointer"
                  style={{ fontFamily: "'Alexandria', sans-serif" }}
                >
                  <span>{service.title}</span>
                  {/* Arrow - Responsive sizing */}
                  <svg
                    className={cn(
                      "w-[20px] h-[18px] md:w-[28px] md:h-[26px] lg:w-[36px] lg:h-[34px] transition-transform duration-300 flex-shrink-0 text-white",
                      activeIndex === index && "rotate-180"
                    )}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>

                {/* Accordion Body */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeIndex === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="py-2 md:py-[8px] lg:py-[10px]">
                    {/* Service Image - Responsive height */}
                    <div className="mb-[15px] md:mb-[20px] lg:mb-[25px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={210}
                        className="w-full h-[120px] md:h-[160px] lg:h-[210px] object-cover rounded-[16px] md:rounded-[20px] lg:rounded-[24px]"
                      />
                    </div>

                    {/* Description - Responsive text */}
                    <p
                      className="text-[14px] md:text-[17px] lg:text-[22px] text-white mb-0 tracking-[0.3px] font-normal"
                      style={{ fontFamily: "'Alexandria', sans-serif" }}
                    >
                      {service.boldText} {service.description}
                    </p>

                    {/* Tags Container - Responsive sizing */}
                    <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-y-[10px] md:gap-x-[10px] lg:gap-y-[15px] lg:gap-x-[12px] mt-[15px] md:mt-[20px] lg:mt-[25px]">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-[#d4fb50] text-black text-[12px] md:text-[14px] lg:text-[16px] py-2 px-3 md:py-3 md:px-4 lg:py-[14px] lg:px-[24px] rounded-[40px] border border-[#d4fb50] transition-all duration-300 hover:bg-transparent hover:text-[#d4fb50] cursor-pointer"
                          style={{ fontFamily: "'Aloevera-Regular', sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedElement>
        </div>
      </div>

      {/* CSS for animated gradient background (Apple-style) */}
      <style jsx>{`
        .services-gradient-bg {
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
