export function useSchedule({ initialData, weekNumber, year, dateRange }) {
  const [scheduleData, setScheduleData] = React.useState(initialData);
  const [weekDates, setWeekDates] = React.useState([]);
  
  React.useEffect(() => {
    setScheduleData(initialData);
  }, [initialData]);
  
  const handleCellChange = (date, day, shift, machine, value) => {
    // ... cell update logic
  };
  
  return { scheduleData, weekDates, handleCellChange };
}


import React from "react";
import { generateWeeksForYear, generateDatesForWeek } from "../utils/dateUtils";

export function useSchedule({ 
  initialData = [], 
  weekNumber, 
  year, 
  dateRange,
  onWeekChange 
}) {
  // State
  const [scheduleData, setScheduleData] = React.useState(initialData);
  const [allWeeks, setAllWeeks] = React.useState([]);
  const [selectedWeek, setSelectedWeek] = React.useState({
    weekNumber,
    year,
    dateRange
  });
  const [weekDates, setWeekDates] = React.useState([]);

  // Effects
  React.useEffect(() => {
    setScheduleData(initialData);
  }, [initialData]);

  React.useEffect(() => {
    const weeks = generateWeeksForYear(year);
    setAllWeeks(weeks);
  }, [year]);

  React.useEffect(() => {
    setSelectedWeek({ weekNumber, year, dateRange });
    setWeekDates(generateDatesForWeek(dateRange));
  }, [weekNumber, year, dateRange]);

  // Handlers
  const handleCellChange = (date, day, shift, machine, value) => {
    setScheduleData(prev => {
      // ... existing cell change logic
    });
  };

  const handleWeekChange = (weekNum, yr) => {
    const weekData = allWeeks.find(w => w.weekNumber === weekNum && w.year === yr);
    if (weekData) {
      setSelectedWeek({
        weekNumber: weekNum,
        year: yr,
        dateRange: weekData.dateRange
      });
      onWeekChange(weekData);
    }
  };

  return {
    scheduleData,
    allWeeks,
    selectedWeek,
    weekDates,
    handleCellChange,
    handleWeekChange,
    setScheduleData
  };
}