import { createContext } from 'react';

export interface ListContextProps {
  type: 'ul' | 'ol';
}

const ListContext = createContext<ListContextProps>({ type: 'ul' });

export default ListContext;
