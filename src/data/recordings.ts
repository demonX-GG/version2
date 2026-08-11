import type { Recording } from '../types/surveillance';

export const recordings: Recording[] = [
{
  id: 'REC-77120',
  camera: 'CAM-1024 · Main Entrance',
  location: 'Head Office',
  date: '11 Aug 2026',
  range: '06:00 – 12:00',
  duration: '6h 00m',
  size: '14.2 GB',
  backup: 'Synced'
},
{
  id: 'REC-77118',
  camera: 'CAM-2014 · Loading Area',
  location: 'Warehouse',
  date: '11 Aug 2026',
  range: '05:30 – 11:45',
  duration: '6h 15m',
  size: '15.8 GB',
  backup: 'Synced'
},
{
  id: 'REC-77104',
  camera: 'CAM-3002 · Production Floor',
  location: 'Plant 1',
  date: '10 Aug 2026',
  range: '22:00 – 06:00',
  duration: '8h 00m',
  size: '21.4 GB',
  backup: 'Queued'
},
{
  id: 'REC-77099',
  camera: 'CAM-4001 · Server Room',
  location: 'Data Centre',
  date: '10 Aug 2026',
  range: '00:00 – 24:00',
  duration: '24h 00m',
  size: '38.6 GB',
  backup: 'Synced'
},
{
  id: 'REC-77085',
  camera: 'CAM-3019 · Office Floor',
  location: 'Head Office',
  date: '09 Aug 2026',
  range: '08:00 – 18:00',
  duration: '9h 18m',
  size: '19.1 GB',
  backup: 'Failed'
}];


export const schedules = [
{ camera: 'Main Entrance', mode: 'Continuous', window: '24 / 7', retention: '90 days' },
{ camera: 'Parking Area', mode: 'Motion triggered', window: '18:00 – 06:00', retention: '60 days' },
{ camera: 'Warehouse', mode: 'Continuous', window: '05:00 – 23:00', retention: '45 days' },
{ camera: 'Server Room', mode: 'Continuous + thermal', window: '24 / 7', retention: '180 days' }];