import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import Container from '../container';

import tokens from '../tokens';

export interface SectionProps {
  children?: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <StyledSection className="section">
      <Container>{children}</Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  border-top: ${tokens['size-borderWidth']} solid ${tokens['color-border']};

  &:first-child {
    border-top: 0;
  }

  padding-top: ${tokens['space-lg']};
  padding-bottom: ${tokens['space-lg']};

  ${breakpoints.up(
    'lg',
    `
    padding-top: ${tokens['space-xl']};
    padding-bottom: ${tokens['space-xl']};
`
  )}
`;

export default Section;
