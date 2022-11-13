import React from 'react';

import { ResponsiveLine } from '@nivo/line';
import type { LineSvgProps } from '@nivo/line';
import tokens from '../tokens';
import breakpoints from '../../styles/breakpoints';
import { createGlobalStyle } from 'styled-components';

export interface LineChartProps extends LineSvgProps {
  className?: string;
}

/**
 * Use CSS variables to make chart font size
 * responsive.
 */
const GlobalStyle = createGlobalStyle`
  :root {
    --eds-line-chart-font-size: 11px;
  }
    ${breakpoints.up(
      'sm',
      `
        :root {
          --eds-line-chart-font-size: 13px;
        }
      `
    )}
`;

const LineChart = ({
  data,
  enablePoints = false,
  useMesh = true,
  lineWidth = 1.5,
  pointSize = 6,
  colors = [
    tokens['color-border-brand'],
    tokens['color-border-accent'],
    tokens['color-border-accent-purple'],
    tokens['color-border-accent-pink'],
  ],
  ...rest
}: LineChartProps) => {
  return (
    <>
      <GlobalStyle />
      <ResponsiveLine
        data={data}
        enablePoints={enablePoints}
        pointSize={pointSize}
        useMesh={useMesh}
        lineWidth={lineWidth}
        theme={{
          // @ts-ignore
          fontSize: 'var(--eds-line-chart-font-size)',
          textColor: tokens['color-text'],
          fontFamily: tokens['typography-fontFamily'],
          crosshair: {
            line: {
              strokeWidth: 2,
              stroke: tokens['color-border-brand'],
              strokeOpacity: 1,
            },
          },
          axis: {
            domain: {
              line: {
                stroke: tokens['color-border'],
              },
            },
            ticks: {
              line: {
                stroke: tokens['color-border'],
              },
              text: {
                fill: tokens['color-text-subtle'],
              },
            },
          },
          grid: {
            line: {
              stroke: tokens['color-border'],
              opacity: 0.5,
            },
          },
        }}
        colors={colors}
        {...rest}
      />
    </>
  );
};

export default LineChart;
