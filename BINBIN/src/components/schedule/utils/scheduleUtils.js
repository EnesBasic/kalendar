export const getCellValue = (scheduleData, date, day, shift, machine) => {
  const dayEntry = scheduleData.find(d => d.date === date && d.day === day);
  if (!dayEntry) return '';
  
  const shiftEntry = dayEntry.shifts.find(s => s.time === shift);
  return shiftEntry?.operators[machine] || '';
};

export const shouldHighlightCell = (operator, highlightedOperator) => {
  return operator === highlightedOperator;
};

export const getContrastTextColor = (bgColor) => {
  // Calculate contrast color (black or white)
};