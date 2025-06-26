import { useState } from 'react';
import MachineManager from '../MachineManager/MachineManager.jsx';
import OperatorManager from '../OperatorManager/OperatorManager.jsx';
import ShiftManager from '../ShiftManager/ShiftManager.jsx';
import ScheduleControls from '../ScheduleControls/ScheduleControls.jsx';
import FilterPanel from '../FilterPanel/FilterPanel.jsx';
import WeekSelector from '../WeekSelector/WeekSelector.jsx';
import ScheduleTable from '../ScheduleTable/ScheduleTable.jsx';
import HelpModal from '../HelpModal/HelpModal.jsx';
import { Button } from '../../ui/Button/Button';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage';
import { useScheduleData } from '../../../hooks/useScheduleData';

// Example placeholder data
const machines = ['Machine 1', 'Machine 2'];
const shifts = ['Morning', 'Evening'];
const operators = ['Alice', 'Bob'];

export const ScheduleMain = () => {
  const { data, loading, error, refresh } = useScheduleData();
  const [viewMode, setViewMode] = useState('weekly');
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="schedule-main" style={{ display: 'flex', height: '100vh' }}>
      {/* Left Sidebar */}
      <div style={{ width: '220px', borderRight: '1px solid #eee', padding: '1rem', background: '#fafafa' }}>
        <MachineManager
          showMachineManager={true}
          machinesList={machines}
          machineColors={{}}
          newMachineName=""
          newMachineColor="#cccccc"
          editingMachine={null}
          editedMachineName=""
          machineError={null}
          onAddMachine={() => {}}
          onRemoveMachine={() => {}}
          onEditMachine={() => {}}
          onSaveMachineEdit={() => {}}
          onCancelMachineEdit={() => {}}
          onMachineColorChange={() => {}}
          onToggleMachineManager={() => {}}
          onShowHelpModal={() => {}}
        />
        <OperatorManager
          showOperatorManager={true}
          operatorsList={operators}
          operatorColors={{}}
          newOperatorName=""
          newOperatorColor="#cccccc"
          editingOperator={null}
          editedOperatorName=""
          operatorError={null}
          onAddOperator={() => {}}
          onRemoveOperator={() => {}}
          onEditOperator={() => {}}
          onSaveOperatorEdit={() => {}}
          onCancelOperatorEdit={() => {}}
          onOperatorColorChange={() => {}}
          onToggleOperatorManager={() => {}}
          onShowHelpModal={() => {}}
        />
        <ShiftManager
          showShiftManager={true}
          shiftsList={shifts}
          shiftColors={{}}
          newShiftName=""
          newShiftColor="#cccccc"
          editingShift={null}
          editedShiftName=""
          shiftError={null}
          onAddShift={() => {}}
          onRemoveShift={() => {}}
          onEditShift={() => {}}
          onSaveShiftEdit={() => {}}
          onCancelShiftEdit={() => {}}
          onShiftColorChange={() => {}}
          onToggleShiftManager={() => {}}
          onShowHelpModal={() => {}}
        />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '1rem' }}>
        {/* Controls at the top */}
        <div className="controls">
          <Button onClick={refresh} disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh'}
          </Button>
          <Button 
            variant="secondary"
            onClick={() => setViewMode(viewMode === 'daily' ? 'weekly' : 'daily')}
            disabled={loading}
          >
            Toggle View
          </Button>
          <Button 
            variant="secondary"
            onClick={() => setHelpOpen(true)}
          >
            Help
          </Button>
        </div>

        {/* Schedule controls and filters */}
        <ScheduleControls />
        <FilterPanel />
        <WeekSelector />

        {/* Main schedule table */}
        {error ? (
          <ErrorMessage 
            message={error}
            onRetry={refresh}
          />
        ) : (
          <ScheduleTable
            scheduleData={data}
            machines={machines}
            shifts={shifts}
            operators={operators}
            operatorColors={{}}
            shiftColors={{}}
            isEditing={false}
            activeFilters={0}
            dateFilter={null}
            shiftFilter={null}
            operatorFilter={null}
            machineFilter={null}
            onCellChange={() => {}}
            onShiftChange={() => {}}
            highlightedOperator={null}
            dragTarget={null}
            onDragEnter={() => {}}
            onDrop={() => {}}
            loading={loading}
            viewMode={viewMode}
          />
        )}

        {/* Help modal */}
        {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}
      </div>
    </div>
  );
};

import React from "react";
import { ScheduleMain } from "./components/schedule/ScheduleMain/ScheduleMain";

function App() {
  return <ScheduleMain />;
}

export default App;
