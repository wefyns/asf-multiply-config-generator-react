import 'styled-components';

import { FontsConfig } from './types';
import { LIGHT_COLORS } from './light-theme/colors';
import { LIGHT_CONFIG } from './light-theme/config';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof LIGHT_COLORS;
    config: typeof LIGHT_CONFIG;
    borderRadius: string;
    transition: {
      default: string;
    };
    responsive: {
      isDesktop: boolean;
      isTablet: boolean;
      isTabletUp: boolean;
      isMobile: boolean;
    };
    fonts?: FontsConfig;
    scrollBar?: string;
  }
}
