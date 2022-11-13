import React, { forwardRef } from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import tokens from '../tokens';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  appearance?: 'primary' | 'secondary' | 'subtle';
  size?: 'sm' | 'md';
  isFullWidth?: boolean;
  isDisabled?: boolean;
  href?: string;
  type?: 'button' | 'submit';
}

const _Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      type = 'button',
      children,
      onClick,
      isDisabled,
      href,
      size,
      appearance,
    },
    ref
  ) => {
    const commonProps = {
      className,
      onClick,
      disabled: isDisabled,
    };

    const wrapped = (
      <>
        <GradientBg className="button__bg" $appearance={appearance} />
        <ButtonInner
          $appearance={appearance}
          $size={size}
          className="button__inner"
        >
          {children}
        </ButtonInner>
      </>
    );

    if (href) {
      return (
        <a ref={ref} href={href} {...commonProps}>
          {wrapped}
        </a>
      );
    }

    return (
      // @ts-ignore
      <button ref={ref} type={type} {...commonProps}>
        {wrapped}
      </button>
    );
  }
);

_Button.displayName = '_Button';

const padding = {
  sm: [tokens['space-xxs'], tokens['space-xs']],
  md: [tokens['space-xs'], tokens['space-sm']],
} as const;

const GradientBg = styled.span<{
  $appearance: ButtonProps['appearance'];
}>`
  ${({ $appearance }) => {
    if ($appearance === 'subtle') {
      return `background: ${tokens['color-background-neutral-bold']};`;
    }

    return `
      background-image: linear-gradient(
        45deg,
        ${tokens['color-background-brand']},
        ${tokens['color-background-accent']}
      );
  `;
  }}
  border-radius: ${tokens['size-borderRadius']};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ButtonInner = styled.span<{
  $size: ButtonProps['size'];
  $appearance: ButtonProps['appearance'];
}>`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: calc(${tokens['size-borderRadius']} - 2px);
  line-height: 1;

  ${({ $appearance = 'primary ' }) =>
    $appearance === 'secondary' &&
    `background: ${tokens['color-elevation-surface']};`}

  ${({ $size = 'md' }) => {
    if ($size === 'md') {
      return `
      padding: ${padding[$size][0]} ${padding[$size][1]};
    `;
    } else if ($size === 'sm') {
      return `
      padding: ${padding[$size][0]} ${padding[$size][1]};
    `;
    }
  }}
`;

const Button = styled(_Button)`
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')}
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  border: 0;
  border-radius: ${tokens['size-borderRadius']};
  background: none;
  appearance: none;
  color: ${({ appearance = 'primary' }) => {
    switch (appearance) {
      case 'primary':
        return tokens['color-text-inverse-background'];
      case 'secondary':
        return tokens['color-text-brand'];
      case 'subtle':
        return tokens['color-text'];
    }
  }};

  outline: 0;
  font-weight: ${tokens['typography-weight-button']};
  padding: 2px;
  position: relative;

  ${({ size = 'md' }) => {
    if (size === 'md') {
      return `
      height: ${tokens['size-button-height']};
      font-size: ${tokens['typography-size-xxs']};

      ${breakpoints.up('md', `font-size: ${tokens['typography-size-button']};`)}
    `;
    } else if (size === 'sm') {
      return `
      height: ${tokens['size-button-height-sm']};
      font-size: ${tokens['typography-size-button-sm']};
    `;
    }
  }}

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :not(:disabled):hover,
  :not(:disabled):focus {
    ${({ appearance }) => {
      if (appearance === 'primary' || appearance === 'secondary') {
        return `
          .button__bg {
            filter: brightness(0.95);
          }
       `;
      } else if (appearance === 'subtle') {
        return `
          .button__bg {
            background: ${tokens['color-background-neutral-bold-hovered']};
          }
        `;
      }
    }}
    ${({ appearance }) => {
      switch (appearance) {
        case 'secondary':
          return `
            color: ${tokens['color-text-brand-hovered']};

            .button__inner {
              filter: contrast(0.95);
            }
          `;
      }
    }};
  }

  :not(:disabled):active {
    ${({ appearance }) => {
      if (appearance === 'primary' || appearance === 'secondary') {
        return `
          .button__bg {
            filter: brightness(0.9);
          }
       `;
      } else if (appearance === 'subtle') {
        return `
          .button__bg {
            background: ${tokens['color-background-neutral-bold-pressed']};
          }
        `;
      }
    }}
    ${({ appearance }) => {
      switch (appearance) {
        case 'secondary':
          return `
            color: ${tokens['color-text-brand-pressed']};

            .button__inner {
              filter: contrast(0.9);
            }
          `;
      }
    }};
  }
`;

export default Button;
