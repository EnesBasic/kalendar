// ScheduleTable.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ScheduleTable } from './ScheduleTable';
import { ScheduleEntry } from '../../types/scheduleTypes';

const mockData: ScheduleEntry[] = [
  {
    id: '1',
    time: '08:00',
    machine: { id: 'm1', name: 'CNC-1', status: 'active' },
    operator: { id: 'o1', name: 'John Doe', qualification: 'A' },
    shift: { id: 's1', name: 'Morning', startTime: '06:00', endTime: '14:00' }
  },
  // Add more test entries...
];

describe('ScheduleTable', () => {
  it('renders loading state', () => {
    render(<ScheduleTable data={[]} viewMode="daily" loading={true} />);
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  it('sorts by machine name', () => {
    render(<ScheduleTable data={mockData} viewMode="daily" loading={false} />);
    fireEvent.click(screen.getByText('Machine'));
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('CNC-1');
  });

  it('filters by search term', () => {
    render(<ScheduleTable data={mockData} viewMode="daily" loading={false} />);
    fireEvent.change(screen.getByPlaceholderText('Search machines or operators...'), {
      target: { value: 'John' }
    });
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});