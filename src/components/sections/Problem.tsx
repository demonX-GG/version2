import React from 'react';
import { ClipboardXIcon, FileSearchIcon, ScatterChartIcon, SearchXIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const painPoints = [
{
  icon: ScatterChartIcon,
  title: 'Scattered camera information',
  body: 'Device records live in spreadsheets, installer emails and separate DVR consoles — nobody has one accurate inventory.'
},
{
  icon: SearchXIcon,
  title: 'Difficult fault detection',
  body: 'A camera can sit offline for days before anyone notices, and the gap is only discovered when footage is needed.'
},
{
  icon: ClipboardXIcon,
  title: 'Manual maintenance tracking',
  body: 'Service visits, technician assignments and parts are logged on paper, so preventive schedules quietly slip.'
},
{
  icon: FileSearchIcon,
  title: 'Complicated recording management',
  body: 'Retrieving a clip means knowing which recorder, which disk and which retention window — and hoping it survived.'
}];


export function Problem() {
  return (
    <Section id="problem">
      <SectionHeading
        eyebrow="The problem"
        title="Managing Hundreds of Cameras Shouldn't Be Complicated."
        description="As CCTV networks grow across floors, buildings and sites, the tooling rarely grows with them. Security teams end up maintaining large infrastructure with manual processes and partial visibility." />
      

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {painPoints.map((point, i) =>
        <Reveal key={point.title} delay={i * 0.07}>
            <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/30 hover:bg-white/[0.05]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-800 text-slate-400 transition-colors duration-300 group-hover:border-electric-400/30 group-hover:text-electric-300">
                <point.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-white">{point.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">{point.body}</p>
            </article>
          </Reveal>
        )}
      </div>
    </Section>);

}