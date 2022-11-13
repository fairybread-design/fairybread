import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import tableCellPadding from '../styles/table-cell-padding';

export interface CellOuterProps {
  $size?: 'sm' | 'md';
}

const CellOuter = styled.div<CellOuterProps>`
  ${({ $size = 'md' }) => {
    if ($size === 'md') {
      return `
        padding: ${tableCellPadding['sm']};

        ${breakpoints.up(
          'xxl',
          `
          padding: ${tableCellPadding['md']};
        `
        )}
      `;
    } else if ($size === 'sm') {
      return `
        padding: ${tableCellPadding['xxs']};
      `;
    }
  }};
`;

export default CellOuter;
