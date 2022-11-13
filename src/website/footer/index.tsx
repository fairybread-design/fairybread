import styled from 'styled-components';
import format from 'date-fns/format';
import Container from '../../components/container';

import tokens from '../../components/tokens';
import Stack from '../../components/stack';
import LinkButton from '../../components/link-button';
import { faCupTogo } from '@fortawesome/sharp-solid-svg-icons';

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <StyledFooter>
      <Container>
        <Stack justifyContent="space-between" isInline={false}>
          <div>&copy; {format(new Date(), 'yyyy')} Figura Finance</div>
          <div>
            <LinkButton
              href="https://www.buymeacoffee.com/figura.finance"
              target="_blank"
              iconAfter={faCupTogo}
            >
              Buy me a coffee
            </LinkButton>
          </div>
        </Stack>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 60px;
  color: ${tokens['color-text-subtle']};
  border-top: ${tokens['size-borderWidth']} solid ${tokens['color-border']};
  display: flex;
  align-items: center;
  font-size: ${tokens['typography-size-xxs']};
`;

export default Footer;
