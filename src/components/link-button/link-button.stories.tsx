import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import LinkButton from './index';

export default {
  title: 'Design System/LinkButton',
  component: LinkButton,
  argTypes: {
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'Link button',
  },
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  appearance: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
};
