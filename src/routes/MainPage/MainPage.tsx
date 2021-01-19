import React from 'react';
import styled from 'styled-components';

import MainTemplate from '../../templates/MainTemplate';
import { Text } from 'components/atoms/Text';
import { CarouselMenu } from 'components/organisms/CarouselMenu';

export default function MainPage() {
  return (
    <MainTemplate>
      <Container>
        <CarouselMenu />
      </Container>
    </MainTemplate>
  );
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
