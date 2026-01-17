"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Card content data
const cards = [
  {
    id: 1,
    content: "At Axiom x, we don't sell services. We offer a system. One that thinks, scales, and adapts with your business.",
  },
  {
    id: 2,
    content: "Our AI-enhanced ecosystem was built for the operational complexity that most businesses are only now realizing they need to solve.",
  },
  {
    id: 3,
    content: "From logistics to customer engagement, we power the unseen infrastructure that drives growth.",
  },
  {
    id: 4,
    content: "We transform complexity into execution, insight, and measurable growth across every touchpoint.",
  },
];

export function WhyAxiomSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section id="why-axiom" className="py-[60px]">
      <div className="container-axiom">
        {/* Full-width container with background image and rounded corners */}
        <div
          className="relative rounded-[40px] overflow-hidden py-[80px] px-[60px] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/bg-3.jpg)" }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10">
            {/* Title - white text, large */}
            <h2 className="text-[48px] md:text-[55px] font-bold text-white mb-4 leading-tight">
              Why Axiom <span className="text-[#d4fb50]">x</span> ?
            </h2>

            {/* Subtitle - white text, NO green */}
            <p className="text-[22px] md:text-[26px] text-white font-normal mb-[50px] leading-[1.4] max-w-[600px]">
              You don&apos;t just need to outsource.
              <br />
              You need to outsmart, outscale, and out-deliver.
            </p>

            {/* Carousel Cards - 2 visible at a time */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {cards.map((card, index) => {
                  // Alternate between white and black cards
                  const isWhiteCard = index % 2 === 0;
                  const isHovered = hoveredCard === card.id;

                  // On hover, colors swap
                  const showWhite = isHovered ? !isWhiteCard : isWhiteCard;

                  return (
                    <div
                      key={card.id}
                      className="flex-[0_0_calc(50%-12px)] min-w-0"
                      onMouseEnter={() => setHoveredCard(card.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className={`
                          p-8 rounded-[20px] h-full min-h-[200px] flex items-center
                          transition-all duration-500 cursor-pointer
                          ${showWhite
                            ? "bg-white/80 backdrop-blur-sm"
                            : "bg-black/80 backdrop-blur-sm"
                          }
                        `}
                      >
                        <p
                          className={`
                            text-[18px] md:text-[20px] leading-[1.5] font-normal m-0
                            transition-colors duration-500
                            ${showWhite ? "text-black" : "text-white"}
                          `}
                        >
                          {card.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* NO buttons - they're already in partners section */}
          </div>
        </div>
      </div>
    </section>
  );
}
