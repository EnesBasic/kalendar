// ScheduleTable.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ScheduleTable } from './ScheduleTable';
import { ScheduleEntry } from '../../types/scheduleTypes';

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

const Template: Story<ScheduleTableProps> = (args) => <ScheduleTable {...args} />;

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