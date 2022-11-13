import { useContext } from 'react';
import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import tokens from '../../../tokens';
import tableCellStyles from '../styles/table-cell-styles';
import CellInner from './table-cell-inner';
import CellOuter from './table-cell-outer';
import TableContext from './table-context';

export interface TableHeaderProps {
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
  style?: React.CSSProperties;
  component?: React.ElementType;
  ellipsis?: boolean;
}

const TableHeader = ({
  children,
  className,
  style,
  component = 'th',
  align = 'left',
  ellipsis,
}: TableHeaderProps) => {
  const { size } = useContext(TableContext);

  return (
    <Th
      as={component}
      className={className}
      style={style}
      $size={size}
      $align={align}
    >
      <CellOuter $size={size}>
        <CellInner ellipsis={ellipsis}>{children}</CellInner>
      </CellOuter>
    </Th>
  );
};

const Th = styled.th<{ $size: 'sm' | 'md'; $align: TableHeaderProps['align'] }>`
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
  font-weight: bold;
`;

export default TableHeader;
