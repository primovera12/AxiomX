"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SmoothScrollLink } from "@/components/shared/smooth-scroll-link";
import { navLinks, siteConfig } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-4/5 max-w-[350px] bg-white">
        <SheetHeader className="text-left">
          <SheetTitle className="sr-only">{siteConfig.name} Menu</SheetTitle>
          <Image
            src="/images/logo/logo.png"
            alt={siteConfig.name}
            width={120}
            height={35}
            className="h-9 w-auto"
          />
        </SheetHeader>

        <nav className="flex flex-col gap-1 mt-8">
          {navLinks.map((link) => (
            <SmoothScrollLink
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg font-medium py-3 px-2 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              {link.label}
            </SmoothScrollLink>
          ))}
        </nav>

        <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-gray-100">
          <Button variant="outline" asChild className="w-full justify-center">
            <Link href="/signup" onClick={onClose}>
              Sign Up
            </Link>
          </Button>
          <Button
            asChild
            className="w-full justify-center bg-[#3f7537] hover:bg-[#19342c]"
          >
            <Link href="/login" onClick={onClose}>
              Login
            </Link>
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Contact Us</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-sm text-gray-700 hover:text-primary transition-colors block mb-1"
          >
            {siteConfig.contact.email}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="text-sm text-gray-700 hover:text-primary transition-colors block"
          >
            {siteConfig.contact.phone}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
