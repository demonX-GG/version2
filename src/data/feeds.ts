import type { CameraStatus } from '../types/surveillance';

export type Feed = {
  id: string;
  name: string;
  location: string;
  image: string;
  status: CameraStatus;
  recording: boolean;
  time: string;
};

export const feeds: Feed[] = [
{
  id: 'CAM-1024',
  name: 'Main Entrance',
  location: 'Head Office',
  image: "/9b55ba22-785d-4556-9799-10dc7d66b49d.jpg",
  status: 'online',
  recording: true,
  time: '18:42:07'
},
{
  id: 'CAM-1031',
  name: 'Parking Area',
  location: 'Head Office · Exterior',
  image: "/c4323994-4166-4a43-a1b3-95174ad68298.jpg",
  status: 'online',
  recording: true,
  time: '18:42:07'
},
{
  id: 'CAM-2007',
  name: 'Warehouse',
  location: 'Warehouse · Storage',
  image: "/4deb2804-8c63-459d-b6ed-e00a19b7284e.jpg",
  status: 'offline',
  recording: false,
  time: '18:36:11'
},
{
  id: 'CAM-3002',
  name: 'Production Floor',
  location: 'Plant 1 · Line A',
  image: "/0996fe92-49ad-4502-990a-1ac18c9c374a.jpg",
  status: 'online',
  recording: true,
  time: '18:42:07'
},
{
  id: 'CAM-3019',
  name: 'Office Floor',
  location: 'Head Office · Level 4',
  image: "/c0a9f224-efd6-4c00-b8eb-becab72c539e.jpg",
  status: 'maintenance',
  recording: false,
  time: '18:42:07'
},
{
  id: 'CAM-4001',
  name: 'Server Room',
  location: 'Head Office · Data Centre',
  image: "/ef5d7be2-0368-4ef5-b07c-3d483e5fb334.jpg",
  status: 'online',
  recording: true,
  time: '18:42:07'
},
{
  id: 'CAM-2014',
  name: 'Loading Area',
  location: 'Warehouse · Dock B',
  image: "/0dae37df-7c5c-4345-a724-2f9552d572be.jpg",
  status: 'online',
  recording: true,
  time: '18:42:07'
},
{
  id: 'CAM-1048',
  name: 'Reception',
  location: 'Head Office · Lobby',
  image: "/8072fdcd-3f6c-42dd-b83f-b9b44b6dbed5.jpg",
  status: 'online',
  recording: true,
  time: '18:42:07'
}];