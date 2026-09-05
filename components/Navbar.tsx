'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DynamicClock } from './DynamicClock';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Building', href: '#building' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'LinkedIn', href: '#linkedin' },
    { name: 'Writing', href: '#writing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-bg/90 backdrop-blur-md border-b border-editorial-line/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Left: Brand Name */}
        <Link
          href="#hero"
          className="group flex items-center space-x-2 text-editorial-black focus:outline-none"
        >
          <span className="font-sans text-sm sm:text-base font-bold tracking-tight uppercase">
            RATHAN P
          </span>
          <span className="text-[10px] font-mono text-editorial-subtle hidden sm:inline-block border border-editorial-line px-1.5 py-0.5 rounded-full">
            XTICH
          </span>
        </Link>

        {/* Center: Location & Dynamic Clock (Desktop & Tablet) */}
        <div className="hidden md:flex items-center space-x-2 text-xs">
          <DynamicClock />
        </div>

        {/* Right: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-editorial-muted hover:text-editorial-black transition-colors duration-200 editorial-link"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center justify-center text-xs font-mono tracking-wider px-3.5 py-1.5 rounded-full border border-editorial-black text-editorial-black hover:bg-editorial-black hover:text-bg transition-all duration-300"
          >
            LET'S TALK
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <div className="md:hidden">
            <DynamicClock showLocation={false} />
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-editorial-black hover:text-editorial-muted focus:outline-none transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-bg z-40 flex flex-col justify-between p-6 sm:p-10 border-t border-editorial-line animate-fadeIn">
          <div className="space-y-6">
            <div className="text-[10px] font-mono uppercase tracking-widest text-editorial-subtle mb-4">
              NAVIGATION
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-sans font-medium tracking-tight text-editorial-black hover:text-editorial-muted transition-colors flex items-center justify-between border-b border-editorial-line/40 pb-3"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-editorial-subtle">↗</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-editorial-line space-y-4">
            <div className="flex justify-between items-center text-xs font-mono text-editorial-muted">
              <span>FOUNDER @ XTICH</span>
              <span>KARNATAKA, IN</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center text-sm font-sans font-semibold py-3 rounded-full bg-editorial-black text-bg hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
