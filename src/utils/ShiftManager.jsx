import React from 'react';
import {
  ShiftManagerWrapper,
  ShiftHeader,
  ShiftGrid,
  ShiftCard,
  ShiftTitle,
  ShiftTime,
  ShiftInfo,
  ShiftActions,
  ActionButton
} from './ShiftManager.styles';

const ShiftManager = ({ shifts }) => {
  return (
    <ShiftManagerWrapper>
      <ShiftHeader>
        <h2>Shift Management</h2>
        <button>Add Shift</button>
      </ShiftHeader>

      <ShiftGrid>
        {shifts?.map(shift => (
          <ShiftCard 
            key={shift.id} 
            $isActive={shift.isActive}
            $color={shift.color}
          >
            <ShiftTitle>
              {shift.name}
            </ShiftTitle>
            <ShiftTime>
              {shift.startTime} - {shift.endTime}
            </ShiftTime>
            <ShiftInfo>
              {shift.operatorsCount} operators assigned
            </ShiftInfo>
            <ShiftActions>
              <ActionButton $variant="edit">
                Edit
              </ActionButton>
              <ActionButton $variant="delete">
                Delete
              </ActionButton>
            </ShiftActions>
          </ShiftCard>
        ))}
      </ShiftGrid>
    </ShiftManagerWrapper>
  );
};

export default ShiftManager;