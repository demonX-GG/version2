import React from 'react';
import { motion } from 'framer-motion';
import { ActivityIcon, AlertTriangleIcon, HardDriveIcon, MapPinIcon, VideoIcon } from 'lucide-react';
import { feeds } from '../../data/feeds';
import { CameraTile } from '../ui/CameraTile';

const stats = [
{ label: 'Cameras', value: '507', icon: VideoIcon, tone: 'text-electric-300' },
{ label: 'Online', value: '476', icon: ActivityIcon, tone: 'text-signal-online' },
{ label: 'Alerts', value: '3', icon: AlertTriangleIcon, tone: 'text-signal-crit' },
{ label: 'Storage', value: '83%', icon: HardDriveIcon, tone: 'text-cyanx-300' }];


const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 }
};

export function HeroDashboard() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
      className="relative">
      
      <div className="absolute -inset-6 rounded-[2.5rem] bg-electric-500/10 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-ink-900/80 shadow-panel backdrop-blur-2xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-signal-crit/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-warn/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-online/70" />
            <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              secure-eye · command centre
            </span>
          </div>
          <span className="hidden font-mono text-[10px] text-slate-500 sm:block">11 Aug 2026 · 18:42:07</span>
        </div>

        <div className="space-y-3 p-3 sm:space-y-4 sm:p-4">
          {/* KPI row */}
          <motion.div variants={item} className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {stats.map((s) =>
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                <div className="flex items-center gap-1.5">
                  <s.icon className={`h-3.5 w-3.5 ${s.tone}`} />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">{s.label}</span>
                </div>
                <p className="mt-1 font-display text-xl font-bold text-white">{s.value}</p>
              </div>
            )}
          </motion.div>

          {/* Feeds */}
          <motion.div variants={item} className="grid grid-cols-2 gap-2 sm:gap-3">
            {feeds.slice(0, 4).map((feed) =>
            <CameraTile key={feed.id} feed={feed} compact showControls={false} />
            )}
          </motion.div>

          {/* Alerts + locations */}
          <motion.div variants={item} className="grid gap-2 sm:grid-cols-5 sm:gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-3">
              <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">Active alerts</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-crit" />
                  <span className="truncate text-[11px] text-slate-200">Camera offline · CAM-2007</span>
                  <span className="ml-auto shrink-0 font-mono text-[9px] text-slate-500">2m</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-crit" />
                  <span className="truncate text-[11px] text-slate-200">Unauthorized access · Server Room</span>
                  <span className="ml-auto shrink-0 font-mono text-[9px] text-slate-500">11m</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-warn" />
                  <span className="truncate text-[11px] text-slate-200">Storage at 87% · NVR-04</span>
                  <span className="ml-auto shrink-0 font-mono text-[9px] text-slate-500">1h</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-2">
              <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">Locations</p>
              <ul className="mt-2 space-y-2">
                {[
                ['Head Office', '36 / 36'],
                ['Warehouse', '33 / 35'],
                ['Campus North', '29 / 29']].
                map(([name, count]) =>
                <li key={name} className="flex items-center gap-2">
                    <MapPinIcon className="h-3 w-3 shrink-0 text-electric-300" />
                    <span className="truncate text-[11px] text-slate-300">{name}</span>
                    <span className="ml-auto shrink-0 font-mono text-[9px] text-slate-500">{count}</span>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating alert toast */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }}
        className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-xl border border-signal-crit/25 bg-ink-900/90 px-4 py-3 shadow-glow-soft backdrop-blur-xl sm:flex">
        
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-crit/15">
          <AlertTriangleIcon className="h-4 w-4 text-signal-crit" />
        </span>
        <div>
          <p className="font-display text-xs font-semibold text-white">Critical alert raised</p>
          <p className="font-mono text-[10px] text-slate-400">CAM-2007 · dispatched to A. Rahman</p>
        </div>
      </motion.div>
    </motion.div>);

}