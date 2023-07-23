import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  block?: boolean;
  checked?: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
  rectangle?: boolean;
  transparent?: boolean;
  positionRightIcon?: boolean;
  checkedIcon?: JSX.Element;
}
