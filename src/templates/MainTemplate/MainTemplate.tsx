import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

export default function MainTemplate({
  children,
}: Props) {
  return (
      <Container>
        <main>{children}</main>
      </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
`;
