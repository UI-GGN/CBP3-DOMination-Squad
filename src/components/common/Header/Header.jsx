import thoughtworks_logo from '../../../assets/thoughtworks-logo-dark.svg';
import { Container, Content, Logo, LogoImage, NavBar, NavBarOption, LogoutButton } from './Header.style';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const Header = ({ selected, onPress }) => {
  const navigate = useNavigate();
  const signOut = useSignOut();

  return (
    <Container data-testid="container">
      <Content>
        <Logo>
          <LogoImage src={thoughtworks_logo} style={{ fill: 'red' }} />
        </Logo>
        <NavBar>
          <NavBarOption
            isSelected={selected === 'REQUESTS'}
            onClick={() => {
              onPress('REQUESTS');
            }}
            data-testid="nav-option-requests"
          >
            Requests
          </NavBarOption>
          <NavBarOption
            isSelected={selected === 'ABOUT'}
            onClick={() => {
              onPress('ABOUT');
            }}
            data-testid="header-nav-option-about"
          >
            About
          </NavBarOption>
        </NavBar>
        <LogoutButton
          onClick={() => {
            () => {
              signOut();
            };
            navigate('/login');
          }}
        >
          Log out
        </LogoutButton>
      </Content>
      {/* <HorizontalLine /> */}
    </Container>
  );
};

export default Header;