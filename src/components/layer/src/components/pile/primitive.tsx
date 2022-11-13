import { useReducer, useId } from 'react';
import type { CSSProperties } from 'react';
import MainPileContext from '../context/main-pile';
import PileContext from '../context/pile';

import pileReducer from '../context/reducer';
import type { PileChildrenFunction } from '../../types';

export interface PilePrimitiveProps {
  children?: React.ReactNode | PileChildrenFunction;
  context: 'pile' | 'main-pile';
  style?: CSSProperties;
  className?: string;
}

const PilePrimitive = ({
  children,
  context,
  className,
  style,
}: PilePrimitiveProps) => {
  const id = useId();
  const [pile, dispatchLayers] = useReducer(pileReducer, {
    id,
    front: [],
    back: [],
  });

  const Provider =
    context === 'main-pile' ? MainPileContext.Provider : PileContext.Provider;

  return (
    <Provider value={{ pile, dispatchLayers }}>
      <div
        data-pile-id={id}
        className={className}
        style={{ position: 'relative', ...style }}
      >
        {children && (
          <>
            {typeof children === 'function' ? (
              children({
                pile,
                index: 0,
              })
            ) : (
              <div
                style={{
                  zIndex: 0,
                  position: 'relative',
                }}
              >
                {children}
              </div>
            )}
          </>
        )}
      </div>
    </Provider>
  );
};

export default PilePrimitive;
