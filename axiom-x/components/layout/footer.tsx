"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

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
      {/* Main Footer Content */}
      <div className="border-t border-[#e0e0e0] pt-12 pb-5">
        <div className="container-axiom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Column 1: Logo + Subscribe */}
            <div className="lg:col-span-4 pr-2.5">
              {/* Logo */}
              <div className="mb-8">
                <Link href="/">
                  <Image
                    src="/images/logo-2.png"
                    alt="Axiom X"
                    width={120}
                    height={40}
                    className="w-[120px] h-auto"
                  />
                </Link>
              </div>

              {/* Subscribe Section */}
              <div>
                <h4 className="text-xl font-semibold mb-2.5 leading-[90%] text-black opacity-90">
                  Subscribe
                </h4>
                <label className="text-[15px] font-medium text-black opacity-90 block">
                  Get 10% off your first order
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
            </div>

            {/* Column 2: Account */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Account</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                    Login / Register
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Link */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-[15px] text-black opacity-90 hover:text-[#53ac71] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Download App */}
            <div className="lg:col-span-4 text-center">
              <h4 className="text-lg font-semibold mb-2">Download App</h4>
              <p className="text-[13px] mb-4">Save $3 with App New User Only</p>

              {/* Social Links */}
              <div className="mt-10">
                <ul className="flex items-center justify-center gap-6 text-xl">
                  <li>
                    <a href="#" className="text-black hover:text-[#53ac71] transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black hover:text-[#53ac71] transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black hover:text-[#53ac71] transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black hover:text-[#53ac71] transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#e0e0e0] py-5 mt-14">
        <div className="container-axiom text-center">
          <p className="text-[15px] m-0">
            Copyright Axiomx.com All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
