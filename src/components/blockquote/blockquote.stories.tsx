import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Blockquote from './index';

export default {
  title: 'Design System/Blockquote',
  component: Blockquote,
  args: {
    children: 'The quote that says some things about stuff',
  },
} as ComponentMeta<typeof Blockquote>;

const Template: ComponentStory<typeof Blockquote> = (args) => (
  <Blockquote {...args} />
);

export const Default = Template.bind({});
Default.args = {};
