import PropTypes from 'prop-types';

import React from 'react';
import * as S from './ScheduleTable.styles';

function ScheduleRow({
  dateInfo,
  shift,
  shiftIndex,
  machines,
  isEditing,
  // ... other props
}) {
  return (
    <S.TableRow 
      isWeekend={dateInfo.day === "S" || dateInfo.day === "N"}
      shiftColor={getShiftColor(shift)}
    >
      {shiftIndex === 0 && (
        <S.DateCell rowSpan={shifts.length}>
          {dateInfo.date}
        </S.DateCell>
      )}
      
      {shiftIndex === 0 && (
        <S.DayCell rowSpan={shifts.length}>
          {dateInfo.day}
        </S.DayCell>
      )}

      <S.ShiftCell shiftColor={getShiftColor(shift)}>
        {isEditing ? (
          <ShiftSelect 
            shift={shift}
            onChange={() => {}}
          />
        ) : (
          formatShiftTime(shift)
        )}
      </S.ShiftCell>

      {machines.map(machine => (
        <S.OperatorCell
          key={`${dateInfo.date}-${shift}-${machine}`}
          isHighlighted={false}
          isDropTarget={false}
        >
          {/* Cell content */}
        </S.OperatorCell>
      ))}
    </S.TableRow>
  );
}
// PropTypes validation
ScheduleRow.propTypes = {
  // Add prop validation here
};
