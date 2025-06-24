import { useMemo, useCallback } from 'react';

export const useMemoizedOperators = (operators: Operator[]) => {
  return useMemo(() => {
    return operators.map(op => ({
      ...op,
      contrastColor: getContrastTextColor(op.color)
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

export const useEventHandlers = (dispatch: Dispatch) => {
  const handleCellChange = useCallback((date, day, shift, machine, value) => {
    dispatch({
      type: 'UPDATE_CELL',
      payload: { date, day, shift, machine, value }
    });
  }, [dispatch]);

  return { handleCellChange };
};