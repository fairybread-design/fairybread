import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Fieldset from './index';

export default {
  title: 'Design System/Fieldset',
  component: Fieldset,
  args: {
    title: '',
  },
} as ComponentMeta<typeof Fieldset>;

const Template: ComponentStory<typeof Fieldset> = (args) => (
  <Fieldset {...args} />
);

export const Default = Template.bind({});
Default.args = {};
