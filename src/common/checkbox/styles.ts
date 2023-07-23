import styled, { css } from 'styled-components';

import { flexCenter } from 'styles/mixins';

export const CheckboxLabel = styled.label<{
  block: boolean;
  checked: boolean;
  disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  ${({ theme }) => css`
    transition: ${theme.transition.default};
  `}

  ${({ theme, block, checked, disabled }) =>
    block &&
    css`
      height: 40px;
      padding: 0 12px;
      background-color: ${checked
        ? theme.config.checkbox.primary
        : theme.config.checkbox.secondary};
      border: 1px solid
        ${checked
          ? theme.config.checkbox.primary
          : theme.config.checkbox.secondary};
      border-radius: ${theme.borderRadius};
      ${disabled && 'pointer-events: none'};

      :hover {
        background-color: ${theme.config.checkbox.primary};
        border-color: ${theme.config.checkbox.secondary};
      }

      :active {
        background-color: ${theme.config.checkbox.primary};
        border-color: ${theme.config.checkbox.secondary};
      }

      ${disabled &&
      css`
        background-color: ${theme.config.checkbox.primary};
        border-color: ${theme.config.checkbox.secondary};
      `};
    `};
`;

export const CheckboxMark = styled.span<{
  label?: string;
}>`
  ${flexCenter};
  position: relative;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 6px;

  ${({ theme, label }) => css`
    border: 2px solid ${theme.config.checkbox.primary};
    margin-left: 3px;
    margin-right: ${label ? 11 : 3}px;

    > svg {
      opacity: 0;

      path,
      rect {
        fill: ${theme.config.checkbox.primary};
      }
    }
  `}
`;

export const StyledIcon = styled.span<{ positionRightIcon?: boolean }>`
  ${flexCenter};
  margin-right: 4px;

  ${({ positionRightIcon }) => css`
    order: ${positionRightIcon ? 1 : 0};
  `}
`;

export const CheckboxText = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const StyledCheckbox = styled.input<{
  block: boolean;
  transparent: boolean;
}>`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;

  ${({ theme, transparent }) => css`
    :checked + ${CheckboxMark} {
      > svg {
        opacity: 1;

        path,
        rect {
          fill: ${transparent
            ? theme.config.checkbox.primary
            : theme.config.checkbox.secondary};
        }
      }
    }

    :hover:not(:checked, :disabled) + ${CheckboxMark} {
      border: 2px solid ${theme.config.checkbox.secondary};

      > svg {
        opacity: 1;

        path,
        rect {
          fill: ${theme.config.checkbox.tetriery};
        }
      }
    }

    :active:not(:checked, :disabled) + ${CheckboxMark} {
      border: 2px solid ${theme.config.checkbox.primary};

      > svg {
        opacity: 1;

        path,
        rect {
          fill: ${theme.config.checkbox.primary};
        }
      }
    }

    :disabled {
      & ~ ${StyledIcon} {
        cursor: initial;

        > svg path,
        > svg rect {
          fill: ${theme.config.checkbox.secondary};
        }
      }

      & ~ ${CheckboxText} {
        cursor: initial;
        color: ${theme.config.checkbox.secondary};
      }

      & ~ ${CheckboxMark} {
        cursor: initial;
        border-color: ${theme.config.checkbox.tetriery};

        > svg path,
        > svg rect {
          fill: ${theme.config.checkbox.secondary};
        }
      }

      :checked ~ ${CheckboxMark} {
        cursor: initial;
        background-color: ${theme.config.checkbox.secondary};
      }
    }
  `};
`;
