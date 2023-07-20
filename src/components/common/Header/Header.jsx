import thoughtworks_logo from '../../../assets/thoughtworks-logo-dark.svg';
import { Container, Content, Logo, LogoImage, NavBar, NavBarOption, LogoutButton } from './Header.style';

const Header = ({ selected, onPress }) => {
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
        <LogoutButton>Log out</LogoutButton>
      </Content>
      {/* <HorizontalLine /> */}
    </Container>
  );
};

export default Header;
