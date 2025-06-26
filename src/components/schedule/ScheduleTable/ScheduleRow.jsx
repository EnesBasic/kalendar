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
            onChange={/* handler */}
          />
        ) : (
          formatShiftTime(shift)
        )}
      </S.ShiftCell>

      {machines.map(machine => (
        <S.OperatorCell
          key={`${dateInfo.date}-${shift}-${machine}`}
          isHighlighted={/* condition */}
          isDropTarget={/* condition */}
        >
          {/* Cell content */}
        </S.OperatorCell>
      ))}
    </S.TableRow>
  );
}