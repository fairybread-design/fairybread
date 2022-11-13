import React from 'react';

import Wrapper from './components/wrapper';
import Content from './components/content';

export interface BadgeProps {
  appearance: 'success' | 'danger' | 'warning' | 'information';
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ className, children, appearance }: BadgeProps) => {
  return (
    <Wrapper className={className} $appearance={appearance}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Badge;
