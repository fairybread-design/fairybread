import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'subtle'],
      control: { type: 'radio' },
    },
    size: {
      options: ['md', 'sm'],
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'Button',
    size: 'md',
    isFullWidth: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  appearance: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
};

export const Subtle = Template.bind({});
Subtle.args = {
  appearance: 'subtle',
};
