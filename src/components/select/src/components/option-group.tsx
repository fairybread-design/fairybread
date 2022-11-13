import React from 'react';

export interface OptionGroupProps {
  children: React.ReactNode;
  label: string;
}

// TODO: Check children are <Option> components
const OptionGroup = ({ label, children }: OptionGroupProps) => {
  return <optgroup label={label}>{children}</optgroup>;
};

export default OptionGroup;
