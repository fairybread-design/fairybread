import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';

import tokens from '../../../tokens';

export interface TabButtonProps {
  className?: string;
  children: React.ReactNode;
  isCurrentTab?: boolean;
  onClick?: () => void;
  title?: string;
}

const TabButton = ({ children, className, onClick, title }: TabButtonProps) => {
  return (
    <button className={className} type="button" onClick={onClick} title={title}>
      {children}
    </button>
  );
};

// TODO: Animate selected tab border
const StyledTabButton = styled(TabButton)`
  cursor: pointer;
  border: none;
  outline: 0;
  border-bottom: ${({ isCurrentTab }) =>
    `2px solid ${isCurrentTab ? tokens['color-border-brand'] : 'transparent'}`};
  border-radius: 0;
  height: 38px;
  appearance: none;
  background: none;
  color: ${({ isCurrentTab }) =>
    isCurrentTab ? tokens['color-text-brand'] : tokens['color-text-subtle']};
  padding: 10px 0;
  font-size: ${tokens['typography-size-xxs']};
  position: relative;

  ${breakpoints.up(
    'lg',
    `
    padding: 13px 0;
    height: 44px;
    border-bottom-width: 3px;
    font-size: ${tokens['typography-size-xs']};
    `
  )}

  ${breakpoints.up(
    'xl',
    `
    font-size: ${tokens['typography-size-sm']};
    `
  )}

  &:hover,
  &:focus {
    color: ${tokens['color-text-brand']};
  }

  &:active {
    color: ${tokens['color-text-brand-hovered']};
  }
`;

export default StyledTabButton;
