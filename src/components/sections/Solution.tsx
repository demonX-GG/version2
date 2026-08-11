import React from 'react';
import {
  BarChart3Icon,
  BellRingIcon,
  CctvIcon,
  DatabaseIcon,
  HardDriveIcon,
  MonitorPlayIcon,
  RouterIcon,
  UsersIcon,
  WrenchIcon } from
'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Logo } from '../ui/Logo';

const capabilities = [
{ icon: CctvIcon, title: 'Centralized camera management', body: 'Every camera, model, IP and location in one authoritative inventory.' },
{ icon: MonitorPlayIcon, title: 'Real-time monitoring', body: 'Live wall with health checks and instant online/offline detection.' },
{ icon: HardDriveIcon, title: 'Recording management', body: 'Schedules, retention, storage and backup state in a single view.' },
{ icon: WrenchIcon, title: 'Maintenance tracking', body: 'Preventive schedules, tickets, technicians, parts and costs.' },
{ icon: BellRingIcon, title: 'Alert management', body: 'Severity-graded events with acknowledgement and escalation trails.' },
{ icon: UsersIcon, title: 'User access control', body: 'Role-based permissions down to sites, cameras and actions.' },
{ icon: BarChart3Icon, title: 'Reporting & analytics', body: 'Uptime, incidents, storage and maintenance reporting on demand.' },
{ icon: DatabaseIcon, title: 'Unified data model', body: 'One structured database behind every module and every report.' }];


const edgeNodes = [
{ icon: CctvIcon, label: 'Dome cameras' },
{ icon: CctvIcon, label: 'PTZ cameras' },
{ icon: RouterIcon, label: 'DVR / NVR' },
{ icon: CctvIcon, label: 'Thermal units' }];


export function Solution() {
  return (
    <Section id="solution" tone="raised">
      <SectionHeading
        eyebrow="The solution"
        title="One Platform. Complete Surveillance Control."
        description="Secure Eye sits above your existing hardware. Cameras, recorders and sites feed into one platform where every team works from the same live picture." />
      

      {/* Hub visual */}
      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-ink-950/60 p-6 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-40" aria-hidden />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-500/15 blur-3xl" aria-hidden />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <ul className="space-y-3">
              {edgeNodes.slice(0, 2).map((node) =>
              <EdgeNode key={node.label} icon={node.icon} label={node.label} align="left" />
              )}
            </ul>

            <div className="flex flex-col items-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-electric-400/30 bg-ink-900/90 shadow-glow">
                <div className="absolute inset-0 rounded-3xl bg-electric-500/10 blur-xl" aria-hidden />
                <Logo className="relative h-14 w-14" />
              </div>
              <p className="mt-4 font-display text-sm font-bold text-white">Secure Eye Platform</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Centralized control plane</p>
            </div>

            <ul className="space-y-3">
              {edgeNodes.slice(2).map((node) =>
              <EdgeNode key={node.label} icon={node.icon} label={node.label} align="right" />
              )}
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((cap, i) =>
        <Reveal key={cap.title} delay={i % 4 * 0.06}>
            <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/30 hover:shadow-glow-soft">
              <cap.icon className="h-5 w-5 text-electric-400 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-4 font-display text-[15px] font-semibold text-white">{cap.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{cap.body}</p>
            </article>
          </Reveal>
        )}
      </div>
    </Section>);

}

function EdgeNode({
  icon: Icon,
  label,
  align




}: {icon: React.ComponentType<{className?: string;}>;label: string;align: 'left' | 'right';}) {
  return (
    <li
      className={`flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur ${
      align === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''}`
      }>
      
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300">
        <Icon className="h-4 w-4" />
      </span>
      <span className="flex-1 text-[13px] text-slate-300">{label}</span>
      <span className="h-1.5 w-1.5 rounded-full bg-cyanx-400/70" />
    </li>);

}