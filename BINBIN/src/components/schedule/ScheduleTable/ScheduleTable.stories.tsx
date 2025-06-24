import React from 'react';
import { Story, Meta } from '@storybook/react';
import ScheduleTable, { ScheduleTableProps } from './ScheduleTable';

export default {
  title: 'Schedule/ScheduleTable',
  component: ScheduleTable,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Template: Story<ScheduleTableProps> = (args) => <ScheduleTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  scheduleData: [
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
  ],
  machines: ['M58-J-467', 'M53-E-929'],
  shifts: ['08.00-16.00'],
  isEditing: false
};

export const EditingMode = Template.bind({});
EditingMode.args = {
  ...Default.args,
  isEditing: true
};