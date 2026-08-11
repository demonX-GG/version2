import React, { useMemo, useState } from 'react';
import { DownloadIcon, PlusIcon, SlidersHorizontalIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { StatusPill } from '../ui/StatusDot';
import { cameras } from '../../data/cameras';

const filters = ['All', 'Online', 'Offline', 'Maintenance'] as const;
type Filter = (typeof filters)[number];

export function CameraManagement() {
  const [filter, setFilter] = useState<Filter>('All');

  const rows = useMemo(
    () => filter === 'All' ? cameras : cameras.filter((c) => c.status === filter.toLowerCase()),
    [filter]
  );

  const counts = {
    All: cameras.length,
    Online: cameras.filter((c) => c.status === 'online').length,
    Offline: cameras.filter((c) => c.status === 'offline').length,
    Maintenance: cameras.filter((c) => c.status === 'maintenance').length
  };

  return (
    <Section id="cameras" tone="raised">
      <SectionHeading
        eyebrow="Camera management"
        title="Every Device, Fully Documented."
        description="Model, type, IP address, location, installation date and live status for each camera — searchable, filterable and always current."
        align="left" />
      

      <Reveal delay={0.1}>
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 shadow-panel backdrop-blur-xl">
          <div className="flex flex-col gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-3.5 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-ink-950/60 p-1">
              {filters.map((f) =>
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
                filter === f ? 'bg-electric-500/90 text-white' : 'text-slate-400 hover:text-white'}`
                }>
                
                  {f}
                  <span className={`font-mono text-[10px] ${filter === f ? 'text-white/70' : 'text-slate-600'}`}>
                    {counts[f]}
                  </span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-[12.5px] text-slate-400">
                <SlidersHorizontalIcon className="h-3.5 w-3.5" /> Columns
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-[12.5px] text-slate-400">
                <DownloadIcon className="h-3.5 w-3.5" /> Export
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-electric-500 px-3 py-1.5 text-[12.5px] font-semibold text-white">
                <PlusIcon className="h-3.5 w-3.5" /> Add camera
              </span>
            </div>
          </div>

          <div className="scroll-slim overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-left">
              <caption className="sr-only">Camera inventory with model, type, IP address, location, installation date and status</caption>
              <thead>
                <tr className="border-b border-white/10 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  <th scope="col" className="px-5 py-3 font-medium">Camera ID</th>
                  <th scope="col" className="px-5 py-3 font-medium">Model</th>
                  <th scope="col" className="px-5 py-3 font-medium">Type</th>
                  <th scope="col" className="px-5 py-3 font-medium">IP address</th>
                  <th scope="col" className="px-5 py-3 font-medium">Location</th>
                  <th scope="col" className="px-5 py-3 font-medium">Installed</th>
                  <th scope="col" className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((cam) =>
                <tr
                  key={cam.id}
                  className="border-b border-white/[0.06] transition-colors last:border-0 hover:bg-white/[0.03]">
                  
                    <td className="whitespace-nowrap px-5 py-3.5">
                      <span className="font-mono text-[12.5px] text-electric-300">{cam.id}</span>
                      <span className="ml-2 text-[12.5px] text-slate-300">{cam.name}</span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-[12.5px] text-slate-400">{cam.model}</td>
                    <td className="whitespace-nowrap px-5 py-3.5">
                      <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-slate-300">
                        {cam.type}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 font-mono text-[12px] text-slate-400">{cam.ip}</td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-[12.5px] text-slate-400">{cam.location}</td>
                    <td className="whitespace-nowrap px-5 py-3.5 font-mono text-[12px] text-slate-500">{cam.installed}</td>
                    <td className="whitespace-nowrap px-5 py-3.5">
                      <StatusPill status={cam.status} />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[11px] text-slate-500">
            <span>
              Showing {rows.length} of {cameras.length} devices
            </span>
            <span className="hidden sm:block">Last inventory sync · 2 minutes ago</span>
          </div>
        </div>
      </Reveal>
    </Section>);

}