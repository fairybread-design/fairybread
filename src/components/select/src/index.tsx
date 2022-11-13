import React, {
  Fragment,
  Children,
  useState,
  useEffect,
  useCallback,
  memo,
} from 'react';
import type { SelectHTMLAttributes, ChangeEvent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/sharp-solid-svg-icons';

import { FieldWrap, Label, LabelWrapper } from '../../utils/input-styles';
import { InputHelp } from '../../utils/input-help';
import type { InputHelpType } from '../../utils/input-help';
import Option from './components/option';
import OptionGroup from './components/option-group';
import type { OptionProps } from './components/option';

import tokens from '../../tokens';

export interface SelectProps
  extends Pick<
    SelectHTMLAttributes<HTMLSelectElement>,
    'onChange' | 'required'
  > {
  value?: string | number;
  defaultValue?: string | number;
  className?: string;
  isDisabled?: boolean;
  name?: string;
  label: string;
  id: string;
  children: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[];
  hasEmptyOption?: boolean;
  emptyOptionLabel?: string;
  help?: InputHelpType;
  onOpenHelp?: ({}: { id: string }) => void;
}

const _Select = memo(
  ({
    label,
    children,
    className,
    id,
    isDisabled,
    required,
    name,
    onChange,
    value,
    defaultValue,
    hasEmptyOption,
    help,
    onOpenHelp,
    emptyOptionLabel = 'Choose option...',
  }: SelectProps) => {
    // Track selected value for styling purposes only
    const firstChild = Array.isArray(children) ? children[0] : children;
    let initialSelectedValue = value || defaultValue;
    if (initialSelectedValue === undefined && hasEmptyOption) {
      initialSelectedValue = '';
    } else if (initialSelectedValue === undefined) {
      initialSelectedValue = firstChild.props.value;
    }

    const [selectedValue, setSelectedValue] =
      useState<SelectProps['value']>(initialSelectedValue);

    const handleOnChange = useCallback(
      (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.selectedOptions[0].value);
        onChange && onChange(event);
      },
      [onChange]
    );

    useEffect(() => {
      if (value) {
        setSelectedValue(value);
      }
    }, [value]);

    const options = Children.map(children, (option) => {
      if (
        React.isValidElement(option) &&
        (option.type === Option ||
          option.type === OptionGroup ||
          option.type === Fragment)
      ) {
        return option;
      } else {
        return null;
      }
    });

    return (
      <StyledWrapper isEmpty={selectedValue === ''} className={className}>
        <FieldWrap>
          <LabelWrapper>
            <Label htmlFor={id}>{label}</Label>
            {help && (
              <InputHelp
                id={id}
                type={help.type}
                content={help.content}
                title={help.title}
                onOpen={onOpenHelp}
              />
            )}
          </LabelWrapper>
          <select
            id={id}
            disabled={isDisabled}
            required={required}
            name={name}
            onChange={handleOnChange}
            value={value}
            defaultValue={
              value === undefined ? initialSelectedValue : undefined
            }
          >
            {hasEmptyOption && (
              <Option value="" isDisabled>
                {emptyOptionLabel}
              </Option>
            )}
            {options}
          </select>
        </FieldWrap>
        <div className="select__arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </StyledWrapper>
    );
  }
);

_Select.displayName = '_Select';

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
  isEmpty: boolean;
}) => {
  return <div className={className}>{children}</div>;
};

const StyledWrapper = styled(Wrapper)`
  select {
    color: ${({ isEmpty }) =>
      isEmpty ? tokens['color-text-placeholder'] : tokens['color-text']};
  }
`;

const Select = styled(_Select)`
  position: relative;

  select {
    border: ${tokens['size-borderWidth']} solid ${tokens['color-border']};
    background-color: ${tokens['color-background-input']};
    border-radius: ${tokens['size-borderRadius']};
    height: ${tokens['size-input-height']};
    appearance: none;
    outline: 0;
    padding: ${tokens['size-input-paddingTop']}
      calc(${tokens['size-input-paddingInline']} + 24px)
      ${tokens['size-input-paddingBottom']}
      ${tokens['size-input-paddingInline']};
    font-size: ${tokens['typography-size-input']};
    transition: box-shadow 200ms ease;
    width: 100%;
    position: relative;
    z-index: 1;
    cursor: pointer;

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
  }

  .select__arrow {
    position: absolute;
    right: ${tokens['space-sm']};
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;
    pointer-events: none;
    color: ${tokens['color-icon']};
    font-size: ${tokens['size-icon-sm']};
  }
`;

Select.displayName = 'Select';

export default Select;
