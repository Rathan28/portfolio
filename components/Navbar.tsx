'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DynamicClock } from './DynamicClock';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { num: '01', name: 'Building', href: '#building' },
    { num: '02', name: 'Work', href: '#work' },
    { num: '03', name: 'About', href: '#about' },
    { num: '04', name: 'Journey', href: '#journey' },
    { num: '05', name: 'LinkedIn', href: '#linkedin' },
    { num: '06', name: 'Writing', href: '#writing' },
    { num: '07', name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-bg/85 backdrop-blur-md border-b border-editorial-line/60 transition-all duration-300">
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
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-full border border-editorial-line/80 bg-bg-card/60 backdrop-blur-md text-editorial-black hover:bg-editorial-black hover:text-bg focus:outline-none transition-all duration-300"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Fully Pinned Fixed Viewport Frosted Glass Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-[100] bg-[#F9F8F6]/90 backdrop-blur-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Fixed Bar inside Overlay */}
            <div className="h-16 px-4 sm:px-6 flex items-center justify-between border-b border-editorial-line/60 bg-bg/40 backdrop-blur-md">
              <Link
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-editorial-black focus:outline-none"
              >
                <span className="font-sans text-sm font-bold tracking-tight uppercase">
                  RATHAN P
                </span>
                <span className="text-[10px] font-mono text-editorial-subtle border border-editorial-line px-1.5 py-0.5 rounded-full">
                  XTICH
                </span>
              </Link>

              <div className="flex items-center space-x-3">
                <DynamicClock showLocation={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 rounded-full border border-editorial-black bg-editorial-black text-bg focus:outline-none transition-all duration-300 shadow"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Nav Items Container */}
            <div className="flex-1 flex flex-col justify-between overflow-y-auto px-6 py-6 sm:px-10 max-w-2xl mx-auto w-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-editorial-line/60 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-editorial-subtle">
                    NAVIGATION INDEX
                  </span>
                  <span className="text-[10px] font-mono text-editorial-black font-semibold">
                    07 SECTIONS
                  </span>
                </div>

                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group px-3 py-3 rounded-lg hover:bg-editorial-black/5 transition-all duration-200 flex items-center justify-between text-editorial-black"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-xs font-mono text-editorial-subtle group-hover:text-editorial-black transition-colors">
                          {link.num}
                        </span>
                        <span className="text-xl sm:text-2xl font-sans font-semibold tracking-tight">
                          {link.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-editorial-subtle group-hover:text-editorial-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Bottom Frosted Glass Card */}
              <div className="pt-6 mt-6 border-t border-editorial-line/60">
                <div className="p-5 rounded-xl bg-bg-card/75 backdrop-blur-md border border-editorial-line/80 space-y-4 shadow-sm">
                  <div className="flex justify-between items-center text-xs font-mono text-editorial-muted">
                    <span className="font-semibold text-editorial-black uppercase">FOUNDER @ XTICH</span>
                    <span>DAVANAGERE, IN</span>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center space-x-2 text-xs font-mono font-bold tracking-wider py-3.5 rounded-lg bg-editorial-black text-bg hover:bg-editorial-dark transition-all duration-300 shadow"
                  >
                    <span>LET'S TALK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
