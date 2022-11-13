import React, { ForwardedRef } from 'react';
import styled, { css } from 'styled-components';

import tokens from '../../../tokens';
import { FieldWrap, Label, LabelWrapper } from '../../../utils/input-styles';
import { InputHelp } from '../../../utils/input-help';
import type { InputHelpType } from '../../../utils/input-help';

export type WrapperPrimitiveProps<T extends {}> = T & {
  // Workaround as can't use generic with forwardRef()
  innerRef?: ForwardedRef<HTMLInputElement>;
  id: string;
  label: string;
  inlinePrefix?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  component?: {
    type: 'element' | 'component';
    value: React.ElementType | React.ComponentType<T>;
  };
  help?: InputHelpType;
  onOpenHelp?: ({}: { id: string }) => void;
  mode?: 'input' | 'textarea';
};

const _WrapperPrimitive = <T,>({
  id,
  label,
  inlinePrefix,
  prefix,
  suffix,
  className,
  innerRef,
  help,
  mode = 'input',
  onOpenHelp,
  component: Component = {
    type: 'element',
    value: 'input',
  },
  ...componentProps
}: WrapperPrimitiveProps<T>) => {
  return (
    <div className={className}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <FieldWrap>
        <LabelWrapper>
          <Label htmlFor={id}>{label}</Label>
          {help && (
            <InputHelp
              type={help.type}
              content={help.content}
              title={help.title}
              id={id}
              onOpen={onOpenHelp}
            />
          )}
        </LabelWrapper>
        {inlinePrefix && <InlinePrefix>{inlinePrefix}</InlinePrefix>}
        <Component.value
          {...(Component.type === 'component'
            ? {
                isPrefixed: Boolean(prefix),
                isSuffixed: Boolean(suffix),
                isInlinePrefixed: Boolean(inlinePrefix),
              }
            : [])}
          id={id}
          innerRef={innerRef}
          as={mode === 'textarea' ? 'textarea' : undefined}
          {...componentProps}
        />
      </FieldWrap>
      {suffix && <Suffix>{suffix}</Suffix>}
    </div>
  );
};

const sharedPrefixSuffixStyles = css`
  border: ${tokens['size-borderWidth']} solid ${tokens['color-border']};
  background-color: ${tokens['color-background-neutral']};
  height: ${tokens['size-input-height']};
  font-size: ${tokens['typography-size-input']};
  display: block;
  display: flex;
  align-items: center;
  padding: 0 12px;
  flex: 0 0 auto;
`;

const InlinePrefix = styled.span`
  pointer-events: none;
  position: absolute;
  z-index: 2;
  left: calc(
    ${tokens['size-input-paddingInline']} + ${tokens['size-borderWidth']}
  );
  top: 23px;
  font-size: ${tokens['typography-size-input']};
  color: ${tokens['color-text']};
`;

const Prefix = styled.span`
  ${sharedPrefixSuffixStyles}
  border-right: 0;
  ${`
    border-top-left-radius: ${tokens['size-borderRadius']};
    border-bottom-left-radius: ${tokens['size-borderRadius']};
  `}
`;

const Suffix = styled.span`
  ${sharedPrefixSuffixStyles}
  border-left: 0;
  ${`
    border-top-right-radius: ${tokens['size-borderRadius']};
    border-bottom-right-radius: ${tokens['size-borderRadius']};
  `}
`;

const WrapperPrimitive = styled(_WrapperPrimitive)`
  display: flex;
  flex-wrap: nowrap;
`;

export default WrapperPrimitive;
