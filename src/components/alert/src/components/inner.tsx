import styled from 'styled-components';

import breakpoints from '../../../../styles/breakpoints';
import tokens from '../../../tokens';

const Inner = styled.div`
  ${breakpoints.up(
    'sm',
    `
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: ${tokens['space-xs']};
    `
  )}
`;

export default Inner;
