import React from 'react';

export type CameraStatus = 'online' | 'offline' | 'maintenance';

const TONE: Record<CameraStatus, {dot: string;text: string;bg: string;label: string;}> = {
  online: {
    dot: 'bg-signal-online animate-status-pulse',
    text: 'text-signal-online',
    bg: 'bg-signal-online/10 border-signal-online/25',
    label: 'Online'
  },
  offline: {
    dot: 'bg-signal-crit',
    text: 'text-signal-crit',
    bg: 'bg-signal-crit/10 border-signal-crit/25',
    label: 'Offline'
  },
  maintenance: {
    dot: 'bg-signal-warn',
    text: 'text-signal-warn',
    bg: 'bg-signal-warn/10 border-signal-warn/25',
    label: 'Maintenance'
  }
};

export function StatusPill({ status, compact = false }: {status: CameraStatus;compact?: boolean;}) {
  const tone = TONE[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${tone.bg} ${tone.text} ${
      compact ? '' : 'sm:text-[11px]'}`
      }>
      
      <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
      {tone.label}
    </span>);

}

export function StatusDot({ status }: {status: CameraStatus;}) {
  return <span className={`inline-block h-2 w-2 rounded-full ${TONE[status].dot}`} />;
}