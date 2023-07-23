import styled, { css } from 'styled-components';

export const Inner = styled.div<{
  paddingTop?: number;
  withoutPadding?: boolean;
}>`
  height: 100%;
  overflow-y: auto;
  position: relative;
  ${({ paddingTop, withoutPadding }) =>
    !withoutPadding &&
    css`
      padding: ${paddingTop ? `${paddingTop}px 16px 0 16px` : '0 16px'};
    `}
`;
