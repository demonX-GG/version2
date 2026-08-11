export type CameraStatus = 'online' | 'offline' | 'maintenance';

export type Camera = {
  id: string;
  name: string;
  model: string;
  type: 'Dome' | 'Bullet' | 'PTZ' | 'Thermal';
  ip: string;
  location: string;
  installed: string;
  status: CameraStatus;
  recording: boolean;
};

export type AlertSeverity = 'critical' | 'warning' | 'info';

export type SecurityAlert = {
  id: string;
  title: string;
  severity: AlertSeverity;
  source: string;
  detail: string;
  time: string;
};

export type Recording = {
  id: string;
  camera: string;
  location: string;
  date: string;
  range: string;
  duration: string;
  size: string;
  backup: 'Synced' | 'Queued' | 'Failed';
};

export type MaintenanceTicket = {
  id: string;
  camera: string;
  issue: string;
  technician: string;
  due: string;
  cost: string;
  state: 'Scheduled' | 'In progress' | 'Awaiting part' | 'Resolved';
};