import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Section from './index';

export default {
  title: 'Website/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Default = Template.bind({});
Default.args = {};
