import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './index';

export default {
  title: 'Design System/List',
  component: List,
  argTypes: {
    type: {
      options: ['ul', 'ol'],
      control: 'radio',
    },
  },
  args: {
    type: 'ul',
    children: (
      <>
        <List.Item>One</List.Item>
        <List.Item>Two</List.Item>
        <List.Item>Three</List.Item>
      </>
    ),
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {};
