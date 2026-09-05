'use client';

import { DynamicClock } from './DynamicClock';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-editorial-line">
        <div className="space-y-2">
          <span className="font-sans text-lg font-extrabold tracking-tight text-editorial-black block">
            RATHAN P
          </span>
          <span className="text-xs font-mono text-editorial-subtle block">
            Founder @ XTICH — Building modern apparel & campus wear for India.
          </span>
        </div>

        <SocialLinks variant="minimal" />
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-editorial-subtle">
        <div className="flex items-center space-x-3">
          <span>© 2026 Rathan P</span>
          <span>•</span>
          <span>Karnataka, IN</span>
        </div>

        <div>
          <DynamicClock showLocation={true} />
        </div>
      </div>
    </footer>
  );
}
