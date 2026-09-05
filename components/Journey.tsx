'use client';

import { motion } from 'framer-motion';

export function Journey() {
  const timelineEvents = [
    {
      year: '2021',
      title: 'Financial Markets Exploration',
      description:
        'Began studying technical analysis, price action, and financial market mechanics. Built quantitative discipline and risk awareness.',
      tag: 'MARKETS',
    },
    {
      year: '2022',
      title: 'UI Design & Freelancing',
      description:
        'Started freelance UI design work, building digital interfaces and visual systems for nearly two years.',
      tag: 'DESIGN',
    },
    {
      year: '2023',
      title: 'Founded XTICH',
      description:
        'Launched XTICH in April 2023. Invested into initial D2C apparel lines, navigating early manufacturing and supply chain failures.',
      tag: 'FOUNDING',
    },
    {
      year: '2024',
      title: 'Prop Trading & Market Execution',
      description:
        'Expanded trading into Indian equities and prop firm forex accounts through capital platforms like Funding Pips.',
      tag: 'TRADING',
    },
    {
      year: '2025',
      title: 'Versity & B2B Expansion',
      description:
        'Pivoted apparel focus into Versity — XTICH’s flagship campus wear. Executed cold calls across Davanagere, booking meetings and closing institutional deals.',
      tag: 'CAMPUS WEAR',
    },
    {
      year: '2026',
      title: 'Full-Time Founder Focus',
      description:
        'Dropped out of B.Tech Computer Science to dedicate 100% focus to scaling XTICH manufacturing, sales, and brand operations.',
      tag: 'BUILDING',
    },
  ];

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-editorial-line">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16 border-b border-editorial-line pb-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-editorial-subtle uppercase tracking-widest">
          <span className="text-editorial-black font-semibold">04</span>
          <span>/</span>
          <span>CHRONOLOGICAL JOURNEY</span>
        </div>
        <span className="text-xs font-mono text-editorial-subtle uppercase hidden sm:inline">
          2021 — PRESENT
        </span>
      </div>

      {/* Editorial Timeline Grid */}
      <div className="relative border-l border-editorial-line/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
        {timelineEvents.map((item, idx) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="relative group"
          >
            {/* Timeline Dot Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-bg border-2 border-editorial-black group-hover:bg-editorial-black transition-colors" />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-xl sm:text-2xl font-mono font-bold text-editorial-black">
                  {item.year}
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-editorial-black">
                  {item.title}
                </h3>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-editorial-subtle uppercase border border-editorial-line px-2 py-0.5 rounded-full w-fit">
                {item.tag}
              </span>
            </div>

            <p className="text-sm sm:text-base font-sans text-editorial-muted max-w-3xl leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
