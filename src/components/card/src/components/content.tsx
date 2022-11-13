import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';

import tokens from '../../../tokens';

interface ContentProps {}

const Content = styled.div<ContentProps>`
  padding: ${tokens['space-sm']};

  & > :last-child {
    margin-bottom: 0;
  }

  ${breakpoints.up('md', `padding: ${tokens['space-md']};`)}
`;

export default Content;
