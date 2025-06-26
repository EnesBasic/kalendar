// src/hooks/useScheduleData.ts
import { useState, useEffect } from 'react';
import { ScheduleEntry } from '../types/scheduleTypes';
import { fetchSchedule } from '../api/scheduleApi';

export const useScheduleData = () => {
  const [data, setData] = useState<ScheduleEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    try {
      setLoading(true);
      const result = await fetchSchedule();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return { data, loading, error, refresh };
};