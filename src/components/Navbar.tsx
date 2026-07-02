"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300 ${
        scrolled ? "h-16 shadow-md" : "h-20 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline-md text-2xl text-on-surface tracking-tight font-semibold hover:text-secondary transition-colors"
        >
          Starline Constructions
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-md text-label-md uppercase tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-secondary border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-secondary text-on-secondary px-8 py-3 font-label-md text-label-md uppercase tracking-[0.1em] hover:scale-105 duration-300 ease-out shadow-sm cursor-pointer">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-on-surface p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-label-md text-label-md uppercase tracking-wider py-2 border-b border-outline-variant/10 ${
                    isActive ? "text-secondary font-bold" : "text-on-surface-variant"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-secondary text-on-secondary py-3 font-label-md text-label-md uppercase tracking-wider mt-2">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
