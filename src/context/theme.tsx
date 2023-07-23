import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
  PropsWithChildren,
} from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { ChildrenProps } from 'types';
import { DARK_THEME, LIGHT_THEME } from 'config/themes';
import { getIsDarkTheme, saveDarkTheme } from 'utils/storage';
import { isMobile, isTablet, isDesktop, isTabletUp } from 'hooks';
import { FontsConfig, DefaultFontsConfig } from 'config/themes/types';

interface ThemeContextProps {
  isDarkTheme: boolean;
  theme: DefaultTheme;
  selectTheme?: (isDarkTheme?: boolean) => void;
}

interface ThemeContextProviderProps {
  isDarkMode?: boolean;
  fontsConfig?: FontsConfig;
}

const getIsCurrentThemeDark = () => {
  const isDarkTheme =
    getIsDarkTheme() ??
    (window.matchMedia &&
      !!window.matchMedia('(prefers-color-scheme: dark)').matches);
  return isDarkTheme;
};

const getInitialState = (): ThemeContextProps => {
  const isDarkTheme = getIsCurrentThemeDark();
  return {
    isDarkTheme: getIsCurrentThemeDark(),
    theme: isDarkTheme ? DARK_THEME : LIGHT_THEME,
  };
};

export const ThemeContext = React.createContext<ThemeContextProps>(
  getInitialState()
);

export const ThemeContextProvider = ({
  children,
  isDarkMode,
  fontsConfig,
}: PropsWithChildren<ThemeContextProviderProps>): JSX.Element => {
  const [isDarkTheme, setDarkTheme] = useState(getInitialState().isDarkTheme);

  useEffect(() => {
    if (typeof isDarkMode === 'boolean') {
      setDarkTheme(isDarkMode);
    }
  }, [isDarkMode]);

  const responsive = {
    isDesktop: isDesktop(),
    isMobile: isMobile(),
    isTabletUp: isTabletUp(),
    isTablet: isTablet(),
  };

  const selectTheme = useCallback(
    (isDark?: boolean) => {
      saveDarkTheme(isDark);
      setDarkTheme(getIsCurrentThemeDark());
    },
    [isDarkTheme]
  );

  const value = useMemo(() => {
    const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;
    return {
      isDarkTheme,
      selectTheme,
      theme: {
        ...theme,
        responsive,
        fonts: {
          ...DefaultFontsConfig,
          ...fontsConfig,
        },
      },
    };
  }, [isDarkTheme, selectTheme, responsive]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const ThemeWrap = ({ children }: ChildrenProps): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
