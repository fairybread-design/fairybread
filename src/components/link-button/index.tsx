import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import tokens from '../tokens';
import breakpoints from '../../styles/breakpoints';

export interface LinkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  appearance?: 'primary' | 'secondary';
  isDisabled?: boolean;
  isInline?: boolean;
  iconAfter?: FontAwesomeIconProps['icon'];
  iconAfterProps?: Partial<Omit<FontAwesomeIconProps, 'icon'>>;
  href?: string;
  target?: string;
  as?: 'a';
}

const LinkButton = ({
  className,
  children,
  onClick,
  isDisabled,
  iconAfter,
  iconAfterProps,
  isInline,
  appearance,
  href,
  target,
  as,
}: LinkButtonProps) => {
  let componentAs: 'button' | 'a' = 'button';

  if (href || as === 'a') {
    componentAs = 'a';
  }

  return (
    <Wrapper
      href={href}
      target={target}
      as={componentAs}
      type={componentAs === 'button' ? 'button' : undefined}
      className={className}
      onClick={onClick}
      disabled={isDisabled}
      $isInline={isInline}
      $appearance={appearance}
    >
      {children}
      {iconAfter && <FontAwesomeIcon icon={iconAfter} {...iconAfterProps} />}
    </Wrapper>
  );
};

const Wrapper = styled.button<{
  $isInline: LinkButtonProps['isInline'];
  $appearance: LinkButtonProps['appearance'];
}>`
  text-decoration: none;
  cursor: pointer;
  background: none;
  gap: ${tokens['space-xxs']};
  padding: 0;
  align-items: center;
  display: ${({ $isInline }) => ($isInline ? 'inline-flex' : 'flex')};
  font-weight: ${({ $appearance = 'primary' }) => {
    switch ($appearance) {
      case 'primary':
        return 'bold';
      case 'secondary':
        return 'normal';
    }
  }};
  appearance: none;
  color: ${tokens['color-text-brand']};
  border: 0;
  outline: 0;
  font-size: ${tokens['typography-size-button-sm']};
  white-space: nowrap;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :not(:disabled):hover,
  :not(:disabled):focus {
    color: ${tokens['color-text-brand-hovered']};
    text-decoration: underline;
  }

  :not(:disabled):active {
    color: ${tokens['color-text-brand-pressed']};
  }

  svg {
    display: block;
  }

  ${breakpoints.up('md', `font-size: ${tokens['typography-size-button']};`)}
`;

export default LinkButton;
