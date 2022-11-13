import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import tokens from '../../../tokens';

import ProgressDot from './progress-dot';
import type { EntryProps } from './entry';

export interface ProgressLineProps {
  className?: string;
  status?: EntryProps['status'];
}

const _ProgressLine = ({ className, status }: ProgressLineProps) => (
  <div className={className}>
    <ProgressDot status={status} />
  </div>
);

const ProgressLine = styled(_ProgressLine).attrs({
  className: 'timeline__progress-line',
})`
  flex: 0;
  position: relative;

  ::before {
    content: '';
    height: calc(100% - 10px);
    width: 1px;
    display: block;
    position: absolute;
    top: ${10 + 6}px;
    left: 50%;
    transform: translate(-50%, 0);

    background: ${({ status = 'incomplete' }) => {
      if (
        status === 'incomplete' ||
        status === 'in progress' ||
        status === 'complete-single'
      ) {
        return tokens['color-border'];
      } else if (status === 'complete') {
        return tokens['color-border-brand'];
      }
    }};

    ${breakpoints.up('lg', `top: ${10 + 8}px;`)}
  }
`;

export default ProgressLine;
