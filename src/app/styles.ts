import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  height: 100vh;

  ${({ theme }) => css`
    background-color: ${theme.colors.white.primary};
  `}
`;
