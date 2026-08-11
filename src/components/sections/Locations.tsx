import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BuildingIcon, CctvIcon, MapPinIcon, RouterIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { sites } from '../../data/locations';

export function Locations() {
  const [activeId, setActiveId] = useState(sites[0].id);
  const active = sites.find((s) => s.id === activeId) ?? sites[0];
  const totalCameras = active.zones.reduce((sum, z) => sum + z.cameras, 0);
  const totalOnline = active.zones.reduce((sum, z) => sum + z.online, 0);

  return (
    <Section id="locations" tone="raised">
      <SectionHeading
        eyebrow="Locations"
        title="Cameras Organized the Way Your Sites Actually Work."
        description="Group devices by site, building and zone. Drill from an entire campus down to a single corridor without losing context." />
      

      <Reveal delay={0.1}>
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 shadow-panel backdrop-blur-xl">
          <div className="grid lg:grid-cols-[300px_minmax(0,1fr)]">
            {/* Tree */}
            <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
              <p className="px-2 font-mono text-[10px] uppercase tracking-wider text-slate-500">Site hierarchy</p>
              <ul className="mt-3 space-y-1">
                {sites.map((site) => {
                  const isActive = site.id === active.id;
                  return (
                    <li key={site.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(site.id)}
                        aria-current={isActive}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors ${
                        isActive ? 'bg-electric-500/12 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`
                        }>
                        
                        <BuildingIcon className={`h-4 w-4 ${isActive ? 'text-electric-300' : 'text-slate-500'}`} />
                        <span className="flex-1 truncate text-[13.5px] font-medium">{site.name}</span>
                        <span className="font-mono text-[10.5px] text-slate-500">{site.zones.length}</span>
                      </button>
                      {isActive &&
                      <ul className="ml-[22px] mt-1 space-y-0.5 border-l border-white/10 pl-3">
                          {site.zones.map((zone) =>
                        <li key={zone.name} className="flex items-center gap-2 py-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-cyanx-400/70" />
                              <span className="flex-1 truncate text-[12.5px] text-slate-400">{zone.name}</span>
                              <span className="font-mono text-[10px] text-slate-600">{zone.cameras}</span>
                            </li>
                        )}
                        </ul>
                      }
                    </li>);

                })}
              </ul>
            </div>

            {/* Map / zone panel */}
            <div className="relative p-5 sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-30" aria-hidden />
              <div className="pointer-events-none absolute right-10 top-10 h-56 w-56 rounded-full bg-electric-500/10 blur-3xl" aria-hidden />

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{active.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
                    <MapPinIcon className="h-3.5 w-3.5" /> {active.address}
                  </p>
                </div>
                <div className="flex gap-3">
                  <MiniStat label="Zones" value={String(active.zones.length)} />
                  <MiniStat label="Cameras" value={String(totalCameras)} />
                  <MiniStat label="Online" value={`${totalOnline}/${totalCameras}`} tone="text-signal-online" />
                </div>
              </div>

              <motion.ul
                key={active.id}
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}
                className="relative mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                
                {active.zones.map((zone) => {
                  const healthy = zone.online === zone.cameras;
                  return (
                    <motion.li
                      key={zone.name}
                      variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-electric-400/30 hover:bg-white/[0.06]">
                      
                      <div className="flex items-start justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300">
                          <CctvIcon className="h-4 w-4" />
                        </span>
                        <span
                          className={`h-2 w-2 rounded-full ${healthy ? 'bg-signal-online animate-status-pulse' : 'bg-signal-warn'}`}
                          aria-hidden />
                        
                      </div>
                      <p className="mt-3.5 font-display text-[14.5px] font-semibold text-white">{zone.name}</p>
                      <p className="mt-1 font-mono text-[10.5px] text-slate-500">
                        {zone.online}/{zone.cameras} online · {zone.device}
                      </p>
                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${healthy ? 'bg-signal-online' : 'bg-signal-warn'}`}
                          style={{ width: `${zone.online / zone.cameras * 100}%` }} />
                        
                      </div>
                    </motion.li>);

                })}
              </motion.ul>

              <p className="relative mt-5 flex items-center gap-2 font-mono text-[10.5px] text-slate-500">
                <RouterIcon className="h-3.5 w-3.5 text-electric-300" />
                Recorders bound to this site are health-checked every 30 seconds.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>);

}

function MiniStat({ label, value, tone = 'text-white' }: {label: string;value: string;tone?: string;}) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-950/50 px-3.5 py-2">
      <p className="font-mono text-[9.5px] uppercase tracking-wider text-slate-500">{label}</p>
      <p className={`mt-0.5 font-display text-base font-bold ${tone}`}>{value}</p>
    </div>);

}