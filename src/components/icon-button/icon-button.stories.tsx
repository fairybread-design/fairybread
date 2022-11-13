import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  faQuestionCircle,
  faUpRightFromSquare,
} from '@fortawesome/sharp-solid-svg-icons';

import IconButton from './index';

export default {
  title: 'Design System/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: 'select',
    },
  },
  args: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

export const QuestionMark = Template.bind({});
QuestionMark.args = {
  label: 'Help',
  icon: faQuestionCircle,
};

export const Share = Template.bind({});
Share.args = {
  label: 'Share',
  icon: faUpRightFromSquare,
};
