import React, { useContext } from 'react';
import styled from 'styled-components';

import { Text } from 'components/atoms/Text';

import { rgba } from 'polished';
import { IconClose } from '../icons';
import { CartProductType } from '../../../types';
import { Link } from 'react-router-dom';
import { CartContext } from 'context/CartContext';
import { ProductImage } from '../ProductImage';
import { QuantityPicker } from 'components/QuantityPicker';

type Props = {
  product: CartProductType;
};

export function FloatingProductCard({ product }: Props) {
  const { increaseProduct, deductProduct, removeProduct } = useContext(
    CartContext
  );

  const productUrl = `/categoria/${product.categoryId}/sub-categoria/${product.subCategoryId}/sub-sub-categoria/${product.subSubCategoryId}/produto/${product.id}`;

  function removeProductFromCart(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    removeProduct(product.id);
  }

  return (
    <Link to={productUrl}>
      <Container>
        <ImgContainer>
          <ProductImage image={product.image} variant="cart" />
        </ImgContainer>
        <Column>
          <TitleRow>
            <Title>{product.name}</Title>
            <ClickableIcon onClick={removeProductFromCart}>
              <IconClose size="24px" color="iron" />
            </ClickableIcon>
          </TitleRow>
          <NumbersRow>
            <QuantityPicker
              value={product.amount}
              maxValue={product.availableUnits}
              onClickMinus={() => deductProduct(product.id)}
              onClickPlus={() => increaseProduct(product.id)}
              variant="small"
            />
            <Price>R$ {product.price}</Price>
          </NumbersRow>
        </Column>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  padding: 24px 20px;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => rgba(theme.colors.white, 0.5)};
  border-bottom: 0.5px solid ${({ theme }) => rgba(theme.colors.shadow, 0.2)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.purpleLight, 0.05)};
  }
`;

const ImgContainer = styled.div`
  min-height: 80px;
  min-width: 80px;
  max-height: 80px;
  max-width: 80px;
  border: 1px solid ${({ theme }) => rgba(theme.colors.iron, 0.2)};
  border-radius: 8px;
`;

const Column = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 14px;
`;

const TitleRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled(Text.NunitoBold18)`
  color: ${({ theme }) => theme.colors.iron};
  width: 100%;
`;

const ClickableIcon = styled.button`
  background: transparent;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const NumbersRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled(Text.NunitoBoldBig)`
  color: ${({ theme }) => theme.colors.purple};
`;
