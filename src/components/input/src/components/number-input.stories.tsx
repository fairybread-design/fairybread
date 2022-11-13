import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import NumberInput from './number-input';

export default {
  title: 'Design System/Input/Number',
  component: NumberInput,
  argTypes: {
    onValueChange: { action: 'value changed' },
    onChange: { action: 'changed' },
  },
  args: {
    inputMode: 'numeric',
  },
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const Currency = Template.bind({});
Currency.args = {
  value: 684280.64,
  preset: 'currency',
  inlinePrefix: '$',
  label: 'Amount',
  suffix: 'AUD',
  inputMode: 'decimal',
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
  value: 415848954,
  label: 'Phone number',
  id: 'phone-number',
  numberFormat: {
    type: 'tel',
    format: '### ### ###',
  },
  prefix: '+61',
  inputMode: 'tel',
};
