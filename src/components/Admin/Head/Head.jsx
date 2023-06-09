import close from '../../../assets/close.png';
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

const Header = ({ selected, onPress, onHeaderClose }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavigationContainer>
        <AccessContainer>
          <img
            src={close}
            style={{ height: 18, alignSelf: 'end', cursor: 'pointer' }}
            onClick={() => onHeaderClose()}
          />
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
