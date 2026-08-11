import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis } from
'recharts';
import { ActivityIcon, AlertTriangleIcon, HardDriveIcon, WrenchIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { alertsSeries, statusBreakdown, storageSeries, uptimeSeries } from '../../data/analytics';

const tooltipStyle = {
  background: '#080d1a',
  border: '1px solid rgba(148,178,255,0.15)',
  borderRadius: 12,
  fontSize: 12,
  color: '#e6ecf7'
};

const kpis = [
{ icon: ActivityIcon, label: 'Fleet uptime', value: '99.9%', delta: '+0.3% vs last month', tone: 'text-signal-online' },
{ icon: AlertTriangleIcon, label: 'Alerts this week', value: '108', delta: '−12% vs last week', tone: 'text-signal-warn' },
{ icon: WrenchIcon, label: 'Mean repair time', value: '6.4h', delta: '−1.8h vs last month', tone: 'text-electric-300' },
{ icon: HardDriveIcon, label: 'Storage used', value: '83%', delta: '+4% vs last week', tone: 'text-cyanx-300' }];


export function Analytics() {
  return (
    <Section id="analytics" tone="raised">
      <SectionHeading
        eyebrow="Analytics & reporting"
        title="Decisions Backed by Real Surveillance Data."
        description="Camera status, uptime, alert volume, maintenance load and storage consumption — reported continuously and exportable for management review." />
      

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, i) =>
        <Reveal key={kpi.label} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <kpi.icon className={`h-5 w-5 ${kpi.tone}`} />
                <span className="font-mono text-[10px] text-slate-500">30d</span>
              </div>
              <p className="mt-4 font-display text-3xl font-bold text-white">{kpi.value}</p>
              <p className="mt-1 text-[13px] font-medium text-slate-300">{kpi.label}</p>
              <p className={`mt-0.5 font-mono text-[10.5px] ${kpi.tone}`}>{kpi.delta}</p>
            </div>
          </Reveal>
        )}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <Reveal delay={0.08} className="lg:col-span-2">
          <ChartCard title="Online vs offline cameras" subtitle="Rolling 7 days · 507 devices">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={uptimeSeries} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,178,255,0.08)" vertical={false} />
                <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: 'rgba(46,123,255,0.06)' }} contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} iconType="circle" />
                <Bar dataKey="online" stackId="a" name="Online" fill="#2e7bff" radius={[0, 0, 0, 0]} maxBarSize={38} />
                <Bar dataKey="offline" stackId="a" name="Offline" fill="#ff5a6a" radius={[4, 4, 0, 0]} maxBarSize={38} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </Reveal>

        <Reveal delay={0.14}>
          <ChartCard title="Camera status" subtitle="Current fleet breakdown">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusBreakdown}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={54}
                  outerRadius={80}
                  paddingAngle={3}
                  stroke="none">
                  
                  {statusBreakdown.map((entry) =>
                  <Cell key={entry.name} fill={entry.color} />
                  )}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </Reveal>

        <Reveal delay={0.08}>
          <ChartCard title="Recording storage" subtitle="Primary array utilisation">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={storageSeries} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
                <defs>
                  <linearGradient id="storage-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38d3ee" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#38d3ee" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,178,255,0.08)" vertical={false} />
                <XAxis dataKey="week" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} domain={[40, 100]} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="used" name="Used %" stroke="#38d3ee" strokeWidth={2} fill="url(#storage-fill)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </Reveal>

        <Reveal delay={0.14} className="lg:col-span-2">
          <ChartCard title="Security alerts by severity" subtitle="Rolling 7 days">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={alertsSeries} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,178,255,0.08)" vertical={false} />
                <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: 'rgba(46,123,255,0.06)' }} contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} iconType="circle" />
                <Bar dataKey="critical" name="Critical" fill="#ff5a6a" radius={[3, 3, 0, 0]} maxBarSize={16} />
                <Bar dataKey="warning" name="Warning" fill="#f5b544" radius={[3, 3, 0, 0]} maxBarSize={16} />
                <Bar dataKey="info" name="Information" fill="#2e7bff" radius={[3, 3, 0, 0]} maxBarSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </Reveal>
      </div>
    </Section>);

}

function ChartCard({ title, subtitle, children }: {title: string;subtitle: string;children: React.ReactNode;}) {
  return (
    <div className="h-full rounded-3xl border border-white/10 bg-ink-900/60 p-5 backdrop-blur-xl">
      <p className="font-display text-sm font-semibold text-white">{title}</p>
      <p className="mt-0.5 font-mono text-[11px] text-slate-500">{subtitle}</p>
      <div className="mt-4 h-56">{children}</div>
    </div>);

}