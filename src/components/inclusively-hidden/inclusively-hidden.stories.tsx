import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import InclusivelyHidden from './index';

export default {
  title: 'Design System/InclusivelyHidden',
  component: InclusivelyHidden,
} as ComponentMeta<typeof InclusivelyHidden>;

const Template: ComponentStory<typeof InclusivelyHidden> = (args) => (
  <InclusivelyHidden {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hidden',
};
