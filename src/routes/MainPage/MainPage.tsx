import React from 'react';

import MainTemplate from '../../templates/MainTemplate';
import styled from 'styled-components';
import { Text } from '../../components/atoms/Text';

export default function MainPage() {
  return (
    <MainTemplate>
      <Container>
        <Text.UpperCaseBoldXLarge>Hello RBI :)</Text.UpperCaseBoldXLarge>
      </Container>
    </MainTemplate>
  );
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
