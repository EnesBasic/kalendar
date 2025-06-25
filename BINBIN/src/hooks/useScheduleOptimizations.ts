import { useMemo, useCallback } from 'react';
import { Operator } from '../models/Operator';
import { ScheduleEntry } from '../models/ScheduleEntry';
import { Dispatch } from 'react';
import { getContrastTextColor } from '../utils/colorUtils';

export const useMemoizedOperators = (operators: Operator[]) => {
  return useMemo(() => {
    return operators.map(op => ({
      ...op,
      contrastColor: getContrastTextColor(op.color ?? '#ffffff')
    }));
  }, [operators]);
};

export const useScheduleMemo = (scheduleData: ScheduleEntry[]) => {
  return useMemo(() => {
    return scheduleData.map(day => ({
      ...day,
      shifts: day.shifts.map(shift => ({
        ...shift,
        isWeekend: ['S', 'N'].includes(day.day)
      }))
    }));
  }, [scheduleData]);
};

export const useEventHandlers = (dispatch: Dispatch<any>) => {
  const handleCellChange = useCallback(
    (
      date: string,         // or Date if you use Date objects
      day: string,
      shift: string,
      machine: string,
      value: any
    ) => {
      dispatch({
        type: 'UPDATE_CELL',
        payload: { date, day, shift, machine, value }
      });
    },
    [dispatch]
  );

  return { handleCellChange };
};