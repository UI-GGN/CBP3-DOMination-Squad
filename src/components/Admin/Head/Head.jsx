import user from '../../../assets/user.png';
import {
  Container,
  ProfileContainer,
  ImageContainer,
  AccessContainer,
  AccessTitle,
  NavigationContainer,
  HorizontalLine,
  NavHeaderTitle,
  NavBar,
  NavBarOption,
  LogoutButton,
} from './Head.style';
import { useNavigate } from 'react-router-dom';

const Header = ({ selected, onPress }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavigationContainer>
        <AccessContainer>
          <AccessTitle>Admin Access</AccessTitle>
        </AccessContainer>
        <HorizontalLine />
        <ProfileContainer>
          <ImageContainer>
            <img src={user} style={{ maxWidth: '60%' }} />
          </ImageContainer>
          <NavHeaderTitle>Hi Vinod!</NavHeaderTitle>
        </ProfileContainer>
        <HorizontalLine />
        <NavBar>
          <NavBarOption
            isSelected={selected === 'REQUESTS'}
            onClick={() => {
              onPress('REQUESTS');
            }}
          >
            Requests
          </NavBarOption>
          <HorizontalLine />
          <NavBarOption
            isSelected={selected === 'ROUTES'}
            onClick={() => {
              onPress('ROUTES');
            }}
          >
            Routes
          </NavBarOption>
          <HorizontalLine />
        </NavBar>
      </NavigationContainer>
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
