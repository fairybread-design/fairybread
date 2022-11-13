import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import tokens from '../../../tokens';

export interface InputPrimitiveProps
  extends Pick<
      InputHTMLAttributes<HTMLInputElement>,
      | 'onChange'
      | 'onClick'
      | 'onBlur'
      | 'onKeyDown'
      | 'onFocus'
      | 'type'
      | 'placeholder'
      | 'pattern'
      | 'autoComplete'
      | 'required'
    >,
    Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'inputMode'>> {
  value?: string | number;
  defaultValue?: string | number;
  className?: string;
  isDisabled?: boolean;
  name?: string;
  id: string;
  min?: number;
  max?: number;
  step?: number;
  isPrefixed?: boolean;
  isInlinePrefixed?: boolean;
  isSuffixed?: boolean;
  disableAutocomplete?: boolean;
  as?: 'textarea' | 'input';
  rows?: number;
}

const _InputPrimitive = forwardRef<HTMLInputElement, InputPrimitiveProps>(
  (
    {
      className,
      value,
      defaultValue,
      placeholder,
      onChange,
      onClick,
      onBlur,
      onKeyDown,
      onFocus,
      isDisabled,
      id,
      name,
      type = 'text',
      min,
      max,
      step,
      inputMode,
      disableAutocomplete,
      autoComplete,
      rows,
      required,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        inputMode={inputMode}
        className={className}
        type={type}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        id={id}
        name={name}
        required={required}
        min={min}
        max={max}
        step={step}
        autoComplete={disableAutocomplete ? 'off' : autoComplete}
        // @ts-ignore
        rows={rows}
      />
    );
  }
);

_InputPrimitive.displayName = '_InputPrimitive';

const InputPrimitive = styled(_InputPrimitive)`
  border: ${tokens['size-borderWidth']} solid ${tokens['color-border']};
  background-color: ${tokens['color-background-input']};
  /* stylelint-disable unit-no-unknown */
  border-radius: ${({ isPrefixed, isSuffixed }) => {
    if (isPrefixed && isSuffixed) {
      return '0';
    }

    if (isPrefixed) {
      return `0px ${tokens['size-borderRadius']} ${tokens['size-borderRadius']} 0px`;
    }

    if (isSuffixed) {
      return `${tokens['size-borderRadius']} 0px 0px ${tokens['size-borderRadius']}`;
    }

    return tokens['size-borderRadius'];
  }};
  appearance: none;
  color: ${tokens['color-text']};
  outline: 0;
  padding: ${tokens['size-input-paddingTop']}
    ${tokens['size-input-paddingInline']} ${tokens['size-input-paddingBottom']}
    ${({ isInlinePrefixed }) =>
      isInlinePrefixed
        ? // Make offset dynamic according to width of prefix. May need to refactor input
          `calc(${tokens['size-input-paddingInline']} + 15px)`
        : tokens['size-input-paddingInline']};

  font-size: ${tokens['typography-size-input']};
  transition: box-shadow 200ms ease;
  width: 100%;
  position: relative;
  z-index: 1;

  ${({ as }) => as === 'textarea' && 'resize: vertical;'}
  ${({ rows }) => !rows && `height: ${tokens['size-input-height']};`}

  :disabled {
    cursor: not-allowed;
    border-color: ${tokens['color-border-disabled']};
    background-color: ${tokens['color-background-disabled']};
    color: ${tokens['color-text-disabled']};
  }
  :focus {
    box-shadow: 0 0 3px ${tokens['color-border-hovered']};
  }

  :not(:disabled) {
    :hover,
    :focus {
      border-color: ${tokens['color-border-hovered']};
    }
  }

  ::placeholder {
    color: ${tokens['color-text-placeholder']};
  }
`;

export default InputPrimitive;
