import { HeroSection } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ServicesSection } from "@/components/sections/services";
import { WhyAxiomSection } from "@/components/sections/why-axiom";
import { PartnersSection } from "@/components/sections/partners";
import { OurStorySection } from "@/components/sections/our-story";
import { VisionMissionSection } from "@/components/sections/vision-mission";
import { BrandValuesSection } from "@/components/sections/brand-values";
import { CareersCTASection } from "@/components/sections/careers-cta";

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroSection />

      {/* Stats Bar with Animated Counters */}
      <StatsBar />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Axiom X */}
      <WhyAxiomSection />

      {/* Partners Marquee */}
      <PartnersSection />

      {/* Our Story */}
      <OurStorySection />

      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Brand Values */}
      <BrandValuesSection />

      {/* Careers CTA */}
      <CareersCTASection />

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s talk scale.
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            Whether you&apos;re looking to optimize delivery, centralize
            operations, or unlock new revenue — Axiom X is your growth partner.
          </p>
          <p className="text-white/60">Contact form coming in Phase 7...</p>
        </div>
      </section>
    </div>
  );
}
