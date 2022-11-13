import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import PopupConfirm from './src/index';
import styled from 'styled-components';

export default {
  title: 'Design System/PopupConfirm',
  component: PopupConfirm,
  argTypes: {
    onCancel: { action: 'cancelled' },
    onConfirm: { action: 'confirmed' },
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
} as ComponentMeta<typeof PopupConfirm>;

const Template: ComponentStory<typeof PopupConfirm> = (args) => {
  return (
    <Centered>
      <PopupConfirm {...args}>
        <button type="button">Hover me</button>
      </PopupConfirm>
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
Default.args = {
  children: <button type="button">Hover me</button>,
};
