import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import { useMenu } from 'api/menu';
import { useSections } from 'api/sections';
import { CarouselItem } from 'components/molecules/CarouselItem';
import { getMenuSectionInfo } from 'utils/apiHelpers';

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

  return (
    <>
      {menuOptions && sections && (
        <Container>
          {menuOptions?.map((menuOption) => {
            return (
              <CarouselItem
                key={menuOption._key}
                section={getMenuSectionInfo(menuOption._ref, sections)}
              />
            );
          })}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0 24px;
  overflow: scroll;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.silverDark};
  cursor: pointer;
`;
