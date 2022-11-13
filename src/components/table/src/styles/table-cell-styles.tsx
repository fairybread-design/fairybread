import { css } from 'styled-components';
import tokens from '../../../tokens';

const tableCellStyles = css`
  color: inherit;
  border: 0;
  padding: 0;
  background: none;

  border-bottom: ${tokens['size-borderWidth']} solid ${tokens['color-border']};
`;

export default tableCellStyles;
