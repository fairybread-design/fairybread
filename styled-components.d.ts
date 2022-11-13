/**
 * This file extends styled-components for Typescript support
 * @see https://styled-components.com/docs/api#typescript
 */

// import original module declarations
import 'styled-components';

import type { ThemeType } from './src/styles/themes';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
