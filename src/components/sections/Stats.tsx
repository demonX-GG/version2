import React from 'react';
import { CctvIcon, ClockIcon, LayoutGridIcon, SignalHighIcon } from 'lucide-react';
import { Counter } from '../ui/Counter';
import { Reveal } from '../ui/Reveal';

const stats = [
{ icon: CctvIcon, value: 500, suffix: '+', decimals: 0, label: 'Cameras managed', note: 'Across sites and devices' },
{ icon: SignalHighIcon, value: 99.9, suffix: '%', decimals: 1, label: 'System availability', note: 'Rolling 12-month average' },
{ icon: ClockIcon, value: 24, suffix: '/7', decimals: 0, label: 'Monitoring', note: 'Continuous health checks' },
{ icon: LayoutGridIcon, value: null, suffix: '', decimals: 0, label: 'Centralized security', note: 'One console, every site' }];


export function Stats() {
  return (
    <section className="relative border-y border-white/[0.06] bg-ink-900/50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) =>
          <Reveal key={stat.label} delay={i * 0.08}>
              <div className="h-full bg-ink-950/80 px-6 py-8 transition-colors duration-300 hover:bg-ink-900">
                <stat.icon className="h-5 w-5 text-electric-400" />
                <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white">
                  {stat.value !== null ?
                <>
                      <Counter value={stat.value} decimals={stat.decimals} />
                      <span className="text-electric-400">{stat.suffix}</span>
                    </> :

                <span className="text-electric-400">100%</span>
                }
                </p>
                <p className="mt-2 font-display text-sm font-semibold text-slate-200">{stat.label}</p>
                <p className="mt-1 text-[13px] text-slate-500">{stat.note}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}