import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from './src/index';
import styled from 'styled-components';

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
  args: {
    label: 'Tooltip',
  },
  argTypes: {
    placement: {
      options: [
        'top',
        'bottom',
        'right',
        'left',
        'auto',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
        'auto',
        'auto-start',
        'auto-end',
      ],
      control: 'select',
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <Centered>
      <Tooltip {...args}>
        <button type="button">Hover me</button>
      </Tooltip>
    </Centered>
  );
};

// Center story to create room for tooltip placements
const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Default = Template.bind({});
Default.args = {};
