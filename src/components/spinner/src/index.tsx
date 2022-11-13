import React from 'react';
import styled, { keyframes } from 'styled-components';

import tokens from '../../tokens';

export interface SpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'auto';
  borderSize?: 1 | 2;
}

const _Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={className}>
      <div />
    </div>
  );
};

const spinnerSizes = {
  sm: tokens['space-sm'],
  md: tokens['space-md'],
  lg: tokens['space-lg'],
  auto: '100%',
} as const;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(_Spinner)`
  width: ${({ size = 'md' }) => spinnerSizes[size]};

  div {
    ${({ borderSize = 2 }) => `
      border-top: ${borderSize}px solid transparent;
      border-right: ${borderSize}px solid transparent;
      border-bottom: ${borderSize}px solid transparent;
      border-left: ${borderSize}px solid ${tokens['color-border-brand']};
      padding-bottom: calc(100% - ${borderSize * 2}px);
    `}
    animation: ${spin} 0.8s infinite linear;
    border-radius: 50%;
  }
`;

export default Spinner;
