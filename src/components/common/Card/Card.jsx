import { Container } from './Card.style';

const Card = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Card;
