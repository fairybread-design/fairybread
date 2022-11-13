import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableData,
} from '.';

export default {
  title: 'Design System/Table',
  component: Table,
  argTypes: {
    size: {
      options: ['md', 'sm'],
      control: 'radio',
    },
  },
  args: {
    size: 'md',
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <TableHead>
        <TableRow>
          <TableHeader>Table header one</TableHeader>
          <TableHeader>Table header two</TableHeader>
          <TableHeader>Table header three</TableHeader>
          <TableHeader align="right">Right align</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableData>Test</TableData>
          <TableData>Test</TableData>
          <TableData>Test</TableData>
          <TableData align="right">Test</TableData>
        </TableRow>
        <TableRow>
          <TableData>Test</TableData>
          <TableData>Test</TableData>
          <TableData>Test</TableData>
          <TableData align="right">Test</TableData>
        </TableRow>
        <TableRow>
          <TableData>Test</TableData>
          <TableData>Test</TableData>
          <TableData>Test</TableData>
          <TableData align="right">Test</TableData>
        </TableRow>
        <TableRow>
          <TableData>Test</TableData>
          <TableData>Test</TableData>
          <TableData>Test</TableData>
          <TableData align="right">Test</TableData>
        </TableRow>
      </TableBody>
    </>
  ),
};
