import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import InputPrimitive from './input-primitive';

export default {
  title: 'Design System/Input/Primitive',
  component: InputPrimitive,
} as ComponentMeta<typeof InputPrimitive>;

const Template: ComponentStory<typeof InputPrimitive> = (args) => (
  <InputPrimitive {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'I am an input',
  placeholder: 'Start typing...',
  isDisabled: false,
  isPrefixed: false,
  isSuffixed: false,
  inputMode: 'text',
};
