import { Icon } from 'common/icon';

import {
  StyledIcon,
  CheckboxText,
  CheckboxMark,
  StyledCheckbox,
  CheckboxLabel,
} from './styles';
import { CheckboxProps } from './types';

const Checkbox = ({
  id,
  icon,
  label,
  disabled,
  className,
  block = false,
  checked = false,
  positionRightIcon,
  transparent = false,
  checkedIcon = <Icon.Check />,
  ...props
}: CheckboxProps): JSX.Element => {
  const checkboxId = id || label;

  return (
    <CheckboxLabel
      block={block}
      checked={checked}
      disabled={disabled}
      htmlFor={checkboxId}
      className={className}
    >
      <StyledCheckbox
        block={block}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        transparent={transparent}
        id={checkboxId}
        {...props}
      />

      <CheckboxMark label={label}>{checkedIcon}</CheckboxMark>

      {icon && (
        <StyledIcon positionRightIcon={positionRightIcon}>{icon}</StyledIcon>
      )}

      {label && <CheckboxText>{label}</CheckboxText>}
    </CheckboxLabel>
  );
};

Checkbox.defaultProps = {
  icon: undefined,
  label: undefined,
  positionRightIcon: false,
};

export { Checkbox };
export type { CheckboxProps };
