import styled from 'styled-components';
import Spinner from '.';

export interface SpinnerSectionProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const SpinnerSection = ({ isLoading, children }: SpinnerSectionProps) => {
  return (
    <Position>
      {isLoading && (
        <SpinPosition>
          <Spinner size="lg" />
        </SpinPosition>
      )}
      <FadeOut $isLoading={isLoading}>{children}</FadeOut>
    </Position>
  );
};

export default SpinnerSection;

const Position = styled.div`
  position: relative;
`;

const SpinPosition = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FadeOut = styled.div<{ $isLoading: boolean }>`
  opacity: ${({ $isLoading }) => ($isLoading ? '0.3' : '1')};
  transition: opacity 100ms ease;
`;
