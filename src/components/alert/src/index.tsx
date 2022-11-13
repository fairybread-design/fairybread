import React, { forwardRef } from 'react';

import {
  faCircleCheck,
  faCircleXmark,
  faExclamationTriangle,
  faInfoCircle,
} from '@fortawesome/sharp-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/sharp-solid-svg-icons';
import Stack from '../../stack';

import Wrapper from './components/wrapper';
import Inner from './components/inner';
import Title from './components/title';
import Icon from './components/icon';
import Content from './components/content';

export type Sizes = 'md' | 'lg' | 'xl';

export interface AlertProps {
  appearance: 'success' | 'danger' | 'warning' | 'information';
  /**
   * Override the default icon.
   */
  icon?: IconDefinition;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  isInline?: boolean;
  onClick?(): void;
  onMouseEnter?(): void;
  onTouchStart?(): void;
  href?: string;
  size?: Sizes;
}

const ICONS: { [key in AlertProps['appearance']]: IconDefinition } = {
  success: faCircleCheck,
  danger: faCircleXmark,
  warning: faExclamationTriangle,
  information: faInfoCircle,
} as const;

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      children,
      title,
      appearance,
      isInline,
      onClick,
      onMouseEnter,
      onTouchStart,
      size,
      icon,
      href,
    },
    ref
  ) => {
    let componentAs: 'section' | 'a' | 'button' = 'section';

    if (href) {
      componentAs = 'a';
    } else if (onClick) {
      componentAs = 'button';
    }

    return (
      <Wrapper
        ref={ref}
        className={className}
        $appearance={appearance}
        $isInline={isInline}
        $size={size}
        onClick={onClick}
        as={componentAs}
        href={href}
        onMouseEnter={onMouseEnter}
        onTouchStart={onTouchStart}
      >
        <Inner>
          <Stack size="xs" alignItems="center">
            <Icon icon={icon || ICONS[appearance]} $appearance={appearance} />
            <Title>{title}</Title>
          </Stack>
          {children && <Content>{children}</Content>}
        </Inner>
      </Wrapper>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
