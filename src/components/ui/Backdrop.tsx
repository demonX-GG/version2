import React from 'react';

/** Animated grid + radar sweep + soft glows used behind the hero and final CTA. */
export function Backdrop({ radar = true }: {radar?: boolean;}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid animate-grid-drift opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(46,123,255,0.20),transparent_60%)]" />
      <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-electric-600/20 blur-[130px]" />
      <div className="absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-cyanx-500/12 blur-[140px]" />
      {radar &&
      <div className="absolute left-1/2 top-1/2 hidden h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 lg:block">
          <div className="absolute inset-0 rounded-full border border-electric-400/10" />
          <div className="absolute inset-[12%] rounded-full border border-electric-400/10" />
          <div className="absolute inset-[26%] rounded-full border border-electric-400/[0.08]" />
          <div className="absolute inset-[40%] rounded-full border border-electric-400/[0.06]" />
          <div className="absolute inset-0 animate-radar rounded-full bg-[conic-gradient(from_0deg,rgba(56,211,238,0.14),transparent_28%)]" />
        </div>
      }
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </div>);

}