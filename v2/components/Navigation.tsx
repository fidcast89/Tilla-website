"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "#" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6 md:h-20 md:px-12 lg:px-16">
        {/* Left side - Logo and Nav */}
        <div className="flex items-center gap-8 flex-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--brand-primary)] to-teal-500 shadow-lg" />
            <span className="text-xl font-bold text-[var(--brand-dark)]">Tilla</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? "text-[var(--brand-primary)] font-semibold"
                    : "text-[var(--fg)] hover:text-[var(--brand-primary)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side - CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="https://pos.tilla.app"
            className="hidden md:inline-flex rounded-full bg-[var(--brand-primary)] px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Get started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-[var(--muted)] rounded-lg transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/95 backdrop-blur-md"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] font-semibold"
                    : "text-[var(--fg)] hover:bg-[var(--muted)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://pos.tilla.app"
              className="block w-full rounded-full bg-[var(--brand-primary)] px-6 py-2.5 text-center text-sm font-semibold text-white shadow-lg"
            >
              Get started
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

