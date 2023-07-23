import { LIGHT_THEME } from 'config/themes';

export enum TextVariant {
  h2 = 'h2',
  h1 = 'h1',
  h3 = 'h3',
  body = 'body',
  small = 'small',
  caption = 'caption',
  bodyBold = 'bodyBold',
  smallBold = 'smallBold',
  captionBold = 'captionBold',
}

export interface TextProps {
  styles?: any;
  children?: any;
  variant?: TextVariant;
  colorVariant?: keyof typeof LIGHT_THEME.config.text;
}
