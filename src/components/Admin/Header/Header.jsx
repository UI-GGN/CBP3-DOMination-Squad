import Logo from '../../../assets/taxi.png';
import { Container, Title, Button } from './Header.style';
import { useNavigate } from 'react-router-dom';

const Header = ({ headerTitle }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex flex-row h-10 ml-3 w-full justify-start">
        <div className="text-base mt-2 mr-1">onTrack</div>
        <img className="h-10 w-10 mr-2" src={Logo} />
      </div>

      <div className="flex flex-row justify-between items-center">
        <Title>{headerTitle}</Title>
        <Button
          onClick={() => {
            navigate('/login');
          }}
        >
          Log out
        </Button>
      </div>
    </Container>
  );
};

export default Header;
