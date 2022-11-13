import { useContext } from 'react';
import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import tokens from '../../../tokens';
import tableCellStyles from '../styles/table-cell-styles';
import CellInner from './table-cell-inner';
import CellOuter from './table-cell-outer';
import TableContext from './table-context';

export interface TableDataProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
  style?: React.CSSProperties;
  component?: React.ElementType;
  ellipsis?: boolean;
  minWidth?: string | number;
}

const TableData = ({
  children,
  className,
  style,
  align = 'left',
  component = 'td',
  ellipsis,
  minWidth,
}: TableDataProps) => {
  const { size } = useContext(TableContext);

  return (
    <Td
      as={component}
      className={className}
      style={style}
      $size={size}
      $align={align}
      $minWidth={minWidth}
    >
      <CellOuter $size={size}>
        <CellInner ellipsis={ellipsis}>{children}</CellInner>
      </CellOuter>
    </Td>
  );
};

const Td = styled.td<{
  $size?: 'sm' | 'md';
  $align: TableDataProps['align'];
  $minWidth: TableDataProps['minWidth'];
}>`
  ${tableCellStyles}
  ${({ $size = 'md' }) => {
    if ($size === 'md') {
      return `
        font-size: ${tokens['typography-size-xxs']};

        ${breakpoints.up(
          'xxl',
          `
          font-size: ${tokens['typography-size-sm']};
        `
        )}
      `;
    } else if ($size === 'sm') {
      return `
        font-size: ${tokens['typography-size-xxxs']};
      `;
    }
  }};
  text-align: ${({ $align }) => $align};
  ${({ $minWidth }) =>
    $minWidth
      ? `min-width: ${
          typeof $minWidth === 'number' ? `${$minWidth}px` : $minWidth
        }`
      : ''};
`;

export default TableData;
