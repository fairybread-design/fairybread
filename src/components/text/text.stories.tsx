import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from './index';

export default {
  title: 'Design System/Text',
  component: Text,
  argTypes: {
    noMarginTop: {
      control: { type: 'boolean' },
    },
    noMarginBottom: {
      control: { type: 'boolean' },
    },
  },
  args: {
    level: 1,
    noMarginTop: false,
    noMarginBottom: false,
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a paragraph',
};
