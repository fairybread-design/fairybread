import React from 'react';
import styled from 'styled-components';
import InclusivelyHidden from '../../inclusively-hidden';
import tokens from '../../tokens';
//

export interface LabelProps {
  className?: string;
  children: string;
  isChecked?: boolean;
  isHidden?: boolean;
  htmlFor: string;
  onClick: () => void;
  size?: 'sm' | 'md';
}

const _Label = ({
  className,
  children,
  isHidden,
  htmlFor,
  onClick,
}: LabelProps) => {
  const labelNode = (
    <label className={className} onClick={onClick} htmlFor={htmlFor}>
      {children}
    </label>
  );

  return isHidden ? (
    <InclusivelyHidden>{labelNode}</InclusivelyHidden>
  ) : (
    labelNode
  );
};

const Label = styled(_Label)`
  user-select: none;
  cursor: pointer;
  padding-left: ${tokens['space-xs']};
  font-size: ${({ size = 'md' }) => {
    if (size === 'md') {
      return tokens['typography-size-sm'];
    } else if (size === 'sm') {
      return tokens['typography-size-xxs'];
    }
  }};
`;

export default Label;
