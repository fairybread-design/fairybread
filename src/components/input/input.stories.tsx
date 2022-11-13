import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

export default {
  title: 'Design System/Input',
  component: Input,
  args: {
    label: 'Label',
    id: 'an-input',
    placeholder: 'Start typing...',
    inputMode: 'text',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'I am disabled',
  isDisabled: true,
};

export const PrefixSuffix = Template.bind({});
PrefixSuffix.storyName = 'Prefix / suffix';
PrefixSuffix.args = {
  defaultValue: '600,000',
  prefix: '$',
  suffix: 'AUD',
};

export const TextArea = Template.bind({});
TextArea.args = {
  defaultValue: 'Type some text in here you dum dum',
  label: 'Textarea',
  mode: 'textarea',
  rows: 10,
};
