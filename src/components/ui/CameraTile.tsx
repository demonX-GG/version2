import React from 'react';
import { MaximizeIcon, VideoOffIcon, WrenchIcon } from 'lucide-react';
import type { Feed } from '../../data/feeds';

type CameraTileProps = {
  feed: Feed;
  showControls?: boolean;
  compact?: boolean;
};

export function CameraTile({ feed, showControls = true, compact = false }: CameraTileProps) {
  const isLive = feed.status === 'online';

  return (
    <figure className="group relative overflow-hidden rounded-xl border border-white/10 bg-ink-800">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={feed.image}
          alt={`${feed.name} camera view at ${feed.location}`}
          loading="lazy"
          className={`h-full w-full object-cover transition-all duration-700 ${
          isLive ?
          'opacity-80 saturate-[0.55] group-hover:scale-[1.03] group-hover:opacity-95' :
          'opacity-25 grayscale'}`
          } />
        
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-ink-950/40" />
        {isLive &&
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-cyanx-300/10 to-transparent animate-scanline" />
        }

        {!isLive &&
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink-950/70">
            {feed.status === 'offline' ?
          <VideoOffIcon className="h-6 w-6 text-signal-crit" /> :

          <WrenchIcon className="h-6 w-6 text-signal-warn" />
          }
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              {feed.status === 'offline' ? 'Signal lost' : 'Under maintenance'}
            </span>
          </div>
        }

        {/* Top overlay */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-2.5">
          <span
            className={`inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider backdrop-blur-sm ${
            isLive ?
            'bg-signal-online/15 text-signal-online' :
            feed.status === 'offline' ?
            'bg-signal-crit/15 text-signal-crit' :
            'bg-signal-warn/15 text-signal-warn'}`
            }>
            
            <span
              className={`h-1.5 w-1.5 rounded-full ${
              isLive ? 'bg-signal-online animate-status-pulse' : feed.status === 'offline' ? 'bg-signal-crit' : 'bg-signal-warn'}`
              } />
            
            {isLive ? 'Live' : feed.status === 'offline' ? 'Offline' : 'Maint.'}
          </span>
          {feed.recording &&
          <span className="inline-flex items-center gap-1 rounded-md bg-ink-950/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-signal-crit backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-crit" /> Rec
            </span>
          }
        </div>

        {/* Bottom overlay */}
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-2.5">
          <div className="min-w-0">
            <p className={`truncate font-display font-semibold text-white ${compact ? 'text-[11px]' : 'text-xs sm:text-[13px]'}`}>
              {feed.name}
            </p>
            <p className="truncate font-mono text-[9px] text-slate-400">
              {feed.id} · {feed.location}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="font-mono text-[9px] text-slate-300">{feed.time}</span>
            {showControls &&
            <span className="hidden rounded-md border border-white/10 bg-ink-950/60 p-1 text-slate-300 opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                <MaximizeIcon className="h-3 w-3" />
              </span>
            }
          </div>
        </figcaption>
      </div>
    </figure>);

}