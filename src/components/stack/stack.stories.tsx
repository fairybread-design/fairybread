import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../button';

import Stack from './index';

export default {
  title: 'Design System/Stack',
  component: Stack,
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
    </>
  ),
  direction: 'horizontal',
  size: 'md',
};
