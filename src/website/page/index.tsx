import Header from '../header';
import Footer from '../footer';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import tokens from '../../components/tokens';

export interface PageProps {
  children?: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <Wrapper>
      <MobileWrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </MobileWrapper>
    </Wrapper>
  );
};

const Main = styled.main`
  & > .section:first-child {
    padding-top: ${tokens['space-xs']};
  }
`;

const Wrapper = styled.div`
  ${breakpoints.up('md', 'display: flex;')}
`;

const MobileWrapper = styled.div`
  ${breakpoints.up('md', 'flex: 1 1 auto;')}
`;

export default Page;
