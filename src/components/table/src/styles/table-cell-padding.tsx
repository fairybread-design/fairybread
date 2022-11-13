import tokens from '../../../tokens';

const tableCellPadding = {
  xxs: tokens['space-xxs'],
  sm: tokens['space-xs'],
  md: `${tokens['space-xs']} ${tokens['space-sm']}`,
} as const;

export default tableCellPadding;
