import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../button';

import Grid from './index';
import Stack from '../stack';

export default {
  title: 'Design System/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const DemoTemplate: ComponentStory<typeof Grid> = () => (
  <Stack direction="vertical">
    <Grid>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
    </Grid>
    <Grid>
      <Grid.Item span={2}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={2}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={2}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={2}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={2}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={2}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
    </Grid>
    <Grid>
      <Grid.Item span={3}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={3}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={3}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={3}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
    </Grid>
    <Grid>
      <Grid.Item span={4}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={4}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={4}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
    </Grid>
    <Grid>
      <Grid.Item span={6}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
      <Grid.Item span={6}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
    </Grid>
    <Grid>
      <Grid.Item span={12}>
        <Button isFullWidth>Hello</Button>
      </Grid.Item>
    </Grid>
  </Stack>
);
export const Demo = DemoTemplate.bind({});

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Responsive = Template.bind({});
Responsive.args = {
  children: (
    <>
      <Grid.Item
        span={{
          xxs: 2,
          xs: 4,
          sm: 6,
          md: 8,
          lg: 10,
          xl: 12,
        }}
      >
        <Button isFullWidth>I shrink as the viewport becomes narrower</Button>
      </Grid.Item>
    </>
  ),
};
