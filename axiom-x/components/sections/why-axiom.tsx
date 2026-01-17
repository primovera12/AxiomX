"use client";

// Card content data
const cards = [
  {
    id: 1,
    content:
      "At Axiom x, we don't sell services. We offer a system. One that thinks, scales, and adapts with your business.",
  },
  {
    id: 2,
    content:
      "At Axiom x, we don't sell services. We offer a system. One that thinks, scales, and adapts with your business.",
  },
];

export function WhyAxiomSection() {
  return (
    <section id="why-axiom" className="py-[60px]">
      <div className="container-axiom">
        {/* Full-width container with background image and rounded corners */}
        <div
          className="relative rounded-[20px] overflow-hidden min-h-[750px] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/backgrounds/bg-2.jpg)" }}
        >
          {/* Dark border/frame effect */}
          <div className="absolute inset-0 rounded-[20px] border-[4px] border-[#1a1a2e]" />

          {/* Content */}
          <div className="relative z-10 py-[40px] px-[50px] h-full flex flex-col min-h-[750px]">
            {/* Top row: Title on left, White cards on right */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Left column: Title + Dark box below */}
              <div className="flex flex-col gap-4 lg:w-[320px] flex-shrink-0">
                {/* Title - smaller, white text, italic */}
                <h2 className="text-[32px] md:text-[38px] font-bold text-white leading-tight italic m-0">
                  Why Axiom <span className="text-[#d4fb50]">x</span> ?
                </h2>

                {/* Dark subtitle box - smaller */}
                <div className="bg-black/70 py-4 px-5 rounded-[16px]">
                  <p className="text-white text-[13px] md:text-[14px] leading-[1.5] font-normal m-0">
                    You don&apos;t just need to outsource.
                    <br />
                    You need to outsmart, outscale,
                    <br />
                    and out-deliver.
                  </p>
                </div>
              </div>

              {/* Right column: Two white cards side by side */}
              <div className="flex flex-col lg:flex-row gap-4 flex-1">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white/70 backdrop-blur-sm py-4 px-5 rounded-[20px] flex items-center gap-3 flex-1"
                  >
                    {/* Icon - same height as text */}
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        src="/images/icons/icon-about.png"
                        alt="About"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <p className="text-[12px] md:text-[13px] leading-[1.5] font-normal m-0 text-black">
                      {card.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom text - smaller, centered */}
            <p className="text-white/90 text-[12px] md:text-[13px] mt-auto pt-[40px] text-center font-normal">
              Our AI-enhanced ecosystem was built for the operational complexity
              that most businesses are only now realizing they need to solve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
