import React from 'react';

import Wrapper from './components/wrapper';
import Title from './components/title';
import Icon from './components/icon';
import { faGhost } from '@fortawesome/sharp-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface EmptyProps {
  title?: React.ReactNode;
  icon?: IconProp;
}

const Empty = ({ title = 'No data' }: EmptyProps) => {
  return (
    <Wrapper>
      <div>
        <Icon icon={faGhost} />
        <Title>{title}</Title>
      </div>
    </Wrapper>
  );
};

export default Empty;
