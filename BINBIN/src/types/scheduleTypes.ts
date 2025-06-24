interface Operator {
  id: string;
  name: string;
  color: string;
}

interface Machine {
  id: string;
  name: string;
  color: string;
}

interface Shift {
  id: string;
  time: string;
  color: string;
}

interface ScheduleEntry {
  date: string;
  day: string;
  shifts: {
    time: string;
    operators: Record<string, string>;
  }[];
}

interface ScheduleState {
  operators: Operator[];
  machines: Machine[];
  shifts: Shift[];
  scheduleData: ScheduleEntry[];
  isLoading: boolean;
  error: string | null;
}

type ApiResponse<T> = {
  data: T;
  error?: string;
  status: number;
};

export type { Operator, Machine, Shift, ScheduleEntry, ScheduleState, ApiResponse };