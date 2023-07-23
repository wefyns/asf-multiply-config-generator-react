import styled, { css } from 'styled-components';

import * as Styles from 'styles';

import { InputColorType, InputSize } from './types';

const { captionSemibold } = Styles.Font;

export const StyledInput = styled.input<{
  withBorder: boolean;
  sizeType: keyof typeof InputSize;
  colorType: keyof typeof InputColorType;
}>`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 400;
  padding-left: 8px;
  border-radius: 4px;
  padding: '8px 16px';
  box-sizing: border-box;
  transition: 150ms linear;

  border-width: ${({ withBorder }) => (withBorder ? 2 : 0)}px;
  border: ${({ withBorder }) => (withBorder ? 'solid' : 'none')};

  ${({ sizeType, theme }) => {
    switch (sizeType) {
      case InputSize.SMALL:
        return css`
          height: ${theme.responsive.isMobile ? 36 : 48}px;
          font-size: 16px;
        `;
      case InputSize.MEDIUM:
        return css`
          height: ${theme.responsive.isMobile ? 40 : 56}px;
          font-size: 24px;
        `;
      case InputSize.BIG:
        return css`
          height: ${theme.responsive.isMobile ? 48 : 72}px;
          font-size: 32px;
        `;
      default:
        return css`
          height: ${theme.responsive.isMobile ? 40 : 56}px;
          font-size: 24px;
        `;
    }
  }}

  ${({ colorType, theme }) => {
    switch (colorType) {
      case InputColorType.LIGHT:
        return css`
          color: ${theme.config.input.light.text};
          border-color: ${theme.config.input.light.text};
          background: ${theme.config.input.light.background};
        `;
      case InputColorType.DARK:
        return css`
          color: ${theme.config.input.dark.text};
          border-color: ${theme.config.input.dark.text};
          background: ${theme.config.input.dark.background};
        `;
      default:
        return css`
          color: ${theme.config.input.light.text};
          border-color: ${theme.config.input.light.text};
          background: ${theme.config.input.light.background};
        `;
    }
  }}
`;

export const LabelContainer = styled.div``;

export const ErrorContainer = styled.div`
  margin-top: 8px;
`;

export const Label = styled.div<{ isError?: boolean }>`
  ${captionSemibold}
  font-size: 13.5px;
  padding: 0px 0px 8px;
  ${({ theme, isError }) => css`
    color: ${isError
      ? theme.config.input.light.error
      : theme.config.input.light.text};
  `}
`;

export const Error = styled.div`
  ${captionSemibold}
  font-style: italic;
  padding: 0px 0px 8px;
  ${({ theme }) => css`
    color: ${theme.config.input.light.error};
  `}
`;
