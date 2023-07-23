import styled, { css } from 'styled-components';

import { ButtonVariant } from './types';

export const StyledButton = styled.button<{
  variant?: keyof typeof ButtonVariant;
}>`
  width: 100%;
  outline: none;

  font-weight: 400;
  padding: 2px 16px;
  box-sizing: border-box;
  transition: 150ms linear;

  ${({ variant, theme }) => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return css`
          background-color: ${theme.colors.blue.primary};
          &:hover {
            background: ${theme.config.button.secondary};
          }
          &:active {
            background: ${theme.config.button.tetriery};
          }
        `;
      case ButtonVariant.CANCEL:
        return css`
          background-color: ${theme.colors.red.primary};
          &:hover {
            background: ${theme.colors.red.secondary};
          }
          &:active {
            background: ${theme.colors.red.tetriery};
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.blue.primary};
          &:hover {
            background: ${theme.config.button.secondary};
          }
          &:active {
            background: ${theme.config.button.tetriery};
          }
        `;
    }
  }};

  ${({ theme }) => css`
    height: 40px;
    border-radius: 4px;
    padding: '8px 16px';
    color: ${theme.config.button.text};

    &:disabled {
        opacity: 0.5;
        cursor: initial;
  `}
`;
