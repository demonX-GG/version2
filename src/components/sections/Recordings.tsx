import React from 'react';
import { CalendarIcon, CloudUploadIcon, DatabaseIcon, PlayIcon, SearchIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { recordings, schedules } from '../../data/recordings';

const hours = ['00', '03', '06', '09', '12', '15', '18', '21', '24'];

const tracks = [
{ camera: 'Main Entrance', segments: [[0, 100]] },
{ camera: 'Parking Area', segments: [[0, 26], [72, 100]] },
{ camera: 'Warehouse', segments: [[20, 62]] },
{ camera: 'Production Floor', segments: [[0, 44], [50, 96]] },
{ camera: 'Server Room', segments: [[0, 100]] }];


const BACKUP_TONE: Record<string, string> = {
  Synced: 'text-signal-online bg-signal-online/10 border-signal-online/25',
  Queued: 'text-signal-warn bg-signal-warn/10 border-signal-warn/25',
  Failed: 'text-signal-crit bg-signal-crit/10 border-signal-crit/25'
};

export function Recordings() {
  return (
    <Section id="recordings" tone="raised">
      <SectionHeading
        eyebrow="Recording management"
        title="Find Any Moment in Seconds."
        description="Browse continuous and motion-triggered footage on a timeline, filter by camera or date, and confirm that every archive is backed up." />
      

      <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        {/* Timeline browser */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 shadow-panel backdrop-blur-xl">
            <div className="flex flex-col gap-3 border-b border-white/10 bg-white/[0.02] px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-sm font-semibold text-white">Recording timeline</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-ink-950/60 px-3 py-1.5 font-mono text-[11.5px] text-slate-300">
                  <CalendarIcon className="h-3.5 w-3.5 text-electric-300" /> 11 Aug 2026
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-ink-950/60 px-3 py-1.5 text-[12px] text-slate-400">
                  <SearchIcon className="h-3.5 w-3.5" /> All cameras
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="flex justify-between pl-[112px] font-mono text-[10px] text-slate-600">
                {hours.map((h) =>
                <span key={h}>{h}</span>
                )}
              </div>

              <ul className="mt-2 space-y-2.5">
                {tracks.map((track, ti) =>
                <li key={track.camera} className="flex items-center gap-3">
                    <span className="w-[100px] shrink-0 truncate text-[12px] text-slate-400">{track.camera}</span>
                    <div className="relative h-7 flex-1 overflow-hidden rounded-md border border-white/10 bg-ink-950/70">
                      <div className="absolute inset-0 bg-grid-fine opacity-30" aria-hidden />
                      {track.segments.map(([start, end], si) =>
                    <div
                      key={si}
                      className="absolute inset-y-1 rounded-sm bg-electric-500/45 ring-1 ring-inset ring-electric-400/40"
                      style={{ left: `${start}%`, width: `${end - start}%` }} />

                    )}
                      {ti === 0 &&
                    <div className="absolute inset-y-0 left-[76%] w-px bg-cyanx-300 shadow-[0_0_10px_2px_rgba(103,232,249,0.5)]" />
                    }
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-4 rounded-sm bg-electric-500/45 ring-1 ring-inset ring-electric-400/40" /> Recorded
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-4 rounded-sm border border-white/10 bg-ink-950" /> No footage
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-px bg-cyanx-300" /> Playhead 18:14
                </span>
              </div>
            </div>

            {/* History table */}
            <div className="scroll-slim overflow-x-auto border-t border-white/10">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">Recording history</caption>
                <thead>
                  <tr className="border-b border-white/10 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    <th scope="col" className="px-5 py-3 font-medium">Recording</th>
                    <th scope="col" className="px-5 py-3 font-medium">Date</th>
                    <th scope="col" className="px-5 py-3 font-medium">Range</th>
                    <th scope="col" className="px-5 py-3 font-medium">Duration</th>
                    <th scope="col" className="px-5 py-3 font-medium">Size</th>
                    <th scope="col" className="px-5 py-3 font-medium">Backup</th>
                    <th scope="col" className="px-5 py-3 font-medium sr-only">Play</th>
                  </tr>
                </thead>
                <tbody>
                  {recordings.map((rec) =>
                  <tr key={rec.id} className="border-b border-white/[0.06] last:border-0 hover:bg-white/[0.03]">
                      <td className="px-5 py-3.5">
                        <p className="text-[12.5px] text-slate-200">{rec.camera}</p>
                        <p className="font-mono text-[10.5px] text-slate-500">{rec.id} · {rec.location}</p>
                      </td>
                      <td className="whitespace-nowrap px-5 py-3.5 font-mono text-[12px] text-slate-400">{rec.date}</td>
                      <td className="whitespace-nowrap px-5 py-3.5 font-mono text-[12px] text-slate-400">{rec.range}</td>
                      <td className="whitespace-nowrap px-5 py-3.5 text-[12.5px] text-slate-400">{rec.duration}</td>
                      <td className="whitespace-nowrap px-5 py-3.5 text-[12.5px] text-slate-400">{rec.size}</td>
                      <td className="whitespace-nowrap px-5 py-3.5">
                        <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${BACKUP_TONE[rec.backup]}`}>
                          {rec.backup}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-electric-300">
                          <PlayIcon className="h-3 w-3" />
                        </span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Side rail */}
        <div className="space-y-5">
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
              <p className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                <DatabaseIcon className="h-4 w-4 text-electric-400" /> Storage status
              </p>
              <div className="mt-4 space-y-4">
                {[
                { name: 'Primary array · 96 TB', used: 83, tone: 'bg-signal-warn' },
                { name: 'Secondary array · 64 TB', used: 51, tone: 'bg-electric-500' },
                { name: 'Cold archive · 240 TB', used: 34, tone: 'bg-cyanx-500' }].
                map((disk) =>
                <div key={disk.name}>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-slate-300">{disk.name}</span>
                      <span className="font-mono text-slate-500">{disk.used}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full rounded-full ${disk.tone}`} style={{ width: `${disk.used}%` }} />
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-ink-950/50 px-3 py-2 text-[11.5px] text-slate-400">
                <CloudUploadIcon className="h-3.5 w-3.5 text-signal-online" />
                Last backup completed 13:10 · 1 job queued
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
              <p className="font-display text-sm font-semibold text-white">Recording schedules</p>
              <ul className="mt-4 space-y-3">
                {schedules.map((s) =>
                <li key={s.camera} className="rounded-xl border border-white/10 bg-ink-950/40 px-3.5 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="truncate text-[13px] font-medium text-slate-200">{s.camera}</span>
                      <span className="shrink-0 rounded-md bg-electric-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-electric-300">
                        {s.mode}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[10.5px] text-slate-500">
                      {s.window} · retention {s.retention}
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>);

}