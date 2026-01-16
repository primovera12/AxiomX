"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye, Target } from "lucide-react";
import { content } from "@/lib/constants";

export function VisionMissionSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cards = [
    {
      icon: Eye,
      title: content.vision.headline,
      text: content.vision.content,
      gradient: "from-primary to-primary-forest",
    },
    {
      icon: Target,
      title: content.mission.headline,
      text: content.mission.content,
      gradient: "from-primary-dark to-primary-forest",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 md:p-10 text-white overflow-hidden bg-gradient-to-br ${card.gradient}`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                {card.title}
              </h3>
              <p className="text-white/90 leading-relaxed">{card.text}</p>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
