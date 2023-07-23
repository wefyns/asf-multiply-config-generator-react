import { DefaultTheme } from 'styled-components';

import { LIGHT_COLORS } from './colors';
import { LIGHT_CONFIG } from './config';

const LIGHT_THEME: DefaultTheme = Object.freeze({
  colors: LIGHT_COLORS,
  config: LIGHT_CONFIG,
  borderRadius: '8px',
  transition: {
    default: 'all ease-in-out 0.2s',
  },
  responsive: {
    isDesktop: true,
    isTablet: false,
    isTabletUp: false,
    isMobile: false,
  },
  scrollBar: LIGHT_COLORS.black.secondary,
});

export { LIGHT_THEME };
