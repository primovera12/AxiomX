"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="pb-[60px]">
      <div className="container-axiom">
        {/* Services Wrapper - CSS animated gradient background (Apple-style) */}
        <div className="services-gradient-bg rounded-[40px] py-[60px] px-[80px] mb-[40px] relative overflow-hidden">
          {/* Title Container */}
          <div className="mb-[50px] relative z-10">
            <h2 className="text-[55px] text-white leading-[1] font-bold inline-block border-b-[1.5px] border-[#d4fb50] pb-[10px] pr-[60px] m-0">
              Our Services
            </h2>
          </div>

          {/* Accordion */}
          <div className="relative z-10 pl-[20px]">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "relative mb-[20px] transition-all duration-300",
                  activeIndex === index ? "pl-[60px]" : "pl-[10px]"
                )}
              >
                {/* X Logo - shows when accordion is open */}
                <Image
                  src="/images/x-logo-2.svg"
                  alt="X"
                  width={35}
                  height={35}
                  className={cn(
                    "absolute left-[-7px] top-[11px] w-[35px] h-auto transition-all duration-300",
                    activeIndex === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  )}
                />

                {/* Left Lime Line - connects to X logo when open */}
                <div
                  className={cn(
                    "absolute left-[10px] bottom-0 h-[94%] w-[2px] bg-[#d4fb50] transition-all duration-300 -z-10 rounded-full",
                    activeIndex === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  )}
                />

                {/* Accordion Button - NO emoji/icon before title */}
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full flex items-center justify-between py-[10px] px-0 bg-transparent text-white text-[36px] font-semibold tracking-[0.5px] border-none outline-none cursor-pointer"
                  style={{ fontFamily: "'Alexandria', sans-serif" }}
                >
                  <span>{service.title}</span>
                  {/* Arrow - rotates 180° when open, white color */}
                  <svg
                    className={cn(
                      "w-[36px] h-[34px] transition-transform duration-300 flex-shrink-0 text-white",
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
                  <div className="py-[10px]">
                    {/* Service Image - reduced height by 30% */}
                    <div className="mb-[25px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={210}
                        className="w-full h-[210px] object-cover rounded-[24px]"
                      />
                    </div>

                    {/* Description - ALL same font weight, no bold first line */}
                    <p
                      className="text-[22px] text-white mb-0 tracking-[0.3px] font-normal"
                      style={{ fontFamily: "'Alexandria', sans-serif" }}
                    >
                      {service.boldText} {service.description}
                    </p>

                    {/* Tags Container */}
                    <div className="flex flex-wrap gap-y-[15px] gap-x-[12px] mt-[25px]">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-[#d4fb50] text-black text-[16px] py-[14px] px-[24px] rounded-[40px] border border-[#d4fb50] transition-all duration-300 hover:bg-transparent hover:text-[#d4fb50] cursor-pointer"
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
          </div>
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
