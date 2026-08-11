import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Logo } from '../ui/Logo';

const assurances = [
{ title: 'Secure authentication', body: 'Credentials are hashed and sessions expire on inactivity, with optional MFA for privileged roles.' },
{ title: 'Role-based access', body: 'Access is granted through roles mapped to sites, cameras and actions — never ad-hoc.' },
{ title: 'Controlled permissions', body: 'Playback, export and device configuration are separately permissioned capabilities.' },
{ title: 'Centralized data management', body: 'A single governed database removes shadow spreadsheets and stale device lists.' },
{ title: 'Secure surveillance records', body: 'Recording metadata, retention and backup state are tracked for every archive.' },
{ title: 'Full auditability', body: 'Every login, acknowledgement, export and configuration change is attributed and retained.' }];


export function SecurityAssurance() {
  return (
    <Section id="security" tone="raised">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Data protection"
            title="Your Surveillance Data Deserves Strong Protection."
            description="Footage and device records are among the most sensitive assets an organization holds. Secure Eye treats them that way at every layer."
            align="left" />
          

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {assurances.map((item, i) =>
            <Reveal key={item.title} delay={i % 2 * 0.06} as="li">
                <div className="h-full">
                  <p className="flex items-center gap-2 font-display text-[14px] font-semibold text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-electric-500/15 text-electric-300">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {item.title}
                  </p>
                  <p className="mt-1.5 pl-7 text-[12.5px] leading-relaxed text-slate-400">{item.body}</p>
                </div>
              </Reveal>
            )}
          </ul>
        </div>

        <Reveal delay={0.12}>
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-electric-500/10 blur-[90px]" aria-hidden />
            <div className="absolute inset-[6%] rounded-full border border-white/[0.07]" aria-hidden />
            <div className="absolute inset-[20%] rounded-full border border-white/[0.06]" aria-hidden />
            <div className="absolute inset-[34%] rounded-full border border-electric-400/15" aria-hidden />
            <div className="absolute inset-0 animate-radar rounded-full bg-[conic-gradient(from_0deg,rgba(56,211,238,0.16),transparent_30%)]" aria-hidden />
            <Logo className="relative h-40 w-40 drop-shadow-[0_0_36px_rgba(46,123,255,0.45)]" />

            {['Encrypted sessions', 'Audit log', 'Least privilege'].map((label, i) =>
            <span
              key={label}
              className="absolute rounded-full border border-white/10 bg-ink-900/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-300 backdrop-blur"
              style={
              [
              { top: '8%', left: '4%' },
              { bottom: '14%', right: '2%' },
              { bottom: '4%', left: '14%' }][
              i]
              }>
              
                {label}
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </Section>);

}