import React, { forwardRef } from 'react';
import InputPrimitive from './components/input-primitive';
import WrapperPrimitive from './components/wrapper-primitive';
import type { WrapperPrimitiveProps } from './components/wrapper-primitive';
import type { InputPrimitiveProps } from './components/input-primitive';

export interface InputProps
  extends WrapperPrimitiveProps<InputPrimitiveProps>,
    Omit<InputPrimitiveProps, 'isPrefixed' | 'isSuffixed'> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <WrapperPrimitive
      innerRef={ref}
      component={{ type: 'component', value: InputPrimitive }}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
