import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Statistic from './index';

export default {
  title: 'Design System/Statistic',
  component: Statistic,
} as ComponentMeta<typeof Statistic>;

const Template: ComponentStory<typeof Statistic> = (args) => (
  <Statistic {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Your repayments',
  children: '$235,394.64',
  subtitle: 'per month',
};

export const WithFormattedNumber = Template.bind({});
WithFormattedNumber.args = {
  title: 'Your repayments',
  children: '$235,394.64',
  subtitle: 'per month',
};
