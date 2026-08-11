import React from 'react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

type Entity = {
  name: string;
  fields: string[];
  relation?: string;
};

const entities: Entity[] = [
{ name: 'Users', fields: ['user_id (PK)', 'name', 'email', 'role', 'department_id (FK)'], relation: 'belongs to Departments' },
{ name: 'Departments', fields: ['department_id (PK)', 'name', 'manager', 'location_id (FK)'], relation: 'operates at Locations' },
{ name: 'Locations', fields: ['location_id (PK)', 'site', 'zone', 'address'], relation: 'contains Cameras' },
{ name: 'Cameras', fields: ['camera_id (PK)', 'model', 'type', 'ip_address', 'location_id (FK)', 'device_id (FK)'], relation: 'streams to DVR / NVR' },
{ name: 'DVR / NVR', fields: ['device_id (PK)', 'model', 'channels', 'storage_tb', 'location_id (FK)'], relation: 'stores Recordings' },
{ name: 'Recordings', fields: ['recording_id (PK)', 'camera_id (FK)', 'start_time', 'duration', 'size', 'backup_state'], relation: 'linked to Cameras' },
{ name: 'Maintenance', fields: ['ticket_id (PK)', 'camera_id (FK)', 'technician_id (FK)', 'issue', 'cost', 'state'], relation: 'assigned to Users' }];


export function DataModel() {
  return (
    <Section id="data-model">
      <SectionHeading
        eyebrow="Data model"
        title="Structured Data Behind Every Screen."
        description="A normalized schema keeps devices, footage, people and service history connected — so a report never contradicts the dashboard." />
      

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {entities.map((entity, i) =>
        <Reveal key={entity.name} delay={i % 4 * 0.06}>
            <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 transition-colors duration-300 hover:border-electric-400/30">
              <header className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                <h3 className="font-display text-[13.5px] font-semibold text-white">{entity.name}</h3>
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-600">table</span>
              </header>
              <ul className="divide-y divide-white/[0.05]">
                {entity.fields.map((field) =>
              <li key={field} className="px-4 py-2 font-mono text-[11px] text-slate-400">
                    {field.includes('(PK)') ?
                <span className="text-electric-300">{field}</span> :
                field.includes('(FK)') ?
                <span className="text-cyanx-300">{field}</span> :

                field
                }
                  </li>
              )}
              </ul>
              {entity.relation &&
            <p className="border-t border-white/[0.07] bg-ink-950/40 px-4 py-2.5 text-[11px] text-slate-500">
                  → {entity.relation}
                </p>
            }
            </article>
          </Reveal>
        )}

        <Reveal delay={0.24}>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-white/12 bg-white/[0.015] p-5">
            <p className="font-display text-[13.5px] font-semibold text-white">Key relationships</p>
            <ul className="mt-3 space-y-2 font-mono text-[11px] leading-relaxed text-slate-400">
              <li>Locations 1 — ∞ Cameras</li>
              <li>Cameras ∞ — 1 DVR / NVR</li>
              <li>Cameras 1 — ∞ Recordings</li>
              <li>Cameras 1 — ∞ Maintenance</li>
              <li>Users ∞ — 1 Departments</li>
            </ul>
            <p className="mt-4 flex gap-3 font-mono text-[10px] uppercase tracking-wider">
              <span className="text-electric-300">■ primary key</span>
              <span className="text-cyanx-300">■ foreign key</span>
            </p>
          </div>
        </Reveal>
      </div>
    </Section>);

}