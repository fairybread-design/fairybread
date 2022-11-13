import React from 'react';
import styled from 'styled-components';
import InclusivelyHidden from '../../inclusively-hidden';
import tokens from '../../tokens';

export interface SwitchButtonProps {
  isChecked?: boolean;
  className?: string;
  onClick: () => void;
  size: 'sm' | 'md';
}

const _SwitchButton = ({
  isChecked,
  onClick,
  className,
}: SwitchButtonProps) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      <InclusivelyHidden>Toggle {isChecked ? 'off' : 'on'}</InclusivelyHidden>
    </button>
  );
};

const SwitchButton = styled(_SwitchButton)`
  appearance: none;
  border: 0;
  outline: 0;
  display: block;
  border-radius: 34px;
  background: ${({ isChecked }) =>
    isChecked ? tokens['color-background-brand'] : tokens['color-icon']};
  padding: 2px;
  cursor: pointer;
  flex-shrink: 0;

  ${({ size = 'md' }) => {
    if (size === 'md') {
      return `
        width: 34px;
        height: 22px;
      `;
    } else if (size === 'sm') {
      return `
        width: 22px;
        height: 15px;
      `;
    }
  }}

  :after {
    content: '';
    background-color: ${tokens['color-icon-inverse']};
    border-radius: 50%;
    display: block;
    box-shadow: ${tokens['color-elevation-shadow-raised']};
    transition: transform 100ms ease;
    transform: translate3d(
      ${({ isChecked, size = 'md' }) => {
        if (size === 'md') {
          return isChecked ? '12px' : '0px';
        } else if (size === 'sm') {
          return isChecked ? '7px' : '0px';
        }
      }},
      0,
      0
    );

    ${({ size = 'md' }) => {
      if (size === 'md') {
        return `
          width: 18px;
          height: 18px;
        `;
      } else if (size === 'sm') {
        return `
          width: 11px;
          height: 11px;
        `;
      }
    }}
  }

  :hover {
    background: ${({ isChecked }) =>
      isChecked
        ? tokens['color-background-brand-hovered']
        : tokens['color-icon-hovered']};
  }

  :active {
    background: ${({ isChecked }) =>
      isChecked
        ? tokens['color-background-brand-pressed']
        : tokens['color-icon-pressed']};
  }
`;

export default SwitchButton;
