import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from './index';

export default {
  title: 'Design System/Tag',
  component: Tag,
  argTypes: {
    appearance: {
      options: ['success', 'danger', 'warning', 'information'],
      control: { type: 'radio' },
    },
  },
  args: {
    appearance: 'information',
    children: 'Complete',
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {};
