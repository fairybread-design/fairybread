import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import SunburstChart from './src/index';

export default {
  title: 'Design System/Charts/SunburstChart',
  component: SunburstChart,
  argTypes: {},
  decorators: [
    (Story) => (
      // Set height for Nivo
      <div style={{ height: '800px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SunburstChart>;

const Template: ComponentStory<typeof SunburstChart> = (args) => (
  <SunburstChart {...args} />
);

const data = {
  name: 'nivo',
  children: [
    {
      name: 'viz',
      children: [
        {
          name: 'stack',
          children: [
            {
              name: 'cchart',
              loc: 92698,
            },
            {
              name: 'xAxis',
              loc: 83448,
            },
            {
              name: 'yAxis',
              loc: 175051,
            },
            {
              name: 'layers',
              loc: 8001,
            },
          ],
        },
        {
          name: 'ppie',
          children: [
            {
              name: 'chart',
              children: [
                {
                  name: 'pie',
                  children: [
                    {
                      name: 'outline',
                      loc: 75551,
                    },
                    {
                      name: 'slices',
                      loc: 105858,
                    },
                    {
                      name: 'bbox',
                      loc: 80801,
                    },
                  ],
                },
                {
                  name: 'donut',
                  loc: 198784,
                },
                {
                  name: 'gauge',
                  loc: 191278,
                },
              ],
            },
            {
              name: 'legends',
              loc: 179740,
            },
          ],
        },
      ],
    },
    {
      name: 'colors',
      children: [
        {
          name: 'rgb',
          loc: 144622,
        },
        {
          name: 'hsl',
          loc: 15941,
        },
      ],
    },
    {
      name: 'utils',
      children: [
        {
          name: 'randomize',
          loc: 178262,
        },
        {
          name: 'resetClock',
          loc: 23443,
        },
        {
          name: 'noop',
          loc: 21935,
        },
        {
          name: 'tick',
          loc: 102797,
        },
        {
          name: 'forceGC',
          loc: 69746,
        },
        {
          name: 'stackTrace',
          loc: 163365,
        },
        {
          name: 'dbg',
          loc: 172640,
        },
      ],
    },
    {
      name: 'generators',
      children: [
        {
          name: 'address',
          loc: 109161,
        },
        {
          name: 'city',
          loc: 191899,
        },
        {
          name: 'animal',
          loc: 62193,
        },
        {
          name: 'movie',
          loc: 73412,
        },
        {
          name: 'user',
          loc: 66209,
        },
      ],
    },
    {
      name: 'set',
      children: [
        {
          name: 'clone',
          loc: 143142,
        },
        {
          name: 'intersect',
          loc: 59277,
        },
        {
          name: 'merge',
          loc: 125823,
        },
        {
          name: 'reverse',
          loc: 88963,
        },
        {
          name: 'toArray',
          loc: 46109,
        },
        {
          name: 'toObject',
          loc: 77078,
        },
        {
          name: 'fromCSV',
          loc: 34231,
        },
        {
          name: 'slice',
          loc: 38177,
        },
        {
          name: 'append',
          loc: 90196,
        },
        {
          name: 'prepend',
          loc: 181763,
        },
        {
          name: 'shuffle',
          loc: 112907,
        },
        {
          name: 'pick',
          loc: 185707,
        },
        {
          name: 'plouc',
          loc: 147301,
        },
      ],
    },
    {
      name: 'text',
      children: [
        {
          name: 'trim',
          loc: 55994,
        },
        {
          name: 'slugify',
          loc: 186387,
        },
        {
          name: 'snakeCase',
          loc: 190686,
        },
        {
          name: 'camelCase',
          loc: 21481,
        },
        {
          name: 'repeat',
          loc: 102141,
        },
        {
          name: 'padLeft',
          loc: 3914,
        },
        {
          name: 'padRight',
          loc: 166577,
        },
        {
          name: 'sanitize',
          loc: 102864,
        },
        {
          name: 'ploucify',
          loc: 52205,
        },
      ],
    },
    {
      name: 'misc',
      children: [
        {
          name: 'greetings',
          children: [
            {
              name: 'hey',
              loc: 107997,
            },
            {
              name: 'HOWDY',
              loc: 39982,
            },
            {
              name: 'aloha',
              loc: 74369,
            },
            {
              name: 'AHOY',
              loc: 9376,
            },
          ],
        },
        {
          name: 'other',
          loc: 151301,
        },
        {
          name: 'path',
          children: [
            {
              name: 'pathA',
              loc: 66511,
            },
            {
              name: 'pathB',
              children: [
                {
                  name: 'pathB1',
                  loc: 89908,
                },
                {
                  name: 'pathB2',
                  loc: 67368,
                },
                {
                  name: 'pathB3',
                  loc: 85786,
                },
                {
                  name: 'pathB4',
                  loc: 166974,
                },
              ],
            },
            {
              name: 'pathC',
              children: [
                {
                  name: 'pathC1',
                  loc: 129297,
                },
                {
                  name: 'pathC2',
                  loc: 104967,
                },
                {
                  name: 'pathC3',
                  loc: 78676,
                },
                {
                  name: 'pathC4',
                  loc: 115512,
                },
                {
                  name: 'pathC5',
                  loc: 129841,
                },
                {
                  name: 'pathC6',
                  loc: 37033,
                },
                {
                  name: 'pathC7',
                  loc: 45232,
                },
                {
                  name: 'pathC8',
                  loc: 168734,
                },
                {
                  name: 'pathC9',
                  loc: 185122,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  data,
  subTitle: 'Total repayments',
  title: '$1,257,403',
  id: 'name',
  value: 'loc',
  valueFormat: (value: number) => value.toString(),
};
