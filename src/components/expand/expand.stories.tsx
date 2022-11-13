import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Expand from './index';

export default {
  title: 'Design System/Expand',
  component: Expand,
  args: {
    title: 'Title',
    children: 'Some content',
  },
} as ComponentMeta<typeof Expand>;

const Template: ComponentStory<typeof Expand> = (args) => <Expand {...args} />;

export const Default = Template.bind({});
Default.args = {};
