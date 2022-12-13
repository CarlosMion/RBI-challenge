import { Link } from 'react-router-dom';
import { Container, Marker, Title, Image } from './BKLogo.styled';

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
