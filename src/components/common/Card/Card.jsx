import { Container } from './Card.style';

const Card = ({ children, className, color, width }) => {
  return (
    <Container className={className} color={color} width={width}>
      {children}
    </Container>
  );
};

export default Card;
