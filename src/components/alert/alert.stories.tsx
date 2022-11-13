import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from './index';

export default {
  title: 'Design System/Alert',
  component: Alert,
  argTypes: {
    appearance: {
      options: ['success', 'danger', 'warning', 'information'],
      control: { type: 'radio' },
    },
    size: {
      options: ['md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
  },
  args: {
    isInline: true,
    appearance: 'information',
    title: 'Title',
    children: 'The message that says some things about stuff',
    size: 'md',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {};
