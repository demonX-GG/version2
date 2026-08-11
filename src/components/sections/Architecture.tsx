import React from 'react';
import {
  BarChart3Icon,
  BellRingIcon,
  CctvIcon,
  DatabaseIcon,
  HardDriveIcon,
  MapPinIcon,
  MonitorPlayIcon,
  RouterIcon,
  UsersIcon,
  WrenchIcon } from
'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Logo } from '../ui/Logo';

const modules = [
{ icon: CctvIcon, label: 'Camera Management' },
{ icon: MonitorPlayIcon, label: 'Live Monitoring' },
{ icon: HardDriveIcon, label: 'Recording Management' },
{ icon: BellRingIcon, label: 'Alert Management' },
{ icon: WrenchIcon, label: 'Maintenance' },
{ icon: BarChart3Icon, label: 'Reports' }];


const sources = [
{ icon: CctvIcon, label: 'CCTV Cameras' },
{ icon: RouterIcon, label: 'DVR / NVR' },
{ icon: MapPinIcon, label: 'Locations' },
{ icon: UsersIcon, label: 'Users' }];


export function Architecture() {
  return (
    <Section id="architecture" tone="raised">
      <SectionHeading
        eyebrow="System architecture"
        title="A Clean, Layered Platform."
        description="Users work through one interface. Secure Eye's modules handle the domain logic, and everything resolves to a single, consistent database." />
      

      <Reveal delay={0.1}>
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-ink-950/60 p-6 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-30" aria-hidden />

          <div className="relative space-y-5">
            {/* Layer 1 — users */}
            <Layer label="Access layer">
              <div className="flex flex-wrap justify-center gap-2.5">
                {['Administrator', 'Security Manager', 'Operator', 'Technician'].map((role) =>
                <span
                  key={role}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-2.5 text-[13px] text-slate-200 backdrop-blur">
                  
                    <UsersIcon className="h-3.5 w-3.5 text-electric-300" />
                    {role}
                  </span>
                )}
              </div>
            </Layer>

            <Connector />

            {/* Layer 2 — platform */}
            <div className="flex justify-center">
              <div className="flex items-center gap-4 rounded-2xl border border-electric-400/30 bg-ink-900/80 px-6 py-4 shadow-glow">
                <Logo className="h-9 w-9" />
                <div>
                  <p className="font-display text-sm font-bold text-white">Secure Eye Platform</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Application & security layer</p>
                </div>
              </div>
            </div>

            <Connector />

            {/* Layer 3 — modules */}
            <Layer label="Module layer">
              <div className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
                {modules.map((m) =>
                <div
                  key={m.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center transition-colors hover:border-electric-400/30 hover:bg-white/[0.06]">
                  
                    <m.icon className="h-5 w-5 text-electric-300" />
                    <span className="text-[12px] leading-tight text-slate-300">{m.label}</span>
                  </div>
                )}
              </div>
            </Layer>

            <Connector />

            {/* Layer 4 — database */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 rounded-2xl border border-cyanx-400/25 bg-cyanx-500/[0.06] px-6 py-4">
                <DatabaseIcon className="h-5 w-5 text-cyanx-300" />
                <div>
                  <p className="font-display text-sm font-bold text-white">Central Database</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Single source of truth</p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Connected infrastructure
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                {sources.map((s) =>
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-ink-900/70 px-3.5 py-2 font-mono text-[11px] text-slate-400">
                  
                    <s.icon className="h-3.5 w-3.5 text-cyanx-300" />
                    {s.label}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>);

}

function Layer({ label, children }: {label: string;children: React.ReactNode;}) {
  return (
    <div>
      <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">{label}</p>
      {children}
    </div>);

}

function Connector() {
  return (
    <div className="flex justify-center" aria-hidden>
      <svg width="2" height="36" viewBox="0 0 2 36" className="overflow-visible">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="36"
          stroke="rgba(56,211,238,0.5)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          className="animate-dash-flow" />
        
      </svg>
    </div>);

}