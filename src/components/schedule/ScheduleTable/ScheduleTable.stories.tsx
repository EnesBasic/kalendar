// ScheduleTable.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ScheduleTable from './ScheduleTable';
// If the file exists at src/types/scheduleTypes.ts, keep this import.
// Otherwise, update the path to the correct location, for example:
import { ScheduleEntry } from '../../../types/scheduleTypes';
// Or create the file if it doesn't exist.

// Import ScheduleTableProps from the ScheduleTable component or define it here if not exported
// Define ScheduleTableProps here if not exported from ScheduleTable
type ScheduleTableProps = {
  data: ScheduleEntry[];
  viewMode: 'daily' | 'weekly';
  loading: boolean;
};

const mockData: ScheduleEntry[] = [
  // Same as test data...
];

export default {
  title: 'Components/Schedule/ScheduleTable',
  component: ScheduleTable,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn<ScheduleTableProps> = (args) => <ScheduleTable scheduleData={undefined} machines={undefined} shifts={undefined} operators={undefined} operatorColors={undefined} shiftColors={undefined} isEditing={undefined} activeFilters={undefined} dateFilter={undefined} shiftFilter={undefined} operatorFilter={undefined} machineFilter={undefined} onCellChange={undefined} onShiftChange={undefined} highlightedOperator={undefined} dragTarget={undefined} onDragEnter={undefined} onDrop={undefined} {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: mockData,
  viewMode: 'daily',
  loading: false
};

export const Loading = Template.bind({});
Loading.args = {
  data: [],
  viewMode: 'daily',
  loading: true
};

export const WeeklyView = Template.bind({});
WeeklyView.args = {
  data: mockData,
  viewMode: 'weekly',
  loading: false
};