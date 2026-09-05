'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, CornerDownRight } from 'lucide-react';

export function SelectedWork() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const works = [
    {
      num: '01',
      title: 'XTICH',
      subtitle: 'Includes Versity — flagship campus-wear series',
      category: 'Main Brand / Apparel & Business',
      timeline: '2023 — Present',
      summary:
        'Founded in April 2023. XTICH is the primary brand I am building — modern apparel and workwear for India, featuring Versity as its flagship campus-wear series.',
      details: [
        'XTICH: Main parent brand overseeing strategy, marketing, finance, and manufacturing operations.',
        'VERSITY: Flagship series reimagining school & PU college uniforms into comfortable hoodies, polos, jackets, and track pants.',
        'Executed hundreds of cold calls across Davanagere, booking meetings and closing institutional confirmations.',
      ],
      link: 'https://xtich.in',
      linkLabel: 'xtich.in',
      isParentVenture: true,
    },
    {
      num: '02',
      title: 'UI DESIGN',
      subtitle: 'Interface & Visual Strategy',
      category: 'Interface / Product / Visual Design',
      timeline: '2022 — 2024',
      summary:
        'Freelance UI design work spanning almost two years, focusing on clean digital interfaces, layout hierarchy, and product aesthetics.',
      details: [
        'Worked independently on client user interfaces and design systems.',
        'Built a strong foundation in visual structure, typography, and user experience design.',
        'Formed the aesthetic design discipline now applied to XTICH and Versity.',
      ],
      link: null,
      linkLabel: null,
      isParentVenture: false,
    },
    {
      num: '03',
      title: 'TRADING',
      subtitle: 'Equities & Forex Prop Trading',
      category: 'Financial Markets / Independent Trading',
      timeline: '2021 — Present',
      summary:
        'Independent trading in Indian equities since 2024, now actively trading forex through prop capital firms like Funding Pips.',
      details: [
        'Studying technical analysis, price action, and financial markets since 2021.',
        'Trading Indian equities and prop firm forex accounts with strict risk management.',
        'Applying quantitative discipline and emotional control to business decisions.',
      ],
      link: null,
      linkLabel: null,
      isParentVenture: false,
    },
  ];

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-editorial-line">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12 border-b border-editorial-line pb-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-editorial-subtle uppercase tracking-widest">
          <span className="text-editorial-black font-semibold">02</span>
          <span>/</span>
          <span>SELECTED WORK & INITIATIVES</span>
        </div>
        <span className="text-xs font-mono text-editorial-subtle uppercase hidden sm:inline">
          03 CORE DISCIPLINES
        </span>
      </div>

      {/* Editorial Index Table Rows */}
      <div className="divide-y divide-editorial-line">
        {works.map((item, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={item.num}
              className={`group transition-colors duration-300 ${
                isExpanded ? 'bg-bg-card/40' : 'hover:bg-bg-card/20'
              }`}
            >
              {/* Main Row Header Button */}
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="w-full py-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-baseline space-x-6 sm:space-x-10">
                  <span className="text-sm font-mono text-editorial-subtle font-medium">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-sans font-bold text-editorial-black tracking-tight group-hover:text-editorial-dark transition-colors">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <span className="text-xs font-mono text-editorial-muted block mt-0.5">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end space-x-6 w-full md:w-auto">
                  <div className="text-left md:text-right">
                    <span className="block text-xs font-sans font-medium text-editorial-black">
                      {item.category}
                    </span>
                    <span className="block text-[11px] font-mono text-editorial-subtle">
                      {item.timeline}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-editorial-line flex items-center justify-center text-editorial-black group-hover:border-editorial-black transition-colors">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </button>

              {/* Expandable Editorial Drawer */}
              {isExpanded && (
                <div className="pb-8 pt-2 px-4 sm:px-12 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-editorial-line/60 pt-6">
                    <div className="md:col-span-7 space-y-4">
                      <p className="text-base text-editorial-dark font-sans leading-relaxed font-medium">
                        {item.summary}
                      </p>

                      {item.isParentVenture && (
                        <div className="p-4 bg-bg border-l-2 border-editorial-black rounded-r text-xs space-y-2">
                          <div className="flex items-center space-x-1.5 font-mono text-editorial-black font-bold uppercase">
                            <CornerDownRight className="w-3.5 h-3.5" />
                            <span>VERSITY (FLAGSHIP SERIES UNDER XTICH)</span>
                          </div>
                          <p className="text-editorial-muted font-sans leading-relaxed">
                            Versity is the flagship campus-wear series created and owned by XTICH. It focuses on replacing outdated school & PU college uniforms across India with minimal, comfortable apparel.
                          </p>
                        </div>
                      )}

                      <ul className="space-y-2 pt-2">
                        {item.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="text-xs sm:text-sm text-editorial-muted font-sans flex items-start space-x-2"
                          >
                            <span className="text-editorial-black font-mono mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-5 flex flex-col justify-between items-start md:items-end space-y-4">
                      <div className="text-xs font-mono text-editorial-subtle space-y-1">
                        <div>DOMAIN: <span className="text-editorial-black font-semibold">{item.title}</span></div>
                        <div>STATUS: <span className="text-editorial-black">ACTIVE</span></div>
                      </div>

                      {item.link && item.linkLabel && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold px-4 py-2 rounded border border-editorial-black bg-editorial-black text-bg hover:bg-transparent hover:text-editorial-black transition-colors"
                        >
                          <span>VISIT {item.linkLabel.toUpperCase()}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
