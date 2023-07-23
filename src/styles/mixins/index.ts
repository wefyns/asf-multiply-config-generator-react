import { css } from 'styled-components';

export const flexCenterProps = css`
  justify-content: center;
  align-items: center;
`;

export const flexCenter = css`
  display: flex;
  ${flexCenterProps};
`;

export const inlineFlexCenter = css`
  display: inline-flex;
  ${flexCenterProps};
`;

export const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ellipsisText = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const secondLineEllipsisText = css`
  @supports (-webkit-line-clamp: 2) {
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const breakText = css`
  overflow: hidden;
  word-break: break-word;
  hyphens: auto;
`;
