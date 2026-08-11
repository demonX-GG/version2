import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangleIcon, BellRingIcon, InfoIcon, ShieldAlertIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { alerts, timeline } from '../../data/alerts';
import type { AlertSeverity } from '../../types/surveillance';

const SEVERITY: Record<AlertSeverity, {label: string;icon: React.ComponentType<{className?: string;}>;ring: string;text: string;bg: string;}> = {
  critical: { label: 'Critical', icon: ShieldAlertIcon, ring: 'border-signal-crit/30', text: 'text-signal-crit', bg: 'bg-signal-crit/10' },
  warning: { label: 'Warning', icon: AlertTriangleIcon, ring: 'border-signal-warn/30', text: 'text-signal-warn', bg: 'bg-signal-warn/10' },
  info: { label: 'Information', icon: InfoIcon, ring: 'border-electric-400/30', text: 'text-electric-300', bg: 'bg-electric-500/10' }
};

const TONE: Record<'critical' | 'warning' | 'info', string> = {
  critical: 'bg-signal-crit',
  warning: 'bg-signal-warn',
  info: 'bg-electric-400'
};

export function Alerts() {
  return (
    <Section id="alerts">
      <SectionHeading
        eyebrow="Alert management"
        title="Know First. Respond Faster."
        description="Secure Eye grades every event by severity, routes it to the right responder and keeps a complete acknowledgement trail." />
      

      <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        {/* Alert queue */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 shadow-panel backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
            <p className="flex items-center gap-2 font-display text-sm font-semibold text-white">
              <BellRingIcon className="h-4 w-4 text-electric-400" />
              Active alert queue
            </p>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider">
              <span className="text-signal-crit">2 critical</span>
              <span className="text-signal-warn">2 warning</span>
              <span className="text-electric-300">1 info</span>
            </div>
          </div>

          <ul className="divide-y divide-white/[0.06]">
            {alerts.map((alert, i) => {
              const tone = SEVERITY[alert.severity];
              return (
                <motion.li
                  key={alert.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="group flex gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03]">
                  
                  <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${tone.ring} ${tone.bg} ${tone.text}`}>
                    <tone.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-[14.5px] font-semibold text-white">{alert.title}</h3>
                      <span className={`rounded-full border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider ${tone.ring} ${tone.bg} ${tone.text}`}>
                        {tone.label}
                      </span>
                      <span className="ml-auto font-mono text-[10.5px] text-slate-500">{alert.time}</span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-slate-500">{alert.id} · {alert.source}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{alert.detail}</p>
                  </div>
                </motion.li>);

            })}
          </ul>
        </div>

        {/* Timeline */}
        <Reveal delay={0.12}>
          <div className="h-full rounded-3xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl sm:p-6">
            <p className="font-display text-sm font-semibold text-white">Activity timeline</p>
            <p className="mt-1 font-mono text-[11px] text-slate-500">Today · 11 Aug 2026</p>

            <ol className="relative mt-6 space-y-6 border-l border-white/10 pl-5">
              {timeline.map((event) =>
              <li key={event.time} className="relative">
                  <span
                  className={`absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-ink-950 ${TONE[event.tone]}`} />
                
                  <p className="font-mono text-[11px] text-slate-500">{event.time}</p>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-slate-300">{event.label}</p>
                </li>
              )}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>);

}