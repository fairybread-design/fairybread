import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import tokens from '../components/tokens';
import { typography, size, space, light, dark } from '../components/tokens';

// https://stackoverflow.com/a/66575373
import '@fortawesome/fontawesome-svg-core/styles.css';
import breakpoints from './breakpoints';

// TODO: Need to review if all these styles should belong in the design system folder, as their own 'packages'

// Workaround for Prettier formatting not working for createGlobalStyle
// see https://github.com/prettier/prettier/issues/11196#issuecomment-951878725
const styled = { createGlobalStyle };

// TODO: Relocate CSS-only scroll overflow indicators for react-virtualized. Use specific selectors.
const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  :root {
    ${typography}
    ${size}
    ${space}
  }

  :root {
    @media (prefers-color-scheme: light) {
      ${light}
    }

    @media (prefers-color-scheme: dark) {
      ${dark}
    }
  }

  html[data-theme='light'] {
    ${light}
  }

  html[data-theme='dark'] {
    ${dark}
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    scroll-behavior: smooth;

    /**
     * Prevents scrollbar hiding causing page to jump when modals disable scroll on body
     * https://stackoverflow.com/a/35437970
     */
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    line-height: ${tokens['typography-lineHeight']};
    color: ${tokens['color-text']};
    background: ${tokens['color-elevation-surface']};
    font-family: ${tokens['typography-fontFamily']}, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    font-size: ${tokens['typography-size-xs']};
    font-weight: ${tokens['typography-weight']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-variant-ligatures: none;

    ${breakpoints.up('md', `font-size: ${tokens['typography-size-sm']};`)}
    ${breakpoints.up('lg', `font-size: ${tokens['typography-size']};`)}
  }

  ::selection {
    background: ${tokens['color-background-brand']};
    color: ${tokens['color-text-inverse']};
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
    max-height: inherit;
  }

  a {
    color: ${tokens['color-text-link']};
  }

  p {
    margin: 0 0 1em;
  }

  b,
  strong {
    font-weight: bold;
  }

  code {
    font-family: Menlo, Monaco, 'Courier New', Courier, monospace;
    background: ${tokens['color-background-neutral-bold']};
    color: ${tokens['color-text']};
    font-size: ${tokens['typography-size-xxxs']};
    padding: 2px 4px;
    border-radius: 4px;
  }

  /* TODO: Move to relevant packages */
  .ReactVirtualized__Grid {
    background-repeat: no-repeat;
    background-attachment: local, local, scroll, scroll;
    background-size: 100% ${tokens['space-sm']}, 100% ${tokens['space-sm']},
      100% ${tokens['space-sm']}, 100% ${tokens['space-sm']};
    background-position: 0 100%, 0 0, 0 100%, 0 0;
    background-image: 
      /* Bottom shadow */ linear-gradient(
        to top,
        ${tokens['color-elevation-surface']} ${tokens['space-sm']},
        transparent ${tokens['space-sm']}
      ),
      /* Top shadow */
        linear-gradient(
          to bottom,
          ${tokens['color-elevation-surface']} ${tokens['space-sm']},
          transparent ${tokens['space-sm']}
        ),
      /* Overflow shadow bottom */
        linear-gradient(
          to top,
          ${tokens['color-elevation-shadow-lowered-color']} 0,
          transparent ${tokens['space-sm']}
        ),
      /* Overflow shadow top */
        linear-gradient(
          to bottom,
          ${tokens['color-elevation-shadow-lowered-color']} 0,
          transparent ${tokens['space-sm']}
        );
  }
`;

export default GlobalStyle;
