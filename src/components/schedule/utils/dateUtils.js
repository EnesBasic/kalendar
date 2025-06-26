import styled from 'styled-components';

export const TableHeader = styled.th`...`;
export const TableBody = styled.tbody`...`;
export const DateCell = styled.td`...`;
export const DayCell = styled.td`...`;
export const ShiftCell = styled.td`...`;
export const OperatorCell = styled.td`...`;

export const generateWeeksForYear = (year) => {
  const weeks = [];
  const firstDayOfYear = new Date(year, 0, 1);
  
  // Generate week 1 (Jan 1-7)
  const firstWeekEnd = new Date(firstDayOfYear);
  firstWeekEnd.setDate(firstWeekEnd.getDate() + 6);
  
  weeks.push({
    weekNumber: 1,
    year,
    dateRange: formatDateRange(firstDayOfYear, firstWeekEnd)
  });

  // Generate remaining weeks...
  return weeks;
};

export const formatDateRange = (startDate, endDate) => {
  const options = { month: 'short', day: 'numeric' };
  const startStr = startDate.toLocaleDateString('en-US', options);
  const endStr = endDate.toLocaleDateString('en-US', options);
  return `${startStr} - ${endStr} ${endDate.getFullYear()}`;
};

export const generateDatesForWeek = (dateRange) => {
  // Parse date range and generate all dates
  // Return array of { date: "01.01", day: "P" } objects
};