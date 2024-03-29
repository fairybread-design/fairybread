import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './index';

export default {
  title: 'Website/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
