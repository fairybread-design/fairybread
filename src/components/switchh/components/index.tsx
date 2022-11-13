/**
 * TODO: The folder directory is 'switchh' because Storybook throws errors otherwise using 'switch'.
 * I think because it's a reserved word it's causing some issue...
 */

import React, { useState, useEffect, forwardRef } from 'react';
import InclusivelyHidden from '../../inclusively-hidden';
import Stack from '../../stack';
import Label from './label';
import SwitchButton from './switch-button';

export interface SwitchProps {
  id: string;
  label: string;
  onChange?: ({}: { checked: boolean }) => void;
  className?: string;
  hideLabel?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  size?: 'sm' | 'md';
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      id,
      label,
      className,
      onChange,
      checked,
      defaultChecked,
      hideLabel,
      size = 'md',
    },
    ref
  ) => {
    const [checkedState, setCheckedState] = useState(checked || defaultChecked);

    const toggleChecked = () => {
      if (onChange) {
        onChange({ checked: !checkedState });
      }

      if (checked === undefined) {
        setCheckedState(!checkedState);
      }
    };

    useEffect(() => {
      if (checked !== undefined) {
        setCheckedState(checked);
      }
    }, [checked]);

    return (
      <div ref={ref} className={className}>
        <InclusivelyHidden>
          <input
            type="checkbox"
            id={id}
            // TODO: Why is this lint error happening?
            // eslint-disable-next-line react/no-unknown-property
            defaultChecked={defaultChecked}
            checked={checked}
            // noop so React doesn't complain about controlled input not having onChange handler
            onChange={() => {}}
          />
        </InclusivelyHidden>
        <Stack size="0" alignItems="center" isInline={false}>
          <SwitchButton
            isChecked={checkedState}
            onClick={toggleChecked}
            size={size}
          />
          <Label
            htmlFor={id}
            isChecked={checkedState}
            onClick={toggleChecked}
            isHidden={hideLabel}
            size={size}
          >
            {label}
          </Label>
        </Stack>
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
