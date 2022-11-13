import React from 'react';

export interface TabProps {
  children?: React.ReactNode;
  title: React.ReactNode;
  titleLabel?: string;
}

const Tab = ({ children }: TabProps) => {
  return <div>{children}</div>;
};

export default Tab;
