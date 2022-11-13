import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import tokens from '../../../tokens';

const Title = styled.legend<{ $isOpen?: boolean }>`
  margin: 0;
  font-weight: ${tokens['typography-weight-heading']};
  font-size: ${tokens['typography-size']};
  transition: padding 200ms ease;

  ${breakpoints.up('sm', `font-size: 18px;`)}

  ${({ $isOpen = true }) => {
    if ($isOpen === false) {
      return `
        padding: 0;
      `;
    }

    return `
        padding: 0 ${tokens['space-xs']};
    `;
  }}
`;

export default Title;
