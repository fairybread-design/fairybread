import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ExpandPrimitive from './expand-primitive';

export default {
  title: 'Design System/Expand/ExpandPrimitive',
  component: ExpandPrimitive,
  args: {
    trigger: ({ onClick, isOpen }) => (
      <button type="button" onClick={onClick}>
        Trigger {isOpen ? 'open' : 'closed'}
      </button>
    ),
    title: 'Title',
    children: 'Some content',
  },
} as ComponentMeta<typeof ExpandPrimitive>;

const Template: ComponentStory<typeof ExpandPrimitive> = (args) => (
  <ExpandPrimitive {...args} />
);

export const Default = Template.bind({});
Default.args = {};

const ControlledTemplate: ComponentStory<typeof ExpandPrimitive> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <p>This trigger is not part of the primitive</p>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        External trigger
      </button>
      <ExpandPrimitive isOpen={isOpen} {...args} />
    </>
  );
};

export const Controlled = ControlledTemplate.bind({});
Controlled.args = {
  trigger: undefined,
};
