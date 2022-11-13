import styled from 'styled-components';

import type { TagProps } from '..';
import tokens from '../../../tokens';

interface WrapperProps {
  $appearance: TagProps['appearance'];
}

const Wrapper = styled.div<WrapperProps>`
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${tokens['typography-weight-heading']};
  font-size: ${tokens['typography-size-xxxs']};
  border-radius: ${tokens['size-borderRadius']};
  padding: ${tokens['space-xxs']} ${tokens['space-xs']};
  background: ${({ $appearance }) => tokens[`color-background-${$appearance}`]};
  color: ${({ $appearance }) => tokens[`color-text-${$appearance}-bold`]};
`;

export default Wrapper;
