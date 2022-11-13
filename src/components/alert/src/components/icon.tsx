import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { AlertProps } from '..';
import tokens from '../../../tokens';

interface IconProps {
  $appearance: AlertProps['appearance'];
}

const Icon = styled(FontAwesomeIcon)<IconProps>`
  color: ${({ $appearance }) => tokens[`color-icon-${$appearance}`]};
  display: block;
`;

export default Icon;
