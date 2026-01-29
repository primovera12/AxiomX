import type { Metadata } from "next";
import { Poppins, Alexandria, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

// JSON-LD Structured Data for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Axiom X",
  description:
    "From first mile to final revenue touchpoint, we power the unseen. 3PL & Logistics services in UAE, KSA, Oman, Kuwait.",
  url: "https://axiomxgroup.com",
  logo: "https://axiomxgroup.com/images/logo-2.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971 4 3101 010",
    contactType: "customer service",
    email: "info@axiomxgroup.com",
    areaServed: ["AE", "SA", "OM", "KW"],
    availableLanguage: ["English", "Arabic"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressRegion: "Dubai",
  },
  sameAs: [
    "https://www.facebook.com/axiomxgroup",
    "https://www.linkedin.com/company/axiomxgroup",
    "https://www.instagram.com/axiomxgroup",
    "https://twitter.com/axiomxgroup",
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    geoRadius: "2000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Logistics Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Last Mile Delivery",
          description: "Efficient last mile delivery services across the Middle East",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warehousing & Inventory",
          description: "Comprehensive warehousing and inventory management solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Call Center Support",
          description: "Professional call center and customer support services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Back Office Services",
          description: "Efficient back office and administrative support",
        },
      },
    ],
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axiomxgroup.com"),
  title: "Axiom X | Your Operational Growth Engine",
  description:
    "From first mile to final revenue touchpoint, we power the unseen. Axiom X helps you find untapped potential and turn it into execution, insight, and growth. 3PL & Logistics in UAE, KSA, Oman, Kuwait.",
  keywords: [
    "3PL",
    "logistics",
    "warehousing",
    "fulfillment",
    "last mile delivery",
    "UAE",
    "KSA",
    "Middle East",
    "supply chain",
    "operations",
  ],
  authors: [{ name: "Axiom X" }],
  alternates: {
    canonical: "https://axiomxgroup.com",
  },
  openGraph: {
    title: "Axiom X | Your Operational Growth Engine",
    description:
      "From first mile to final revenue touchpoint, we power the unseen. 3PL & Logistics in the Middle East.",
    url: "https://axiomxgroup.com",
    siteName: "Axiom X",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Axiom X - Your Operational Growth Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiom X | Your Operational Growth Engine",
    description:
      "From first mile to final revenue touchpoint, we power the unseen. 3PL & Logistics in the Middle East.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${alexandria.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        <main id="main-content" className="overflow-x-hidden">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
