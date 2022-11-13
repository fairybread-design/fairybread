import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import type { Size } from '../../../../styles/types';

type Span = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ItemProps {
  children?: React.ReactNode;
  className?: string;
  span?:
    | Span
    | {
        [key in Size]?: Span;
      };
}

const _Item = ({ className, children }: ItemProps) => {
  return <div className={className}>{children}</div>;
};

const Item = styled(_Item)`
  ${({ span = 1 }) => {
    if (span === 0) {
      return 'display: none;';
    } else if (typeof span === 'number') {
      return `
        grid-column: span ${span};
        display: initial;
      `;
    } else {
      return Object.entries(span).map(([size, span]) => {
        const sz = size as Size;
        if (sz === 'xxs') {
          return span === 0 ? 'display: none;' : `grid-column: span ${span};`;
        } else {
          return breakpoints.up(
            sz,
            span === 0
              ? 'display: none;'
              : `
                grid-column: span ${span};
                display: initial;
              `
          );
        }
      });
    }
  }}
`;

export default Item;
