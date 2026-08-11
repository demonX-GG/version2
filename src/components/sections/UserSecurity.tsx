import React from 'react';
import { FingerprintIcon, KeyRoundIcon, LockKeyholeIcon, ScrollTextIcon, ShieldCheckIcon, UserCogIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const roles = [
{
  name: 'Administrator',
  scope: 'Full system control',
  permissions: ['Manage users & roles', 'Configure devices', 'All sites', 'System settings'],
  accent: 'text-electric-300 border-electric-400/30 bg-electric-500/10'
},
{
  name: 'Security Manager',
  scope: 'Oversight & reporting',
  permissions: ['View all feeds', 'Acknowledge alerts', 'Export reports', 'Approve access'],
  accent: 'text-cyanx-300 border-cyanx-400/30 bg-cyanx-500/10'
},
{
  name: 'Operator',
  scope: 'Day-to-day monitoring',
  permissions: ['Live monitoring', 'Raise incidents', 'Assigned sites only', 'Playback (limited)'],
  accent: 'text-signal-online border-signal-online/30 bg-signal-online/10'
},
{
  name: 'Technician',
  scope: 'Maintenance access',
  permissions: ['View work orders', 'Update device status', 'Log parts & costs', 'No footage access'],
  accent: 'text-signal-warn border-signal-warn/30 bg-signal-warn/10'
}];


const controls = [
{ icon: FingerprintIcon, title: 'Secure authentication', body: 'Hashed credentials, session control and optional multi-factor sign-in.' },
{ icon: UserCogIcon, title: 'Role-based access', body: 'Permissions attach to roles, not individuals — onboarding stays consistent.' },
{ icon: KeyRoundIcon, title: 'Password management', body: 'Enforced complexity, rotation policies and administrator-issued resets.' },
{ icon: ScrollTextIcon, title: 'Authorization trail', body: 'Every privileged action is attributed, timestamped and retained.' }];


export function UserSecurity() {
  return (
    <Section id="users">
      <SectionHeading
        eyebrow="Users & access"
        title="Security Starts With Controlled Access."
        description="Surveillance data is sensitive. Secure Eye defines exactly who can see a feed, retrieve a recording, close an alert or change a device." />
      

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((role, i) =>
        <Reveal key={role.name} delay={i * 0.07}>
            <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/25 hover:shadow-glow-soft">
              <span className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${role.accent}`}>
                <ShieldCheckIcon className="h-3 w-3" />
                Role
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{role.name}</h3>
              <p className="mt-1 text-[12.5px] text-slate-500">{role.scope}</p>
              <ul className="mt-4 space-y-2 border-t border-white/[0.07] pt-4">
                {role.permissions.map((p) =>
              <li key={p} className="flex items-start gap-2 text-[12.5px] text-slate-400">
                    <LockKeyholeIcon className="mt-0.5 h-3 w-3 shrink-0 text-slate-600" />
                    {p}
                  </li>
              )}
              </ul>
            </article>
          </Reveal>
        )}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {controls.map((c, i) =>
        <Reveal key={c.title} delay={i * 0.06}>
            <div className="flex h-full gap-3.5 rounded-2xl border border-white/10 bg-ink-900/50 p-5">
              <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-electric-400" />
              <div>
                <h3 className="font-display text-[14px] font-semibold text-white">{c.title}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-slate-400">{c.body}</p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </Section>);

}