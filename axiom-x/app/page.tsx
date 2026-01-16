export default function Home() {
  return (
    <div>
      {/* Hero Section Placeholder */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-secondary"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            From first mile to final revenue touchpoint, we power the unseen.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto">
            Your operations have untapped potential. Axiom X helps you find it
            and turn it into execution, insight, and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-forest text-white px-8 py-3 rounded-md font-medium transition-colors">
              Speak to an Expert
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
              Create an Account
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar Placeholder */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-sm opacity-80">
                Years Operational Excellence
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-sm opacity-80">Orders / Year Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-80">SLA Achievement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">160K+</div>
              <div className="text-sm opacity-80">
                Technical Cases Resolved / Year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Placeholder */}
      <section id="services" className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to scale with your business
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-center text-muted-foreground">
              Services section coming in Phase 5...
            </p>
          </div>
        </div>
      </section>

      {/* Why Axiom X Placeholder */}
      <section id="why-axiom" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Axiom X?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You don&apos;t just need to outsource. You need to outsmart,
              outscale, and out-deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Placeholder */}
      <section id="our-story" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              OUR STORY: FROM 1997 TO THE AI ERA
            </h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              We started in 1997 as Axiom X Telecom — building the Middle
              East&apos;s largest mobility distribution engine.
            </p>
          </div>
        </div>
      </section>

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

      {/* Footer Placeholder */}
      <footer className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-4">Axiom X</p>
          <p className="opacity-60 mb-4">Your operational growth engine</p>
          <p className="text-sm opacity-40">
            &copy; {new Date().getFullYear()} Axiom X. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
