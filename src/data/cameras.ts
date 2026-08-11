import type { Camera } from '../types/surveillance';

export const cameras: Camera[] = [
{
  id: 'CAM-1024',
  name: 'Main Entrance',
  model: 'Hikvision DS-2CD2386G2',
  type: 'Dome',
  ip: '10.24.8.11',
  location: 'Head Office · Ground Floor',
  installed: '12 Mar 2023',
  status: 'online',
  recording: true
},
{
  id: 'CAM-1031',
  name: 'Parking Area',
  model: 'Axis P3265-LVE',
  type: 'Bullet',
  ip: '10.24.8.19',
  location: 'Head Office · Exterior',
  installed: '04 Apr 2023',
  status: 'online',
  recording: true
},
{
  id: 'CAM-1048',
  name: 'Reception',
  model: 'Dahua IPC-HDBW3849',
  type: 'Dome',
  ip: '10.24.8.27',
  location: 'Head Office · Lobby',
  installed: '19 Jun 2023',
  status: 'online',
  recording: true
},
{
  id: 'CAM-2007',
  name: 'Warehouse Aisle 3',
  model: 'Hanwha XNP-6400RW',
  type: 'PTZ',
  ip: '10.31.4.07',
  location: 'Warehouse · Storage',
  installed: '27 Aug 2023',
  status: 'offline',
  recording: false
},
{
  id: 'CAM-2014',
  name: 'Loading Area',
  model: 'Axis Q1798-LE',
  type: 'Bullet',
  ip: '10.31.4.14',
  location: 'Warehouse · Dock B',
  installed: '02 Sep 2023',
  status: 'online',
  recording: true
},
{
  id: 'CAM-3002',
  name: 'Production Floor',
  model: 'Bosch FLEXIDOME 7100i',
  type: 'Dome',
  ip: '10.42.6.02',
  location: 'Plant 1 · Line A',
  installed: '15 Nov 2023',
  status: 'online',
  recording: true
},
{
  id: 'CAM-3019',
  name: 'Office Floor',
  model: 'Hikvision DS-2CD2H46G2',
  type: 'Dome',
  ip: '10.42.6.19',
  location: 'Head Office · Level 4',
  installed: '08 Jan 2024',
  status: 'maintenance',
  recording: false
},
{
  id: 'CAM-4001',
  name: 'Server Room',
  model: 'FLIR FC-632-ID',
  type: 'Thermal',
  ip: '10.51.2.01',
  location: 'Head Office · Data Centre',
  installed: '21 Feb 2024',
  status: 'online',
  recording: true
}];