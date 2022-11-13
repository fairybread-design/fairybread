import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Page from './index';

export default {
  title: 'Website/Page',
  component: Page,
  args: {
    children: <div>Hello</div>,
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};
