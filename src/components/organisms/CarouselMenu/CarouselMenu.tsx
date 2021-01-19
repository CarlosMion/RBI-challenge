import React from 'react';
import styled from 'styled-components';

import { useMenu } from 'api/menu';
import { useSections } from 'api/sections';
import { CarouselItem } from 'components/molecules/CarouselItem';
import { getMenuSectionInfo } from 'utils/apiHelpers';
import { BKLogo } from 'components/molecules/BKLogo';
import { Scrollbar, ScrollbarAutoHide } from '../../styles';
import { rgba } from 'polished';
import MenuSkeleton from 'components/Skeletons/MenuSkeleton';

export function CarouselMenu() {
  const {
    menuOptions,
    error: menuError,
    isFetching: menuIsFetching,
  } = useMenu();

  const {
    sections,
    error: sectionsError,
    isFetching: sectionsAreFetching,
  } = useSections();

  const isLoading = menuIsFetching && sectionsAreFetching;

  return (
    <>
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
    </>
  );
}

const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: scroll;
  background-color: ${({ theme }) => theme.colors.silverDark};
  ${Scrollbar}
  ${ScrollbarAutoHide}
`;

const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 122px;
  z-index: 1;
  box-shadow: ${({ theme }) =>
    `8px 0px 10px -5px ${rgba(theme.colors.shadow, 0.5)}`};
`;

const CaroulselContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 100px;
  padding: 0 24px;
  overflow: scroll;
  width: calc(100vw - 102px);
  align-items: center;
  background-color: ${({ theme }) => theme.colors.silverDark};
  ${Scrollbar}
  ${ScrollbarAutoHide}
`;
