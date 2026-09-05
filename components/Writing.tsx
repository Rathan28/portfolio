'use client';

export function Writing() {
  const upcomingTopics = [
    { title: 'Notes on Apparel Manufacturing in India', cat: 'Apparel & Supply Chain' },
    { title: 'Risk Discipline from Forex Prop Trading', cat: 'Financial Markets' },
    { title: 'Why Hard Failures Are the Best Teachers', cat: 'Entrepreneurship' },
    { title: 'Re-engineering Campus Uniforms', cat: 'Brand Building' },
  ];

  return (
    <section id="writing" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-editorial-line">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12 border-b border-editorial-line pb-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-editorial-subtle uppercase tracking-widest">
          <span className="text-editorial-black font-semibold">08</span>
          <span>/</span>
          <span>WRITING & ESSAYS</span>
        </div>
        <span className="text-xs font-mono text-editorial-subtle uppercase">
          PUBLICATION ARCHIVE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Editorial Announcement */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono text-editorial-subtle uppercase tracking-wider block">
            STATUS
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-editorial-black tracking-tight">
            Writing soon.
          </h2>
          <p className="text-base font-sans text-editorial-muted leading-relaxed">
            Essays on business development, manufacturing realities, market psychology, and building XTICH in public.
          </p>
        </div>

        {/* Right Preview Topics Grid */}
        <div className="lg:col-span-7 bg-bg-card border border-editorial-line rounded-lg p-6 sm:p-8 space-y-6">
          <span className="text-xs font-mono text-editorial-subtle uppercase block border-b border-editorial-line pb-3">
            UPCOMING TOPICS
          </span>
          <div className="space-y-4">
            {upcomingTopics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between p-3 rounded hover:bg-bg transition-colors"
              >
                <div>
                  <h4 className="text-sm font-sans font-semibold text-editorial-black">
                    {topic.title}
                  </h4>
                  <span className="text-[11px] font-mono text-editorial-subtle">
                    {topic.cat}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-editorial-subtle border border-editorial-line px-2 py-0.5 rounded uppercase">
                  SOON
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
