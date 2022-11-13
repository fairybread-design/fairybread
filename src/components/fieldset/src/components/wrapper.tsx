import styled from 'styled-components';

import tokens from '../../../tokens';

const Wrapper = styled.fieldset<{ $isOpen?: boolean }>`
  margin: 0;
  border-radius: ${tokens['size-borderRadius']};
  transition: padding 200ms ease;

  ${({ $isOpen = true }) => {
    if ($isOpen === false) {
      return `
      padding: 0;
      border: 0;
      `;
    }

    return `
      border: ${tokens['size-borderWidth']} solid ${tokens['color-border']};
      padding: ${tokens['space-xs']} ${tokens['space-sm']} ${tokens['space-sm']};
    `;
  }}
`;

export default Wrapper;
