import { ItemCard } from 'components/molecules/ItemCard';
import { ItemType } from '../../../../types';
import { ItemsContainer } from './ItemsGrid.styled';

type Props = {
  items?: Array<ItemType>;
};

export function ItemsGrid({ items }: Props) {
  const itemList = items?.map((product, index) => {
    return <ItemCard key={index} item={product} />;
  });

  return <ItemsContainer data-testid="items-grid">{itemList}</ItemsContainer>;
}
