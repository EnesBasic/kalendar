// src/contexts/ScheduleContext.tsx
import React, { createContext, useContext } from 'react';
import { useScheduleData } from '../hooks/useScheduleData';

interface ScheduleContextType {
  data: ScheduleEntry[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

export const ScheduleProvider: React.FC = ({ children }) => {
  const scheduleData = useScheduleData();
  
  return (
    <ScheduleContext.Provider value={scheduleData}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error('useSchedule must be used within a ScheduleProvider');
  }
  return context;
};