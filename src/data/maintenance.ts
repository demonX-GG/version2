import type { MaintenanceTicket } from '../types/surveillance';

export const tickets: MaintenanceTicket[] = [
{
  id: 'MT-3391',
  camera: 'CAM-2007 · Warehouse Aisle 3',
  issue: 'PoE injector failure — no power',
  technician: 'A. Rahman',
  due: '12 Aug',
  cost: '$180',
  state: 'In progress'
},
{
  id: 'MT-3388',
  camera: 'CAM-3019 · Office Floor',
  issue: 'Intermittent stream drop',
  technician: 'L. Okafor',
  due: '13 Aug',
  cost: '$95',
  state: 'Awaiting part'
},
{
  id: 'MT-3384',
  camera: 'CAM-1048 · Reception',
  issue: 'Preventive lens cleaning',
  technician: 'S. Patel',
  due: '15 Aug',
  cost: '$40',
  state: 'Scheduled'
},
{
  id: 'MT-3379',
  camera: 'NVR-04 · Warehouse',
  issue: 'Disk replacement (bay 3)',
  technician: 'A. Rahman',
  due: '09 Aug',
  cost: '$320',
  state: 'Resolved'
}];


export const parts = [
{ name: 'PoE Injector 60W', stock: 12, reorder: 6 },
{ name: 'Dome housing (IK10)', stock: 4, reorder: 5 },
{ name: 'Surveillance HDD 8TB', stock: 9, reorder: 4 },
{ name: 'Cat6 outdoor 305m', stock: 2, reorder: 3 }];


export const maintenanceCost = [
{ month: 'Mar', cost: 1240 },
{ month: 'Apr', cost: 980 },
{ month: 'May', cost: 1610 },
{ month: 'Jun', cost: 1120 },
{ month: 'Jul', cost: 870 },
{ month: 'Aug', cost: 635 }];