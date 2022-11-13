import TooltipPrimitive from './tooltip-primitive';
import type { TooltipPrimitiveProps } from './tooltip-primitive';
import { ArrowElement, LabelElement, PopperElement } from './components';
import styled from 'styled-components';
import tokens from '../../tokens';

export interface TooltipProps
  extends Pick<TooltipPrimitiveProps, 'placement' | 'children' | 'label'> {}

export const LabelExtended = styled(LabelElement)`
  color: ${tokens['color-text-inverse-background']};
  background-color: ${tokens['color-elevation-surface-raised-inverse']};
  box-shadow: ${tokens['color-elevation-shadow-raised']};
  padding: ${tokens['space-xxs']} ${tokens['space-xs']};
  font-size: ${tokens['typography-size-xxxs']};
`;

export const ArrowExtended = styled(ArrowElement)`
  :before {
    background-color: ${tokens['color-elevation-surface-raised-inverse']};
    box-shadow: ${tokens['color-elevation-shadow-raised']};
  }
`;

// TODO: Lazy load react-popper on interaction?
const Tooltip = ({ children, placement = 'top', label }: TooltipProps) => {
  return (
    <TooltipPrimitive
      trigger="hover"
      label={label}
      placement={placement}
      components={{
        popper: PopperElement,
        arrow: ArrowExtended,
        label: LabelExtended,
      }}
    >
      {children}
    </TooltipPrimitive>
  );
};

export default Tooltip;
