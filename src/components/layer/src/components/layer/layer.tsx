import { useContext, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import PileContext from '../context/pile';
import MainPileContext from '../context/main-pile';

import type {
  PileEntry,
  LayerId,
  LayerCategory,
  LayerIndex,
  LayerEntry,
  LayerPosition,
  LayerSide,
} from '../../types';

export interface LayerProps {
  id?: LayerId;
  category?: LayerCategory;
  metadata?: {};
  onMount?(): void;
  onUnmount?(): void;
  position?: LayerPosition;
  side?: LayerSide;
  isMainPile?: boolean;
  children?:
    | React.ReactNode
    | (({}: {
        pile: PileEntry;
        layer: LayerEntry;
        index: LayerIndex;
      }) => React.ReactNode);
}

const Layer = ({
  children,
  id,
  category,
  position,
  side = 'front',
  onMount,
  onUnmount,
  isMainPile,
  metadata,
}: LayerProps) => {
  const isMounted = useRef(false);
  const genId = useId();
  const actualId = id || genId;

  const { pile, dispatchLayers } = useContext(
    isMainPile ? MainPileContext : PileContext
  );

  const layerIndex = pile[side].findIndex((layer) => layer.id === actualId);
  const layer = pile[side][layerIndex];
  const zIndexShift = layerIndex + 1;
  const zIndex = side === 'back' ? -zIndexShift : zIndexShift;

  // TODO: Ideally this wouldn't require useEffect / mounting before render
  useEffect(() => {
    const id = actualId;

    const isAlreadyInPile = pile[side].find(
      (existingLayer) => existingLayer.id === id
    );

    if (isAlreadyInPile) {
      console.error(
        `A layer with the ID '${id}' already exists. Use a unique ID for each layer or you may experience unintended behavior.`
      );
      return;
    }

    dispatchLayers({
      action: 'mount',
      payload: {
        id,
        category,
        position,
        side,
        metadata,
      },
    });
    if (onMount) onMount();

    return () => {
      if (onUnmount) onUnmount();
      dispatchLayers({
        action: 'unmount',
        payload: {
          id,
          side,
        },
      });
    };
  }, []);

  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
    } else {
      dispatchLayers({
        action: 'update',
        payload: {
          id: actualId,
          category,
          side,
          metadata,
        },
      });
    }
  }, [category, metadata]);

  const pileLayersLocation = document.querySelector(
    `[data-pile-id="${pile.id}"]`
  );

  return pileLayersLocation && layer && children
    ? createPortal(
        typeof children === 'function' ? (
          children({
            pile,
            layer,
            index: zIndex,
          })
        ) : (
          <div
            style={{
              zIndex,
              position: 'relative',
            }}
          >
            {children}
          </div>
        ),
        pileLayersLocation
      )
    : null;
};

export default Layer;
