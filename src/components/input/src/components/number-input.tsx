import { memo, forwardRef } from 'react';
import NumberFormat from 'react-number-format';
import type { NumberFormatProps } from 'react-number-format';
import isEqual from 'lodash/isEqual';

import WrapperPrimitive from './wrapper-primitive';
import InputPrimitive from './input-primitive';

import type { WrapperPrimitiveProps } from './wrapper-primitive';
import type { InputPrimitiveProps } from './input-primitive';

export interface ReactNumberFormatInputProps
  extends ReactNumberFormatProps,
    Omit<InputPrimitiveProps, 'type'> {}

export interface ReactNumberFormatProps
  extends Pick<
    NumberFormatProps,
    | 'decimalScale'
    | 'thousandSeparator'
    | 'fixedDecimalScale'
    | 'onValueChange'
    | 'allowNegative'
    | 'type'
    | 'format'
    | 'isAllowed'
    | 'allowLeadingZeros'
    | 'mask'
  > {}

const ReactNumberFormatInput = ({
  decimalScale,
  thousandSeparator,
  fixedDecimalScale,
  allowNegative = false,
  onValueChange,
  type = 'text',
  format,
  isAllowed,
  allowLeadingZeros,
  inputMode = 'numeric',
  ...rest
}: ReactNumberFormatInputProps) => {
  return (
    <NumberFormat
      inputMode={inputMode}
      customInput={InputPrimitive}
      displayType="input"
      type={type}
      thousandSeparator={thousandSeparator}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
      onValueChange={onValueChange}
      allowNegative={allowNegative}
      format={format}
      isAllowed={isAllowed}
      allowLeadingZeros={allowLeadingZeros}
      {...rest}
    />
  );
};

// Useful presets
const presets: {
  [name: string]: ReactNumberFormatProps;
} = {
  currency: {
    decimalScale: 2,
    thousandSeparator: true,
  },
};

export interface NumberInputProps
  extends WrapperPrimitiveProps<InputPrimitiveProps>,
    Omit<InputPrimitiveProps, 'isPrefixed' | 'isSuffixed' | 'type'> {
  numberFormat?: ReactNumberFormatProps;
  preset?: keyof typeof presets;
}

const NumberInput = memo(
  forwardRef<HTMLInputElement, NumberInputProps>(
    ({ numberFormat, preset, ...rest }, ref) => {
      const numberFormatPreset = preset ? presets[preset] : undefined;

      return (
        <WrapperPrimitive
          innerRef={ref}
          component={{ type: 'component', value: ReactNumberFormatInput }}
          {...rest}
          {...numberFormatPreset}
          {...numberFormat}
        />
      );
    }
  ),
  (prevProps, nextProps) => {
    return isEqual(prevProps, nextProps);
  }
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;
