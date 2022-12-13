import { ReactNode } from 'react';
import { Container } from './MainTemplate.styled';

type Props = {
  children?: ReactNode;
};

export default function MainTemplate({ children }: Props) {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
}
