import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs, { Tab } from '.';

export default {
  title: 'Design System/Tabs',
  component: Tabs,
  argTypes: {
    onChange: {
      type: 'function',
    },
    onTabClick: {
      type: 'function',
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab title="Tab 1" key="1">
      Tab 1 content
    </Tab>
    <Tab title="Tab 2" key="2">
      Tab 2 content
    </Tab>
    <Tab title="Tab 3" key={3}>
      Tab 3 content
    </Tab>
  </Tabs>
);

const TemplateNoChildren: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab title="Tab 1" key="1" />
    <Tab title="Tab 2" key="2" />
    <Tab title="Tab 3" key={3} />
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};

export const ActiveKey = Template.bind({});
ActiveKey.args = {
  activeKey: '2',
};

export const DefaultActiveKey = Template.bind({});
DefaultActiveKey.args = {
  defaultActiveKey: '3',
};

export const WithoutContent = TemplateNoChildren.bind({});
WithoutContent.args = {};
