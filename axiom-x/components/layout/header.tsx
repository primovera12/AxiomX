"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#why-axiom", label: "Why AxiomX" },
  { href: "#contact", label: "Contact" },
  { href: "#about", label: "About" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white py-4 md:py-5 lg:py-5">
        <div className="container-axiom">
          <div className="flex items-center justify-between">
            {/* Logo - Responsive sizing */}
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/logo-2.png"
                  alt="Axiom X"
                  width={120}
                  height={40}
                  className="w-[100px] md:w-[110px] lg:w-[120px] h-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation + CTAs */}
            <div className="hidden lg:flex items-center gap-[40px]">
              {/* Main Menu */}
              <nav>
                <ul className="flex items-center gap-x-[40px]">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="font-medium text-black transition-colors duration-300 hover:text-[#53ac70]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Header Buttons */}
              <div className="flex items-center gap-[15px]">
                <Link
                  href="/signup"
                  className="inline-flex justify-center items-center min-w-[110px] px-5 py-[7px] bg-[#53ac70] text-white font-medium text-[14px] rounded-[200px] border-[1.5px] border-[#53ac70] transition-all duration-300 hover:bg-transparent hover:text-[#53ac70]"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="inline-flex justify-center items-center min-w-[110px] px-5 py-[7px] bg-[#53ac70] text-white font-medium text-[14px] rounded-[200px] border-[1.5px] border-[#53ac70] transition-all duration-300 hover:bg-transparent hover:text-[#53ac70]"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-black"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-[280px] h-full bg-white shadow-xl">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-600 hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Mobile Nav Links */}
            <nav className="pt-20 px-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-2 text-black font-medium hover:text-[#53ac70] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile CTAs */}
              <div className="mt-8 space-y-3">
                <Link
                  href="/signup"
                  className="block w-full text-center px-4 py-3 bg-[#53ac70] text-white font-medium rounded-[200px] transition-all duration-300 hover:bg-[#428f5c]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="block w-full text-center px-4 py-3 bg-[#53ac70] text-white font-medium rounded-[200px] transition-all duration-300 hover:bg-[#428f5c]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
