import React from 'react';
import styled from 'styled-components';

import MainTemplate from '../../templates/MainTemplate';
import { CarouselMenu } from 'components/organisms/CarouselMenu';
import { useSections } from 'api/sections';
import { useItems } from 'api/items';
import { useParams } from 'react-router-dom';
import {
  getItemsToBeShown,
  getMenuSectionInfo,
  getSectionItemsToBeShown,
} from 'utils/apiHelpers';
import { ItemsGrid } from 'components/organisms/ItemsGrid';
import { Scrollbar, ScrollbarAutoHide } from 'components/styles';
import GridSkeleton from 'components/molecules/Skeletons/GridSkeleton';
import { useMenu } from 'api/menu';

export default function MainPage() {
  const { selectedSection } = useParams<{ selectedSection: string }>();

  const { menuOptions, isFetching: menuIsFetching } = useMenu();

  const { sections, isFetching: sectionsAreFetching } = useSections();

  const { items, isFetching: itemsAreFetching } = useItems();

  const isLoadingItems = sectionsAreFetching && itemsAreFetching;

  const currentSection =
    sections && getMenuSectionInfo(selectedSection, sections);

  const itemsToBeShown = currentSection
    ? getItemsToBeShown(currentSection, items)
    : getSectionItemsToBeShown(menuOptions, sections);

  return (
    <MainTemplate>
      <CarouselMenu />
      <Container>
        {isLoadingItems ? (
          <GridSkeleton />
        ) : (
          <ItemsGrid items={itemsToBeShown} />
        )}
      </Container>
    </MainTemplate>
  );
}

export const Container = styled.div`
  padding-top: 116px;
  background-color: ${({ theme }) => theme.colors.cloud};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Scrollbar}
  ${ScrollbarAutoHide}

  @media only screen and (min-width: 481px) {
    padding-top: 156px;
  }
`;
