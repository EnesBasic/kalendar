import { useState, useEffect, useCallback } from 'react';
import { useScheduleContext } from '../contexts/ScheduleContext';

export function useScheduleData(initialData) {
  const { state, dispatch } = useScheduleContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      // API call would go here
      dispatch({ type: 'SET_SCHEDULE_DATA', payload: initialData });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [initialData, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data: state.scheduleData,
    loading,
    error,
    refetch: fetchData
  };
}