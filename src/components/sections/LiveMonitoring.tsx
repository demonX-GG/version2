import React, { useMemo, useState } from 'react';
import { GridIcon, LayoutListIcon, MaximizeIcon, SearchIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { CameraTile } from '../ui/CameraTile';
import { feeds } from '../../data/feeds';

const filters = ['All feeds', 'Online', 'Offline', 'Recording'] as const;
type Filter = (typeof filters)[number];

export function LiveMonitoring() {
  const [filter, setFilter] = useState<Filter>('All feeds');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    return feeds.filter((f) => {
      const matchFilter =
      filter === 'All feeds' ||
      filter === 'Online' && f.status === 'online' ||
      filter === 'Offline' && f.status !== 'online' ||
      filter === 'Recording' && f.recording;
      const q = query.trim().toLowerCase();
      const matchQuery = !q || f.name.toLowerCase().includes(q) || f.location.toLowerCase().includes(q) || f.id.toLowerCase().includes(q);
      return matchFilter && matchQuery;
    });
  }, [filter, query]);

  const onlineCount = feeds.filter((f) => f.status === 'online').length;

  return (
    <Section id="monitoring">
      <SectionHeading
        eyebrow="Live monitoring"
        title="A Command Centre Built for Real Operations."
        description="Watch every critical zone on one wall. Feed health, recording state and timestamps stay visible at all times, so operators see a problem the moment it happens." />
      

      <Reveal delay={0.1}>
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 shadow-panel backdrop-blur-xl">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-3.5 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-signal-online animate-status-pulse" />
                Live wall
              </span>
              <span className="font-mono text-[11px] text-slate-500">
                {onlineCount}/{feeds.length} streams healthy · 18:42:07
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="relative">
                <span className="sr-only">Search cameras</span>
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search camera or location"
                  className="w-full rounded-lg border border-white/10 bg-ink-950/80 py-2 pl-9 pr-3 text-[13px] text-slate-200 placeholder:text-slate-600 focus:border-electric-400/50 focus:outline-none focus:ring-1 focus:ring-electric-400/40 sm:w-60" />
                
              </label>

              <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-ink-950/60 p-1">
                {filters.map((f) =>
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-md px-2.5 py-1.5 text-[12px] font-medium transition-colors ${
                  filter === f ? 'bg-electric-500/90 text-white' : 'text-slate-400 hover:text-white'}`
                  }>
                  
                    {f}
                  </button>
                )}
              </div>

              <div className="hidden items-center gap-1 text-slate-500 lg:flex">
                <span className="rounded-md border border-white/10 bg-ink-950/60 p-1.5 text-electric-300">
                  <GridIcon className="h-3.5 w-3.5" />
                </span>
                <span className="rounded-md border border-transparent p-1.5">
                  <LayoutListIcon className="h-3.5 w-3.5" />
                </span>
                <span className="rounded-md border border-transparent p-1.5">
                  <MaximizeIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Wall */}
          <div className="p-3 sm:p-5">
            {visible.length > 0 ?
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {visible.map((feed) =>
              <CameraTile key={feed.id} feed={feed} />
              )}
              </div> :

            <div className="flex flex-col items-center justify-center gap-2 py-20 text-center">
                <p className="font-display text-sm font-semibold text-white">No cameras match this view</p>
                <p className="text-[13px] text-slate-500">Adjust the filter or clear your search to see all feeds.</p>
              </div>
            }
          </div>

          {/* Status strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[11px] text-slate-500">
            <span className="text-signal-online">● {onlineCount} online</span>
            <span className="text-signal-crit">● 1 offline</span>
            <span className="text-signal-warn">● 1 maintenance</span>
            <span className="ml-auto hidden sm:block">Stream latency 240 ms · NVR-01 / 02 / 04 connected</span>
          </div>
        </div>
      </Reveal>
    </Section>);

}