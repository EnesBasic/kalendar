import React from 'react';
import { render, screen } from '@testing-library/react';
import ScheduleTable from './ScheduleTable';

const mockData = [
  {
    date: '01.01',
    day: 'P',
    shifts: [
      {
        time: '08.00-16.00',
        operators: {
          'M58-J-467': 'Operator 1',
          'M53-E-929': 'Operator 2'
        }
      }
    ]
  }
];

describe('ScheduleTable', () => {
  it('renders without crashing', () => {
    render(
      <ScheduleTable
        scheduleData={mockData}
        machines={['M58-J-467', 'M53-E-929']}
        shifts={['08.00-16.00']}
        isEditing={false}
      />
    );
    expect(screen.getByText('01.01')).toBeInTheDocument();
  });

  it('displays correct operator assignments', () => {
    render(
      <ScheduleTable
        scheduleData={mockData}
        machines={['M58-J-467', 'M53-E-929']}
        shifts={['08.00-16.00']}
        isEditing={false}
      />
    );
    expect(screen.getByText('Operator 1')).toBeInTheDocument();
    expect(screen.getByText('Operator 2')).toBeInTheDocument();
  });
});