import { Container, Content } from './Card.style';

const Card = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
