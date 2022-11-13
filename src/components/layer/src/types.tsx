import type { RefObject } from 'react';

/**
 * Pile unique identifier
 */
export type PileId = string | number;

export type PileChildrenFunction = ({}: {
  pile: PileEntry;
  index: LayerIndex;
}) => React.ReactNode;

export type PileRefs = {
  root: RefObject<HTMLDivElement>;
};

export type PileEntry = {
  id: PileId;
  front: LayerEntries;
  back: LayerEntries;
};

export type LayersAction =
  | {
      action: 'mount';
      payload: LayerMount;
    }
  | {
      action: 'unmount';
      payload: LayerUnmount;
    }
  | {
      action: 'update';
      payload: LayerUpdate;
    };

/**
 * Layer pile index (equivalent to z-index)
 */
export type LayerIndex = number;

/**
 * Layer unique identifier
 */
export type LayerId = string | number;

/**
 * An optional category to assign to a layer for identification purposes
 */
export type LayerCategory = string | undefined;

export type LayerEntry = {
  id: LayerId;
  category: LayerCategory;
  metadata: LayerMetadata;
};

export type LayerEntries = LayerEntry[];

export type LayerPosition =
  | 'top'
  | 'bottom'
  | {
      insert: 'top' | 'bottom';
    }
  | {
      insert: 'before' | 'after';
      layer: (entry: LayerEntry) => LayerId;
    };

export type LayerMount = {
  id: LayerId;
  category?: LayerCategory;
  side: LayerSide;
  position?: LayerPosition;
  metadata?: LayerMetadata;
};

export type LayerUnmount = {
  id: LayerId;
  side: LayerSide;
};

export type LayerUpdate = {
  id: LayerId;
  side: LayerSide;
  // Update-able data ⬇️
  category: LayerCategory;
  metadata: LayerMetadata;
};

export type LayerSide = 'front' | 'back';
export type LayerMetadata = { [key: string]: any } | undefined;
