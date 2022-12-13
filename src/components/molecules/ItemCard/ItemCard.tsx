import { IconChevronRight } from 'components/atoms/icons';
import { ItemType } from '../../../../types';
import {
  Button,
  ButtonContainer,
  Container,
  ImageContainer,
  Title,
  TitleContainer,
  Image,
} from './ItemCard.styled';

type Props = {
  item?: ItemType;
};

export function ItemCard({ item }: Props) {
  return (
    <Container data-testid="item-card">
      <ImageContainer>
        <Image
          src={process.env.PUBLIC_URL + `/images/${item?.image.asset._ref}`}
          alt={item?.name.en || ''}
        />
      </ImageContainer>
      <TitleContainer>
        <Title color="primaryDark">{item?.name.en}</Title>
      </TitleContainer>
      <ButtonContainer>
        <Button>
          <IconChevronRight />
        </Button>
      </ButtonContainer>
    </Container>
  );
}
