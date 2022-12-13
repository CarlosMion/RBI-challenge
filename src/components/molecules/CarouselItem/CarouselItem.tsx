import { SectionItemType } from '../../../../types';
import { useParams } from 'react-router-dom';
import { Container, LinkContainer, Image, Title } from './CarouselItem.styled';

type Props = {
  section?: SectionItemType;
};

export function CarouselItem({ section }: Props) {
  const { selectedSection } = useParams<{ selectedSection: string }>();

  const isSelectedSection = selectedSection === section?._id;

  return (
    <LinkContainer to={section!._id} data-testid="carousel-item">
      <Container isSectionSelected={isSelectedSection}>
        <Image
          src={
            process.env.PUBLIC_URL +
            `/images/${section?.carouselImage.asset._ref}`
          }
          alt={section?.name.en || ''}
        />
        <Title>{section?.name.en}</Title>
      </Container>
    </LinkContainer>
  );
}
