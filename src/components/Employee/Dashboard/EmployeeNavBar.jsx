import thoughtworks_logo from '../../../assets/thoughtworks-logo-dark.svg';
import { pink } from '../../colors.json';
import { Container, Content, Logo, LogoImage, LogoutButton, NavBar } from '../../common/Header/Header.style.jsx';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const EmployeeNavBar = () => {
  const navigate = useNavigate();
  const signOut = useSignOut();

  return (
    <Container>
      <Content>
        <NavBar style={{ justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <Logo>
            <LogoImage src={thoughtworks_logo} />
          </Logo>
          <LogoutButton
            color={pink}
            bgColor={pink}
            onClick={() => {
              signOut();
              navigate('/login');
            }}
          >
            Log out
          </LogoutButton>
        </NavBar>
      </Content>
    </Container>
  );
};

export default EmployeeNavBar;
