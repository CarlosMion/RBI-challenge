import { useMenu } from 'api/menu';
import { useSections } from 'api/sections';
import { CarouselItem } from 'components/molecules/CarouselItem';
import { getMenuSectionInfo } from 'utils/apiHelpers';
import { BKLogo } from 'components/molecules/BKLogo';
import MenuSkeleton from 'components/molecules/Skeletons/MenuSkeleton';
import {
  CarouselContainer,
  Container,
  LogoContainer,
  SkeletonContainer,
} from './CarouselMenu.styled';

export function CarouselMenu() {
  const { menuOptions, isFetching: menuIsFetching } = useMenu();

  const { sections, isFetching: sectionsAreFetching } = useSections();

  const isLoading = menuIsFetching && sectionsAreFetching;

  return (
    <Container data-testid="carousel-menu">
      <LogoContainer>
        <BKLogo />
      </LogoContainer>
      {isLoading && (
        <SkeletonContainer>
          <MenuSkeleton />
        </SkeletonContainer>
      )}
      {menuOptions && sections && !isLoading && (
        <CarouselContainer>
          {menuOptions?.map((menuOption) => {
            return (
              <CarouselItem
                key={menuOption._key}
                section={getMenuSectionInfo(menuOption._ref, sections)}
              />
            );
          })}
        </CarouselContainer>
      )}
    </Container>
  );
}
