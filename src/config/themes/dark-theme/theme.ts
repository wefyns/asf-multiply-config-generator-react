import { DefaultTheme } from 'styled-components';

import { DARK_COLORS } from './colors';
import { DARK_CONFIG } from './config';

const DARK_THEME: DefaultTheme = Object.freeze({
  colors: DARK_COLORS,
  config: DARK_CONFIG,
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
  scrollBar: DARK_COLORS.black.secondary,
});

export { DARK_THEME };
