import React from 'react';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: 'default' | 'raised';
};

export function Section({ id, children, className = '', tone = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative border-t border-white/[0.06] py-20 sm:py-24 lg:py-28 ${
      tone === 'raised' ? 'bg-ink-900/60' : ''} ${
      className}`}>
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>);

}