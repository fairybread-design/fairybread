import type { Size } from './types';

export const breakpointSizes: { [key in Size]: number } = {
  xxs: 0,
  xs: 420,
  sm: 600,
  md: 768,
  lg: 1000,
  xl: 1350,
  xxl: 1680,
} as const;

export type BreakpointStart = Exclude<Size, 'xxs'>;

const breakpoints = {
  up: (size: BreakpointStart, styles: string) => {
    return `
    @media only screen and (min-width: ${breakpointSizes[size]}px) {
      ${styles}
    }
  `;
  },
  down: (size: BreakpointStart, styles: string) => {
    return `
    @media only screen and (max-width: ${breakpointSizes[size] - 1}px) {
      ${styles}
    }
  `;
  },
  between: (
    start: BreakpointStart,
    end: Exclude<Size, 'xxs' | 'xs'>,
    styles: string
  ) => {
    return `
    @media only screen and (min-width: ${
      breakpointSizes[start]
    }px) and (max-width: ${breakpointSizes[end] - 1}px) {
      ${styles}
    }
  `;
  },
} as const;

export default breakpoints;
