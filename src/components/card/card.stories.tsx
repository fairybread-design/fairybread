import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './index';
import Text from '../text';

export default {
  title: 'Design System/Card',
  component: Card,
  argTypes: {},
  args: {
    title: 'Oh no, my favorite window!',
    children: <Text>Hello</Text>,
    image: (
      <img
        src="https://i.pinimg.com/736x/0a/6b/18/0a6b1810658fc8fea23038f961435151.jpg"
        alt=""
      />
    ),
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
