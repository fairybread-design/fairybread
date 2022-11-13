import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './index';

export default {
  title: 'Design System/Switch',
  component: Switch,
  args: {
    hideLabel: false,
    id: 'switch',
    label: 'Switch me',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      defaultValue: 'md',
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  defaultChecked: false,
};

export const Controlled = Template.bind({});
Controlled.args = {
  checked: false,
};
