import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/Button/Button';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage';

// Import your existing components
import ScheduleControls from '../ScheduleControls/ScheduleControls.jsx';
import WeekSelector from '../WeekSelector/WeekSelector.jsx';
import ScheduleTable from '../ScheduleTable/ScheduleTable.jsx';
import FilterPanel from '../FilterPanel/FilterPanel.jsx';
import HelpModal from '../HelpModal/HelpModal.jsx';
// Add more as needed

// ...existing code for useScheduleData...

export const ScheduleMain = () => {
  const { data, loading, error, refresh } = useScheduleData();
  const [viewMode, setViewMode] = useState<'daily' | 'weekly'>('weekly');
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="schedule-main">
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
          data={data} 
          viewMode={viewMode}
          loading={loading}
        />
      )}

      {/* Help modal */}
      {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}
    </div>
  );
};
