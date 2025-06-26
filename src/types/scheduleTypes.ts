// src/types/scheduleTypes.ts
interface Machine {
  id: string;
  name: string;
  status: 'active' | 'maintenance' | 'inactive';
}

interface Operator {
  id: string;
  name: string;
  qualification: string;
}

interface Shift {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
}

export interface ScheduleEntry {
  id: string;
  time: string;
  machine: { id: string; name: string; status?: string };
  operator: { id: string; name: string; qualification?: string };
  shift: { id: string; name: string; startTime?: string; endTime?: string };
}