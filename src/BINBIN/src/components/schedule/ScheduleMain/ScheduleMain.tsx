import React from 'react';
import { ScheduleTable } from './ScheduleTable';
import { Button } from '../ui/Button';
import { useScheduleData } from '../../hooks/useScheduleData';
import { ErrorMessage } from '../ui/ErrorMessage';

export const ScheduleMain = () => {
  const { data, loading, error, refresh } = useScheduleData();
  const [viewMode, setViewMode] = useState<'daily' | 'weekly'>('daily');

  return (
    <div className="schedule-main">
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
      </div>
      
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
    </div>
  );
};