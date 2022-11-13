import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import SpinnerSection from './spinner-section';

export default {
  title: 'Design System/Spinner/SpinnerSection',
  component: SpinnerSection,
  args: {
    isLoading: true,
    children: (
      <>
        <p>Some content</p>
        <p>This content is faded out while loading</p>
      </>
    ),
  },
} as ComponentMeta<typeof SpinnerSection>;

const Template: ComponentStory<typeof SpinnerSection> = (args) => (
  <SpinnerSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
