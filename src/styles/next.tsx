import { createGlobalStyle } from 'styled-components';

// Workaround for Prettier formatting not working for createGlobalStyle
// see https://github.com/prettier/prettier/issues/11196#issuecomment-951878725
const styled = { createGlobalStyle };

const NextStyle = styled.createGlobalStyle`
  html,
  body,
  #__next {
    height: 100%;
  }
`;

export default NextStyle;
