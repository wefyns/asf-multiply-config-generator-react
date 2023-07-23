import { ButtonHTMLAttributes } from 'react';

import * as Styles from './styles';
import { ButtonVariant } from './types';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
  variant?: keyof typeof ButtonVariant;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
  text,
  onClick,
  disabled,
  variant = ButtonVariant.PRIMARY,
  ...props
}: ButtonBaseProps) => (
  <div>
    <Styles.StyledButton
      variant={variant}
      disabled={disabled}
      onClick={(e) => onClick && onClick(e)}
      {...props}
    >
      <span>{text}</span>
    </Styles.StyledButton>
  </div>
);
