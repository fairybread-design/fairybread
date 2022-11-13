import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../button';

import Container from './index';

export default {
  title: 'Design System/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Button isFullWidth>I am contained to a maximum width</Button>
    </>
  ),
};
