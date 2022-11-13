import styled from 'styled-components';

import tokens from '../../../tokens';

interface WrapperProps {
  $isLink?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  border: ${tokens[`size-borderWidth`]} solid ${tokens[`color-border`]};
  background: ${tokens['color-elevation-surface-raised']};
  border-radius: ${tokens['size-borderRadius']};
  overflow: hidden;

  ${({ $isLink }) =>
    $isLink &&
    `
      cursor: pointer;
      display: block;
      text-decoration: none;
      transition: box-shadow 200ms ease;

      &:hover,
      &:focus {
        box-shadow: ${tokens['color-elevation-shadow-raised']};
      }
    `}
`;

export default Wrapper;
