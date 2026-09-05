'use client';

import { SocialLinks } from './SocialLinks';
import { ArrowUpRight, Mail } from 'lucide-react';

export function Contact() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'rathan2800@gmail.com';

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-editorial-line">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16 border-b border-editorial-line pb-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-editorial-subtle uppercase tracking-widest">
          <span className="text-editorial-black font-semibold">09</span>
          <span>/</span>
          <span>INITIATE CONTACT</span>
        </div>
        <span className="text-xs font-mono text-editorial-subtle uppercase">
          OPEN FOR COLLABORATION
        </span>
      </div>

      {/* Main Editorial CTA Block */}
      <div className="space-y-12 mb-16">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tighter text-editorial-black leading-[1.08]">
            Have something <br />
            worth building?
          </h2>
          <p className="text-lg sm:text-2xl font-sans text-editorial-dark font-normal max-w-2xl leading-relaxed">
            Whether it's a brand, collaboration, apparel product, or simply an interesting business idea — I'd like to hear it.
          </p>
        </div>

        {/* Email CTA Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center space-x-3 text-base sm:text-lg font-sans font-bold px-8 py-4 rounded-full bg-editorial-black text-bg hover:bg-editorial-dark transition-all duration-300 shadow-md group"
          >
            <Mail className="w-5 h-5" />
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <div className="text-xs font-mono text-editorial-subtle">
            DIRECT EMAIL: <span className="text-editorial-black font-medium">{contactEmail}</span>
          </div>
        </div>
      </div>

      {/* Social Links Block */}
      <div className="pt-8 border-t border-editorial-line">
        <div className="text-xs font-mono text-editorial-subtle uppercase tracking-widest mb-6">
          CONNECT ACROSS PLATFORMS
        </div>
        <SocialLinks variant="full" />
      </div>
    </section>
  );
}
