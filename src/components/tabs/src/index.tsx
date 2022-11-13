import React, { Children, useEffect, useState } from 'react';
import type { Key } from 'react';
import styled from 'styled-components';

import TabButton from './components/tab-button';

import Tab from './components/tab';
import type { TabProps } from './components/tab';
import breakpoints from '../../../styles/breakpoints';
import tokens from '../../tokens';

type TabChild = false | React.ReactElement<TabProps>;

export interface TabsProps {
  className?: string;
  children: TabChild | TabChild[];
  onChange?: (currentTab: Key) => void;
  onTabClick?: (tab: Key) => void;
  activeKey?: Key;
  defaultActiveKey?: Key;
  buttonsExtraContent?: React.ReactNode;
}

/**
 * Get the initial tab to be selected.
 */
const getIntialTabKey = ({
  defaultActiveKey,
  tabs,
}: {
  tabs: React.ReactElement<TabProps>[];
  defaultActiveKey?: Key;
}) => {
  let initialTabKey = defaultActiveKey;

  if (initialTabKey === undefined && tabs.length > 0 && tabs[0].key !== null) {
    initialTabKey = tabs[0].key;
  } else {
    initialTabKey = `.$${initialTabKey}`;
  }

  return initialTabKey;
};

const Tabs = ({
  children,
  className,
  onChange,
  onTabClick,
  activeKey,
  defaultActiveKey,
  buttonsExtraContent,
}: TabsProps) => {
  // Filter out invalid tabs
  const tabs = Children.map(children, (tab) => {
    if (
      tab !== false &&
      React.isValidElement(tab) &&
      tab.type === Tab &&
      tab.key !== null
    ) {
      return tab;
    } else {
      return null;
    }
  }).filter((tab) => tab !== null);

  const [currentTabKeyUncontrolled, setCurrentTabKeyUncontrolled] = useState(
    getIntialTabKey({ defaultActiveKey, tabs })
  );

  // `activeKey` prop overrides the uncontrolled state to be controlled
  const currentTabKey = activeKey
    ? `.$${activeKey}`
    : currentTabKeyUncontrolled;

  useEffect(() => {
    const friendlyTabKey =
      typeof currentTabKey === 'string'
        ? currentTabKey.replace(/^\.\$/, '')
        : currentTabKey;

    if (onChange) {
      onChange(friendlyTabKey);
    }
  }, [currentTabKey, onChange]);

  const handleTabClick = (tab: React.ReactElement<TabProps>) => {
    if (tab.key !== null) {
      if (!activeKey) {
        setCurrentTabKeyUncontrolled(tab.key);
      }

      const friendlyTabKey =
        typeof tab.key === 'string' ? tab.key.replace(/^\.\$/, '') : tab.key;

      if (onTabClick) {
        onTabClick(friendlyTabKey);
      }
    }
  };

  const tabList = (
    <TabButtonWrapper>
      <TabList>
        {Children.map(tabs, (tab) => {
          const isCurrentTab = tab.key === currentTabKey;

          return (
            <TabItem key={tab.key}>
              <TabButton
                isCurrentTab={isCurrentTab}
                onClick={() => handleTabClick(tab)}
                title={tab.props.titleLabel}
              >
                {tab.props.title}
              </TabButton>
            </TabItem>
          );
        })}
      </TabList>
      {buttonsExtraContent && (
        <ButtonsExtraContent>{buttonsExtraContent}</ButtonsExtraContent>
      )}
    </TabButtonWrapper>
  );

  const currentTab = tabs.find((tab) => tab.key === currentTabKey);

  return (
    <div className={className}>
      {tabList}
      {currentTab?.props.children && currentTab}
    </div>
  );
};

const TabButtonWrapper = styled.div`
  margin-bottom: ${tokens['space-sm']};

  ${breakpoints.up(
    'md',
    `
      display: flex;
      gap: ${tokens['space-md']};
      justify-content: space-between;
      align-items: center;
    `
  )}
`;

const ButtonsExtraContent = styled.div`
  ${breakpoints.down('md', `margin-top: ${tokens['space-sm']};`)}
`;

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: ${tokens['space-md']};
`;

const TabItem = styled.li`
  padding: 0;
  margin: 0;
  flex: 0 0 auto;
  min-width: 0;
`;

export default Tabs;
