import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Select, { Option } from '.';

export default {
  title: 'Design System/Select',
  component: Select,
  argTypes: {
    value: {
      options: ['1', '2', '3', 'disabled'],
      control: { type: 'select' },
    },
    defaultValue: {
      options: ['1', '2', '3', 'disabled'],
      control: { type: 'select' },
    },
    hasEmptyOption: {
      type: 'boolean',
    },
    isDisabled: {
      type: 'boolean',
    },
    onChange: {
      type: 'function',
    },
  },
  args: {
    label: 'Label',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <Option value="1">Option 1</Option>
    <Option value="2">Option 2</Option>
    <Option value="3">Option 3</Option>
    <Option value="disabled" isDisabled>
      Option 4 (disabled)
    </Option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {};

export const HasEmptyOption = Template.bind({});
HasEmptyOption.args = { hasEmptyOption: true };

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  hasEmptyOption: false,
};
