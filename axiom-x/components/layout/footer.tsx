"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmoothScrollLink } from "@/components/shared/smooth-scroll-link";
import { siteConfig, footerLinks, content } from "@/lib/constants";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo/logo.png"
                alt={siteConfig.name}
                width={140}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}. From first mile to final revenue touchpoint,
              we power the unseen.
            </p>

            {/* App Download Placeholders */}
            <div className="flex flex-col gap-3">
              <p className="text-sm text-white/50">Download our app</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-sm transition-colors"
                >
                  App Store
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-sm transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <li key={link.label}>
                    <SmoothScrollLink
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </SmoothScrollLink>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Account</h3>
            <ul className="space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>{siteConfig.contact.regions.join(" | ")}</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="block hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="block hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {content.newsletter.headline}
            </h3>
            <p className="text-white/70 text-sm mb-4">
              {content.newsletter.description}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder={content.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-forest"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  content.newsletter.buttonText
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
