import type { CSSProperties } from 'react';
import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';
import { Size } from '../../../styles/types';
import tokens from '../../tokens';
import Item from './components/item';

export interface GridProps extends Pick<CSSProperties, 'alignItems'> {
  children: React.ReactNode;
  className?: string;
  rowGap?: Size;
}

const _Grid = ({ className, children, rowGap }: GridProps) => {
  return <div className={className}>{children}</div>;
};

_Grid.Item = Item;

const Grid = styled(_Grid)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: ${tokens['space-md']};

  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}

  /* TODO: The rowGap is only adjustable on mobile breakpoint atm */
  ${({ rowGap }) =>
    rowGap
      ? `row-gap: ${tokens[`space-${rowGap}`]};`
      : `row-gap: ${tokens['space-md']};`}

  ${breakpoints.up(
    'md',
    `
      column-gap: ${tokens['space-lg']};
    `
  )}
  ${breakpoints.up(
    'xl',
    `
      column-gap: ${tokens['space-xl']};
      row-gap: ${tokens['space-lg']};
    `
  )}
`;

export default Grid;
