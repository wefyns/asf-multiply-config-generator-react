import styled, { css } from 'styled-components';

export const Image = styled.img<{
  width?: number;
  height?: number;
  objectFit?: 'none' | 'fill' | 'cover';
}>`
  ${({ width, height, objectFit }) => css`
    width: ${width}px;
    height: ${height}px;
    object-fit: ${objectFit ?? 'fill'};
  `}
`;
