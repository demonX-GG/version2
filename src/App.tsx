import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { LiveMonitoring } from './components/sections/LiveMonitoring';
import { CameraManagement } from './components/sections/CameraManagement';
import { Alerts } from './components/sections/Alerts';
import { Recordings } from './components/sections/Recordings';
import { Maintenance } from './components/sections/Maintenance';
import { Locations } from './components/sections/Locations';
import { UserSecurity } from './components/sections/UserSecurity';
import { Analytics } from './components/sections/Analytics';
import { Industries } from './components/sections/Industries';
import { Architecture } from './components/sections/Architecture';
import { DataModel } from './components/sections/DataModel';
import { SecurityAssurance } from './components/sections/SecurityAssurance';
import { Outcomes } from './components/sections/Outcomes';
import { FinalCta } from './components/sections/FinalCta';

export function App() {
  return (
    <div className="min-h-full w-full bg-ink-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <LiveMonitoring />
        <CameraManagement />
        <Alerts />
        <Recordings />
        <Maintenance />
        <Locations />
        <UserSecurity />
        <Analytics />
        <Industries />
        <Architecture />
        <DataModel />
        <SecurityAssurance />
        <Outcomes />
        <FinalCta />
      </main>
      <Footer />
    </div>);

}