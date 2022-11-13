import styled, { keyframes } from 'styled-components';

import tokens from '../../tokens';

/**
 * Re-usable styled components for building a TooltipPrimitive.
 *
 * To be re-used in Tooltip, PopupConfirm, Popup etc.
 */
const growFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
`;

/**
 * Styles are applied to an inner wrapper
 * so transform styles don't interfere
 * with Popper's placement
 */
export const PopperElement = styled.div`
  animation: ${growFadeIn} 300ms cubic-bezier(0.15, 1, 0.3, 1);
  transform-origin: center center;
  will-change: transform;
`;

export const LabelElement = styled.div`
  position: relative;
  z-index: 1;
  color: ${tokens['color-text']};
  background-color: ${tokens['color-elevation-surface-raised']};
  box-shadow: ${tokens['color-elevation-shadow-raised']};
  padding: ${tokens['space-sm']};
  font-size: ${tokens['typography-size-xs']};
  border-radius: ${tokens['size-borderRadius']};
  font-weight: normal;
  max-width: 220px;
  text-align: center;
`;

const ARROW_SIZE = 8;
const ARROW_OFFSET = `calc(100% - ${ARROW_SIZE}px)`;
export const ArrowElement = styled.div`
  pointer-events: none;
  position: relative;
  z-index: 1;
  width: ${ARROW_SIZE * 2}px;
  height: ${ARROW_SIZE * 2}px;
  display: flex;
  align-items: center;
  justify-content: center;

  :before {
    content: '';
    transform: rotate(45deg);
    background-color: ${tokens['color-elevation-surface-raised']};
    box-shadow: ${tokens['color-elevation-shadow-raised']};
    width: ${ARROW_SIZE}px;
    height: ${ARROW_SIZE}px;
    display: block;
  }

  &[data-hide] {
    visibility: hidden;
  }

  *:is([data-popper-placement='top'], [data-popper-placement='top-start'], [data-popper-placement='top-end'])
    & {
    top: ${ARROW_OFFSET};
    clip-path: polygon(
      0 ${ARROW_SIZE}px,
      100% ${ARROW_SIZE}px,
      100% 100%,
      0 100%
    );
  }
  *:is([data-popper-placement='bottom'], [data-popper-placement='bottom-start'], [data-popper-placement='bottom-end'])
    & {
    bottom: ${ARROW_OFFSET};
    clip-path: polygon(0 0, 100% 0, 100% ${ARROW_SIZE}px, 0 ${ARROW_SIZE}px);
  }
  *:is([data-popper-placement='left'], [data-popper-placement='left-start'], [data-popper-placement='left-end'])
    & {
    left: ${ARROW_OFFSET};
    clip-path: polygon(
      ${ARROW_SIZE}px 0,
      100% 0,
      100% 100%,
      ${ARROW_SIZE}px 100%
    );
  }
  *:is([data-popper-placement='right'], [data-popper-placement='right-start'], [data-popper-placement='right-end'])
    & {
    right: ${ARROW_OFFSET};
    clip-path: polygon(0 0, ${ARROW_SIZE}px 0, ${ARROW_SIZE}px 100%, 0 100%);
  }
`;
