import thoughtworks_logo from '../../../assets/thoughtworks-logo-dark.svg';
import { pink } from '../../colors.json';
import ConfirmationModal from '../../common/ConfirmationModal/index.js';
import { Content, Logo, LogoImage, LogoutButton } from '../../common/Header/Header.style.jsx';
import { NavBarContainer, NavBar } from './EmployeeNavBar.style.jsx';
import { Modal } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const EmployeeNavBar = () => {
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
    signOut();
    navigate('/login');
  };
  const onModalClose = () => {
    setIsVisible(false);
  };

  return (
    <NavBarContainer>
      <Modal open={isVisible} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div style={style}>
          <ConfirmationModal onClose={onModalClose} onConfirm={onLogout} confirmText="Log out" />
        </div>
      </Modal>
      <Content>
        <NavBar>
          <Logo>
            <LogoImage src={thoughtworks_logo} />
          </Logo>
          <LogoutButton color={pink} bgColor={pink} onClick={() => onLogoutPress()}>
            Log out
          </LogoutButton>
        </NavBar>
      </Content>
    </NavBarContainer>
  );
};

export default EmployeeNavBar;
