import * as Styles from './styles';
import { TextProps } from './types';

export const Text = ({
  styles,
  variant,
  children,
  colorVariant,
}: TextProps) => (
  <Styles.StyledText
    style={styles}
    variant={variant}
    colorVariant={colorVariant}
  >
    {children}
  </Styles.StyledText>
);
