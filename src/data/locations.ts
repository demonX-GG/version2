export type Zone = {
  name: string;
  cameras: number;
  online: number;
  device: string;
};

export type Site = {
  id: string;
  name: string;
  address: string;
  zones: Zone[];
};

export const sites: Site[] = [
{
  id: 'site-ho',
  name: 'Head Office',
  address: '14 Ridge Avenue · Tower A',
  zones: [
  { name: 'Main Entrance', cameras: 6, online: 6, device: 'NVR-01' },
  { name: 'Parking', cameras: 9, online: 9, device: 'NVR-01' },
  { name: 'Reception', cameras: 4, online: 4, device: 'NVR-01' },
  { name: 'Server Room', cameras: 3, online: 3, device: 'NVR-02' },
  { name: 'Office Floor', cameras: 14, online: 13, device: 'NVR-02' }]

},
{
  id: 'site-wh',
  name: 'Warehouse',
  address: 'Industrial Park, Block 7',
  zones: [
  { name: 'Loading Area', cameras: 8, online: 8, device: 'NVR-04' },
  { name: 'Storage', cameras: 16, online: 14, device: 'NVR-04' },
  { name: 'Production Floor', cameras: 11, online: 11, device: 'NVR-05' }]

},
{
  id: 'site-cp',
  name: 'Campus North',
  address: 'University Road, Gate 2',
  zones: [
  { name: 'Library', cameras: 7, online: 7, device: 'DVR-09' },
  { name: 'Lecture Halls', cameras: 12, online: 11, device: 'DVR-09' },
  { name: 'Hostel Block', cameras: 10, online: 10, device: 'DVR-10' }]

}];