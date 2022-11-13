import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from './index';

export default {
  title: 'Design System/Badge',
  component: Badge,
  argTypes: {
    appearance: {
      options: ['success', 'danger', 'warning', 'information'],
      control: { type: 'select' },
    },
  },
  args: {
    appearance: 'success',
    children: '0',
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {};
