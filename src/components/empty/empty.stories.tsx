import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Empty from './index';

export default {
  title: 'Design System/Empty',
  component: Empty,
  args: {
    title: '',
  },
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Default = Template.bind({});
Default.args = {};
