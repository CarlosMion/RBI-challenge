import React, { useContext } from 'react';
import styled from 'styled-components';

import { Text } from 'components/atoms/Text';
import { Link } from 'react-router-dom';


type Props = {
  imageRef: string;
  title: string;
  secionKey: string;
};

export function CarouselItem({ imageRef, title, secionKey }: Props) {

  return (
    <Link to={secionKey}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.silverDark};
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.silverDarkHover};
  }
`;


const Title = styled(Text.UpperCaseBoldLarge)`
  width: 100%;
  text-align: center;
`;
