import type { SunburstCustomLayerProps } from '@nivo/sunburst';
import tokens from '../../../tokens';

interface CenteredMetricProps extends SunburstCustomLayerProps<any> {
  title?: string;
  subTitle?: string;
}

const CenteredMetric = ({
  title,
  subTitle,
  centerX,
  centerY,
}: CenteredMetricProps) => {
  return title ? (
    <>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {subTitle && (
          <text
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontSize: '105%',
              fontWeight: 600,
              fill: tokens['color-text'],
            }}
            y={-28}
          >
            {subTitle}
          </text>
        )}
        <text
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: '180%',
            fontWeight: 600,
            fill: tokens['color-text'],
          }}
        >
          {title}
        </text>
      </g>
    </>
  ) : null;
};

export default CenteredMetric;
