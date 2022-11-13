import { createContext } from 'react';
import type { Dispatch } from 'react';
import { LayersAction, PileEntry } from '../../types';

export interface PileContextProps {
  pile: PileEntry;
  dispatchLayers: Dispatch<LayersAction>;
}

export const PileContext = createContext<PileContextProps>(
  {} as PileContextProps
);

export default PileContext;
