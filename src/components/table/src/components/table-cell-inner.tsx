import styled from 'styled-components';

interface CellInnerProps {
  children: React.ReactNode;
  ellipsis?: boolean;
}

const CellInner = ({ children, ellipsis }: CellInnerProps) => {
  return (
    <Wrapper>
      <Inner ellipsis={ellipsis}>{children}</Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Inner = styled.div<{ ellipsis?: boolean }>`
  flex: 1 1 auto;

  ${({ ellipsis }) =>
    ellipsis &&
    `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}
`;

export default CellInner;
