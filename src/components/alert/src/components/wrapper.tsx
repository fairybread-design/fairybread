import styled from 'styled-components';

import type { AlertProps, Sizes } from '..';
import breakpoints from '../../../../styles/breakpoints';
import tokens from '../../../tokens';

type SizeBreakpoints = 'xxs' | 'md';

const fontSizes: {
  [key in Sizes]: {
    [key in SizeBreakpoints]: string;
  };
} = {
  md: {
    xxs: tokens['typography-size-xxs'],
    md: tokens['typography-size-xs'],
  },
  lg: {
    xxs: tokens['typography-size-sm'],
    md: tokens['typography-size'],
  },
  xl: {
    xxs: tokens['typography-size'],
    md: tokens['typography-size-lg'],
  },
} as const;

interface WrapperProps {
  $isInline?: boolean;
  $appearance: AlertProps['appearance'];
  $size?: Sizes;
}

const Wrapper = styled.section<WrapperProps>`
  flex-wrap: wrap;
  font-size: ${tokens['typography-size-xxs']};
  line-height: ${tokens['typography-lineHeight']};
  border-radius: ${tokens['size-borderRadius']};
  padding: 9px ${tokens['space-sm']};
  background: ${({ $appearance }) => tokens[`color-background-${$appearance}`]};
  color: ${({ $appearance }) => tokens[`color-text-${$appearance}-bold`]};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  appearance: none;
  text-align: center;
  text-decoration: none;

  ${({ onClick, $appearance }) =>
    onClick &&
    `
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${tokens[`color-background-${$appearance}-hovered`]};
    }
    &:active {
      background-color: ${tokens[`color-background-${$appearance}-pressed`]};
    }
  `}

  ${breakpoints.down('lg', 'width: 100%;')}

  ${({ $isInline }) =>
    breakpoints.up('md', `display: ${$isInline ? 'inline-flex' : 'flex'}`)}

  ${breakpoints.up(
    'md',
    `
      padding: 12px ${tokens['space-sm']};
      font-size: ${tokens['typography-size-xs']};
      text-align: left;
    `
  )}

  ${({ $size = 'md' }) => `
    font-size: ${fontSizes[$size]['xxs']};

    ${breakpoints.up('md', `font-size: ${fontSizes[$size]['md']};`)}
  `}
`;

export default Wrapper;
