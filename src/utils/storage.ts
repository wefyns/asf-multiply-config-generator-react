const themeKey = 'theme';

export const saveDarkTheme = (isDarkTheme?: boolean) => {
  if (typeof isDarkTheme === 'boolean') {
    localStorage.setItem(themeKey, String(isDarkTheme));
  } else {
    localStorage.removeItem(themeKey);
  }
};

export const getIsDarkTheme = (): boolean | undefined => {
  const isDarkTheme = localStorage.getItem(themeKey);
  if (isDarkTheme === null) return undefined;
  return isDarkTheme === 'true';
};
