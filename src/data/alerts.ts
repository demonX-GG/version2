import type { SecurityAlert } from '../types/surveillance';

export const alerts: SecurityAlert[] = [
{
  id: 'ALT-8841',
  title: 'Camera Offline',
  severity: 'critical',
  source: 'CAM-2007 · Warehouse Aisle 3',
  detail: 'No heartbeat received from device for 6 minutes. NVR-02 link degraded.',
  time: '2 min ago'
},
{
  id: 'ALT-8840',
  title: 'Unauthorized Access Detected',
  severity: 'critical',
  source: 'CAM-4001 · Server Room',
  detail: 'Door forced outside approved window. Operator acknowledgement required.',
  time: '11 min ago'
},
{
  id: 'ALT-8836',
  title: 'Recording Interrupted',
  severity: 'warning',
  source: 'CAM-3019 · Office Floor',
  detail: 'Stream dropped for 42 seconds during scheduled continuous recording.',
  time: '38 min ago'
},
{
  id: 'ALT-8829',
  title: 'Storage Capacity Warning',
  severity: 'warning',
  source: 'NVR-04 · Warehouse',
  detail: 'Array at 87% capacity. Retention policy will begin overwriting in 3 days.',
  time: '1 hr ago'
},
{
  id: 'ALT-8817',
  title: 'Maintenance Required',
  severity: 'info',
  source: 'CAM-1048 · Reception',
  detail: 'Lens cleaning cycle due based on 180-day preventive schedule.',
  time: '3 hr ago'
}];


export const timeline = [
{ time: '14:32', label: 'CAM-2007 marked offline', tone: 'critical' as const },
{ time: '14:21', label: 'Server room access flagged by operator J. Mensah', tone: 'critical' as const },
{ time: '13:54', label: 'CAM-3019 stream restored after 42s interruption', tone: 'warning' as const },
{ time: '13:10', label: 'Nightly backup to secondary array completed', tone: 'info' as const },
{ time: '12:47', label: 'Technician assigned to ticket MT-3391', tone: 'info' as const },
{ time: '11:02', label: 'Weekly surveillance report exported by admin', tone: 'info' as const }];