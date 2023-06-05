import { Container } from './Card.style';

const Card = ({ children, className, color }) => {
  return (
    <Container className={className} color={color}>
      {children}
    </Container>
  );
};

export default Card;
