import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';
import tokens from '../tokens';

export interface StatisticProps {
  className?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

const _Statistic = ({
  className,
  children,
  title,
  subtitle,
}: StatisticProps) => {
  return (
    <div className={className}>
      <Title>{title}</Title>
      <Value>{children}</Value>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  );
};

const Title = styled.p`
  font-weight: ${tokens['typography-weight-heading']};
  color: ${tokens['color-text-subtle']};
  margin: 0;
  line-height: 1.2;
  font-size: ${tokens['typography-size-xxxs']};
  white-space: nowrap;

  ${breakpoints.up('md', `font-size: ${tokens['typography-size-xs']};`)}
  ${breakpoints.up('lg', `font-size: ${tokens['typography-size']};`)}
`;

const Value = styled.p`
  font-weight: ${tokens['typography-weight-heading']};
  color: ${tokens['color-text']};
  margin: 0;
  line-height: 1.2;
  font-size: 24px;
  white-space: nowrap;

  ${breakpoints.up('md', 'font-size: 32px;')}
  ${breakpoints.up('xl', 'font-size: 44px;')}
`;

const Subtitle = styled.p`
  color: ${tokens['color-text']};
  font-size: ${tokens['typography-size-xxxs']};
  margin: 0;
  line-height: 1.2;

  ${breakpoints.up('sm', `font-size: ${tokens['typography-size-xxs']};`)}
  ${breakpoints.up('md', `font-size: ${tokens['typography-size-xs']};`)}
`;

const Statistic = styled(_Statistic)``;

export default Statistic;
