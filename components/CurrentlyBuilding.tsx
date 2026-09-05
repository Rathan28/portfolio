'use client';

import { Layers, CornerDownRight } from 'lucide-react';

export function CurrentlyBuilding() {
  return (
    <section id="building" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-editorial-line">
      {/* Section Tag */}
      <div className="flex items-center space-x-2 text-xs font-mono text-editorial-subtle uppercase tracking-widest mb-12">
        <span className="text-editorial-black font-semibold">01</span>
        <span>/</span>
        <span>CURRENTLY BUILDING</span>
      </div>

      {/* Main Brand Hierarchy Container */}
      <div className="space-y-12">
        {/* DOMINANT PARENT LEVEL: XTICH */}
        <div className="p-8 sm:p-12 bg-bg-card border border-editorial-line rounded-lg space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-editorial-line pb-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-editorial-black text-bg text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>MAIN BRAND / PARENT COMPANY</span>
            </div>
            <span className="text-xs font-mono text-editorial-subtle uppercase">
              EST. APRIL 2023 • KARNATAKA, IN
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-editorial-black">
                XTICH
              </h2>
              <p className="text-xl sm:text-2xl font-sans text-editorial-dark font-medium leading-snug">
                Building modern apparel and workwear for India.
              </p>
              <p className="text-base text-editorial-muted font-sans leading-relaxed">
                XTICH is the primary brand I am building. Founded in April 2023 as a direct-to-consumer clothing initiative, XTICH focuses on modern garment design, institutional apparel supply chains, and structured brand building.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-bg border border-editorial-line rounded space-y-4">
              <div className="text-xs font-mono text-editorial-subtle uppercase space-y-1">
                <div>PRIMARY DOMAIN: <a href="https://xtich.in" target="_blank" rel="noopener noreferrer" className="text-editorial-black font-semibold underline">xtich.in ↗</a></div>
                <div>BUSINESS MODEL: <span className="text-editorial-black">D2C & Institutional B2B</span></div>
                <div>FOUNDER: <span className="text-editorial-black">Rathan P</span></div>
              </div>
            </div>
          </div>

          {/* NESTED SUB-LEVEL: VERSITY */}
          <div className="pt-6">
            <div className="p-6 sm:p-8 bg-bg border-l-4 border-editorial-black border border-editorial-line rounded-r-lg space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono text-editorial-subtle uppercase tracking-wider">
                <CornerDownRight className="w-4 h-4 text-editorial-black" />
                <span className="text-editorial-black font-bold">FLAGSHIP SERIES</span>
                <span>•</span>
                <span>A SERIES BY XTICH</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-editorial-line pb-4">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-sans font-bold text-editorial-black tracking-tight">
                    VERSITY
                  </h3>
                  <span className="text-xs font-mono text-editorial-muted uppercase tracking-wider block mt-1">
                    A flagship campus-wear series by XTICH
                  </span>
                </div>
                <span className="text-xs font-mono text-editorial-subtle border border-editorial-line px-2.5 py-1 rounded">
                  SCHOOLS & PU COLLEGES
                </span>
              </div>

              <p className="text-base text-editorial-muted font-sans leading-relaxed">
                Versity is XTICH’s flagship campus-wear series — reimagining school and PU college uniforms. It replaces outdated, rigid uniform designs with modern, comfortable, and minimal hoodies, polos, jackets, and track pants tailored for Indian campus environments.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-editorial-subtle pt-2">
                <div>
                  <span className="block font-semibold text-editorial-black">SERIES TYPE</span>
                  <span>Campus Apparel</span>
                </div>
                <div>
                  <span className="block font-semibold text-editorial-black">PARENT BRAND</span>
                  <span>XTICH</span>
                </div>
                <div>
                  <span className="block font-semibold text-editorial-black">MARKET</span>
                  <span>Indian Educational Institutions</span>
                </div>
                <div>
                  <span className="block font-semibold text-editorial-black">STATUS</span>
                  <span>In Active Production</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
