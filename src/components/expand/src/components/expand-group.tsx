import styled from 'styled-components';

/**
 * TODO: Eventually this could control the open state of expand sections,
 * similar to https://ant.design/components/collapse/?locale=en-US
 *
 * I just don't think it's necessary at this stage as controlling expands
 * individually meets my needs
 */
const ExpandGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  & > div {
    &:not(:first-child) {
      margin-top: -1px;
    }
    &:not(:last-child) {
      margin-bottom: -1px;
    }
  }
`;

export default ExpandGroup;
