import styled from 'styled-components';
import TooltipPrimitive from '../../tooltip/src/tooltip-primitive';
import type { TooltipPrimitiveProps } from '../../tooltip/src/tooltip-primitive';
import Stack from '../../stack';
import type { StackProps } from '../../stack';
import Button from '../../button';
import {
  LabelElement,
  ArrowElement,
  PopperElement,
} from '../../tooltip/src/components';

export interface PopupConfirmProps
  extends Pick<TooltipPrimitiveProps, 'placement' | 'children'> {
  label?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancel?: string;
  confirm?: string;
  hideCancel?: boolean;
  stackSize?: StackProps['size'];
  size?: 'md' | 'lg' | 'xl';
  fixedWidth?: boolean;
}

export const LabelExtended = styled(LabelElement)<{
  $size: PopupConfirmProps['size'];
  $fixedWidth: PopupConfirmProps['fixedWidth'];
}>`
  text-align: left;

  ${({ $fixedWidth }) => ($fixedWidth ? 'max-width: none;' : 'max-')}width: ${({
    $size = 'md',
  }) => {
    return {
      md: 190,
      lg: 250,
      xl: 300,
    }[$size];
  }}px;
`;

// TODO: Lazy load react-popper on interaction?
const PopupConfirm = ({
  children,
  placement = 'top',
  label = <strong>Are you sure?</strong>,
  onCancel,
  onConfirm,
  cancel = 'No',
  confirm = 'Yes',
  hideCancel,
  stackSize = 'xs',
  size = 'md',
  fixedWidth = false,
}: PopupConfirmProps) => {
  return (
    <TooltipPrimitive
      trigger="click"
      label={({ setClose }) => (
        <Stack direction="vertical" size={stackSize}>
          {label}
          <Stack size="xs">
            {!hideCancel && (
              <Button
                size="sm"
                appearance="subtle"
                onClick={() => {
                  if (onCancel) onCancel();
                  setClose();
                }}
              >
                {cancel}
              </Button>
            )}
            <Button
              size="sm"
              onClick={() => {
                if (onConfirm) onConfirm();
                setClose();
              }}
            >
              {confirm}
            </Button>
          </Stack>
        </Stack>
      )}
      placement={placement}
      components={{
        popper: PopperElement,
        arrow: ArrowElement,
        label: LabelExtended,
      }}
      componentProps={{ label: { $size: size, $fixedWidth: fixedWidth } }}
    >
      {children}
    </TooltipPrimitive>
  );
};

export default PopupConfirm;
