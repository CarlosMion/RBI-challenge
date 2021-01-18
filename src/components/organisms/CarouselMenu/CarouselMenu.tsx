import React, { useContext } from 'react';
import styled from 'styled-components';

import { Text } from 'components/atoms/Text';
import { useMenu } from 'api/menu';


// type Props = {
//   imageRef: string;
//   title: string;
//   secionKey: string;
// };

// { imageRef, title, secionKey }: Props

export function CarouselMenu() {

  const {
    menuOptions,
    error: menuError,
    isFetching: menuIsFetching,
  } = useMenu();

  return (
      <Container>
        {}
      </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0 24px;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.silverDark};
  cursor: pointer;
`;
