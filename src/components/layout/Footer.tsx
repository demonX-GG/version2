import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Logo } from '../ui/Logo';

const columns = [
{
  title: 'Platform',
  links: [
  { label: 'Overview', href: '#solution' },
  { label: 'Live monitoring', href: '#monitoring' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Data model', href: '#data-model' }]

},
{
  title: 'Features',
  links: [
  { label: 'Camera management', href: '#cameras' },
  { label: 'Alert management', href: '#alerts' },
  { label: 'Recording management', href: '#recordings' },
  { label: 'Maintenance', href: '#maintenance' },
  { label: 'Analytics & reporting', href: '#analytics' }]

},
{
  title: 'Industries',
  links: [
  { label: 'Universities & schools', href: '#industries' },
  { label: 'Banks & retail', href: '#industries' },
  { label: 'Hospitals', href: '#industries' },
  { label: 'Factories & warehouses', href: '#industries' }]

},
{
  title: 'Security',
  links: [
  { label: 'Access control', href: '#users' },
  { label: 'Data protection', href: '#security' },
  { label: 'Auditability', href: '#security' },
  { label: 'Expected outcomes', href: '#outcomes' }]

}];


export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950 pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 pb-14 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-[17px] font-extrabold tracking-tight text-white">
                Secure<span className="text-electric-400">Eye</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-slate-500">
              A centralized CCTV surveillance management platform for organizations that need to monitor, maintain and
              secure large camera networks from one system.
            </p>
            <ul className="mt-6 space-y-2.5 text-[12.5px] text-slate-500">
              <li className="flex items-center gap-2">
                <MailIcon className="h-3.5 w-3.5 text-electric-400" /> contact@secureeye.io
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-3.5 w-3.5 text-electric-400" /> +1 (555) 018-4420
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="h-3.5 w-3.5 text-electric-400" /> 14 Ridge Avenue, Tower A
              </li>
            </ul>
          </div>

          {columns.map((col) =>
          <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-[13px] font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) =>
              <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-slate-500 transition-colors hover:text-electric-300">
                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] py-6 sm:flex-row">
          <p className="font-mono text-[11px] text-slate-600">
            © 2026 Secure Eye · Smarter Surveillance. Stronger Security.
          </p>
          <div className="flex items-center gap-6">
            <a href="#security" className="text-[12.5px] text-slate-500 transition-colors hover:text-electric-300">
              Privacy Policy
            </a>
            <a href="#security" className="text-[12.5px] text-slate-500 transition-colors hover:text-electric-300">
              Terms
            </a>
            <a href="#cta" className="text-[12.5px] text-slate-500 transition-colors hover:text-electric-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>);

}