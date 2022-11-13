import Input from './src';
import InputPrimitive from './src/components/input-primitive';
import WrapperPrimitive from './src/components/wrapper-primitive';
import NumberInput from './src/components/number-input';

export default Input;
export { WrapperPrimitive, InputPrimitive, NumberInput };

import type { InputProps } from './src';
import type { WrapperPrimitiveProps } from './src/components/wrapper-primitive';
import type { InputPrimitiveProps } from './src/components/input-primitive';
import type { NumberInputProps } from './src/components/number-input';

export type {
  InputProps,
  WrapperPrimitiveProps,
  InputPrimitiveProps,
  NumberInputProps,
};
