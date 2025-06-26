// src/hooks/useOptimizedScheduleData.ts
import { useEffect, useMemo, useState } from 'react';
import { ScheduleEntry } from '../types/scheduleTypes';
import { webSocketService } from '../api/websocket';

export const useOptimizedScheduleData = () => {
  const [rawData, setRawData] = useState<ScheduleEntry[]>([]);
  
  // WebSocket subscription
  useEffect(() => {
    return webSocketService.subscribe(setRawData);
  }, []);

  // Memoized filtered data
  const filteredData = useMemo(() => {
    return rawData.filter(entry => entry.status === 'active');
  }, [rawData]);

  // Group by machine
  const groupedData = useMemo(() => {
    return filteredData.reduce((acc, entry) => {
      if (!acc[entry.machine.id]) {
        acc[entry.machine.id] = [];
      }
      acc[entry.machine.id].push(entry);
      return acc;
    }, {} as Record<string, ScheduleEntry[]>);
  }, [filteredData]);

  return { rawData, filteredData, groupedData };
};