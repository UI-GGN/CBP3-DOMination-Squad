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
            <img src={user} style={{ maxWidth: '75%' }} />
          </ImageContainer>
          <NavHeaderTitle>Profile</NavHeaderTitle>
        </ProfileContainer>
        <NavigationHeader>
          <NavHeaderTitle>Main Navigation</NavHeaderTitle>
        </NavigationHeader>
        <NavBar>
          <NavBarOption
            isSelected={selected === 'Requests'}
            onClick={() => {
              onPress('Requests');
            }}
          >
            Requests
          </NavBarOption>
          <NavBarOption
            isSelected={selected === 'Routes'}
            onClick={() => {
              onPress('Routes');
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
