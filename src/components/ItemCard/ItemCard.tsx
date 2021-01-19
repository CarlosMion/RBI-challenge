import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Text } from 'components/atoms/Text';
import { rgba } from 'polished';
import { IconChevronRight } from 'components/icons';
import { ItemType } from '../../../types';
import { useWindowSize } from 'utils/windowSize';

type Props = {
  item?: ItemType;
};

export function ItemCard({ item }: Props) {
  const cardSize = useWindowSize().width / 4;

  console.log(cardSize);

  return (
    <Container
      initial={{
        width: `${cardSize}px`,
        height: `${cardSize + 60}px`,
      }}
      animate={{
        width: `${cardSize}px`,
        height: `${cardSize + 60}px`,
      }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/${item?.image.asset._ref}`}
        alt={item?.name.en || ''}
      />
      <InfoContainer
        initial={{
          width: `${cardSize}px`,
        }}
        animate={{
          width: `${cardSize}px`,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <TitleContainer>
          <Title>{item?.name.en}</Title>
        </TitleContainer>
        <ButtonContainer>
          <Button>
            <IconChevronRight />
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: table-cell;
  box-shadow: ${({ theme }) => `0 0 10px ${rgba(theme.colors.shadow, 0.8)}`};
  border-radius: 8px;
  cursor: pointer;
`;

const Image = styled.img`
  display: flex;
  width: 64px;
  height: 64px;
  border-radius: 6px;
`;

const InfoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  padding: 4px;
`;

const Title = styled(Text.UpperCaseBoldXLarge)`
  width: 100%;
  text-align: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
