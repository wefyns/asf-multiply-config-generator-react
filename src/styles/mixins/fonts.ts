import { css } from 'styled-components';

const message = css`
  ${({ theme }) => css`
    font-size: ${theme.fonts?.message?.fontSize ?? 16}px;
    line-height: ${theme.fonts?.message?.lineHeight ?? 22}px;
  `};
`;

const small = css`
  ${({ theme }) => css`
    font-size: ${theme.fonts?.small?.fontSize ?? 14}px;
    line-height: ${theme.fonts?.small?.lineHeight ?? 20}px;
  `};
`;

const body = css`
  ${({ theme }) => css`
    font-size: ${theme.fonts?.body?.fontSize ?? 14}px;
    line-height: ${theme.fonts?.body?.lineHeight ?? 24}px;
  `};
`;

const ultraSmall = css`
  ${({ theme }) => css`
    font-size: ${theme.fonts?.ultraSmall?.fontSize ?? 12}px;
    line-height: ${theme.fonts?.ultraSmall?.lineHeight ?? 16}px;
  `};
`;

export const bodySemibold = css`
  font-weight: 600;
  ${body};
`;

export const bodyRegular = css`
  font-weight: 400;
  ${body};
`;

export const messageSemibold = css`
  font-weight: 600;
  ${message};
`;

export const messagesRegular = css`
  font-weight: 400;
  ${message};
`;

export const messagesSmallSemibold = css`
  font-weight: 600;
  ${small};
`;

export const messagesSmallRegular = css`
  font-weight: 400;
  ${small};
`;

export const captionSemibold = css`
  font-weight: 600;
  ${ultraSmall};
`;

export const captionRegular = css`
  font-weight: 400;
  ${ultraSmall};
`;

export const captionBold = css`
  font-weight: 700;
  ${ultraSmall};
`;

export const chatTimeRegular = css`
  font-size: 10px;
  line-height: 16px;
  font-weight: 400;
`;

export const heading1 = css`
  font-size: 32px;
  line-height: 48px;
  font-weight: 800;
`;

export const heading2 = css`
  font-size: 24px;
  line-height: 48px;
  font-weight: 800;
`;

export const heading3 = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
`;
