import TableContext from './table-context';
import styled from 'styled-components';

export interface TableProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}

const _Table = ({ children, size, className }: TableProps) => {
  return (
    <TableContext.Provider value={{ size }}>
      <table className={className}>{children}</table>
    </TableContext.Provider>
  );
};

const StyledTable = styled(_Table)`
  border: none;
  border-collapse: collapse;
  width: 100%;
  margin: 0;
`;

const Table = (args: TableProps) => <StyledTable {...args} />;

export default Table;
