'use client';

import { ArrowUpRight } from 'lucide-react';

interface SocialLinksProps {
  variant?: 'minimal' | 'full';
  className?: string;
}

export function SocialLinks({ variant = 'full', className = '' }: SocialLinksProps) {
  const socials = [
    {
      name: 'INSTAGRAM',
      handle: '@rathannx',
      url: 'https://www.instagram.com/rathannx/',
    },
    {
      name: 'LINKEDIN',
      handle: '/rathan-p',
      url: 'https://www.linkedin.com/in/rathan-p',
    },
  ];

  if (variant === 'minimal') {
    return (
      <div className={`flex flex-wrap gap-4 text-xs font-mono ${className}`}>
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-editorial-muted hover:text-editorial-black transition-colors editorial-link"
          >
            {s.name}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 bg-bg-card border border-editorial-line rounded-lg hover:border-editorial-black transition-all duration-300 flex items-center justify-between"
        >
          <div>
            <span className="block text-[10px] font-mono text-editorial-subtle uppercase tracking-wider">
              {s.name}
            </span>
            <span className="text-sm font-sans font-semibold text-editorial-black">
              {s.handle}
            </span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-editorial-subtle group-hover:text-editorial-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ))}
    </div>
  );
}
