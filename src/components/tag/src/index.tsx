import React from 'react';

import Wrapper from './components/wrapper';
import Content from './components/content';

export interface TagProps {
  appearance: 'success' | 'danger' | 'warning' | 'information';
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ className, children, appearance }: TagProps) => {
  return (
    <Wrapper className={className} $appearance={appearance}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Tag;
