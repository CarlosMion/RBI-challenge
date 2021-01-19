import { DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

import { colors } from './colors';
import { typography } from './typography';

export const LightTheme: DefaultTheme = {
  colors: {
    ...colors,

    // skeleton
    skeletonBackground: `${rgba('#6a4622', 0.4)}`,
    skeletonForeground: `${rgba('#9b7753', 0.4)}`,
  },
  animation: {
    slow: '0.6s',
    normal: '0.3s',
    fast: '0.2s',
  },
  ...typography,
};
