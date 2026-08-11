import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { AlertOctagonIcon, BoxesIcon, CalendarClockIcon, UserCogIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { maintenanceCost, parts, tickets } from '../../data/maintenance';

const STATE_TONE: Record<string, string> = {
  'In progress': 'text-electric-300 bg-electric-500/10 border-electric-400/25',
  'Awaiting part': 'text-signal-warn bg-signal-warn/10 border-signal-warn/25',
  Scheduled: 'text-slate-300 bg-white/[0.06] border-white/15',
  Resolved: 'text-signal-online bg-signal-online/10 border-signal-online/25'
};

const kpis = [
{ icon: CalendarClockIcon, label: 'Upcoming maintenance', value: '7', note: 'Next 14 days' },
{ icon: AlertOctagonIcon, label: 'Faulty cameras', value: '3', note: '2 critical · 1 minor' },
{ icon: UserCogIcon, label: 'Technicians assigned', value: '4', note: 'Across 3 sites' },
{ icon: BoxesIcon, label: 'Maintenance cost (MTD)', value: '$635', note: '27% below budget' }];


export function Maintenance() {
  return (
    <Section id="maintenance">
      <SectionHeading
        eyebrow="Maintenance management"
        title="Preventive by Default, Not by Memory."
        description="Schedule servicing, assign technicians, track parts and keep a full repair history with costs — so downtime becomes an exception you can measure." />
      

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, i) =>
        <Reveal key={kpi.label} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur">
              <kpi.icon className="h-5 w-5 text-electric-400" />
              <p className="mt-4 font-display text-3xl font-bold text-white">{kpi.value}</p>
              <p className="mt-1 text-[13px] font-medium text-slate-300">{kpi.label}</p>
              <p className="mt-0.5 font-mono text-[10.5px] text-slate-500">{kpi.note}</p>
            </div>
          </Reveal>
        )}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 shadow-panel backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
              <p className="font-display text-sm font-semibold text-white">Work orders</p>
              <span className="font-mono text-[11px] text-slate-500">4 open · 1 resolved this week</span>
            </div>
            <div className="scroll-slim overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <caption className="sr-only">Maintenance work orders</caption>
                <thead>
                  <tr className="border-b border-white/10 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    <th scope="col" className="px-5 py-3 font-medium">Ticket</th>
                    <th scope="col" className="px-5 py-3 font-medium">Issue</th>
                    <th scope="col" className="px-5 py-3 font-medium">Technician</th>
                    <th scope="col" className="px-5 py-3 font-medium">Due</th>
                    <th scope="col" className="px-5 py-3 font-medium">Cost</th>
                    <th scope="col" className="px-5 py-3 font-medium">State</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t) =>
                  <tr key={t.id} className="border-b border-white/[0.06] last:border-0 hover:bg-white/[0.03]">
                      <td className="px-5 py-3.5">
                        <p className="font-mono text-[12px] text-electric-300">{t.id}</p>
                        <p className="text-[12px] text-slate-400">{t.camera}</p>
                      </td>
                      <td className="px-5 py-3.5 text-[12.5px] text-slate-300">{t.issue}</td>
                      <td className="whitespace-nowrap px-5 py-3.5 text-[12.5px] text-slate-400">{t.technician}</td>
                      <td className="whitespace-nowrap px-5 py-3.5 font-mono text-[12px] text-slate-400">{t.due}</td>
                      <td className="whitespace-nowrap px-5 py-3.5 font-mono text-[12px] text-slate-400">{t.cost}</td>
                      <td className="whitespace-nowrap px-5 py-3.5">
                        <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${STATE_TONE[t.state]}`}>
                          {t.state}
                        </span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
              <p className="font-display text-sm font-semibold text-white">Maintenance cost trend</p>
              <p className="font-mono text-[11px] text-slate-500">Last 6 months · USD</p>
              <div className="mt-4 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={maintenanceCost} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,178,255,0.08)" vertical={false} />
                    <XAxis dataKey="month" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip
                      cursor={{ fill: 'rgba(46,123,255,0.08)' }}
                      contentStyle={{
                        background: '#080d1a',
                        border: '1px solid rgba(148,178,255,0.15)',
                        borderRadius: 12,
                        fontSize: 12,
                        color: '#e6ecf7'
                      }} />
                    
                    <Bar dataKey="cost" fill="#2e7bff" radius={[4, 4, 0, 0]} maxBarSize={26} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
              <p className="font-display text-sm font-semibold text-white">Replacement parts</p>
              <ul className="mt-4 space-y-3">
                {parts.map((part) => {
                  const low = part.stock <= part.reorder;
                  return (
                    <li key={part.name} className="flex items-center justify-between gap-3">
                      <span className="truncate text-[12.5px] text-slate-300">{part.name}</span>
                      <span
                        className={`shrink-0 rounded-md px-2 py-0.5 font-mono text-[10.5px] ${
                        low ? 'bg-signal-warn/10 text-signal-warn' : 'bg-white/[0.06] text-slate-400'}`
                        }>
                        
                        {part.stock} in stock
                      </span>
                    </li>);

                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>);

}