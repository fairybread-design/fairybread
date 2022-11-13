import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

import tokens from '../tokens';

type Sizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SizeBreakpoints = 'xxs' | 'md' | 'lg';

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  noMarginTop?: boolean;
  noMarginBottom?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  as?: 'p' | 'ul' | 'ol';
  appearance?: 'subtle';
  size?: Sizes;
}

const fontSizes: {
  [key in Sizes]: {
    [key in SizeBreakpoints]: string;
  };
} = {
  xxs: {
    xxs: tokens['typography-size-xxs'],
    md: tokens['typography-size-xxs'],
    lg: tokens['typography-size-xxs'],
  },
  xs: {
    xxs: tokens['typography-size-xxs'],
    md: tokens['typography-size-xxs'],
    lg: tokens['typography-size-xs'],
  },
  sm: {
    xxs: tokens['typography-size-xxs'],
    md: tokens['typography-size-xs'],
    lg: tokens['typography-size-sm'],
  },
  md: {
    xxs: tokens['typography-size-xs'],
    md: tokens['typography-size-sm'],
    lg: tokens['typography-size'],
  },
  lg: {
    xxs: tokens['typography-size-sm'],
    md: tokens['typography-size'],
    lg: tokens['typography-size-lg'],
  },
  xl: {
    xxs: tokens['typography-size'],
    md: tokens['typography-size-lg'],
    lg: tokens['typography-size-xl'],
  },
} as const;

const Text = styled.p<TextProps>`
  color: ${({ appearance }) => {
    if (appearance === 'subtle') {
      return tokens['color-text-subtle'];
    }

    return tokens['color-text'];
  }};
  line-height: ${tokens['typography-lineHeight']};
  font-weight: ${tokens['typography-weight']};
  ${({ size = 'md' }) => `
    font-size: ${fontSizes[size]['xxs']};

    ${breakpoints.up('md', `font-size: ${fontSizes[size]['md']};`)}
    ${breakpoints.up('lg', `font-size: ${fontSizes[size]['lg']};`)}
  `}

  margin-block-start: ${({ noMarginTop = false }) =>
    noMarginTop ? '0' : '0.9em'};
  margin-block-end: ${({ noMarginBottom = false }) =>
    noMarginBottom ? '0' : '0.9em'};

  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : '')}
`;

export default Text;
