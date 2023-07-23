import * as Styles from './styles';
import { InputColorType, InputSize, InputProps } from './types';

export const Input = ({
  value,
  error,
  label,
  onChange,
  placeholder,
  withBorder = false,
  size = InputSize.MEDIUM,
  colorType = InputColorType.DARK,
}: InputProps) => (
  <div>
    {label && <Styles.Label>{label}</Styles.Label>}

    <Styles.StyledInput
      value={value}
      sizeType={size}
      colorType={colorType}
      withBorder={withBorder}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />

    {error && (
      <Styles.ErrorContainer>
        <Styles.Error>{`${error}`}</Styles.Error>
      </Styles.ErrorContainer>
    )}
  </div>
);
