'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { DynamicClock } from './DynamicClock';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-editorial-line"
    >
      {/* Top Metadata Strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-wider text-editorial-subtle uppercase border-b border-editorial-line/40 pb-4"
      >
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-editorial-black font-semibold">RATHAN P</span>
          <span>/</span>
          <span>FOUNDER & BUILDER</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>INDIA</span>
          <span className="hidden sm:inline">/</span>
          <DynamicClock showLocation={false} className="hidden sm:inline-flex" />
        </div>
      </motion.div>

      {/* Main Editorial Headline & Core Statement */}
      <div className="my-auto py-16 sm:py-24 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tighter text-editorial-black leading-[1.04] mb-8"
        >
          Building things <br className="hidden sm:block" />
          <span className="text-editorial-black/90">worth building.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-2xl"
        >
          <p className="text-xl sm:text-2xl font-sans font-medium text-editorial-dark leading-snug">
            Founder @ <span className="font-semibold text-editorial-black">XTICH</span>
          </p>
          <p className="text-base sm:text-lg text-editorial-muted font-sans leading-relaxed">
            Building modern apparel & workwear in India. Developing <strong className="text-editorial-black font-semibold font-sans">Versity</strong>, XTICH's flagship campus-wear series for schools and colleges, while exploring financial markets and UI design.
          </p>
        </motion.div>
      </div>

      {/* Hero Bottom Bar & Quick Anchors */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-editorial-line/40 text-xs"
      >
        <a
          href="#building"
          className="group flex items-center justify-between p-3 rounded bg-bg-card/50 hover:bg-bg-card border border-transparent hover:border-editorial-line transition-all duration-300"
        >
          <div>
            <span className="block font-mono text-[10px] text-editorial-subtle uppercase">PRIMARY VENTURE</span>
            <span className="font-sans font-semibold text-editorial-black">XTICH & VERSITY</span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-editorial-subtle group-hover:text-editorial-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href="#about"
          className="group flex items-center justify-between p-3 rounded bg-bg-card/50 hover:bg-bg-card border border-transparent hover:border-editorial-line transition-all duration-300"
        >
          <div>
            <span className="block font-mono text-[10px] text-editorial-subtle uppercase">BACKGROUND</span>
            <span className="font-sans font-semibold text-editorial-black">UI DESIGN & MARKETS</span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-editorial-subtle group-hover:text-editorial-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href="#work"
          className="group flex items-center justify-between p-3 rounded bg-bg-card/50 hover:bg-bg-card border border-transparent hover:border-editorial-line transition-all duration-300"
        >
          <div>
            <span className="block font-mono text-[10px] text-editorial-subtle uppercase">DISCIPLINE</span>
            <span className="font-sans font-semibold text-editorial-black">TRADING & PRODUCT</span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-editorial-subtle group-hover:text-editorial-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
}
