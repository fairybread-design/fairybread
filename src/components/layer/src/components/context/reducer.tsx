import type { LayersAction, PileEntry } from '../../types';

const pileReducer = (
  state: PileEntry,
  { action, payload }: LayersAction
): PileEntry => {
  const { id, side } = payload;

  let updatedPile = state;
  let newLayers = [...updatedPile[side]];

  if (action === 'mount') {
    const { position = 'top', category, metadata } = payload;

    const positionTop =
      position === 'top' ||
      (typeof position !== 'string' && position.insert === 'top');

    const positionBottom =
      position === 'bottom' ||
      (typeof position !== 'string' && position.insert === 'bottom');

    if (
      (positionTop && side === 'front') ||
      (positionBottom && side === 'back')
    ) {
      newLayers.push({
        category,
        id,
        metadata,
      });
    } else if (
      (positionTop && side === 'back') ||
      (positionBottom && side === 'front')
    ) {
      newLayers.unshift({
        category,
        id,
        metadata,
      });
    }

    return {
      ...state,
      [side]: newLayers,
    };
  } else if (action === 'unmount') {
    const index = newLayers.findIndex((layer) => layer.id === id);
    newLayers.splice(index, 1);

    return {
      ...state,
      [side]: newLayers,
    };
  } else if (action === 'update') {
    const { category, metadata } = payload;

    const index = newLayers.findIndex((layer) => layer.id === id);
    newLayers[index] = {
      ...newLayers[index],
      category,
      metadata,
    };
    return {
      ...state,
      [side]: newLayers,
    };
  }

  return state;
};

export default pileReducer;
