import { Scrollbar, ScrollbarAutoHide } from 'components/styles';
import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  width: 100%;
  overflow: scroll;
  left: 94px;
  width: calc(100vw - 94px);
  /* height: 90px; */
  background-color: ${({ theme }) => theme.colors.silverDark};
  ${Scrollbar}
  ${ScrollbarAutoHide}

  @media only screen and (min-width: 481px) {
    width: calc(100vw - 136px);
    left: 126px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 90px;
  z-index: 1;
  box-shadow: ${({ theme }) =>
    `8px 0px 10px -5px ${rgba(theme.colors.shadow, 0.5)}`};

  @media only screen and (min-width: 481px) {
    height: 122px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 94px;
  padding: 0 8px;
  overflow: scroll;
  width: calc(100vw - 94px);
  align-items: center;
  background-color: ${({ theme }) => theme.colors.silverDark};
  ${Scrollbar}
  ${ScrollbarAutoHide}

  @media only screen and (min-width: 481px) {
    width: calc(100vw - 136px);
    left: 126px;
  }
`;
