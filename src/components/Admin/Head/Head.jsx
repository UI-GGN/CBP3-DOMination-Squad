import user from '../../../assets/user.png';
import {
  Container,
  ProfileContainer,
  ImageContainer,
  AccessContainer,
  AccessTitle,
  NavigationContainer,
  NavigationHeader,
  NavHeaderTitle,
  NavBar,
  NavBarOption,
} from './Head.style';

const Header = ({ selected, onPress }) => {
  return (
    <Container>
      <NavigationContainer>
        <AccessContainer>
          <AccessTitle>Admin Access</AccessTitle>
        </AccessContainer>
        <ProfileContainer>
          <ImageContainer>
            <img src={user} style={{ maxWidth: '60%' }} />
          </ImageContainer>
          <NavHeaderTitle>Profile</NavHeaderTitle>
        </ProfileContainer>
        <NavigationHeader>
          <NavHeaderTitle>MAIN NAVIGATION</NavHeaderTitle>
        </NavigationHeader>
        <NavBar>
          <NavBarOption
            isSelected={selected === 'REQUESTS'}
            onClick={() => {
              onPress('REQUESTS');
            }}
          >
            Requests
          </NavBarOption>
          <NavBarOption
            isSelected={selected === 'ROUTES'}
            onClick={() => {
              onPress('ROUTES');
            }}
          >
            Routes
          </NavBarOption>
        </NavBar>
      </NavigationContainer>
    </Container>
  );
};

export default Header;
