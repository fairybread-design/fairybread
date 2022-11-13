import React from 'react';

export interface OptionProps {
  children: React.ReactNode;
  value: string | number;
  isDisabled?: boolean;
}

const Option = ({ isDisabled, children, value }: OptionProps) => {
  return (
    <option value={value} disabled={isDisabled}>
      {children}
    </option>
  );
};

export default Option;
