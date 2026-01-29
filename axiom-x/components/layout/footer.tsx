"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { AnimatedElement } from "@/components/shared/section-wrapper";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white">
      {/* Main Footer Content - Responsive padding */}
      <div className="border-t border-[#e0e0e0] pt-8 md:pt-10 lg:pt-12 pb-4 md:pb-5">
        <div className="container-axiom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-7 lg:gap-8">
            {/* Column 1: Logo + Subscribe */}
            <AnimatedElement variant="fadeUp" className="lg:col-span-5 pr-0 md:pr-2.5">
              {/* Logo - Responsive sizing */}
              <div className="mb-6 md:mb-7 lg:mb-8">
                <Link href="/">
                  <Image
                    src="/images/logo-2.png"
                    alt="Axiom X"
                    width={120}
                    height={40}
                    className="w-[100px] md:w-[110px] lg:w-[120px] h-auto"
                  />
                </Link>
              </div>

              {/* Subscribe Section */}
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-2.5 leading-[90%] text-black opacity-90">
                  Subscribe
                </h4>
                <label className="text-[14px] md:text-[15px] font-medium text-black opacity-90 block">
                  Get the latest updates and news
                </label>
                <form onSubmit={handleNewsletterSubmit} className="mt-5 relative h-10">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-0 border-b border-[#eee] p-2.5 text-base outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#d8d8d8] hover:text-[#53ac71] transition-colors text-lg cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </AnimatedElement>

            {/* Columns 2 & 3: Our Services + Quick Link - Side by side on mobile */}
            <AnimatedElement variant="fadeUp" delay={0.1} className="grid grid-cols-2 md:contents gap-6">
              {/* Column 2: Our Services */}
              <div className="lg:col-span-3">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Our Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                      Last Mile Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                      Warehousing & Inventory
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                      Call Center Support
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                      Back Office Services
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                      Value-Added Services
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Quick Link */}
              <div className="lg:col-span-2">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Link</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                      Terms Of Use
                    </Link>
                  </li>
                  <li>
                    <a href="#contact" className="text-[14px] md:text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Column 4: Social Links */}
            <AnimatedElement variant="fadeUp" delay={0.2} className="lg:col-span-2 text-left md:text-left lg:text-right">
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Follow Us</h4>
              {/* Social Links - Touch-friendly sizing */}
              <ul className="flex items-center justify-start lg:justify-end gap-3 md:gap-4">
                <li>
                  <a href="#" className="inline-flex items-center justify-center w-10 h-10 text-black hover:text-[#53ac71] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center justify-center w-10 h-10 text-black hover:text-[#53ac71] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center justify-center w-10 h-10 text-black hover:text-[#53ac71] transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center justify-center w-10 h-10 text-black hover:text-[#53ac71] transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* Copyright - Responsive margin and text */}
      <div className="border-t border-[#e0e0e0] py-4 md:py-5 mt-8 md:mt-10 lg:mt-14">
        <div className="container-axiom text-center">
          <p className="text-[13px] md:text-[14px] lg:text-[15px] m-0">
            Copyright Axiomx.com All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
