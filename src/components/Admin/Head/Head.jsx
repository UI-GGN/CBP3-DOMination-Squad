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
    <Container>
      <AccessContainer>
        <CrossContainer>
          <CrossImage src={close} onClick={() => onHeaderClose()} />
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
            {/* <NavBarOption
            isSelected={selected === 'ROUTES'}
            onClick={() => {
              onPress('ROUTES');
            }}
          >
            Routes
          </NavBarOption>
          <HorizontalLine /> */}
          </NavBar>
        </Sections>
        <LogoutButton
          isSelected={selected === 'Home'}
          onClick={() => {
            navigate('/login');
          }}
        >
          Log out
        </LogoutButton>
      </NavigationContainer>
    </Container>
  );
};

export default Header;
