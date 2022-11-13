import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import TooltipPrimitive from './tooltip-primitive';
import styled from 'styled-components';
import { PopperElement, ArrowElement, LabelElement } from './components';

export default {
  title: 'Design System/Tooltip/Primitive',
  component: TooltipPrimitive,
  args: {
    label: 'Primitive',
    trigger: 'click',
  },
  argTypes: {
    trigger: {
      options: ['click', 'hover'],
      control: 'radio',
    },
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
} as ComponentMeta<typeof TooltipPrimitive>;

const Template: ComponentStory<typeof TooltipPrimitive> = (args) => {
  return (
    <Centered>
      <TooltipPrimitive
        {...args}
        components={{
          popper: PopperElement,
          arrow: ArrowElement,
          label: LabelElement,
        }}
      >
        <button type="button">Reference element</button>
      </TooltipPrimitive>
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
