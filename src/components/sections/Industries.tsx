import React from 'react';
import {
  BuildingIcon,
  Building2Icon,
  FactoryIcon,
  GraduationCapIcon,
  HomeIcon,
  HospitalIcon,
  LandmarkIcon,
  SchoolIcon,
  ShoppingBagIcon } from
'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const industries = [
{ icon: GraduationCapIcon, name: 'Universities', note: 'Multi-campus coverage with faculty-level access control.' },
{ icon: SchoolIcon, name: 'Schools', note: 'Entrance, corridor and perimeter monitoring with clear audit trails.' },
{ icon: LandmarkIcon, name: 'Banks', note: 'Branch, ATM and vault coverage with strict retention policies.' },
{ icon: ShoppingBagIcon, name: 'Shopping malls', note: 'High-density camera counts across tenants and common areas.' },
{ icon: HospitalIcon, name: 'Hospitals', note: 'Restricted-ward oversight with tightly scoped permissions.' },
{ icon: Building2Icon, name: 'Corporate offices', note: 'Floor-by-floor visibility and visitor entry verification.' },
{ icon: FactoryIcon, name: 'Factories & warehouses', note: 'Production lines, docks and storage under one operations view.' },
{ icon: HomeIcon, name: 'Residential buildings', note: 'Lobby, parking and perimeter monitoring for estate managers.' }];


export function Industries() {
  return (
    <Section id="industries">
      <SectionHeading
        eyebrow="Industries"
        title="Built for Every Environment That Needs Security."
        description="From a single building to a distributed estate, Secure Eye scales with the number of cameras, sites and teams you operate." />
      

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, i) =>
        <Reveal key={industry.name} delay={i % 4 * 0.06}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-electric-400/30 hover:bg-white/[0.05]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-electric-500/0 blur-2xl transition-colors duration-500 group-hover:bg-electric-500/25" />
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-900 text-electric-300 transition-transform duration-300 group-hover:scale-105">
                <industry.icon className="h-5 w-5" />
              </span>
              <h3 className="relative mt-5 font-display text-[15px] font-semibold text-white">{industry.name}</h3>
              <p className="relative mt-1.5 text-[12.5px] leading-relaxed text-slate-400">{industry.note}</p>
              <BuildingIcon className="pointer-events-none absolute -bottom-4 -right-3 h-20 w-20 text-white/[0.02]" aria-hidden />
            </article>
          </Reveal>
        )}
      </div>
    </Section>);

}