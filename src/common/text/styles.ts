import styled, { css } from 'styled-components';
import { TextProps, TextVariant } from './types';

import * as Styles from 'styles';
const {
  heading1,
  heading3,
  heading2,
  captionBold,
  bodyRegular,
  bodySemibold,
  captionRegular,
  messagesSmallRegular,
  messagesSmallSemibold,
} = Styles.Font;

export const StyledText = styled.div<TextProps>`
  ${({ variant }) => {
    switch (variant) {
      case TextVariant.h1:
        return css`
          ${heading1}
        `;
      case TextVariant.h2:
        return css`
          ${heading2}
        `;
      case TextVariant.h3:
        return css`
          ${heading3}
        `;
      case TextVariant.body:
        return css`
          ${bodyRegular}
        `;
      case TextVariant.bodyBold:
        return css`
          ${bodySemibold}
        `;
      case TextVariant.caption:
        return css`
          ${captionRegular}
        `;
      case TextVariant.captionBold:
        return css`
          ${captionBold}
        `;
      case TextVariant.small:
        return css`
          ${messagesSmallRegular}
        `;
      case TextVariant.smallBold:
        return css`
          ${messagesSmallSemibold}
        `;

      default:
        return css`
          ${bodySemibold}
        `;
    }
  }};

  ${({ colorVariant, theme }) => {
    switch (colorVariant) {
      case 'primary':
        return css`
          color: ${theme.config.text.primary};
        `;
      case 'secondary':
        return css`
          color: ${theme.config.text.secondary};
        `;
      case 'tetriery':
        return css`
          color: ${theme.config.text.tetriery};
        `;

      default:
        return css`
          color: ${theme.config.text.primary};
        `;
    }
  }};
`;
