import React from 'react';
import {
  ControlsContainer,
  ControlGroup,
  ControlButton,
  ViewToggle,
  ToggleButton,
  DateDisplay
} from './ScheduleControls.styles';

const ScheduleControls = ({ 
  viewMode, 
  onViewChange,
  onPrevious,
  onNext,
  currentDate 
}) => {
  return (
    <ControlsContainer>
      <ControlGroup>
        <ControlButton onClick={onPrevious}>
          &larr; Previous
        </ControlButton>
        <DateDisplay>
          {currentDate}
        </DateDisplay>
        <ControlButton onClick={onNext}>
          Next &rarr;
        </ControlButton>
      </ControlGroup>

      <ViewToggle>
        <ToggleButton 
          $active={viewMode === 'day'} 
          onClick={() => onViewChange('day')}
        >
          Day
        </ToggleButton>
        <ToggleButton 
          $active={viewMode === 'week'} 
          onClick={() => onViewChange('week')}
        >
          Week
        </ToggleButton>
        <ToggleButton 
          $active={viewMode === 'month'} 
          onClick={() => onViewChange('month')}
        >
          Month
        </ToggleButton>
      </ViewToggle>
    </ControlsContainer>
  );
};

export default ScheduleControls;