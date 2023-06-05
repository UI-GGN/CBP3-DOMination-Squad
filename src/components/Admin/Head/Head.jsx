import { Container, LogoutButton, Title } from './Head.style';
import { useNavigate } from 'react-router-dom';

const Header = ({ selected }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>onTrack</Title>
      <LogoutButton
        isSelected={selected === 'Home'}
        onClick={() => {
          navigate('/login');
        }}
      >
        Log out
      </LogoutButton>
    </Container>
  );
};

export default Header;
