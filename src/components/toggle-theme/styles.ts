import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 228px;
  display: flex;
  position: relative;
  border-radius: 12px;
  border: ${({ theme }) => theme.config.toggle.border.all};
`;

export const BackgroundActive = styled.div<{ isActiveDark: boolean }>`
  width: 110px;
  height: 40px;
  position: absolute;
  z-index: 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.config.toggle.bg.active};
  transform: translate(
    2%,
    ${({ theme }) => (theme.responsive.isMobile ? '5%' : '10%')}
  );
  transition: transform 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out;

  ${({ theme, isActiveDark }) =>
    isActiveDark &&
    css`
      transform: translate(102%, ${theme.responsive.isMobile ? '5%' : '10%'});
      transition: transform 0.3s ease-out, width 0.3s ease-out,
        height 0.3s ease-out;
    `}

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
    transform: translate(
      17%,
      ${({ theme }) => (theme.responsive.isMobile ? '5%' : '10%')}
    );
    transition: transform 0.3s ease-out, width 0.3s ease-out,
      height 0.3s ease-out;

    ${({ theme, isActiveDark }) =>
      isActiveDark &&
      css`
        transform: translate(130%, ${theme.responsive.isMobile ? '5%' : '10%'});
        transition: transform 0.3s ease-out, width 0.3s ease-out,
          height 0.3s ease-out;
      `}
  }

  @media screen and (max-width: 500px) {
    width: 80px;
    height: 44px;
    transform: translate(
      3%,
      ${({ theme }) => (theme.responsive.isMobile ? '4%' : '10%')}
    );
    transition: transform 0.3s ease-out, width 0.3s ease-out,
      height 0.3s ease-out;

    ${({ theme, isActiveDark }) =>
      isActiveDark &&
      css`
        transform: translate(109%, ${theme.responsive.isMobile ? '4%' : '10%'});
        transition: transform 0.3s ease-out, width 0.3s ease-out,
          height 0.3s ease-out;
      `}
  }
`;

export const TabThemeLabel = styled.div<{ isActive: boolean }>`
  padding: 12px 0px 12px 13px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  cursor: pointer;

  ${({ isActive, theme }) => css`
    color: ${isActive
      ? theme.config.toggle.bg.default
      : theme.config.toggle.bg.disabled};
  `}

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    padding: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;

export const TabTheme = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconThemeContainer = styled.div`
  display: flex;
  margin-left: 16px;
  align-items: center;
  justify-content: center;
  transform: all 0.3s ease-out;

  svg path {
    fill: ${({ theme }) => theme.config.toggle.icon};
  }

  @media screen and (max-width: 767px) {
    margin-left: 7px;
    padding: 5px 0px;
  }
`;
