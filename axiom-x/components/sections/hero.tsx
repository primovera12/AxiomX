"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    id: 1,
    headline: "Are you Searching\nfor X ?",
    description:
      "Your last-mile delivery, warehousing, and back-office operations hold untapped potential. Axiom X unlocks it — transforming complexity into execution, insight, and measurable growth. From inception to final revenue touchpoint, we power the unseen.",
    backgroundVideo: "/videos/video-1.mov",
    backgroundImage: "",
    ctaPrimary: "Speak to an Expert",
  },
  {
    id: 2,
    headline: "Are you Searching\nfor X ?",
    description:
      "Your operations have untapped potential. Axiom x helps you find it and turn it into execution, insight, and growth. From first mile to final revenue touchpoint, we power the unseen.",
    backgroundVideo: "",
    backgroundImage: "/images/backgrounds/bg-1.jpg",
    ctaPrimary: "Speak to an Expert",
  },
];

export function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Using Fade plugin for smooth fade transitions instead of slide
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="home" className="relative">
      {/* Hero Area */}
      <div className="container-axiom">
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-[10px] md:rounded-[12px] lg:rounded-[15px]" ref={emblaRef}>
            <div className="flex">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="flex-[0_0_100%] min-w-0 relative min-h-[420px] md:min-h-[520px] lg:min-h-[640px]"
                >
                  {/* Background Video or Image */}
                  {slide.backgroundVideo ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover rounded-[10px] md:rounded-[12px] lg:rounded-[15px]"
                    >
                      <source src={slide.backgroundVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={slide.backgroundImage}
                      alt="Hero background"
                      fill
                      className="absolute inset-0 w-full h-full object-cover rounded-[10px] md:rounded-[12px] lg:rounded-[15px]"
                      priority
                    />
                  )}

                  {/* Dark Gradient Overlay */}
                  <div
                    className="absolute inset-0 rounded-[10px] md:rounded-[12px] lg:rounded-[15px]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.48) 50%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  />

                  {/* Content - Responsive padding */}
                  <div className="relative z-10 h-full flex items-end pb-[60px] px-4 md:pb-[80px] md:px-12 lg:pb-[100px] lg:px-20">
                    <div
                      className={cn(
                        "w-full lg:w-[550px] transition-all duration-700",
                        selectedIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      )}
                    >
                      {/* Headline - Responsive text */}
                      <h1
                        className="text-white text-[28px] md:text-[38px] lg:text-[50px] font-semibold leading-[125%] mb-3 md:mb-4 lg:mb-5 font-heading"
                        style={{
                          transitionDelay: selectedIndex === index ? "0.15s" : "0s",
                        }}
                      >
                        Are you Searching <br /> for{" "}
                        <span className="text-[#d4fb51]">X</span> ?
                      </h1>

                      {/* Description - Responsive max-width */}
                      <div
                        className="max-w-full md:max-w-[400px] lg:max-w-[440px]"
                        style={{
                          transitionDelay: selectedIndex === index ? "0.3s" : "0s",
                        }}
                      >
                        <p className="text-white text-[12px] md:text-[13px] lg:text-sm">{slide.description}</p>
                      </div>

                      {/* CTA Buttons - Responsive layout */}
                      <div
                        className="mt-[30px] md:mt-[45px] lg:mt-[60px] pt-[15px] md:pt-[20px] lg:pt-[25px] flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-[12px] lg:gap-[15px]"
                        style={{
                          transitionDelay: selectedIndex === index ? "0.45s" : "0s",
                          borderTop: "3px solid rgba(255, 255, 255, 0.6)",
                          borderRadius: "2px",
                        }}
                      >
                        {/* Green filled button - Responsive */}
                        <Link
                          href="#contact"
                          className="inline-block py-[10px] px-[18px] md:py-[11px] md:px-[20px] lg:py-[12px] lg:px-[24px] bg-[#53ac70] text-white text-[12px] md:text-[13px] lg:text-[14px] rounded-[8px] font-medium border-[1.5px] border-[#53ac70] transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white"
                        >
                          {slide.ctaPrimary}
                        </Link>

                        {/* White outlined button - Responsive */}
                        <Link
                          href="#signup"
                          className="inline-block py-[10px] px-[18px] md:py-[11px] md:px-[20px] lg:py-[12px] lg:px-[24px] bg-white text-[#53ac70] text-[12px] md:text-[13px] lg:text-[14px] rounded-[8px] font-medium border-[1.5px] border-white transition-all duration-300 hover:bg-transparent hover:text-white"
                        >
                          Create an Account
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="hidden lg:flex absolute left-[-25px] bottom-10 z-20 w-[70px] h-[70px] items-center justify-center rounded-lg bg-[#53ac70] text-white transition-transform duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="hidden lg:flex absolute right-[-25px] bottom-10 z-20 w-[70px] h-[70px] items-center justify-center rounded-lg bg-[#53ac70] text-white transition-transform duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Hero Bottom - Service Snapshot Card - Responsive */}
      <div className="container-axiom">
        <div className="flex justify-center lg:justify-end">
          <div className="w-full lg:w-7/12 pr-0 lg:pr-20 px-4 md:px-0">
            <div className="bg-[#f5f7f6] p-4 px-4 md:p-5 md:px-5 lg:px-6 flex gap-3 md:gap-4 lg:gap-5 rounded-[12px] md:rounded-[14px] lg:rounded-[15px] -mt-[40px] md:-mt-[55px] lg:-mt-[75px] relative z-10">
              {/* X Logo Icon - Responsive */}
              <div className="w-[50px] md:w-[60px] lg:w-[70px] flex-shrink-0">
                <Image
                  src="/images/x-logo.png"
                  alt="Axiom X"
                  width={70}
                  height={70}
                  className="w-full"
                />
              </div>

              {/* Snapshot Info */}
              <div>
                <h3 className="text-[13px] md:text-[14px] lg:text-[15px] font-bold mb-2 md:mb-2.5 text-black">
                  Service Snapshot
                </h3>
                <p className="text-black text-[9px] md:text-[10px] leading-[120%]">
                  Axiom x isn&apos;t just a service provider we&apos;re your
                  operational growth engine. Our AI-augmented ecosystem brings
                  together logistics, warehousing, customer engagement, and
                  back-office performance into one unified infrastructure designed
                  to move as fast as your ambition.
                </p>
                <div className="mt-[10px] md:mt-[12px] lg:mt-[15px]">
                  <Link
                    href="#services"
                    className="flex items-center gap-[8px] md:gap-[10px] lg:gap-[12px] text-[#53ac70] font-bold text-[10px] md:text-[11px] group"
                  >
                    See more
                    <span className="w-5 h-5 md:w-6 md:h-6 bg-[#53ac70] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
