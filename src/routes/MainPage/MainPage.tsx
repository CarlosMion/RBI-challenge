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
import GridSkeleton from 'components/molecules/Skeletons/GridSkeleton';
import { useMenu } from 'api/menu';
import { Button } from 'components/molecules/Button';
import { Footer } from 'components/organisms/Footer';
import { ButtonsContainer, Container } from './MainPage.styled';

export default function MainPage() {
  const { selectedSection } = useParams<{ selectedSection: string }>();

  const { menuOptions } = useMenu();

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
        <ButtonsContainer>
          <Button variant="outline">en espanol</Button>
          <Button variant="outline">have a coupon?</Button>
        </ButtonsContainer>
        <Footer />
      </Container>
    </MainTemplate>
  );
}
