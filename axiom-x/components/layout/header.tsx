"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmoothScrollLink } from "@/components/shared/smooth-scroll-link";
import { MobileNav } from "./mobile-nav";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo.png"
                alt={siteConfig.name}
                width={140}
                height={40}
                className={cn(
                  "h-10 w-auto transition-all duration-300",
                  isScrolled ? "" : "brightness-0 invert"
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <SmoothScrollLink
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full",
                    isScrolled
                      ? "text-gray-700 hover:text-primary"
                      : "text-white hover:text-white/80"
                  )}
                >
                  {link.label}
                </SmoothScrollLink>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                asChild
                className={cn(
                  "font-medium",
                  isScrolled
                    ? "text-gray-700 hover:text-primary hover:bg-primary/10"
                    : "text-white hover:text-white hover:bg-white/10"
                )}
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button
                asChild
                className="bg-primary hover:bg-primary-forest text-white font-medium"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "lg:hidden",
                isScrolled ? "text-gray-700" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
