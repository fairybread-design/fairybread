import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import DatePicker from '.';

export default {
  title: 'Design System/DatePicker',
  component: DatePicker,
  args: {
    inline: false,
  },
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onCalendarClose: { action: 'calendar closed' },
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Date',
};
