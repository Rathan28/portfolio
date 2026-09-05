'use client';

import { ArrowUpRight, Linkedin } from 'lucide-react';
import { linkedInPosts } from '@/content/linkedin-posts';

export function FromLinkedIn() {
  return (
    <section id="linkedin" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-editorial-line">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12 border-b border-editorial-line pb-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-editorial-subtle uppercase tracking-widest">
          <span className="text-editorial-black font-semibold">06</span>
          <span>/</span>
          <span>FROM LINKEDIN</span>
        </div>
        <a
          href="https://www.linkedin.com/in/rathan-p"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-editorial-black hover:text-editorial-muted underline flex items-center space-x-1"
        >
          <span>/in/rathan-p</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Editorial Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {linkedInPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-6 sm:p-8 bg-bg-card border border-editorial-line rounded-lg hover:border-editorial-black transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-editorial-subtle">
                <span className="flex items-center space-x-1.5 text-editorial-black font-medium">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Rathan P</span>
                </span>
                <span>{post.date}</span>
              </div>

              {post.title && (
                <h4 className="text-base font-sans font-bold text-editorial-black tracking-tight group-hover:text-editorial-dark transition-colors">
                  {post.title}
                </h4>
              )}

              <p className="text-sm font-sans text-editorial-muted leading-relaxed line-clamp-4 group-hover:text-editorial-black transition-colors">
                "{post.content}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-editorial-line/60 flex items-center justify-between text-xs font-mono text-editorial-subtle group-hover:text-editorial-black">
              <span>VIEW ON LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
