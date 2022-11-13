import React from 'react';

import Wrapper from './components/wrapper';
import Title from './components/title';
import Switch from '../../switchh';
import Stack from '../../stack';
import { ExpandPrimitive } from '../../expand';

export interface FieldsetProps {
  title: React.ReactNode;
  children: React.ReactNode;
  expands?: boolean;
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onExpandChange?(isOpen: boolean): void;
}

const Fieldset = ({
  title,
  children,
  expands,
  isOpen,
  onExpandChange,
}: FieldsetProps) => {
  return (
    <Wrapper $isOpen={isOpen}>
      <Title $isOpen={isOpen}>
        <Stack size="xs" alignItems="center">
          {expands && (
            <Switch
              label="Toggle"
              id="toggle-transaction"
              checked={isOpen}
              onChange={
                onExpandChange
                  ? ({ checked }) => onExpandChange(checked)
                  : undefined
              }
              hideLabel
            />
          )}
          <span
            onClick={onExpandChange ? () => onExpandChange(!isOpen) : undefined}
          >
            {title}
          </span>
        </Stack>
      </Title>
      {expands ? (
        <ExpandPrimitive isOpen={isOpen}>{children}</ExpandPrimitive>
      ) : (
        children
      )}
    </Wrapper>
  );
};

export default Fieldset;
