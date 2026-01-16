"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { content, whyAxiomSlides } from "@/lib/constants";

export function WhyAxiomSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slide = whyAxiomSlides[0];

  return (
    <section id="why-axiom" className="py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
              {content.whyAxiom.headline}
            </h2>
            <p className="text-lg md:text-xl text-primary font-medium mb-6">
              {content.whyAxiom.subheadline}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {content.whyAxiom.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-forest text-white font-medium"
                asChild
              >
                <Link href="#contact">{content.whyAxiom.ctaPrimary}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 font-medium"
                asChild
              >
                <Link href="/signup">{content.whyAxiom.ctaSecondary}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {slide.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-dark mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Note */}
            <p className="text-sm text-gray-500 italic pl-4 border-l-2 border-primary/30">
              {slide.note}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
