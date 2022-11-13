import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import WrapperPrimitive from './wrapper-primitive';

export default {
  title: 'Design System/Input/WrapperPrimitive',
  component: WrapperPrimitive,
} as ComponentMeta<typeof WrapperPrimitive>;

const Template: ComponentStory<typeof WrapperPrimitive> = (args) => (
  <WrapperPrimitive {...args} />
);

export const Default = Template.bind({});
Default.args = {
  prefix: '$',
  suffix: 'AUD',
};
