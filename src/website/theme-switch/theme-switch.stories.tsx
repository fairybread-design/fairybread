import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeSwitch from './index';

export default {
  title: 'Website/ThemeSwitch',
  component: ThemeSwitch,
  args: {},
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => (
  <ThemeSwitch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
