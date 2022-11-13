import React from 'react';

import { ResponsiveSunburst } from '@nivo/sunburst';
import type { SunburstSvgProps } from '@nivo/sunburst';
import tokens from '../../tokens';
import CenteredMetric from './components/centered-metric';

type ResponsiveSunburstProps = Partial<
  Omit<SunburstSvgProps<any>, 'data' | 'width' | 'height'>
> &
  Pick<SunburstSvgProps<any>, 'data'>;

export interface SunburstChartProps
  extends Omit<
    ResponsiveSunburstProps,
    'cornerRadius' | 'layers' | 'arcLabelsTextColor'
  > {
  className?: string;
  title?: string;
  subTitle?: string;
}

const SunburstChart = ({
  data,
  title,
  subTitle,
  colors = [
    tokens['color-border-brand'],
    tokens['color-border-accent'],
    tokens['color-border-accent-pink'],
    tokens['color-border-accent-purple'],
    tokens['color-border-success'],
    tokens['color-border-danger'],
  ],
  enableArcLabels = true,
  arcLabelsSkipAngle = 10,
  arcLabel = 'formattedValue',
  borderWidth = 1,
  value,
  ...rest
}: SunburstChartProps) => {
  return (
    <ResponsiveSunburst
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      cornerRadius={2}
      borderColor={tokens['color-elevation-surface']}
      colors={colors}
      enableArcLabels={enableArcLabels}
      arcLabelsSkipAngle={arcLabelsSkipAngle}
      arcLabelsTextColor={tokens['color-text-inverse']}
      arcLabel={arcLabel}
      value={value}
      borderWidth={borderWidth}
      layers={[
        'arcs',
        'arcLabels',
        ({ ...props }) => (
          <CenteredMetric title={title} subTitle={subTitle} {...props} />
        ),
      ]}
      theme={{
        fontSize: 12,
        fontFamily: tokens['typography-fontFamily'],
      }}
      {...rest}
    />
  );
};

export default SunburstChart;
