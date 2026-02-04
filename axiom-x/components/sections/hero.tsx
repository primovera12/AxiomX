"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedElement } from "@/components/shared/section-wrapper";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const heroContent = {
  headline: "Are you Searching\nfor X ?",
  description:
    "Your last-mile delivery, warehousing, and back-office operations hold untapped potential. Axiom X unlocks it. Experience the X Factor: where we transform logistical complexity into precision execution and valuable insights—giving you the peace of mind to focus entirely on driving sales. From the first click to the final revenue touchpoint, we power the unseen.",
  tagline: "Scale with confidence, we'll handle the rest",
  backgroundImage: "/images/backgrounds/bg-1.jpg",
};

export function HeroSection() {
  return (
    <motion.section
      id="home"
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Hero Area */}
      <div className="container-axiom">
        <div className="relative">
          {/* Hero Container */}
          <div className="overflow-hidden rounded-[10px] md:rounded-[12px] lg:rounded-[15px]">
            <div className="relative min-h-[567px] md:min-h-[520px] lg:min-h-[600px]">
              {/* Background Image */}
              <Image
                src={heroContent.backgroundImage}
                alt="Hero background"
                fill
                className="absolute inset-0 w-full h-full object-cover object-left rounded-[10px] md:rounded-[12px] lg:rounded-[15px]"
                priority
              />

              {/* Dark Gradient Overlay */}
              <div
                className="absolute inset-0 rounded-[10px] md:rounded-[12px] lg:rounded-[15px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.48) 50%, rgba(0, 0, 0, 0) 100%)",
                }}
              />

              {/* Content - Responsive padding */}
              <div className="relative z-10 h-full flex items-end pt-[60px] pb-[60px] px-4 md:pt-[60px] md:pb-[80px] md:px-12 lg:pt-[80px] lg:pb-[40px] lg:px-12">
                <div className="w-full lg:w-[740px]">
                  {/* Headline - Responsive text */}
                  <h1 className="text-white text-[28px] md:text-[38px] lg:text-[50px] font-bold leading-[125%] mb-3 md:mb-4 lg:mb-5 font-heading">
                    Are you Searching <br /> for{" "}
                    <span className="text-[#d4fb51]">X</span> ?
                  </h1>

                  {/* Description - Responsive max-width */}
                  <div className="max-w-full md:max-w-[580px] lg:max-w-[700px]">
                    <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed">
                      {heroContent.description}
                    </p>
                  </div>

                  {/* Separator Line */}
                  <div
                    className="mt-[20px] md:mt-[25px] lg:mt-[30px] w-[calc(100%-30px)]"
                    style={{
                      borderTop: "3px solid rgba(255, 255, 255, 0.6)",
                      borderRadius: "2px",
                    }}
                  />

                  {/* CTA Buttons - Responsive layout */}
                  <div
                    className="pt-[15px] md:pt-[20px] lg:pt-[25px] flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-[12px] lg:gap-[15px]"
                  >
                    {/* Green filled button - Responsive */}
                    <Link
                      href="#contact"
                      className="inline-block py-[10px] px-[18px] md:py-[11px] md:px-[20px] lg:py-[12px] lg:px-[24px] bg-[#3f7537] text-white text-[12px] md:text-[13px] lg:text-[14px] rounded-[8px] font-medium border-[1.5px] border-[#3f7537] transition-all duration-300 hover:bg-[#19342c] hover:border-[#19342c] text-center w-full md:w-auto"
                    >
                      Speak to an Expert
                    </Link>

                    {/* White outlined button - Responsive */}
                    <Link
                      href="#tracking"
                      className="inline-block py-[10px] px-[18px] md:py-[11px] md:px-[20px] lg:py-[12px] lg:px-[24px] bg-transparent text-white text-[12px] md:text-[13px] lg:text-[14px] rounded-[8px] font-medium border-[1.5px] border-white transition-all duration-300 hover:bg-[#19342c] hover:border-[#19342c] text-center w-full md:w-auto"
                    >
                      Track your Shipment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom - Service Snapshot Card - Responsive */}
      <AnimatedElement variant="slideUp" delay={0.3}>
        <div className="container-axiom">
          <div className="flex justify-center py-[3px] px-[10px] md:p-0">
            <div className="w-full lg:w-[96%] lg:mx-auto">
              <div className="bg-[#fafbfa] p-4 md:p-5 lg:p-6 rounded-[12px] md:rounded-[14px] lg:rounded-[15px] -mt-[40px] md:-mt-[55px] lg:-mt-[75px] relative z-10">
                {/* Title */}
                <h3
                  className="text-[32px] font-bold mb-4 md:mb-5 lg:mb-6 text-black text-center leading-[110%]"
                  style={{ fontFamily: "'Alexandria', sans-serif" }}
                >
                  Service Snapshot
                </h3>

                {/* 6-column service grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={service.id}
                        href={`#services-${service.id}`}
                        className="flex flex-col items-center text-center group cursor-pointer"
                      >
                        <Icon className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] mb-[10px] text-[#334045] group-hover:text-[#3f7537] group-hover:scale-110 transition-all" />
                        <span className="text-[13px] text-black font-medium leading-tight group-hover:text-[#3f7537] transition-colors">
                          {service.title}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedElement>
    </motion.section>
  );
}
