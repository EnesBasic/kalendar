import PropTypes from 'prop-types';

import React from 'react';
import WeekSelector from '../WeekSelector';
import ScheduleControls from '../ScheduleControls';
import FilterPanel from '../FilterPanel';
import ScheduleTable from '../ScheduleTable';
import OperatorManager from '../OperatorManager';
import MachineManager from '../MachineManager';
import ShiftManager from '../ShiftManager';
import ColorPicker from '../ColorPicker';
import HelpModal from '../HelpModal';
import OperatorDragPanel from '../OperatorDragPanel';
import { useSchedule } from '../../../hooks/useSchedule';
import * as S from './Schedule.styles';

function Schedule({
  weekNumber = 1,
  year = new Date().getFullYear(),
  dateRange = "Jan 1 - Jan 7 2025",
  onSave = () => {},
  onCancel = () => {},
  initialData = [],
  isLoading = false,
  error = null,
  availableWeeks = [],
  onWeekChange = () => {},
  initialOperators = [],
  onBack = () => {},
}) {
  const {
    allWeeks,
    scheduleData,
    selectedWeek,
    // ... all other state and handlers from useSchedule hook
  } = useSchedule({
    weekNumber,
    year,
    dateRange,
    initialData,
    initialOperators,
    onSave,
    onCancel,
    onWeekChange,
    onBack
  });

  return (
    <S.Wrapper>
      {isLoading && <S.LoadingIndicator />}
      {error && <S.ErrorDisplay error={error} />}
      
      {!isLoading && !error && (
        <>
          <WeekSelector 
            allWeeks={allWeeks}
            selectedWeek={selectedWeek}
            onWeekChange={handleWeekChange}
          />
          
          <ScheduleControls 
            onBack={onBack}
            onSave={handleSave}
            onCancel={handleCancel}
            isEditing={isEditing}
          />
          
          <FilterPanel
            showFilterPanel={showFilterPanel}
            activeFilters={activeFilters}
            // ... other props
          />
          
          <ScheduleTable
            scheduleData={scheduleData}
            // ... other props
          />
          
          <OperatorManager
            showOperatorManager={showOperatorManager}
            // ... other props
          />
          
          <MachineManager
            showMachineManager={showMachineManager}
            // ... other props
          />
          
          <ShiftManager
            showShiftColorManager={showShiftColorManager}
            // ... other props
          />
          
          <ColorPicker
            showColorPicker={showColorPicker}
            // ... other props
          />
          
          <HelpModal
            showHelpModal={showHelpModal}
            // ... other props
          />
          
          {isEditing && (
            <OperatorDragPanel
              operators={operators}
              // ... other props
            />
          )}
        </>
      )}
    </S.Wrapper>
  );
}

export default Schedule;
// PropTypes validation
Schedule.propTypes = {
  // Add prop validation here
};
