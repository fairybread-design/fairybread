import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Tooltip from '../tooltip/src';
import type { TooltipProps } from '../tooltip/src';

import InclusivelyHidden from '../inclusively-hidden';
import tokens from '../tokens';
import isTouchDevice from '../utils/is-touch-device';

export interface IconButtonProps {
  label: React.ReactNode;
  tooltipPlacement?: TooltipProps['placement'];
  icon?: FontAwesomeIconProps['icon'];
  emoji?: string;
  iconProps?: Partial<Omit<FontAwesomeIconProps, 'icon'>>;
  onClick?: () => void;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  appearance?: 'standard' | 'inverse' | 'brand';
  hasTooltip?: boolean;
  /**
   * Native HTML title attribute
   */
  title?: string;
}

const _IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      title,
      className,
      label,
      emoji,
      icon,
      iconProps,
      onClick,
      tooltipPlacement,
      hasTooltip = true,
    },
    ref
  ) => {
    /* The div is required because Tooltip will pass it's ref down to it, but forwardedRefs
        can still be passed to the button (e.g. wrapping a PopupConfirm around an IconButton) */
    const wrapper = (
      <Wrapper>
        <button
          ref={ref}
          type="button"
          className={className}
          onClick={onClick}
          title={title}
        >
          {icon && <FontAwesomeIcon icon={icon} {...iconProps} />}
          {emoji}
          <InclusivelyHidden>{label}</InclusivelyHidden>
        </button>
      </Wrapper>
    );

    const isTouch = isTouchDevice();

    return hasTooltip && !isTouch ? (
      <Tooltip label={label} placement={tooltipPlacement}>
        {wrapper}
      </Tooltip>
    ) : (
      wrapper
    );
  }
);

_IconButton.displayName = '_IconButton';

const Wrapper = styled.div`
  display: inline-flex;
`;
const IconButton = styled(_IconButton)`
  user-select: none;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: none;
  appearance: none;
  padding: 3px;
  font-size: ${({ size = 'md' }) => tokens[`size-icon-${size}`]};
  font-weight: normal;

  svg {
    display: block;
  }

  ${({ appearance = 'standard' }) => {
    if (appearance === 'standard') {
      return `
      color: ${tokens['color-icon']};

      &:hover,
      &:focus {
        color: ${tokens['color-icon-hovered']};
      }

      &:active {
        color: ${tokens['color-icon-pressed']};
      }
  `;
    } else if (appearance === 'inverse') {
      return `
        color: ${tokens['color-icon-inverse']};

        &:hover,
        &:focus {
          color: ${tokens['color-icon-inverse-hovered']};
        }

        &:active {
          color: ${tokens['color-icon-inverse-pressed']};
        }
    `;
    } else if (appearance === 'brand') {
      return `
        color: ${tokens['color-icon-brand']};

        &:hover,
        &:focus {
          color: ${tokens['color-icon-brand-hovered']};
        }

        &:active {
          color: ${tokens['color-icon-brand-pressed']};
        }
    `;
    }
  }}
`;

export default IconButton;
