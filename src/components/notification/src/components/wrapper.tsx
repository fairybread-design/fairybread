import styled from 'styled-components';
import tokens from '../../../tokens';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: ${tokens['space-md']};
  left: 0;
  right: 0;
  height: 0;
`;

export default Wrapper;
