import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import VirtualizedTable from './virtualized-table';

export default {
  title: 'Design System/Table/Virtualized',
  component: VirtualizedTable,
  decorators: [
    (Story) => (
      // Set height for AutoSizer
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof VirtualizedTable>;

const Template: ComponentStory<typeof VirtualizedTable> = (args) => (
  <VirtualizedTable {...args} />
);

interface Data {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
  protein: number;
}
type Sample = [string, number, number, number, number];

const sample: readonly Sample[] = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return { id, dessert, calories, fat, carbs, protein };
}

const rows: Data[] = [];

for (let i = 0; i < 1000; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

export const Virtualized = Template.bind({});
Virtualized.args = {
  rowCount: rows.length,
  rowGetter: ({ index }: { index: number }) => rows[index],
  columns: [
    {
      width: 300,
      label: 'Dessert',
      dataKey: 'dessert',
    },
    {
      width: 120,
      label: 'Calories\u00A0(g)',
      dataKey: 'calories',
      align: 'right',
    },
    {
      width: 120,
      label: 'Fat\u00A0(g)',
      dataKey: 'fat',
      align: 'right',
    },
    {
      width: 120,
      label: 'Carbs\u00A0(g)',
      dataKey: 'carbs',
      align: 'right',
    },
    {
      width: 120,
      label: 'Protein\u00A0(g)',
      dataKey: 'protein',
      align: 'right',
    },
  ],
};
