import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import { PileEntry } from '../../../layer/src/types';
import {
  CLOSE_TRANSITION_DURATION,
  OPEN_TRANSITION_DURATION,
  TRANSITION_TIMING,
  MODAL_CATEGORY,
} from './base';

export interface ModalLayerShifter {
  pile: PileEntry;
  children: React.ReactNode;
}

const ModalLayerShifter = ({ pile, children }: ModalLayerShifter) => {
  const openModals = pile.front.filter(
    ({ category, metadata }) =>
      category &&
      category === MODAL_CATEGORY &&
      metadata &&
      'isClosing' in metadata &&
      metadata.isClosing !== true
  );

  return <Shifter $openModals={openModals.length}>{children}</Shifter>;
};

// TODO: Relocate
const Shifter = styled.div<{ $openModals: number }>`
  transition-timing-function: ${TRANSITION_TIMING};
  transition-duration: ${CLOSE_TRANSITION_DURATION - 50}ms;

  ${({ $openModals }) => {
    if ($openModals > 0) {
      return `
      ${breakpoints.down(
        'md',
        `
          transition-duration: ${OPEN_TRANSITION_DURATION}ms;
          transform: translate3d(-80px, 0, 0);
        `
      )}
      `;
    }
  }}
`;

export default ModalLayerShifter;
