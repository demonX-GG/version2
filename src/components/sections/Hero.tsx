import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MonitorPlayIcon, ShieldCheckIcon } from 'lucide-react';
import { Backdrop } from '../ui/Backdrop';
import { HeroDashboard } from './HeroDashboard';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 sm:pb-28 lg:pb-36 lg:pt-40">
      <Backdrop />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-12">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/[0.08] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-electric-200">
            
            <ShieldCheckIcon className="h-3.5 w-3.5" />
            Smarter Surveillance. Stronger Security.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]">
            
            See Everything.
            <br />
            <span className="bg-gradient-to-r from-electric-300 via-electric-400 to-cyanx-400 bg-clip-text text-transparent">
              Secure Everything.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-lg">
            
            Secure Eye brings your entire CCTV infrastructure into one intelligent platform—monitor cameras, manage
            recordings, track maintenance, and respond to security events from a single centralized system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row">
            
            <a
              href="#solution"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-electric-500 px-6 py-3.5 font-display text-[15px] font-semibold text-white shadow-glow transition-all duration-300 hover:bg-electric-400">
              
              Explore Secure Eye
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#monitoring"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-display text-[15px] font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:border-electric-400/40 hover:bg-white/[0.08] hover:text-white">
              
              <MonitorPlayIcon className="h-4 w-4" />
              View Dashboard
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-slate-500">
            
            <span>Role-based access</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>DVR / NVR agnostic</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>Audit-ready records</span>
          </motion.div>
        </div>

        <HeroDashboard />
      </div>
    </section>);

}