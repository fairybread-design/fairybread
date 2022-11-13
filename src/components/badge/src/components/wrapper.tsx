import styled from 'styled-components';

import type { BadgeProps } from '..';
import tokens from '../../../tokens';

interface WrapperProps {
  $appearance: BadgeProps['appearance'];
}

const Wrapper = styled.div<WrapperProps>`
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${tokens['typography-weight-heading']};
  font-size: ${tokens['typography-size-xxxs']};
  border-radius: 30px;
  padding: 2px 5px;
  background: ${({ $appearance }) => tokens[`color-background-${$appearance}`]};
  border: 1px solid
    ${({ $appearance }) => tokens[`color-border-${$appearance}`]};
  color: ${({ $appearance }) => tokens[`color-text-${$appearance}-bold`]};
  line-height: 1;
  min-height: 19px;
  min-width: 19px;
`;

export default Wrapper;
