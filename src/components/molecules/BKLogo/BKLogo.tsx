import React from 'react';
import styled from 'styled-components';

import { SectionItemType } from '../../../../types';
import { Text } from 'components/atoms/Text';
import { Link } from 'react-router-dom';

export function BKLogo() {
  return (
    <Link to={'/'}>
      <Container>
        <Image
          src={process.env.PUBLIC_URL + `/images/bk-logo.png`}
          alt="Burguer King logo"
        />
        <Title color="red">Menu</Title>
        <Marker />
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  padding: 16px 12px 0;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.silverDark};
`;

const Image = styled.img`
  display: flex;
  width: 102px;
  height: 64px;
  border-radius: 6px;
`;

const Title = styled(Text.UpperCaseBoldLarge)`
  text-align: center;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: visible;
  overflow: visible;
`;

const Marker = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 4000px;
  height: 4px;
  width: 64px;
`;
