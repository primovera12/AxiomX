"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroSlides } from "@/lib/constants";

export function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

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
    <section id="hero" className="relative h-screen min-h-[600px]">
      {/* Carousel Container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              {/* Background Video or Image */}
              {slide.backgroundVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={slide.backgroundVideo} type="video/mp4" />
                  <source
                    src={slide.backgroundVideo.replace(".mp4", ".mov")}
                    type="video/quicktime"
                  />
                </video>
              ) : slide.backgroundImage ? (
                <Image
                  src={slide.backgroundImage}
                  alt=""
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              ) : (
                <div className="absolute inset-0 bg-primary-dark" />
              )}

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4">
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={slide.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                      >
                        <motion.h1
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.6 }}
                          className="font-heading text-4xl md:text-5xl lg:text-hero font-semibold text-white mb-6 leading-tight"
                        >
                          {slide.headline}
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="text-base md:text-lg lg:text-xl text-white/80 mb-8 max-w-2xl"
                        >
                          {slide.subtext}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <Button
                            size="lg"
                            className="bg-primary hover:bg-primary-forest text-white font-medium px-8"
                            asChild
                          >
                            <Link href="#contact">{slide.ctaPrimary}</Link>
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-medium px-8"
                            asChild
                          >
                            <Link href="/signup">{slide.ctaSecondary}</Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Desktop Only */}
      <button
        onClick={scrollPrev}
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-forest transition-colors shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-forest transition-colors shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators - Mobile Only */}
      <div className="flex lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20 gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/60 text-sm">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
