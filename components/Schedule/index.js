"use client";
import React from "react";
import ScheduleTable from "./ScheduleTable";
import OperatorManager from "./OperatorManager";
import ShiftManager from "./ShiftManager";
import MachineManager from "./MachineManager";
import { useOperators } from "./hooks/useOperators";
import { useMachines } from "./hooks/useMachines";
import { useShifts } from "./hooks/useShifts";
import { useSchedule } from "./hooks/useSchedule";
import { dayAbbreviations } from "./constants/days";

function MainComponent({
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
  // 1. Schedule core logic
  const { 
    scheduleData, 
    weekDates,
    handleCellChange,
    handleWeekChange,
    // ... other schedule methods
  } = useSchedule({ 
    initialData, 
    weekNumber, 
    year, 
    dateRange,
    onWeekChange 
  });

  // 2. Operators logic
  const operators = useOperators(initialOperators);

  // 3. Machines logic
  const machines = useMachines();

  // 4. Shifts logic
  const shifts = useShifts();

  // 5. UI state (local to component)
  const [isEditing, setIsEditing] = React.useState(false);
  const [showOperatorManager, setShowOperatorManager] = React.useState(false);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay error={error} />;

  return (
    <div className="w-full bg-[#1D1D1F] rounded-lg shadow-lg overflow-hidden">
      {/* Header Section */}
      <ScheduleHeader 
        weekDates={weekDates}
        isEditing={isEditing}
        onEditToggle={() => setIsEditing(!isEditing)}
      />
      
      {/* Main Table */}
      <ScheduleTable
        scheduleData={scheduleData}
        operators={operators}
        machines={machines}
        shifts={shifts}
        isEditing={isEditing}
        onCellChange={handleCellChange}
      />
      
      {/* Management Panels */}
      <OperatorManager 
        {...operators} 
        isOpen={showOperatorManager}
        onToggle={() => setShowOperatorManager(!showOperatorManager)}
      />
      
      {/* ... other managers */}
    </div>
  );
}

export default MainComponent;