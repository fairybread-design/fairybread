import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from './index';

export default {
  title: 'Design System/Heading',
  component: Heading,
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
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
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a heading',
};

const TemplateAll: ComponentStory<typeof Heading> = (args) => (
  <>
    <Heading level={1}>Heading level 1</Heading>
    <Heading level={2}>Heading level 2</Heading>
    <Heading level={3}>Heading level 3</Heading>
    <Heading level={4}>Heading level 4</Heading>
    <Heading level={5}>Heading level 5</Heading>
    <Heading level={6}>Heading level 6</Heading>
  </>
);

export const All = TemplateAll.bind({});
