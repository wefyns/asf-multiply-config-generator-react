import styled, { css } from 'styled-components';

export const Container = styled.div<{
  gap?: number;
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
}>`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  ${({ flexDirection, justifyContent, alignItems, gap }) => css`
    gap: ${gap}px;
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
  `}
`;
