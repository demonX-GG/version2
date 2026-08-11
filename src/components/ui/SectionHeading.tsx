import React from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-electric-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyanx-400" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h2>
      </Reveal>
      {description &&
      <Reveal delay={0.12}>
          <p className={`mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base ${isCenter ? 'mx-auto max-w-2xl' : ''}`}>
            {description}
          </p>
        </Reveal>
      }
    </div>);

}