import close from '../../../assets/close.png';
import user from '../../../assets/user.png';
import {
  Container,
  AccessContainer,
  CrossContainer,
  NavigationContainer,
  Sections,
  ProfileContainer,
  ImageContainer,
  CrossImage,
  AccessTitle,
  ProfileImage,
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
    <Container data-testid="main">
      <AccessContainer>
        <CrossContainer>
          <CrossImage src={close} onClick={() => onHeaderClose()} data-testid="header-close" />
        </CrossContainer>
        <AccessTitle>Admin Access</AccessTitle>
      </AccessContainer>
      <HorizontalLine />
      <NavigationContainer>
        <Sections>
          <ProfileContainer>
            <ImageContainer>
              <ProfileImage src={user} />
            </ImageContainer>
            <NavHeaderTitle data-testid="profile-title">Hi Vinod!</NavHeaderTitle>
          </ProfileContainer>
          <HorizontalLine />
          <NavBar>
            <NavBarOption
              isSelected={selected === 'REQUESTS'}
              onClick={() => {
                onPress('REQUESTS');
              }}
              data-testid="header-nav-option-requests"
            >
              Requests
            </NavBarOption>
            <HorizontalLine />
            {/* <NavBarOption
              isSelected={selected === 'ROUTES'}
              onClick={() => {
                onPress('ROUTES');
              }}
              data-testid="header-nav-option-routes"
            >
              Routes
            </NavBarOption>
          <HorizontalLine /> */}
          </NavBar>
        </Sections>
        <LogoutButton
          onClick={() => {
            navigate('/login');
          }}
          data-testid="header-logout-button"
        >
          Log out
        </LogoutButton>
      </NavigationContainer>
    </Container>
  );
};

export default Header;
