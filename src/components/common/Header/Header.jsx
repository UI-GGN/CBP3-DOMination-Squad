import thoughtworks_logo from '../../../assets/thoughtworks-logo-dark.svg';
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';
import { pink } from './../../colors.json';
import { Container, Content, Logo, LogoImage, NavBar, NavBarOption, LogoutButton } from './Header.style';
import { Modal } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const Header = ({ selected, onPress }) => {
  const navigate = useNavigate();
  const signOut = useSignOut();
  const [isVisible, setIsVisible] = useState(false);

  const matchesPhone = useMediaQuery('(max-width:800px)');

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: matchesPhone ? '60%' : '20%',
    backgroundColor: 'white',
    borderRadius: 20,
    boxShadow: 24,
    outline: 0,
  };

  const onLogoutPress = () => {
    setIsVisible(true);
  };

  const onLogout = () => {
    () => {
      signOut();
    };
    navigate('/login');
  };

  const onModalClose = () => {
    setIsVisible(false);
  };

  return (
    <Container data-testid="container">
      <Modal
        open={isVisible}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <ConfirmationModal onClose={onModalClose} onConfirm={onLogout} confirmText="Log out" />
        </div>
      </Modal>
      <Content>
        <Logo>
          <LogoImage src={thoughtworks_logo} />
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
            isSelected={selected === 'VENDORS'}
            onClick={() => {
              onPress('VENDORS');
            }}
            data-testid="header-nav-option-vendors"
          >
            Vendors
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
        <LogoutButton color={pink} bgColor={pink} onClick={() => onLogoutPress()}>
          Log out
        </LogoutButton>
      </Content>
    </Container>
  );
};

export default Header;
