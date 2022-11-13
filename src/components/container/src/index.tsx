import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';
import tokens from '../../tokens';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const _Container = ({ className, children }: ContainerProps) => {
  return <div className={className}>{children}</div>;
};

const Container = styled(_Container)`
  max-width: 1680px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${tokens['space-sm']};

  ${breakpoints.up('sm', `padding: 0 ${tokens['space-md']};`)}
  ${breakpoints.up('md', `padding: 0 ${tokens['space-lg']};`)}
`;

export default Container;
