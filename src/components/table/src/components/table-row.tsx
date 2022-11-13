import styled from 'styled-components';
import tokens from '../../../tokens';

export interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  isSticky?: boolean;
  isHighlighted?: boolean;
}

const _TableRow = ({ children, className }: TableRowProps) => {
  return <tr className={className}>{children}</tr>;
};

const StyledTableRow = styled(_TableRow)`
  ${({ isSticky }) =>
    isSticky === true &&
    `
    position: sticky;
    top: 0;
    `}
  ${({ isHighlighted }) =>
    isHighlighted === true &&
    `
    background-color: ${tokens['color-background-neutral']};
    filter: grayscale(1);
  `}
`;

export default StyledTableRow;
