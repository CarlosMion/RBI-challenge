import React from 'react';
import styled from 'styled-components';

import MainTemplate from '../../templates/MainTemplate';
import { CarouselMenu } from 'components/organisms/CarouselMenu';
import { useSections } from 'api/sections';
import { useItems } from 'api/items';
import { useParams } from 'react-router-dom';
import { getItemsToBeShown, getMenuSectionInfo } from 'utils/apiHelpers';
import { ItemsGrid } from 'components/organisms/ItemsGrid';
import { Scrollbar, ScrollbarAutoHide } from 'components/styles';

export default function MainPage() {
  const { selectedSection } = useParams<{ selectedSection: string }>();

  const { sections, isFetching: sectionsAreFetching } = useSections();

  const { items, isFetching: itemsAreFetching } = useItems();

  const isLoadingItems = sectionsAreFetching && itemsAreFetching;

  const currentSection =
    sections && getMenuSectionInfo(selectedSection, sections); // if current section is undefined, load sections

  const itemsToBeShown = currentSection
    ? getItemsToBeShown(currentSection, items)
    : [];

  console.log(itemsToBeShown);

  return (
    <MainTemplate>
      <CarouselMenu />
      <Container>
        {isLoadingItems ? (
          <div>loading</div>
        ) : (
          <ItemsGrid items={itemsToBeShown} />
        )}
      </Container>
    </MainTemplate>
  );
}

export const Container = styled.div`
  padding-top: 156px;
  background-color: ${({ theme }) => theme.colors.cloud};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Scrollbar}
  ${ScrollbarAutoHide}
`;
