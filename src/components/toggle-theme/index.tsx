import { ThemeContext } from 'context';
import { useContext } from 'react';

import { Icon } from 'common/icon';
import * as Styles from './styles';

export const ToggleTheme = () => {
  const { isDarkTheme, selectTheme } = useContext(ThemeContext);

  const handleThemeToggle = () =>
    selectTheme && selectTheme(!isDarkTheme ?? false);

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.TabTheme
          onClick={() => {
            if (isDarkTheme) {
              handleThemeToggle();
            }
          }}
        >
          <Styles.IconThemeContainer>
            {isDarkTheme ? <Icon.SunNoFill /> : <Icon.SunFill />}
          </Styles.IconThemeContainer>
          <Styles.TabThemeLabel isActive={!isDarkTheme}>
            Light
          </Styles.TabThemeLabel>
        </Styles.TabTheme>

        <Styles.TabTheme
          onClick={() => {
            if (!isDarkTheme) {
              handleThemeToggle();
            }
          }}
        >
          <Styles.IconThemeContainer>
            {isDarkTheme ? <Icon.MoonFill /> : <Icon.MoonNoFill />}
          </Styles.IconThemeContainer>
          <Styles.TabThemeLabel isActive={isDarkTheme}>
            Dark
          </Styles.TabThemeLabel>
        </Styles.TabTheme>
      </Styles.Wrapper>
      <Styles.BackgroundActive isActiveDark={isDarkTheme} />
    </Styles.Container>
  );
};
