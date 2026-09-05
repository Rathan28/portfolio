'use client';

import { Quote } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-editorial-line">
      {/* Section Tag */}
      <div className="flex items-center space-x-2 text-xs font-mono text-editorial-subtle uppercase tracking-widest mb-12">
        <span className="text-editorial-black font-semibold">03</span>
        <span>/</span>
        <span>A LITTLE CONTEXT</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Big Editorial Pull Quote */}
        <div className="lg:col-span-5 space-y-6">
          <Quote className="w-8 h-8 text-editorial-subtle/50" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-editorial-black leading-[1.15]">
            "I build things from scratch and figure them out as I go."
          </h2>
          <div className="pt-4 border-t border-editorial-line text-xs font-mono text-editorial-subtle space-y-1 uppercase">
            <div>RATHAN P</div>
            <div>FOUNDER @ XTICH</div>
            <div>KARNATAKA, INDIA</div>
          </div>
        </div>

        {/* Right Column: Editorial Biography Narrative */}
        <div className="lg:col-span-7 space-y-8 text-base sm:text-lg font-sans text-editorial-dark leading-relaxed">
          <p className="font-medium text-editorial-black text-lg sm:text-xl leading-snug">
            I started as a UI designer, freelancing for about a year before getting pulled deeply into financial markets. I’ve studied price action and market structure since 2021, and today I trade Indian equities while trading forex through prop capital firms like Funding Pips.
          </p>

          <p className="text-editorial-muted">
            In 2023, I founded <strong className="text-editorial-black font-semibold">XTICH</strong> (xtich.in), a modern apparel brand. I designed and attempted to launch several initial product lines with real capital investment. Most didn't work out. I ended up making a custom hoodie for myself that never sold a single unit — and that failure taught me far more about supply chains, manufacturing, and pricing than any easy success ever could.
          </p>

          <p className="text-editorial-muted">
            That hard-earned perspective led directly to developing <strong className="text-editorial-black font-semibold">Versity</strong> as XTICH’s flagship campus-wear series. Instead of accepting outdated, uncomfortable uniform standards, Versity re-engineers hoodies, polos, jackets, and track pants specifically for Indian schools and PU colleges.
          </p>

          <p className="text-editorial-muted">
            I made hundreds of cold calls across Davanagere, booked in-person meetings, and closed institutional confirmations. After realizing my true alignment lay in real-world business and brand building, I made the clear decision to drop out of my B.Tech in Computer Science and focus on building XTICH full-time.
          </p>

          <div className="p-6 bg-bg-card border border-editorial-line rounded-lg text-xs font-mono text-editorial-muted space-y-2">
            <span className="block font-bold text-editorial-black uppercase">CURRENT FOCUS</span>
            <p className="text-editorial-black font-sans text-sm font-medium">
              Scaling XTICH manufacturing & sales operations, expanding the Versity campus-wear series, and maintaining disciplined execution in financial markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
