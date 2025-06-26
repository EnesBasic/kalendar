// ScheduleTable.tsx with sorting and filtering
import React, { useMemo, useState } from 'react';
// import { ScheduleEntry } from '../../types/scheduleTypes';
import TextInput from '../../ui/TextInput/TextInput';

interface ScheduleTableProps {
  data: ScheduleEntry[];
  viewMode: 'daily' | 'weekly';
  loading: boolean;
}

export const ScheduleTable = ({ data, viewMode, loading }: ScheduleTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const filteredData = useMemo(() => {
    return data.filter(entry => 
      entry.machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.operator.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  // Helper to get nested value by dot notation
  const getValueByKey = (obj: any, key: string) => {
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = getValueByKey(a, sortConfig.key);
      const bValue = getValueByKey(b, sortConfig.key);

      if (aValue === bValue) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      if (sortConfig.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filteredData, sortConfig]);
  
  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="schedule-table-container">
      <TextInput
        placeholder="Search machines or operators..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {loading ? (
        <div>Loading data...</div>
      ) : (
        <table className="schedule-table">
          <thead>
            <tr>
              <th onClick={() => requestSort('time')}>Time</th>
              <th onClick={() => requestSort('machine.name')}>Machine</th>
              <th onClick={() => requestSort('operator.name')}>Operator</th>
              <th onClick={() => requestSort('shift.name')}>Shift</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((entry) => (
              <tr key={`${entry.id}-${entry.time}`}>
                <td>{entry.time}</td>
                <td>{entry.machine.name}</td>
                <td>{entry.operator.name}</td>
                <td>{entry.shift.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// ScheduleEntry interface
export interface ScheduleEntry {
  id: string;
  time: string;
  machine: { name: string };
  operator: { name: string };
  shift: { name: string };
}