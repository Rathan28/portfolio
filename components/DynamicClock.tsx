'use client';

import { useEffect, useState } from 'react';
import { getISTTime } from '@/lib/utils';

interface DynamicClockProps {
  showLocation?: boolean;
  className?: string;
}

export function DynamicClock({ showLocation = true, className = '' }: DynamicClockProps) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Initial set
    setTime(getISTTime());

    const interval = setInterval(() => {
      setTime(getISTTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Avoid hydration mismatch by rendering placeholder until mounted
  if (!time) {
    return (
      <span className={`inline-flex items-center text-xs tracking-wider font-mono text-editorial-muted ${className}`}>
        {showLocation && <span className="mr-2 text-editorial-subtle">Davanagere IN</span>}
        <span className="opacity-0">00:00:00</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center text-xs tracking-wider font-mono text-editorial-muted ${className}`}>
      {showLocation && <span className="mr-2 text-editorial-subtle font-sans">Davanagere IN</span>}
      <span className="tabular-nums font-semibold text-editorial-black">{time} IST</span>
    </span>
  );
}
