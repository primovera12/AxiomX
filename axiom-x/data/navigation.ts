export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Why AxiomX", href: "#why-axiom" },
  { label: "About", href: "#our-story" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms Of Use", href: "/terms" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "#contact" },
  ],
  account: [
    { label: "My Account", href: "/account" },
    { label: "Login / Register", href: "/login" },
  ],
};
