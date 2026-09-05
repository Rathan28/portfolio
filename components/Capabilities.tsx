'use client';

import { useState } from 'react';

export function Capabilities() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      num: '01',
      title: 'Entrepreneurship',
      desc: 'Building ventures from zero. Navigating product-market fit, capital allocation, and operational pivots.',
    },
    {
      num: '02',
      title: 'Apparel',
      desc: 'D2C apparel development, garment manufacturing, supply chain logistics, and institutional uniform design.',
    },
    {
      num: '03',
      title: 'Brand Building',
      desc: 'Positioning, visual identity, product series architecture, and story-driven brand creation (XTICH & Versity).',
    },
    {
      num: '04',
      title: 'UI / Product Design',
      desc: 'Interface design, visual hierarchy, responsive layout systems, and clean user experience architecture.',
    },
    {
      num: '05',
      title: 'Business Strategy',
      desc: 'Pricing strategy, unit economics, market expansion, and long-term business positioning.',
    },
    {
      num: '06',
      title: 'Financial Markets',
      desc: 'Market structure research, macroeconomic sentiment analysis, and equity market evaluation.',
    },
    {
      num: '07',
      title: 'Trading',
      desc: 'Active execution in Indian equities and prop firm forex accounts with strict risk management.',
    },
    {
      num: '08',
      title: 'Business Development',
      desc: 'Direct institutional sales, B2B cold calling, client deal closing, and partnership development.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-editorial-line">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12 border-b border-editorial-line pb-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-editorial-subtle uppercase tracking-widest">
          <span className="text-editorial-black font-semibold">05</span>
          <span>/</span>
          <span>WHAT I WORK ON</span>
        </div>
        <span className="text-xs font-mono text-editorial-subtle uppercase hidden sm:inline">
          CAPABILITIES INDEX
        </span>
      </div>

      {/* Typography List */}
      <div className="divide-y divide-editorial-line">
        {capabilities.map((item, idx) => {
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={item.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="py-6 sm:py-8 transition-colors duration-300 group cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-baseline space-x-6 sm:space-x-10">
                  <span className="text-xs sm:text-sm font-mono text-editorial-subtle font-semibold">
                    {item.num}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-sans font-bold text-editorial-black tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="md:w-1/2 lg:w-5/12">
                  <p
                    className={`text-xs sm:text-sm font-sans transition-opacity duration-300 ${
                      isHovered ? 'text-editorial-black font-medium opacity-100' : 'text-editorial-muted opacity-80 md:opacity-50'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
