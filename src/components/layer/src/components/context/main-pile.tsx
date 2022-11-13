import { createContext } from 'react';
import type { PileContextProps } from './pile';

export const MainPileContext = createContext<PileContextProps>(
  {} as PileContextProps
);

export default MainPileContext;
