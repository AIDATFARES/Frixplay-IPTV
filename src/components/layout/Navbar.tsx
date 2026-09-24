"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050607]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-[#050607]/90 backdrop-blur-xl border-b border-[#FFB800]/10"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex relative z-10 items-center gap-6 xl:gap-8 px-6 text-sm font-semibold">
          <Link href="/" onClick={handleLogoClick} className="text-stone-300 hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link href="/#how-it-works" className="text-stone-300 hover:text-white transition-colors duration-200 whitespace-nowrap">
            How It Works
          </Link>
          <Link href="/pricing" className="text-stone-300 hover:text-white transition-colors duration-200">
            Pricing
          </Link>
          <Link href="/installation" className="text-stone-300 hover:text-white transition-colors duration-200 whitespace-nowrap">
            Installation
          </Link>
          <Link href="/channels" className="text-stone-300 hover:text-white transition-colors duration-200 whitespace-nowrap">
            Channels List
          </Link>
          <Link href="/contact" className="text-stone-300 hover:text-white transition-colors duration-200 whitespace-nowrap">
            Contact Support
          </Link>
          <Link href="/reseller" className="text-stone-300 hover:text-white transition-colors duration-200 whitespace-nowrap">
            Reseller
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 z-20">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Frixplay%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FFB800] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#FFB800] transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,184,0,0.4)]"
          >
            Get Started
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors z-20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050607] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-semibold text-stone-300">
            <Link href="/" onClick={handleLogoClick} className="hover:text-white py-1">Home</Link>
            <Link href="/#how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">How It Works</Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Pricing</Link>
            <Link href="/installation" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Installation</Link>
            <Link href="/channels" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Channels List</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Contact Support</Link>
            <Link href="/reseller" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Reseller</Link>
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Frixplay%20IPTV."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 rounded-full text-sm font-bold text-white bg-[#FFB800] shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
