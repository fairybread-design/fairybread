import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import LineChart from './index';

export default {
  title: 'Design System/Charts/LineChart',
  component: LineChart,
  argTypes: {},
  decorators: [
    (Story) => (
      // Set height for Nivo
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = (args) => (
  <LineChart {...args} />
);

const data = [
  {
    id: 'japan',
    color: 'hsl(225, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 269,
      },
      {
        x: 'helicopter',
        y: 84,
      },
      {
        x: 'boat',
        y: 111,
      },
      {
        x: 'train',
        y: 258,
      },
      {
        x: 'subway',
        y: 298,
      },
      {
        x: 'bus',
        y: 225,
      },
      {
        x: 'car',
        y: 52,
      },
      {
        x: 'moto',
        y: 27,
      },
      {
        x: 'bicycle',
        y: 87,
      },
      {
        x: 'horse',
        y: 6,
      },
      {
        x: 'skateboard',
        y: 99,
      },
      {
        x: 'others',
        y: 116,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(291, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 6,
      },
      {
        x: 'helicopter',
        y: 94,
      },
      {
        x: 'boat',
        y: 290,
      },
      {
        x: 'train',
        y: 36,
      },
      {
        x: 'subway',
        y: 76,
      },
      {
        x: 'bus',
        y: 147,
      },
      {
        x: 'car',
        y: 248,
      },
      {
        x: 'moto',
        y: 174,
      },
      {
        x: 'bicycle',
        y: 108,
      },
      {
        x: 'horse',
        y: 186,
      },
      {
        x: 'skateboard',
        y: 279,
      },
      {
        x: 'others',
        y: 211,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(246, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 33,
      },
      {
        x: 'helicopter',
        y: 75,
      },
      {
        x: 'boat',
        y: 186,
      },
      {
        x: 'train',
        y: 47,
      },
      {
        x: 'subway',
        y: 189,
      },
      {
        x: 'bus',
        y: 27,
      },
      {
        x: 'car',
        y: 213,
      },
      {
        x: 'moto',
        y: 244,
      },
      {
        x: 'bicycle',
        y: 255,
      },
      {
        x: 'horse',
        y: 30,
      },
      {
        x: 'skateboard',
        y: 162,
      },
      {
        x: 'others',
        y: 142,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(62, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 29,
      },
      {
        x: 'helicopter',
        y: 48,
      },
      {
        x: 'boat',
        y: 141,
      },
      {
        x: 'train',
        y: 298,
      },
      {
        x: 'subway',
        y: 242,
      },
      {
        x: 'bus',
        y: 55,
      },
      {
        x: 'car',
        y: 140,
      },
      {
        x: 'moto',
        y: 149,
      },
      {
        x: 'bicycle',
        y: 212,
      },
      {
        x: 'horse',
        y: 59,
      },
      {
        x: 'skateboard',
        y: 222,
      },
      {
        x: 'others',
        y: 57,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(142, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 273,
      },
      {
        x: 'helicopter',
        y: 38,
      },
      {
        x: 'boat',
        y: 224,
      },
      {
        x: 'train',
        y: 90,
      },
      {
        x: 'subway',
        y: 63,
      },
      {
        x: 'bus',
        y: 140,
      },
      {
        x: 'car',
        y: 224,
      },
      {
        x: 'moto',
        y: 124,
      },
      {
        x: 'bicycle',
        y: 213,
      },
      {
        x: 'horse',
        y: 179,
      },
      {
        x: 'skateboard',
        y: 112,
      },
      {
        x: 'others',
        y: 116,
      },
    ],
  },
];

export const Default = Template.bind({});
Default.args = {
  data,
};
