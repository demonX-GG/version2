import React from 'react';
import { ArrowRightIcon, MonitorPlayIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid animate-grid-drift opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(46,123,255,0.28),transparent_65%)]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Take Control of Your
            <br className="hidden sm:block" /> Security Infrastructure.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-lg">
            Monitor smarter. Respond faster. Manage every camera from one secure platform.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#solution"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-electric-500 px-7 py-3.5 font-display text-[15px] font-semibold text-white shadow-glow transition-all duration-300 hover:bg-electric-400">
              
              Explore Secure Eye
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#monitoring"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 font-display text-[15px] font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:border-electric-400/40 hover:bg-white/[0.08] hover:text-white">
              
              <MonitorPlayIcon className="h-4 w-4" />
              View Dashboard
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}