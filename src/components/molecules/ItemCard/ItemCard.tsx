import React, { useContext } from 'react';
import styled from 'styled-components';

import { Text } from 'components/atoms/Text';
import { rgba } from 'polished';
import { IconChevronRight } from 'components/atoms/icons';
import { ItemType } from '../../../../types';

type Props = {
  item?: ItemType;
};

export function ItemCard({ item }: Props) {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={process.env.PUBLIC_URL + `/images/${item?.image.asset._ref}`}
          alt={item?.name.en || ''}
        />
      </ImageContainer>
      <TitleContainer>
        <Title>{item?.name.en}</Title>
      </TitleContainer>
      <ButtonContainer>
        <Button>
          <IconChevronRight />
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: table-cell;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => `0 0 10px ${rgba(theme.colors.shadow, 0.8)}`};
  border-radius: 20px;
  width: 164px;
  height: 220px;

  @media only screen and (min-width: 481px) {
    width: 220px;
    height: 280px;
  }

  @media only screen and (min-width: 1025px) {
    width: 348px;
    height: 428px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin: -1px;
  align-items: center;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  width: 164px;
  height: 140px;
  justify-content: center;
  border-radius: 20px 20px 0 0;

  @media only screen and (min-width: 481px) {
    width: 220px;
    height: 188px;
  }

  @media only screen and (min-width: 1025px) {
    width: 348px;
    height: 320px;
  }
`;

const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border-radius: 20px 20px 0 0;
  transform: translateX(1px);
`;
const TitleContainer = styled.div`
  display: flex;
  padding: 12px 40px 0 12px;
  align-items: flex-start;
  justify-content: flex-start;

  @media only screen and (min-width: 481px) {
    padding-right: 80px;
  }

  @media only screen and (min-width: 1025px) {
    padding-right: 140px;
  }
`;

const Title = styled(Text.UpperCaseBoldXLarge)`
  width: 100%;
  text-align: start;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;

  @media only screen and (min-width: 481px) {
    font-size: ${({ theme }) => theme.fontSizes.xLarge}px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 6px;
  right: 6px;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;

  @media only screen and (min-width: 481px) {
    bottom: 8px;
    right: 8px;
  }

  @media only screen and (min-width: 1025px) {
    bottom: 12px;
    right: 12px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;
