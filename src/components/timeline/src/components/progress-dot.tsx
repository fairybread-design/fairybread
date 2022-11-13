import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';

import Spinner from '../../../spinner';
import tokens from '../../../tokens';
import type { EntryProps } from './entry';

export interface ProgressDotProps {
  className?: string;
  status?: EntryProps['status'];
}

const _ProgressDot = ({ className, status }: ProgressDotProps) => (
  <div className={className}>
    {status === 'in progress' && <Spinner size="auto" borderSize={1} />}
  </div>
);

const ProgressDot = styled(_ProgressDot)`
  content: '';
  height: 10px;
  width: 10px;
  display: block;
  border-radius: 50%;
  margin-top: 6px;

  ${({ status = 'incomplete' }) => {
    if (status === 'incomplete') {
      return `
                background: ${tokens['color-border']};
            `;
    } else if (status === 'complete' || status === 'complete-single') {
      return `
                background: ${tokens['color-border-brand']};
            `;
    }
  }}

  ${breakpoints.up('lg', `margin-top: 8px;`)}
`;

export default ProgressDot;
