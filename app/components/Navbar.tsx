"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Café Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-amber-200 via-orange-400 to-red-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
            Café <span className="text-white italic">Too</span>
          </span>
        </Link>

        {/* Desktop Navbar Links (derived from reference image) */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/80">
          <Link href="#home" className="hover:text-orange-400 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-orange-400 transition-colors">About</Link>
          <Link href="#menu" className="hover:text-orange-400 transition-colors">Menu</Link>
          <Link href="#gallery" className="hover:text-orange-400 transition-colors">Gallery</Link>
          <Link href="#contact" className="hover:text-orange-400 transition-colors">Contact</Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:block">
          <a
            href="#menu"
            className="border border-white/30 bg-white/5 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium rounded-full hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 shadow-lg"
          >
            Order Online
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-xl py-6 px-8 flex flex-col gap-5 text-sm uppercase tracking-widest text-white animate-in slide-in-from-top-4 duration-300">
          <Link href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400">Home</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400">About</Link>
          <Link href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400">Menu</Link>
          <Link href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400">Gallery</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400">Contact</Link>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-orange-500 text-center py-3 rounded-md text-xs font-bold tracking-widest text-white mt-2"
          >
            Order Online
          </a>
        </div>
      )}
    </header>
  );
}