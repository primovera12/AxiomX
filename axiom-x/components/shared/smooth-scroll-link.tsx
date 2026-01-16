"use client";

import { cn } from "@/lib/utils";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SmoothScrollLink({
  href,
  children,
  className,
  onClick,
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Handle anchor links
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    onClick?.();
  };

  return (
    <a href={href} onClick={handleClick} className={cn(className)}>
      {children}
    </a>
  );
}
