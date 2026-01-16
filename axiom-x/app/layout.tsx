import type { Metadata } from "next";
import { Poppins, Alexandria, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

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
  openGraph: {
    title: "Axiom X | Your Operational Growth Engine",
    description:
      "From first mile to final revenue touchpoint, we power the unseen. 3PL & Logistics in the Middle East.",
    url: "https://axiomxgroup.com",
    siteName: "Axiom X",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiom X | Your Operational Growth Engine",
    description:
      "From first mile to final revenue touchpoint, we power the unseen. 3PL & Logistics in the Middle East.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${alexandria.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
