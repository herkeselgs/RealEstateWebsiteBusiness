"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: `/demo/${site.demoAgentSlug}`, label: "Live Demo" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-stone-50/90 backdrop-blur transition-shadow",
        scrolled ? "border-stone-200 shadow-sm" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 transition hover:text-ink-950 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brass-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-ink-950 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-md"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
