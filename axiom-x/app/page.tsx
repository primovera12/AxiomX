import { HeroSection } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { PartnersSection } from "@/components/sections/partners";
import { WhyAxiomSection } from "@/components/sections/why-axiom";
import { ServicesSection } from "@/components/sections/services";
import { OurStorySection } from "@/components/sections/our-story";
import { VisionMissionSection } from "@/components/sections/vision-mission";
import { BrandValuesSection } from "@/components/sections/brand-values";
import { CareersCTASection } from "@/components/sections/careers-cta";
import { ShipmentTrackingSection } from "@/components/sections/shipment-tracking";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroSection />

      {/* Stats Bar with Animated Counters */}
      <StatsBar />

      {/* Partners with CTAs */}
      <PartnersSection />

      {/* Why Axiom X */}
      <WhyAxiomSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Our Story */}
      <OurStorySection />

      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Brand Values */}
      <BrandValuesSection />

      {/* Careers CTA */}
      <CareersCTASection />

      {/* Shipment Tracking */}
      <ShipmentTrackingSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
