import PropTypes from 'prop-types';

import React from 'react';
import { formatDropdownText, formatHeaderDate } from '../../utils/dateUtils';
import * as S from './WeekSelector.styles';

function WeekSelector({ allWeeks, selectedWeek, onWeekChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleWeekChange = (weekNum, yr) => {
    const selectedWeekData = allWeeks.find(
      (week) => week.weekNumber === weekNum && week.year === yr
    );
    if (selectedWeekData) {
      onWeekChange(selectedWeekData);
      setIsDropdownOpen(false);
    }
  };

  return (
    <S.Container>
      <S.SelectorButton 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {formatDropdownText(selectedWeek.weekNumber, selectedWeek.dateRange)}
        <S.DropdownIcon className="fas fa-chevron-down" />
      </S.SelectorButton>

      {isDropdownOpen && (
        <S.DropdownMenu>
          {allWeeks.map((week) => (
            <S.DropdownItem
              key={`${week.weekNumber}-${week.year}`}
              onClick={() => handleWeekChange(week.weekNumber, week.year)}
            >
              {formatDropdownText(week.weekNumber, week.dateRange)}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.Container>
  );
}

export default WeekSelector;
// PropTypes validation
WeekSelector.propTypes = {
  // Add prop validation here
};
