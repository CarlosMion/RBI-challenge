import React from 'react';
import styled from 'styled-components';

import { useMenu } from 'api/menu';
import { useSections } from 'api/sections';
import { CarouselItem } from 'components/molecules/CarouselItem';
import { getMenuSectionInfo } from 'utils/apiHelpers';
import { BKLogo } from 'components/molecules/BKLogo';
import { Scrollbar, ScrollbarAutoHide } from '../../styles';
import { rgba } from 'polished';
import MenuSkeleton from 'components/molecules/Skeletons/MenuSkeleton';

export function CarouselMenu() {
  const { menuOptions, isFetching: menuIsFetching } = useMenu();

  const { sections, isFetching: sectionsAreFetching } = useSections();

  const isLoading = menuIsFetching && sectionsAreFetching;

  return (
    <Container>
      <LogoContainer>
        <BKLogo />
      </LogoContainer>
      {isLoading && (
        <SkeletonContainer>
          <MenuSkeleton />
        </SkeletonContainer>
      )}
      {menuOptions && sections && !isLoading && (
        <CaroulselContainer>
          {menuOptions?.map((menuOption) => {
            return (
              <CarouselItem
                key={menuOption._key}
                section={getMenuSectionInfo(menuOption._ref, sections)}
              />
            );
          })}
        </CaroulselContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;

const SkeletonContainer = styled.div`
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

const LogoContainer = styled.div`
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

const CaroulselContainer = styled.div`
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
