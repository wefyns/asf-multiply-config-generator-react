import { HTMLProps } from 'react';

export enum InputColorType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export enum InputSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  BIG = 'BIG',
}
export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  error?: string;
  label?: string;
  onChange?: any;
  placeholder?: string;
  withBorder?: boolean;
  size?: keyof typeof InputSize;
  colorType?: keyof typeof InputColorType;
}
