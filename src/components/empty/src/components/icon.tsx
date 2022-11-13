import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import tokens from '../../../tokens';

const Icon = styled(FontAwesomeIcon)`
  color: ${tokens['color-icon-brand']};
  font-size: 34px;
  margin-bottom: ${tokens['space-sm']};
`;

export default Icon;
