import React from 'react';
import type { CSSProperties } from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import type { Size } from '../../styles/types';
import tokens from '../tokens';

type Direction = 'horizontal' | 'vertical';

export interface StackProps
  extends Pick<CSSProperties, 'justifyContent' | 'alignItems'> {
  children: React.ReactNode;
  className?: string;
  direction?:
    | Direction
    | {
        [key in Size]?: Direction;
      };
  isInline?: boolean;
  size?:
    | Size
    | '0'
    | {
        [key in Size | '0']?: Size;
      };
  sizeWrap?: Size;
  wrap?: boolean;
  height?: string | number;
  width?: string | number;
}

const _Stack = ({ className, children }: StackProps) => {
  return <div className={className}>{children}</div>;
};

interface GenerateStackStyles
  extends Pick<StackProps, 'direction' | 'isInline' | 'sizeWrap' | 'wrap'> {
  isStacked?: boolean;
}

const generateStackStyles = ({
  direction = 'horizontal',
  sizeWrap = 'sm',
  isInline,
  wrap,
}: GenerateStackStyles) => {
  if (direction === 'horizontal') {
    return `
      display: ${
        isInline === undefined || isInline === true ? 'inline-flex' : 'flex'
      };
      row-gap: ${tokens[`space-${sizeWrap}`]};
      ${wrap ? 'flex-wrap: wrap;' : ''}
      flex-direction: row;
    `;
  } else if (direction === 'vertical') {
    return `
      display: ${isInline === true ? 'inline-flex' : 'flex'};
      column-gap: ${tokens[`space-${sizeWrap}`]};
      flex-direction: column;
    `;
  }
  return '';
};

const Stack = styled(_Stack)`
  ${({ direction = 'horizontal', sizeWrap = 'sm', wrap, isInline }) => {
    if (typeof direction === 'string') {
      return generateStackStyles({
        direction,
        sizeWrap,
        isInline,
        wrap,
      });
    } else if (typeof direction === 'object') {
      return Object.entries(direction).map(
        ([breakpoint, directionAtThisBreakpoint]) => {
          const bp = breakpoint as Size;
          if (bp === 'xxs') {
            return generateStackStyles({
              direction: directionAtThisBreakpoint,
              sizeWrap,
              isInline,
              wrap,
            });
          } else {
            return breakpoints.up(
              bp,
              generateStackStyles({
                direction: directionAtThisBreakpoint,
                sizeWrap,
                isInline,
                wrap,
              })
            );
          }
        }
      );
    }
  }}

  ${({ direction = 'horizontal', size = 'md' }) => {
    if (typeof size === 'string') {
      return `${direction === 'horizontal' ? 'column' : 'row'}-gap: ${
        tokens[`space-${size}`]
      };`;
    } else {
      // Responsive gap
      return Object.entries(size).map(([breakpoint, spacingSize]) => {
        const bp = breakpoint as Size;
        if (bp === 'xxs') {
          return `${direction === 'horizontal' ? 'column' : 'row'}-gap: ${
            tokens[`space-${spacingSize}`]
          };`;
        } else {
          return breakpoints.up(
            bp,
            `${direction === 'horizontal' ? 'column' : 'row'}-gap: ${
              tokens[`space-${spacingSize}`]
            };`
          );
        }
      });
    }
  }}

  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ''}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
  ${({ height }) => (height ? `height: ${height};` : '')}
  ${({ width }) => (width ? `width: ${width};` : '')}
`;

export default Stack;
