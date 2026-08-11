import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuitIcon,
  ClockIcon,
  DatabaseZapIcon,
  FileBarChartIcon,
  GaugeIcon,
  LayersIcon,
  RadarIcon,
  ScaleIcon,
  SparklesIcon,
  WrenchIcon } from
'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

const outcomes = [
{ icon: LayersIcon, title: 'Centralized CCTV information' },
{ icon: RadarIcon, title: 'Faster fault detection' },
{ icon: WrenchIcon, title: 'Improved maintenance planning' },
{ icon: SparklesIcon, title: 'Reduced manual work' },
{ icon: DatabaseZapIcon, title: 'Higher data accuracy' },
{ icon: GaugeIcon, title: 'Better security monitoring' },
{ icon: FileBarChartIcon, title: 'Faster reporting' },
{ icon: ClockIcon, title: 'Reduced downtime' },
{ icon: BrainCircuitIcon, title: 'Improved decision making' },
{ icon: ScaleIcon, title: 'Scalable infrastructure' }];


export function Outcomes() {
  return (
    <Section id="outcomes">
      <SectionHeading
        eyebrow="Expected outcomes"
        title="What Changes After Secure Eye."
        description="The measurable difference security, facilities and IT teams see once surveillance operations run on one platform." />
      

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        
        {outcomes.map((outcome) =>
        <motion.li
          key={outcome.title}
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: [0.21, 0.6, 0.35, 1] }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/30 hover:bg-white/[0.05]">
          
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <outcome.icon className="h-5 w-5 text-electric-400" />
            <p className="mt-4 font-display text-[13.5px] font-semibold leading-snug text-white">{outcome.title}</p>
          </motion.li>
        )}
      </motion.ul>
    </Section>);

}