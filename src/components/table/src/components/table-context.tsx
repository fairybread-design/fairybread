import { createContext } from 'react';

export interface TableContextProps {
  size?: 'sm' | 'md';
}

const TableContext = createContext<TableContextProps>({ size: 'md' });

export default TableContext;
