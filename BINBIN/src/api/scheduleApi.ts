// src/api/scheduleApi.ts
import axios from 'axios';
import { ScheduleEntry } from '../types/scheduleTypes';

const API_BASE = process.env.REACT_APP_API_BASE || '/api';

export const fetchSchedule = async (): Promise<ScheduleEntry[]> => {
  try {
    const response = await axios.get(`${API_BASE}/schedule`);
    return response.data.map((item: any) => ({
      ...item,
      time: formatTime(item.startTime),
    }));
  } catch (error) {
    throw new Error('Failed to fetch schedule data');
  }
};

export const updateScheduleEntry = async (entry: ScheduleEntry) => {
  // Implementation...
};

// Helper function
const formatTime = (isoString: string) => {
  // Time formatting logic...
};